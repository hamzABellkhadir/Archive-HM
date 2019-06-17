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
public class Archive {


	@Id
	private String id;
	
	private String reference_boite;
	private String referencedossier;
	
	private String nom_projet;
	private String raison_social;
	private String localisation;
	private String observation;
	
	private Date date_sortie;
	private Date date_premier_rentrer;
	private Date date_recuperation;
	private Date datefinrecuperation;
	
	private String suivi;
	private String etat;
	
	private String img_v;
	private String img_c;
	@Transient
	private String cniPersonnel;
	@DBRef
	private Personnel personnel;
	
	public Archive(String id, String reference_boite, String referencedossier, String nom_projet, String raison_social,
			String localisation, String observation, Date date_sortie, Date date_premier_rentrer,
			Date date_recuperation, Date datefinrecuperation, String suivi, String etat, String img_v, String img_c,
			String cniPersonnel) {
		super();
		this.id = id;
		this.reference_boite = reference_boite;
		this.referencedossier = referencedossier;
		this.nom_projet = nom_projet;
		this.raison_social = raison_social;
		this.localisation = localisation;
		this.observation = observation;
		this.date_sortie = date_sortie;
		this.date_premier_rentrer = date_premier_rentrer;
		this.date_recuperation = date_recuperation;
		this.datefinrecuperation = datefinrecuperation;
		this.suivi = suivi;
		this.etat = etat;
		this.img_v = img_v;
		this.img_c = img_c;
		this.cniPersonnel = cniPersonnel;
	}
	

	
	




	
}
