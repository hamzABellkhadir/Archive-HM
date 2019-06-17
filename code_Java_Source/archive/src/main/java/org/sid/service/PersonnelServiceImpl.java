package org.sid.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Collection;
import java.util.Optional;

import org.apache.commons.io.FilenameUtils;
import org.sid.dao.PersonnelRepository;
import org.sid.dao.ServiceRepository;
import org.sid.entities.Personnel;
import org.sid.service.inter.PersonnelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.sid.entities.ServiceApp;

@Service
@Transactional
public class PersonnelServiceImpl implements PersonnelService{

	@Autowired
	private PersonnelRepository personnelRepository;
	@Autowired
	private ServiceRepository serviceRepository;
	
	@Override
	public Personnel ajouterPersonnell(Personnel personnel) {
		
		Optional<Personnel> apPersonnel = personnelRepository.findById(personnel.getId());
		if(apPersonnel.isPresent()) throw new RuntimeException("ce Personnel déja existe ");
		
		Optional<ServiceApp> serviceEN = serviceRepository.findById(personnel.getIdservice());
		if(!serviceEN.isPresent()) throw new RuntimeException("ce service n'existe pas");
		personnel.setService(serviceEN.get());
		return personnelRepository.save(personnel);
	}

	@Override
	public Personnel modifierPersonnel(String id, Personnel personnel) {
		Optional<Personnel> apPersonnel = personnelRepository.findById(id);
		if(!apPersonnel.isPresent()) throw new RuntimeException("ce Personnel n'existe pas");
		personnel.setId(id);
		Optional<ServiceApp>  serviceApp = serviceRepository.findById(personnel.getIdservice());
		if(!serviceApp.isPresent()) throw new RuntimeException("ce service n'existe pas");
		personnel.setService(serviceApp.get());
		return personnelRepository.save(personnel);
	}

	@Override
	public Optional<Personnel> getOnePersonnel(String id) {
		return personnelRepository.findById(id);
	}

	@Override
	public Collection<Personnel> getAllPersonnel() {
		return personnelRepository.findAll();
	}
	
	public void uploadefile(@RequestParam("file") MultipartFile file,@RequestParam("id") String id) throws IOException{
		
		String imgName = file.getOriginalFilename();
		String imgNameModifier = FilenameUtils.getBaseName(imgName) +"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(imgName);
		
		Optional<Personnel> apPersonnel = personnelRepository.findById(id);
		if(!apPersonnel.isPresent()) throw new RuntimeException("ce Personnel n'existe pas");
		//System.out.println("./AHM/src/assets/img-v/img-personnel/"+imgNameModifier);
		
		File convertFile = new File("./AHM/src/assets/img/img-personnel/"+imgNameModifier);
		
		convertFile.createNewFile();
		FileOutputStream fout = new FileOutputStream(convertFile);
		fout.write(file.getBytes());
		fout.close();
		
		apPersonnel.get().setPhoto(imgNameModifier);
		personnelRepository.save(apPersonnel.get());

	}

}
//../AHM/src/assets/img-v/img-personnel/
