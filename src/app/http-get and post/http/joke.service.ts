import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JokeService {

  constructor(private http: Http) { }

  randomJoke23(onJoke):void{
    this.http.get('http://api.icndb.com/jokes/random').subscribe(res => {
       console.log(res.json().value.joke);
       onJoke(res.json().value.joke);

    },this.httpError)

  }
  httpError = err =>{
  console.log(err);
  
}
}
