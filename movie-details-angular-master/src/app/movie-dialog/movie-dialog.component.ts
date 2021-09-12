import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../app.component';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent implements OnInit {
 public imagesstills;
  constructor(
    public dialogRef : MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : DialogData
  ) { 

  }

 

  @HostListener('document:click', ['$event'])
  documentClick(event:MouseEvent){
  }
  onNoClick():void { 
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.imagesstills = this.data.movie.Stills;
     console.log(this.imagesstills);
  }

}
