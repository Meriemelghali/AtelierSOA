import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogementsService {

  private apiUrl = 'http://localhost:8080/LogementRendezVous_Etudiant_war/api/logement';

  constructor(private http: HttpClient) {}

  // Récupérer tous les logements
  getAllLogements(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAll`);
  }

  addLogement(logement: any): Observable<any> {
    console.log('Objet envoyé à l\'API:', logement);  // Affiche les données envoyées
    return this.http.post(`${this.apiUrl}/new`, logement);
  }

  // Supprimer un logement par son ID
  deleteLogement(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  // Mettre à jour un logement par son ID
  updateLogement(id: number, logement: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, logement);
  }
}