import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class ImdbApiService {
  
  moviesTitle: any[] = [];
  isSet=false;
  api_url="https://imdb-api.com/en/API/SearchMovie/k_wcfn6wyr/";
  mainData!: {results:{title:any;image:any;description:any}[];};
  constructor(private firestore: AngularFirestore) {

  }
  getList(mName: string)
  {
    fetch(this.api_url+mName).then(res=>res.json()).then(data=>{
      this.mainData=JSON.parse(JSON.stringify(data));

      console.log("main",this.mainData.results)
      console.log("data",data.results)
      this.makeList(data);
      }) 
  }
  makeList(data: { results: { title: any; description: any; image: any;}[]; })
  { 

      for(let i = 0; i <data.results.length; i++)
      {
        this.moviesTitle[i]=data.results[i].title;
      }
      this.isSet=true;
  }
  addDocument(title: string)
  {
    //let temp = { title: "Avengers: Endgame", image: "https://imdb-api.com/images/original/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.7273_AL_.jpg", description: "2019" };
      //this.firestore.collection('Movies').add(temp);
    // console.log(this.mainData.resu);
    for(let i=0; i<this.mainData.results.length;i++)
    {
        if(this.mainData.results[i].title==title)
        { 
          
          let temp = {  title: this.mainData.results[i].title, 
                        image: this.mainData.results[i].image,
                        description: this.mainData.results[i].description };
                        
                        console.log("this is temp obj",temp);   
                        this.firestore.collection('Movies').add(temp);
                        break;
        }
    }
    
    
  }

}