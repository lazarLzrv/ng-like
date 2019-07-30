import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { UsersService } from '../users.service'; 
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
 
export class PostsComponent implements OnInit { 
    @Output() sendUserName = new EventEmitter();
    users: { pic: string; name: string; text: string; count: number; }[];

    @Output() sendLikes = new EventEmitter()
    openTab = 0; 
    username;
    likes;
 
    changeStatus(user, index){    
        this.openTab=index; 
        this.sendUserName.emit(user.name)  
        this.data.changeUserName(user.name)

        this.sendLikes.emit(user.count);
        this.data.changeUserLikes(user.count)
    }

    isActive(index){ 
        return this.openTab===index; 
    }

    addCount($event, user){  
        // $event.stopPropagation();
        user.count++;
        this.sendLikes.emit(user.count);
        this.data.changeUserLikes(user.count)
    }


    constructor(service: UsersService, private data: UserDataService) { 
        this.users=service.getUsers();
        
    }
    
    
    ngOnInit() {
        this.data.UserNameSrc.subscribe(username => this.username = username)
        this.data.userLikeSrc.subscribe(likes => this.likes = likes)
    }
}
