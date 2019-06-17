package org.sid.dao;

import org.sid.entities.ServiceApp;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ServiceRepository extends MongoRepository<ServiceApp, String>{

}
