import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
    @Input() title; 
    
    constructor(private data: UserDataService) { }

    username;
    likes;
    ngOnInit() {
        this.data.UserNameSrc.subscribe(username => this.username = username)
        this.data.userLikeSrc.subscribe(likes => this.likes = likes)
    }

}
