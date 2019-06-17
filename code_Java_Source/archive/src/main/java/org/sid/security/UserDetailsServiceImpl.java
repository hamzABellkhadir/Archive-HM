package org.sid.security;

import java.util.ArrayList;
import java.util.Collection;

import org.sid.entities.Admin;

import org.sid.service.inter.AcountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	private AcountService acountService;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Admin appAdmin = acountService.loadUserByPseudo(username);
		if(appAdmin == null) throw new UsernameNotFoundException("Invalid user");
		if(!appAdmin.isActived()) throw new UsernameNotFoundException("il faut activer L'utilisateur");
		Collection<GrantedAuthority> authorities = new ArrayList<>();
	   authorities.add(new SimpleGrantedAuthority(appAdmin.getRole().getRoleName()));
		return new User(appAdmin.getCni(),appAdmin.getMot_pass(),authorities);
	}

}
