import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
   title = '';
   type = '';
   data = [];
   options = {};
   width;
   height;

   title1 = '';
   type1 = '';
   data1 = [];
   options1 = {};
   width1;
   height1;
   graph:any="api";
  constructor() { }

  ngOnInit(): void {

  	this.apiGraph();
  	this.consumerGraph();

  }

  apiGraph(){
  	this.title = 'API CALL WISE';
   	this.type = 'ColumnChart';
   	this.data = [
	      ['10-APR',45],
	      ['11-APR',10],
	      ['12-APR',80],
	      ['13-APR',70],
	      ['14-APR',56],
	      ['15-APR',110],
	      ['16-APR',90]
   	];

   this.options = {    

   	animation: {
          "startup": true,
          duration: 2000,
          easing: 'linear'
        },
        hAxis: {
          title: 'LAST WEEK',
          // viewWindow: { min: 0, max: 8 }
        },
        vAxis: {
          title: 'TOTAL API CALLS',
          // gridlines: {
          //   count: 5
          // }

        }
   };
   this.width = 940;
   this.height = 400;
  }


  consumerGraph(){
  	this.title1 = 'CONSUMER CALL WISE';
   	this.type1 = 'ColumnChart';
   	this.data1 = [
	      ['VAKAR',40],
	      ['ALOK',10],
	      ['ASHISH',60],
	      ['DHIRAJ',40],
	      ['RACHIT',26],
	      ['TEST',50],
	      ['ANUP',30]
   	];

   this.options1 = {    

   	animation: {
          "startup": true,
          duration: 2000,
          easing: 'linear'
        },
        hAxis: {
          title: 'CONSUMER NAME',
          // viewWindow: { min: 0, max: 8 }
        },
        vAxis: {
          title: 'TOTAL API CALLS',
          // gridlines: {
          //   count: 5
          // }

        }
   };
   this.width1 = 940;
   this.height1 = 400;
  }

}
