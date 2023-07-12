import { ProgrammingSkills } from "../../misc/types/ProgrammingSkills";

export default function Skills(props: ProgrammingSkills) {
    return (
      <>

        {
          <div className="grid grid-cols-5 justify-center gap-x-12 gap-y-10">
            {props.skills.map(s => {
                return <div className="flex items-center gap-3 justify-between">
                    <p className="font-semibold text-[0px] md:text-xs 2xl:text-2xl">{s.language}</p>
                    <div className="w-7 sm:w-8 md:w-10">
                      {s.icon}
                    </div>
                    
                  </div>
            })}
          </div>
        }

      </>
      
    );
  }
  