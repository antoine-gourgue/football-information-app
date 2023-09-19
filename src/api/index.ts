import { apiOptions, matchesType } from "@/types"

const options:apiOptions =  {
    next: { revalidate: 30 },
    headers: {
        "X-Auth-Token": process.env.API_TOKEN,
        "Content-Type": "application/json",
    },
}
export const getMatchesfootball = async () => {
    const matchData = await fetch('https://api.football-data.org/v4/matches',options)
    return matchData.json()
}

const todayDate = new Date()
const getDateMonth = new Date(todayDate.getTime());
getDateMonth.setDate(todayDate.getDate() - 1);
const year = getDateMonth.getFullYear()
const month = String(getDateMonth.getMonth() + 1).padStart(2, '0');
const day = String(getDateMonth.getDate()).padStart(2, '0');

const yesterday = [year, month, day].join('-');

export const getMatchesfootballFinished = async () => {
    const matchData = await fetch(`https://api.football-data.org/v4/matches?date=${yesterday}`,options)
    return matchData.json()
}

export const getNewsInfo = async () => {
    const url = `https://newsapi.org/v2/everything?apiKey=${process.env.API_TOKEN_NEWS}&q=soccer&pageSize=5`
    const newsData = await fetch(url,{next:{revalidate:30}})
    return newsData.json()
}

export const filterLeague = async (filterData:string) => {
    const getEnglishLeague = await getMatchesfootball()
    const filterPremierLeague:matchesType[] = getEnglishLeague?.matches
    const getData = filterPremierLeague.filter((item) => item.competition.name === filterData)
    return getData
}

export const getLeagueStandings = async (leagueId: string) => {
    try {
        const response = await fetch(`https://api.football-data.org/v4/competitions/${leagueId}/standings`, options);
        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération du classement de la ligue ${leagueId}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération du classement de la ligue :', error);
        throw error;
    }
};
