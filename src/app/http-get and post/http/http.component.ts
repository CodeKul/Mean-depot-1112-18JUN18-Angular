import { JokeService } from './joke.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  displyaData:string;
  constructor(private jokeService : JokeService ) { }

  ngOnInit() {
  }

  randomJoke(){
    this.jokeService.randomJoke23(joke => {
    this.displyaData=joke;
    })
  }
}
