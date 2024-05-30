import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptContactpageComponent } from './apt-contactpage.component';

describe('AptContactpageComponent', () => {
  let component: AptContactpageComponent;
  let fixture: ComponentFixture<AptContactpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AptContactpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AptContactpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
