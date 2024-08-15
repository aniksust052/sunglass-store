import React from 'react';
import './styles/All.scss';
import './styles/display.scss';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Collection from './components/Collection';
import NewArrivalGlasses from './components/NewArrivalGlasses';
import Banner from './components/Banner';
import OfferCollection from './components/OfferCollections'
import HappyCustomer from './components/HappyCustomer';
import Logos from './components/Logos';
import TopRated from './components/TopRated';
import Best from './components/Best';
import './styles/responsive/responses.scss';

function App() {

	const siteURL = 'http://localhost:5173/';

	const siteData = {
	nav: {
		logo: '/image/productLogo.jpg',
		name: 'ProductX',
		btnText: 'Download Now',
		btnUrl: '#',
		menu: [
			{ 
				name: 'Blocks', 
				url: '#'
			},
			{ 
				name: 'Readymade Sections', 
				url: '#'
			},
			{ 
				name: 'Starter Packs', 
				url: '#'
			}
		]
	},
	hero: {
		title: 'FASHIONABLE SUNGLASS.',
		subTitle: `SUMMER COLLECTION - 2022`,
		img: '/image/hero.jpg',
		btnText: 'Shop Now',
		btnUrl: '#'
	},
	collection: [
		{ 
			title: 'Men Collection',
			subTitle: '80% SPECIAL OFFER',
			img: '/image/manCarrying-bag.jpg',
			btnText: 'Shop Now',
			btnUrl: '#'
		},
		{ 
			title: 'Baby Collection',
			subTitle: '80% SPECIAL OFFER',
			img: '/image/happyPortrait.jpg',
			btnText: 'ShopNow',
			btnUrl: '#'
		},
		{ 
			title: 'Ladies Collection',
			subTitle: '80% SPECIAL OFFER',
			img: '/image/interestedWoman.jpg',
			btnText: 'ShopNow',
			btnUrl: '#'
		}
	],
	newGlasses: {
		title: 'New Arrival',
		subTitle: 'There are many variations of passages of available but the majority have suffered alteration in some form randomised',
		sunGlass : [
			{
				discountPercentage: '-28%',
				img: '/glass/glass1.jpg',
				categoryTitle: 'Fashion Sunglass',
				price : {
					newPrice: '$250.00',
					oldPrice: '$38.92'
				},
				ellips: {
					el1: '/image/Ellipse1.jpg',
					el2: '/image/Ellipse2.jpg',
					el3: '/image/Ellipse3.jpg'
				},
				icons: {
					searchIconUrl: '/glass/icons/searchIcon.jpg',
					loveIconUrl: '/glass/icons/loveIcon.jpg',
					cartIconUrl: '/glass/icons/cartIcon.jpg'
				}
			},
			{
				discountPercentage: '-28%',
				img: '/glass/glass2.jpg',
				categoryTitle: 'Sesonal Glass',
				price : {
					newPrice: '$250.00',
					oldPrice: '$38.92'
				},
				ellips: {
					el1: '/image/Ellipse1.jpg',
					el2: '/image/Ellipse2.jpg',
					el3: '/image/Ellipse3.jpg'
				},
				icons: {
					searchIconUrl: '/glass/icons/searchIcon.jpg',
					loveIconUrl: '/glass/icons/loveIcon.jpg',
					cartIconUrl: '/glass/icons/cartIcon.jpg'
				}
			},
			{
				discountPercentage: '',
				img: '/glass/glass3.jpg',
				categoryTitle: `Baby's Collection`,
				price : {
					newPrice: '$250.00',
					oldPrice: '$38.92'
				},
				ellips: {
					el1: '/image/Ellipse1.jpg',
					el2: '/image/Ellipse2.jpg',
					el3: '/image/Ellipse3.jpg'
				},
				icons: {
					searchIconUrl: '/glass/icons/searchIcon.jpg',
					loveIconUrl: '/glass/icons/loveIcon.jpg',
					cartIconUrl: '/glass/icons/cartIcon.jpg'
				}
			},
			{
				discountPercentage: '-28%',
				img: '/glass/glass4.jpg',
				categoryTitle: 'Minimalist Glass',
				price : {
					newPrice: '$250.00',
					oldPrice: '$38.92'
				},
				ellips: {
					el1: '/image/Ellipse1.jpg',
					el2: '/image/Ellipse2.jpg',
					el3: '/image/Ellipse3.jpg'
				},
				icons: {
					searchIconUrl: '/glass/icons/searchIcon.jpg',
					loveIconUrl: '/glass/icons/loveIcon.jpg',
					cartIconUrl: '/glass/icons/cartIcon.jpg'
				}
			},
			{
				discountPercentage: '',
				img: '/glass/glass5.jpg',
				categoryTitle: 'Fashion Sunglass',
				price : {
					newPrice: '$250.00',
					oldPrice: '$38.92'
				},
				ellips: {
					el1: '/image/Ellipse1.jpg',
					el2: '/image/Ellipse2.jpg',
					el3: '/image/Ellipse3.jpg'
				},
				icons: {
					searchIconUrl: '/glass/icons/searchIcon.jpg',
					loveIconUrl: '/glass/icons/loveIcon.jpg',
					cartIconUrl: '/glass/icons/cartIcon.jpg'
				}
			},
			{
				discountPercentage: '',
				img: '/glass/glass6.jpg',
				categoryTitle: 'Sesonal Glass',
				price : {
					newPrice: '$250.00',
					oldPrice: '$38.92'
				},
				ellips: {
					el1: '/image/Ellipse1.jpg',
					el2: '/image/Ellipse2.jpg',
					el3: '/image/Ellipse3.jpg'
				},
				icons: {
					searchIconUrl: '/glass/icons/searchIcon.jpg',
					loveIconUrl: '/glass/icons/loveIcon.jpg',
					cartIconUrl: '/glass/icons/cartIcon.jpg'
				}
			},
			{
				discountPercentage: '-28%',
				img: '/glass/glass7.jpg',
				categoryTitle: `Baby's Collection`,
				price : {
					newPrice: '$250.00',
					oldPrice: '$38.92'
				},
				ellips: {
					el1: '/image/Ellipse1.jpg',
					el2: '/image/Ellipse2.jpg',
					el3: '/image/Ellipse3.jpg'
				},
				icons: {
					searchIconUrl: '/glass/icons/searchIcon.jpg',
					loveIconUrl: '/glass/icons/loveIcon.jpg',
					cartIconUrl: '/glass/icons/cartIcon.jpg'
				}
			},
			{
				discountPercentage: '-28%',
				img: '/glass/glass8.jpg',
				categoryTitle: 'Minimalist Glass',
				price : {
					newPrice: '$250.00',
					oldPrice: '$38.92'
				},
				ellips: {
					el1: '/image/Ellipse1.jpg',
					el2: '/image/Ellipse2.jpg',
					el3: '/image/Ellipse3.jpg'
				},
				icons: {
					searchIconUrl: '/glass/icons/searchIcon.jpg',
					loveIconUrl: '/glass/icons/loveIcon.jpg',
					cartIconUrl: '/glass/icons/cartIcon.jpg'
				}
			}
			
		]
	},
	banner: {
		img: '/image/banner.jpg'
	},
	offerCollection: {
		baby: {
			img: '/image/babyCollection.jpg',
			discount: '60% OFF',
			title: 'Baby Collection',
		},
		ladiesAndMen: [
		 	{
				img: '/image/ladiesCollection.jpg',
				discount: '60% OFF',
				offerTime: 'Limited Time Offer',
				title: 'Ladies Collection',
			},
			 {
				img: '/image/mensCollection.jpg',
				discount: '60% OFF',
				offerTime: 'Limited Time Offer',
				title: 'Mens Collection'
			}
		]
	},
	happyCustomer: {
		title: 'Happy Customer',
		subTitle: 'There are many variations of passages of available but the majority have suffered alteration in some form randomised',
		customers: [
			{
				img: '/image/modernStaters.jpg',
				bgImg: '/image/Icon.jpg',
				name: 'Modern Staters',
				positionTitle: 'WEB DEVELOPER',
				customerReview: `"It uses a dictionary of over 200 latin words, comined with handfull the model sentence structures, to generate lorem ipsum is therefore always"`,
				rating: '/svgFiles/stars.svg',
			},
			{
				img: '/image/marshail.jpg',
				bgImg: '/image/icon.jpg',
				name: 'Marshall Chavez',
				positionTitle: 'UI/UX DESIGNER',
				customerReview:  `"It uses a dictionary of over 200 latin words, comined with handfull the model sentence structures, to generate lorem ipsum is therefore always"`,
				rating: '/svgFiles/stars.svg',
			},
			{
				img: '/image/robyn.jpg',
				bgImg: '/image/icon.jpg',
				name: 'Robyn Smith',
				positionTitle: 'WEB DEVELOPER',
				customerReview:  `"It uses a dictionary of over 200 latin words, comined with handfull the model sentence structures, to generate lorem ipsum is therefore always"`,
				rating: '/svgFiles/stars.svg',
			}
		]
	},
	logos: [
		'/svgFiles/logo1.svg',
		'/svgFiles/logo2.svg',
		'/svgFiles/logo3.svg',
		'/svgFiles/logo4.svg',
		'/svgFiles/logo5.svg',
		'/svgFiles/logo6.svg',
	],
	topRated: {
		title: 'Top Rated',
		subTitle: 'There are many variations of passages of available but the majority have suffered alteration in some form randomised',
		discount: {
			img: '/image/topRated.jpg',
			onWhich: 'All Product',
			percent: '60%',
			txt: 'Discount'
		},
		buttonTxt: 'Shop Now',
		glasses: {
				categoryTitle: 'Fashion Sunglass',
				price : {
					newPrice: '$250.00',
					oldPrice: '$38.92'
				},
				ellips: {
					el1: '/image/Ellipse1.jpg',
					el2: '/image/Ellipse2.jpg',
					el3: '/image/Ellipse3.jpg'
				},
				rating: '/svgFiles/ratingstars.svg',
				images: [
					'/glass/glass9.jpg',
					'/glass/glass10.jpg',
					'/glass/glass11.jpg',
					'/glass/glass12.jpg',
					'/glass/glass13.jpg',
					'/glass/glass14.jpg',
					'/glass/glass15.jpg',
					'/glass/glass16.jpg',
				]
			}
	},
	best: {
		txt: 'BEST SUNGLASS COLLECTION.',
		btnTxt: 'Shop Now',
		img : '/image/bg.jpg'
	}
}

return (
	<div>
		<Nav data={siteData.nav}/>
		<Hero data={siteData.hero}/>
		<Collection data={siteData.collection}/>
		<NewArrivalGlasses data = {siteData.newGlasses} />
		<Banner data = {siteData.banner} />
		<OfferCollection data = {siteData.offerCollection} />
		<HappyCustomer data={siteData.happyCustomer} />
		<Logos data={siteData.logos} />
		<TopRated data={siteData.topRated} />
		{/* <Best data={siteData.best} /> */}
	</div>
);
}

export default App;
