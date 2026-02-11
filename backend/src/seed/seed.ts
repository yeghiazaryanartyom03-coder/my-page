import mongoose from "mongoose";
import { History } from "../models/History";
import dotenv from "dotenv";
import { Player } from "../models/Player";
import { News } from "../models/News";
import { Legend } from "../models/Legend";
import { Match } from "../models/Match";
import { Item } from "../models/Item";

dotenv.config();

const newsSeed = [
  {
    title: "Former Barcelona star Rafinha Alcantara announces retirement",
    auther: "by Bomj",
    vews: 190,
    image: "/pictures/news-images/raphinha-img.webp",
  },
  {
    title: "Gerard Martín makes his mark in 2025",
    auther: "by Bomj",
    vews: 10000,
    image: "/pictures/news-images/Gerard.webp",
  },
  {
    title: "Lamine Yamal is the king of dribbling",
    auther: "by Bomj",
    vews: 90,
    image: "/pictures/news-images/Yamal.webp",
  },
  {
    title: "Comeback against Atlético, the best moment from December",
    auther: "by Bomj",
    vews: 321,
    image: "/pictures/news-images/team.webp",
  },
  {
    title: "Barca equal an 82-year-old record",
    auther: "by Bomj",
    vews: 190,
    image: "/pictures/news-images/record.webp",
  },
  {
    title: "2025 in five stunning stats",
    auther: "by Bomj",
    vews: 190,
    image: "/pictures/news-images/five_stunning.webp",
  },
  {
    title: "What's happened when Barça were winter champions?",
    auther: "by Bomj",
    vews: 190,
    image: "/pictures/news-images/hug.webp",
  },
  {
    title: "Hansi Flick's squad to return to training on 29 December",
    auther: "by Bomj",
    vews: 190,
    image: "/pictures/news-images/trainig.webp",
  },
];
const playerSeed = [
  {
    name: "Marc-Andre",
    surname: "TER STEGEN",
    shirtNumber: 1,
    position: "goalkeeper",
    image: "/pictures/first-team/Ter_Stegen.webp",
    appearances: 423,
    cleanSheets: 175,
    saves: 989,
  },
  {
    name: "Joan",
    surname: "GARCIA",
    shirtNumber: 13,
    position: "goalkeeper",
    image: "/pictures/first-team/Joan_Garcia.webp",
    appearances: 22,
    cleanSheets: 10,
    saves: 64,
  },
  {
    name: "Wojciech",
    surname: "SZCZESNY",
    shirtNumber: 25,
    position: "goalkeeper",
    image: "/pictures/first-team/Szczesny.webp",
    appearances: 39,
    cleanSheets: 13,
    saves: 88,
  },

  {
    name: "Alejandro",
    surname: "BALDE",
    shirtNumber: 3,
    position: "defender",
    image: "/pictures/first-team/Balde.webp",
    appearances: 153,
    goals: 3,
    assists: 18,
  },

  {
    name: "Ronald",
    surname: "ARAUJO",
    shirtNumber: 4,
    position: "defender",
    image: "/pictures/first-team/Araujo.webp",
    appearances: 192,
    goals: 12,
    assists: 7,
  },

  {
    name: "Pau",
    surname: "CUBARSI",
    shirtNumber: 5,
    position: "defender",
    image: "/pictures/first-team/Cubarsi.webp",
    appearances: 107,
    goals: 1,
    assists: 5,
  },
  {
    name: "Andreas",
    surname: "CHRISTENSEN",
    shirtNumber: 15,
    position: "defender",
    image: "/pictures/first-team/Christensen.webp",
    appearances: 97,
    goals: 5,
    assists: 3,
  },
  {
    name: "Gerard",
    surname: "MARTIN",
    shirtNumber: 18,
    position: "defender",
    image: "/pictures/first-team/Martin.webp",
    appearances: 72,
    goals: 1,
    assists: 6,
  },
  {
    name: "Jules",
    surname: "KOUNDE",
    shirtNumber: 23,
    position: "defender",
    image: "/pictures/first-team/Kounde.webp",
    appearances: 172,
    goals: 10,
    assists: 20,
  },
  {
    name: "Eric",
    surname: "GARCIA",
    shirtNumber: 24,
    position: "defender",
    image: "/pictures/first-team/Eric_Garcia.webp",
    appearances: 145,
    goals: 7,
    assists: 6,
  },
  {
    name: "Pablo",
    surname: "GAVI",
    shirtNumber: 6,
    position: "midfielder",
    image: "/pictures/first-team/Gavi.webp",
    appearances: 155,
    goals: 10,
    assists: 14,
  },
  {
    name: "Gonzales",
    surname: "PEDRI",
    shirtNumber: 8,
    position: "midfielder",
    image: "/pictures/first-team/Pedri.webp",
    appearances: 227,
    goals: 28,
    assists: 29,
  },
  {
    name: "Fermin",
    surname: "LOPEZ",
    shirtNumber: 16,
    position: "midfielder",
    image: "/pictures/first-team/Fermin.webp",
    appearances: 112,
    goals: 29,
    assists: 19,
  },
  {
    name: "Marc",
    surname: "CASADO",
    shirtNumber: 17,
    position: "midfielder",
    image: "/pictures/first-team/Casado.webp",
    appearances: 61,
    goals: 1,
    assists: 7,
  },
  {
    name: "Frenkie",
    surname: "DE JONG",
    shirtNumber: 21,
    position: "midfielder",
    image: "/pictures/first-team/De_Jong.webp",
    appearances: 284,
    goals: 19,
    assists: 26,
  },
  {
    name: "Dani",
    surname: "OLMO",
    shirtNumber: 20,
    position: "midfielder",
    image: "/pictures/first-team/Olmo.webp",
    appearances: 63,
    goals: 19,
    assists: 9,
  },
  {
    name: "Marc",
    surname: "BERNAL",
    shirtNumber: 22,
    position: "midfielder",
    image: "/pictures/first-team/Bernal.webp",
    appearances: 17,
    goals: 0,
    assists: 1,
  },
  {
    name: "Ferran",
    surname: "TORRES",
    shirtNumber: 7,
    position: "forward",
    image: "/pictures/first-team/Ferran_Torres.webp",
    appearances: 184,
    goals: 59,
    assists: 20,
  },
  {
    name: "Robert",
    surname: "LEWANDOWSKI",
    shirtNumber: 9,
    position: "forward",
    image: "/pictures/first-team/Lewandowski.webp",
    appearances: 171,
    goals: 112,
    assists: 21,
  },
  {
    name: "Belloli",
    surname: "RAPHINHA",
    shirtNumber: 11,
    position: "forward",
    image: "/pictures/first-team/Raphinha.webp",
    appearances: 164,
    goals: 66,
    assists: 50,
  },
  {
    name: "Lamine",
    surname: "YAMAL",
    shirtNumber: 10,
    position: "forward",
    image: "/pictures/first-team/Lamine.webp",
    appearances: 132,
    goals: 35,
    assists: 39,
  },

  {
    name: "Marcus",
    surname: "RASHFORD",
    shirtNumber: 14,
    position: "forward",
    image: "/pictures/first-team/Rashford.webp",
    appearances: 30,
    goals: 8,
    assists: 9,
  },
  {
    name: "Roony",
    surname: "BARDGHJI",
    shirtNumber: 28,
    position: "forward",
    image: "/pictures/first-team/Bardghji.webp",
    appearances: 17,
    goals: 2,
    assists: 4,
  },
];
const historySeed = [
  {
    image: "/pictures/historical-images/08-20.webp",
    title: "2008-20. The best years in our history",
    startingText:
      "Barça delight the world with their brand of football that is appreciated by football fans from all over the world. They win three more Champions League titles in a decade of dominance for the blaugranes",
  },
  {
    image: "/pictures/historical-images/96-08.webp",
    title: "1996-2008. Barça reaches its century",
    startingText:
      "The centenary celebrations were a demonstration of what Barça means to people, an emotional journey through the Club's history that lasted the whole year",
  },
  {
    image: "/pictures/historical-images/88-96.webp",
    title: "1988-1996. The era of the 'Dream Team'",
    startingText: "Barça win their first European Cup in 1992",
  },
  {
    image: "/pictures/historical-images/78-88.webp",
    title: "1978-88. More members, more stars",
    startingText:
      "Persistence to build itself into the greatest club in the world",
  },
  {
    image: "/pictures/historical-images/69-78.webp",
    title: "1969-78. Cruyff and democracy",
    startingText:
      "The possibility of signing foreign players once more meant that the dream of signing Johan Cruyff became a reality in 1974 with Montal as president",
  },
  {
    image: "/pictures/historical-images/61-69.webp",
    title: "1961-69. A new social dimension",
    startingText:
      "The Club increases its membership despite the relative lack of success in the 1960s",
  },
  {
    image: "/pictures/historical-images/50-61.webp",
    title: "1950-1961. The Kubala era",
    startingText:
      "The Club doubles its membership and builds Camp Nou, opened on 24 September 1957 under the presidency of Francesc Miró-Sans",
  },
  {
    image: "/pictures/historical-images/39-50.webp",
    title: "1939-50. Years of perseverance",
    startingText:
      "Harsh repression and reprisals carried out by the civilian and military authorities in the post-Civil War years helped undermine the Club's very essence",
  },
  {
    image: "/pictures/historical-images/30-39.webp",
    title: "1930-39. Struggling against history",
    startingText:
      "The decade of the 1930s was marked by political instability and crisis in general that could not fail to affect FC Barcelona",
  },
  {
    image: "/pictures/historical-images/19-30.webp",
    title: "1919-30. A golden age",
    startingText:
      "The team begins to collect silverware and the players begin to earn a name for themselves",
  },
  {
    image: "/pictures/historical-images/09-19.webp",
    title: "1909-19. Consolidation at Carrer Indústria",
    startingText:
      "The Club's growth as a social entity allowed it to create its first home ground with a stand",
  },
  {
    image: "/pictures/historical-images/foundation.webp",
    title: "1899 -1909. Foundation and survival",
    startingText:
      "Founder of the Club Joan Gamper was the driving force behind FC Barcelona in its first 25 years of existence",
  },
];
const legendSeed = [
  {
    name: "Sergi Roberto",
    startingText:
      "Sergi Roberto Carnicer (Reus, Tarragona, 1992) joined FC Barcelona in 2006 with the dream of playing for the blaugrana first team, which he fulfilled time and again, even going on to become first captain and follow in the footsteps of legends like Puyol, Xavi, Iniesta and Messi.",
    image: "/pictures/Legends-pictures/sergi-roberto.jpg",
  },
  {
    name: "Jordi Alba",
    startingText:
      "A speedy full back, Jordi Alba (L’Hospitalet de Llobregat, 21 March, 1989) owned the left flank for Barça for more than a decade as part of the one of the best teams of all time",
    image: "/pictures/Legends-pictures/jordi-alba.webp",
  },
  {
    name: "Sergio Busquets",
    startingText:
      "Sergio Busquets (Sabadell, 16 July 1988), from the third division to winning the sextuple in a single season showed from the very first day that he had what it took to be part of the greatest Barça team ever",
    image: "/pictures/Legends-pictures/sergio-busquets.webp",
  },
  {
    name: "Gerard Pique",
    startingText:
      "Piqué (Barcelona, 2 February 1987) was an FC Barcelona player through and through who identified with the club to the core. As he said as a child, he didn't want to be a footballer. he wanted to be a Barça player",
    image: "/pictures/Legends-pictures/gerard-pique.webp",
  },
  {
    name: "Leo Messi",
    startingText:
      "Messi (Rosario, Argentina, 24 June 1987) is the greatest player of all time and FC Barcelona record setter. Trained at La Masia, he will always be associated with Barça as the greatest player ever to wear the blaugrana shirt",
    image: "/pictures/Legends-pictures/leo-messi.jpg",
  },
  {
    name: 'Daniel Alves da Silva "Dani Alves"',
    startingText:
      "Dani Alves (Juazeiro, Brazil, 1983) is considered the best right back in Barça’s long history. He arrived in 2008 from fellow La Liga club Sevilla, already with a reputation as one of the best defenders in the country",
    image: "/pictures/Legends-pictures/Dani-Alves.webp",
  },
  {
    name: "Luis Suárez",
    startingText:
      "Suárez, (Salto, Uruguay, 1987) was one of the best strikers in the Club's history with a total of 198 goals in official competition",
    image: "/pictures/Legends-pictures/luis-suarez.webp",
  },
  {
    name: "Ivan Rakitić",
    startingText:
      "Since arriving in the summer of 2014, Rakitic (1988, Rheinfelden, Switzerland, but nationalised Croatian) was a regular start in midfielder for his whole Barça career, totally the fifth most appearances for a foreigner",
    image: "/pictures/Legends-pictures/Rakitich.webp",
  },
  {
    name: "Andrés Iniesta",
    startingText:
      "Iniesta (Fuentealbilla, Albacete, 1984) was one of the most loved and emblematic of players for the Barça fans. The ‘culers’ has always valued his silky style of play, his commitment to the team and his modesty and good humour off the pitch.",
    image: "/pictures/Legends-pictures/iniesta.webp",
  },
  {
    name: "Neymar Da Silva",
    startingText:
      "Neymars Jr (Mogi das Cruzes, Sao Paulo, Brazil, 1992) came to Barcelona in 2013 from Santos when he was just 21 and lived up to the high expectations in four amazing seasons",
    image: "/pictures/Legends-pictures/neymar.webp",
  },
  {
    name: "Pedro Rodríguez",
    startingText:
      "Pedro (Santa Cruz de Tenerife, 1987) was a two footed winger who could even play as a striker thanks to his dribbling and shooting capabilities",
    image: "/pictures/Legends-pictures/pedro.webp",
  },
  {
    name: "Xavi Hernández",
    startingText:
      "Xavi (Terrassa, Barcelona, 1980) is, statistically speaking, the most successful player in Spanish football history. A midfielder from the club’s youth system, he’s the perfect example of the Barça values",
    image: "/pictures/Legends-pictures/xavi.webp",
  },
  {
    name: "Victor Valdés",
    startingText:
      "Valdés (l’Hospitalet de Llobregat, Barcelona, 1982) was Barça’s first choice keeper for 12 seasons",
    image: "/pictures/Legends-pictures/valdes.webp",
  },
  {
    name: "Carles Puyol",
    startingText:
      "Puyol (La Pobla de Segur, Lleida, 1978) has been one of the most important players in Barça’s history",
    image: "/pictures/Legends-pictures/puyol.webp",
  },
  {
    name: "David Villa",
    startingText:
      "David Villa (Tuilla, Asturias, 1981) came to Barça as an experienced striker and as a blaugrana he cemented his place as one of the best Spanish strikers ever",
    image: "/pictures/Legends-pictures/villa.webp",
  },
  {
    name: "Samuel Eto'o",
    startingText:
      "Eto’o (Nkon, Cameroon, 1981) goes down in Barça history as “the indomitable lion”, the forward who never gave up. For 5 years he was the team’s target man, and the host of titles won were, to a massive extent, thanks to the crucial goals he scored",
    image: "/pictures/Legends-pictures/samuel.webp",
  },
  {
    name: "Anderson Luis de Souza ‘Deco’",
    startingText:
      "Deco (Sao Bernardo, Brazil, 27-08-1977) was a player with a winning spirit and tactical intelligence",
    image: "/pictures/Legends-pictures/deco.webp",
  },
  {
    name: "Ronaldo de Assís Moreira ‘Ronaldinho’",
    startingText:
      "The Brazilian striker (Porto Alegre,1980) joined the Club in 2003 and changed its history forever. In his five seasons at the club he became one its greatest ever footballers",
    image: "/pictures/Legends-pictures/ronaldinho.webp",
  },
  {
    name: "Juliano Belletti",
    startingText:
      "Belletti (Cascavel, Brazil, 1976) has a place in history thanks to his winner in the Champions League final in Paris in 2006",
    image: "/pictures/Legends-pictures/beletti.webp",
  },
  {
    name: "Phillip Cocu",
    startingText:
      "Cocu (Eindhoven, Netherlands, 1970) came to Barça after a successful career at PSV Eindhoven and the versatile midfielder went to virtually all there is to win with the blaugranes",
    image: "/pictures/Legends-pictures/cocu.webp",
  },
  {
    name: "Patrick Stephan Kluivert",
    startingText:
      "The Dutch striker (Amsterdam, Holland, 1976) came through the youth ranks at Ajax, going on to great success with the first team before joining AC Milan for a season and then Barça in the summer of 1998. As a blaugrana he scored 145 goals in 308 matches, making him one of the top scorers in the Club's history",
    image: "/pictures/Legends-pictures/kluivert.webp",
  },
  {
    name: "Vitor Borba Ferreira 'Rivaldo'",
    startingText:
      "Rivaldo (Recife, Brazil, 1972) was signed from Deportivo la Coruña at the start of the 1997-98 season as a direct replacement for his compatriot Ronaldo",
    image: "/pictures/Legends-pictures/rivaldo.webp",
  },
  {
    name: "Ronaldo Luiz Nazario",
    startingText:
      "Born in Rio de Janeiro in 1976, Ronaldo joined Barça in 1996 from PSV Eindhoven, as an outstandingly promising young striker",
    image: "/pictures/Legends-pictures/ronaldo.webp",
  },
  {
    name: "Luis Enrique Martínez",
    startingText:
      "The popular 'Lucho' (Gijón, 1970) came to FC Barcelona in the summer of 1996 as a free agent after having played at Real Madrid for five seasons",
    image: "/pictures/Legends-pictures/enrique.webp",
  },
  {
    name: "Sergi Barjuan",
    startingText:
      "He was a fixture in the side at left back practically from the day of his debut right up until his final season in 2001/02 as a blaugrana",
    image: "/pictures/Legends-pictures/barjuan.webp",
  },
  {
    name: "Romario da Souza",
    startingText:
      "Born in Rio de Janeiro in 1966, Romario came to FC Barcelona from PSV Eindhoven in 1993",
    image: "/pictures/Legends-pictures/romario.webp",
  },
  {
    name: "Hristo Stoichkov",
    startingText:
      "The striker was born in Plovdiv (Bulgaria) in 1966. He left CSKA Sofia to join Barça in 1990 and stayed until 1998 with the exception of a single season in Serie A with Parma in 1995-96",
    image: "/pictures/Legends-pictures/stoichkov.webp",
  },
  {
    name: "Albert Ferrer",
    startingText:
      "Albert Ferrer (Barcelona, 1970) came from the youth set up and was one of the pillars of the legendary 'Dream Team' coached by Johan Cruyff",
    image: "/pictures/Legends-pictures/ferrer.webp",
  },
  {
    name: "Josep Guardiola",
    startingText:
      "A gifted midfielder with an exquisite technique and an ability to read the game, he was the fulcrum of the team with the famous number '4' on his back",
    image: "/pictures/Legends-pictures/guardiola.webp",
  },
  {
    name: "Ronald Koeman",
    startingText:
      "'Tintin' Koeman will always get a mention in FC Barcelona history for scoring the goal that handed Barça victory in the 1992 European Cup at Wembley",
    image: "/pictures/Legends-pictures/koeman.webp",
  },
  {
    name: "Aitor 'Txiki' Begiristain",
    startingText:
      "Aitor Begiristain (Olaberria, Guipúzcoa, 1964), or 'Txiki' as he is better known, was another of the key members of the legendary 'Dream Team'",
    image: "/pictures/Legends-pictures/begiristain.webp",
  },
  {
    name: "Guillermo Amor",
    startingText:
      "Amor (Benidorm, Alicante, 1967) is an important figure in the Club's history after having made 567 appearances in a Barça shirt",
    image: "/pictures/Legends-pictures/guillermo.webp",
  },
  {
    name: "Michael Laudrup",
    startingText:
      "The Brazilian striker (Porto Alegre,1980) joined the Club in 2003 and changed its history forever. In his five seasons at the club he became one its greatest ever footballers",
    image: "/pictures/Legends-pictures/laudrup.webp",
  },
  {
    name: "Gary Liniker",
    startingText:
      "Lineker (Leicester, England, 1960) was another striker who was a fan favourite at Camp Nou",
    image: "/pictures/Legends-pictures/liniker.webp",
  },
  {
    name: "Diego Armando Maradona",
    startingText:
      "Considered the best player in the world in the 1980s, and one of the greatest of all time, Maradona was born in 1960 in Lanús, Argentina",
    image: "/pictures/Legends-pictures/maradona.webp",
  },
  {
    name: "Bernd Schuster",
    startingText:
      "Midfielder of exceptional quality, Schuster (Augsburg, Germany, 1959) was the driving force of Barça throughout nearly all of the eighties",
    image: "/pictures/Legends-pictures/schuster.webp",
  },
  {
    name: "Johan Neeskens",
    startingText:
      "The man dubbed ‘Johan II’ (Heemstede, Holland, 1951-Algeria, 2024) arrived in Barcelona in 1974 from Ajax to team up with former colleague Johan Cruyff",
    image: "/pictures/Legends-pictures/neeskens.webp",
  },
  {
    name: "Johan Cruyff",
    startingText:
      "Cruyff (Amsterdam, 25/04/1947 - Barcelona, 24/03/2016) was one of the best players in the world of all time and in his time, he was considered number one",
    image: "/pictures/Legends-pictures/cruyff.webp",
  },
  {
    name: "Luis Suárez",
    startingText:
      "Considered by many one of the best players in the history of Spanish football, Luis Suárez (La Coruña, 1935 - Milan, 2023) was a key piece for Barça in the second half of the 1950s, but unfortunately he left amidst great success and his final burst came outside the club",
    image: "/pictures/Legends-pictures/luis.webp",
  },
  {
    name: "Ladislava Kubala",
    startingText:
      "A legendary figure at the Club, Kubala (Budapest, Hungary, 1927 – Barcelona 2002) signed for FC Barcelona in June 1950, when he arrived with a team of refugee players from Eastern Europe called Hungaria",
    image: "/pictures/Legends-pictures/Kubala.webp",
  },
  {
    name: "Ricardo Zamora",
    startingText:
      "Known as the 'Divine', Ricardo Zamora (Barcelona, 1901 – Barcelona, 1978) is viewed by many as the best goalkeeper ever to come out of Spain",
    image: "/pictures/Legends-pictures/zamora.webp",
  },
  {
    name: "Juan Gamper",
    startingText:
      "Founder of FC Barcelona on the 29th of November 1899 and five times president of the club between 1908 and 1925, Joan Gamper (Winterthur, Switzerland, 1877 – Barcelona 1930) has also passed into the Club's history as Barça's first real important figure",
    image: "/pictures/Legends-pictures/gamper.webp",
  },
];
const matchSeed = [
  {
    apponent: "Mallorca",
    stadium: "Estadi Mallorca Son Moix",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/MLL.png",
    date: "08.16.25, 18:30",
    goalApponent: 0,
    goalBarca: 3,
  },
  {
    apponent: "Levante",
    stadium: "Ciutat de Valencia",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/LEV.png",
    date: "08.23.25, 20:30",
    goalApponent: 2,
    goalBarca: 3,
  },
  {
    apponent: "Rayo Vallecano",
    stadium: "Estadio de Vallecas",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/RAY.png",
    date: "08.31.25, 20:30",
    goalApponent: 1,
    goalBarca: 1,
  },
  {
    apponent: "Valencia",
    stadium: "Estadi Johan Cruyff",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/VAL.png",
    date: "09.14.25, 20:00",
    goalBarca: 6,
    goalApponent: 0,
  },
  {
    apponent: "Newcastle",
    stadium: "St.James' Park",
    tournament: "Champions League",
    isInHome: false,
    image: "/pictures/club-logos/NEW.png",
    date: "09.18.25, 20:00",
    goalApponent: 1,
    goalBarca: 2,
  },
  {
    apponent: "Getafe",
    stadium: "Estadi Johan Cruyff",
    tournament: "La Liga",

    isInHome: true,
    image: "/pictures/club-logos/GET.png",
    date: "09.21.25, 20:00",
    goalBarca: 3,
    goalApponent: 0,
  },
  {
    apponent: "Real Oviedo",
    stadium: "Carlos Tartiere",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/OVI.png",
    date: "09.25.25, 20:30",
    goalBarca: 3,
    goalApponent: 1,
  },
  {
    apponent: "Real Sociedad",
    stadium: "Estadi Olímpic Lluís Companys",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/RSO.png",
    date: "09.28.25, 17:30",
    goalBarca: 2,
    goalApponent: 1,
  },
  {
    apponent: "PSG",
    stadium: "Estadi Olímpic Lluís Companys",
    tournament: "Champions League",
    isInHome: true,
    image: "/pictures/club-logos/PSG.png",
    date: "10.01.25, 20:00",
    goalBarca: 1,
    goalApponent: 2,
  },
  {
    apponent: "Sevilla",
    stadium: "Ramón Sánchez-Pizjuán",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/SEV.png",
    date: "10.05.25, 15:15",
    goalBarca: 1,
    goalApponent: 4,
  },
  {
    apponent: "Girona",
    stadium: "Estadi Olímpic Lluís Companys",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/GIR.png",
    date: "10.18.25, 15:15",
    goalBarca: 2,
    goalApponent: 1,
  },
  {
    apponent: "Olympiacos",
    stadium: "Estadi Olímpic Lluís Companys",
    tournament: "Champions League",
    isInHome: true,
    image: "/pictures/club-logos/OLY.png",
    date: "10.21.25, 15:15",
    goalBarca: 6,
    goalApponent: 1,
  },
  {
    apponent: "Real Madrid",
    stadium: "Santiago Bernabéu",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/RMD.png",
    date: "10.26.25, 15:15",
    goalBarca: 1,
    goalApponent: 2,
  },
  {
    apponent: "Elche",
    stadium: "Estadi Olímpic Lluís Companys",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/ELC.png",
    date: "11.02.25, 17:30",
    goalBarca: 3,
    goalApponent: 1,
  },
  {
    apponent: "Club Bruge",
    stadium: "Jan Breydelstadion",
    tournament: "Champions League",
    isInHome: false,
    image: "/pictures/club-logos/BRU.png",
    date: "11.05.25, 20:00",
    goalBarca: 3,
    goalApponent: 3,
  },
  {
    apponent: "Celta Vigo",
    stadium: "Estadio Abanca-Balaídos",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/CLV.png",
    date: "11.09.25, 20:00",
    goalBarca: 4,
    goalApponent: 2,
  },
  {
    apponent: "Athletic Club",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/ATH.png",
    date: "11.22.25, 15:15",
    goalBarca: 4,
    goalApponent: 0,
  },
  {
    apponent: "Chelsea",
    stadium: "Stamford Bridge",
    tournament: "Champions League",
    isInHome: false,
    image: "/pictures/club-logos/CHE.png",
    date: "11.25.25, 20:00",
    goalBarca: 0,
    goalApponent: 3,
  },
  {
    apponent: "Deportivo Alaves",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/CDA.png",
    date: "11.29.25, 15:15",
    goalBarca: 3,
    goalApponent: 1,
  },
  {
    apponent: "Atletico Madrid",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/ATM.png",
    date: "12.02.25, 20:00",
    goalBarca: 3,
    goalApponent: 1,
  },
  {
    apponent: "Real Betis",
    stadium: "Estadio La Cartuja de Sevilla",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/BET.png",
    date: "12.06.25, 17:30",
    goalBarca: 5,
    goalApponent: 3,
  },
  {
    apponent: "Eintracht Frankfurt",
    stadium: "Spotify Camp Nou",
    tournament: "Champions League",
    isInHome: true,
    image: "/pictures/club-logos/SGE.png",
    date: "12.09.25, 20:00",
    goalBarca: 2,
    goalApponent: 1,
  },
  {
    apponent: "Osasuna",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/OSA.png",
    date: "12.13.25, 17:30",
    goalBarca: 2,
    goalApponent: 0,
  },
  {
    apponent: "Deportivo Guadalajara",
    stadium: "Estadio Pedro Escartin",
    tournament: "copa del rey",
    isInHome: false,
    image: "/pictures/club-logos/GUA.png",
    date: "12.16.25, 21:30",
    goalBarca: 2,
    goalApponent: 0,
  },
  {
    apponent: "Villareal",
    stadium: "Estadio de la Cerámica",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/VIL.png",
    date: "12.21.25, 15:15",
    goalBarca: 2,
    goalApponent: 0,
  },
  {
    apponent: "Espanyol",
    stadium: "RCDE Stadium",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/ESP.png",
    date: "01.03.26, 20:00",
    goalBarca: 2,
    goalApponent: 0,
  },
  {
    apponent: "Athletic Club",
    stadium: "Alinma Stadium",
    tournament: "Supercopa de Espana",
    isInHome: true,
    image: "/pictures/club-logos/ATH.png",
    date: "01.07.26, 20:00",
    goalBarca: 5,
    goalApponent: 0,
  },
  {
    apponent: "Real Madrid",
    stadium: "Alinma Stadium",
    tournament: "Supercopa de Espana",
    isInHome: true,
    image: "/pictures/club-logos/RMD.png",
    date: "01.11.26, 20:00",
    goalBarca: 3,
    goalApponent: 2,
  },
  {
    apponent: "Racing Santander",
    stadium: "El Sardinero",
    tournament: "copa del rey",
    isInHome: false,
    image: "/pictures/club-logos/RAC.png",
    date: "01.16.26, 21:15",
    goalBarca: 2,
    goalApponent: 0,
  },
  {
    apponent: "Real Sociedad",
    stadium: "Anoeta Stadium",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/RSO.png",
    date: "01.18.26, 21:00",
    goalBarca: 1,
    goalApponent: 2,
  },
  {
    apponent: "Slavia Pragua",
    stadium: "Fortuna Arena",
    tournament: "Champions League",
    isInHome: false,
    image: "/pictures/club-logos/SVP.png",
    date: "01.21.26, 21:00",
    goalBarca: 4,
    goalApponent: 2,
  },
  {
    apponent: "Real Oviedo",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/OVI.png",
    date: "01.25.26, 16:15",
    goalBarca: 3,
    goalApponent: 0,
  },
  {
    apponent: "FC Copenhagen",
    stadium: "Spotify Camp Nou",
    tournament: "Chempions League",
    isInHome: true,
    image: "/pictures/club-logos/CPH.png",
    date: "01.25.28, 20:00",
  },
  {
    apponent: "Elche",
    stadium: "Estadio Manuel Martínez Valero",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/ELC.png",
    date: "02.01.26, 16:00",
  },

  {
    apponent: "Albacete",
    stadium: "Estadio Carlos Belmonte",
    tournament: "copa del rey",
    isInHome: false,
    image: "/pictures/club-logos/ALB.png",
    date: "02.04.26, 21:00",
  },
  {
    apponent: "Mallorca",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/MLL.png",
    date: "02.08.26, 16:00",
  },
  {
    apponent: "Girona",
    stadium: "Estadi Montilivi",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/GIR.png",
    date: "02.15.26, 16:00",
  },
  {
    apponent: "Levante",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/LEV.png",
    date: "02.22.26, 16:00",
  },
  {
    apponent: "Villareal",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/VIL.png",
    date: "03.01.26, 16:00",
  },
  {
    apponent: "Athletic Club",
    stadium: "San Mamés Stadium ",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/ATH.png",
    date: "03.08.26, 16:00",
  },
  {
    apponent: "Sevilla",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/SEV.png",
    date: "03.15.26, 16:00",
  },
  {
    apponent: "Rayo Vallecano",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/RAY.png",
    date: "03.22.26, 16:00",
  },
  {
    apponent: "Atletico Madrid",
    stadium: "Metropolitano Stadium",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/ATM.png",
    date: "04.05.26, 16:00",
  },
  {
    apponent: "Espanyol",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/ESP.png",
    date: "04.12.26, 16:00",
  },
  {
    apponent: "Getafe",
    stadium: "Coliseum Stadium",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/GET.png",
    date: "04.19.26, 16:00",
  },
  {
    apponent: "Celta Vigo",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/CLV.png",
    date: "04.22.26, 20:00",
  },
  {
    apponent: "Osasuna",
    stadium: "Estadio El Sadar",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/OSA.png",
    date: "05.03.26, 16:00",
  },
  {
    apponent: "Real Madrid",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/RMD.png",
    date: "05.10.26, 16:00",
  },
  {
    apponent: "Deportivo Alaves",
    stadium: "Mendizorrotza Stadium",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/CDA.png",
    date: "05.13.26, 20:00",
  },
  {
    apponent: "Real Betis",
    stadium: "Spotify Camp Nou",
    tournament: "La Liga",
    isInHome: true,
    image: "/pictures/club-logos/BET.png",
    date: "05.17.26, 16:00",
  },
  {
    apponent: "Valencia",
    stadium: "Mestalla Stadium",
    tournament: "La Liga",
    isInHome: false,
    image: "/pictures/club-logos/VAL.png",
    date: "05.24.26, 16:00",
  },
];
export const itemSeed = [
  {
    id: "1",
    title: "Goalkeeper socks 25/26",
    image: "/pictures/items/goalkeeper-socks.webp",
    price: 1999,
    review: {
      stars: 8.6,
      reviews: 1243,
    },
  },
  {
    id: "2",
    title: "Goalkeeper shorts 25/26",
    image: "/pictures/items/goalkeeper-shorts.webp",
    price: 4999,
    review: {
      stars: 8.6,
      reviews: 243,
    },
  },
  {
    id: "3",
    title: "Goalkeeper jersey 25/26",
    image: "/pictures/items/goalkeeper-jersey.webp",
    price: 12499,
    review: {
      stars: 8.8,
      reviews: 3600,
    },
  },
  {
    id: "4",
    title: "third socks 25/26",
    image: "/pictures/items/third-socks.webp",
    price: 1999,
    review: {
      stars: 10,
      reviews: 976,
    },
  },
  {
    id: "5",
    title: "third shorts 25/26",
    image: "/pictures/items/third-shorts.webp",
    price: 7499,
    review: {
      stars: 10,
      reviews: 500,
    },
  },
  {
    id: "6",
    title: "third jersey 25/26",
    image: "/pictures/items/third-jersey.webp",
    price: 9999,
    review: {
      stars: 9.9,
      reviews: 1232,
    },
  },
  {
    id: "7",
    title: "Baby's third kit 25/26",
    image: "/pictures/items/baby-third-form.webp",
    price: 6499,
    review: {
      stars: 8.9,
      reviews: 122,
    },
  },
  {
    id: "8",
    title: "fourth socks 25/26",
    image: "/pictures/items/fourth-socks.webp",
    price: 1999,
    review: {
      stars: 7.9,
      reviews: 232,
    },
  },
  {
    id: "9",
    title: "fourth shorts 25/26",
    image: "/pictures/items/fourth-shorts.webp",
    price: 7499,
    review: {
      stars: 7.8,
      reviews: 800,
    },
  },
  {
    id: "10",
    title: "fourth jersey 25/26",
    image: "/pictures/items/fourth-jersey.webp",
    price: 9999,
    review: {
      stars: 8.8,
      reviews: 550,
    },
  },
  {
    id: "11",
    title: "Baby's fourth kit 25/26",
    image: "/pictures/items/baby-fourth-kit.webp",
    price: 6499,
    review: {
      stars: 8.2,
      reviews: 654,
    },
  },
  {
    id: "12",
    title: "home socks 25/26",
    image: "/pictures/items/home-socks.webp",
    price: 1999,
    review: {
      stars: 8.4,
      reviews: 939,
    },
  },
  {
    id: "13",
    title: "home shorts 25/26",
    image: "/pictures/items/home-shorts.webp",
    price: 7499,
    review: {
      stars: 8.5,
      reviews: 839,
    },
  },
  {
    id: "14",
    title: "home jersey 25/26",
    image: "/pictures/items/ucl-jersey.webp",
    price: 9999,
    review: {
      stars: 8.4,
      reviews: 935,
    },
  },
  {
    id: "15",
    title: "Baby's home kit 25/26",
    image: "/pictures/items/baby-home-kit.webp",
    price: 6999,
    review: {
      stars: 8.1,
      reviews: 1211,
    },
  },
  {
    id: "16",
    title: "away socks golakeeper 25/26",
    image: "/pictures/items/away-socks-goalkeeper.webp",
    price: 1999,
    review: {
      stars: 8.1,
      reviews: 439,
    },
  },
  {
    id: "17",
    title: "away shorts goalkeeper 25/26",
    image: "/pictures/items/away-shorts-goalkeeper.webp",
    price: 4999,
    review: {
      stars: 8.5,
      reviews: 739,
    },
  },
  {
    id: "18",
    title: "away jersey goalkeeper 25/26",
    image: "/pictures/items/away-jersey-goalkeeper.webp",
    price: 9999,
    review: {
      stars: 8.7,
      reviews: 1939,
    },
  },
  {
    id: "18",
    title: "away socks 25/26",
    image: "/pictures/items/away-socks.webp",
    price: 1999,
    review: {
      stars: 8.4,
      reviews: 99,
    },
  },

  {
    id: "19",
    title: "away shorts 25/26",
    image: "/pictures/items/away-shorts.webp",
    price: 7499,
    review: {
      stars: 8.1,
      reviews: 199,
    },
  },
  {
    id: "20",
    title: "away jersey 25/26",
    image: "/pictures/items/away-jersey.webp",
    price: 9999,
    review: {
      stars: 8.4,
      reviews: 4567,
    },
  },
  {
    id: "21",
    title: "Retro Jersey FC Barcelona",
    image: "/pictures/items/retro-jersey.webp",
    price: 5999,
    review: {
      stars: 9.1,
      reviews: 1939,
    },
  },
  {
    id: "22",
    title: "MESSI | Lionel Messi 20/21 Signed Home Shirt",
    image: "/pictures/items/leo-messi-jersey.webp",
    price: 279999,
    review: {
      stars: 8.4,
      reviews: 939,
    },
  },
  {
    id: "23",
    title: "Bucket",
    image: "/pictures/items/bucket.webp",
    price: 3499,
    review: {
      stars: 9.2,
      reviews: 845,
    },
  },
  {
    id: "24",
    title: "Backpack Navy",
    image: "/pictures/items/backpack.webp",
    price: 7999,
    review: {
      stars: 8.5,
      reviews: 1234,
    },
  },
  {
    id: "25",
    title: "Crew Navy Fan Club",
    image: "/pictures/items/crew-navy.webp",
    price: 5999,
    review: {
      stars: 8.8,
      reviews: 1534,
    },
  },
  {
    id: "26",
    title: "Jersey Retro Basket 94",
    image: "/pictures/items/basketball.webp",
    price: 6999,
    review: {
      stars: 9.5,
      reviews: 1167,
    },
  },
  {
    id: "27",
    title: "Retro Jersey 90-92",
    image: "/pictures/items/retro-jersey-90.webp",
    price: 6999,
    review: {
      stars: 8.1,
      reviews: 637,
    },
  },
  {
    id: "28",
    title: "T-shirt Fan Club Barca",
    image: "/pictures/items/t-shirt.webp",
    price: 2999,
    review: {
      stars: 9.2,
      reviews: 2234,
    },
  },
  {
    id: "29",
    title: "Jacket Barca",
    image: "/pictures/items/jacket.webp",
    price: 13499,
    review: {
      stars: 8.1,
      reviews: 745,
    },
  },
  {
    id: "30",
    title: "pant tech Barca",
    image: "/pictures/items/pant.webp",
    price: 11499,
    review: {
      stars: 8.2,
      reviews: 534,
    },
  },
  {
    id: "31",
    title: "Vintage 80/81 Jersey",
    image: "/pictures/items/vintage-jersey.webp",
    price: 6999,
    review: {
      stars: 9.9,
      reviews: 5234,
    },
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    await History.deleteMany({});
    await History.insertMany(historySeed);
    await Player.deleteMany({});
    await Player.insertMany(playerSeed);
    await News.deleteMany({});
    await News.insertMany(newsSeed);
    await Legend.deleteMany({});
    await Legend.insertMany(legendSeed);
    await Match.deleteMany({});
    await Match.insertMany(matchSeed);
    await Item.deleteMany({});
    await Item.insertMany(itemSeed);
    console.log("Database seeded!");
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

seedDB();
