import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  request() {

    var options = {
      'Content-Type':  'x-www-form-urlenconded',
    };

    var body = {
      client_id: 'transparencia', 
      username: 'jean', 
      password: 'jean', 
      grant_type: 'password',
      client_secret: '3807796d-3a7f-498a-a970-6c0f7e71f699'
    };

    this.http
    .post('http://localhost:4200/api/auth/realms/transparencia/protocol/openid-connect/token',
    body).subscribe((res) => console.log(res));
  }
}
