package org.sid.service.inter;

import java.util.Collection;
import java.util.Optional;

import org.sid.entities.Admin;
import org.sid.entities.AppRole;

public interface AcountService {

	public Admin saveUser(Admin sAdmin);
	public AppRole saveRole(AppRole role);
	public Admin loadUserByPseudo(String pseudo);
	public void addRoleToUser(String pseudo,String rolename);
	
	public Admin UpdateUser(String id ,Admin sAdmin);
	public boolean DeleteUser(String id);
	
	Collection<Admin> getAllAdmin();
	Optional<Admin> getOneAdmin(String id);
	
	
}
