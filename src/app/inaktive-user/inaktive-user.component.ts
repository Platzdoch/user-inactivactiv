import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inaktive-user',
  templateUrl: './inaktive-user.component.html',
  styleUrls: ['./inaktive-user.component.css']
})

export class InaktiveUserComponent implements OnInit {

  @Input() users:String[];
  @Output() userSetToActive = new EventEmitter<number>( );

  constructor(private userService: UserService){}

  ngOnInit() {
    this.users = this.userService.inacticeUser;
  }

  onSetToActive(id:number){
    this.userSetToActive.emit(id);
  }

}