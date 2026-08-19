import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentComponent } from '../../parent/parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  /* From Parent Component */
  @Input({
    alias: 'getData',
    required: false,
    transform: (value: string) => value.toUpperCase(),
  })
  getDatafromParent!: string;

  /* send data to Parent */
  @Output() Data = new EventEmitter<string>();
  sendData() {
    this.Data.emit('Hello From Child');
  }
  /* ngOnInit(): void {
    console.log(this.getDatafromParent);
  } */
}
