package org.sid.web;


import java.io.IOException;
import java.util.Collection;
import java.util.Optional;

import org.sid.entities.Personnel;
import org.sid.service.PersonnelServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RestController
public class PersonnelControleur {

	@Autowired
	private PersonnelServiceImpl personnelServiceImpl;
	
	@RequestMapping(value="personnels",method=RequestMethod.POST)
	public Personnel SavePersonnel(@RequestBody Personnel personnel) throws IOException {
		return personnelServiceImpl.ajouterPersonnell(personnel);
	}
	
	@RequestMapping(value="personnels/{id}",method=RequestMethod.PUT)
	Personnel modifierPersonnel(@PathVariable String id,@RequestBody Personnel personnel) {
		return personnelServiceImpl.modifierPersonnel(id, personnel);
	}
	
	@RequestMapping(value="personnels/{id}",method=RequestMethod.GET)
	public Optional<Personnel> getOnePersonnel(@PathVariable String id) {
		return personnelServiceImpl.getOnePersonnel(id);
	}

	@RequestMapping(value="personnels",method=RequestMethod.GET)
	public Collection<Personnel> getAllPersonnel() {
		return personnelServiceImpl.getAllPersonnel();
	}
	@RequestMapping(value="uploaad",method=RequestMethod.POST)
	public void uploadefil(@RequestParam("file") MultipartFile file,@RequestParam("id") String id) throws IOException{
		personnelServiceImpl.uploadefile(file, id);
	}
	
}
