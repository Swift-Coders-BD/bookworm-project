import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

// Import css files for react-slick carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const UnreleasedBookCarousel = ({ bestBooks }) => {
	// carousel settings
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
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
		<div className='text-center'>
			<Slider {...settings}>
				{bestBooks.map((book) => (
					<div key={book.id}>
						<Image
							src={book.img}
							width='180'
							height='215'
							objectFit='cover'
							alt=''
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default UnreleasedBookCarousel;
