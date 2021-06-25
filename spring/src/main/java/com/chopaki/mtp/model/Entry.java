package com.chopaki.mtp.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.Table;
import java.time.LocalDate;

//@Entity
//@Table
@Getter
@Setter
@NoArgsConstructor
public class Entry {
//    @Id
    private Long entryID;
    private LocalDate entryDate;
    private String descriptionShort;
    private String descriptionLong;
}
