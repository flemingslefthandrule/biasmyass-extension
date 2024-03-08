import { useState } from "react"
import { sendToContentScript } from "@plasmohq/messaging"
import { AuthorDetails } from "~features/author"
import { Reviews } from "~features/reviews"
import { Summary } from "~features/summary"
import "~style.css"
import axios from "axios"

function IndexPopup() {
    const [authorName, setAuthorName] = useState("")
    const [authorUrl, setAuthorUrl] = useState("")
    const [authorPhoto, setAuthorPhoto] = useState(
        require("../assets/test.webp")
    )
    const [authorWork, setAuthorWork] = useState("journalist")
    const [authorSummary, setAuthorSummary] = useState("")
    const [reviews, setReviews] = useState("")
    const apiurl = 'http://localhost:8000'

    const receiveAuthorName = async () => {
        try {
            const resp = await sendToContentScript({ name: "authorName" })
            const authorDetails = resp.split(",")
            // setAuthorName(authorDetails[0])
            // setAuthorPhoto(authorDetails[1])
            // setAuthorUrl(authorDetails[2])
            const slug = authorDetails[0].replace(/ /g,"-")
            axios.get(apiurl + "/author/" + slug)
                .then(function (response) {
                    console.log(response);
                    setAuthorName(response.data.name)
                    setAuthorPhoto(response.data.photo)
                    setAuthorSummary(response.data.bio)
                    setAuthorUrl(response.data.url)
                })
                .catch(function (error) {
                    console.log(error);
                })

            axios.get(apiurl + "/author/" + slug + "/reviews")
                .then(function (response) {
                    setReviews(response.data)
                    console.log(reviews)
                })
                .catch(function (error) {
                    console.log(error);
                })
        } catch (error) {
            setAuthorName("website not supported")
            setAuthorUrl(
                "https://google.com/search?q=biasmyasswebsitenotsupportedurl"
            )
        }
    }



    return (
        <div
            onLoad={receiveAuthorName}
            className="bg-black text-white flex flex-col gap-3 justify-center items-center h-[600px] w-[300px] px-[10px] py-[10px] rounded-lg">
            <a
                href="https://google.com/search?q=biasmyass"
                target="_blank"
                className="font-bold text-xl hover:text-green-300">
                BiasMyAss
            </a>
            <AuthorDetails
                authorName={authorName}
                authorUrl={authorUrl}
                authorPhoto={authorPhoto}
                authorWork={authorWork}
            />
            <Summary 
                authorSummary = {authorSummary}
            />
            <p className="font-bold text-lg">Reviews</p>
            <Reviews gotReviews={reviews} />
            <a
                href="https://cdn.tailwindcss.com"
                target="_blank"
                className="underline">
                For more details
            </a>
        </div>
    )
}

export default IndexPopup
