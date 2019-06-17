package org.sid.dao;

import java.util.Collection;

import org.sid.entities.Archive;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ArchiveRepository extends MongoRepository<Archive, String>{

	public Collection<Archive> findByEtat(String etat);
	public Archive findByReferencedossier(String reference_dossier);
}
