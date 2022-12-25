import { Injectable } from '@angular/core';
import { User } from '../new-user/uselist';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  ThisUser= Array<string>();
 

  constructor() { }
}
