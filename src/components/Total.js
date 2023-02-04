
const Total = ({parts}) => {
    return (
        <b>
            total of {parts.reduce((prev, part) => {
                return prev += part.exercises
            }, 0)} exercises
        </b>
    )
}

export default Total;