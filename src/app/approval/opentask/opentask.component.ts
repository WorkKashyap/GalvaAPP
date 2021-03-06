import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import * as moment from "moment";
import { ActionplanService } from "src/app/shared/inbox/actionplan.service";
import { LoginService } from "src/app/shared/login/login.service";
import { InboxService } from "src/app/shared/inbox/inbox.service";
import { Router } from "@angular/router";
import { User } from "src/app/shared/login/User.model";

@Component({
  selector: "app-opentask",
  templateUrl: "./opentask.component.html",
  styleUrls: ["./opentask.component.css"],
  providers: [DatePipe]
})
export class OpentaskComponent implements OnInit {
  public currentUser: User;

  public description: string;
  public days: number;
  public cDate: string;
  cpage: {};

  constructor(
    public service: ActionplanService,
    public lservice: LoginService,
    public iservice: InboxService,
    private route: Router,
    private datePipe: DatePipe
  ) {
    this.lservice.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    console.log(this.service.userid);
    if (this.service.userid != null) {
      this.service.opentask(this.service.userid);
    }
    this.cDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
  }
  getdays(currentdate, actiondate) {
    this.days = Math.abs(moment(actiondate).diff(moment(currentdate), "days"));
    return this.days;
  }

  opendetail(id) {
    this.service.id = id;
    this.iservice.uid = this.currentUser.id;
    this.route.navigate(["/opentask-detail"]);
  }
}
