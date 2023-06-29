import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  channelNameInParent = "webTeckTalk";

  //data from child to parent

  receivedData : string = "";

  dataFromChild(data:any){
    console.log(data);
    this.receivedData = data;
  }
/*
  receivedData: any = "";

  dataFromChild(eData:any){
    console.log(eData);
    this.receivedData = eData
  }
  */
}
