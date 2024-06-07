using System.Collections.Generic;

namespace ExpenseSplitter.Models
{
    public class StudentExpense
    {
        public string Name { get; set; }
        public List<decimal> Expenses { get; set; }
    }
}
