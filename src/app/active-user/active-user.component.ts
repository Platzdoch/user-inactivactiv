import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent {
  @Input() users:String[];
  @Output() userSetToInactive = new EventEmitter<number>( );

  onSetToInactive(id:number){
    this.userSetToInactive.emit(id);
  }
}