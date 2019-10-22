import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Candidat} from "../_models/Candidat.model";

@Injectable()
export class CandidatsService {
  createNewCandidat(newCandidat: Candidat) {
    throw new Error("Method not implemented.");
  }
  removeCandidat(candidat: Candidat) {
    throw new Error("Method not implemented.");
  }
  emitCandidats() {
    throw new Error("Method not implemented.");
  }

  candidats:Candidat[] = [];
  candidatsSubject = new Subject<Candidat[]>();

  constructor() { }

  public updateCandidat(candidat: Candidat){
  
  }
  
  public getCandidatById(id: number){
  
  }
  
  public getCandidats(url?: string){
  
  }
}
