import './ExpensesList.css';

import ExpensiveItem from './ExpensiveItem';

const ExpensesList = props => {

    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>No Expenses Founded</h2>
    }

    return(
        <ul className='expenses-list'>
            {props.items.map((expense) => (
                    <ExpensiveItem key={expense.id}
                    date={expense.date}
                    amount={expense.amount}
                    title={expense.title}
                />  
                ))
            }
        </ul>
    )
}

export default ExpensesList;