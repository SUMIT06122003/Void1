import tshirtBlack from '../assets/tshirts/tshirt B1.jpg';
import tshirtGrey from '../assets/tshirts/tshirt G1.jpg';
import tshirtMock from '../assets/tshirts/tshirt mock.png';
import shortsBlackGreen from '../assets/shorts/Untitled (1200 x 1500 px) (12).jpg';
import shortsBlackOrange from '../assets/shorts/Untitled (1200 x 1500 px) (13).jpg';
import shortsNavyGreen from '../assets/shorts/Untitled (1200 x 1500 px) (14).jpg';
import shortsNavyOrange from '../assets/shorts/Untitled (1200 x 1500 px) (15).jpg';
import shakerBlack from '../assets/shakers/shaker B1.jpg';
import shakerBlackAlt from '../assets/shakers/shaker B2.jpg';
import shakerBlue from '../assets/shakers/shaker N1.jpg';
import shakerBlueAlt from '../assets/shakers/shaker N2.jpg';
import socksHero from '../assets/socks colours/socks colours.jpg';
import socksBlue from '../assets/socks colours/socks colours (1).jpg';
import socksGrey from '../assets/socks colours/socks colours (3).jpg';
import socksMixed from '../assets/socks colours/socks colours 2.jpg';

const products = [
  {
    id: 'void-performance-tshirt',
    name: 'Performance T-Shirt',
    category: 'T-Shirt',
    price: 1299,
    originalPrice: 1899,
    rating: 4.5,
    reviews: 2,
    image: tshirtBlack,
    images: [tshirtBlack, tshirtGrey, tshirtMock],
    description: 'Premium smooth nylon blend with anti-wicking and quick-dry technology. Lightweight athletic fit with reflective logo detailing.',
    fabric: 'Smooth nylon blend fabric',
    gsm: '200 GSM',
    fit: 'Athletic body-fit structure',
    stretch: 'Flexible four-way stretch comfort',
    features: [
      'Smooth nylon blend fabric (200 GSM)',
      'Athletic body-fit structure',
      'Flexible four-way stretch comfort',
      'Lightweight, soft, and cool on skin',
      'Anti-wicking and quick-dry fabric',
      'Round neck design',
      'Medium sleeve length',
      'Smooth performance finish',
      'Reflective logo detailing',
    ],
    variants: {
      colors: ['Cosmic Black', 'Lunar Grey'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
  },
  {
    id: 'void-performance-shorts',
    name: 'Performance Shorts',
    category: 'Shorts',
    price: 1299,
    originalPrice: 2049,
    rating: 4.5,
    reviews: 2,
    image: shortsBlackGreen,
    images: [shortsBlackGreen, shortsBlackOrange, shortsNavyGreen, shortsNavyOrange],
    description: 'Lightweight polyester athletic shorts with laser airflow panels and quick-dry technology. Breathable and comfortable for maximum performance.',
    fabric: 'Lightweight polyester fabric',
    gsm: '180 GSM (ultra-light)',
    fit: 'Athletic performance fit',
    stretch: 'Flexible movement-focused structure',
    features: [
      'Lightweight polyester fabric (180 GSM)',
      'Athletic performance fit',
      'Lightweight, breathable, and comfortable',
      'Laser airflow panels at the back',
      'Flexible movement-focused structure',
      'Breathable and quick-dry fabric',
      'Reflective logo detailing',
    ],
    variants: {
      colors: ['Black Green', 'Black Orange', 'Navy Blue Green', 'Navy Blue Orange'],
      sizes: ['S', 'M', 'L'],
    },
  },
  {
    id: 'void-crystal-shaker',
    name: 'Crystal Shaker',
    category: 'Shaker',
    price: 549,
    originalPrice: 749,
    rating: 5.0,
    reviews: 1,
    image: shakerBlack,
    images: [shakerBlack, shakerBlackAlt, shakerBlue, shakerBlueAlt],
    description: 'Premium 700ml PP material shaker with food-grade safety. Crystal transparent finish with secure flip-top lid and leak-resistant design.',
    capacity: '700 ml',
    material: 'PP (Polypropylene)',
    build: 'Unbreakable and durable design',
    lid: 'Secure flip-top drinking lid',
    features: [
      '700 ml capacity',
      'PP material - food-grade safe',
      'Unbreakable and durable design',
      'Solid and comfortable in hand',
      'Transparent crystal finish',
      'Secure flip-top drinking lid',
      'Leak-resistant design',
      'Easy to clean',
    ],
    variants: {
      colors: ['Charcoal Black', 'Glacier Blue'],
      sizes: ['One Size'],
    },
  },
  {
    id: 'void-anti-odour-socks',
    name: 'Anti-Odour Socks | 2 Pack',
    category: 'Socks',
    price: 599,
    originalPrice: 749,
    rating: 4.5,
    reviews: 2,
    image: socksHero,
    images: [socksHero, socksBlue, socksGrey, socksMixed],
    description: 'Natural anti-odour bamboo fabric blend with soft cushioned support and airflow panels. Stretch fit for all-day comfort and breathability.',
    fabric: 'Bamboo fabric blend',
    comfort: 'Soft cushioned bottom support',
    breathability: 'Airflow panel on the upper section',
    fit: 'Stretch fit for all-day comfort',
    features: [
      'Bamboo fabric blend',
      'Soft cushioned bottom support',
      'Airflow panel on upper section',
      'Stretch fit for all-day comfort',
      'Soft, lightweight, and breathable',
      'Natural anti-odour bamboo fabric',
      'Below ankle-length design',
      'Pack of 2 pairs',
    ],
    variants: {
      colors: ['Black - Black', 'Blue & Blue', 'Grey - Grey', 'Black - Blue', 'Black - Grey', 'Blue - Grey'],
      sizes: ['One Size'],
    },
  },
];

export default products;
