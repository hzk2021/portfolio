import { useState } from "react";
import { IndexContext } from "../../contexts/IndexContext";

import projectsInformation from "./Information";


export default function Index() {

    const [index, setIndex] = useState(0);
    const projectCount = projectsInformation.length;

    return (
      <>
      <IndexContext.Provider value={{index, projectCount, setIndex}}>
        {projectsInformation[index]}

      </IndexContext.Provider>

      </>
      
    );
  }
  