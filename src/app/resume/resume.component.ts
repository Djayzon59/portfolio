import {Component, Renderer2} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle("Jason Bailleul - CV");
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', 'blank');
    link.setAttribute('href', 'assets/cv.pdf');
    link.setAttribute('download', 'cv.pdf');
    link.click();
    link.remove();
  }
}
