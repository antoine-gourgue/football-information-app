import { filterLeague, getLeagueStandings } from "@/api";
import LeagueTable from "@/app/compenents/LeagueTable";

const UefaChampionsLeague = async () => {
  const getUefaChampionsLeague = await filterLeague('UEFA Champions League');
  const leagueStandings = await getLeagueStandings('CL'); // Utilisez le code de l'UEFA Champions League (ex: 'CL') au lieu de l'ID

  return (
      <div className="flex-1 w-11/12 mx-auto mt-6 bg-slate-600 p-4 rounded-lg shadow-lg">
        {/* Affichez la liste des matchs ici */}
        {getUefaChampionsLeague.map((data) => (
            <div key={data.id} className="mb-4">
              <LeagueTable data={data} />
            </div>
        ))}

        {/* Affichez le classement de la ligue ici */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-teal-400">Classement de la Ligue</h2>
          <table className="w-full border-collapse border mt-4">
            <thead className="bg-slate-700 text-teal-400">
            <tr>
              {['Position', 'Équipe', 'Matchs Joués', 'Victoires', 'Nuls', 'Défaites', 'Points', 'Buts Pour', 'Buts Contre', 'Différence de Buts'].map(header => (
                  <th key={header} className="p-2 border">{header}</th>
              ))}
            </tr>
            </thead>
            <tbody>
            {leagueStandings.standings[0].table.map((team) => (
                <tr key={team.team.id} className="hover:bg-slate-500">
                  <td className="p-2 border text-sm">{team.position}</td>
                  <td className="p-2 border text-sm">
                    <div className="flex items-center">
                      <img src={team.team.crest} alt={team.team.name} className="h-8 w-8 mr-2" />
                      {team.team.name}
                    </div>
                  </td>
                  <td className="p-2 border text-sm">{team.playedGames}</td>
                  <td className="p-2 border text-sm">{team.won}</td>
                  <td className="p-2 border text-sm">{team.draw}</td>
                  <td className="p-2 border text-sm">{team.lost}</td>
                  <td className="p-2 border text-sm">{team.points}</td>
                  <td className="p-2 border text-sm">{team.goalsFor}</td>
                  <td className="p-2 border text-sm">{team.goalsAgainst}</td>
                  <td className="p-2 border text-sm">{team.goalDifference}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default UefaChampionsLeague;
