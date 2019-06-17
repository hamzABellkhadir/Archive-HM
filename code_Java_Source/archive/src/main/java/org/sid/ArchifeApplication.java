package org.sid;




import org.sid.dao.AppRoleRepository;
import org.sid.entities.Admin;
import org.sid.entities.AppRole;
import org.sid.service.AcountServiceImpl;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@SpringBootApplication
public class ArchifeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArchifeApplication.class, args);
	}

	@Bean
	CommandLineRunner start(AcountServiceImpl acountServiceImpl ,
			AppRoleRepository appRoleRepository) {
		return args->{
			
			appRoleRepository.save(new AppRole("C1", "ADMIN"));
			appRoleRepository.save(new AppRole("C2", "USER"));
			acountServiceImpl.saveUser(new Admin("hm123", "admin", "144017078","ADMIN" , "144017078",true, "admin"));
		};
	}

	
	@Bean
	BCryptPasswordEncoder getBCPE() {
		return new BCryptPasswordEncoder();
	}
	/*
	 * 			personnelRepository.save(new Personnel("hx14014", "belkhadir", "hamza", "oujda", "marocain", "célebataire", null,
			"adresse", "ville", "email", "tel", "num_ppr", "grade", "type_engagement", "budge", "fonction_exercee", "compte_bancaire", "agence_bancaire", "niveau_etude"
			, "diplome", "date_obtention_diplome", "specialite", df.parse("20/05/1999"), df.parse("09/05/2019"), df.parse("10/05/2018"), null));
	adminRepository.save(new Admin(null, "mazouzi", "1000", appRoleRepository.findByRoleName("ADMIN"),true,"hr12455"));
	divisionRepository.save(new Division("c1","hamza"));
	serviceRepository.save(new Service("s1","cd", divisionRepository.findById("c1").get()));

	archiveRepository.save(new Archive(null, "reference_boite", "reference_dossier", "nom_projet"," raison_social",
			 "localisation", "observation",  df.parse("20/05/1999"), df.parse("09/05/2019"), df.parse("10/05/2018"), "suivi","haza",personnelRepository.findById("hx14014").get()));
			 
			 		
		personnelRepository.save(new Personnel("sx140125", "belkhadir", "hamza", "oujda", "marocain", "célebataire", null,
					"adresse", "ville", "email", "tel", "num_ppr", "grade", "type_engagement", "budge", "fonction_exercee", "compte_bancaire", "agence_bancaire", "niveau_etude"
					, "diplome", "date_obtention_diplome", "specialite", df.parse("20/05/1999"), df.parse("09/05/2019"), df.parse("10/05/2018"), null));	 			
			//System.out.println(appRoleRepository.findByRoleName("ADMIN"));
			//acountServiceImpl.saveUser(new Admin("u1", "admin", "1234", "ADMIN", "1234", true, "sx14173"));
		//	archiveRepository.save(new Archive(null, "reference_boite", "reference_dossier", "nom_projet"," raison_social",
		//			 "localisation", "observation",  df.parse("20/05/1999"), df.parse("09/05/2019"), df.parse("10/05/2018"), "suivi","haza","hx"));
			//serviceRepository.save(new ServiceApp("s1","cd", divisionRepository.findById("c1").get()));
			 
	adminRepository.deleteAll();
	
	divisionRepository.deleteAll();
	serviceRepository.deleteAll();
	
	personnelRepository.deleteAll();
	archiveRepository.deleteAll();
	appRoleRepository.deleteAll();
	
	 {
"id" : "FC63524",
"nom_personnel": "MAzouzi",
"prenom_personnel": "hamza1",
"ville_naissance": "oujda1",
"nationalite": "marocain1",
"situation_familiale": "célebataire1",
"photo": null,
"adresse": "adresse1",
"ville": "ville",
"email": "email",
"tel": "tel",
"num_ppr": "num_ppr",
"grade": "grade",
"type_engagement": "type_engagement",
"budget": "budge",
"fonction_exercee": "fonction_exercee",
"compte_bancaire": "compte_bancaire",
"agence_bancaire": "agence_bancaire",
"niveau_etude": "niveau_etude",
"diplome": "diplome",
"date_obtention_diplome": "date_obtention_diplome",
"specialite": "specialite",
"date_naissances": "1999-05-19T23:00:00.000+0000",
"date_entre": "2019-05-08T23:00:00.000+0000",
"date_arrivee_cri": "2018-05-09T23:00:00.000+0000",
"idservice": ""
 
 }

			 */

}
