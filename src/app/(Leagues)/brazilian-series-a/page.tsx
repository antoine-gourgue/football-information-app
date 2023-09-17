import {filterLeague} from "@/api";
import LeagueTable from "@/app/compenents/LeagueTable";


const Brasileiro = async () => {
  const getBrasileiro = await filterLeague('Campeonato Brasileiro Série A')
  return (
    <div className='flex-1 w-[1200px]'>
      {getBrasileiro.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default Brasileiro