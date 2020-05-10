import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FlydelService {

  constructor(private httpClient:HttpClient) { }

   login(params){
      let apiUrl = '../../assets/json/login.json';

      return this.httpClient.get(apiUrl);

   } 

   getAppData(params){
      let apiUrl = '../../assets/json/apps.json';

      return this.httpClient.get(apiUrl);

   } 


   getUserData(params){
      let apiUrl = '../../assets/json/users.json';
      // return this.httpClient.post('${apiUrl}/',params);

      return this.httpClient.get(apiUrl);

   } 


   createUser(params){
      let apiUrl = '../../assets/json/add-user.json';
      // return this.httpClient.post('${apiUrl}/',params);

      return this.httpClient.get(apiUrl); 

   } 


   addApplication(params){
   	  let apiUrl = '../../assets/json/add-app.json';
      // return this.httpClient.post('${apiUrl}/',params);

      return this.httpClient.get(apiUrl); 
   }

    updateApplication(params){
   	  let apiUrl = '../../assets/json/update-app.json';
      // return this.httpClient.post('${apiUrl}/',params);

      return this.httpClient.get(apiUrl); 
   }

	
    updateUser(params){
   	  let apiUrl = '../../assets/json/update-user.json';
      // return this.httpClient.post('${apiUrl}/',params);

      return this.httpClient.get(apiUrl); 
   }  

}
