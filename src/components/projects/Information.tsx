import shoppingImg from "../../assets/images/shopping-site.png";
import shoppingMobileImg from "../../assets/images/shopping-site-mobile.png";
import memoryImg from "../../assets/images/memory-game.png";
import memoryMobileImg from "../../assets/images/memory-game-mobile.png";
import cvImg from "../../assets/images/cv-app.png";
import cvMobileImg from "../../assets/images/cv-app-mobile.png";
import restaurantMenuImg from "../../assets/images/restaurant-menu.png";
import restaurantMenuMobileImg from "../../assets/images/restaurant-menu-mobile.png";
import myFitElderlyImg from "../../assets/images/myfitelderly.png";
import myFitElderlyMobileImg from "../../assets/images/myfitelderly-mobile.png";
import SITConnectImg from "../../assets/images/SITConnect.png";
import SITConnectMobileImg from "../../assets/images/SITConnect-mobile.png";
import OnlyPlantsAWSArchitectureImg from "../../assets/images/OnlyPlants-AWS-Architecture.png";
import OnlyPlantsMobileImg from "../../assets/images/OnlyPlants-mobile.png";
import MinfluencerImg from "../../assets/images/Minfluencer.png";
import MinfluencerEmailMobileImg from "../../assets/images/Minfluencer-email-mobile.png";
import carrySharpImg from "../../assets/images/CarrySharp.png";
import ticTacToeImg from "../../assets/images/tic-tac-toe.png";
import ticTacToeMobileImg from "../../assets/images/tic-tac-toe-mobile.png";
import todoListImg from "../../assets/images/todoList.png";
import todoListMobileImg from "../../assets/images/todoList-mobile.png";


// Not exhaustive

import { Icons } from "../../misc/enums/Icons";
import { ProjectDescription } from "../../misc/types/ProjectDescription";
import { ProjectShowcase } from "../../misc/types/ProjectShowcase";
import Project from "./Project";
import { icons } from "../../misc/icons";

const javascriptIcon = icons[Icons.JavaScript];
const reactIcon = icons[Icons.React];
const webpackIcon = icons[Icons.Webpack];
const babelIcon = icons[Icons.Babel];
const typeScriptIcon = icons[Icons.TypeScript];
const tailWindIcon = icons[Icons.Tailwind];
const bootstrapIcon = icons[Icons.Bootstrap];
const htmlIcon = icons[Icons.HTML];
const cssIcon = icons[Icons.CSS];
const sassIcon = icons[Icons.SASS];
const craIcon = icons[Icons.CRA];
const dotNETIcon = icons[Icons.dotNET];
const csharpIcon = icons[Icons.CSharp];
const mySQLIcon = icons[Icons.MySQL];
const aspNETIcon = icons[Icons.ASPNet];
const reCAPTCHAGoogleIcon = icons[Icons.reCAPTCHAGoogle];
const awsIcon = icons[Icons.AWS];
const kotlinIcon = icons[Icons.Kotlin];
const uiPathIcon = icons[Icons.UIPath];
const outlookIcon = icons[Icons.Outlook];
const firebaseIcon = icons[Icons.Firebase];
const metroUIIcon = icons[Icons.MetroUI];


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

