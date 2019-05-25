import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material';

import { FormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { TagFilterComponent } from './components/tagFilter/tagFilter.component';
import { BannerColumnComponent } from './components/bannerColumn/bannerColumn.component';
import { LoadingComponent } from './components/loading/loading.component';
import { UtilModule } from '../util/util.module';
import { CoversCarouselComponent } from './components/coversCarousel/coversCarousel.component';
import { SongsListComponent } from './components/songsList/songsList.component';
import { SearchBarComponent } from './components/searchBar/searchBar.component';


const materialModules = [  
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  ]

@NgModule({
  declarations:[
    TagFilterComponent,
    DialogComponent,
    BannerColumnComponent,
    LoadingComponent,
    CoversCarouselComponent,
    SongsListComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ...materialModules,
    FlexLayoutModule,
    UtilModule
    ],
  exports: [
    ...materialModules,
    FlexLayoutModule,
    DialogComponent,
    TagFilterComponent,
    BannerColumnComponent,
    LoadingComponent,
    CoversCarouselComponent,
    SongsListComponent,
    SearchBarComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    { provide: MatDialogRef, useValue: {} }
   
  ]
})
export class SharedModule {
}
