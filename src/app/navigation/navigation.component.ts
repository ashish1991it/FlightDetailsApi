import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  title:any="";	
  date:any="";
  userDetails;
  constructor(private router:Router) { }

  ngOnInit(): void {

    this.userDetails=JSON.parse(localStorage.userDetails).user;
    
  	this.loadScripts();

  	setInterval(() => { 
  		this.time();
	  }, 1000);

    this.titles();

  }

loadScripts() {
    const dynamicScripts = [
     '../../assets/js/jquery.min.js',
     // '../../assets/js/dataTables.bootstrap.min.js',
     '../../assets/js/jquery.dataTables.min.js',
     '../../assets/js/custom.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
}


time() {
  
  	var x = new Date()
  	var months=["Jan","Feb","March","Apr","May","June","Jul","Aug","Sept","Oct","Nov","Dec"];

  	var month=months[x.getMonth()];
  	var day=x.getDate()+"";
  	var year=x.getFullYear()+"";

  	if (parseInt(day) <10 ){
      day='0' + day;
    }
  	var x3= day+' '+month+' '+year;

  	var hour=x.getHours()+"";
  	var minute=x.getMinutes()+"";
  	var second=x.getSeconds()+"";
  	if(parseInt(hour) <10 ){
      hour='0'+hour;
    }
  	if(parseInt(minute) <10 ) {
      minute='0' + minute; 
    }
  	if(parseInt(second)<10){
      second='0' + second;
    }
  	var x3 = x3 + ' ' +  hour+':'+minute+':'+second

  	this.date=x3;
 
}

  dashboard(){
    this.title="FLYDEL API – DASHBOARD";
  	this.router.navigate(['menu/dashboard']);
  }

   registerApiConsumer(){
    this.title="FLYDEL API – REGISTER API CONSUMER";
  	this.router.navigate(['menu/register-api-consumer']);
  }

   manageApiConsumer(){
    this.title="FLYDEL API – MANAGE API CONSUMERS";
  	this.router.navigate(['menu/manage-api-consumers']);
  }

   configApiData(){
    this.title="FLYDEL API – CONFIG API DATA";
  	this.router.navigate(['menu/config-api-data']);
  }

   configAodbData(){
    this.title="FLYDEL API – CONFIG AODB DATA";
  	this.router.navigate(['menu/config-aodb-data']);
  }

   scheduleApiProfile(){
    this.title="FLYDEL API – SCHEDULE API PROFILE";
  	this.router.navigate(['menu/schedule-api-profile']);
  }

   manageFtpServer(){
    this.title="FLYDEL API – MANAGE FTP SERVERS";
  	this.router.navigate(['menu/manage-ftp-server']);
  }

  logout(){
    this.router.navigate(['login']);
  }

  titles(){

    if(this.router.url=="/menu/dashboard"){
      
      this.title="FLYDEL API – DASHBOARD";

    }else if(this.router.url=="/menu/register-api-consumer"){
      
      this.title="FLYDEL API – REGISTER API CONSUMER";

    }else if(this.router.url=="/menu/manage-api-consumers"){
      
      this.title="FLYDEL API – MANAGE API CONSUMERS";

    }else if(this.router.url=="/menu/config-api-data"){

      this.title="FLYDEL API – CONFIG API DATA";

    }else if(this.router.url=="/menu/config-aodb-data"){

      this.title="FLYDEL API – CONFIG AODB DATA";

    }else if(this.router.url=="/menu/schedule-api-profile"){

      this.title="FLYDEL API – SCHEDULE API PROFILE";

    }else if(this.router.url=="/menu/manage-ftp-server"){

      this.title="FLYDEL API – MANAGE FTP SERVERS";

    }
  }

}
