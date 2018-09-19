import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  constructor() {
  }

  private _passedValue: string;
  private _childValue: string;
  name = this.childValue;

  get childValue(): string {
    return this._childValue;
  }

  @Input() set childValue(fromParent: string) {
    this._childValue = fromParent;
    this.name = fromParent;
  }

  @Output() toParent = new EventEmitter();

  get passedValue(): string {
    return this._passedValue;
  }

  @Input() set passedValue(fromParent: string) {
    this._passedValue = fromParent;
    this.toParent.emit(fromParent);
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
      const changedChildValue = changes['childValue'].currentValue;
      this.passedValue = changedChildValue;
  }
}
