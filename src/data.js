import Arsenal from './assets/img/logo/arsenal.png';
import Mancity from './assets/img/logo/mancity-01.png';
import Manutd from './assets/img/logo/manutd-01.png';
import Chelsea from './assets/img/logo/chelsea-01.png';
import Brentford from './assets/img/logo/brentford-01.png';
import Burnley from './assets/img/logo/burnley-01.png';
import Everton from './assets/img/logo/everton-01.png';
import Watford from './assets/img/logo/watford-01.png';
import Wolves from './assets/img/logo/wolfer-01.png';
import Logo from './assets/img/logo/logo-bpl.png';
import Ake from './assets/img/players/ake.png';
import Auba from './assets/img/players/auba.png';
import Bernardo from './assets/img/players/bernardo.png';
import Bruno from './assets/img/players/bruno.png';
import Tami from './assets/img/players/tami.png';
import Trent from './assets/img/players/trent.png';
import NewsA from './assets/img/news/news-1.JPG';
import NewsB from './assets/img/news/news-2.png';
import NewsC from './assets/img/news/news-3.png';
import NewsD from './assets/img/news/news-4.jpg';
import NewsE from './assets/img/news/news-5.png';
import GalA from './assets/img/gallery/gall (1).jpg';
import GalB from './assets/img/gallery/gall (2).jpg';
import GalC from './assets/img/gallery/gall (3).jpg';
import GalD from './assets/img/gallery/gall (4).jpg';
import GalE from './assets/img/gallery/gall (5).jpg';
import GalF from './assets/img/gallery/gall (6).jpg';
import PersibHome from './assets/img/product/persib1.png';
import PersibAway from './assets/img/product/persib2.png';
import PersibThrid from './assets/img/product/persib3.png';
import PersibFour from './assets/img/product/persib4.png';
import PersibFive from './assets/img/product/persib5.png';
import PersibHodi from './assets/img/product/hoodi.png';
import PersibPants from './assets/img/product/pants.png';
import PersibTshirt from './assets/img/product/tshirt.png';
import SponsorA from './assets/img/sponsor/sponsor (1).png';
import SponsorB from './assets/img/sponsor/sponsor (2).png';
import SponsorC from './assets/img/sponsor/sponsor (3).png';
import SponsorE from './assets/img/sponsor/sponsor (5).png';

export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'news',
      href: 'news',
    },
    {
      name: 'fixtures',
      href: 'fixtures',
    },
    {
      name: 'results',
      href: 'results',
    },
    {
      name: 'tables',
      href: 'tables',
    },
    {
      name: 'statistics',
      href: 'statistics',
    },
    {
      name: 'clubs',
      href: 'clubs',
    },
    {
      name: 'store',
      href: 'store',
    },
];

export const clubs = [
    {
        name: 'Arsenal FC',
        logo: <Arsenal />,
    },
    {
        name: 'Chelsea FC',
        logo: <Chelsea />,
    },
    {
        name: 'Manchester City',
        logo: <Mancity />,
    },
    {
        name: 'Manchester United',
        logo: <Manutd />,
    },
];

export const matches = [
    {
        game: 1,
        home: 'Manchester United',
        logoHome: <Manutd />,
        away: 'Arsenal FC',
        logoAway: <Arsenal />,
        vanue: 'GBLA',
        date: '1 Januari 2022',
        time: '20:00 WIB',
        league: <Logo />
    },
    {
        game: 1,
        home: 'Chelsea FC',
        logoHome: <Chelsea />,
        away: 'Arsenal FC',
        logoAway: <Arsenal />,
        vanue: 'GBLA',
        date: '1 Januari 2022',
        time: '20:00 WIB',
        league: <Logo />
    },
    {
        game: 1,
        home: 'Manchester City',
        logoHome: <Mancity />,
        away: 'Manchester United',
        logoAway: <Manutd />,
        vanue: 'Jalak Harupan',
        date: '1 Januari 2022',
        time: '20:00 WIB',
        league: <Logo />
    },
    {
        game: 2,
        home: 'Chelsea FC',
        logoHome: <Chelsea />,
        away: 'Manchester City',
        logoAway: <Mancity />,
        vanue: 'Jalak Harupat',
        date: '1 Januari 2022',
        time: '20:00 WIB',
        league: <Logo />
    },
];

