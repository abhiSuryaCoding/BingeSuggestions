import { Component, Injectable, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { collection, query, where, getDocs } from "firebase/firestore";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  //val!: any[];
  constructor(public share: SharedService, private firestore: AngularFirestore)
   {
    
   }

  ngOnInit(): void {

          this.firestore.collection('Movies').valueChanges()
          .subscribe(val => {
          //emptying array
          while(this.share.mList.length)
          this.share.mList.pop();
              
          for(let i=0;i<val.length;i++)
          {  
            this.print(val[i])
          }
      });
   
  }
  
  print(val: any)
  {
      let title=val.title;
      let image=val.image;
      let description=val.description;
      console.log("Display",title, image, description);
      this.share.setList(title,image,description);
      return
  }
  
}


