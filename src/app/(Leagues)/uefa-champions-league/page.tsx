import {filterLeague} from "@/api";
import LeagueTable from "@/app/compenents/LeagueTable";


const UefaChampionsLeague= async () => {
  const getUefaChampionsLeague= await filterLeague('Uefa Champions League')
  return (
    <div className='flex-1 w-[1200px]'>
      {getUefaChampionsLeague.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default UefaChampionsLeague