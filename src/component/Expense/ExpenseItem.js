import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {// we get all data from outside of the component
    //const day = props.date.toLocaleString('en-us',{day:'2-digit'});//tolocalestring - human readable date format
    // const month = props.date.toLocaleString('en-us',{month:'long'});
    //const year = props.date.getFullYear();//we get full year
    
    return(
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
            
            <div className="expense-item__description">
                <h2>{props.title}</h2> 
                <div className="expense-item__price">Rs.{props.price}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;