import { Component, Input, OnChanges } from '@angular/core';
import { LifecycleComponent } from '../../lifecycle/lifecycle.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements OnChanges {
  @Input() getTitle = '';
  ngOnChanges(): void {
    console.log('Input Change');
  }
}
