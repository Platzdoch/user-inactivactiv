import { Component, EventEmitter, Injectable,OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inaktive-user',
  templateUrl: './inaktive-user.component.html',
  styleUrls: ['./inaktive-user.component.css']
})

export class InaktiveUserComponent implements OnInit {

  users:String[];
  userSettoActive = new EventEmitter<number>( );

  constructor(private userService: UserService){}

  ngOnInit() {
    this.users = this.userService.inacticeUser;
  }

  onSetToActive(id:number){
    this.userSettoActive.emit(id);
  }

}