import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../../_services/activity.service';

@Component({
  selector: 'app-activity-area-list',
  templateUrl: './activity-area-list.component.html',
  styleUrls: ['./activity-area-list.component.scss']
})
export class ActivityAreaListComponent implements OnInit {

  ActivityList: any = [];

  ngOnInit() {
    this.loadActivities();
  }

  constructor(
    public ActivityService: ActivityService
  ){ }

  // Activities list
  loadActivities() {
    return this.ActivityService.GetActivities().subscribe((data: {}) => {
      this.ActivityList = data;
    })
  }

}
