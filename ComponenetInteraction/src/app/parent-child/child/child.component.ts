import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  constructor() {
  }

  passedValue: string;
  // @Input() emittedValue: string;
  // @Output() emittedValueChange = new EventEmitter();
  //
  // emittedValueChanged(newvalue) {
  //   this.emittedValue = newvalue;
  //   this.emittedValueChange.emit(newvalue);
  // }
  private _childValue: string;
  get childValue(): string {
    return this._childValue;
  }

  @Input() set childValue(fromParent: string) {
    this._childValue = fromParent;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
      const changedChildValue = changes['childValue'].currentValue;
      this.passedValue = changedChildValue;
  }
}
