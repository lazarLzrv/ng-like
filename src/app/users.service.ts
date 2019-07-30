import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getUsers(){
      return [
        {
            pic:"/assets/pic.png",
            name:"Ivan",
            text:"content text comes here",
            count:0
        }, 
        {
            pic:"/assets/pic.png",
            name:"Pesho",
            text:"content text comes here",
            count:0
        },
        {
            pic:"/assets/pic.png",
            name:"Gosho",
            text:"content text comes here",
            count:0
        },
    ]
  }      
  constructor() { }
}
