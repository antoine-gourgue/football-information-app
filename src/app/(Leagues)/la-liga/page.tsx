import {filterLeague} from "@/api";
import LeagueTable from "@/app/compenents/LeagueTable";


const LaLiga = async () => {
  const getLaLiga = await filterLeague('Primera Division')

  return (
    <div className='flex-1 w-[1200px]'>
      {getLaLiga.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default LaLiga