import { ProgrammingSkills } from "../../misc/types/ProgrammingSkills";

export default function Skills(props: ProgrammingSkills) {
    return (
      <>

        {
          <div className="grid grid-cols-2 justify-center gap-x-28 gap-y-10">
            {props.skills.map(s => {
                return <div className="flex items-center gap-3 justify-between">
                    <p className="text-base font-semibold sm-text-lg 2xl:text-2xl">{s.language}</p>
                    <div className="w-10 md:w-12">
                      {s.icon}
                    </div>
                    
                  </div>
            })}
          </div>
        }

      </>
      
    );
  }
  