import { Component, OnInit } from '@angular/core';
import{Title} from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects= {} as Project[];

  isCollapsed: boolean = true;
  //Languages
  python: boolean = false;
  typescript: boolean = false;
  csharp: boolean = false;
  javascript: boolean = false;
  c: boolean = false;
  cpp: boolean = false;
  //Frameworks
  angular: boolean=false;
  flask: boolean=false;
  nodejs: boolean=false;
  vue: boolean=false;
  react: boolean=false;

  filtering: Boolean = false;

  constructor(private titleservice: Title, private projectService: ProjectsService) {
    this.titleservice.setTitle("AKAT - Projects");
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: tag[] = [];

    //Languages
    if(this.python){
      filterTags.push(tag.PYTHON)
    }
    if(this.typescript){
      filterTags.push(tag.TYPESCRIPT)
    }
    if(this.csharp){
      filterTags.push(tag.CSHARP)
    }
    if(this.javascript){
      filterTags.push(tag.JAVASCRIPT)
    }
    if(this.c){
      filterTags.push(tag.C)
    }
    if(this.cpp){
      filterTags.push(tag.CPP)
    }

    //Frameworks
    if(this.angular){
      filterTags.push(tag.ANGULAR)
    }
    if(this.flask){
      filterTags.push(tag.FLASK)
    }
    if(this.nodejs){
      filterTags.push(tag.NODEJS)
    }
    if(this.vue){
      filterTags.push(tag.VUE)
    }
    if(this.react){
      filterTags.push(tag.REACT)
    }

    if(this.python||this.typescript||this.csharp||this.javascript||this.c||this.cpp||this.angular||this.flask||this.nodejs||this.vue||this.react){
      this.filtering = true;
    }else{
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilter(){
    this.python = false;
    this.typescript = false;
    this.csharp = false;
    this.javascript = false;
    this.c = false;
    this.cpp = false;
    this.angular = false;
    this.flask = false;
    this.nodejs = false;
    this.vue = false;
    this.react = false;
    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}
