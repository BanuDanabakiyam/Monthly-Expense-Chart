import React from 'react';
import './ExpenseDate.css';
import Card from '../UI/Card';

export default function ExpenseDate(props){
    const day = props.date.toLocaleString('en-us',{day:'2-digit'});//tolocalestring - human readable date format
    const month = props.date.toLocaleString('en-us',{month:'long'});
    const year = props.date.getFullYear();//we get full year

    return(
        <Card className='expense-date'>
                <div className='expense-date__day'>{day}</div>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
            </Card>
    );
}
