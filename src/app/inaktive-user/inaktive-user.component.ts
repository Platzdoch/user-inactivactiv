import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-inaktive-user',
  templateUrl: './inaktive-user.component.html',
  styleUrls: ['./inaktive-user.component.css']
})

export class InaktiveUserComponent {
  @Input() users:String[];
  @Output() userSetToActive = new EventEmitter<number>( );

  onSetToActive(id:number){
    this.userSetToActive.emit(id);
  }

}