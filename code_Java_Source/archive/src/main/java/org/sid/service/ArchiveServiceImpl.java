package org.sid.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;
import java.util.Optional;

import org.apache.commons.io.FilenameUtils;
import org.sid.dao.ArchivePRepository;
import org.sid.dao.ArchiveRepository;
import org.sid.dao.PersonnelRepository;
import org.sid.entities.Archive;
import org.sid.entities.ArchivePersonnel;
import org.sid.entities.Personnel;
import org.sid.service.inter.ArchiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
public class ArchiveServiceImpl implements ArchiveService {
	//sr => sortie ; ex => exist ; fds => fin date de sortie ; see ->  sortie entrier exacte 
	
	@Autowired
	private PersonnelRepository personnelRepository;
	
	@Autowired
	private  ArchiveRepository archiveRepository;
	
	@Autowired
	private  ArchivePRepository acArchivePRepository;
	
	@Override
	public Archive ajouterArchive(Archive archive) {
			Archive refArchive = archiveRepository.findByReferencedossier(archive.getReferencedossier());
			if(refArchive != null) throw new RuntimeException("Cet Archive est déja  existé ");
			archive.setDate_premier_rentrer(new Date());
			archive.setEtat("ex");
			archive.setPersonnel(null);
		return archiveRepository.save(archive);
	}

	@Override
	public Archive modifierArchive(String id, Archive archive) {
		Optional<Archive> appArchive = archiveRepository.findById(id);
		if(!appArchive.isPresent()) throw new RuntimeException("cet Archive n'existe pas ");
		if(!archive.getEtat().equals("ex")) {
			Optional<Personnel> appPersonnel = personnelRepository.findById(archive.getCniPersonnel());
			if(!appPersonnel.isPresent()) throw new RuntimeException("Ce Personnel n'existe pas ");
			archive.setPersonnel(appPersonnel.get());
		}else {
			archive.setPersonnel(null);
		}
		
		archive.setId(id);
		
		
		this.ajouterArchivePer(archive);
		if(archive.getEtat().equals("see") || archive.getEtat().equals("fds") ) {
			archive.setEtat("ex");
			archive.setDate_recuperation(null);
			archive.setDate_sortie(null);
			archive.setDatefinrecuperation(null);
			archive.setPersonnel(null);
			archive.setImg_c("");
		}
		
		return archiveRepository.save(archive);
	}

	@Override
	public Collection<Archive> getAllArchive() {
		return archiveRepository.findAll();
	}

	@Override
	public Collection<Archive> getAllArchiveByEtat(String etat) throws ParseException {
		this.rechargerListSr();
		return archiveRepository.findByEtat(etat);
	}

	
	@Override
	public void rechargerListSr()  throws ParseException {	
		//sr => sortie ; ex => exist ; fds => fin date de sortie ; see ->  sortie entrier exacte ; 
		
		Collection<Archive> archive = archiveRepository.findByEtat("sr");
		//--------------------
		Date datenow = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date cdate = sdf.parse(sdf.format(datenow));
		//----------------------
		archive.forEach(a-> {
			Optional<Archive> appArchive = archiveRepository.findById(a.getId());
			try {
				String rrdate = sdf.format(appArchive.get().getDate_recuperation());
				Date rdate = sdf.parse(rrdate);

				if(cdate.compareTo(rdate) > 0) {
					appArchive.get().setEtat("fds");
					archiveRepository.save(appArchive.get());
				}
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		});
	}
	
	
	@Override
	public void ajouterArchivePer(Archive  archive) {
		if( archive.getEtat().equals("see") ) {
			ArchivePersonnel archivePersonnel = new ArchivePersonnel(null, archive.getId(), archive.getDate_sortie()
					, archive.getDate_recuperation(),archive.getDatefinrecuperation(),"Favorable", archive.getPersonnel(),archive.getImg_c());
			acArchivePRepository.save(archivePersonnel);
		}else if(archive.getEtat().equals("fds")) {
			ArchivePersonnel archivePersonnel = new ArchivePersonnel(null, archive.getId(), archive.getDate_sortie()
					, archive.getDate_recuperation(),archive.getDatefinrecuperation(),"défavorable", archive.getPersonnel(),archive.getImg_c());
			acArchivePRepository.save(archivePersonnel);
		}}
	
	
	public Collection< ArchivePersonnel> getAllArPer(String archiveId){
		return acArchivePRepository.findByArchiveid(archiveId);
	}
	
	
 public void uploadefileV(@RequestParam("file") MultipartFile file
		 ,@RequestParam("id") String id) throws IOException{

	 
		String imgName = file.getOriginalFilename();
		String imgNameModifier = FilenameUtils.getBaseName(imgName) +"_"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(imgName);
		Optional<Archive> appArchive = archiveRepository.findById(id);
		if(!appArchive.isPresent()) throw new RuntimeException("cet Archive n'existe pas ");
		appArchive.get().setImg_v(imgNameModifier);
		archiveRepository.save(appArchive.get());
		File convertFile = new File("./AHM/src/assets/img/img-v/"+imgNameModifier);
		
		convertFile.createNewFile();
		FileOutputStream fout = new FileOutputStream(convertFile);
		fout.write(file.getBytes());
		fout.close();
	}
	
	
 public void uploadefileC(@RequestParam("file2") MultipartFile file2
		 ,@RequestParam("id") String id) throws IOException{
	 
		String imgName = file2.getOriginalFilename();
		String imgNameModifier = FilenameUtils.getBaseName(imgName) +"__"+System.currentTimeMillis()+"."+FilenameUtils.getExtension(imgName);
		Optional<Archive> appArchive = archiveRepository.findById(id);
		if(!appArchive.isPresent()) throw new RuntimeException("cet Archive n'existe pas ");
		appArchive.get().setImg_c(imgNameModifier);
		archiveRepository.save(appArchive.get());
		File convertFile = new File("./AHM/src/assets/img/img-c/"+imgNameModifier);
		convertFile.createNewFile();
		FileOutputStream fout = new FileOutputStream(convertFile);
		fout.write(file2.getBytes());
		fout.close();
 }
	
	
	
	
	
	
}
