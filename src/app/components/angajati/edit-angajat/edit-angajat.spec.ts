import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAngajat } from './edit-angajat';

describe('EditAngajat', () => {
  let component: EditAngajat;
  let fixture: ComponentFixture<EditAngajat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAngajat],
    }).compileComponents();

    fixture = TestBed.createComponent(EditAngajat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
