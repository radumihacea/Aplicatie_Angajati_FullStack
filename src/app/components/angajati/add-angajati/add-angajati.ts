import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Angajat } from '../../../models/angajat.model';
import { AngajatiService } from '../../../services/angajati.service'; 
import { Router } from '@angular/router'; // 1. Am adăugat importul pentru Router

@Component({
  selector: 'app-add-angajati',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './add-angajati.html'
})
export class AddAngajatiComponent {

  addAngajatRequest: Angajat = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  // 2. Am injectat Router-ul alături de serviciu
  constructor(private angajatService: AngajatiService, private router: Router) { }

  addAngajat() {
    this.angajatService.addAngajat(this.addAngajatRequest)
      .subscribe({
        next: (angajat) => {
          // 3. Comanda care te „teleportează” înapoi la tabel după o salvare cu succes
          this.router.navigate(['angajati']);
        },
        error: (eroare) => {
          console.error("A apărut o eroare:", eroare);
        }
      });
  }

}