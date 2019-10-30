import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
registrationForm= new FormGroup({
  username: new FormControl(''),
  email: new FormControl(''),

});

  title = 'Table';
  public users = [];
  // public new_user=[];
  // startindex=0;
  // endindex=5;
  size:number
  offset:number
  pages = []
filterUsers:Array<any>
total;
name='';
a
b

  constructor() {
      this.users.push(
      { Name: "a", email_id: "abc@gmail.com"},
      { Name: "b", email_id: "xyz@gmail.com"},
      { Name: "c", email_id: "ppp@gmail.com"}, { Name: "d", email_id: "abc@gmail.com"},
      { Name: "e", email_id: "xyz@gmail.com"},
      { Name: "f", email_id: "ppp@gmail.com"}, { Name: "g", email_id: "abc@gmail.com"},
      { Name: "h", email_id: "xyz@gmail.com"},
      { Name: "i", email_id: "ppp@gmail.com"}, { Name: "j", email_id: "abc@gmail.com"},
      { Name: "k", email_id: "xyz@gmail.com"},
      { Name: "l", email_id: "ppp@gmail.com"}, { Name: "m", email_id: "abc@gmail.com"}, 
      { Name: "l", email_id: "ppp@gmail.com"}, { Name: "m", email_id: "abc@gmail.com"}, 
       
      { Name: "n", email_id: "abc@gmail.com"},
      { Name: "o", email_id: "ayushi@gmail.com"})


      
this.size =5
this.offset=0
this.filterUsers = this.users.slice(this.offset,this.offset+this.size)

this.changePage()

  }
  pageprev(){
  
    this.offset -=1
    // if(this.offset=this.total-1){
      // this.offset+=2
    // }
    let offset = this.size*this.offset
    this.filterUsers = this.users.slice(offset,offset+this.size)
    
    }


  mypagination(i){
    this.offset =i
    let offset = this.size*this.offset
    this.filterUsers = this.users.slice(offset,offset+this.size)
    console.log(i)
    }



pagenext(){
  this.offset +=1
  let offset = this.size*this.offset
  this.filterUsers = this.users.slice(offset,offset+this.size)
console.log(this.filterUsers);


}
    
   
  descending( ){
  function compare(a, b){
      var nameA=a.Name.toLowerCase()
      var nameB=b.Name.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return -1 
      if (nameA > nameB)
          return 1
      return 0 //default return value (no sorting)
  }
  this.filterUsers.sort(compare)
    
  }
  ascending( ){
  function compare(a, b){
      var nameA=a.Name.toLowerCase()
      var nameB=b.Name.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return 1
      if (nameA > nameB)
          return -1 
      return 0 //default return value (no sorting)
  }
  this.filterUsers.sort(compare)
    
  }

  descendingemail( ){
  function compare(a, b){
      var nameA=a.email_id.toLowerCase()
      var nameB=b.email_id.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return -1 
      if (nameA > nameB)
          return 1
      return 0 //default return value (no sorting)
  }
  this.filterUsers.sort(compare)
    
  }
  ascendingemail( ){

  function compare(a, b){
      var nameA=a.email_id.toLowerCase()
      var nameB=b.email_id.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return 1
      if (nameA > nameB)
          return -1 
      return 0 //default return value (no sorting)
  }
  this.filterUsers.sort(compare)
    
  }


  delete(i) {
    this.filterUsers.splice(i, 1);
  }
  edit(user) {
    user.edit = !user.edit
  }

//   add() {

//     if (this.users.length > 0) {
//       let user = this.users[this.users.length - 1]
//       if (user.Name == undefined || user.Name == "") {
       
//       return
//       }
//       if (user.email_id == undefined || user.email_id == "") {
//         return
//       }
//      this.users.push({ edit: true })
      
//       this.total =  Math.ceil(this.users.length/this.size)
      
//       if(this.users.length%5==1)  {
        
//         this.pages.push(this.i++)
//       }

//     }else{
//       this.users.push({ edit: true })
//       this.total =  Math.ceil(this.users.length/this.size)
      
//       if(this.users.length%5==1)  {
        
//         this.pages.push(this.i++)

//       }
//     }

//     this.filterUsers 
// }

addpopup(){
      this.users.push( { Name:this.registrationForm.value.username, email_id: this.registrationForm.value.email},)
          
          this.changePage()
         
//          let i=this.users.length
//          if(i%5==1){
// console.log(this.users.length)
//           //  this.filterUsers=this.users.slice(this.a,this.b)
//         this.filterUsers=  this.users.slice(i-5,i)
//          }
//         this.filterUsers
//         console.log(this.users.slice(i-5,i))
//         console.log(this.users)
//         //  }
       

    }


public changePage(){
  this.pages=[]
  this.total =  Math.ceil(this.users.length/this.size)
  for (let i = 0; i < this.total; i++) {
    this.pages.push(i+1)
    
  }
  
}
 
  isvalidname(user){
    if(!user.Name){
    return false
  }
  
  var re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return !re.test(String(user.Name).toLowerCase());
}
  isvalidemail(user){
    if(!user.email_id){
      return false
    }
  
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(String(user.email_id).toLowerCase());
  }


  

  save(user){
    var nm = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var test1= nm.test(user.Name);
    

    if(user.Name==""||user.Name==undefined||test1==false){
      console.log("first call")
      return
     }

     var ei = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     var test2= ei.test(String(user.email_id).toLowerCase());
    
     if (user.email_id ==""||user.email_id==undefined||test2==false) {
        console.log("second call")
      return
    }

  else{
        user.edit=!user.edit
      }
    }
  };


