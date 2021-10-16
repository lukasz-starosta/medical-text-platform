package com.chopaki.mtp.entry;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class EntryService{
    private final EntryRepository entryRepository;

    public List<Entry> search(String query) {
        log.info("Searching for entry");
        return entryRepository.findByDescriptionShortContaining(query).orElse(new ArrayList<>());
    }

    public Entry postEntry(Entry entry) {
        log.info("Posting entry");
        entry.setEntryDate(LocalDate.now());
        entryRepository.save(entry);
        return entry;
    }

    public Entry getEntry(Long entryId) {
        log.info("Getting entry");
        return entryRepository.findById(entryId).orElse(new Entry());
    }
}
