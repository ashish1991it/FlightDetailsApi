import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlydelService } from '../services/flydel.service';
// import * as data from '../../assets/json/login.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

empLogin:boolean=false;
consLogin:boolean=false;
employee={
	pernr:"",
	password:""
}
consultant={
	cnlt:"",
	password:""
}

loginData={};
  constructor( private router:Router, private flydelService:FlydelService) { }

  ngOnInit(): void {
  	

  }

 getStarted(item){
 	if(item=='emp'){
 		this.empLogin=false;
 		this.consLogin=true;
 	}else if(item=='consult'){
 		this.empLogin=true;
 		this.consLogin=false;
 	}
 }

 login(user){
 	let params={ 
 		'username' : user.pernr||user.cnlt, 
 		'password': user.password, 
 		
 	};
 	this.flydelService.login(params).subscribe((data)=>{
 		console.log(data);

 		this.loginData=data;

 		console.log("loginData-->"+this.loginData);

 		localStorage.setItem("userDetails",JSON.stringify(this.loginData))

 		this.router.navigate(['menu/dashboard']);

 	});
 	
 }
}
