import { useState } from "react";

import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
    const [filterValue,setFilterValue] = useState('2020');

    const changeFilterValueHandler = (value) => {
        setFilterValue(value);
    }

    const filteredExpenses = props.expenses.filter((expense) =>  expense.date.getFullYear().toString() === filterValue)

    return (
        <div>
            <ExpensesFilter selected={filterValue} onChangeFilterValue={changeFilterValueHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <Card className="expenses">
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;