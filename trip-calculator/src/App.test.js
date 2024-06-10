import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpenseForm from './components/expenseForm';

describe('ExpenseForm', () => {
    test('renders the form correctly', () => {
        render(<ExpenseForm />);
        expect(screen.getByText(/Ivan's expenses/i)).toBeInTheDocument();
        expect(screen.getByText(/Jeremiah's expenses/i)).toBeInTheDocument();
        expect(screen.getByText(/Leslie's expenses/i)).toBeInTheDocument();
    });

    test('handles expense input correctly', () => {
        render(<ExpenseForm />);
        
        const ivanInput = screen.getByLabelText(/Ivan's expenses/i);
        fireEvent.change(ivanInput, { target: { value: '10.5,20.3' } });
        
        expect(ivanInput.value).toBe('10.5,20.3');
    });

});
