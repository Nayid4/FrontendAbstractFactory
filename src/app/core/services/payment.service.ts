import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private api: string = environment.apiUrlBase;
  private endpoint: string = '';

  constructor(private http: HttpClient) {
    this.endpoint = 'payment';
  }

  CalculatePayment(paymentType: string, amount: number): Observable<number> {
    const url = `${this.api}/${this.endpoint}/finalAmount?paymentType=${paymentType}&amount=${amount}`;
    return this.http.get<number>(url);
  }
}
