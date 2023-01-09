// import { useState } from 'react';
import '../../App.css';

import NewExpense from "./NewExpense";


function ExpenseItem(props) {
    // const [name,setname]=useState(props.day.head2)
    // function sample1(){
    //     setname("updating");
    //     console.log(props.day.head2);

    // }

    
    return(
        <div className='ab'>
              <div className='a'>
                   {/* <div className='boxbtn'><NewExpense v={props.day}></NewExpense> */}

                   <div className='boxbtn'><NewExpense v={props.date2}></NewExpense>
                    {/* <p className='expense1'>{props.day.rupee1}</p> */}

                   </div>
                   {/* <p className='expense'>{props.day.head2} </p> */}
                   {/* <p className='expense'>{name} </p> */}

                   <p className='expense'>{props.title} </p>


                   {/* <p className='expense1'>{props.day.rupee1}</p> */}

                    <p className='expense1'>{props.amount}</p>

                    {/* <button onClick={sample1} className='btn1'>button</button> */}
             </div>
             {/* <div className='b'>
	                <h3 className='head2'>{props.day1.date2}</h3>
	                <p className='expense2'>{props.day1.head3} </p>
                    <p className='expense3'>{props.day1.rupee2}</p>
	         </div> */}




                          {/* <div className='a'>
                   <NewExpense v={props.day}></NewExpense>
                   <p className='expense'>{props.day.head2} </p>
                    <p className='expense1'>{props.day.rupee1}</p>
             </div><br></br>
             <div className='b'>
	                <h3 className='head2'>{props.day1.date2}</h3>
	                <p className='expense2'>{props.day1.head3} </p>
                    <p className='expense3'>{props.day1.rupee2}</p>
	         </div> */}





             {/* <div className='a'>
                   <NewExpense v={props.day[0]}></NewExpense>  */}
                   {/* <h3 className='head1'>{props.day[0].date1.toISOString()}</h3> */}
                   {/* <p className='expense'>{props.day[0].head2} </p>
                    <p className='expense1'>{props.day[0].rupee1}</p>
             </div><br></br>
             <div className='b'>
	                <h3 className='head2'>{props.day[1].date2}</h3>
	                <p className='expense2'>{props.day[1].head3} </p>
                    <p className='expense3'>{props.day[1].rupee2}</p>
	         </div> */}





               {/* <div className='a'>
<h3 className='head1'>{date1}</h3> */}
{/* <h3 className='head1'>{year1}{month1}<br></br>{date1}</h3> */}
  {/* <p className='expense'>{head2} </p>
  <p className='expense1'>{rupee1}</p></div><br></br>
       <div className='b'>
	        <h3 className='head2'>{date2}</h3>
	        <p className='expense2'>{head3} </p>
            <p className='expense3'>{rupee2}</p>
	   </div> */}

        </div>

    );
}
export default ExpenseItem;
