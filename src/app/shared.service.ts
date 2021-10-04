import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  /*mList= [{"id":"tt1375666","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg","title":"Inception","description":"(2010)"},
  {"id":"tt0848228","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg","title":"The Avengers","description":"(2012)"},
  {"id":"tt4154796","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.7273_AL_.jpg","title":"Avengers: Endgame","description":"(2019)"},
  {"id":"tt4154756","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.7273_AL_.jpg","title":"Avengers: Infinity War","description":"(2018)"},
  {"id":"tt2395427","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_Ratio0.7273_AL_.jpg","title":"Avengers: Age of Ultron","description":"(2015)"},
  {"id":"tt0110413","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_Ratio0.7273_AL_.jpg","title":"Léon: The Professional","description":"(1994)"},
  {"id":"tt0082949","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BYTlkOGEwY2UtMjhjYy00ZTJkLWI5NmMtZTliNWVmMmY0YmYyXkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_Ratio0.7273_AL_.jpg","title":"The Professional","description":"(1981)"},
  {"id":"tt0060862","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BMTY0OWNiZTQtZGY4MS00YmJlLTg4YzEtMmE3YTVkMDM3ODRlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_Ratio0.7273_AL_.jpg","title":"The Professionals","description":"(1966)"},
  {"id":"tt0339535","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BMTY2ODE3MzMwOV5BMl5BanBnXkFtZTcwMzY2NDQyMQ@@._V1_Ratio0.7273_AL_.jpg","title":"The Professional","description":"(2003)"},
  {"id":"tt11937714","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BMjZlZjE4NjEtMDNlMC00YjJhLTg1NjAtNDNhZWM3MDc0OWFjXkEyXkFqcGdeQXVyMTEyNTAxMjAz._V1_Ratio0.7727_AL_.jpg","title":"The Professionals","description":"(2021)"},
  {"id":"tt5732630","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BYjBlMjdmMmYtMDNlZS00OTI3LWFjYmMtYTVmZWViMzcwMmU4XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_Ratio0.7273_AL_.jpg","title":"The Professionals","description":"(2016)"},
  {"id":"tt2229525","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BZjU0NzMzM2YtMzI0Ny00YjU3LWFkNWEtY2M2MTQ0MDM5ODdhXkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_Ratio0.7273_AL_.jpg","title":"T.H.E Professional","description":"(1998)"}];
  */
  mList= [{title:"Dummy", image:"https://imdb-api.com/images/original/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.7273_AL_.jpg", description:"0000" }]; //dummy assignment

 constructor(private firestore: AngularFirestore) { 
  
     this.mList.pop();  //making mList empty
  }
  setList(Ltitle: string, Limage: string, Ldescription: string)
  {
      let temp = { title: Ltitle, image: Limage, description: Ldescription };
      this.mList.push(temp);
      return
  }



}


