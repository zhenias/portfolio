import { NgClass, NgFor, NgIf } from "@angular/common";
import { Component, type OnInit } from '@angular/core';
import { ProjectModal } from '../project-modal/project-modal';
import { ProjectsService, Project } from "../components/services/project.service";

@Component({
  selector: 'app-me',
  imports: [NgIf, ProjectModal, NgFor, NgClass],
  templateUrl: './me.html',
  styleUrl: './me.css'
})
export class Me implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null | undefined;
  showModal = false;

  constructor(public projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

  openModal(projectId: string) {
    this.selectedProject = this.projects.find(p => p.id === projectId) || null;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedProject = null;
  }

  getProjectIcon(project: Project): string {
    if (project.tags.includes('Angular')) return 'bi bi-angular';
    if (project.tags.includes('Vue')) return 'bi bi-vue';
    if (project.tags.includes('React')) return 'bi bi-react';
    if (project.tags.includes('Symfony') || project.tags.includes('PHP')) return 'bi bi-symfony';
    if (project.tags.includes('Mobile')) return 'bi bi-phone';
    
    return 'bi bi-code-slash';
  }
}
