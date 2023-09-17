import {filterLeague} from "@/api";
import LeagueTable from "@/app/compenents/LeagueTable";

const Championship = async () => {
  const getChampionship = await filterLeague('Championship')
  return (
    <div className='flex-1 w-[1200px]'>
      {getChampionship.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default Championship