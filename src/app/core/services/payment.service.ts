import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message, MessageResponse } from '../models/message.model';
import { PDFReportOptions } from '../models/PDFReportOptions.model';

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

  SendNotification(message: Message) : Observable<MessageResponse> {
    const url = `${this.api}/notification/send?notificationType=${message.notificationType}`;
    return this.http.post<MessageResponse>(url, message);
  }

  GeneratePDFReport(
    options: PDFReportOptions): Observable<Blob> {
    const url = `${this.api}/generatePDFReport`;
    const formData = new FormData();
    formData.append('options', JSON.stringify(options));
    return this.http.post<Blob>(url, formData);
  }
}
