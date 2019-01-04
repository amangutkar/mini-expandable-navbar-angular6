import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minivariant',
  templateUrl: './minivariant.component.html',
  styleUrls: ['./minivariant.component.css']
})
export class MinivariantComponent implements OnInit {

  isExpanded = false;
  element: HTMLElement;

  constructor() { }

  ngOnInit() {
  }
  
  toggleActive(event:any){
    debugger;
    event.preventDefault();
    if(this.element !== undefined){
      this.element.style.backgroundColor = "white";
    } 
    var target = event.currentTarget;
    target.style.backgroundColor = "#e51282";
    this.element = target;
  }
}
