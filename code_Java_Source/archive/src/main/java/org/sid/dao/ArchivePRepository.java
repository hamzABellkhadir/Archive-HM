package org.sid.dao;

import java.util.Collection;

import org.sid.entities.ArchivePersonnel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ArchivePRepository extends MongoRepository<ArchivePersonnel, String>{
	public Collection<ArchivePersonnel> findByArchiveid(String archiveId);

	
}
