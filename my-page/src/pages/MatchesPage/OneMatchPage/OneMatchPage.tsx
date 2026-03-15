const MinimalHeader = () => {
  return (
    <div className="sticky top-0 z-10 py-6 bg-white border-b border-[#B22234]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-800 text-sm tracking-wider">
          FC BARCELONA • MATCH ARCHIVE
        </div>
      </div>
    </div>
  );
};


const MinimalFooter = () => {
  return (
    <footer className="py-4 bg-white border-t border-[#B22234]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400 text-xs">
          © 2025 • FC BARCELONA MATCHES
        </div>
      </div>
    </footer>
  );
};


export const OneMatchPage = () => {
  const matchData = {
    tournament: {
      name: 'LA LIGA',
      logo: '/images/laliga-logo.png',
    },
    date: '15 МАР 2025',
    stadium: {
      name: 'КАМП НОУ',
      photo: '/images/camp-nou.jpg',
    },
    homeTeam: {
      name: 'FC BARCELONA',
      logo: '/images/barca-logo.png',
      goals: [
        { minute: 23, scorer: 'Левандовски', penalty: true },
        { minute: 67, scorer: 'Левандовски' },
        { minute: 78, scorer: 'Ямал' },
      ],
    },
    awayTeam: {
      name: 'REAL MADRID',
      logo: '/images/madrid-logo.png',
      goals: [
        { minute: 45, scorer: 'Винисиус' },
        { minute: 89, scorer: 'Беллингем' },
      ],
    },
    score: { home: 3, away: 2 },
  };

  const { tournament, date, stadium, homeTeam, awayTeam, score } = matchData;

  return (
    <div className="min-h-screen bg-[rgb(10,15,45)] text-white font-sans flex flex-col">
      <MinimalHeader />

      <main className="grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          {/* Блок турнира – без прозрачности */}
          <div className="flex flex-wrap items-center justify-between mb-8 bg-[#0F1A2F] rounded-2xl p-4 border border-[#B22234]">
            <div className="flex items-center gap-3">
              <img src={tournament.logo} alt={tournament.name} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              <span className="text-xl md:text-2xl font-bold text-white">{tournament.name}</span>
            </div>
            <div className="text-sm md:text-base text-gray-300 text-right">
              <div>{date}</div>
              <div className="text-[#B22234] font-medium">{stadium.name}</div>
            </div>
          </div>

          {/* Блок команд и счёта – без неона */}
          <div className="grid grid-cols-3 items-center justify-items-center mb-10">
            <div className="text-center">
              <img src={homeTeam.logo} alt={homeTeam.name} className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-2 object-contain" />
              <div className="text-lg md:text-xl font-semibold text-white">{homeTeam.name}</div>
            </div>

            <div className="text-center">
              <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-white">
                {score.home} : {score.away}
              </div>
            </div>

            <div className="text-center">
              <img src={awayTeam.logo} alt={awayTeam.name} className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-2 object-contain" />
              <div className="text-lg md:text-xl font-semibold text-white">{awayTeam.name}</div>
            </div>
          </div>

          {/* Блок голов – без прозрачности, гранатовые акценты */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 bg-[#0F1A2F] rounded-2xl p-6 border border-[#B22234]">
            {/* Колонка голов Барсы */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 border-b border-[#B22234] pb-1 mb-3">
                ГОЛЫ {homeTeam.name}
              </h3>
              <div className="space-y-2">
                {homeTeam.goals.map((goal, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-base md:text-lg">
                    <span className="text-[#B22234] text-xl"></span>
                    <span className="text-white font-mono">{goal.minute}'</span>
                    <span className="text-white">
                      {goal.scorer}
                      {goal.penalty && <span className="text-gray-400 text-sm ml-1">(пен.)</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Колонка голов соперника */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 border-b border-[#B22234] pb-1 mb-3">
                ГОЛЫ {awayTeam.name}
              </h3>
              <div className="space-y-2">
                {awayTeam.goals.map((goal, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-base md:text-lg">
                    <span className="text-gray-400 text-xl"></span>
                    <span className="text-white font-mono">{goal.minute}'</span>
                    <span className="text-white">{goal.scorer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Фото стадиона – без изменений, но убрана тень с неоном */}
          <div className="w-full h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden border border-[#B22234]">
            <img src={stadium.photo} alt={stadium.name} className="w-full h-full object-cover" />
          </div>
          <div className="text-right text-sm text-gray-500 mt-1">{stadium.name}</div>
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
};