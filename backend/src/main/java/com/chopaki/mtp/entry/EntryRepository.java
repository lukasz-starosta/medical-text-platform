package com.chopaki.mtp.entry;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ExecutionException;

@Service
@Slf4j
public class EntryRepository {
    private Firestore firestore;
    private CollectionReference db;

    @Autowired
    public EntryRepository(Firestore firestore) {
        this.firestore = firestore;
        this.db = firestore.collection("entries");
    }

    public List<Entry> findByKeyword(String keyword) {
        List<Entry> results = new ArrayList<>();
        getKeywords("problems", keyword, results);
        getKeywords("treatments", keyword, results);
        getKeywords("tests", keyword, results);
        return results;
    }

    private void getKeywords(String array, String keyword, List<Entry> results) {
        ApiFuture<QuerySnapshot> future = db.whereArrayContains(array, keyword).get();
        try {
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();
            for (QueryDocumentSnapshot doc : documents) {
                results.add(doc.toObject(Entry.class));
            }
        } catch (ExecutionException | InterruptedException e) {
            e.printStackTrace();
        }
    }

    public List<Entry> findByDescriptionShortContaining(String query) {
        List<Entry> results = new ArrayList<>();
        try {
            ApiFuture<QuerySnapshot> future = db.orderBy("descriptionShort").startAt(query).endAt(query + "~").get();
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();
            for (QueryDocumentSnapshot doc : documents) {
                results.add(doc.toObject(Entry.class));
            }
        } catch (ExecutionException | InterruptedException e) {
            e.printStackTrace();
        }
        return results;
    }

    public void save(Entry entry) {
        db.document(entry.getId()).set(entry);
    }

    public Entry findById(UUID entryId) {
        try {
            ApiFuture<QuerySnapshot> future = db.whereEqualTo("id", entryId).get();
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();
            if (!documents.isEmpty()) {
                return documents.get(0).toObject(Entry.class);
            }
        } catch (ExecutionException | InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }
}
