
import Card from '../UI/Card';
import './Expense.css';
import ExpenseList from './ExpenseList';
import ExpensesFilter from './ExpensesFilter';
import React,{useState} from 'react';
import ExpenseChart from './ExpenseChart';

  const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
  
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
    const filteredExpense = props.items.filter((expense) =>{
      return expense.date.getFullYear().toString() === filteredYear;
    })

    
  
   return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseChart expenses = {filteredExpense}></ExpenseChart>
      <ExpenseList items = {filteredExpense}/>
      

      {/* rendering */}
       {/* {props.items.map((expense,index) => <ExpenseItem key ={expense.id} title={expense.title} price={expense.price} date={expense.date}/>)}  */}
      {/* using key more effecicently the list updated without bugs and error */}
    </Card>
    </div>
  );
}
export default Expenses;


