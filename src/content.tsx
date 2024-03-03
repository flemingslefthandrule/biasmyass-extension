import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useMessage } from "@plasmohq/messaging/hook"

export const config: PlasmoCSConfig = {
  matches: ["https://*.medium.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const { data } = useMessage<string, string>(async (req, res) => {
    const authorName = document.querySelector('a[data-testid="authorName"]').textContent
    const authorPhoto = document.querySelector('img[data-testid="authorPhoto"]')
    const authorPhotoURL = authorPhoto.getAttribute('src')
    const response = authorName+","+authorPhotoURL
    res.send(response)
  })
}

export default PlasmoOverlay