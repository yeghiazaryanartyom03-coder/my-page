import { Router } from "express";
import axios from "axios";
import { Player, IPlayer } from "../models/Player";

const router = Router();

//const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// // POST /import-barcelona — импорт состава и статистики за текущий сезон (2024)
// router.post("/import-barcelona", async (req, res) => {
//   try {
//     const apiKey = process.env.API_FOOTBALL_KEY;
//     if (!apiKey) {
//       return res.status(500).json({ error: "API ключ не найден в .env" });
//     }

//     // 1. Получаем текущий состав Барселоны (ID команды = 529)
//     const squadResponse = await axios.get(
//       "https://v3.football.api-sports.io/players/squads?team=529",
//       { headers: { "x-apisports-key": apiKey } },
//     );

//     const squad = squadResponse.data.response[0]?.players;
//     console.log(squad);
//     if (!squad || squad.length === 0) {
//       return res.status(404).json({ error: "Состав не найден в API" });
//     }

//     const results = [];

//     // 2. Для каждого игрока получаем статистику за сезон 2024
//     for (const apiPlayer of squad) {
//       try {
//         const shirtNumber = apiPlayer.number;

//         if (!shirtNumber || shirtNumber >= 25) {
//           console.log(
//             `Игрок ${apiPlayer.name} (номер ${shirtNumber || "не указан"}) пропущен, т.к. номер >= 25`,
//           );
//           continue; // переход к следующему игроку без запроса статистики
//         }
//         // Запрашиваем статистику игрока за сезон 2024
//         const statsResponse = await axios.get(
//           `https://v3.football.api-sports.io/players?id=${apiPlayer.id}&season=2024`,
//           {
//             headers: { "x-apisports-key": apiKey },
//           },
//         );

//         const playerData = statsResponse.data.response[0];
//         console.log(playerData.statistics);
//         const stats = playerData?.statistics[0] || {};

//         // console.log(`📊 Данные для ${apiPlayer.name}:`, playerData);
//         // if (!playerData) console.log(`❗ Пустой ответ для ${apiPlayer.name}`);

//         // Разделяем полное имя на имя и фамилию
//         const nameParts = apiPlayer.name.trim().split(" ");
//         const firstName = nameParts[0];
//         const lastName = nameParts.slice(1).join(" ") || ""; // если фамилии нет — пустая строка

//         // Определяем позицию из API
//         let position: IPlayer["position"] = "Midfielder"; // по умолчанию
//         const posFromApi = stats.games?.position?.toLowerCase() || "";
//         if (posFromApi.includes("defender")) position = "defender";
//         else if (posFromApi.includes("midfield")) position = "Midfielder";
//         else if (
//           posFromApi.includes("attack") ||
//           posFromApi.includes("forward")
//         )
//           position = "forward";
//         else if (posFromApi.includes("goalkeeper")) position = "goalkeeper";

//         // Формируем объект для сохранения
//         const playerToSave = {
//           name: firstName,
//           surname: lastName,
//           shirtNumber: apiPlayer.number,
//           appearances: stats.games?.appearences,
//           position,
//           image: apiPlayer.photo,
//           goals: stats.goals?.total,
//           assists: stats.goals?.assists,
//           // Для вратарей добавляем специфические поля
//           ...(position === "goalkeeper"
//             ? {
//                 cleanSheets: stats.cleansheets?.total,
//                 saves: stats.saves?.total,
//               }
//             : {}),
//         };

//         // Сохраняем или обновляем игрока (ищем по имени, фамилии и номеру)
//         const updatedPlayer = await Player.findOneAndUpdate(
//           {
//             name: playerToSave.name,
//             surname: playerToSave.surname,
//             shirtNumber: playerToSave.shirtNumber,
//           },
//           playerToSave,
//           { upsert: true, new: true },
//         );

//         results.push(updatedPlayer);

//         // Небольшая задержка, чтобы не забанили (можно убрать, если лимиты позволяют)
//         await delay(300);
//       } catch (err) {
//         console.error(`Ошибка при обработке игрока ${apiPlayer.name}:`, err);
//         // Продолжаем со следующим игроком
//       }
//     }

//     res.json({
//       success: true,
//       imported: results.length,
//       players: results,
//     });
//   } catch (error: any) {
//     console.error("Ошибка при импорте:", error);
//     res.status(500).json({
//       error: "Ошибка при импорте игроков",
//       details: error.response?.data || error.message,
//     });
//   }
// });

export default router;

// import { Router } from "express";
// import axios from "axios";
// import { Player, IPlayer } from "../models/Player";

// const router = Router();

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// router.get("/", async (req, res) => {
//   try {
//     const players = await Player.find();
//     res.json(players);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// router.post("/import-barcelona", async (req, res) => {
//   try {
//     const apiKey = process.env.API_FOOTBALL_KEY;
//     if (!apiKey) {
//       return res.status(500).json({ error: "API ключ не найден в .env" });
//     }

//     // 1. Получаем состав Барселоны
//     const squadResponse = await axios.get(
//       "https://v3.football.api-sports.io/players/squads?team=529",
//       { headers: { "x-apisports-key": apiKey } }
//     );

//     const squad = squadResponse.data.response[0]?.players;
//     console.log("Состав:", squad[5]);
//     if (!squad || squad.length === 0) {
//       return res.status(404).json({ error: "Состав не найден в API" });
//     }

//     // Берём первого игрока для теста
//     const testPlayer = squad[5];
//     const shirtNumber = testPlayer.number;

//     if (!shirtNumber || shirtNumber >= 25) {
//       console.log(
//         `Игрок ${testPlayer.name} (номер ${shirtNumber || "не указан"}) пропущен, т.к. номер >= 25`,
//       );
//       // Для теста можем продолжить, чтобы увидеть данные, даже если номер >= 25.
//       // Если нужно именно отсеять – раскомментируйте следующую строку:
//       return res.json({ message: "Игрок не подходит по номеру", player: testPlayer });
//     }

//     // 2. Запрашиваем статистику за сезон 2024
//     const statsResponse = await axios.get(
//       `https://v3.football.api-sports.io/players?id=${testPlayer.id}&season=2025`,
//       { headers: { "x-apisports-key": apiKey } }
//     );

//     const playerData = statsResponse.data.response[0].statistics;
//     console.log(playerData);

//     // Отправляем клиенту (для проверки)
//     res.json({
//       success: true,
//       player: testPlayer,

//     });

//   } catch (error: any) {
//     console.error("Ошибка при импорте:", error);
//     res.status(500).json({
//       error: "Ошибка при импорте игроков",
//       details: error.response?.data || error.message,
//     });
//   }
// });

// export default router;
