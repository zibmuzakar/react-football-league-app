// logo club
import Adios from './assets/img/logo/adiosfc.png';
import Alkanara from './assets/img/logo/alkanara.png';
import Andir from './assets/img/logo/andirunited.png';
import Bagundal from './assets/img/logo/bagundal.png';
import Mengbal from './assets/img/logo/bandungmengbal.png';
import Pride from './assets/img/logo/bandungpride.png';
import Banzai from './assets/img/logo/banzai.png';
import Baraya from './assets/img/logo/barayajabar.png';
import Besitua from './assets/img/logo/besitua.png';
import Bonesc from './assets/img/logo/bonesc.png';
import Buciper from './assets/img/logo/buciper.png';
import Expose from './assets/img/logo/expose.png';
import Noname from './assets/img/logo/noname.png';
import Ortufc from './assets/img/logo/ortufc.png';
import Popthree from './assets/img/logo/popthree.png';
import Prima from './assets/img/logo/primafc.png';
import World from './assets/img/logo/worldyoungunited.png';
import Xtujuhbelas from './assets/img/logo/x17.png';

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

import NewsAA from './assets/img/news/news1.jpg';
import NewsBB from './assets/img/news/news2.jpg';
import NewsCC from './assets/img/news/news3.jpg';
import NewsDD from './assets/img/news/news4.jpg';
import NewsEE from './assets/img/news/news (5).jpg';
import NewsFF from './assets/img/news/news (6).jpg';

export const navigation = [
    {
      name: 'home',
      href: '/',
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
        name: 'Adios FC',
        logo: <Adios />,
    },
    {
        name: 'Alkanara',
        logo: <Alkanara />,
    },
    {
        name: 'Andir United',
        logo: <Andir />,
    },
    {
        name: 'Bagundal',
        logo: <Bagundal />,
    },
];

export const matches = [
    {
        game: 1,
        home: 'Adios FC',
        logoHome: <Adios />,
        away: 'Alkanar',
        logoAway: <Alkanara />,
        vanue: 'GBLA',
        date: '1 Januari 2022',
        time: '20:00 WIB',
        league: <Logo />
    },
    {
        game: 1,
        home: 'Andir United',
        logoHome: <Andir />,
        away: 'Bagundal',
        logoAway: <Bagundal />,
        vanue: 'GBLA',
        date: '1 Januari 2022',
        time: '20:00 WIB',
        league: <Logo />
    },
    {
        game: 1,
        home: 'Bandung Mengbal',
        logoHome: <Mengbal />,
        away: 'Bandung Pride',
        logoAway: <Pride />,
        vanue: 'Jalak Harupan',
        date: '1 Januari 2022',
        time: '20:00 WIB',
        league: <Logo />
    },
    {
        game: 2,
        home: 'Banzai',
        logoHome: <Banzai />,
        away: 'Baraya Jabar',
        logoAway: <Baraya />,
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
    home: 'Adios FC',
    logoHome: <Adios />,
    away: 'Baraya Jabar',
    logoAway: <Baraya />,
    score: '2 - 0',
  },
  {
    date: '20/09/2022',
    time: '21:00',
    league: <Logo />,
    home: 'Alkanara',
    logoHome: <Alkanara />,
    away: 'Banzai',
    logoAway: <Banzai />,
    score: '2 - 3',
  },
  {
    date: '20/09/2022',
    time: '21:00',
    league: <Logo />,
    home: 'Andir United',
    logoHome: <Andir />,
    away: 'Bandung Pride',
    logoAway: <Pride />,
    score: '2 - 1',
  },
  {
    date: '20/09/2022',
    time: '21:00',
    league: <Logo />,
    home: 'Bagundal',
    logoHome: <Bagundal />,
    away: 'Bandung Mengbal',
    logoAway: <Mengbal />,
    score: '2 - 0',
  },
];

export const tables = [
  {
    club: 'Adios',
    logo: <Adios />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Alkanara',
    logo: <Alkanara />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Andir United',
    logo: <Andir />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Bagundal',
    logo: <Bagundal />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'BDG Mengbal',
    logo: <Mengbal />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'BDG Pride',
    logo: <Pride />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Banzai',
    logo: <Banzai />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Baraya Jabar',
    logo: <Baraya />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Besi Tua',
    logo: <Besitua />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'B One SC',
    logo: <Bonesc />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Buciper',
    logo: <Buciper />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Expose',
    logo: <Expose />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'No Name',
    logo: <Noname />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Ortu FC',
    logo: <Ortufc />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Pop Three',
    logo: <Popthree />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'Prima FC',
    logo: <Prima />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'WYU',
    logo: <World />,
    pl: 0,
    gd: 0,
    pts: 0,
  },
  {
    club: 'X-17',
    logo: <Xtujuhbelas />,
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

export const heroNews = [
  {
    title: "FPL team news: Ten Hag reacts to Casemiro signing",
    image: <NewsAA />,
    date: "Minggu, 12 Januari 2022",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title: "Rashford and Sancho strike down Liverpool",
    image: <NewsBB />,
    date: "Senin, 13 Februari 2022",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title: "Man City and Newcastle share six-goal thriller",
    image: <NewsCC />,
    date: "Selasa, 14 Maret 2022",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title: "Ten Hag rethink can put Liverpool on back foot",
    image: <NewsDD />,
    date: "Rabu, 15 April 2022",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title: "Ten Hag rethink can put Liverpool on back foot",
    image: <NewsEE />,
    date: "Rabu, 15 April 2022",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title: "Ten Hag rethink can put Liverpool on back foot",
    image: <NewsFF />,
    date: "Rabu, 15 April 2022",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
]