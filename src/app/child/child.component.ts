import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  channelName: string = "webTechTalk2"

  //child to parent data transfer

  //in parent component we have access to child component but in child component we dont have access to parent component
  //so we use event binding & event emitter to pass data from child to parent

/**
 * to send data from child to parent
 * 1.. create a input event binding so we can get data is sending successfully
 * 2..create a event emitter variable which of type event emitter
 * 3..then emit the data of the event emitter in the event binding method
 *      for the sendMsgEmitter variable use @Output() decorator cause it will emit the data from child to parent.
 * 4..after that go to parent component in which receive the value 
 * 5..in parent component we have access to child component so we directly use the sendMsgemitter property for event binding
 * 6..to the sendMsgEmitter event binding we bind a method from parent component ex-datareceivedFromChild($event)
 * where we get the data send by child component
 * we get the data in $event & we use the data in the method
 * 7..to receive the data from child component create a variable & pass data received from child to that variable
 * 8..using string interpolation in parent component bind the data {{receiveddata}}
 */
  @Output()
  sendMsgEmitter : EventEmitter<string> = new EventEmitter<string>();

  sendMessageToParent(e: any){
    console.log(e.target.value);
    this.sendMsgEmitter.emit(e.target.value)
  }
}
