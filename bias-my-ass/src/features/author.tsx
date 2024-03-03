import { useState } from "react"
import { sendToContentScript } from "@plasmohq/messaging"

export const AuthorDetails = () => {
  const [authorName, setAuthorName] = useState("Author Name");
  const [authorPhoto, setAuthorPhoto] = useState(require("../../assets/Dummy.png"));

  const receiveAuthorName = async () => {
    const resp = await sendToContentScript({name:"authorName"});
    const authorDetails = resp.split(',');
    setAuthorName(authorDetails[0]);
    setAuthorPhoto(authorDetails[1]);
  }
  return (
    <div onLoad={receiveAuthorName} className="plasmo-max-h-[56px] plasmo-flex plasmo-flex-row plasmo-p-2 plasmo-gap-x-2 plasmo-border-solid plasmo-border-black plasmo-border-2 plasmo-rounded-md plasmo-overflow-hidden plasmo-cursor-pointer">
      <img className="plasmo-rounded-[50%] plasmo-object-cover" src={authorPhoto} alt="authorPhoto" width={'40px'} height={'40px'} />
      <div className="plasmo-info plasmo-flex plasmo-flex-col plasmo-items-start plasmo-justify-center">
        <span className="plasmo-font-bold plasmo-text-lg plasmo-text-left">{ authorName }</span>
        <p className="plasmo-text-xs plasmo-text-left">working as</p>
      </div>
    </div>
  )
}
