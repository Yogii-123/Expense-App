import './Filter.css';
// import { useState } from 'react';

function Filter(props){
    // const [option1,setoption1] = useState("2022");

    // function yearprint(e){
    //     setoption1(e.target.value)
    //     console.log(e.target.value);
    // }

    function yearprint(e){
        props.yearprint(e.target.value)
    }

    
    return(
        <div>
            <div className='over'>
           <p className="para">filter by year</p>
           {/* <select className="select" onChange={yearprint} value={option1}> */}

           <select className="select" onChange={yearprint} value={props.option1}>
           <option className='opt1'>Select a year</option>
               <option className='opt2'>2023</option>
               <option className='opt3'>2022</option>
               <option className='opt4'>2021</option>
           </select>
           </div>
        </div>
    );
}
export default Filter;