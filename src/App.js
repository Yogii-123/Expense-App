import './App.css';
import { useState } from 'react';
import MainForm from './Excerise project/form/MainForm';
import AddItems from './Excerise project/items/AddItems';


function App() {
  let Dummy=[{
         id:Math.random(),
        title1:'goal'
  }]
  const[expense,setexpense]=useState(Dummy)

  // const[nofound,setnofound]=useState(true)


  function child1(expense){
        setexpense((Dummy)=>{
          return[expense,...Dummy]
        })
  };
  function deletefun1(goalstore1){
      setexpense((previousgoal)=>{
          let deletactive=previousgoal.filter(expen=> expen.id !== goalstore1)
          return deletactive;
      })
  }
  // // let a=expense.filter()
  // function addvalue1(){
  //   setnofound(false)

  // }




  return (
         <div>
          <MainForm chvalue={child1}></MainForm>

          {/* <AddItems d={expense}></AddItems> */}

          {/* {expense.map((val)=>(
            <AddItems  deletefun={deletefun1} 
                      key={val.id}
                      id={val.id}
                      title2={val.title1}>
                      </AddItems>)
          )} */}
                      {/* <h3>No Goals Found Maybe Add One?</h3> */}
                      {/* <div>{expense.length && <div>No Goals Found Maybe Add One?</div>}</div> */}



                    
            {expense.length===0 ? (<div className='nofound'><h3 className='nofound1'>No Goals Found Maybe Add One?</h3></div>): 
                       (expense.map((val)=>(
                        <AddItems  deletefun={deletefun1}
                                  key={val.id}
                                  id={val.id}
                                  title2={val.title1}>
                                  </AddItems>)
                      ))}

      
    </div>
  );
}

export default App;
