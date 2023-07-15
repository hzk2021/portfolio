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
import portfolioImg from "../../assets/images/portfolio.png";
import portfolioMobileImg from "../../assets/images/portfolio-mobile.png";
import lostAndFoundImg from "../../assets/images/lost-and-found.png";
import lostAndFoundMobileImg from "../../assets/images/lost-and-found-mobile.png";


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
const expressJSIcon = icons[Icons.ExpressJS];
const handlebarsIcon = icons[Icons.Handlebars];
const sequelizeIcon = icons[Icons.SequelizeORM];
const pugIcon = icons[Icons.Pug];


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
  projName: "1. Game Helper",
  langIcons: [csharpIcon, firebaseIcon, reCAPTCHAGoogleIcon, metroUIIcon],
  projDescription: "An external League of Legends tool that sends inputs into the game, allowing players to focus on other aspects. It incorporates technologies like Index Pixel Searching, distance measurement through Math, and utilises native Win32API as well as reverse engineering techniques.",
  demoLink: "https://www.youtube.com/watch?v=9-N1GP0Ly5M&list=PLK0DpOU9gUjmfGE0XkbBXI4eECe4lRH_D",
  sourceLink: "https://github.com/hzk2021/Game-Helper-Source",
  projImagePhone: "",
  projImagePC: carrySharpImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const onlyPlants = new ProjectInstance({
  projName: "2. OnlyPlants",
  langIcons: [awsIcon, kotlinIcon],
  projDescription: "Developed features for a mobile application that allows plant enthusiasts to identify various plants species, access relevant information, and language translation. Led the team in utilising Amazon Web Services such as Rekognition, S3, Lambda, API Gateway, etc. to build the core architecture",
  demoLink: "https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=ECP%20Week8%20Architecture#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1o1LIymYpuHoLy6Fg6cbqemQbc39vOUwj%26export%3Ddownload",
  sourceLink: "https://github.com/hzk2021/OnlyPlants",
  projImagePhone: OnlyPlantsMobileImg,
  projImagePC: OnlyPlantsAWSArchitectureImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

// TODO - Add this portfolio here
const myPortfolio = new ProjectInstance({
  projName: "3. Portfolio",
  langIcons: [reactIcon, typeScriptIcon, tailWindIcon],
  projDescription: "This fully responsive website. Built with React, TypeScript, Tailwind CSS, Webpack, Babel, and initialised using Create React App. It includes animations such as particle text, smooth scrolling, and custom button animations using the Framer Motion library.",
  demoLink: "https://hzk2021.github.io/portfolio",
  sourceLink: "https://github.com/hzk2021/portfolio",
  projImagePhone: portfolioMobileImg,
  projImagePC: portfolioImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const myFitElderly = new ProjectInstance({
  projName: "4. MyFitElderly",
  langIcons: [dotNETIcon, csharpIcon, mySQLIcon],
  projDescription: "A web-based health & fitness tracking app. I developed a comprehensive Survey Management System (similar to Google Forms) and a Web Analytics Dashboard. Implemented using technologies such as C#, Entity Framework and MySQL.",
  demoLink: "",
  sourceLink: "https://github.com/hzk2021/MyFitElderly",
  projImagePhone: myFitElderlyMobileImg,
  projImagePC: myFitElderlyImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const memoryGame = new ProjectInstance({
  projName: "5. Memory Game",
  langIcons: [reactIcon, webpackIcon, bootstrapIcon, babelIcon],
  projDescription: "A game that tests your memory whereby you try not to select the same pokemon more than once. It saves your best score, and the game ends when you have selected every Pokemon once.",
  demoLink: "https://hzk2021.github.io/react-memory-game",
  sourceLink: "https://github.com/hzk2021/react-memory-game",
  projImagePhone: memoryMobileImg,
  projImagePC: memoryImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});


const sitConnect = new ProjectInstance({
  projName: "6. SITConnect",
  langIcons: [aspNETIcon, reCAPTCHAGoogleIcon, csharpIcon, mySQLIcon],
  projDescription: ".NET application that identifies threats and implements mitigation methods for common vulnerabilities, specifically those in the OWASP Top 10 & MITRE. Technologies employed include reCAPTCHA, Regex, SQL and Cryptography.",
  demoLink: "",
  sourceLink: "https://github.com/hzk2021/204304Z_SITConnect",
  projImagePhone: SITConnectMobileImg,
  projImagePC: SITConnectImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const minfluencer = new ProjectInstance({
  projName: "7. Minfluencer",
  langIcons: [uiPathIcon, outlookIcon],
  projDescription: "A RPA robot programmed in UIPath that systematically extracts and scrapes customers' records from a website, which will be stored in a data bank using a web form. Using the same set of data, it sends promotional emails to customers.",
  demoLink: "",
  sourceLink: "https://github.com/hzk2021/RPA_Minfluencer",
  projImagePhone: MinfluencerEmailMobileImg,
  projImagePC: MinfluencerImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const lostAndFound = new ProjectInstance({
  projName: "8. Lost and Found",
  langIcons: [expressJSIcon, sequelizeIcon, awsIcon, pugIcon],
  projDescription: "A quick lost and found website for Polytechnic students to file and retrieve lost items. Services utilised include ExpressJS, Sequelize, AWS and Handlebars.",
  demoLink: "",
  sourceLink: "https://github.com/hzk2021/Lost-and-Found",
  projImagePhone: lostAndFoundMobileImg,
  projImagePC: lostAndFoundImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const cvCreator = new ProjectInstance({
  projName: "9. CV Creator",
  langIcons: [craIcon, tailWindIcon],
  projDescription: "A React app that allows users to create a customised résumé by displaying a live preview of the copy, and optionally download it in PDF format.",
  demoLink: "https://hzk2021.github.io/cv-creator",
  sourceLink: "https://github.com/hzk2021/cv-creator",
  projImagePhone: cvMobileImg,
  projImagePC: cvImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const shoppingSite = new ProjectInstance({
  projName: "10. Shopping Site",
  langIcons: [javascriptIcon, webpackIcon, babelIcon, bootstrapIcon],
  projDescription: "A simple frontend-only clothing store with a shopping cart. Data is retrieved directly from the Fake Store API, and styled using the Bootstrap CSS Library.",
  demoLink: "https://hzk2021.github.io/neat-shopping",
  sourceLink: "https://github.com/hzk2021/neat-shopping",
  projImagePhone: shoppingMobileImg,
  projImagePC: shoppingImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const todoList = new ProjectInstance({
  projName: "11. Todo List",
  langIcons: [sassIcon, javascriptIcon, htmlIcon, babelIcon],
  projDescription: "A simple todo list application where users can manage their TODO's according to the current day and week.",
  demoLink: "https://hzk2021.github.io/Todo-List",
  sourceLink: "https://github.com/hzk2021/Todo-List",
  projImagePhone: todoListMobileImg,
  projImagePC: todoListImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

const ticTacToe = new ProjectInstance({
  projName: "12. Tic Tac Toe",
  langIcons: [htmlIcon, cssIcon, javascriptIcon],
  projDescription: "Your classic childhood game made using vanilla HTML, CSS and JavaScript.",
  demoLink: "https://hzk2021.github.io/Tic-Tac-Toe",
  sourceLink: "https://github.com/hzk2021/Tic-Tac-Toe",
  projImagePhone: ticTacToeMobileImg,
  projImagePC: ticTacToeImg,
  className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
});

// const carlsJRClone = new ProjectInstance({
//   projName: "13. Carls Jr Clone",
//   langIcons: [expressJSIcon, handlebarsIcon, sequelizeIcon],
//   projDescription: "A clone of the Carls Jr website with similar functionalities. Built using ExpressJS, Handlebars and Sequelize ORM.",
//   demoLink: "https://hzk2021.github.io/SushiRestaurant/",
//   sourceLink: "https://github.com/hzk2021/SushiRestaurant",
//   projImagePhone: "",
//   projImagePC: "",
//   className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
// });


// const restaurantMenu = new ProjectInstance({
//   projName: "14. Restaurant Menu",
//   langIcons: [htmlIcon, cssIcon, javascriptIcon, babelIcon, webpackIcon],
//   projDescription: "Static website that displays sushi menu.",
//   demoLink: "https://hzk2021.github.io/SushiRestaurant/",
//   sourceLink: "https://github.com/hzk2021/SushiRestaurant",
//   projImagePhone: restaurantMenuMobileImg,
//   projImagePC: restaurantMenuImg,
//   className: "grid min-h-screen lg:grid-cols-[1fr_1fr] grid-rows-[auto_auto] md:grid-cols-1 items-center gap-x-10 px-5"
// });



const projectsInformation : JSX.Element[] = [];
projectsInformation.push(gameHelper.create());
projectsInformation.push(onlyPlants.create());
projectsInformation.push(myPortfolio.create());
projectsInformation.push(myFitElderly.create());
projectsInformation.push(memoryGame.create());
projectsInformation.push(sitConnect.create());
projectsInformation.push(minfluencer.create());
projectsInformation.push(lostAndFound.create());
projectsInformation.push(cvCreator.create());
projectsInformation.push(shoppingSite.create());
projectsInformation.push(todoList.create());
projectsInformation.push(ticTacToe.create());
// projectsInformation.push(carlsJRClone.create());
// projectsInformation.push(restaurantMenu.create());


export default projectsInformation;
