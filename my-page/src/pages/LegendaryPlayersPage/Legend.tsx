import { NavLink } from 'react-router';
import {type Legend } from './LegendsGrid';


export function Legend({legend}:{legend:Legend}) {
  return (
    <>
      <NavLink to='/' className="legend border-solid border-[rgb(234,237,241)] border-2 h-72.5 w-[30vw] flex flex-col items-center mt-5 relative overflow-hidden
                      hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:translate-y-0.75 group
                      transition-all duration-500 ease-in-out
                      lg:h-76.25 lg:scale-95
                      xl:h-80 scale-98">
        <img src={legend.image} className="legend-img h-32.5 w-[30vw] object-cover block object-top
                                          lg:h-38.75
                                          xl:h-65 "  />
        <div className="xl:w-full xl:bg-white xl:transition-transform xl:duration-300 xl:ease-in-out xl:border-none xl:group-hover:-translate-y-[240%]">
          <div className="legend-name text-center font-extrabold text-xl p-1 text-[rgb(35,35,35)]">{legend.name}</div>
          <div className="starting-text-legend xl:absolute xl:bottom-0 xl:w-full xl:h-40 xl:translate-y-full xl:bg-white xl:text-center xl:text-[rgb(46,46,46)] opacity-0
                          xl:group-hover:opacity-100">{`${legend.startingText}...`}</div>
        </div>
      </NavLink>
    </>
  );
}
