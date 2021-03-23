import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as  $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  opened:boolean = true;

  /* mybutton!:HTMLElement; */

 // @ViewChild('scroll') scroll!: ElementRef;
  ngOnInit(): void {
   /*  this.mybutton = document.getElementById("myBtn") as HTMLElement; */
    /* window.onscroll = ()=> {this.scrollFunction()}; */

  }
  /* scrollFunction() {
    if ( this.scroll.nativeElement.scrollTop > 20) {
      this.mybutton.style.display = "block";
    } else {
      this.mybutton.style.display = "none";
    }
  } */

 // topFunction() {
    /* if ( this.scroll.nativeElement.scrollTop > 20) {
      this.mybutton.style.display = "block";
    } else {
      this.mybutton.style.display = "none";
    } */
    /* this.scroll.nativeElement.scrollTop= 0; */
 // }

}
