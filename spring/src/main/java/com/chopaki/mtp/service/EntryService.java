package com.chopaki.mtp.service;

import com.chopaki.mtp.model.Entry;
import com.chopaki.mtp.repository.EntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class EntryService {
    @Autowired
    EntryRepository entryRepository;

    public Optional<List<Entry>> search(String query) {
        return entryRepository.findByDescriptionShortContaining(query);
    }

    public void postEntry(Entry entry) {
        entry.setEntryDate(LocalDate.now());
        entryRepository.save(entry);
    }

    public Optional<Entry> getEntry(Entry entry) {
        return entryRepository.findById(entry.getId());
    }
}
