import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgxLoadingModule } from "ngx-loading";
import { NgxPaginationModule } from "ngx-pagination";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FullCalendarModule } from "@fullcalendar/angular";

import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MainComponent } from "./main/main.component";
import { NotificationComponent } from "./notification/notification.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth/AuthGuard";
import { NotificationDetailComponent } from "./notification/notification-detail/notification-detail.component";
import { TaskComponent } from "./task/task.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CalendarModule } from "primeng/calendar";
import { TaskDetailComponent } from "./task/task-detail/task-detail.component";
import { ApprovalComponent } from "./approval/approval.component";
import { PendingtaskComponent } from "./approval/pendingtask/pendingtask.component";
import { PendingtaskdetailComponent } from "./approval/pendingtask/pendingtask-detail/pendingtask-detail.component";
import { NewTaskComponent } from "./task/new-task/new-task.component";
import { CompletedtaskComponent } from "./approval/completedtask/completedtask.component";
import { OpentaskComponent } from "./approval/opentask/opentask.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { RejectionComponent } from "./rejection/rejection.component";
import { RejectionDetailComponent } from "./rejection/rejection-detail/rejection-detail.component";
import { OpentaskDetailComponent } from "./approval/opentask/opentask-detail/opentask-detail.component";
import { CompletedTaskDetailComponent } from "./approval/completedtask/completed-task-detail/completed-task-detail.component";
import { ChartComponent } from "./chart/chart.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    MainComponent,
    NotificationComponent,
    NotificationDetailComponent,
    TaskComponent,
    TaskDetailComponent,
    ApprovalComponent,
    PendingtaskComponent,
    PendingtaskdetailComponent,
    NewTaskComponent,
    CompletedtaskComponent,
    OpentaskComponent,
    CalendarComponent,
    RejectionComponent,
    RejectionDetailComponent,
    OpentaskDetailComponent,
    CompletedTaskDetailComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    CalendarModule,
    RouterModule.forRoot([
      {
        path: "",
        component: NotificationComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "home",
        component: NotificationComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "notification-detail",
        component: NotificationDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "task",
        component: TaskComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "task-detail",
        component: TaskDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "task-approve",
        component: ApprovalComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "pending-task",
        component: PendingtaskComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "pending-task-detail",
        component: PendingtaskdetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "open-task",
        component: OpentaskComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "opentask-detail",
        component: OpentaskDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "completed-task",
        component: CompletedtaskComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "completed-task-detail",
        component: CompletedTaskDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "new-task",
        component: NewTaskComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "calendar",
        component: CalendarComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "rejection",
        component: RejectionComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "rejection-detail",
        component: RejectionDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "chart",
        component: ChartComponent,
        canActivate: [AuthGuard]
      },

      { path: "**", redirectTo: "" }
    ]),
    ToastrModule.forRoot(),

    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
