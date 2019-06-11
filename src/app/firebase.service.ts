import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class FirebaseService {

    constructor(private http: HttpClient) {}
    storeServers(servers: any){
        console.log("you are in the store method");
        console.log(servers);
        return this.http.post('https://firestore-e6ff0.firebaseio.com/new.json', servers); // this will return observable .... 
        //this.http.post('https://firestore-e6ff0.firebaseio.com/data.json', servers);          
    }

    getServers(){
        return this.http.get('https://firestore-e6ff0.firebaseio.com/data.json'); 
    }
}  