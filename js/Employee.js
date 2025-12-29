//to write all functions



function saveEmployee(){
let name=$('#exampleFormControlInput2').val();
let address=$('#exampleFormControlInput3').val();
let number=$('#exampleFormControlInput4').val();


$.ajax({
method:"POST",
contentType:"application/json",
url:"http://localhost:8080/api/v1/employee/saveemployee",
async:true,
data.JSON.stringify({
 "empId": "",
  "empName": "name",
  "empAddress": "address",
  "empMNumber": "number"

}),
success:function(data){
alert("saved")
},
error:function(xhr,exception){
alert("Error")
}
})
}
