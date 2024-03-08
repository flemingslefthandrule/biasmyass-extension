import { useState, useEffect } from "react"

export const Reviews = (props) => {
  const [reviewslist, setReviewslist] = useState([])

  useEffect(() => {
    setReviewslist(props.gotReviews)
  }, [props.gotReviews])

  return (
    <div className="border-solid border-white scrollbar border-2 rounded-md overflow-y-auto w-full px-2">
      {reviewslist.map((review, index) => (
        <div key={index} className="p-2 border-b-solid border-b-white border-b-2">
          {review.text}
        </div>
      ))}
    </div>
  )
}