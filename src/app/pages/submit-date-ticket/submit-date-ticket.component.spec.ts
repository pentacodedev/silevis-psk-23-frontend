import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitDateTicketComponent } from './submit-date-ticket.component';

describe('SubmitDateTicketComponent', () => {
  let component: SubmitDateTicketComponent;
  let fixture: ComponentFixture<SubmitDateTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitDateTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitDateTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
