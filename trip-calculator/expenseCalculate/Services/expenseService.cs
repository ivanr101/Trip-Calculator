using ExpenseSplitter.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ExpenseSplitter.Services
{
    public class ExpenseService
    {
        public Dictionary<string, decimal> CalculateExpenses(List<StudentExpense> studentExpenses)
        {
            var totalExpenses = studentExpenses.Sum(se => se.Expenses.Sum());
            var averageExpense = totalExpenses / studentExpenses.Count;

            var balances = studentExpenses.ToDictionary(
                se => se.Name,
                se => se.Expenses.Sum() - averageExpense
            );

            var result = new Dictionary<string, decimal>();

            foreach (var balance in balances)
            {
                if (balance.Value > 0)
                {
                    foreach (var other in balances)
                    {
                        if (balance.Key != other.Key && other.Value < 0)
                        {
                            var amount = Math.Min(balance.Value, -other.Value);
                            result[$"{balance.Key} owes {other.Key}"] = amount;
                            balances[balance.Key] -= amount;
                            balances[other.Key] += amount;
                            if (balances[balance.Key] == 0)
                                break;
                        }
                    }
                }
            }

            return result;
        }

    }
}
