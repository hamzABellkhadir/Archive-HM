package org.sid.service.inter;

import java.util.Collection;
import java.util.Optional;

import org.sid.entities.Personnel;

public interface PersonnelService {

	public Personnel ajouterPersonnell(Personnel personnel);
	Personnel modifierPersonnel(String id ,Personnel personnel);
	Optional<Personnel> getOnePersonnel(String id);
	Collection<Personnel> getAllPersonnel();
}
