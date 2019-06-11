import { Component } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebaseHttpTest';
  name = '';
  test = '';
  test2 = '';
  object = [{name:"", gender:"", male:""}];
  s = {name:'hala', gender:'male', id: 30};
  servers = {name:'hahahaha'};
  
  constructor(private f:FirebaseService){}

  onClick(){
    this.s.name = this.name;
    this.f.storeServers(this.s)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  get(){
    this.f.getServers()
    .subscribe(
      (response: HttpResponse<any>) => {
        const data = response.body;
        console.log(data);
      }, 
      (error) => console.log(error)
    );
  }

}
