import { Component, OnInit } from '@angular/core';
import { WorkingStatusesEnum } from '../enums/working-statues-enum';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {

  public statuses: any[] = [];

  constructor() { }

  public ngOnInit(): void {
    this.statuses = Object.values(WorkingStatusesEnum).filter(x => typeof x === 'string').reduce((a,c) => {
      c = c as string;
      a.push({value: c, isSelected: false });
      return a;
    }, []);

  }

  public selectStatus(status: any): void {
    let currentStatus = this.statuses.find(x => x.value === status.value);
    currentStatus.isSelected = !currentStatus.isSelected;
  }
}
