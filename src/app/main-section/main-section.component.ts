import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let anime: any; 

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements AfterViewInit {

  constructor() { }


  ngAfterViewInit(): void {

    // setTimeout(() => {
    anime.timeline()
    .add({
      targets: '.c2 .word',
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 1000,
      delay: (el, i) =>  800 * i

    }).add({
      targets: '.c2',
      opacity: [1],
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
    // }, 200);
  }

  ngOnInit(): void {
  }

}