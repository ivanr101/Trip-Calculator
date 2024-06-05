import React, { useState } from 'react';

const ExpenseForm = () => {
    const [students, setStudents] = useState([
        { name: 'Ivan', expenses: [] },
        { name: 'Jeremiah', expenses: [] },
        { name: 'Leslie', expenses: [] },
    ]);
    const [results] = useState(null);

    const handleExpenseChange = (index, event) => {
        const values = [...students];
        values[index].expenses = event.target.value.split(',').map(Number);
        setStudents(values);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //calculate()
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
                    
                </div>
            )}
        </div>
    );
};

export default ExpenseForm;
