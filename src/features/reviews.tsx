import test from "node:test"
import { useState } from "react"

export const Reviews = () => {
    const testReviews = [
        "“I recently had a consultation with this lawyer and it was very helpful – they were knowledgeable and professional, and provided valuable advice. I would definitely recommend them.”",
        "“I visited this amusement park and it was a blast – the rides were thrilling and the atmosphere was festive. It was a great day out.”",
        "“I had a great experience with this online marketplace – the selection was impressive and the prices were competitive. The customer service was also excellent.”",
        "“I recently had a photoshoot with this photographer and it was amazing – they were skilled and creative, and the results were beautiful. The price was also very reasonable.”"
    ]

    const [reviewslist, setReviewslist] = useState(testReviews)

    return (
        <div className="border-solid border-white scrollbar border-2 rounded-md overflow-y-auto px-2">
                {reviewslist.map((review) => (
                    <div key={review} className="p-2 border-b-solid border-b-white border-b-2">{review}</div>
                ))}
        </div>
    )
}