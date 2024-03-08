import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
const LogoCarousel = () => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="slider-container carousel-item">
			<Slider {...settings}>
				<div>
					<h3>Gallery 1</h3>
				</div>
				<div>
					<h3>Gallery 2</h3>
				</div>
				<div>
					<h3>Gallery 3</h3>
				</div>
				<div>
					<h3>Gallery 4</h3>
				</div>
				<div>
					<h3>Gallery 5</h3>
				</div>
				<div>
					<h3>Gallery 6</h3>
				</div>
				<div>
					<h3>Gallery 7</h3>
				</div>
				<div>
					<h3>Gallery 8</h3>
				</div>
			</Slider>
		</div>
	);
};

export default LogoCarousel;
