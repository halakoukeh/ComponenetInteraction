import {Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements AfterViewInit {
  counter = 0;
  phoneNumber: number;
  customerName: string;
  private _businessName: string;
  @ViewChild('projectNameObj') projectNameObj: ElementRef;
  projectName: string;



  incCounter() {
    this.counter++;
  }
  checkName(newCustomerName) {
    this.customerName = newCustomerName;
    if (newCustomerName === 'Hala Koukeh') {
      alert('Author of this repo! ');
    }
  }
  get businessName(): string {
    return this._businessName;
  }
  set businessName(newBusinessName: string) {
    this._businessName = newBusinessName;
    if (newBusinessName === 'Hala Koukeh') {
      alert('Author of this repo! ');
    }
  }
  ngAfterViewInit() {
    this.projectNameObj.nativeElement.focus();
    // this.projectName = this.projectNameObj.nativeElement.value;
    console.log(this.projectNameObj);
  }
}
