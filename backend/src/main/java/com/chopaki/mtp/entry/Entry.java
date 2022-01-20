package com.chopaki.mtp.entry;

import com.google.cloud.Timestamp;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
public class Entry {

    private String id;
    private Timestamp entryDate;
    private String descriptionShort;
    private String descriptionLong;
    private List<String> treatments;
    private List<String> tests;
    private List<String> problems;

    public Entry(Timestamp entryDate, String descriptionShort, String descriptionLong) {
        this.entryDate = entryDate;
        this.descriptionShort = descriptionShort;
        this.descriptionLong = descriptionLong;
    }
}
