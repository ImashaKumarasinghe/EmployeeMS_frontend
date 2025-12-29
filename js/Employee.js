// to write all functions

getAllEmployees();

function saveEmployee() {
    let name = $('#exampleFormControlInput2').val();
    let address = $('#exampleFormControlInput3').val();
    let number = $('#exampleFormControlInput4').val();

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/employee/saveemployee",
        async: true,
        data: JSON.stringify({
            "empId": "",
            "empName": name,
            "empAddress": address,
            "empMNumber": number
        }),
        success: function (data) {
            alert("saved");
            getAllEmployees();
        },
        error: function (xhr, exception) {
            alert("Error");
        }
    });
}

/* update function */

function updateEmployee() {
    let empId = $('#exampleFormControlInput1').val();
    let name = $('#exampleFormControlInput2').val();
    let address = $('#exampleFormControlInput3').val();
    let number = $('#exampleFormControlInput4').val();

    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/employee/updateemployee",
        async: true,
        data: JSON.stringify({
            "empId": empId,
            "empName": name,
            "empAddress": address,
            "empMNumber": number
        }),
        success: function (data) {
            alert("updated successfully");
            getAllEmployees();
        },
        error: function (xhr, exception) {
            alert("Error");
        }
    });
}


/* delete function */

function deleteEmployee() {
    let empId = $('#exampleFormControlInput1').val();

    $.ajax({
        method: "DELETE",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/employee/deleteemployee/" + empId,
        async: true,
        success: function (data) {
            alert("deleted successfully");
            getAllEmployees();
        },
        error: function (xhr, exception) {
            alert("Error");
        }
    });
}

/* get all function */

function getAllEmployees() {
    $.ajax({
        method: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/employee/getAllEmployees",
        async: true,
        success: function (data) {
            if (data.code === "00") {
                $('#empTable').empty();
                for (let emp of data.content) {
                    let empId = emp.empId;
                    let name = emp.empName;
                    let address = emp.empAddress;
                    let number = emp.empMNumber;

                    var row = `<tr><td>${empId}</td><td>${name}</td><td>${address}</td><td>${number}</td></tr>`;

                    $('#empTable').append(row);
                }
            }
        },
        error: function (xhr, exception) {
            alert("Error");
        }
    });
}
