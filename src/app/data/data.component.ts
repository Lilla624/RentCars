import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {

  tulajok:any
  constructor(private base:BaseService) {
}

signIn() {
  this.base.signIn()
}

signOut() {
  this.base.signOut()
}

getTulaj() {
  this.base.getTulaj().subscribe(
    {
      next: (tulajok) => this.tulajok=tulajok,
      error: (error) => console.log(error)
      
    })
}
}
