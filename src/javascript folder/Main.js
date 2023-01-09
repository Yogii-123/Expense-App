import './Frist.css';
import ExpenseItema from './New folder/ExpenseItema';

function Main(){
    let a=[{
        date1:new Date("Dec 14, 2021"),
		head2:'Home Loan',
		rupee1:'Rs.7000' 
	   },
		{
		   date1:new Date("11 14, 2022"),
		   head2:'Gold Loan',
		   rupee1:'Rs.10,000'
		},

    ]
    return(
        <div>
            <ExpenseItema values={a[0]} values2={a[1]}></ExpenseItema>

        </div>
    )
}
export default Main;
