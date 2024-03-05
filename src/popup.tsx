import { AuthorDetails } from "~features/author"
import { Reviews } from "~features/reviews"
import { Summary } from "~features/summary"
import "~style.css"

function IndexPopup() {
  const [authorName, setAuthorName] = useState("")
  const [authorUrl, setAuthorUrl] = useState("")
  const [authorPhoto, setAuthorPhoto] = useState("")
  const [authorWork, setAuthorWork] = useState("journalist")

  const receiveAuthorName = async () => {
    try {
      const resp = await sendToContentScript({ name: "authorName" })
      const authorDetails = resp.split(",")
      setAuthorName(authorDetails[0])
      setAuthorPhoto(authorDetails[1])
      setAuthorUrl(authorDetails[2])
    } catch (error) {
      setAuthorName("website not supported")
      setAuthorUrl("https://google.com/search?q=biasmyasswebsitenotsupportedurl")
    }
  }
  return (
    <div className="bg-black text-white flex flex-col gap-3 justify-center items-center h-[600px] w-[300px] px-[10px] py-[10px] rounded-lg">
      <a href="https://google.com/search?q=biasmyass" target="_blank" className="font-bold text-xl hover:text-green-300">BiasMyAss</a>
      <AuthorDetails authorName={authorName} authorUrl={authorUrl} authorPhoto={authorPhoto} authorWork={authorWork}/>
      <Summary />
      <p className="font-bold text-lg">Reviews</p>
      <Reviews />
      <a href="https://cdn.tailwindcss.com" target="_blank" className="underline">For more details</a>
    </div>
  )
}

export default IndexPopup
