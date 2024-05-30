import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptAwardpageComponent } from './apt-awardpage.component';

describe('AptAwardpageComponent', () => {
  let component: AptAwardpageComponent;
  let fixture: ComponentFixture<AptAwardpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AptAwardpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AptAwardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
