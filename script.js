/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
}

function addData() {
  //Write your code here, just console.log
  let data = [
    { id:4, name: "susan", age: "20", profeesion: "intern" }
  ];
   arr.push(data);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 12, name: "abcd", age: "21", profession: "Project Manager"},
    { id: 15, name: "efgh", age: "22", profession: "Manager"},
  ];
  let concatArray = arr.concat(newArr);
  console.log(concatArray);
}
