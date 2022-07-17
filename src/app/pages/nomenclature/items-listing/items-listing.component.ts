import { filter, Observable } from 'rxjs';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LoadItemsListingService } from '../services/load-items-listing.service';
import { ItemListingResponse } from '../models/Item-listing-response';
import { LISTING_ITEMS_HEADERS, LISTING_ITEMS_HEADERS_DYNAMIC } from '../constants/headers';
import { PaginationFilter } from '../models/pagination-filter';
import { PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ItemListing } from '../models/item-listing';

@UntilDestroy()
@Component({
  selector: 'app-items-listing',
  templateUrl: './items-listing.component.html',
  styleUrls: ['./items-listing.component.scss']
})
export class ItemsListingComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  
  public displayedColumns = LISTING_ITEMS_HEADERS;
  public dynamicColumns = LISTING_ITEMS_HEADERS_DYNAMIC;
  public paginationFilter: PaginationFilter = { pageNumber: 1, pageSize: 5 };
  public itemsLength: number;
  public pageSize: number;
  public selection = new SelectionModel<ItemListing>(true, []);
  public dataSource = new MatTableDataSource<ItemListing>();
  public isFilteringVisible = true;

  constructor(private loadItemsListingService: LoadItemsListingService) { }
  
  public ngOnInit(): void {
    this.loadItemsListingService.getItemsListing(this.paginationFilter);
    
    this.loadItemsListingService.result.pipe(filter(x => !!x), untilDestroyed(this)).subscribe(x => {
      this.dataSource.data = x.items;
      this.itemsLength = x.pagination.totalNumberOfElements;
      this.pageSize = x.pagination.pageSize;
    });
  }

  public ngAfterViewInit(): void {
    this.sort.sortChange.pipe(untilDestroyed(this)).subscribe(x => console.log(x));
  }

  public onPaginationChange(event: PageEvent): void {
    this.paginationFilter.pageNumber = event.pageIndex;
    this.paginationFilter.pageSize = event.pageSize;
    this.loadItemsListingService.getItemsListing(this.paginationFilter);
  }

  public toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  public checkboxLabel(row?: ItemListing): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  public toggleCheckbox(row: ItemListing): void {
    this.selection.toggle(row);
  }
}
