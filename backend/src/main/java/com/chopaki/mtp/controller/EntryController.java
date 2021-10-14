package com.chopaki.mtp.controller;

import com.chopaki.mtp.model.Entry;
import com.chopaki.mtp.service.EntryService;
import com.chopaki.mtp.service.EntryServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RequestMapping("/api/entry")
public class EntryController {
    private final EntryService entryService;

    @GetMapping(path = "search")
    public ResponseEntity<List<Entry>> search(@RequestParam String query) {
        return ResponseEntity.ok().body(entryService.search(query));
    }

    @GetMapping(path = "entry")
    public ResponseEntity<Entry> getEntry(@RequestParam Long entryId) {
        return ResponseEntity.ok().body(entryService.getEntry(entryId));
    }

    @PostMapping(path = "entry")
    public ResponseEntity<Entry> postEntry(@RequestBody Entry entry) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/entry").toUriString());
        return ResponseEntity.created(uri).body(entryService.postEntry(entry));
    }
}
