import { Component, Input, OnInit } from '@angular/core';
import { TestComponent } from '../test/test/test.component';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent implements OnInit {
  title = 'Hello, World';
  Change() {
    this.title = 'Change';
  }
  constructor() {
    console.log('constructor');
  }
  ngOnInit(): void {
    console.log('OnInit');
  }
}
