

import { AuthorDetails } from "~features/author"
import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-[600px] plasmo-w-72 plasmo-rounded-lg">
      <AuthorDetails />
    </div>
  )
}

export default IndexPopup
