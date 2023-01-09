import '../Frist.css'
function ExpenseItema(props){

    return(
        <div>
            <div className='a'>
                      <h3 className='head1'>{props.values.tolocalString().date1}</h3>           
                      <p className='expense'>{props.values.head2} </p>
                      <p className='expense1'>{props.values.rupee1}</p>
             </div><br></br>
             <div className='b'>
	                <h3 className='head2'>{props.values2.date1}</h3>
	                <p className='expense2'>{props.values2.head2} </p>
                    <p className='expense3'>{props.values2.rupee1}</p>
	         </div>





             {/* <div className='a'>
                      <h3 className='head1'>{props.values.date1}</h3>           
                      <p className='expense'>{props.values.head2} </p>
                      <p className='expense1'>{props.values.rupee1}</p>
             </div><br></br>
             <div className='b'>
	                <h3 className='head2'>{props.values2.date1}</h3>
	                <p className='expense2'>{props.values2.head2} </p>
                    <p className='expense3'>{props.values2.rupee1}</p>
	         </div> */}





                {/* <div className='a'>
                      <h3 className='head1'>{props.values[0].date1}</h3>           
                     <p className='expense'>{props.values[0].head2} </p>
                      <p className='expense1'>{props.values[0].rupee1}</p>
             </div><br></br>
             <div className='b'>
	                <h3 className='head2'>{props.values[1].date1}</h3>
	                <p className='expense2'>{props.values[1].head2} </p>
                    <p className='expense3'>{props.values[1].rupee1}</p>
	         </div> */}


        </div>
    );
}
export default ExpenseItema;