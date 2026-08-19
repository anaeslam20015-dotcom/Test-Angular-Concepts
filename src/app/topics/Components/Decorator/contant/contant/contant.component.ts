import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contant',
  standalone: true,
  imports: [],
  templateUrl: './contant.component.html',
  styleUrl: './contant.component.css',
})
export class ContantComponent {
  /* Send to View Component */
  title = 'Hello From Contant';
  log() {
    console.log('Hello, view child');
  }
  /* Content Child */
  @ContentChild('pro', { static: true }) test!: ElementRef;
  ngAfterContentInit(): void {
    this.test.nativeElement.classList.remove('text-danger');
    this.test.nativeElement.classList.add('text-white');
  }
/*   ngOnInit() {
    console.log(this.test);
  } */
}
