export class CounterService{

  activeToInactiveCounter = 0;
  inactiveToActiceCounter = 0;

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter);
  }

  incrementinActiveToactive(){
    this.inactiveToActiceCounter++;
    console.log(this.inactiveToActiceCounter++);
  }

}