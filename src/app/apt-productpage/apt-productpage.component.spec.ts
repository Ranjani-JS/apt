import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptProductpageComponent } from './apt-productpage.component';

describe('AptProductpageComponent', () => {
  let component: AptProductpageComponent;
  let fixture: ComponentFixture<AptProductpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AptProductpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AptProductpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
