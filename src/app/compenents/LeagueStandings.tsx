import {getLeagueStandings} from "@/api";
import {useEffect, useState} from "react";

const LeagueStandings = () => {
    const [standings, setStandings] = useState([]);
    const [currentLeague, setCurrentLeague] = useState('premier-league');

    const leagueCodes = [
        { value: 'premier-league', code: 'PL' },
        { value: 'la-liga', code: 'PPL' },
        { value: 'bundesliga', code: 'BL1' },
        { value: 'serie-a', code: 'SA' },
        { value: 'ligue-1', code: 'FL1' },
        { value: 'championship', code: 'ELC' },
        { value: 'brazilian-series-a', code: 'BRA' },
        { value: 'uefa-champions-league', code: 'CL' }

    ];

    const currentLeagueCode: string | undefined = leagueCodes.find(l => l.value === currentLeague)?.code;

    useEffect(() => {
        if (currentLeagueCode) {
            getLeagueStandings(currentLeagueCode)
                .then(data => setStandings(data))
                .catch(error => {
                    // Gérez les erreurs ici
                });
        }
    }, [currentLeague]);

    return (
        <div>
            <h1>Classement de la Ligue</h1>

            <select value={currentLeague} onChange={(e) => setCurrentLeague(e.target.value)}>
                {leagueCodes.map(league => (
                    <option key={league.value} value={league.value}>
                        {league.value}
                    </option>
                ))}
            </select>

            {/* Affichez les données de classement ici */}
        </div>
    );
};

export default LeagueStandings;
