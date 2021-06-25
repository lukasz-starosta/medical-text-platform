package com.chopaki.mtp.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.Table;

//@Entity
//@Table
@Getter
@Setter
@NoArgsConstructor
public class User {
//    @Id
    private Long userID;
    private String login;
    private String password;
}
