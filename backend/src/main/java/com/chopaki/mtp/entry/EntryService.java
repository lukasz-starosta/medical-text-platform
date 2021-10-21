package com.chopaki.mtp.entry;

import com.google.cloud.Timestamp;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class EntryService{
    private final EntryRepository entryRepository;

    public List<Entry> search(String query) {
        log.info("Searching for entry");
        return entryRepository.findByDescriptionShortContaining(query);
    }

    public Entry postEntry(Entry entry) {
        log.info("Posting entry");
        entry.setId(UUID.randomUUID().toString());
        entry.setEntryDate(Timestamp.now());
        entryRepository.save(entry);
        return entry;
    }

    public Entry getEntry(UUID entryId) {
        log.info("Getting entry");
        return entryRepository.findById(entryId);
    }
}
