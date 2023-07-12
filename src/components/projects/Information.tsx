import googleImg from "../../assets/images/google.png";
import cvImg from "../../assets/images/cv-app-desktop.webp";
import cvMobileImg from "../../assets/images/cv-app-mobile.webp";

import { Icons } from "../../misc/enums/Icons";
import { ProjectDescription } from "../../misc/types/ProjectDescription";
import { ProjectShowcase } from "../../misc/types/ProjectShowcase";
import Project from "./Project";
import { icons } from "../../misc/icons";

const jsIcon = icons[Icons.JavaScript]
const reactIcon = icons[Icons.React]
const webpackIcon = icons[Icons.Webpack]

interface Props extends ProjectDescription, ProjectShowcase{
    className ?: string
}


class ProjectInstance {
  projName;
  langIcons;
  projDescription;
  demoLink;
  sourceLink;
  projImagePhone;
  projImagePC;
  className;

  constructor(info : Props){
    this.projName = info.projName;
    this.langIcons = info.langIcons;
    this.projDescription = info.projDescription;
    this.demoLink = info.demoLink;
    this.sourceLink = info.sourceLink;
    this.projImagePhone = info.projImagePhone;
    this.projImagePC = info.projImagePC;
    this.className = info.className;
  }

  create() {
    
    return (
      <Project 
      projName={this.projName}
      langIcons={this.langIcons}
      projDescription={this.projDescription}
      demoLink={this.demoLink}
      sourceLink={this.sourceLink}
      projImagePhone={this.projImagePhone}
      projImagePC={this.projImagePC}
      className={this.className}/>
    )
  }
}

const projectOne = new ProjectInstance({
  projName: "Project 1",
  langIcons: [jsIcon, reactIcon, webpackIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula.",
  demoLink: "https://www.google.com",
  sourceLink: "https://www.google.com",
  projImagePhone: cvMobileImg,
  projImagePC: cvImg,
  className: "grid h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const projectTwo = new ProjectInstance({
  projName: "Project 2",
  langIcons: [webpackIcon, reactIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula. ",
  demoLink: "www.google.com",
  sourceLink: "www.google.com",
  projImagePhone: cvMobileImg,
  projImagePC: cvImg,
  className: "grid h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const projectThree = new ProjectInstance({
  projName: "Project 3",
  langIcons: [webpackIcon, reactIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula. ",
  demoLink: "www.google.com",
  sourceLink: "www.google.com",
  projImagePhone: googleImg,
  projImagePC: googleImg,
  className: "grid h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const projectsInformation : JSX.Element[] = [];
projectsInformation.push(projectOne.create());
projectsInformation.push(projectTwo.create());
projectsInformation.push(projectThree.create());

  export default projectsInformation;
