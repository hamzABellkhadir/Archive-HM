package org.sid.service;

import java.util.Collection;
import java.util.Optional;

import org.sid.dao.AdminRepository;
import org.sid.dao.AppRoleRepository;
import org.sid.dao.PersonnelRepository;
import org.sid.entities.Admin;
import org.sid.entities.AppRole;
import org.sid.entities.Personnel;
import org.sid.service.inter.AcountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AcountServiceImpl implements AcountService{
	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private AppRoleRepository appRoleRepository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	@Autowired
	private PersonnelRepository personnelRepository;
	
	
	@Override
	public Admin saveUser(Admin sAdmin) {
		
		if(!sAdmin.getPseudo().equals("admin")) {
			Admin admin = 	adminRepository.findByPseudo(sAdmin.getPseudo());
			if(admin != null) throw new RuntimeException("Utilisateur Existe déjat");
		}
			if(!sAdmin.getMot_pass().equals(sAdmin.getConfirmedPassword())) throw new RuntimeException("Le mot de passe est n'est pas confirmé");
			if(!sAdmin.getPseudo().equals("admin")) {
				Optional<Personnel> appPersonnel = personnelRepository.findById(sAdmin.getCni());
				if(!appPersonnel.isPresent()) throw new RuntimeException("Ce personnel n'existe pas ");
			}
			sAdmin.setMot_pass(bCryptPasswordEncoder.encode(sAdmin.getConfirmedPassword()));
			AppRole appRole = appRoleRepository.findByRoleName(sAdmin.getRole1());
			if(appRole == null ) throw new RuntimeException("Ce Role n'existe pas ");
			sAdmin.setRole(appRole);
			adminRepository.save(sAdmin);
		return sAdmin;
	}

	@Override
	public AppRole saveRole(AppRole role) {
		return appRoleRepository.save(role);
	}

	@Override
	public Admin loadUserByPseudo(String pseudo) {
		return adminRepository.findByPseudo(pseudo);
	}

	@Override
	public void addRoleToUser(String pseudo, String rolename) {
		Admin appAdmin = adminRepository.findByPseudo(pseudo);
		AppRole appRole = appRoleRepository.findByRoleName(rolename);
		appAdmin.setRole(appRole);
	}

	@Override
	public Admin UpdateUser(String id ,Admin sAdmin) {
		sAdmin.setId(id);
		Admin admin = 	adminRepository.findByPseudo(sAdmin.getPseudo());
		if(admin == null) throw new RuntimeException("utilisateur n'éxiste pas");
		
		if(!sAdmin.getMot_pass().equals(sAdmin.getConfirmedPassword())) throw new RuntimeException("Le mot de passe est n'est pas confirmé");
		Optional<Personnel> appPersonnel = personnelRepository.findById(sAdmin.getCni());
		if(!appPersonnel.isPresent()) throw new RuntimeException("ce Personnel n'existe pas ");
		sAdmin.setMot_pass(bCryptPasswordEncoder.encode(sAdmin.getConfirmedPassword()));
		AppRole appRole = appRoleRepository.findByRoleName(sAdmin.getRole1());
		if(appRole == null) throw new RuntimeException("ce Role n'existe pas ");
		sAdmin.setRole(appRole);
		adminRepository.save(sAdmin);
	return sAdmin;
	}

	@Override
	public boolean DeleteUser(String id) {
		Optional<Admin> admin = 	adminRepository.findById(id);
		if(!admin.isPresent()) throw new RuntimeException("User n'existe pas");
		adminRepository.deleteById(id);
		return true;
	}

	@Override
	public Collection<Admin> getAllAdmin() {
		
		return adminRepository.findAll();
	}

	@Override
	public Optional<Admin> getOneAdmin(String id) {
		return adminRepository.findById(id);
	}
	
	

}
