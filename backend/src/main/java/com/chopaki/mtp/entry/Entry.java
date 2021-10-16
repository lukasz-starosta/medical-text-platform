package com.chopaki.mtp.entry;

import lombok.*;
import org.hibernate.annotations.SQLInsert;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@Entity
@Table(name = "entries")
public class Entry {

    @SequenceGenerator(
            name = "entry_sequence",
            sequenceName = "entry_sequence",
            allocationSize = 1
    )
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "entry_sequence"
    )
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
