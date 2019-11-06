import { Component, OnInit } from '@angular/core';
import { DiplomeService } from '../../../_services/diplome.service';

@Component({
  selector: 'app-diplome-list',
  templateUrl: './diplome-list.component.html',
  styleUrls: ['./diplome-list.component.scss']
})
export class DiplomeListComponent implements OnInit {

  DiplomeList: any = [];

  ngOnInit() {
    this.loadDiplomes();
  }

  constructor(
    public DiplomeService: DiplomeService
  ){ }

  // Activities list
  loadDiplomes() {
    return this.DiplomeService.GetDiplomes().subscribe((data: {}) => {
      this.DiplomeList = data;
    })
  }

}