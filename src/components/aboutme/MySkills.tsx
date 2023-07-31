import { ProgrammingSkills } from "../../misc/types/ProgrammingSkills";

export default function Skills(props: ProgrammingSkills) {
    return (
      <>

        {
          <div className="my-20 lg:my-0 grid lg:grid-cols-5 grid-cols-3 justify-center gap-x-12 gap-y-[5rem]">
            {props.skills.map(s => {
                return <div className="flex items-center gap-x-2 justify-between group">
                    <p className="font-semibold text-[0px] md:text-xs 2xl:text-xl">{s.language}</p>
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
  