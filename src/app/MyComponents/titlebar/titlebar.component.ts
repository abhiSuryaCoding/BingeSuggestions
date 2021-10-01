import { Component, OnInit } from '@angular/core';
import { ImdbApiService } from 'src/app/imdb-api.service';
import { SharedService } from 'src/app/shared.service';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {

  state=true;
  toggle=1;
  moviesTitle: any[] = [];
  
  
  constructor(public api: ImdbApiService, private share: SharedService) { 
    
  }

  ngOnInit(): void {
  }
  
  toggleSidebar()
  {
    if(this.toggle==0)
    {
      this.state=true;
      this.toggle=1;
      
    } 
    else if(this.toggle==1)
    {
      this.state=false;
      this.toggle=0;
      
    }

  }
 
}

