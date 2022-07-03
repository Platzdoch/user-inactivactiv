import { Component, VERSION } from '@angular/core';
import { UserService } from './user.service';
import {CounterService} from "./counter.Service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [UserService]


})
export class AppComponent  {

  acticeUsers = ['Max','Anna'];
  inacticeUsers = ['Chris','MAnu'];

  onSetToInactive(id:number){
    this.inacticeUsers.push(this.acticeUsers[id]);
    this.acticeUsers.splice(id,1);
    // this.counterservie.incrementActiveToInactive();
  }

  onSetToActive(id:number){
    this.acticeUsers.push(this.inacticeUsers[id]);
    this.inacticeUsers.splice(id,1);
    // this.counterservie.incrementinActiveToactive();
  }


  
}
