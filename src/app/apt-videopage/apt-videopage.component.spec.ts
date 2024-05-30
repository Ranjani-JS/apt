import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptVideopageComponent } from './apt-videopage.component';

describe('AptVideopageComponent', () => {
  let component: AptVideopageComponent;
  let fixture: ComponentFixture<AptVideopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AptVideopageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AptVideopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
