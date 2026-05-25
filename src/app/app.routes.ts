import { Routes } from '@angular/router';
import { AngajatiListComponent } from './components/angajati/angajati-list/angajati-list';
import { AddAngajatiComponent } from './components/angajati/add-angajati/add-angajati';
// Acesta este importul pentru noua componentă
import { EditAngajatComponent } from './components/angajati/edit-angajat/edit-angajat'; 

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'angajati',
    pathMatch: 'full'
  },
  {
    path: 'angajati',
    component: AngajatiListComponent
  },
  {
    path: 'angajati/add',
    component: AddAngajatiComponent
  },
  // Aceasta este ruta nouă cu parametrul :id
  {
    path: 'angajati/edit/:id',
    component: EditAngajatComponent
  }
];