import { useState } from "react"
import { sendToContentScript } from "@plasmohq/messaging"

export const AuthorDetails = () => {
  const [authorName, setAuthorName] = useState("")
  const [authorUrl, setAuthorUrl] = useState("")
  const [authorPhoto, setAuthorPhoto] = useState(require("../../assets/test.webp"))
  const [authorWork, setAuthorWork] = useState("")

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
    <a href={authorUrl} target="_blank" onLoad={receiveAuthorName} className="max-h-[56px] flex justify-center items-center p-2 gap-x-2 border-solid border-white border-2 rounded-md overflow-hidden cursor-pointer">
      <img className="rounded-[50%] object-cover w-[35px] h-[35px] max-w-[35px] max-h-[35px]" src={authorPhoto} alt="authorPhoto" />
      <div className="info flex flex-col items-start justify-center">
        <span className="font-bold text-lg text-left">{authorName}</span>
        <div className="flex">
          <p id="work">{authorWork}</p>
        </div>
      </div>
    </a>
  )
}
