package com.chopaki.mtp.controller;

import com.chopaki.mtp.model.Entry;
import com.chopaki.mtp.service.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EntryController {
    @Autowired
    EntryService entryService;

    @GetMapping(path = "search")
    public Optional<List<Entry>> search(@RequestParam String query) {
        return entryService.search(query);
    }

    @GetMapping(path = "entry")
    public Optional<Entry> getEntry(@RequestBody Entry entry) {
        return entryService.getEntry(entry);
    }

    @PostMapping(path = "entry")
    public void postEntry(@RequestBody Entry entry) {
        entryService.postEntry(entry);
    }
}
