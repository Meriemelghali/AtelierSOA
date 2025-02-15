import { Component, OnInit } from '@angular/core';
import { LogementsService } from '../services/logements.service';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html'
})
export class EnvironmentsComponent implements OnInit {
  logements: any[] = [];  
  newLogement = {
    reference: 0,
    adresse: '',
    delegation: '',
    gouvernorat: '',
    type: '',
    description: '',
    prix: 0
  };  

  constructor(private logementsService: LogementsService) {}

  ngOnInit(): void {
    this.getLogements();  // Récupérer tous les logements dès le début
  }

  getLogements(): void {
    this.logementsService.getAllLogements().subscribe({
      next: (data) => {
        this.logements = data;
      },
      error: (err) => console.error('Erreur lors de la récupération des logements :', err)
    });
  }

   
   // Méthode pour réinitialiser le formulaire
   refreshList(): void {
    this.getLogements();
  }

  // Méthode pour supprimer un logement
  deleteLogement(id: number): void {
    this.logementsService.deleteLogement(id).subscribe({
      next: (data) => {
        console.log('Logement supprimé:', data);
        this.getLogements();  // Recharger la liste après suppression
      },
      error: (err) => console.error('Erreur lors de la suppression du logement :', err)
    });
  }

  // Méthode pour modifier un logement
  updateLogement(id: number): void {
    this.logementsService.updateLogement(id, this.newLogement).subscribe({
      next: (data) => {
        console.log('Logement modifié:', data);
        this.getLogements();  // Recharger la liste après modification
      },
      error: (err) => console.error('Erreur lors de la modification du logement :', err)
    });
  }
}
