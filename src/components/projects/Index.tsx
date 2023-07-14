import { MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import { IndexContext } from "../../contexts/IndexContext";

import projectsInformation from "./Information";


export default function Index() {

    const [index, setIndex] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);
    
    const projectInfo : MutableRefObject<JSX.Element[]> = useRef([]);
    const projectCount : MutableRefObject<number> = useRef(0);

    useEffect(() => {
      projectInfo.current = projectsInformation;
      projectCount.current = projectsInformation.length;
      
      setDataLoaded(true)
    }, []);

    return (
      <>
      {
        dataLoaded? 
        <IndexContext.Provider value={{index, projectCount: projectCount.current, setIndex}}>
          {projectInfo.current[index]}
        </IndexContext.Provider>
        :
        null
      }

      </>
      
    );
  }
  