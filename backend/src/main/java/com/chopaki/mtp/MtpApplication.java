package com.chopaki.mtp;
import com.google.auth.oauth2.GoogleCredentials;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import com.google.cloud.firestore.*;
import java.io.IOException;
import java.io.InputStream;
import java.io.FileInputStream;

@SpringBootApplication
public class MtpApplication {
	private static FirebaseApp firebaseApp;

	public static void main(String[] args) {
		MtpApplication.initFirebaseFirestore();
		SpringApplication.run(MtpApplication.class, args);
	}

	@Bean
	public static Firestore initFirebaseFirestore() {
			try {
				InputStream serviceAccount = MtpApplication.class
					.getClassLoader().getResourceAsStream("firebaseAdminKey.json");
					FirebaseOptions options = new FirebaseOptions.Builder()
									.setCredentials(GoogleCredentials.fromStream(serviceAccount))
									.build();

				if (FirebaseApp.getApps().isEmpty()) {
					MtpApplication.firebaseApp = FirebaseApp.initializeApp(options);
				} else {
					MtpApplication.firebaseApp = FirebaseApp.getApps().get(0);
				}

				Firestore firestore = FirestoreClient.getFirestore(MtpApplication.firebaseApp);
				return firestore;
			} catch (IOException e) {
					e.printStackTrace();
					return null;
			}
	}
}
