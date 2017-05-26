'use strict';

class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.bindEvents();
  }

  bindEvents() {
    $(".next").on("click",function(){
			Carousel.next();
		});
		$(".prev").on("click",function(){
			Carousel.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				Carousel.previous();
			} else if (e.keyCode === 39) {
				Carousel.next();
			}
		});
  }

  next() {
    if (this.current_slide !== this.total_slides - 1) {
			this.current_slide =
			(this.current_slide + 1) % this.total_slides;
		}

		let translateValue = `translate3d(-${this.current_slide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);
  }

  prev() {
    if (this.current_slide !== 0) {
			this.current_slide = this.current_slide - 1;
		}

		let translateValue = `translate3d(-${this.current_slide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);
  }

  update() {
    setTimeout(() => {
      this.next();
    }, 2000);
  }
}

const carousel = new Carousel();
carousel.update();
