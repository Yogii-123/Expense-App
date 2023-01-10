import { useState } from 'react';
import './App.css';
import ExpenseIte from './components/Expense/ExpenseIte'
// import ExpenseSampleForm from './Form/ExpenseSampleFormSampleForm';
import NewExpenseform from './Form/NewExpenseform';

// import priya from"./river.jpg";
// import img1 from"./bird.jpg";
// import yogii from'./intro1.mp4';
// import audio1 from'./audio1.mp3';
// import fristimg from'./image folder/information.jpg';
// // import fristimg from'./information.jpg';
// import secondimg from'./image folder/img2.jpg';
// import thirdimg from'./image folder/ra.jpg';
// import fourthimg from'./image folder/tnlogo.png';
// import fivithimg from'./image folder/school.jpg';
// import sixthimg from'./image folder/medical.jpg';
// import filea1 from'./image folder/erer.pdf';
// import img1 from'./image folder/aa.jpeg';
// import img2 from './image folder/bb.jpeg';   


// git hub change pull the code

// appa.js code change



function App() {
	// let a=[{
	let Dummy_Expense=[{
		 id:Math.random(),
		date1:new Date("Dec 14, 2021"),
		head2:'Home Loan',
		rupee1:'Rs.7000' 
	   },
		{
			id:Math.random(),
		   date1:new Date("11 14, 2022"),
		   head2:'Gold Loan',
		   rupee1:'Rs.10,000'
		},
		// {
		// 	date1:new Date("December 14, 2022"),
		//    head2:'Car Loan',
		//    rupee1:'Rs.15,000'
		// }
]
const[Expense,setExpense]=useState(Dummy_Expense)

    //   function child1 (assign1){
    //     // console.log('in new expense');
	// 	console.log(assign1);
	//   }
	                //  function child1 (assign1){
                    //       // console.log('in new expense');
	                //          console.log(assign1);
	                //   }
					//   function child1 (Expense){
					// 	  setExpense((Dummy_Expense)=>{
					// 		return[Expense,...Dummy_Expense]
					// 	  });
					// }

					function child1 (Expense){
						setExpense((Dummy_Expense)=>{
						  return[Expense,...Dummy_Expense]
						});
				  }

					  
  return (
    <div>
             {/* <ExpenseIte d={a}></ExpenseIte> */}
		 
         {/* <ExpenseSampleForm onSaveassign1={child1}></ExpenseSampleForm><br></br> */}
         
		 <NewExpenseform r={child1}></NewExpenseform>
        
        <ExpenseIte d={Expense}></ExpenseIte>
    </div>
	


  );
}

export default App;
