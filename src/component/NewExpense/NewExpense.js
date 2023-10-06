import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);//receiving function and pass our child data through props.
    }
    return(
   <div className="new-expense">
    {/* child */}
    <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler}/>
    <form>

    </form>
   </div>);
};

export default NewExpense;