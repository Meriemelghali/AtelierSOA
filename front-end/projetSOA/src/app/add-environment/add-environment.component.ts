import { Component } from '@angular/core';
import { LogementsService } from '../services/logements.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-environment',
  templateUrl: './add-environment.component.html'
})
export class AddEnvironmentComponent {

  formLogement: FormGroup;

  constructor(private logementsService: LogementsService, private route: Router) {
    // Initialisation du formulaire avec des validateurs
    this.formLogement = new FormGroup({
      reference: new FormControl('', [Validators.required, Validators.min(1)]),
      adresse: new FormControl('', [Validators.required]),
      delegation: new FormControl('', [Validators.required]),
      gouvernorat: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      prix: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  addLogement(): void {
    if (this.formLogement.invalid) {
      alert('Veuillez remplir tous les champs correctement.');
      return;
    }

    const body = this.formLogement.value; // Les valeurs du formulaire

    // Envoi du corps de la requête au backend
    this.logementsService.addLogement(body).subscribe({
      next: () => {
        // Redirection après ajout
        this.route.navigateByUrl('/logement');
        // Réinitialisation du formulaire
        this.formLogement.reset();
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout du logement :', err);
        alert('Une erreur est survenue lors de l\'ajout du logement.');
      }
    });
  }

  // Méthode pour vérifier la validité du formulaire
  isFormValid(): boolean {
    return this.formLogement.valid;
  }
}