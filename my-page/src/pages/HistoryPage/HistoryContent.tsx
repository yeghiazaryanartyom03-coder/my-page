import { NavLink } from 'react-router';

interface History {
  _id: string;
  image: string,
  title: string,
  startingText: string
}

export function HistoryContent({story}: {story:History}) {
  return (
    <NavLink to='/legend' className="border-2 border-[rgb(234,237,241)] group
                                     h-72.5 w-[30vw]
                                     flex flex-col items-center mt-5 relative overflow-hidden no-underline
                                     transition-all duration-500 ease-in-out
                                     hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] 
                                     hover:translate-y-0.75
                                     lg:h-76.25 lg:scale-95
                                     xl:h-80 xl:scale-98">
      <div className=" h-37.5">
        <img src={story.image} className="h-37.5 w-[30vw] object-cover block
                                          lg:h-48.75 lg:w-[32vw]

                                          xl:h-65 xl:w-[40vw]" />
      </div>
        <div className="
                        xl:absolute xl:bottom-0 xl:w-full xl:bg-white xl:border-none xl:transition-transform xl:duration-300 xl:ease-in-out
                        xl:group-hover:-translate-y-[260%]">
          <div className="text-center font-extrabold text-xl p-1 text-[rgb(35,35,35)]">
            {story.title}
          </div>
          <div className="opacity-0
                          opacity-duration
                          xl:group-hover:opacity-100
                          xl:absolute xl:bottom-0 xl:h-25 xl:w-full xl:translate-y-full xl:bg-white xl:text-center xl:text-[rgb(46,46,46)]">
             {story.startingText} 
          </div>  
        </div>       
        
      
      
    </NavLink>
  );
}
