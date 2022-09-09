import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor() { }
  service: Array<any> = []
  
  ngOnInit(): void {
    var services = (localStorage.getItem('response') as any);
    // console.log("providerservice",JSON.parse(services));
    // this.service=JSON.parse(services);
    
    // console.log("hello"+this.service);
    
    // this.currentUser = JSON.parse(localStorage.getItem('response') || '{}');
    // console.log("this is current user"+this.currentUser);
    //this.service = JSON.parse(localStorage.getItem('response') || '{}') ;
    //console.log(this.service);
    //JSON.parse(this.service)
    // userJson=JSON.parse(userJson)
    // console.log("hello"+userJson);
    var parsedObject=JSON.parse(services)
    console.log(parsedObject);
    this.service=parsedObject
    console.log("array");
    
    console.log(this.service);
    
    
  }

}
