import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchPlayers } from "../../../store/slice/playersSlice";
import { useSearchParams } from "react-router";

const PlayerProfile = () => {
  const dispatch = useAppDispatch()
  const {players} = useAppSelector((state)=>state.players)
  const [searchParam] = useSearchParams()
  const playerId = searchParam.get('playerId')

  useEffect(()=>{
    if(players.length === 0){
      dispatch(fetchPlayers())
    }
  },[dispatch,players.length])

  const matchedPlayer = players.find(p => p._id === playerId )

  if(!matchedPlayer) return <div> player not found...</div>

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Фото и биография */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Фото */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <img
              src={matchedPlayer.image}
              alt={matchedPlayer.name}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Биография */}
        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-4xl font-bold text-white">{matchedPlayer.name}</h1>
          <p className="text-xl text-gray-300">
            {matchedPlayer.position} | {matchedPlayer.age} years | {matchedPlayer.nationality}
          </p>
          <div className="border-t border-white/10 my-4"></div>
          <div className="prose max-w-none text-gray-200">
            {matchedPlayer.biography.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            {matchedPlayer.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Статистика */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-8">Statistic</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400">{matchedPlayer.stats.total.appearances}</div>
            <div className="text-gray-400">Матчи</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400">{matchedPlayer.position=== "Goalkeeper"?matchedPlayer.stats.total.saves:matchedPlayer.stats.total.goals}</div>
            <div className="text-gray-400">{matchedPlayer.position=== "Goalkeeper"?"saves":"goals"}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400">{matchedPlayer.position=== "Goalkeeper"?matchedPlayer.stats.total.cleanSheets:matchedPlayer.stats.total.assists}</div>
            <div className="text-gray-400">{matchedPlayer.position=== "Goalkeeper"?"clean sheets":"assists"}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400">3</div>
            <div className="text-gray-400">trophies</div>
          </div>
        </div>

        {/* Таблица по сезонам */}
        <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-white/10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  season
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Matches
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {matchedPlayer.position=== "Goalkeeper"?"saves":"goals"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {matchedPlayer.position=== "Goalkeeper"?"clean sheets":"assists"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {matchedPlayer.stats.seasons.map((season, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-200">{season.season}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-200">{season.appearances}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-200">{matchedPlayer.position=== "Goalkeeper"?season.saves:season.goals}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-200">{matchedPlayer.position=== "Goalkeeper"?season.cleanSheets:season.assists}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default PlayerProfile;