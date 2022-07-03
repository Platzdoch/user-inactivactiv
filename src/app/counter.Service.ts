import { Injectable } from "@angular/core";

@Injectable()
export class CounterService{
  countActiveUsers: number = 0;
  countInactiveUsers: number = 0;

  incrementActiveToInactive(){
    this.countInactiveUsers++;
    console.log(this.countInactiveUsers);
  }

  incrementInactiveToActive(){
    this.countActiveUsers++;
    console.log(this.countActiveUsers);
  }
}