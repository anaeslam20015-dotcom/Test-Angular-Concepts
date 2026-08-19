import {
  Component,
  ContentChild,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ContantComponent } from '../../contant/contant/contant.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [ContantComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css',
})
export class ViewChildComponent {
  /* ----- ViewChild ----- */
  @ViewChild('h5', { static: true }) Element!: ElementRef;
  @ViewChild('com', { static: true }) myComponent!: ContantComponent;

  /* ----- viewChildren ----- */
  @ViewChildren('ch', {})
  elemnetChildren!: QueryList<ElementRef>;

  ngOnInit() {
    /* ----- ViewChild ----- */
    this.Element.nativeElement.classList.remove('bg-dark', 'text-white');
    this.Element.nativeElement.classList.add('bg-light', 'text-primary');
    console.log(this.myComponent.log());
    console.log(this.myComponent.title);
  }
  ngAfterViewInit() {
    /* ----- viewChildren ----- */
    this.elemnetChildren.forEach((el) => {
      el.nativeElement.classList.remove('bg-danger');
      el.nativeElement.classList.add('bg-success');
      el.nativeElement.textContent = 'ViewChildren';
    });
  }

}
