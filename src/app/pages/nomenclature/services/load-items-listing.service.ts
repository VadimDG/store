import { WorkingStatusesEnum } from '../enums/working-statues-enum';
import { ItemListing } from '../models/item-listing';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ItemListingResponse } from '../models/Item-listing-response';
import { PaginationFilter } from '../models/pagination-filter';

@Injectable({
  providedIn: 'root'
})
export class LoadItemsListingService {

  public result: BehaviorSubject<ItemListingResponse> = new BehaviorSubject<ItemListingResponse>(null);
  private readonly items: ItemListing[] = [];

  constructor() {
    for(let i = 0; i < 100; i ++) {
      this.items.push({
        id: i,
        name: `item ${i}`,
        systemStatus: Math.random() > 0.5,
        dateCreated: '2022-01-04',
        dateUpdated: '2022-01-18',
        partnerId: 435663,
        workingStatus: Math.floor(Math.random() * 7 )
      })
    }
  }

  public getItemsListing(paginationFilter: PaginationFilter): void {
    
    const items = this.items.slice(paginationFilter.pageNumber * paginationFilter.pageSize, paginationFilter.pageNumber * paginationFilter.pageSize + paginationFilter.pageSize);
    
    this.result.next({
      items,
      pagination: {
        pageSize: paginationFilter.pageSize,
        pageNumber: paginationFilter.pageNumber,
        totalNumberOfElements: 100
      }
    });
  }
}
