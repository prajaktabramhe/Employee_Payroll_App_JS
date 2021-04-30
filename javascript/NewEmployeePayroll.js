// let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    let empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml(empPayrollList);
    });

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
    JSON.parse(localStorage.getItem('EmployeePayrollList')) : [] ;

}

const createInnerHtml = (empPayrollList) =>  {
    console.log(empPayrollList);
    if(empPayrollList.length == 0) return;
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>start Date</th><th>Actions</th></tr>"; 
    let innerHtml = `${headerHtml}`;
    
    for(const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
        <td><img class="profile" src="${empPayrollData.profilePic}"   alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData.date}</td>
        <td>
            <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" width="30px" src="../assets/icons/delete-black-18dp.svg">
            <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" width="30px" src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>`
    }
    document.querySelector('#display').innerHTML = innerHtml;
};


const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`;
    }
    return deptHtml ;
};