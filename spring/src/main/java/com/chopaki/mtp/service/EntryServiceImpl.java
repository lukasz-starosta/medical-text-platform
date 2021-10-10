package com.chopaki.mtp.service;

import com.chopaki.mtp.model.Entry;
import com.chopaki.mtp.repository.EntryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class EntryServiceImpl implements EntryService{
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

    public Entry getEntry(Entry entry) {
        log.info("Getting entry");
        return entryRepository.findById(entry.getId()).orElse(new Entry());
    }
}
