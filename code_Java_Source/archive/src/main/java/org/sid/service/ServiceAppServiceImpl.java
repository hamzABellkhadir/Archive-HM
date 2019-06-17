package org.sid.service;

import java.util.Collection;
import java.util.Optional;

import org.sid.dao.DivisionRepository;
import org.sid.dao.ServiceRepository;
import org.sid.entities.Division;
import org.sid.entities.ServiceApp;
import org.sid.service.inter.ServiceAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ServiceAppServiceImpl implements ServiceAppService{

	@Autowired
	private  ServiceRepository serviceRepository;
	
	@Autowired
	private  DivisionRepository divisionRepository;
	
	@Override
	public ServiceApp saveServiceApp(ServiceApp serviceApp) {
		Optional<Division> division = divisionRepository.findById(serviceApp.getIdDivision());
		if(!division.isPresent()) throw new RuntimeException("cette division n'existe pas ");
		serviceApp.setDivision(division.get());
		return serviceRepository.save(serviceApp);
	}

	@Override
	public ServiceApp ModifierServiceApp(String id, ServiceApp serviceApp) {
		Optional<ServiceApp> ser = serviceRepository.findById(id);
		if(!ser.isPresent()) throw new RuntimeException("ce Service n'existe pas ");
		Optional<Division> division = divisionRepository.findById(serviceApp.getIdDivision());
		if(!division.isPresent()) throw new RuntimeException("cette division n'existe pas !!");
		serviceApp.setDivision(division.get());
		return serviceRepository.save(serviceApp);
	}

	@Override
	public Optional<ServiceApp> getOneServiceApp(String id) {
		return serviceRepository.findById(id);
	}

	@Override
	public Collection<ServiceApp> getAllServiceApp() {
		return serviceRepository.findAll();
	}
	
	public Division saveDivision(Division division) {
		return divisionRepository.save(division);
	}

	
	public Division ModifierDivision(String id, Division division) {
		Optional<Division> division1 = divisionRepository.findById(id);
		if(!division1.isPresent()) throw new RuntimeException("cette division n'existe pas !");
		division.setId(id);
		return divisionRepository.save(division);
	}

	
	public Optional<Division> getOneDivision(String id) {
		return divisionRepository.findById(id);
	}

	
	public Collection<Division> getAllDivision() {
		return divisionRepository.findAll();
	}

}
