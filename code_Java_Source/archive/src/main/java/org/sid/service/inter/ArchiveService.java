package org.sid.service.inter;

import java.text.ParseException;
import java.util.Collection;

import org.sid.entities.Archive;

public interface ArchiveService {

	Archive ajouterArchive(Archive archive);
	Archive modifierArchive(String id,Archive archive);
	//Archive getOneArchive(String id);
	Collection<Archive> getAllArchive();
	Collection<Archive> getAllArchiveByEtat(String etat) throws ParseException;
	//Collection<Archive> getAllArchiveByDate(Date etat);
	public void rechargerListSr()  throws ParseException ;
	public void ajouterArchivePer(Archive  archive);
}
