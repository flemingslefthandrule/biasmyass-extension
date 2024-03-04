import { AuthorDetails } from "~features/author"
import { Reviews } from "~features/reviews"
import { Summary } from "~features/summary"
import "~style.css"

function IndexPopup() {
  return (
    <div className="bg-black text-white flex flex-col gap-3 justify-center items-center h-[600px] w-[300px] px-[10px] py-[10px] rounded-lg">
      <a href="https://google.com/search?q=biasmyass" target="_blank" className="font-bold text-xl hover:text-green-300">BiasMyAss</a>
      <AuthorDetails />
      <Summary />
      <p className="font-bold text-lg">Reviews</p>
      <Reviews />
      <a href="https://cdn.tailwindcss.com" target="_blank" className="underline">For more details</a>
    </div>
  )
}

export default IndexPopup
