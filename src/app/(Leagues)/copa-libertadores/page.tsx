import {filterLeague} from "@/api";
import LeagueTable from "@/app/compenents/LeagueTable";


const CopaLibertadores = async () => {
  const getCopaLibertadores = await filterLeague('Copa Libertadores')
  return (
    <div className='flex-1 w-[1200px]'>
      {getCopaLibertadores.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default CopaLibertadores