
import './Frist.css';

function Second(){

    	let year1='2022';
	    let month1='december';
	    let date1='1'
	    // let date1='december 2022  1'
	    let head2="Home Loan";
	    let rupee1='Rs.7000';

	    let date2='december 2022  10'
	    let head3="Gold Loan";
	    let rupee2='Rs.10,000';


    return(
        <div>
                <div className='a'>
                      <h3 className='head1'>{month1}<br></br>{date1}<br></br>{year1}</h3>           
                      <p className='expense'>{head2} </p>
                      <p className='expense1'>{rupee1}</p>
                </div><br></br>
                <div className='b'>
	                  <h3 className='head2'>{date2}</h3>
	                  <p className='expense2'>{head3} </p>
                      <p className='expense3'>{rupee2}</p>
	            </div>


        </div>
    );
}
export default Second;