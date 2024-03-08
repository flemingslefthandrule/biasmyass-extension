export const Summary = (props) => {
    const authorSummary = props.authorSummary;
    return (
        <div>
            <p className="text-center">
                {/* "Jasmine Montgomery is a Senior Hiring Manager at L’Oreal based in New York. She recruits across several business units to connect with the brightest talent from around the globe." */}
                {authorSummary}
            </p>
        </div>
    )
}