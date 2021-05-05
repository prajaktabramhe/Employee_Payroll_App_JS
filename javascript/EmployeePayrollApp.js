let isUpdate = false;
let employeePayrollObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) 
        {
            setTextValue('.text-error');
            return;
        }
        try 
        {
          (new EmployeePayrollData()).name = name.value;
          setTextValue('.text-error', "");
        } catch (e) 
        {
            setTextValue('.text-error',e);
        }
       
    });

        const date = document.querySelector('#date');
        date.addEventListener('input', function() {
            const startDate = new Date(Date.parse(getInputElementValue('#day')+" " + getInputValueById('#month')+" " + getInputValueById('#year')));
        try {
            (new EmployeePayrollData()).startDate = startDate;
            setTextValue('.date-error',"");
        } catch (e) {
            setTextValue('.date-error', e);
        }
    });


    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
     //in range button the output shown should always be equal to value the user is updating
     output.textContent = salary.value;
     salary.addEventListener('input', function () {
        output.textContent = salary.value;

     });
     checkForUpdate();
});
const save = (event) => {
    try {
        console.log("save function");
        // event.preventDefault()
        // event.stopPrapogation()
        // let employeePayrollData = createEmployeePayroll();
        setEmployeePayrollObject();
        createAndUpdateStorage();
       // console.log("Welcome to",employeePayrollData);

    } catch (e) {
        return;
   }
}
const setEmployeePayrollObject = () => {
    employeePayrollObj._id = creatNewEmployeeId();
    employeePayrollObj._name = getInputValueById("#name");
    employeePayrollObj._profilePic = getSelectedValues("[name=profile]").pop();
    employeePayrollObj._gender = getSelectedValues("[name=gender]").pop();
    employeePayrollObj._department = getSelectedValues("[name=department]");
    employeePayrollObj._salary = getInputValueById("#salary");
    employeePayrollObj._note = getInputValueById("#notes");
    let date =
      getInputValueById("#day") +
      " " +
      getInputValueById("#month") +
      " " +
      getInputValueById("#year");
    employeePayrollObj._startDate = date;
  };

const createAndUpdateStorage = () =>
{
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
        if(employeePayrollList != undefined)
            {
                employeePayrollList.push(employeePayrollObj);
            } 
        else 
            {
                employeePayrollList = [employeePayrollObj]
            }
            localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
            alert(employeePayrollList.toString());
}
//Use Case 13
// const createAndUpdateStorage = () => {
//     let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
//     if (employeePayrollList) {
//       let empPayrollData = employeePayrollList.find(
//         (empData) => empData._id == employeePayrollObj._id
//       );
//       if (!empPayrollData) {
//           console.log("asasasas", employeePayrollList);
//           console.log("ifff", empPayrollData);
//           employeePayrollList.push(createEmployeePayrollData());
//       } else {
//           console.log("asasasas", employeePayrollList);
//           console.log("else", empPayrollData);
//         const index = employeePayrollList
//           .map((empData) => empData._id)
//           .indexOf(empPayrollData._id);
//         employeePayrollList.slice(
//           index,
//           1,
//           createEmployeePayrollData(empPayrollData._id)
//         );
//       }
//     } else {
//       //check
//       console.log("asasasas", employeePayrollList);
//       console.log("last else", empPayrollData);
//       employeePayrollList = [employeePayrollObj]
//     }
//     localStorage.setItem(
//       "EmployeePayrollList",
//       JSON.stringify(employeePayrollList)
//     );
//     alert(employeePayrollList.toString());
//   };
  
  const createEmployeePayrollData = (id) => {
    let employeePayrollData = new EmployeePayrollData();
    if (!id) employeePayrollData.id = creatNewEmployeeId();
    else employeePayrollData.id = id;
    setEmployeePayrollData(employeePayrollData);
    return employeePayrollData;
  };
  const setEmployeePayrollData = (employeePayrollData) => {
    try {
      employeePayrollData.name = employeePayrollObj._name;
    } catch (e) {
      setTextValue(".text-error", e);
      throw e;
    }
    employeePayrollData.profilePic = employeePayrollObj._profilePic;
    employeePayrollData.gender = employeePayrollObj._gender;
    employeePayrollData.department = employeePayrollObj._department;
    employeePayrollData.salary = employeePayrollObj._salary;
    employeePayrollData.note = employeePayrollObj._note;
    try {
      employeePayrollData.startDate = new Date(
        Date.parse(employeePayrollObj._startDate)
      );
    } catch (e) {
      setTextValue(".date-error", e);
      throw e;
    }
    alert(employeePayrollData.toString());
  };
  
  const creatNewEmployeeId = () => {
    let empID = localStorage.getItem("EmployeeID");
    empID = !empID ? 1 : (parseInt(empID) + 1).toString();
    localStorage.setItem("EmployeeID", empID);
    return empID;
  };
  const randomNumber = () => {
    return Math.floor((Math.random() * 10000) + 1);
}

    const getSelectedValues = (propertyValue) => {
    console.log(propertyValue);
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked) selItems.push(item.value)
    });
        return selItems;
    }

    const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
    }

    const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
        return value;
    }
    
const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setSelectedIndex('#day',0);
    setSelectedIndex('#month',0);
    setSelectedIndex('#year',0);
}
const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setTextValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const setSelectedIndex = (id, index) => {
    const element = document.querySelector(id);
    element.setSelectedIndex = index;
}

const checkForUpdate = () => {
    const employeePayrollJson = localStorage.getItem('editEmp');
    isUpdate = employeePayrollJson ? true : false;
    if(!isUpdate) return;
    employeePayrollObj = JSON.parse(employeePayrollJson);
    setForm();
}


const setForm = () => {
   
    setValue('#name', employeePayrollObj._name);
    setSelectedValues('[name=profile]', employeePayrollObj.profilePic);
    console.log("Pic",employeePayrollObj._profilePic);
    setSelectedValues('[name=gender]', employeePayrollObj._gender);
    setSelectedValues('[name=department]', employeePayrollObj._department);
    setValue('#salary',employeePayrollObj._salary);
    setTextValue('.salary-output', employeePayrollObj._salary);
    setValue('#notes',employeePayrollObj._note);
    let date = stringifyDate(employeePayrollObj.date).split(" ");
    console.log("Date",date);
    setValue('#day', date[0]);
   
    setValue('#month',date[1]);
    setValue('#year',date[2]);
}

const setSelectedValues = (propertyValue, value) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        if(Array.isArray(value))
        {
            if(value.includes(item.value))
            {
                item.checked = true;
            }
        }
            else if (item.value === value)
            item.checked = true;
        
    });
}