package com.chopaki.mtp.user.registration;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RegistrationRequest {
    private final String username;
    private final String password;
    private final String email;
}
