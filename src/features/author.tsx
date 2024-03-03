import { useState } from "react"
import { sendToContentScript } from "@plasmohq/messaging"

export const AuthorDetails = () => {
  const [authorName, setAuthorName] = useState("")
  const [authorPhoto, setAuthorPhoto] = useState(require("../../assets/Dummy.png"))
  const [authorWork, setAuthorWork] = useState("")

  const receiveAuthorName = async () => {
    const resp = await sendToContentScript({ name: "authorName" })
    const authorDetails = resp.split(',')
    setAuthorName(authorDetails[0])
    setAuthorPhoto(authorDetails[1])
  }
  return (
    <div onLoad={receiveAuthorName} className="max-h-[56px] flex flex-row p-2 gap-x-2 border-solid border-black border-2 rounded-md overflow-hidden cursor-pointer">
      <img className="rounded-[50%] object-cover" src={authorPhoto} alt="authorPhoto" width={'40px'} height={'40px'} />
      <div className="info flex flex-col items-start justify-center">
        <span className="font-bold text-lg text-left">{authorName}</span>
        <div className="flex">
          <p className="text-xs text-left">working as</p>
          <p id="work">{authorWork}</p>
        </div>
      </div>
    </div>
  )
}
