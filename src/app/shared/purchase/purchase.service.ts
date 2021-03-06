import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Purchasecalendar } from './purchasecalendar.model';
import { Observable } from 'rxjs';
import { Purchasesummary } from './purchasesummary.model';
import { Purchasedetail } from './purchasedetail.model';
import { Purchase } from './purchase.model';


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  readonly rootUrl = environment.apiUrl;
  public purchasecalendar: Purchasecalendar[] = [];
  public purchasedetail: Purchasedetail[] = [];
  public purchase: Purchase[] = [];
  public purchaseLineDetail: Purchase[] = [];


  constructor(public http: HttpClient) { }

  public getPurchaseCalendar(id, date): Observable<Purchasecalendar[]> {
    return this.http.get<Purchasecalendar[]>(
      this.rootUrl + '/purchasecalendars/getpurchasecalendar/' + id + '/' + date
    );
  }

  /*purchase calendar */
  /*public getPurchaseCalendar(id, date): Observable<Dailyproduction[]> {
    return this.http.get<Dailyproduction[]>(
      this.rootUrl + '/purchasecalendars/getpurchasecalendar/' + id + '/' + date
    );
  }*/

  public getPurchaseCaldetail(plantcode, date): Observable<Purchasedetail[]> {
    return this.http.get<Purchasedetail[]>(
      this.rootUrl +
      '/purchasecalendars/purchasegroupdate/' +
      plantcode +
      '/' +
      date
    );
  }
  //for button value 
  public getPurchaseBtnInfo(url, plantcode, date): Observable<Purchasesummary[]> {
    return this.http.get<Purchasesummary[]>(
      this.rootUrl + '/purchasecalendars/' + url + '/' + plantcode + '/' + date
    );
  }

  //button click event
  public getPurchaseBtnClickEvent(url, plantcode, date): Observable<Purchasedetail[]> {
    return this.http.get<Purchasedetail[]>(
      this.rootUrl + '/purchasecalendars/' + url + '/' + plantcode + '/' + date
    );
  }
  /*end purchase calendar */
  //purchase detail//

  public getPurchaseDetail(plantcode, fromdate, todate): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(
      this.rootUrl + '/purchaseheaders/GetPurchaseHeader/' + plantcode + '/' + fromdate + '/' + todate
    );
  }
  public getPurchaseDetailTotal(plantcode, fromdate, todate): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(
      this.rootUrl + '/purchaseheaders/purchasegrouptotal/' + plantcode + '/' + fromdate + '/' + todate
    );
  }
  public getPurchaseLineDetail(id): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(
      this.rootUrl + '/purchaseheaders/GetPurchaseLine/' + id);
  }

  //end purchase detail//
  //purchase summary


  public getNetPurchaseSummary(date): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(
      this.rootUrl + '/purchasecalendars/getpurchaseSummary/' + date);
  }
  //end purchase summary

  //purchase detail report

  public getPurchaseDetailReport(plantcode, fromdate, todate): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(
      this.rootUrl + '/purchasecalendars/Total_Purchase_Detail/' + plantcode + '/' + fromdate + '/' + todate
    );
  }
}


