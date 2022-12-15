const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map(part => 
        <p key={part.id}>{part.name}: {part.exercises}</p>
      )}
      <h3>Total: {course.parts.reduce(
        (total, current) => total + current.exercises, 0
      )} exercises</h3>
    </div>
  )
}

export default Course