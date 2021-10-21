package com.chopaki.mtp.entry;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ExecutionException;

@Service
public class EntryRepository {
    CollectionReference db = FirestoreClient.getFirestore().collection("entries");

    public List<Entry> findByDescriptionShortContaining(String query) {
        List<Entry> results = new ArrayList<>();
        try {
            ApiFuture<QuerySnapshot> future = db.orderBy("descriptionShort").startAt(query).endAt(query + "~").get();
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();
            for (QueryDocumentSnapshot doc: documents) {
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
