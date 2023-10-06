import React,{useState} from "react";
import './ExpenseForm.css';
//import NewExpense from "./NewExpense";
const ExpenseForm = (props) => {//intially empty string enter in usestate.
    const[enterTitle,setEnterTitle] = useState('');
    const[enterPrice,setEnterPrice] = useState('');  //----------> multiple slice same component but multiple usestate
    const[enterDate,setEnterDate] = useState('');

    //const [userInput,setUserInput] = useState({
    //   enterTitle:'',
    //    enterPrice:'', //-------> single use state .ethukulla vara object ah value mari treat pannum
    //    enterDate:''
    //});

    
    const titleChangeHandler = (event) =>{// event - automatically data passed
    setEnterTitle(event.target.value);         //value epavume string ah tha erukum even as number ah eruthalum number oda string adhu store pannum
    //[setUserInput({
       // ...userInput, // spread operator default in js.
        //takes an userinput object and pull out keyvalue pair and add them to this new object
       // enterTitle:event.target.value // simply its override with new one
    //});]

    //[setUserInput((prevState) => { -----> function type
      //  return{...prevState, setUserInput:event.target.value};
    //})]
    };

    const priceChangeHandler = (event) =>{
    setEnterPrice(event.target.value);
   //[setUserInput({
   // ...userInput,
   // enterPrice:event.target.value
  // });]

    }

    const dateChangeHandler = (event) =>{
    setEnterDate(event.target.value); 
    //[setUserInput({
     //   ...userInput,
      //  enterDate:event.target.value
   // });]
    }

    const submitHandler = (event) =>
    {
     event.preventDefault();// request send aagalina page reload aagathu
     const expenseData ={
     title:enterTitle, 
     price: +enterPrice,
     date:new Date(enterDate)
     };
     props.onSaveExpenseData(expenseData);//parent
     setEnterTitle('');// two way binding using value attribute
     setEnterPrice('');
     setEnterDate('');
    };
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enterTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
            <label>price</label>
            <input type="number" min="0.01" step="0.01" value={enterPrice} onChange={priceChangeHandler}/>
            </div>
            <div className="new-expense__control">
            <label>date</label>
            <input type="date" min="01-01-2019" max="01-01-2023" value={enterDate} onChange={dateChangeHandler} />
            </div>
            </div>
            <div className="new-expense__actions">
            <button type="submit">Add Expense</button>

            </div>
        </form>
    );

}
export default ExpenseForm;