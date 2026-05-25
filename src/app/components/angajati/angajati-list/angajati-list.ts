import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; // 1. Importul magic pentru routerLink
import { Angajat } from '../../../models/angajat.model';
import { AngajatiService } from '../../../services/angajati.service'; 

@Component({
  selector: 'app-angajati-list',
  standalone: true, 
  // 2. Aici îi dăm voie HTML-ului să folosească link-uri de navigare
  imports: [CommonModule, RouterModule], 
  templateUrl: './angajati-list.html',
  styleUrls: ['./angajati-list.css']
})
export class AngajatiListComponent implements OnInit {

  angajati: Angajat[] = [];

  constructor(private serviciuAngajati: AngajatiService) { }

  ngOnInit(): void {
    this.serviciuAngajati.getAllAngajati()
      .subscribe({
        next: (datePrimite) => {
          this.angajati = datePrimite; 
          console.log("Datele au fost puse in variabila:", this.angajati);
        },
        error: (eroare) => {
          console.error(eroare); 
        }
      });
  }
}