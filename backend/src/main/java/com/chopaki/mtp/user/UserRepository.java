package com.chopaki.mtp.user;
import org.springframework.beans.factory.annotation.Autowired;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class UserRepository {
    private Firestore firestore;
    private CollectionReference db;
    
    @Autowired
    public UserRepository(Firestore firestore) {
        this.firestore = firestore;
        this.db = this.firestore.collection("users");
    }


    public User findByUsername(String username) {
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

    public User findByEmail(String email) {
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

    public User findById(Long id) {
        try {
            ApiFuture<QuerySnapshot> future = db.whereEqualTo("id", id).get();
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();
            if (!documents.isEmpty()) {
                return documents.get(0).toObject(User.class);
            }
        } catch (ExecutionException | InterruptedException e) {
            e.printStackTrace();
        }
        return null;
    }

    public void save(User user) {
        db.document(user.getUsername()).set(user);
    }

    public boolean changePassword(String username, String password) {
        try {
            ApiFuture<QuerySnapshot> future = db.whereEqualTo("username", username).get();
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();
            if (!documents.isEmpty()) {
                documents.get(0).getReference().update("password", password);
                return true;
            }
        } catch (ExecutionException | InterruptedException e) {
            e.printStackTrace();
        }
        return false;
    }
}