export const results = [
  {
    date: '20/09/2022',
    time: '21:00',
    league: <Logo />,
    home: 'Arsenal FC',
    logoHome: <Arsenal />,
    away: 'Wolverhampton',
    logoAway: <Wolves />,
    score: '2 - 0',
  },
  {
    date: '20/09/2022',
    time: '21:00',
    league: <Logo />,
    home: 'Everton',
    logoHome: <Everton />,
    away: 'Watford',
    logoAway: <Watford />,
    score: '2 - 3',
  },
  {
    date: '20/09/2022',
    time: '21:00',
    league: <Logo />,
    home: 'Burnley',
    logoHome: <Burnley />,
    away: 'Brentford',
    logoAway: <Brentford />,
    score: '2 - 1',
  },
  {
    date: '20/09/2022',
    time: '21:00',
    league: <Logo />,
    home: 'Manchester United',
    logoHome: <Manutd />,
    away: 'Chelsea FC',
    logoAway: <Chelsea />,
    score: '2 - 0',
  },
];

export const tables = [
  {
    club: 'Arsenal',
    logo: <Arsenal />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Chelsea',
    logo: <Chelsea />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Man United',
    logo: <Manutd />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Man City',
    logo: <Mancity />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Brentford',
    logo: <Brentford />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Burnley',
    logo: <Burnley />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Everton',
    logo: <Everton />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Watford',
    logo: <Watford />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Wolves',
    logo: <Wolves />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
];

export const topScore = [
  {
    photo: <Auba />,
    name: 'Aubameyang',
    goal: 5,
    club: 'Arsenal'
  },
  {
    photo: <Bernardo />,
    name: 'Bernardo',
    goal: 3,
    club: 'Manchester City'
  },
  {
    photo: <Bruno />,
    name: 'Bruno Silva',
    goal: 2,
    club: 'Manchester United'
  },
];

export const topAssist = [
  {
    photo: <Trent />,
    name: 'Trent Arnold',
    assist: 6,
    club: 'Liverpool'
  },
  {
    photo: <Tami />,
    name: 'Tami Abraham',
    assist: 4,
    club: 'Chelsea'
  },
  {
    photo: <Ake />,
    name: 'Nathan Ake',
    assist: 3,
    club: 'Manchester City'
  },
];

export const news = [
  {
    subtitle: 'Club News',
    title: 'Inspires Young people planning for greener future with PL Inspires',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    img: <NewsA />,
    date: '3 days ago'
  },
  {
    subtitle: 'Club News',
    title: 'News Whats new in 2022/23: Nike Flight ball',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    img: <NewsB />,
    date: '3 days ago'
  },
  {
    subtitle: 'Club News',
    title: 'Nandy: Premier League Kicks is a lifeline for young people',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    img: <NewsC />,
    date: '3 days ago'
  },
  {
    subtitle: 'Club News',
    title: 'Test your knowledge of Americans in the Premier League',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    img: <NewsD />,
    date: '3 days ago'
  },
  {
    subtitle: 'Club News',
    title: 'FPL experts teams: Havertz will be Chelsea main man',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    img: <NewsE />,
    date: '3 days ago'
  },
];

export const gallery = [
  {
    img: <GalB />,
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    img: <GalA />,
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    img: <GalC />,
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    img: <GalD />,
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    img: <GalE />,
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    img: <GalF />,
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
];

export const product = [
  {
    title: 'Jersey Home 2022/23',
    img: <PersibHome />,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    price: 600000,
    oldPrice: 700000,
  },
  {
    title: 'Jersey Away 2022/23',
    img: <PersibAway />,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    price: 600000,
    oldPrice: 700000,
  },
  {
    title: 'Jersey Alternate 2022/23',
    img: <PersibThrid />,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    price: 600000,
    oldPrice: 700000,
  },
  {
    title: 'Jersey Traning Home',
    img: <PersibFour />,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    price: 600000,
    oldPrice: 700000,
  },
  {
    title: 'Jersey Traning Away',
    img: <PersibFive />,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    price: 600000,
    oldPrice: 700000,
  },
  {
    title: 'PERSIB TRX-04 WHITE/NEON GREEN',
    img: <PersibHodi />,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    price: 600000,
    oldPrice: 700000,
  },
  {
    title: 'TSHIRT BASIC PERSIB ABU MISTY',
    img: <PersibTshirt />,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    price: 600000,
    oldPrice: 700000,
  },
  {
    title: 'PERSIB FC TRAINER PANTS',
    img: <PersibPants />,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    price: 600000,
    oldPrice: 700000,
  },
];

export const sponsor = [
  {
    name: 'Lenovo',
    img: <SponsorE />,
  },
  {
    name: 'Castrol',
    img: <SponsorA />,
  },
  {
    name: 'Chevrolet',
    img: <SponsorC />,
  },
  {
    name: 'Samsung',
    img: <SponsorB />,
  },
];