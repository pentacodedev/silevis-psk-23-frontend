import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentCatalogComponent } from './admin-student-catalog.component';

describe('AdminStudentCatalogComponent', () => {
  let component: AdminStudentCatalogComponent;
  let fixture: ComponentFixture<AdminStudentCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminStudentCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminStudentCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
