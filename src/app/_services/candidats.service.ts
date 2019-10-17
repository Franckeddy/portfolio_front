import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Candidat} from "../_models/Candidat.model";

@Injectable()
export class CandidatsService {

  candidats:Candidat[] = [];
  candidatsSubject = new Subject<Candidat[]>();

  constructor() { }

  emitCandidats() {
    this.candidatsSubject.next(this.candidats);
  }
  // saveCandidats() {
  //   database().ref('/candidats').set(this.candidats);
  // }
  // getCandidats() {
  //   database().ref('/candidats')
  //     .on('value', (data) => {
  //       this.candidats = data.val() ? data.vav() : [];
  //       this.emitCandidats();
  //     })
  // }
  // getSingleCandidat(id: number) {
  //   return new Promise(
  //     (resolve, reject) => {
  //       database().ref('/candidats/' + id).once('value').then(
  //         (data) => {
  //           resolve(data.val());
  //         }, (error) => {
  //           reject(error);
  //         }
  //       );
  //     }
  //   );
  // }
  createNewCandidat(newCandidat: Candidat) {
    this.candidats.push(newCandidat);
    //this.saveCandidats();
    this.emitCandidats();
  }
  removeCandidat(candidat: Candidat) {
    const candidatIndexToRemove = this.candidats.findIndex(
      (candidatEl) => {
        if (candidatEl === candidat) {
          return true;
        }
      }
    );
    this.candidats.splice(candidatIndexToRemove, 1);
    //this.saveCandidats();
    this.emitCandidats();
  }
}
