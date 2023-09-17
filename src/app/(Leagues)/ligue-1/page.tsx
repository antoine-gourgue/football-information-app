import {filterLeague} from "@/api";
import LeagueTable from "@/app/compenents/LeagueTable";


const Ligue1 = async () => {
  const getLigue1 = await filterLeague('Ligue 1')
  return (
    <div className=' flex-1 w-[1200px]'>
      {getLigue1.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default Ligue1