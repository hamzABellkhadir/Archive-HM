package org.sid.web;


import java.io.IOException;
import java.text.ParseException;
import java.util.Collection;

import org.sid.dao.ArchivePRepository;
import org.sid.entities.Archive;
import org.sid.entities.ArchivePersonnel;
import org.sid.service.ArchiveServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ArchiveControleur {

	@Autowired
	private ArchiveServiceImpl archiveServiceImpl ;
	
	@Autowired
	private ArchivePRepository archivePRepository ;
	
	@RequestMapping(value="archives",method=RequestMethod.POST)
	public Archive SaveArchives(@RequestBody Archive archive) {
		return archiveServiceImpl.ajouterArchive(archive);
	}
	
	@RequestMapping(value="archives/{id}",method=RequestMethod.PUT)
	public Archive modifierArchives(@PathVariable String id,@RequestBody Archive archive) {
		return archiveServiceImpl.modifierArchive(id, archive);
	}
	
	@RequestMapping(value="archives",method=RequestMethod.GET)
	public Collection<Archive> getAllArchives() {
		return archiveServiceImpl.getAllArchive();
	}
	@RequestMapping(value="archives/{etat}",method=RequestMethod.GET)
	public Collection<Archive> getAllArchiveByEtat(@PathVariable String etat) throws ParseException {
		return archiveServiceImpl.getAllArchiveByEtat(etat);
	}
	
	@RequestMapping(value="archivePersonnelss/{archiveId}",method=RequestMethod.GET)
	public Collection<ArchivePersonnel> getAllArc(@PathVariable String archiveId ) {
		return archiveServiceImpl.getAllArPer(archiveId);
	}
	

	
	@RequestMapping(value="uploadArchiveC",method=RequestMethod.POST)
	public void uploadefilC(@RequestParam("file2") MultipartFile file2,@RequestParam("id") String id) throws IOException{
		archiveServiceImpl.uploadefileC(file2, id);
	}
	
	@RequestMapping(value="uploadArchiveV",method=RequestMethod.POST)
	public void uploadefilV(@RequestParam("file") MultipartFile file,@RequestParam("id") String id) throws IOException{
		archiveServiceImpl.uploadefileV(file, id);
	}
	
	@RequestMapping(value="archivesP/{id}",method=RequestMethod.GET)
	public Collection<ArchivePersonnel> getAllArchivePID(@PathVariable String id) throws ParseException {
		return archivePRepository.findByArchiveid(id);
	}
	
}
