type propType = {
  name:string,
  surname:string
}

export function PlayerName({name,surname}:propType){
  return(
    <a href="/" className="player-name">
                  {name + ` ${surname}`}
                </a>
  )
}