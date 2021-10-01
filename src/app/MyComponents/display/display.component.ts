import { Component, Injectable, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  constructor(public share: SharedService) {
      

   }

  ngOnInit(): void {
    
  }

  
}
