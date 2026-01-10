import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Project, ProjectsService } from '../components/services/project.service';

export interface ProjectLink {
  url: string;
  text: string;
  type: 'github' | 'demo' | 'live';
  icon: string;
}

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.html',
  styleUrls: ['./project-modal.css'],
  imports: [
    NgIf,
    NgFor,
    NgClass,
  ]
})
export class ProjectModal {
  @Input() project?: Project | null = null;
  @Output() closeModal = new EventEmitter<void>();

  selectedImage: string | null = null;

  constructor(public projectsService: ProjectsService) {}

  openImageLightbox(image: string) {
    this.selectedImage = image;
  }

  close() {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('bg-black')) {
      this.close();
    }
  }
}
