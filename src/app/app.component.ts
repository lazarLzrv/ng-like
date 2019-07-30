import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    appTitle="Some title" 
    name;
    likes=0;
    
    constructor(service: UsersService) { 
        this.name=service.getUsers()[0].name;
    }
   
    receiveUserName($event){
        this.name = $event;
    }
    getLikes($event){
        this.likes = $event;
    }
}
