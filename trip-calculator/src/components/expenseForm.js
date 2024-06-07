import React, { useState } from 'react';
import { calculateExpenses } from '../services/expenseService';

const ExpenseForm = () => {
    const [students, setStudents] = useState([
        { name: 'Ivan', expenses: [] },
        { name: 'Jeremiah', expenses: [] },
        { name: 'Leslie', expenses: [] },
    ]);
    const [results, setResults] = useState(null);

    const handleExpenseChange = (index, event) => {
        const values = [...students];
        values[index].expenses = event.target.value.split(',').map(Number);
        setStudents(values);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        calculateExpenses(students).then(setResults);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {students.map((student, index) => (
                    <div key={index}>
                        <label>
                            {student.name}'s expenses (comma separated):
                            <input
                                type="text"
                                value={student.expenses.join(',')}
                                onChange={event => handleExpenseChange(index, event)}
                            />
                        </label>
                    </div>
                ))}
                <button type="submit">Calculate</button>
            </form>
            {results && (
                <div>
                    <h3>Results:</h3>
                    <ul>
                        {Object.entries(results).map(([key, value]) => (
                            <li key={key}>{key}: ${value.toFixed(2)}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ExpenseForm;
