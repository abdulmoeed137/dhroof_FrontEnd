// api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private contactApiUrl = 'https://meezodev.com/dhuroof/api/contact-us';
  private waitlistApiUrl = 'https://meezodev.com/dhuroof/api/waitlist'; // ✅ Waitlist endpoint

  constructor(private http: HttpClient) {}

  sendContactUs(data: any): Observable<any> {
    return this.http.post(this.contactApiUrl, data);
  }

  sendWaitlist(data: any): Observable<any> {
    return this.http.post(this.waitlistApiUrl, data);
  }
}
