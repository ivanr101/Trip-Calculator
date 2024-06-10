# Trip-Calculator
Welcome to the Trip Calculator! This tool helps you calculate the minimum amount of money that needs to be exchanged among students after a trip to ensure everyone pays an equal share of the expenses. 

## Prerequisites

Install .NET (8.0 tested and works):
https://dotnet.microsoft.com/en-us/download/dotnet

Install Node.js: 
https://nodejs.org/en/download/package-manager

Install Postman (for API Testing): 
https://www.postman.com/downloads/

## How to Build
### Starting the Expense Service (backend)
1. Enter the \trip-calculator\expenseCalculate\ directory
```cd .\trip-calculator\expenseCalculate\```
2. Perform a Dotnet Build 
```dotnet build```
3. Perform a Dotnet Run
```dotnet run```

### Starting the React App (frontend)
1. Open a new terminal and Enter the \trip-calculator\ directory
```cd .\trip-calculator\```
2. Perform a npm install
```npm install```
3. Perform a npm start
```npm start```
4. Open http://localhost:3000 to view the web app in your browser.

## Testing the Trip Calculator

Locate the students_example.json file that is within the \trip-calculator\src\test folder. 

1. **Create a new Request in Postman**:
Open Postman and create a new HTTP request.
Set the request type to POST.
Enter the URL for your API endpoint, for example: http://localhost:5000/expenses

2. **Set the Request Body**:
Select Body and then raw.
Set the body type to JSON.
Copy and Paste the contents from the students_example.json or create your own .json file to use

4. **Send the Request and Check the Response**:
Click Send.
Verify the response matches the expected results. 
Screenshots of the results are included as JPEG's in the test folder.


