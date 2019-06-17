package org.sid.service.inter;

import java.util.Collection;
import java.util.Optional;

import org.sid.entities.ServiceApp;


public interface ServiceAppService {

	
	public ServiceApp saveServiceApp(ServiceApp serviceApp);
	public ServiceApp ModifierServiceApp(String id ,ServiceApp serviceApp);
	public Optional< ServiceApp> getOneServiceApp(String id);
	public Collection<ServiceApp> getAllServiceApp();

	
}
