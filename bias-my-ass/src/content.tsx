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
    if(req.name="sent author name") {
      res.send(document.querySelector('a[data-testid="authorName"]').textContent);
    }
  });
}

export default PlasmoOverlay
