package org.sid.entities;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data @AllArgsConstructor  @NoArgsConstructor 
public class ArchivePersonnel {

	@Id
	private String id;
	
	private String archiveid;
	
	private Date date_sortie;
	private Date date_recuperation;
	private Date datefin;
	
	
	
	private String commentaire;
	@DBRef
	private Personnel personnel;
	
	private String img_c;
}
