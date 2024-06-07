import axios from 'axios';

const API_URL = 'http://localhost:5000/expenses';

export const calculateExpenses = (studentExpenses) => {
    return axios.post(API_URL, studentExpenses)
        .then(response => response.data)
        .catch(error => {
            console.error('There was an error calculating the expenses!', error);
        });
};
