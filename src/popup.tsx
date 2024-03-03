import { AuthorDetails } from "~features/author"
import { Reviews } from "~features/reviews"
import { Summery } from "~features/summary"
import "~style.css"

function IndexPopup() {
  return (
    <div className="bg-black text-white p-2 flex flex-col gap-3 justify-center items-center h-[600px] w-72 rounded-lg">
      <p className="font-bold text-xl ">BiasMyAss</p>
      <AuthorDetails />
      <Summery />
      <p className="font-bold text-lg">Reviews</p>
      <Reviews />
      <a href="https://cdn.tailwindcss.com" target="_blank" className="underline">For more details</a>
    </div>
  )
}

export default IndexPopup
