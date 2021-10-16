package com.chopaki.mtp.email;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
@AllArgsConstructor
@Slf4j
public class EmailService implements EmailSender {

    private final JavaMailSender mailSender;
    private final static String SUBJECT = "MTP account confirmation";
    private final static String FROM = "confirmation@mtp.com";

    @Override
    @Async
    public void send(String to, String email) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
            helper.setText(email, true);
            helper.setTo(to);
            helper.setSubject(SUBJECT);
            helper.setFrom(FROM);
            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            log.error("Failed to send email, " + e.getMessage());
            throw new IllegalStateException("Failed to send email");
        }
    }
}
