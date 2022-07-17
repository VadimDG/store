import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ItemsListingComponent } from './items-listing/items-listing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NomenclatureRoutingModule } from './nomenclature-routing.module';
import { MatSortModule } from '@angular/material/sort';
import { FilteringComponent } from './filtering/filtering.component';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ItemsListingComponent,
    FilteringComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    NomenclatureRoutingModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class NomenclatureModule { }
