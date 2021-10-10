package com.chopaki.mtp.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLInsert;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "entries")
public class Entry {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private LocalDate entryDate;
    private String descriptionShort;
    private String descriptionLong;

    public Entry(LocalDate entryDate, String descriptionShort, String descriptionLong) {
        this.entryDate = entryDate;
        this.descriptionShort = descriptionShort;
        this.descriptionLong = descriptionLong;
    }
}
