import { WorkingStatusesEnum } from "../enums/working-statues-enum";

export class ItemListing {
    systemStatus: boolean;
    id: number; 
    name: string;
    workingStatus: WorkingStatusesEnum;
    partnerId: number;
    dateCreated: string;
    dateUpdated: string;
}