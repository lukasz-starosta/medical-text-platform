package com.chopaki.mtp.controller;

import com.chopaki.mtp.model.Entry;
import com.chopaki.mtp.service.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EntryController {
    @Autowired
    EntryService entryService;

    @GetMapping(path = "search")
    public List<Entry> search() {
        return null;
    }

    @GetMapping(path = "entry")
    public Entry getEntry() {
        return null;
    }

    @PostMapping(path = "entry")
    public Boolean postEntry() {
        return null;
    }
}
