import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { SmsGatewayComponent } from './pages/sms-gateway/sms-gateway.component';
// import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { AccountSelectionComponent } from './customer/account-selection.component';
import { ReservationComponent } from './reservation/reservatoin.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { RoleMasterComponent } from './master/role/role-master/role-master.component';
import { RoleMasterListComponent } from './master/role/role-master-list/role-master-list.component';
import { UserMasterComponent } from './master/User/user-master/user-master.component';
import { UserMasterListComponent } from './master/User/user-master-list/user-master-list.component';
import { RightListComponent } from './master/Security-shell/right-list/right-list.component';
import { RightCreationComponent } from './master/Security-shell/right-creation/right-creation.component';
import { RestaurantMasterComponent } from './master/outlet-details/restaurant-master/restaurant-master.component';
import { RestaurantMasterListComponent}  from './master/outlet-details/restaurant-master-list/restaurant-master-list.component';
import { CompanyMasterComponent}  from './master/table-booking/company-master/company-master/company-master.component';
import { CompanyMasterListComponent}  from './master/table-booking/company-master/company-master-list/company-master-list.component';
import { GeneralMasterComponent } from './master/table-booking/BOT-general-master/general-master/general-master.component';
import { BOTEventMasterComponent } from './master/table-booking/occasion-master/bot-event-master/bot-event-master.component';
import { BOTEventMasterListComponent } from './master/table-booking/occasion-master/bot-event-master-list/bot-event-master-list.component';
import { GuestMasterListComponent } from './master/table-booking/guest-master/guest-master-list/guest-master-list.component';
import { GuestMasterComponent } from './master/table-booking/guest-master/guest-master/guest-master.component';
import { FlagMasterListComponent } from './master/table-booking/flag-master/flag-master-list/flag-master-list.component';
import { FlagMasterComponent } from './master/table-booking/flag-master/flag-master/flag-master.component';
import { ChannelAccountLinkupMasterListComponent } from './master/table-booking/channel-linkup/channel-account-linkup-master-list/channel-account-linkup-master-list.component';
import { ChannelAccountLinkupMasterComponent } from './master/table-booking/channel-linkup/channel-account-linkup-master/channel-account-linkup-master.component';
import { FloorMasterListComponent } from './master/table-booking/floor/floor-master-list/floor-master-list.component';
import { FloorMasterComponent } from './master/table-booking/floor/floor-master/floor-master.component';
import { RestaurantServiceComponent } from './master/table-booking/restaurant-service-master/restaurant-service/restaurant-service.component';
import { RestaurantServiceListComponent } from './master/table-booking/restaurant-service-master/restaurant-service-list/restaurant-service-list.component';
import { TableMasterListComponent } from './master/table-booking/table/table-master-list/table-master-list.component';
import { TableMasterComponent } from './master/table-booking/table/table-master/table-master.component';
import { FloorPlanComponent } from './master/table-booking/restaurant-floor-plan/floor-plan/floor-plan.component';
import { RestaurantSettingListComponent } from './master/table-booking/meal-session/restaurant-setting-list/restaurant-setting-list.component';
import { RestaurantSettingComponent } from './master/table-booking/meal-session/restaurant-setting/restaurant-setting.component';
import { ChannelManagementComponent } from './master/table-booking/channel-management/channel-management/channel-management.component';
import { ChannelManagementListComponent } from './master/table-booking/channel-management/channel-management-list/channel-management-list.component';
import { ParameterMasterComponent } from './master/table-booking/parameter-master/parameter-master/parameter-master.component';
import { ParameterMasterListComponent } from './master/table-booking/parameter-master/parameter-master-list/parameter-master-list.component';
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
import { EmailSchedulerMasterComponent } from './master/table-booking/email-scheduler-master/email-scheduler-master/email-scheduler-master.component';
import { EmailSchedulerMasterListComponent } from './master/table-booking/email-scheduler-master/email-scheduler-master-list/email-scheduler-master-list.component';
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
import { FloorPlanMapComponent } from './master/table-booking/restaurant-floor-plan/floor-plan-map/floor-plan-map.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sms-gateway' },
  // { path: 'sms-gateway', component: SmsGatewayComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'sms-gateway' },
  { path: 'login', component: LoginComponent },
  { path: 'account-selection', component: AccountSelectionComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account-master', component: AccountComponent },
  { path: 'account-master-list', component: AccountComponent },
  { path: 'role-master', component: RoleMasterComponent },
  { path: 'role-master-list', component: RoleMasterListComponent },
  { path: 'user-master', component: UserMasterComponent },
  { path: 'user-master-list', component: UserMasterListComponent },
  { path: 'right-list', component: RightListComponent },
  { path: 'right-creation', component: RightCreationComponent },
  { path: 'restaurant-master-list', component: RestaurantMasterListComponent },
  { path: 'restaurant-master', component: RestaurantMasterComponent },
  { path: 'companyMasterList', component: CompanyMasterListComponent },
  { path: 'companyMaster', component: CompanyMasterComponent },
  { path: 'BOTGeneralMaster', component: GeneralMasterComponent },
  { path: 'BOTEventMasterList', component: BOTEventMasterListComponent },
  { path: 'BOTEventMaster', component: BOTEventMasterComponent },
  { path: 'guestMasterList', component: GuestMasterListComponent },
  { path: 'guestMaster', component: GuestMasterComponent },
  { path: 'flagMasterList', component: FlagMasterListComponent },
  { path: 'flagMaster', component: FlagMasterComponent },
  { path: 'channelAccountLinkupList', component: ChannelAccountLinkupMasterListComponent },
  { path: 'channelAccountLinkup', component: ChannelAccountLinkupMasterComponent },
  { path: 'floorMasterList', component: FloorMasterListComponent },
  { path: 'floorMaster', component: FloorMasterComponent },
  { path: 'restaurantServiceList', component: RestaurantServiceListComponent },
  { path: 'restaurantService', component: RestaurantServiceComponent },
  { path: 'tableMasterList', component: TableMasterListComponent },
  { path: 'tableMaster', component: TableMasterComponent },
  { path: 'FloorPlan', component: FloorPlanComponent },
  { path: 'restaurantSettingList', component: RestaurantSettingListComponent },
  { path: 'restaurantSetting', component: RestaurantSettingComponent },
  { path: 'channelManagementList', component: ChannelManagementListComponent },
  { path: 'channelManagement', component: ChannelManagementComponent },
  { path: 'parameterMasterList', component: ParameterMasterListComponent },
  { path: 'parameterMaster', component: ParameterMasterComponent },
  { path: 'emailTemplateList', component: EmailTemplateListComponent },
  { path: 'emailTemplate', component: EmailTemplateComponent },
  { path: 'SMSTemplateList', component: SmsTemplateListComponent },
  { path: 'SMSTemplate', component: SmsTemplateComponent },
  { path: 'WhatsAppMasterTemplate', component: WhatsappMasterTemplateComponent },
  { path: 'VisitStatusCriteriaMasterList', component: VisitStatusCriteriaListComponent },
  { path: 'VisitStatusCriteriaMaster', component: VisitStatusCriteriaComponent },
  { path: 'RestaurantPaxWiseList', component: RestaurantPaxWiseListComponent },
  { path: 'RestaurantPaxWise', component: RestaurantPaxWiseComponent },
  { path: 'TimeWiseRestriction', component: TimeWiseRestrictionComponent },
  { path: 'BlockTimeSlotsList', component: BlockTimeSlotsListComponent },
  { path: 'BlockTimeSlots', component: BlockTimeSlotsComponent },  
  { path: 'EmailAndSMSConfigMasterList', component: EmailAndSMSConfigMasterListComponent },
  { path: 'EmailAndSMSConfigMaster', component: EmailAndSMSConfigMasterComponent },
  { path: 'EmailSchedulerMasterList', component: EmailSchedulerMasterListComponent },
  { path: 'EmailSchedulerMaster', component: EmailSchedulerMasterComponent },
  { path: 'GuestListReport', component: GuestListComponent },
  { path: 'BlockingSheet', component: BlockingSheetComponent },
  { path: 'walkIn', component: WalkInComponent },
  { path: 'RatingReport', component: RatingReportComponent }, 
  { path: 'CancelNoShow', component: CancellationShowReportComponent }, 
  { path: 'GuestVisitStatus', component: GuestViewStatusComponent }, 
  { path: 'FlagWiseGuestVisitStatus', component: FlagWiseGuestListComponent }, 
  { path: 'RepeatRegGuestView', component: RepeatRegularGuestReportComponent }, 
  { path: 'ChannelListReport', component: ChannelManagementListReportComponent }, 
  { path: 'GuestDataReport', component: GuestProfileReportComponent }, 
  { path: 'FloorPlanMap', component: FloorPlanMapComponent }, 
  


  { path: '**', redirectTo: 'login' }
  
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  
];
