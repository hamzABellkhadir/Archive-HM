package org.sid.dao;



import org.sid.entities.Personnel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PersonnelRepository extends MongoRepository<Personnel, String>{

	
	
}
