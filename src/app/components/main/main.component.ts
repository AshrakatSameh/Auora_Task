import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  slides = [
    'assets/images/bf7d93654a8b9e761c63b2172c01297d.png',
    'assets/images/7feca933ff799f03f1aa61ed28d49704.png',
    'assets/images/bg3.jpg',
    'assets/images/bf7d93654a8b9e761c63b2172c01297d.png',
    'assets/images/7feca933ff799f03f1aa61ed28d49704.png',
  ];
  currentIndex = 0;
  progressWidth = '0%';

  ngOnInit() {
    this.autoSlide();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateProgress();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateProgress();
  }

  updateProgress() {
    this.progressWidth = `${((this.currentIndex + 1) / this.slides.length) * 100}%`;
  }

  autoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change image every 5 seconds
  }
}
