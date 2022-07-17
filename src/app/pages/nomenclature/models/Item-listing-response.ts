import { ItemListing } from './item-listing';

export class ItemListingResponse {
    items: ItemListing[];
    pagination: Pagination;
}

export class Pagination {
    pageSize: number;
    pageNumber: number;
    totalNumberOfElements: number;
}