import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Virus Vision", pictures: ["../../../assets/virusvision/image1.jpg","../../../assets/virusvision/image2.jpg","../../../assets/virusvision/image3.jpg"], projectLink: "//github.com/AnishKatr/H4H-2024", summary: "VirusVision: See Safety with Precision.", description: "Our inspiration for Virus Vision comes from the desire to leverage technology for disease surveillance and solutions. Virus Vision aims to offer a detailed and current overview of global health threats, with a current focus on Covid and Influenza. Our objective is to enhance disease awareness and treatment by showcasing disease spread and density relative to population, simplifying complex data for the public. This includes highlighting relevant news articles and guiding users to nearby hospitals and clinics related to the targeted disease.", tags: [tag.PYTHON, tag.FLASK,tag.REACT]},
    {id: 1, name: "Parking++", pictures: ["../../../assets/parkingpp/image1.jpg","../../../assets/parkingpp/image2.jpg","../../../assets/parkingpp/image3.jpg"], projectLink: "//github.com/sipneat/inrix-hack-2023", summary: "Parking So Nice, We Added it Twice", description: "You are going to the Chase Center to see the Warriors win yet another game. Then five minutes away, you realize you forgot to account for the extra $60 cost of parking. What do you do? Drive around wasting time to find free parking? Wasting gas to try to avoid the extra cost? This is a major issue that has caused the average person to lose 17 hours of their life looking for parking costing them an average $345. This issue can easily be solved through our product Parking++.", tags: [tag.VUE, tag.JAVASCRIPT, tag.NODEJS]},
    {id: 2, name: "A Different Perspective", pictures: ["../../../assets/diffperp/image1.jpg","../../../assets/diffperp/image2.jpg","../../../assets/diffperp/image3.jpg"], projectLink: "//github.com/AnishKatr/Hackathon2023", summary: "A Unity game providing insight into the daily struggles of those with mental challenges", description: "This game consists of 3 levels - each one putting you in the shoes of somebody who suffers from a different mental disorder or mental health issue. In level 1, you experience the challenges of a person with OCD as they get ready for the day. Level 1 simulates the unavoidable repetition that can affect one's flexibility in scheduling and ease of life. Level 2 involves a dyslexic person as they read a passage from a book with the challenge of reading words and the ability to recognize incorrect spelling. Lastly, level 3 takes you through what it is like to struggle with the combination of body dysmorphia and eating disorders. In level 3, you can witness the character struggling to enjoy a simple outing with friends as their mental disorder impedes on their life.", tags: [tag.CSHARP]},
    {id: 3, name: "B.U.S - Better Urban Solutions", pictures: ["../../../assets/bus/image1.jpg","../../../assets/bus/image2.jpg","../../../assets/bus/image3.png"], projectLink: "//github.com/hegurhurgurk/Inrix-2022", summary: "Web API Project that was developed for a class project.", description: "Better Urban Solutions identifies disparities between public transport supply and demand. We use data to show whether a bus stop in San Francisco is utilized by enough people, and compare this with data from INRIX to better optimize the public transportation system. This program can easily be applied to different cities with access to more INRIX data along with variable dates. Furthermore with data from cities with less robust public transportation systems, the data can be easily used to identify potential candidates for new bus stop locations.", tags: [tag.ANGULAR, tag.NODEJS, tag.TYPESCRIPT]},
    {id: 4, name: "This Website!", pictures: ["../../../assets/web/image1.jpg","../../../assets/web/image2.jpg","../../../assets/webs/image3.jpg"], projectLink: "//github.com/AnishKatr/PersonalWebsite", summary: "A Personal Portfolio for me", description: "I wanted to challenge myself to create a personal project, where I learned and focused on a new technology, and I felt like a personal portfolio was the perfect way to hit two birds with one stone", tags: [tag.ANGULAR, tag.NODEJS, tag.TYPESCRIPT]}
    //{id: 4, name: "Chrome Extension", pictures: ["../../../assets/test.jpg","../../../assets/anishprofessionalphoto.jpg","../../../assets/cropprofphoto.jpg"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "hi", tags: [tag.JAVASCRIPT]},
    //{id: 5, name: "Mobile App", pictures: ["../../../assets/test.jpg","../../../assets/tanishprofessionalphoto.jpg","../../../assets/cropprofphoto.jpg"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "hi", tags: [tag.CSHARP]}
  ];
  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project{
    let project = this.projects.find(p => p.id === id);

    if(project == undefined){
      throw new Error("Project not found");
    }

    return project
  }

  GetProjectsByFilter(filterTags: tag[]){
    let filteredProjects: Project[] = [];
    this.projects.forEach(function(project){
      let foundAll = true;

      filterTags.forEach(function(filterTag){
        if(!project.tags.includes(filterTag)){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }

    });

    return filteredProjects;

  }

}
