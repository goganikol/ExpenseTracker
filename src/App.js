import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DATA = [
    {
        id: 'e1',
        title: 'Car Insurance',
        amount: '100.00',
        date: new Date(2022,8,6)
    },
    {
        id: 'e2',
        title: 'TV',
        amount: '399.99',
        date: new Date(2022,8,10)
    },
    {
        id: 'e3',
        title: 'Food & Drinks',
        amount: '300.50',
        date: new Date(2021,8,10)
    },
    {
        id: 'e4',
        title: 'Play Station 5',
        amount: '875.50',
        date: new Date(2019,8,12)
    },
    {
        id: 'e5',
        title: 'Iphone 14 Pro Max',
        amount: '999.99',
        date: new Date(2022,8,15)
    },
];

function App () {
    const[expenses,setExpense] = useState(DATA)

    const addExpenseHandler = (expense) => {
        setExpense(prevExpenses => {
            return [expense, ...prevExpenses];
        })
    }

    return(
        <div>
            <NewExpense addExpense={addExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    )
}

export default App;