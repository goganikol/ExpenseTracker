import { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) =>{
    const [isEditing,setIsEditing] = useState(false);

    const saveNewExpenseData = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString(),
        }

        props.addExpense(newExpenseData);
        stopEditing();
    }

    const startEditing = () => {
        setIsEditing(true);
    }

    const stopEditing = () => {
        setIsEditing(false);
    }

    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditing}>Add new Item </button>}
            {isEditing && <ExpenseForm onSaveNewExpenseData={saveNewExpenseData} onCancel={stopEditing}/>}
        </div>
    )
};

export default NewExpense;

