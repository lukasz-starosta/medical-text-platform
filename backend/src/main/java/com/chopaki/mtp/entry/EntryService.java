package com.chopaki.mtp.entry;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.cloud.Timestamp;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class EntryService{
    private final EntryRepository entryRepository;
    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public List<Entry> search(String query) {
        log.info("Searching for entry");
        return entryRepository.findByDescriptionShortContaining(query);
    }

    public List<Entry> searchByKeyword(String keyword) {
        log.info("Searching for entry by keyword");
        return entryRepository.findByKeyword(keyword);
    }

    public Entry postEntry(Entry entry) {
        entry.setId(UUID.randomUUID().toString());
        entry.setEntryDate(Timestamp.now());

        log.info("Extracting keywords");
        var headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("text", entry.getDescriptionLong());
        HttpEntity<String> request = new HttpEntity<String>(jsonObject.toString(), headers);

        String rawKeywords = restTemplate.postForObject("http://localhost:5000/nlp/parse", request, String.class);
        extractKeywords(rawKeywords, entry);

        log.info("Posting entry");
        entryRepository.save(entry);
        return entry;
    }

    public Entry getEntry(UUID entryId) {
        log.info("Getting entry");
        return entryRepository.findById(entryId);
    }

    public boolean deleteEntry(UUID entryId) {
        log.info("Deleting entry");
        return entryRepository.deleteById(entryId);
    }

    @SneakyThrows
    private void extractKeywords(String rawKeywords, Entry entry) {
        Set<String> treatments = new HashSet<>();
        Set<String> tests = new HashSet<>();
        Set<String> problems = new HashSet<>();

        JsonNode root = objectMapper.readTree(rawKeywords);
        root = root.get("result");
        if (!root.isEmpty()) {
            var it = root.elements();
            while (it.hasNext()) {
                JsonNode node = it.next();
                switch (node.get("type").textValue()) {
                    case "TREATMENT" : {
                        treatments.add(node.get("text").textValue());
                    } break;
                    case "TEST" : {
                        tests.add(node.get("text").textValue());
                    } break;
                    case "PROBLEM" : {
                        problems.add(node.get("text").textValue());
                    }
                }
            }
        }
        entry.setTreatments(new ArrayList<>(treatments));
        entry.setTests(new ArrayList<>(tests));
        entry.setProblems(new ArrayList<>(problems));
    }
}
