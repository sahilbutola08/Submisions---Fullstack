import Part from "./Part";

const Content = ({parts}) => {
    return (
        <>
            {parts.map((part) => {
                return <Part key={part.id} name={part.name} exercises={part.exercises}/>
            })}
        </>
    )
}

export default Content;