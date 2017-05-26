'use strict';

class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 1;
    this.bindEvents();
  }

  bindEvents() {
    
  }

  next() {

  }

  prev() {

  }

  update() {
    setTimeout(() => {
      this.next();
    }, 20);
  }
}

const carousel = new Carousel();
carousel.update();
