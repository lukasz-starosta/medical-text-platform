package com.chopaki.mtp.entry;

import com.google.cloud.Timestamp;
import lombok.*;

@Data
@NoArgsConstructor
public class Entry {

    private String id;
    private Timestamp entryDate;
    private String descriptionShort;
    private String descriptionLong;

    public Entry(Timestamp entryDate, String descriptionShort, String descriptionLong) {
        this.entryDate = entryDate;
        this.descriptionShort = descriptionShort;
        this.descriptionLong = descriptionLong;
    }
}
