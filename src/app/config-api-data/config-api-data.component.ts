import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-api-data',
  templateUrl: './config-api-data.component.html',
  styleUrls: ['./config-api-data.component.css']
})
export class ConfigApiDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeFormat(x){
  	  var element = document.getElementById("json");
      var element1 = document.getElementById("xml");
      var element2 = document.getElementById("csv");

    if(x==0){
       
        element.style.background = "#286090";
        element1.style.background = "#fdfdff";
        element2.style.background = "#fdfdff";
        element.style.color = "#fdfdff";
        element1.style.color = "#286090";
        element2.style.color = "#286090";

    }else if(x==1){
        
        element1.style.background = "#286090";
        element.style.background = "#fdfdff";
        element2.style.background = "#fdfdff";
        element1.style.color = "#fdfdff";
        element.style.color = "#286090";
        element2.style.color = "#286090";

    }else if(x==2){
        
        element2.style.background = "#286090";
        element1.style.background = "#fdfdff";
        element.style.background = "#fdfdff";
        element2.style.color = "#fdfdff";
        element1.style.color = "#286090";
        element.style.color = "#286090";
    }
  }
}
