import { Component, OnInit } from '@angular/core';
import { Apilist } from './APIList';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css']
})
export class ApisComponent implements OnInit {

  constructor() { }
  show: boolean = false
  mylist: Array<Apilist> = [
    { id: 1, name: 'sendMail', desc: 'This api allows to send mail to a given mail-id and subject.', params: ['client_name', 'email_id', 'subject'] },
    { id: 2, name: 'fetchMail', desc: 'This api allows to fetch mail with given set of parameters.', params: ['name', 'email_id', 'keyword'] },
    { id: 3, name: 'person', desc: 'This api returns the detail of a person for given id.', params: ['id'] },
    { id: 4, name: 'careers', desc: 'This api return career options for a given set of details.', params: ['qualification', 'marks', 'experience', 'age'] },
    { id: 5, name: 'planets', desc: 'This api returns the names of planets for a given star system.', params: ['star_system_id'] },
    { id: 6, name: 'articles', desc: 'This api returns a set of articles for given parameters', params: ['author', 'pub_year', 'pub_before', 'pub_after', 'category'] },
    { id: 7, name: 'api17', desc: 'simpleapidsc7', params: ['param1', 'param2', 'param3', 'param4'] },
    { id: 8, name: 'api18', desc: 'simpleapidsc8', params: ['param1'] },
    { id: 9, name: 'api19', desc: 'simpleapidsc9', params: ['param1', 'param2'] }
  ];

  api: Apilist;
  apiexecute: ""
  ngOnInit() {

  }

  setVals(apiobj: Apilist) {
    this.api = apiobj;
    this.show = true;
  }

  executeApi(apiobj: Apilist) {
    alert("API Executed : " + apiobj.name + "(" + apiobj.params + ")")
    //console.log(apiobj)
  }
}

