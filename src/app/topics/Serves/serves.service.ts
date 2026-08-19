import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServesService {
  constructor() {}
  title = 'Hello From Serves';
  produtcs = ['Laptop', 'Tv', 'Phone'];
}
