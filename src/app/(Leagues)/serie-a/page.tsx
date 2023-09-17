import {filterLeague} from "@/api";
import LeagueTable from "@/app/compenents/LeagueTable";


const SerieA= async () => {
  const getSerieA= await filterLeague('Serie A')
  return (
    <div className='flex-1 w-[1200px]'>
      {getSerieA.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default SerieA