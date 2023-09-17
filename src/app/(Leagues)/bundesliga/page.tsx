import {filterLeague} from "@/api";
import LeagueTable from "@/app/compenents/LeagueTable";


const Bundesliga = async () => {
  const getBundesliga = await filterLeague('Bundesliga')
  return (
    <div className='flex-1 w-[1200px]'>
      {getBundesliga.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default Bundesliga