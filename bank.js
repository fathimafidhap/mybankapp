//bank ne aghathulla oru me





//let accountDetails={
// 1000:{acno:1000,name:"sajay",bal:10000,username:"test",password:"test"},
// 1001:{acno:1001,name:"ajay",bal:20000,username:"test1",password:"test1"},
// 1002:{acno:1002,name:"vijay",bal:25000,username:"test2",password:"test2"}
//}
//}
//console.log(accountDetails[1000]["acno"])
//or
//console.log(accountDetails[1001].name)

//check of 1000 acno exsist or not
//if exsist print person name
//if(1000 in accountDetails){
//  console.log(accountDetails[1000].name)
//}
//else{
// console.log(" account doesnot exsist")
//}


class Bank {
   static getData() {

      var accountDetails = {
         userone: { acno: 1000, bal: 10000, username: "userone", password: "testuser" },
         usertwo: { acno: 1001, bal: 12000, username: "usertwo", password: "testuser1" },
         userthree: { acno: 1002, bal: 13000, username: "userthree", password: "testuser2" }
      }
      return accountDetails
   }
   static login() {
      let uname = document.querySelector("#username").value
      let pwd = document.querySelector("#password").value

      let dataset = Bank.getData()

      if (uname in dataset) {
         if (dataset[uname].password == pwd) {
            alert("login sucessful")
            window.location.href = "userhome.html"
         }
         else {
            alert("incorrect password")
         }
      }
      else {
         alert("no user exsist with provided details")
      }


   }
   static deposit() {
      let uname = document.querySelector("#uname").value
      let pwd = document.querySelector("#pwd").value
      let amt = Number(document.querySelector("#amt").value)
      let dataset = Bank.getData()

      if (uname in dataset) {
         if (dataset[uname].password == pwd) {
            dataset[uname].bal += amt
            alert("amount is credited by" + amt + "current balance is" + dataset[uname].bal)
         }
         else {
            alert("incorrect password")
         }
      }
      else {
         alert("no user exsist with provided details")
      }


   }
   static withdrawal() {
      let uname = document.querySelector("#uname").value
      let pwd = document.querySelector("#pwd").value
      let amt = document.querySelector("#amt").value
      let dataset = Bank.getData()
      if (uname in dataset) {
         if (dataset[uname].password == pwd) {
            if (dataset[uname].bal >= amt) {
               dataset[uname].bal -= amt
               alert("amount is debit by" + amt + "current balance is" + dataset[uname].bal)
            }
            else {
               alert("insufficent balance")
            }
         }
         else {
            alert("incorrect password")
         }
      }
      else {
         alert("no user exsist with provided details")
      }


   }
}




