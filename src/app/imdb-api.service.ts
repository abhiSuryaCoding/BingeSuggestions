import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ImdbApiService {

  moviesTitle: any[] = [];
  isSet=false;
  api_url="https://imdb-api.com/en/API/SearchMovie/k_wcfn6wyr/";
 
  constructor() {

  }
  getList(mName: string)
  {
    /*
    fetch(this.api_url+mName).then(res=>res.json()).then(data=>{
      console.log(data.errorMessage)
      this.makeList(data);
      }) 
    */
   let data={"searchType":"Movie","expression":"batman","results":[{"id":"tt1877830","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BYTQ4ODI5ZjQtNTcwNi00NmY3LWEzYjQtN2E2NThkZDljMmMwXkEyXkFqcGdeQXVyMTIzNDk1MDYz._V1_Ratio0.7273_AL_.jpg","title":"The Batman","description":"(2022)"},{"id":"tt0096895","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_Ratio0.7273_AL_.jpg","title":"Batman","description":"(1989)"},{"id":"tt0468569","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.7273_AL_.jpg","title":"The Dark Knight","description":"(2008) aka \"Batman - El caballero de la noche\""},{"id":"tt1345836","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_Ratio0.7273_AL_.jpg","title":"The Dark Knight Rises","description":"(2012) aka \"Batman: El caballero de la noche asciende\""},{"id":"tt0372784","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7273_AL_.jpg","title":"Batman Begins","description":"(2005)"},{"id":"tt2975590","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7273_AL_.jpg","title":"Batman v Superman: Dawn of Justice","description":"(2016)"},{"id":"tt0112462","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg","title":"Batman Forever","description":"(1995)"},{"id":"tt0118688","resultType":"Title","image":"https://imdb-api.com/images/original/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_Ratio0.7273_AL_.jpg","title":"Batman & Robin","description":"(1997)"}],"errorMessage":""};
   this.makeList(data);
  }
  makeList(data: { results: { title: any; description: any; image: any;}[]; })
  { 

      for(let i = 0; i <data.results.length; i++)
      {
        this.moviesTitle[i]=data.results[i].title;
      }
      this.isSet=true;
  }

}