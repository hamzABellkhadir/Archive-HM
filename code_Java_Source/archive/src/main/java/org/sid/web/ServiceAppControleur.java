package org.sid.web;

import java.util.Collection;
import java.util.Optional;

import org.sid.entities.Division;
import org.sid.entities.ServiceApp;
import org.sid.service.ServiceAppServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServiceAppControleur {

	@Autowired
	private ServiceAppServiceImpl serviceAppServiceImpl;
	
	
	@RequestMapping(value="serviceApps",method=RequestMethod.POST)
	public ServiceApp SaveServiceApps(@RequestBody ServiceApp serviceApp) {
		return serviceAppServiceImpl.saveServiceApp(serviceApp);
	}
	@RequestMapping(value="serviceApps/{id}",method=RequestMethod.PUT)
	public ServiceApp UpdateServiceApp(@PathVariable String id ,@RequestBody ServiceApp serviceApp) {
		return serviceAppServiceImpl.ModifierServiceApp(id, serviceApp);
	}
	
	
	@RequestMapping(value="serviceApps/{id}",method=RequestMethod.GET)
	public Optional<ServiceApp> getOneServiceApp(@PathVariable String id) {
		return serviceAppServiceImpl.getOneServiceApp(id);
	}

	@RequestMapping(value="serviceApps",method=RequestMethod.GET)
	public Collection<ServiceApp> getAllServiceApp() {
		return serviceAppServiceImpl.getAllServiceApp();
	}
	
	
	
	
	@RequestMapping(value="divisions",method=RequestMethod.POST)
	public Division SaveS(@RequestBody Division division) {
		return serviceAppServiceImpl.saveDivision(division);
	}
	@RequestMapping(value="divisions/{id}",method=RequestMethod.PUT)
	public Division UpdateS(@PathVariable String id ,@RequestBody  Division division) {
		return serviceAppServiceImpl.ModifierDivision(id, division);
	}
	
	
	@RequestMapping(value="divisions/{id}",method=RequestMethod.GET)
	public Optional<Division> getOneSe(@PathVariable String id) {
		return serviceAppServiceImpl.getOneDivision(id);
	}

	@RequestMapping(value="divisions",method=RequestMethod.GET)
	public Collection<Division> getAllSe() {
		return serviceAppServiceImpl.getAllDivision();
	}
	
	
	
	
	
	
	
	
	
	
	
	
}
