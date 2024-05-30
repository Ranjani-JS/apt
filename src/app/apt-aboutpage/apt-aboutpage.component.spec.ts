import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptAboutpageComponent } from './apt-aboutpage.component';

describe('AptAboutpageComponent', () => {
  let component: AptAboutpageComponent;
  let fixture: ComponentFixture<AptAboutpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AptAboutpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AptAboutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
