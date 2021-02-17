import { Injectable } from '@angular/core';
import {​​​​​ HttpClient }​​​​​ from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
API_KEY = 'ZmJiYjBkOGM6RThJdUVwYXQ1TlBz';
constructor(private httpClient: HttpClient) {​​​​​ }​​​​​
public getTemplates(){​​​​​
return this.httpClient.get('https://api.duda.co/api/sites/multiscreen/templates');
}​​​​​



}
