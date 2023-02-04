
const Total = ({parts}) => {
    return (
        <p>
            Number of exercises {parts.reduce((prev, part) => {
                return prev += part.exercises
            }, 0)}
        </p>
    )
}

export default Total;