import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../service/group.service';
import { Group } from 'src/app/model/group.model';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';




@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  name: string;
  email: string;
  phone: number;
  group: string;
  msg: string;

  constructor(private groupService: GroupService,
    private _snackBar: MatSnackBar ,
    ) { }

  listSingog: Observable<Array<Group>>;

  addSing() {
    this.groupService.addsignture(this.name, this.phone, this.email, this.msg, this.group);
    this._snackBar.open("תודה שחתמת", "", {
      duration: 2000,
    })
 
   
  }

  ngOnInit() {
    this.groupService.getListGroups();
    this.listSingog = this.groupService.listsing$;
    this.listSingog.subscribe(d => {
      console.log(d);
    })
  }




}
