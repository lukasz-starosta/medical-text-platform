package com.chopaki.mtp.entry;

import com.chopaki.mtp.entry.Entry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface EntryRepository extends JpaRepository<Entry, Long> {
    Optional<List<Entry>> findByDescriptionShortContaining(String descriptionShort);
}