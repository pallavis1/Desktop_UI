import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSliderModule } from '@angular/material';
import {MatChipEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { SkvEditorModule } from 'skv-editor';
import { DragDropModule } from '@angular/cdk/drag-drop';

// import {ckEditorModule} from '@angular/cdk/tree';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
// import { NgxEditorModule } from 'ngx-editor';
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


import {
  MatProgressBarModule, 
  MatInputModule, 
  MatCardModule, 
  MatTableModule, 
  MatTabsModule, 
  MatSlideToggleModule, 
  MatPaginatorModule, 
  MatCheckboxModule, 
  MatRadioModule, 
  MatDialogModule, 
  MatProgressSpinnerModule, 
  MatSelectModule, 
  MatButtonModule, 
  MatMenuModule, 
  MatAutocompleteModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatExpansionModule, 
  MatTooltipModule,
  MatBadgeModule,
  MatDividerModule,
 } from '@angular/material';
 import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { HttpClientModule } from '@angular/common/http';
// import { CustomValidationService } from 'src/app/shared/services/custom-validation.service'
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { GroupPropertyComponent } from './common/group-property/group-property.component';
import { ConfigurationMicroService } from './shared/services/configuration-micro.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { ToasterModule } from 'angular2-toaster';
import { CommonService } from './shared/services/common.service';
import { LoaderComponent } from './common/loader/loader.component';
import { FormatTimePipe } from './shared/pipe/format-time.pipe';
import { OnlyNumberDirective } from './shared/directives/only-number.directive';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { QRCodeModule } from 'angularx-qrcode';
import { TogglePipe } from './shared/pipe/toggle.pipe';
import { LoginComponent } from './login/login.component';
import { AccountSelectionComponent } from './customer/account-selection.component';
import {ReservationComponent} from './reservation/reservatoin.component'
import { PaginatorDirective } from '../app/common/Pagination/paginator.directive';
import {MaterialModule} from "./material.module";
import { HomeComponent } from './home/home.component';
import { SearchDropdown } from './common/search-dropdown/search-dropdown'; 
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { RoleMasterComponent } from './master/role/role-master/role-master.component';
import { RoleMasterListComponent } from './master/role/role-master-list/role-master-list.component';
import { UserMasterComponent } from './master/User/user-master/user-master.component';
import { UserMasterListComponent } from './master/User/user-master-list/user-master-list.component';
import { RightListComponent } from './master/Security-shell/right-list/right-list.component';
import { RightCreationComponent } from './master/Security-shell/right-creation/right-creation.component';
import { RestaurantMasterListComponent } from './master/outlet-details/restaurant-master-list/restaurant-master-list.component';
import { RestaurantMasterComponent } from './master/outlet-details/restaurant-master/restaurant-master.component';
import { UploadImageComponent } from './common/upload-image/upload-image/upload-image.component';
import { CompanyMasterListComponent } from './master/table-booking/company-master/company-master-list/company-master-list.component';
import { CompanyMasterComponent } from './master/table-booking/company-master/company-master/company-master.component';
import { FilterComponent } from './common/table-filter/filter/filter.component';
import { GeneralMasterComponent } from './master/table-booking/BOT-general-master/general-master/general-master.component';
import { BOTEventMasterComponent } from './master/table-booking/occasion-master/bot-event-master/bot-event-master.component';
import { BOTEventMasterListComponent } from './master/table-booking/occasion-master/bot-event-master-list/bot-event-master-list.component';
import { GuestMasterListComponent } from './master/table-booking/guest-master/guest-master-list/guest-master-list.component';
import { GuestMasterComponent } from './master/table-booking/guest-master/guest-master/guest-master.component';
import { FlagMasterListComponent } from './master/table-booking/flag-master/flag-master-list/flag-master-list.component';
import { FlagMasterComponent } from './master/table-booking/flag-master/flag-master/flag-master.component';
import { ChannelAccountLinkupMasterListComponent } from './master/table-booking/channel-linkup/channel-account-linkup-master-list/channel-account-linkup-master-list.component';
import { ChannelAccountLinkupMasterComponent } from './master/table-booking/channel-linkup/channel-account-linkup-master/channel-account-linkup-master.component';
import { FloorMasterComponent } from './master/table-booking/floor/floor-master/floor-master.component';
import { FloorMasterListComponent } from './master/table-booking/floor/floor-master-list/floor-master-list.component';
import { RestaurantServiceListComponent } from './master/table-booking/restaurant-service-master/restaurant-service-list/restaurant-service-list.component';
import { RestaurantServiceComponent } from './master/table-booking/restaurant-service-master/restaurant-service/restaurant-service.component';
import { TableMasterListComponent } from './master/table-booking/table/table-master-list/table-master-list.component';
import { TableMasterComponent } from './master/table-booking/table/table-master/table-master.component';
import { FloorPlanComponent } from './master/table-booking/restaurant-floor-plan/floor-plan/floor-plan.component';
import { RestaurantSettingListComponent } from './master/table-booking/meal-session/restaurant-setting-list/restaurant-setting-list.component';
import { RestaurantSettingComponent } from './master/table-booking/meal-session/restaurant-setting/restaurant-setting.component';
import { ChannelManagementListComponent } from './master/table-booking/channel-management/channel-management-list/channel-management-list.component';
import { ChannelManagementComponent } from './master/table-booking/channel-management/channel-management/channel-management.component';
import { ParameterMasterListComponent } from './master/table-booking/parameter-master/parameter-master-list/parameter-master-list.component';
import { ParameterMasterComponent } from './master/table-booking/parameter-master/parameter-master/parameter-master.component';
import { EmailTemplateComponent } from './master/table-booking/email-template/email-template/email-template.component';
import { EmailTemplateListComponent } from './master/table-booking/email-template/email-template-list/email-template-list.component';
import { SmsTemplateListComponent } from './master/table-booking/SMS-template/sms-template-list/sms-template-list.component';
import { SmsTemplateComponent } from './master/table-booking/SMS-template/sms-template/sms-template.component';
import { WhatsappMasterTemplateComponent } from './master/table-booking/WA-template/whatsapp-master-template/whatsapp-master-template.component';
import { VisitStatusCriteriaListComponent } from './master/table-booking/visit-status-criteria/visit-status-criteria-list/visit-status-criteria-list.component';
import { VisitStatusCriteriaComponent } from './master/table-booking/visit-status-criteria/visit-status-criteria/visit-status-criteria.component';
import { RestaurantPaxWiseListComponent } from './master/table-booking/pax-wise-reservation/restaurant-pax-wise-list/restaurant-pax-wise-list.component';
import { RestaurantPaxWiseComponent } from './master/table-booking/pax-wise-reservation/restaurant-pax-wise/restaurant-pax-wise.component';
import { TimeWiseRestrictionComponent } from './master/table-booking/time-wise-restriction/time-wise-restriction.component';
import { BlockTimeSlotsListComponent } from './master/table-booking/block-time-slots/block-time-slots-list/block-time-slots-list.component';
import { BlockTimeSlotsComponent } from './master/table-booking/block-time-slots/block-time-slots/block-time-slots.component';
import { EmailAndSMSConfigMasterListComponent } from './master/table-booking/email&sms-config/email-and-sms-config-master-list/email-and-sms-config-master-list.component';
import { EmailAndSMSConfigMasterComponent } from './master/table-booking/email&sms-config/email-and-sms-config-master/email-and-sms-config-master.component';
import { EmailSchedulerMasterListComponent } from './master/table-booking/email-scheduler-master/email-scheduler-master-list/email-scheduler-master-list.component';
import { EmailSchedulerMasterComponent } from './master/table-booking/email-scheduler-master/email-scheduler-master/email-scheduler-master.component';
import { GuestListComponent } from './reports/guest-list/guest-list.component';
import { BlockingSheetComponent } from './reports/blocking-sheet/blocking-sheet.component';
import { WalkInComponent } from './reports/walk-in/walk-in.component';
import { RatingReportComponent } from './reports/rating-report/rating-report.component';
import { CancellationShowReportComponent } from './reports/cancellation-show-report/cancellation-show-report.component';
import { GuestViewStatusComponent } from './reports/guest-view-status/guest-view-status.component';
import { FlagWiseGuestListComponent } from './reports/flag-wise-guest-list/flag-wise-guest-list.component';
import { RepeatRegularGuestReportComponent } from './reports/repeat-regular-guest-report/repeat-regular-guest-report.component';
import { ChannelManagementListReportComponent } from './reports/channel-management-list-report/channel-management-list-report.component';
import { GuestProfileReportComponent } from './reports/guest-profile-report/guest-profile-report.component';
// import { DiagramModule, SymbolPaletteAllModule } from '@syncfusion/ej2-angular-diagrams';
import { ChartsModule } from 'ng2-charts';
import { FloorPlanMapComponent } from './master/table-booking/restaurant-floor-plan/floor-plan-map/floor-plan-map.component';
// import { AgChartsAngularModule } from 'ag-charts-angular';
// import { HighchartsChartModule } from 'highcharts-angular';
// import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GroupPropertyComponent,
    BreadcrumbComponent,
    LoaderComponent,
    FormatTimePipe,
    TogglePipe,
    OnlyNumberDirective,
    FilterPipe,
    LoginComponent,
    AccountSelectionComponent,
    PaginatorDirective,
    ReservationComponent,
    HomeComponent,
    SearchDropdown,
    AccountComponent,
    RoleMasterComponent,
    RoleMasterListComponent,
    UserMasterComponent,
    UserMasterListComponent,
    RightListComponent,
    RightCreationComponent,
    RestaurantMasterListComponent,
    RestaurantMasterComponent,
    UploadImageComponent,
    CompanyMasterListComponent,
    CompanyMasterComponent,
    FilterComponent,
    GeneralMasterComponent,
    BOTEventMasterComponent,
    BOTEventMasterListComponent,
    GuestMasterListComponent,
    GuestMasterComponent,
    FlagMasterListComponent,
    FlagMasterComponent,
    ChannelAccountLinkupMasterListComponent,
    ChannelAccountLinkupMasterComponent,
    FloorMasterComponent,
    FloorMasterListComponent,
    RestaurantServiceListComponent,
    RestaurantServiceComponent,
    TableMasterListComponent,
    TableMasterComponent,
    FloorPlanComponent,
    RestaurantSettingListComponent,
    RestaurantSettingComponent,
    ChannelManagementListComponent,
    ChannelManagementComponent,
    ParameterMasterListComponent,
    ParameterMasterComponent,
    EmailTemplateComponent,
    EmailTemplateListComponent,
    SmsTemplateListComponent,
    SmsTemplateComponent,
    WhatsappMasterTemplateComponent,
    VisitStatusCriteriaListComponent,
    VisitStatusCriteriaComponent,
    RestaurantPaxWiseListComponent,
    RestaurantPaxWiseComponent,
    TimeWiseRestrictionComponent,
    BlockTimeSlotsListComponent,
    BlockTimeSlotsComponent,
    EmailAndSMSConfigMasterListComponent,
    EmailAndSMSConfigMasterComponent,
    EmailSchedulerMasterListComponent,
    EmailSchedulerMasterComponent,
    GuestListComponent,
    BlockingSheetComponent,
    WalkInComponent,
    RatingReportComponent,
    CancellationShowReportComponent,
    GuestViewStatusComponent,
    FlagWiseGuestListComponent,
    RepeatRegularGuestReportComponent,
    ChannelManagementListReportComponent,
    GuestProfileReportComponent,
    FloorPlanMapComponent,
  ],
  imports: [
    // SymbolPaletteAllModule,
    // AgChartsAngularModule,
    // HighchartsChartModule,
    ChartsModule,
    // CanvasJSAngularChartsModule,
    MatButtonToggleModule,
    DragDropModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToasterModule,
    MatDialogModule,
    MatExpansionModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
    MatSliderModule,
    MatDividerModule,
    QRCodeModule,
    MatBadgeModule,
    MaterialModule,
    CommonModule,
    MatTreeModule,
    CdkAccordionModule,
    SkvEditorModule    
    // CKEditorModule
    // RichTextEditorAllModule,4
    // NgxEditorModule
    // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    ],
  exports: [AppComponent],
  entryComponents:[],
  bootstrap: [AppComponent],
  providers: [MatDatepickerModule, ConfigurationMicroService, LocalStorageService, AuthGuardService, CommonService]
})
export class AppModule { }
