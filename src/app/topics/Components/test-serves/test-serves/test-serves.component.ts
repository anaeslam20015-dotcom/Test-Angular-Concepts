import { Component, OnInit } from '@angular/core';
import { ServesService } from '../../../Serves/serves.service';

@Component({
  selector: 'app-test-serves',
  standalone: true,
  imports: [],
  templateUrl: './test-serves.component.html',
  styleUrl: './test-serves.component.css',
})
export class TestServesComponent implements OnInit {
  title = '';
  products: string[] = [];
  /* Constructor Injection */
  constructor(private serve: ServesService) {}

  ngOnInit() {
    /* Data From Serves */
    this.title = this.serve.title;
    this.products = this.serve.produtcs;
  }
}
