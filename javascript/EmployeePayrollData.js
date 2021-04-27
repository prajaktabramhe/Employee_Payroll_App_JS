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
 //getter and setter method
  get id()
  {
    return this._id;
  }
  set id(id)
  {
    this._id = id;
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
get profillePic()
{
  return this._profilePic;
}
set profillePic(profillePic)
{
  this._profilePic = profillePic;
}
get geneder()
{
  return this._gender;
}
set gender()
{
  this._gender = gender;
}
get department()
{
  return this._department;
}
set department(department)
{
this._department = department;
}
get salary()
{
  return this._salary;
}
set salary(salary)
{
  this._salary = salary;
}

get note()
{
  return this._note;
}
set note(note)
{
  this._note = note;
}

get startDate() 
{
  return this._startDate;
}

set startDate(startDate) 
{
    this._startDate = startDate;
}

 //method
toString()
  {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        //if start date is not in the given datatype it will pass the value undefined to empdate
        const empDate = !this.startDate ? "undefined" :
        this.startDate;
        //here in return for start date we are passing empDate as value                
        return "id=" + this.id + ", name='" + this.name + ", gender='" + this.gender + ", profilePic=" +  ", department =" + this.department, ",salary=" + this.salary + ", startDate=" + empDate + ", note =" + this.note;
  }
}