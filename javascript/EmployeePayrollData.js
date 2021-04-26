class EmployeePayrollData 
{
    constructor(...params) 
    {
      this.id = params[0];
      this.name = params[1];
      this.salary = params[2];
      this.gender = params[3];
      this.date = params[4];
    }

    get name() 
    {
      return this._name;
    }
    set name(name)
    {
      let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
       
        if (nameRegex.test(name)) 
        this._name = name;
        else throw "Name is incorrect";
    } 



      //method
      toString()
    {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        //if start date is not in the given datatype it will pass the value undefined to empdate
        const empDate = !this.startDate ? "undefined" :
        this.startDate;
        //here in return for start date we are passing empDate as value                
        return "id=" + this.id + ", name='" + this.name + ", gender='" + this.gender +
            ", salary=" + this.salary + ", startDate=" + empDate;
    }
}