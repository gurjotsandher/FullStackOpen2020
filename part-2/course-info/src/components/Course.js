import { Header } from './Header';
import { Content } from './Content';

export const Course = ({ course }) => {
    return(
        <div>
            <Header course={course}/>
            <Content course={course}/>
        </div>
    );
}