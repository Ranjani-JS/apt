import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptHomepageComponent } from './apt-homepage.component';

describe('AptHomepageComponent', () => {
  let component: AptHomepageComponent;
  let fixture: ComponentFixture<AptHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AptHomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AptHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
