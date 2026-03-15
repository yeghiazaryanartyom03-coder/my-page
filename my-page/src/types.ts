export interface IMatch {
  _id: string;
  opponent: string;
  stadium?: string;
  tournament: string;
  image: string;
  isInHome: boolean;
  date: string;
  goalBarca?: number;
  goalOpponent?: number;
}

export interface INews {
  _id: string;
  title: string;
  author: string;
  views: number;
  image: string;
}

export interface IPlayer{
  _id:string;
  name: string;
  surname?: string;
  shirtNumber: number;
  age: number;
  nationality: string;
  biography: string[];
  tags: string[];
  position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward";
  image: string;
  stats: {
    total: {
      appearances: number;
      cleanSheets?: number;
      saves?: number;
      goals?: number;
      assists?: number;
      goalConceded?: number;
    };
    seasons: {
      season: string;
      appearances: number;
      goals?: number;
      assists?: number;
      goalConceded?: number;
      cleanSheets?: number;
      saves?: number;
    }[];
  };
}

export interface IHistory {
  _id: string;
  image: string;
  title: string;
  startingText: string;

  period: string;
  slug: string;

  description: string;

  keyMoments: {
    title: string;
    description: string;
  }[];

  statistics: {
    championsLeague: number;
    laLiga: number;
    copaDelRey: number;
    clubWorldCup: number;
    totalTrophies: number;
  };

  legends: {
    name: string;
    position: string;
    image: string;
  }[];

  timeline: {
    year: number;
    event: string;
  }[];
}

export interface IBiographyChapter {
  title: string;
  text: string;
}

export interface IQuote {
  text: string;
  author: string;
}

export interface IStats {
  matches: number;
  goals?: number;
  assists?: number;
  cleanShets?: number;
  trophies: number;
}

export interface IAchievement {
  name: string;
  count: number;
}

export type Position = "Goalkeeper" | "Defender" | "Midfielder" | "Forward";


export interface ILegend {
  _id: string;
  image: string;
  name: string;
  fullName: string;
  startingText: string;
  position: Position;
  birthDate: string; // можно хранить как строку, например "24 June 1987"
  nationality: string;
  height: string; // например "170 cm"
  biography: IBiographyChapter[];
  quote: IQuote;
  stats: IStats;
  achievements: IAchievement[];
}

export interface IItem {
  id: string;
  image: string;
  title: string;
  price: number;
  review: {
    stars: number;
    reviews: number;
  };
}

export interface ServerItem extends IItem {
  quantity: number;
  shippingMethod: "standard" | "express" | "free";
}

export interface CartItem {
  itemId: string;
  quantity: number;
  shippingMethod: ShippingMethod;
}

export type ShippingMethod = "standard" | "express" | "free";
