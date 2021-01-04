import { Part } from './Part';
import { Total } from './Total';

export const Content = ({ course }) => {

  return (
    <div>
      {course.parts.map(p => {
        return <Part key={p.id} part={p} /> 
      })}

      <Total course={course.parts} />

    </div>
  )
}