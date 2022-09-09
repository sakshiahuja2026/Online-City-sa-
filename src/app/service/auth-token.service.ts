import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  authToken: string = ""
  userId: number = 0
  constructor() { }
}
