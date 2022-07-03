import { Injectable } from "@angular/core";
import { CounterService } from "./counter.Service";

@Injectable()
export class UserService{

acticeUser = ['Max','Anna'];
inacticeUser = ['Chris','MAnu'];

constructor(private counterservie: CounterService){}

setToActiv(id:number){
this.acticeUser.push(this.inacticeUser[id]);
this.inacticeUser.splice(id,1);
this.counterservie.incrementinActiveToactive();
}

  onSetToInactive(id:number){
  this.inacticeUser.push(this.acticeUser[id]);
  this.acticeUser.splice(id,1);  
  this.counterservie.incrementActiveToInactive();
}


}