package org.sid.entities;

import java.util.Date;


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
public class Personnel {
	
	@Id
	private String id;
	
	private String nom_personnel;
	private String prenom_personnel;
	
	private String ville_naissance;
	private String nationalite;
	private String situation_familiale;
	private String photo;
	
	private String adresse;
	private String ville;
	private String email;
	private String tel;
	
	private String num_ppr;
	private String grade;
	
	private String type_engagement;
	private String budget;
	private String fonction_exercee;
	private String compte_bancaire;
	private String agence_bancaire;
	private String niveau_etude;
	private String diplome;
	private String date_obtention_diplome;
	private String specialite;
	
	
	private Date date_naissances;
	
	private Date date_entre;
	
	private Date date_arrivee_cri;
	
	@Transient
	private String idservice;
	
	
	@DBRef
	private ServiceApp service;

	public Personnel(String id, String nom_personnel, String prenom_personnel, String ville_naissance,
			String nationalite, String situation_familiale, String photo, String adresse, String ville, String email,
			String tel, String num_ppr, String grade, String type_engagement, String budget, String fonction_exercee,
			String compte_bancaire, String agence_bancaire, String niveau_etude, String diplome,
			String date_obtention_diplome, String specialite, Date date_naissances, Date date_entre,
			Date date_arrivee_cri, String idservice) {
		super();
		this.id = id;
		this.nom_personnel = nom_personnel;
		this.prenom_personnel = prenom_personnel;
		this.ville_naissance = ville_naissance;
		this.nationalite = nationalite;
		this.situation_familiale = situation_familiale;
		this.photo = photo;
		this.adresse = adresse;
		this.ville = ville;
		this.email = email;
		this.tel = tel;
		this.num_ppr = num_ppr;
		this.grade = grade;
		this.type_engagement = type_engagement;
		this.budget = budget;
		this.fonction_exercee = fonction_exercee;
		this.compte_bancaire = compte_bancaire;
		this.agence_bancaire = agence_bancaire;
		this.niveau_etude = niveau_etude;
		this.diplome = diplome;
		this.date_obtention_diplome = date_obtention_diplome;
		this.specialite = specialite;
		this.date_naissances = date_naissances;
		this.date_entre = date_entre;
		this.date_arrivee_cri = date_arrivee_cri;
		this.idservice = idservice;
		
	}


	
	

}
