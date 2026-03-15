import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useSearchParams } from "react-router";
import { fetchHistories } from "../../../store/slice/historySlice";

const Header = ({years}: {years: string}) => {
  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-[#0A0F2D] via-[#1A1F3A] to-[#0A0F2D] border-b border-[#A50044]/30 py-4 shadow-2xl backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Левая часть: эмблема и название */}
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-3xl font-bold tracking-widest text-white drop-shadow-md">
                FC BARCELONA
              </h1>
              <p className="text-sm text-[#D4AF37] tracking-widest font-light">
                MÉS QUE UN CLUB
              </p>
            </div>
          </div>
          {/* Правая часть: период и декоративный элемент */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-serif italic text-[#D4AF37] drop-shadow-lg">
              {years}
            </span>
            <div className="w-1 h-10 bg-[#A50044] rounded-full"></div>
            <span className="text-3xl text-[#D4AF37]">✦</span>
          </div>
        </div>
        {/* Декоративная нижняя полоска */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      </div>
    </header>
  );
};

// Footer компонент (без изменений, так как там нет кнопок)
const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#0A0F2D] via-[#1A1F3A] to-[#0A0F2D] border-t border-[#A50044]/30 py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="text-3xl text-[#D4AF37] font-serif italic mb-3 drop-shadow-lg">
          Més que un club
        </div>
        <div className="text-gray-400 text-sm tracking-wide">
          © 2025 FC Barcelona. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export function OnePartOfHistory() {
  const dispatch = useAppDispatch();
  const { histories } = useAppSelector((state) => state.histories);
  const [searchParams] = useSearchParams();
  const historyId = searchParams.get("historyId");

  useEffect(() => {
    if (histories.length === 0) {
      dispatch(fetchHistories());
    }
  }, [dispatch, histories.length]);

  const matchedHistory = histories.find((h) => h._id === historyId);

  console.log;

  if (!matchedHistory) {
    return <div> history dont loaded... </div>;
  }

  return (
    <>
      <Header  years={matchedHistory.period}/>
      <main className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {matchedHistory.title}
          </h1>
          <p className="text-2xl text-blue-400 font-semibold">
            {matchedHistory.period}
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Brief description */}
        <section className="mb-16 max-w-4xl mx-auto text-center">
          <p className="text-xl leading-relaxed text-amber-50 bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
            {matchedHistory.description}
          </p>
        </section>

        {/* Key moments */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Key Moments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedHistory.keyMoments.map((moment) => {
              return (
                <>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {moment.title}
                    </h3>
                    <p className="text-gray-300">{moment.description}</p>
                  </div>
                </>
              );
            })}
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Numbers & Facts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-400">{matchedHistory.statistics.championsLeague}</div>
              <div className="text-gray-400">Champions Leagues</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-400">{matchedHistory.statistics.laLiga}</div>
              <div className="text-gray-400">La Liga titles</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-400">{matchedHistory.statistics.copaDelRey}</div>
              <div className="text-gray-400">Copas del Rey</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-400">{matchedHistory.statistics.clubWorldCup}</div>
              <div className="text-gray-400">Club World Cups</div>
            </div>
          </div>
          <div className="mt-8 text-center text-lg bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 max-w-3xl mx-auto">
            <p>
              In total, during this period Barcelona won{" "}
              <span className="text-blue-400 font-bold">{matchedHistory.statistics.totalTrophies} trophies</span> 
            </p>
          </div>
        </section>

        {/* Legendary players */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Legends of the Era
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {matchedHistory.legends.map((legend)=>{
              return (
                  <div className="text-center w-36">
              <div className="w-32 h-32 rounded-full bg-white/10 border-2 border-blue-500 mx-auto mb-3 overflow-hidden">
                <img
                  src={legend.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-semibold text-white">{legend.name}</div>
              <div className="text-sm text-gray-400">{legend.position}</div>
            </div>
              )
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Timeline of Success
          </h2>
          <div className="relative flex flex-wrap justify-between items-center text-sm text-gray-300">
            <div className="w-2 h-2 bg-blue-500 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"></div>
            {matchedHistory.timeline.map((line)=>{
              return(
                <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-blue-400">{line.year}</span>
              <span className="text-center">{line.event}</span>
            </div>
              )
            })}
            <div className="w-2 h-2 bg-blue-500 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
          </div>
          <div className="h-1 bg-blue-500/30 mt-4 rounded-full"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
