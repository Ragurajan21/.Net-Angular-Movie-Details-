import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie, Movie2 } from '../movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie : Movie2 = new Movie2();

  @Output() launchDetailsCard = new EventEmitter<Movie2>();

  constructor() { }

  ngOnInit(): void {
  }
  public  imagesstills ;
  launchIt(e: any)
  {
    console.log("Launch it.");
    this.launchDetailsCard.emit(this.movie);
     
  }
  // isValidNumber(numberstring: string)
  // {
    
  //   if(numberstring === '' || numberstring === undefined || numberstring === null || isNaN(parseInt(numberstring)))
  //   {
  //     return false;
  //   }
  //   return true; 
  // }

  
}
