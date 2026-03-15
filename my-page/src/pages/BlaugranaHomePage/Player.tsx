import { NavLink } from "react-router";
import type { IPlayer } from "../../types";

interface Props {
  player: IPlayer;
  variant: string;
}

export function Player({ player, variant }: Props) {
  return (
    <NavLink
      to={`/team/profil?playerId=${player._id}`}
      className={
        variant === "home-page"
          ? `mt-2.5 w-75 h-[50vh] shrink-0 no-underline overflow-hidden group`
          : "mt-2.5 ml-2.5 w-75 h-100 no-underline group"
      }
    >
      <div
        className={` ${variant === "home-page" ? "h-[40vh]" : "w-88.75 h-100 overflow-hidden"} flex relative flex-col items-center justify-center 
                                                  after:content-['']
                                                  after:absolute
                                                  after:inset-0
                                                  after:z-1
                                                  after:bg-linear-to-b
                                                  after:from-[rgba(10,15,45,0)]
                                                  after:to-[rgba(10,15,45,0.8)]
                                                  *:z-2`}
        style={{
          background: `url(${player.image}) no-repeat center/cover `,
        }}
      >
        <div className="text-white text-[160px] opacity-40">
          {player.shirtNumber}
        </div>
        <div className="absolute bottom-7.5 flex gap-1.25 font-bold text-white items-end transition-transform duration-350 ease-in-out group-hover:-translate-y-13.75">
          <div className="text-[18px] pb-0.75">{player.name}</div>
          <div className="text-[27px]">{player.surname}</div>
        </div>
        <div
          className="text-white text-[15px] font-bold absolute bottom-2.5 opacity-70
                            transition-transform duration-350 ease-in-out
                            group-hover:-translate-y-13.75"
        >
          {player.position}
        </div>

        <div
          className="
                            w-full
                            h-12.5
                            absolute
                            bottom-4.25
                            flex
                            flex-row 
                            justify-center
                            items-center
                            gap-5
                            text-white
                            opacity-0
                            translate-y-[110%]
                            transition-all 
                            duration-350
                            ease-in-out 
                            group-hover:translate-y-[10%]
                            group-hover:opacity-100"
        >
          {/* Parent container – ensure it's a flex row */}
<div className="flex justify-between gap-2 items-end w-full">
  
  {/* Appearances */}
  <div className="flex-1 flex flex-col items-center text-center">
    <div className="text-[13px] font-extrabold tracking-wide">
      Barca Appearances
    </div>
    <div className="font-bold">{player.stats.total.appearances}</div>
  </div>

  {/* Goals / Clean Sheets */}
  <div className="flex-1 flex flex-col items-center text-center">
    <div className="text-[13px] font-extrabold tracking-wide">
      Barca {player.position === "Goalkeeper" ? "Clean Sheets" : "Goals"}
    </div>
    <div className="font-bold">
      {player.position === "Goalkeeper" ? player.stats.total.cleanSheets : player.stats.total.goals}
    </div>
  </div>

  {/* Assists / Saves */}
  <div className="flex-1 flex flex-col items-center text-center">
    <div className="text-[13px] font-extrabold tracking-wide">
      Barca {player.position === "Goalkeeper" ? "Saves" : "Assists"}
    </div>
    <div className="font-bold">
      {player.position === "Goalkeeper" ? player.stats.total.saves : player.stats.total.assists}
    </div>
  </div>

</div>
        </div>
      </div>
    </NavLink>
  );
}
