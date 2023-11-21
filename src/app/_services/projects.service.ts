import { Injectable } from '@angular/core';
import {Project} from "../models/Project";
import {Tag} from "../models/Tag";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [

    {id: 0, name: 'SDBM Project ',  pictures: ["assets/jsfProject.jpg","assets/jsfProject2.jpg","assets/jsfProject3.jpg"], projectLink: 'https://github.com/Djayzon59/Projet_Biere_JSF',
      summary: 'Application web monolithe (Java, JSF, SQL Server)',  description: '',  tags: [Tag.JAVA, Tag.DOCKER, Tag.JSF, Tag.SQLSERVER] },

    {id: 1, name: 'PortFolio Project',  pictures: ["assets/portFolioProject.jpg","assets/portfolioProject2.jpg","assets/portfolioProject3.jpg"], projectLink: '',
      summary: 'Mon portfolio (Angular)',  description: '',  tags: [Tag.ANGULAR, Tag.TYPESCRIPT ] },

    {id: 2, name: 'Calculatrice Project',  pictures: ["assets/calculatriceProject.jpg"], projectLink: 'https://github.com/Djayzon59/calculatrice',
      summary: 'Calculatrice (JavaFX, Scene Builder)',  description: '',  tags: [Tag.JAVA, Tag.JAVAFX] },

    {id: 3, name: 'Contacts Project',  pictures: ["assets/contact1.jpg","assets/contact2.jpg","assets/contactProject.jpg"], projectLink: 'https://github.com/Djayzon59/contactFX',
      summary: 'Gestion contacts (JavaFX, Scene Builder)',  description: '',  tags: [Tag.JAVA, Tag.JAVAFX] },

    {id: 4, name: 'API Mail',  pictures: [], projectLink: 'https://github.com/Djayzon59/api_mail_jason',
      summary: 'Service Mail (API-rest, Quarkus, Swagger UI)',  description: '',  tags: [Tag.JAVA, Tag.QUARKUS, Tag.DOCKER] }
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number):Project{
    let project = this.projects.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }


}
