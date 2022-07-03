import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
users: String[];
 
 
  constructor(private userService: UserService){}

  ngOnInit() {
    this.users = this.userService.acticeUser;
  }

  onSetToActive(id:number){
    this.userService.setToActiv(id);
  }
}