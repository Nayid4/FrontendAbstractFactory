import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPDFComponent } from './form-pdf.component';

describe('FormPDFComponent', () => {
  let component: FormPDFComponent;
  let fixture: ComponentFixture<FormPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPDFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
