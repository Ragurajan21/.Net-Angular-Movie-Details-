import { Component } from '@angular/core';
import { Movie, Movie2 } from './movie';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';
import {MovieService} from 'src/app/movie.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';



export interface DialogData{
  movie: Movie2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  isLogin :boolean = true;
  shouldShowPopUp = false;
  popupMovie = null;

  title = 'movie-display';
 
  movies2: Movie2[] = new Array();
  display_movies2:Movie2 [];


  constructor( public dialog : MatDialog, private movieService:MovieService,private socialAuthService: SocialAuthService){ }

   openDialog() : void {
     const dialogRef = this.dialog.open(MovieDialogComponent, {
      width : '90%',
       data: { movie: this.popupMovie } 
     });
     dialogRef.afterClosed().subscribe(result =>{
       console.log('The dialog was closed.');

     });
   }

   showCard(movie: Movie2){
     console.log("shoCard" + movie);
     if(movie != null){
      this.popupMovie = movie;
      this.openDialog();
     }
   }
 
  searchString(searchs : string)
  {
    console.log(searchs);
    this.display_movies2 = this.movies2.filter(movie2 => movie2.Title.toLowerCase().indexOf(searchs.toLowerCase()) != -1)
  }
  sort_by_emitter(sorter : string)
  {
    console.log("sort1 called.");
    if(sorter === "All")
    {
      this.display_movies2 = this.movies2;
    }
   
    
  }

  ngOnInit(){
    this.socialAuthService.authState.subscribe(() => {
      this.isLogin = false;
    });
    this.getMoviesDetials();

  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    
  }

  getMoviesDetials()
  {
    this.movieService.GetMovies().subscribe(data => 
      {
        console.log(data);
        this.display_movies2 = data;
        this.movies2 = this.display_movies2;
      });
  }



}
