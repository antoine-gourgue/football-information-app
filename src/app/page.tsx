import { getMatchesfootball, getMatchesfootballFinished } from "@/api"
import Status from "@/app/compenents/Status";

export default async function Home() {
  const getDatas =  await getMatchesfootball()
  const getDatasFinished = await getMatchesfootballFinished()

  const matchesDatas = getDatas?.matches
  const matchesDatasFinished = getDatasFinished?.matches

  const nd = new Date()
  const dateConvert = nd.toDateString()

  return (
      <div className={'flex-1'}>
          <section className="px-2 md:px-4 md:max-w-[800px]">
              <div className="flex justify-between items-center mb-4 md:mb-2">
                  <h1 className="text-md md:text-xl font-bold">MATCHES</h1>
                  <div className="px-4 py-0 md:py-1 bg-slate-600 rounded-md text-textPrimary text-sm">
                      <p>{`${dateConvert}`}</p>
                  </div>
              </div>
              <Status matchesList={matchesDatas} matchesListFinished={matchesDatasFinished} />
          </section>
      </div>
  )
}