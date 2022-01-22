package com.chopaki.mtp.entry;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RequestMapping("/api/entry")
public class EntryController {
    private final EntryService entryService;

    @GetMapping(path = "/search")
    public ResponseEntity<List<Entry>> search(@RequestParam String query) {
        return ResponseEntity.ok().body(entryService.search(query));
    }

    @GetMapping(path = "/entry")
    public ResponseEntity<Entry> getEntry(@RequestParam UUID entryId) {
        return ResponseEntity.ok().body(entryService.getEntry(entryId));
    }

    @PostMapping(path = "/entry")
    public ResponseEntity<Entry> postEntry(@RequestBody Entry entry) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/entry").toUriString());
        return ResponseEntity.created(uri).body(entryService.postEntry(entry));
    }

    @GetMapping(path = "/keywords")
    public ResponseEntity<List<Entry>> test(@RequestParam String keyword) {
        return ResponseEntity.ok().body(entryService.searchByKeyword(keyword));
    }

    @DeleteMapping(path = "/entry")
    public ResponseEntity<Boolean> deleteEntry(@RequestParam UUID entryId) {
        return ResponseEntity.ok().body(entryService.deleteEntry(entryId));
    }

    @GetMapping(path = "/entries")
    public ResponseEntity<List<Entry>> getEntriesForUser() {
        return ResponseEntity.ok().body(entryService.getEntriesForUser());
    }
}
