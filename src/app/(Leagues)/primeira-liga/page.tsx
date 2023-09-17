import {filterLeague} from "@/api";
import LeagueTable from "@/app/compenents/LeagueTable";


const PrimeiraLiga = async () => {
  const getPrimeiraLiga = await filterLeague('Primeira Liga')
  return (
    <div className='flex-1 w-[1200px]'>
      {getPrimeiraLiga.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default PrimeiraLiga