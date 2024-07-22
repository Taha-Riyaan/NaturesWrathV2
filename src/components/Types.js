import '../Styles/Types.css'
import Collapsible from './Collapsible';
import Quiz from './Quiz';
import QuizComp from '../QuizComponent/QuizComp';

const Types = () => {

    const check = true;


    return ( 
        <center className='TypesTitle'>
            <h1>Types of Natural Disasters</h1>

            <div >
                <Collapsible
                title0= "Avalanche"
                title= "avalanche"
                //check={check}
                />
            </div >

            <div >
                <Collapsible
                title0= "Earthquake"
                title= "earthquake"
                //check={check}
                />
            </div >

            <div >
                <Collapsible
                title0= "Flood"
                title= "flood"
                //check={check}
                />
            </div >

            <div >
                <Collapsible
                title0= "Hurricane"
                title= "hurricane"
                //check={check}
                />
            </div >

            <div >
                <Collapsible
                title0= "Tornado"
                title= "tornado"
                //check={check}
                />
            </div >

            <div >
                <Collapsible
                title0= "Tsunami"
                title= "tsunami"
                //check={check}
                />
            </div >

            <div >
                <Collapsible
                title0= "Wildfire"
                title= "wildfire"
                //check={check}
                />
            </div >

            

        </center>


     );
}
 
export default Types;