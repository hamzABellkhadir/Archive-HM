package org.sid.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Document
@Data @AllArgsConstructor @NoArgsConstructor @ToString

public class Admin {

	@Id
	private String id;
	
	private String pseudo;
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String mot_pass;
	
	@Transient
	private String role1;
	
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	@Transient
	private String confirmedPassword;
	
	@DBRef
	private AppRole role;
	private boolean actived;
	private String cni;
	public Admin(String id, String pseudo, String mot_pass, String role1, String confirmedPassword, boolean actived,
			String cni) {
		super();
		this.id = id;
		this.pseudo = pseudo;
		this.mot_pass = mot_pass;
		this.role1 = role1;
		this.confirmedPassword = confirmedPassword;
		this.actived = actived;
		this.cni = cni;
	}
	
	
	
	
}
