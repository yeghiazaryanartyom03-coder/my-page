interface SquadPlayer {
  id: number;           
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

interface SquadResponse {
  response: Array<{
    team: {
      id: number;
      name: string;
    };
    players: SquadPlayer[];
  }>;
}


import axios from 'axios';

export class ApiFootballService {
  private client;

  constructor(apiKey: string) {
    this.client = axios.create({
      baseURL: 'https://v3.football.api-sports.io',  
      headers: {
        'x-apisports-key': apiKey,                   
        'Content-Type': 'application/json'
      }
    });
  }

  async getTeamSquad(teamId: number): Promise<SquadPlayer[]> {
    try {
      const response = await this.client.get<SquadResponse>('/players/squads', {
        params: { team: teamId }
      });
      
      // API возвращает массив, но для одной команды там один объект
      return response.data.response[0]?.players || [];
    } catch (error) {
      console.error('Ошибка получения состава:', error);
      return [];
    }
  }

  
}


