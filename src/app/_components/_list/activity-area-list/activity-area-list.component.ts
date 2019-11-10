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
    public activityService: ActivityService
  ){ }

  // Activities list
  loadActivities() {
    return this.activityService.GetActivities().subscribe((data: {}) => {
      this.ActivityList = data;
    })
  }

  // Delete issue
  deleteActivity(data: { name: any; id: any; }){
    var index = index = this.ActivityList.map(x => {return x.name}).indexOf(data.name);
    return this.activityService.DeleteActivity(data.id).subscribe(res => {
      this.ActivityList.splice(index, 1)
      console.log('Activity deleted!')
    })
  }
}
