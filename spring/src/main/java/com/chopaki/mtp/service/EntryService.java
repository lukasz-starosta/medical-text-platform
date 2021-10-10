package com.chopaki.mtp.service;

import com.chopaki.mtp.model.Entry;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface EntryService {
    List<Entry> search(String query);
    Entry postEntry(Entry entry);
    Entry getEntry(Entry entry);
}
