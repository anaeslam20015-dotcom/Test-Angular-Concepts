import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestServesComponent } from './test-serves.component';

describe('TestServesComponent', () => {
  let component: TestServesComponent;
  let fixture: ComponentFixture<TestServesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestServesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestServesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
