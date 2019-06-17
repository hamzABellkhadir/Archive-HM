package org.sid.web;



import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.sid.entities.Admin;
import org.sid.service.AcountServiceImpl;
@RestController
public class UserControleur {


	
	@Autowired
	private AcountServiceImpl acountServiceImpl;
	
	

	
	@RequestMapping(value="admins",method=RequestMethod.POST)
	public Admin SaveAdmin(@RequestBody Admin sAdmin) {
		return acountServiceImpl.saveUser(sAdmin);
	}
	@RequestMapping(value="admins/{id}",method=RequestMethod.PUT)
	public Admin Updateadmin(@PathVariable String id ,@RequestBody Admin sAdmin) {
		return acountServiceImpl.UpdateUser(id, sAdmin);
	}
	
	@RequestMapping(value="admins/{id}",method=RequestMethod.DELETE)
	public boolean deleteAdmin(@PathVariable String id) {
		return acountServiceImpl.DeleteUser(id);
	}
	
	@RequestMapping(value="admins/{id}",method=RequestMethod.GET)
	public Optional<Admin> getOneAdmin(@PathVariable String id) {
		return acountServiceImpl.getOneAdmin(id);
	}

	@RequestMapping(value="admins",method=RequestMethod.GET)
	public Collection<Admin> getAllAdmin() {
		return acountServiceImpl.getAllAdmin();
	}
}
