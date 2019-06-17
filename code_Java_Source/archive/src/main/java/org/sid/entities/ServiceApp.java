package org.sid.entities;



import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Document

@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class ServiceApp {

	@Id
	private String id;
	private String nom_service;
	
	@Transient
	private String idDivision;
	
	@DBRef
	private Division division;

	public ServiceApp(String id, String nom_service, String idDivision) {
		super();
		this.id = id;
		this.nom_service = nom_service;
		this.idDivision = idDivision;
	}
	
}
