//import ExpenseItem from './component/Expense/ExpenseItem';// custom component must start with capital letter then only react understand
import NewExpense from './component/NewExpense/NewExpense';
import Expenses from './component/Expense/Expense';
import './App.css';
import React,{useState} from "react";

const DUMMY_EXPENSE = [
  {
    id:1,
    title:'BirthdayCelebration',
    price: 12000,
    date: new Date(2020, 1, 6)//date object so we create new
  },
  {
    id:2,
    title:'Marriage',
    price: 180000,
    date: new Date(2020, 1, 7)
  },
  {
    id:3,
    title:'Temple visit',
    price: 13000,
    date: new Date(2022, 1, 8)
  },
  {
    id:4,
    title:'House warming',
    price: 17000,
    date: new Date(2022, 1, 9)
  },
];
const App = () => {

   const[expenses,setExpense]= useState(DUMMY_EXPENSE);
  
  const addExpensehandler = (expense =>
    {
      //setExpense(expenses,...expense);//using spread operator 
      //expenses-items of this array
      //expense-existing item array
      // to form a new array.
      setExpense((previousExpense => {
        return[expense,...previousExpense];//function format taking previous state snapshot then add new value.
      }) );

    });
  return (
    <div>
      {/* sharing function */}
      <NewExpense onAddExpense = {addExpensehandler}/>
      <Expenses items = {expenses}/>
      {/* <ExpenseItem title = {expense[0].title} price = {expense[0].price} date = {expense[0].date} ></ExpenseItem>
      <ExpenseItem title = {expense[1].title} price = {expense[1].price} date = {expense[1].date} ></ExpenseItem>
      <ExpenseItem title = {expense[2].title} price = {expense[2].price} date = {expense[2].date} ></ExpenseItem>
      <ExpenseItem title = {expense[3].title} price = {expense[3].price} date = {expense[3].date} ></ExpenseItem> */}
       
       
    </div>
  );
}

export default App;
