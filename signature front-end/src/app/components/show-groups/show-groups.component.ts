import { Component, OnInit } from '@angular/core';
import{GroupService} from '../../service/group.service'
import { Observable } from 'rxjs';
import { Group } from 'src/app/model/group.model';

@Component({
  selector: 'app-show-groups',
  templateUrl: './show-groups.component.html',
  styleUrls: ['./show-groups.component.scss']
})
export class ShowGroupsComponent implements OnInit {

  constructor(private groupService: GroupService) { }
  listSingog: Observable< Array<Group>>;

  ngOnInit() {
    this.groupService.getListGroups();
    this.listSingog = this.groupService.listsing$;
  
  }

}
