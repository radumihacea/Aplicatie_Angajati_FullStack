import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngajatiListComponent } from './angajati-list';

describe('AngajatiListComponent', () => {
  let component: AngajatiListComponent;
  let fixture: ComponentFixture<AngajatiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngajatiListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngajatiListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});