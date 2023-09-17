import {filterLeague} from "@/api";
import LeagueTable from "@/app/compenents/LeagueTable";


const English = async () => {
  const getEnglishLeague = await filterLeague('Premier League')

  return (
    <div className='flex-1 w-[1200px]'>
      {getEnglishLeague.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default English