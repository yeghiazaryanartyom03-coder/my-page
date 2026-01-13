type propType = {
  name:string,
  surname:string
}

export function PlayerName({name,surname}:propType){
  return(
    <a href="/" className="no-underline text-[rgb(120,120,120)] mt-2 hover:text-[#670a0a]">
                  {name + ` ${surname}`}
                </a>
  )
}