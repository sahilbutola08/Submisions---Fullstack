import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const Course = ({course}) => {
    return (
      <>
        <Header name={course.name}></Header>
        <Content parts={course.parts}></Content>
        <Total parts={course.parts}></Total>
      </>  
    )
}

export default Course;