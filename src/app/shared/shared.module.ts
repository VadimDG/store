import { UiCommonFailureMessageComponent } from './components/ui-common-failure-message/ui-common-failure-message.component';
import { NgModule } from "@angular/core";
import { UiPreloaderComponent } from "./components/ui-preloader/ui-preloader.component";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CapitalizeValuesPipe } from './pipes/capitalize-values.pipe';
import { SplitWordByCapitalLettersPipe } from './pipes/split-word-by-capital-letters.pipe';

const components = [
    UiPreloaderComponent,
    UiCommonFailureMessageComponent,
    CapitalizeValuesPipe,
    SplitWordByCapitalLettersPipe
];

@NgModule({
    imports: [
        MatButtonModule, 
        MatDialogModule 
    ],
    declarations: components,
    exports: components
})
export class SharedModule {}