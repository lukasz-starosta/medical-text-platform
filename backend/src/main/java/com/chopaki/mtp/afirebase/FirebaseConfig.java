package com.chopaki.mtp.afirebase;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import com.google.cloud.firestore.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.context.annotation.Bean;
import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.io.FileInputStream;

@Slf4j
@Service
@RequiredArgsConstructor
public class FirebaseConfig {
    private final ResourceLoader resourceLoader;

    @Bean
    public static Firestore initFirebaseFirestore() {
        try {
            log.info("ODPALAM FIREBASE CONFIG");
            InputStream serviceAccount =
            new FileInputStream("classpath:firebaseAdminKey.json");

            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();

            FirebaseApp.initializeApp(options);
            Firestore firestore = FirestoreClient.getFirestore();
            return firestore;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
