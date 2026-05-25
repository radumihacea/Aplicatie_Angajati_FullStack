import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Angajat } from '../../../models/angajat.model';

@Component({
  selector: 'app-edit-angajat',
  standalone: true,
  // Această linie repară erorile cu ngModel
  imports: [FormsModule], 
  templateUrl: './edit-angajat.html'
})
export class EditAngajatComponent {

  // Această variabilă repară erorile cu numele sublinat
  detaliiAngajat: Angajat = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

}