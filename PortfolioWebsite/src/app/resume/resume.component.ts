import { Component, Renderer2 } from '@angular/core';
import{Title} from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleservice: Title, private renderer: Renderer2) {
    this.titleservice.setTitle("AKAT - Resume");
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/AnishKatragadda-Resume.pdf');
    link.setAttribute('download', 'AnishKatragadda-Resume.pdf');
    link.click();
    link.remove();
  }
}
