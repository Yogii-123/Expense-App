import '../../App.css';
// import Filter from '../Expense/Filter';
function Display(props) {
    // function Display() {

    return(
        <div>

            <div className='box1'>
                {/* <Filter></Filter> */}
                {props.children}
             </div>   

        </div>

    );
}
export default Display;

