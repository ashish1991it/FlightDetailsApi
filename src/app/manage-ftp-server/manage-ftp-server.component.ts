import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-ftp-server',
  templateUrl: './manage-ftp-server.component.html',
  styleUrls: ['./manage-ftp-server.component.css']
})
export class ManageFtpServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  changeProtocol(x){

  	  var element = document.getElementById("ftp");
      var element1 = document.getElementById("sftp");

    if(x==0){
       
        element1.style.background = "#286090";
        element.style.background = "#fdfdff";
        element1.style.color = "#fdfdff";
        element.style.color = "#286090";

    }else if(x==1){
        
        element.style.background = "#286090";
        element1.style.background = "#fdfdff";
        element.style.color = "#fdfdff";
        element1.style.color = "#286090";

    }
  }

}
