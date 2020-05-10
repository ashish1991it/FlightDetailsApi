import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-api-consumers',
  templateUrl: './manage-api-consumers.component.html',
  styleUrls: ['./manage-api-consumers.component.css']
})
export class ManageApiConsumersComponent implements OnInit {

    userData;
  userDetail={
            'id' : '',
            'givenname' : '',
            'surname' : '',
            'server_ip' : '',
            'expiry_date' : '',
            'api_key':'',
            'api_url':'',
            'activation_date' : '',
            'lupd' : '',
            'reset_flag' : false
        };

  constructor() { }

  ngOnInit(): void {
  	  	this.loadScripts();

  	  	this.userData=[{
            'id' : 1,
            'givenname' : 'alok',
            'surname' : 'kumar',
            'server_ip' : '10.19.11.11',
            'expiry_date' : '27-07-2022',
            'api_key':'hhvf99dkf8ue4',
            'api_url':'http://10.248.16.8/cdm',
            'activation_date' : '27-01-2020',
            'lupd' : '20-04-2020 12:01',
            'reset_flag' : false
        },
        {
            'id' : 2,
            'givenname' : 'alok',
            'surname' : 'kumar',
            'server_ip' : '10.19.11.11',
            'expiry_date' : '27-07-2022',
            'api_key':'hhvf99dkf8ue4',
            'api_url':'http://10.248.16.8/cdm',
            'activation_date' : '27-01-2020',
            'lupd' : '20-04-2020 12:01',
            'reset_flag' : false
        },
        {
            'id' : 3,
            'givenname' : 'alok',
            'surname' : 'kumar',
            'server_ip' : '10.19.11.11',
            'expiry_date' : '27-07-2022',
            'api_key':'hhvf99dkf8ue4',
            'api_url':'http://10.248.16.8/cdm',
            'activation_date' : '27-01-2020',
            'lupd' : '20-04-2020 12:01',
            'reset_flag' : false
        },
        {
            'id' : 4,
            'givenname' : 'alok',
            'surname' : 'kumar',
            'server_ip' : '10.19.11.11',
            'expiry_date' : '27-07-2022',
            'api_key':'hhvf99dkf8ue4',
            'api_url':'http://10.248.16.8/cdm',
            'activation_date' : '27-01-2020',
            'lupd' : '20-04-2020 12:01',
            'reset_flag' : false
        },
        {
            'id' : 5,
            'givenname' : 'alok',
            'surname' : 'kumar',
            'server_ip' : '10.19.11.11',
            'expiry_date' : '27-07-2022',
            'api_key':'hhvf99dkf8ue4',
            'api_url':'http://10.248.16.8/cdm',
            'activation_date' : '27-01-2020',
            'lupd' : '20-04-2020 12:01',
            'reset_flag' : false
        },
        {
            'id' : 6,
            'givenname' : 'alok',
            'surname' : 'kumar',
            'server_ip' : '10.19.11.11',
            'expiry_date' : '27-07-2022',
            'api_key':'hhvf99dkf8ue4',
            'api_url':'http://10.248.16.8/cdm',
            'activation_date' : '27-01-2020',
            'lupd' : '20-04-2020 12:01',
            'reset_flag' : false
        },
        {
            'id' : 7,
            'givenname' : 'alok',
            'surname' : 'kumar',
            'server_ip' : '10.19.11.11',
            'expiry_date' : '27-07-2022',
            'api_key':'hhvf99dkf8ue4',
            'api_url':'http://10.248.16.8/cdm',
            'activation_date' : '27-01-2020',
            'lupd' : '20-04-2020 12:01',
            'reset_flag' : false
        },
        {
            'id' : 8,
            'givenname' : 'alok',
            'surname' : 'kumar',
            'server_ip' : '10.19.11.11',
            'expiry_date' : '27-07-2022',
            'api_key':'hhvf99dkf8ue4',
            'api_url':'http://10.248.16.8/cdm',
            'activation_date' : '27-01-2020',
            'lupd' : '20-04-2020 12:01',
            'reset_flag' : false
        }
        ];
  	// this.userList();
  }

   loadScripts() {
    const dynamicScripts = [
     '../../assets/js/jquery.min.js',
     '../../assets/js/jquery.dataTables.min.js',
     '../../assets/js/dataTables.bootstrap.min.js',
     '../../assets/js/tables.js'
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


  editModalOpen(user){

  	this.userDetail=user;
  
  }

   update(userDetail){
   	alert("User details are updated.");
   }


   changeStatus(x){
      var element = document.getElementById("enable");
      var element1 = document.getElementById("disable");
    if(x==1){
       
        element.style.background = "#286090";
        element1.style.background = "#fdfdff";
        element.style.color = "#fdfdff"
        element1.style.color = "#286090"
      
    }else{
        
        element.style.background = "#fdfdff";
        element1.style.background = "#286090";
        element.style.color = "#286090"
        element1.style.color = "#fdfdff"
    }
  
  }

}

