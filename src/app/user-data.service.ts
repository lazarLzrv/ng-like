import { Injectable } from '@angular/core'; 
import { BehaviorSubject } from 'rxjs';
import { UsersService } from './users.service'; 

@Injectable({
  providedIn: 'root'
})

export class UserDataService {
    firstUser;
    UserNameSrc;
    userLikeSrc;
    currentName;
    currentLikes;

    constructor(service:UsersService) { 
        this.firstUser = service.getUsers()[0].name; 
        this.UserNameSrc = new BehaviorSubject(this.firstUser)
        this.currentName = this.UserNameSrc.asObservable()

        this.userLikeSrc = new BehaviorSubject('0')
        this.currentLikes = this.userLikeSrc.asObservable()
    } 
  

    changeUserName(data){
        this.UserNameSrc.next(data);
    }

    changeUserLikes(data){
        this.userLikeSrc.next(data);
    }

   


}
