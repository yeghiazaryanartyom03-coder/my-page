import { useSearchParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect } from "react";
import { fetchLegends } from "../../../store/slice/legendsSlice";


const Header = ({name}:{name:string}) => {
  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-[#0A0F2D] via-[#1A1F3A] to-[#0A0F2D] border-b border-[#A50044]/30 py-4 shadow-2xl backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
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
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-serif italic text-[#D4AF37] drop-shadow-lg">
              {name}
            </span>
            <div className="w-1 h-10 bg-[#A50044] rounded-full"></div>
            <span className="text-3xl text-[#D4AF37]">✦</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      </div>
    </header>
  );
};

// Footer (как в истории)
const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#0A0F2D] via-[#1A1F3A] to-[#0A0F2D] border-t border-[#A50044]/30 py-8 mt-16">
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

export const LegendPage = () => {
  
  const [searchParams] = useSearchParams();
  const legendId = searchParams.get("legendId");

  const dispatch = useAppDispatch()
  const {legends} = useAppSelector((state) => state.legends)

  useEffect(() => {
    if(legends.length === 0 ){
      dispatch(fetchLegends())
    }
  },[dispatch,legends.length])
  
  const matchedLegend = legends.find(l => l._id === legendId)

  if(!matchedLegend){
    return <div>net takoy legendi</div>
  }

  return (
    <>
      <Header name={matchedLegend.name}/>
      <main className="container mx-auto px-4 py-12">
        {/* Фото и основная информация */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-16">
          <div className="lg:col-span-1">
            <div className="rounded-3xl overflow-hidden border-4 border-[#D4AF37] shadow-2xl">
              <img
                src={matchedLegend.image}
                alt={matchedLegend.fullName}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-5xl font-serif font-bold text-[#D4AF37] mb-2">
              {matchedLegend.name}
            </h1>
            <p className="text-2xl text-gray-300">{matchedLegend.position}</p>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div>
                <span className="text-[#A50044] font-semibold">Born:</span>{" "}
                {matchedLegend.birthDate}
              </div>
              <div>
                <span className="text-[#A50044] font-semibold">
                  Nationality:
                </span>{" "}
                {matchedLegend.nationality}
              </div>
              <div>
                <span className="text-[#A50044] font-semibold">Height:</span>{" "}
                {matchedLegend.height}
              </div>
            </div>
            <div className="border-t border-[#A50044]/30 my-4"></div>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-4xl font-serif text-center text-[#D4AF37] mb-12 drop-shadow-lg">
            ✦ The Story of a Legend ✦
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {matchedLegend.biography.map((chapter, idx) => (
              <div
                key={idx}
                className="bg-[#f1f3f5] backdrop-blur-sm p-8 rounded-2xl border border-[#A50044]/40 shadow-xl hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-serif text-[#D4AF37] mb-3 border-b border-[#A50044]/30 pb-2">
                  {chapter.title}
                </h3>
                <p className="text-[rgb(13,20,62)] text-lg leading-relaxed">
                  {chapter.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 max-w-3xl mx-auto">
          <div className="bg-[#0A0F2D] p-10 rounded-3xl border-l-8 border-[#D4AF37] shadow-2xl italic">
            <p className="text-3xl text-white font-light leading-relaxed">
              "{matchedLegend.quote.text}"
            </p>
            <p className="text-xl text-[#D4AF37] mt-4 font-semibold">
              — {matchedLegend.quote.author}
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-serif text-center text-[#D4AF37] mb-12 drop-shadow-lg">
            ✦ Career Statistics ✦
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#f1f3f5] p-8 rounded-2xl border border-[#A50044]/40 text-center shadow-xl">
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">
                {matchedLegend.stats.matches}
              </div>
              <div className="text-[rgb(13,20,62)] text-sm font-bold uppercase tracking-wider">
                Matches
              </div>
            </div>
            <div className="bg-[#f1f3f5] p-8 rounded-2xl border border-[#A50044]/40 text-center shadow-xl">
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">
                {matchedLegend.stats.goals}
              </div>
              <div className="text-[rgb(13,20,62)] font-bold text-sm uppercase tracking-wider">
                Goals
              </div>
            </div>
            <div className="bg-[#f1f3f5] p-8 rounded-2xl border border-[#A50044]/40 text-center shadow-xl">
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">
                {matchedLegend.stats.assists}
              </div>
              <div className="text-[rgb(13,20,62)] font-bold text-sm uppercase tracking-wider">
                Assists
              </div>
            </div>
            <div className="bg-[#f1f3f5] p-8 rounded-2xl border border-[#A50044]/40 text-center shadow-xl">
              <div className="text-5xl font-bold text-[#D4AF37] mb-2">
                {matchedLegend.stats.trophies}
              </div>
              <div className="text-[rgb(13,20,62)] font-bold text-sm uppercase tracking-wider">
                Trophies
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-serif text-center text-[#D4AF37] mb-12 drop-shadow-lg">
            ✦ Honours & Achievements ✦
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {matchedLegend.achievements.map((ach, idx) => (
              <div
                key={idx}
                className="bg-[#f1f3f5] p-6 rounded-2xl border border-[#A50044]/40 text-center shadow-xl"
              >
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">
                  {ach.count}
                </div>
                <div className="text-[rgb(13,20,62)] font-bold text-lg">{ach.name}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
