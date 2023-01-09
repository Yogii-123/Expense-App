import '../../App.css'
import Display from '../Ui/Display';
import ExpenseItem from "./ExpenseItem";
import { useState } from 'react';
import Filter from './Filter';

function ExpenseIte(props){

  // const [option1,setoption1] = useState("2022");


  // function yearflit(e){
          // setoption1(e.target.value)
      // console.log(e.target.value);}

      const [filteryear,setfilteryear] = useState("select");

      function yearflit(filtered){
          setfilteryear(filtered);

  }


//   const filter=(filtered)=>{
//   setfilteryear(filtered);
//  }


  let filterExpense=props.d.filter((d)=>{
    return d.date1.getFullYear().toString()===filteryear;
  })

    return(
        <div>

          <Display>
            {/* <div className='boxitem'> */}
            	  {/* <ExpenseItem day={props.d[0]}></ExpenseItem>
	              <ExpenseItem day={props.d[1]}></ExpenseItem>
	              <ExpenseItem day={props.d[2]}></ExpenseItem>              static */}

                {/* <Filter yearprint={yearflit} option1={option1}></Filter> */}

                <Filter yearprint={yearflit} selected={filteryear}></Filter>


               {/* {props.d.map((ex)=>(
                   <ExpenseItem key={ex.id}
                             date2={ex.date1}
                             title={ex.head2}
                             amount={ex.rupee1}></ExpenseItem>

                                 
                ))} */}



                {/* {filterExpense.map((ex)=>(
                   <ExpenseItem key={ex.id}
                             date2={ex.date1}
                             title={ex.head2}
                             amount={ex.rupee1}></ExpenseItem>

                                 
                ))} */}

                {filterExpense.length===0 ?(<h3 className='nofound'>No Expense Found!</h3>): (filterExpense.map((ex)=>(
                   <ExpenseItem key={ex.id}
                             date2={ex.date1}
                             title={ex.head2}
                             amount={ex.rupee1}></ExpenseItem>

                                 
                ))) }

                


                

   
                  {/* </div> */}
           </Display>       

        </div>
    );
}
export default ExpenseIte;
