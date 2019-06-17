package org.sid.dao;

import org.sid.entities.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AdminRepository extends MongoRepository<Admin, String>{

	public Admin findByPseudo(String Pseudo);
}
