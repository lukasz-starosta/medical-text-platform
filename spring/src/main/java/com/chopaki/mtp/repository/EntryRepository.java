package com.chopaki.mtp.repository;

import com.chopaki.mtp.model.Entry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

//@Repository
public interface EntryRepository extends JpaRepository<Entry, Long> {
    Optional<List<Entry>> findByDescriptionShortContaining(String descriptionShort);
}
