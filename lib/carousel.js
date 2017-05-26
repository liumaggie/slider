'use strict';

class Carousel {
  constructor() {
    this.slides = $('.item').length;
    this.currentSlide = 0;
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.update = this.update.bind(this);
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    let that = this;
    $(".next").on("click",function(){
			that.next();
		});
		$(".prev").on("click",function(){
			that.previous();
		});
		$(document).on("keydown", function(e) {
			if (e.keyCode === 37) {
				that.previous();
			} else if (e.keyCode === 39) {
				that.next();
			}
		});
  }

  next() {
    if (this.currentSlide !== this.slides - 1) {
			this.currentSlide =
			(this.currentSlide + 1) % this.slides;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  previous() {
    if (this.currentSlide !== 0) {
			this.currentSlide = this.currentSlide - 1;
		}

		let translateValue = `translate3d(-${this.currentSlide*600}px, 0px, 0)`;
		$('.carousel').css('transform', translateValue);

  }

  update() {
    setInterval(() => {
      this.next();
    }, 5000);
  }
}

module.exports = Carousel;