const gameHelper = new ProjectInstance({
  projName: "Game Helper",
  langIcons: [csharpIcon, firebaseIcon, reCAPTCHAGoogleIcon, metroUIIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula. ",
  demoLink: "https://www.youtube.com/watch?v=mRDGwGykJNM",
  sourceLink: "https://github.com/hzk2021/Game-Helper-Source",
  projImagePhone: "",
  projImagePC: carrySharpImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const onlyPlants = new ProjectInstance({
  projName: "OnlyPlants",
  langIcons: [awsIcon, kotlinIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula. ",
  demoLink: "https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=ECP%20Week8%20Architecture#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1o1LIymYpuHoLy6Fg6cbqemQbc39vOUwj%26export%3Ddownload",
  sourceLink: "https://github.com/hzk2021/OnlyPlants",
  projImagePhone: OnlyPlantsMobileImg,
  projImagePC: OnlyPlantsAWSArchitectureImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

// TODO - Add this portfolio here

const myFitElderly = new ProjectInstance({
  projName: "MyFitElderly",
  langIcons: [dotNETIcon, csharpIcon, mySQLIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula. ",
  demoLink: "",
  sourceLink: "https://github.com/ayres-xxvii/EDP_Project",
  projImagePhone: myFitElderlyMobileImg,
  projImagePC: myFitElderlyImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const memoryGame = new ProjectInstance({
  projName: "Memory Game",
  langIcons: [reactIcon, webpackIcon, tailWindIcon, babelIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula. ",
  demoLink: "https://hzk2021.github.io/react-memory-game/",
  sourceLink: "https://github.com/hzk2021/react-memory-game",
  projImagePhone: memoryMobileImg,
  projImagePC: memoryImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});


const sitConnect = new ProjectInstance({
  projName: "SITConnect",
  langIcons: [aspNETIcon, reactIcon, reCAPTCHAGoogleIcon, csharpIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula. ",
  demoLink: "",
  sourceLink: "https://github.com/hzk2021/204304Z_SITConnect",
  projImagePhone: SITConnectMobileImg,
  projImagePC: SITConnectImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const minfluencer = new ProjectInstance({
  projName: "Minfluencer",
  langIcons: [uiPathIcon, outlookIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula. ",
  demoLink: "",
  sourceLink: "https://github.com/hzk2021/RPA_Minfluencer",
  projImagePhone: MinfluencerEmailMobileImg,
  projImagePC: MinfluencerImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const cvCreator = new ProjectInstance({
  projName: "CV Creator",
  langIcons: [craIcon, tailWindIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula. ",
  demoLink: "https://hzk2021.github.io/cv-creator/",
  sourceLink: "https://github.com/hzk2021/cv-creator",
  projImagePhone: cvMobileImg,
  projImagePC: cvImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const shoppingSite = new ProjectInstance({
  projName: "Shopping Site",
  langIcons: [javascriptIcon, webpackIcon, babelIcon, bootstrapIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula.",
  demoLink: "https://hzk2021.github.io/neat-shopping/",
  sourceLink: "https://github.com/hzk2021/neat-shopping",
  projImagePhone: shoppingMobileImg,
  projImagePC: shoppingImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const ticTacToe = new ProjectInstance({
  projName: "Tic Tac Toe",
  langIcons: [htmlIcon, cssIcon, javascriptIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula. ",
  demoLink: "https://hzk2021.github.io/Tic-Tac-Toe/",
  sourceLink: "https://github.com/hzk2021/Tic-Tac-Toe",
  projImagePhone: ticTacToeMobileImg,
  projImagePC: ticTacToeImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const todoList = new ProjectInstance({
  projName: "Todo List",
  langIcons: [sassIcon, javascriptIcon, htmlIcon, babelIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula. ",
  demoLink: "https://hzk2021.github.io/Todo-List/",
  sourceLink: "https://github.com/hzk2021/Todo-List",
  projImagePhone: todoListMobileImg,
  projImagePC: todoListImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const restaurantMenu = new ProjectInstance({
  projName: "Restaurant Menu",
  langIcons: [htmlIcon, cssIcon, javascriptIcon, babelIcon, webpackIcon],
  projDescription: "Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula. ",
  demoLink: "https://hzk2021.github.io/SushiRestaurant/",
  sourceLink: "https://github.com/hzk2021/SushiRestaurant",
  projImagePhone: restaurantMenuMobileImg,
  projImagePC: restaurantMenuImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});



const projectsInformation : JSX.Element[] = [];
projectsInformation.push(gameHelper.create());
projectsInformation.push(onlyPlants.create());
projectsInformation.push(myFitElderly.create());
projectsInformation.push(memoryGame.create());
projectsInformation.push(sitConnect.create());
projectsInformation.push(minfluencer.create());
projectsInformation.push(cvCreator.create());
projectsInformation.push(shoppingSite.create());
projectsInformation.push(ticTacToe.create());
projectsInformation.push(todoList.create());
projectsInformation.push(restaurantMenu.create());


export default projectsInformation;
