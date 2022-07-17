import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-common-failure-message',
  templateUrl: './ui-common-failure-message.component.html',
  styleUrls: ['./ui-common-failure-message.component.scss']
})
export class UiCommonFailureMessageComponent implements OnInit {

  @Output() refreshClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public refresh(): void {
    this.refreshClick.emit();
  }
}
