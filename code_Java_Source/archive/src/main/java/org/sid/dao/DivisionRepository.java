package org.sid.dao;

import org.sid.entities.Division;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface DivisionRepository extends MongoRepository<Division, String>{

}
