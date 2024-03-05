import { useState } from "react"
import { sendToContentScript } from "@plasmohq/messaging"

export const AuthorDetails = (props) => {
  const authorName = props.authorName;
  const authorUrl = props.authorUrl;
  const authorPhoto = props.authorPhoto;
  const authorWork = props.authorWork;
  return (
    <a href={authorUrl} target="_blank" onLoad={receiveAuthorName} className="max-h-[56px] flex justify-center items-center p-2 gap-x-2 border-solid border-white border-2 rounded-md overflow-hidden cursor-pointer">
      <img className="rounded-[50%] object-cover w-[35px] h-[35px] max-w-[35px] max-h-[35px]" src={authorPhoto} alt="authorPhoto" />
      <div className="info flex flex-col items-start gap-0 py-3">
        <span className="font-bold text-lg">{authorName}</span>
        <div className="text-gray-300">
          <p id="work">{authorWork}</p>
        </div>
      </div>
    </a>
  )
}
