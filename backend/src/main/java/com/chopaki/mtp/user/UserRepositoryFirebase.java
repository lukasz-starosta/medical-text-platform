package com.chopaki.mtp.user;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
@Slf4j
public class UserRepositoryFirebase {
    CollectionReference db = FirestoreClient.getFirestore().collection("users");

    User findByUsername(String username) {
        try {
            ApiFuture<QuerySnapshot> future = db.whereEqualTo("username", username).get();
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();
            if (!documents.isEmpty()) {
                return documents.get(0).toObject(User.class);
            }
        } catch (ExecutionException | InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }

    User findByEmail(String email) {
        try {
            ApiFuture<QuerySnapshot> future = db.whereEqualTo("email", email).get();
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();
            if (!documents.isEmpty()) {
                return documents.get(0).toObject(User.class);
            }
        } catch (ExecutionException | InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }


    User get(String username) {
        User u = new User("testUser", "testUser@gmail.com", "1234", UserRole.USER);
        db.document(u.getUsername()).set(u);
        return u;


//        DocumentReference doc = db.collection("users").document(username);
//        ApiFuture<DocumentSnapshot> fut = doc.get();
//        DocumentSnapshot document = null;
//        try {
//            document = fut.get();
//        } catch (InterruptedException | ExecutionException e) {
//            e.printStackTrace();
//        }
//        if (document.exists()) {
//            User user =  document.toObject(User.class);
//        }
//        return null;
    }
}
