#### Readme 

- EZwage is a simple application that will keep track of your employees and their wages.

## User Stories

- Users can add an employee with their name, position, hourly-rate, and hours worked.
- Users can click on an employees name and it will transition into their respective page.
- Users can update the details of an employee.
- Users can delete an employee.
- Users can see the sum of all employee wages.

## List of Components

- App.js
- employee.js
- AllEmployees.js
- SingleEmployee.js
- Form

## Frontend React Router Route Table
```
    <Link to="/new"><button style={button}>New Employee</button></Link>
      <Routes>
        <Route path="/" element={<AllEmployees employees={employees} />} />
        <Route path="/employee/:id" element={<SingleEmployee employees={employees} edit={getTargetEmployee} deleteEmployee={deleteEmployee}/>} />
        <Route path="/new" element={<Form
        initialEmployee={nullEmployee}
        handleSubmit={addEmployees}
        buttonLabel="Add"
        />} />
        <Route path="/edit" element={<Form
        initialEmployee={targetEmployee}
        handleSubmit={updateEmployee}
        buttonLabel="Update"
        />} />
      </Routes>
```
# Back-End

## Models
```
class CreateEmployeesTable(Migration):
    def up(self):
        """
        Run the migrations.
        """
        with self.schema.create("employees") as table:
            table.increments("id")
            table.string("name")
            table.string("position")
            table.integer("hours")
            table.integer("rate")
            table.timestamps()

    def down(self):
        """
        Revert the migrations.
        """
        self.schema.drop("employees")

```


## Backend Route Table

Our routes are listed in the table below:

| url | method | action |
|-----|--------|--------|
| /employees | get | display all employees (index)|
| /employees/new | get | display form to add a new employee (new)|
| /employees/ | post | add the new employee to database (create)|
| /employees/:id | get | show info based on selected employee (show)|
| /employees/:id | put | update an employee's existing data (update)|
| /employees/:id | delete | terminate an employee (destroy)|

```
    Get("/", "EmployeeController@index").name("index"),
    Get("/@id", "EmployeeController@show").name("show"),
    Post("/", "EmployeeController@create").name("create"),
    Put("/@id", "EmployeeController@update").name("update"),
    Delete("/@id", "EmployeeController@destroy").name("destroy")
```