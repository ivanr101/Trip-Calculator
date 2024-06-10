import React, { useState } from 'react';
import { calculateExpenses } from '../services/expenseService';

const ExpenseForm = () => {
    const [students, setStudents] = useState([
        { name: 'Ivan', expenses: '' },
        { name: 'Jeremiah', expenses: '' },
        { name: 'Leslie', expenses: '' },
    ]);
    const [results, setResults] = useState(null);

    const handleExpenseChange = (index, event) => {
        const values = [...students];
        values[index].expenses = event.target.value;
        setStudents(values);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Parse the expenses string into arrays of numbers
        const processedStudents = students.map(student => ({
            ...student,
            expenses: student.expenses.split(',').map(expense => parseFloat(expense.trim()) || 0)
        }));

        calculateExpenses(processedStudents).then(setResults);
    };

    return (
        <div>
            <form id="msform" onSubmit={handleSubmit}>
                {students.map((student, index) => (
                    <div key={index}>
                        <label>
                            {student.name}'s expenses (comma separated):
                            <input
                                type="text"
                                value={student.expenses}
                                onChange={event => handleExpenseChange(index, event)}
                                placeholder="e.g. 12.34, 56.78"
                            />
                        </label>
                    </div>
                ))}
                <button className="action-button" type="submit">Calculate</button>
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
