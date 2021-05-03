import { Injectable } from "@angular/core";
import { BehaviorSubject, observable } from "rxjs";
import { Person } from "../model/signturePerson";
import { Group } from "../model/group.model";

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class GroupService {
  list: BehaviorSubject<Array<Group>> = new BehaviorSubject([]);
  listPerson: BehaviorSubject<Array<Person>> = new BehaviorSubject([]);

  public get listPerson$() {
    return this.listPerson.asObservable();
  }

  public get listsing$() {
    return this.list.asObservable();
  }

  constructor(private http: HttpClient) { }

  addsignture(name, phonenumber,email,msg , groupName) {

    var obj = {
      name: name ,
      phoneNmber: phonenumber,
      email: email,
      msg: msg,
      gruopName:groupName 
    }
    this.http.post<Person>('/api/sing', obj).subscribe(d => {
      console.log(d);
      this.listPerson.next([d,...this.listPerson.value]);
      this.getListGroups();
    })
    // this.list.value.push({ name: name, m: good, singog: snigog });
    this.list.next(this.list.value);
  }

  getListPerson(): void {
    this.http.get<Person[]>('/api/sing').subscribe(d => {
      console.log(d);
      this.listPerson.next(d);
    })
  }

  getListGroups(): void {
    this.http.get<Group[]>('/api/group').subscribe(d => {
      console.log(d);
      this.list.next(d);
    })
  }


}


