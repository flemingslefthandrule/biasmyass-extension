import { AuthorDetails } from "~features/author"
import { Reviews } from "~features/reviews"
import { Summery } from "~features/summary"
import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-p-2 plasmo-flex plasmo-flex-col plasmo-gap-3 plasmo-justify-center plasmo-items-center plasmo-h-[600px] plasmo-w-72 plasmo-rounded-lg">
      <p className="plasmo-font-bold plasmo-text-xl ">BiasMyAss</p>
      <AuthorDetails />
      <Summery />
      <p className="plasmo-font-bold plasmo-text-lg">Reviews</p>
      <Reviews />
      <a href="#">For more details</a>
    </div>
  )
}

export default IndexPopup
