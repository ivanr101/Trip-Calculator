using Microsoft.AspNetCore.Mvc;
using ExpenseSplitter.Models;
using ExpenseSplitter.Services;
using System.Collections.Generic;

namespace ExpenseSplitter.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExpensesController : ControllerBase
    {
        private readonly ExpenseService _expenseService;

        public ExpensesController()
        {
            _expenseService = new ExpenseService();
        }

        [HttpPost]
        public IActionResult CalculateExpenses([FromBody] List<StudentExpense> studentExpenses)
        {
            var result = _expenseService.CalculateExpenses(studentExpenses);
            return Ok(result);
        }
    }
}
