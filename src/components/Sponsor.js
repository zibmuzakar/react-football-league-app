import React from 'react';

// import data
import { sponsor } from '../data';
import axios from 'axios';

export default class Sponsor extends React.Component {
    state = {
        clubs: [],
        matches: [],
      }
    
      componentDidMount() {
        axios.get(`https://fiveoneo.com/api/club`)
          .then(res => {
            const clubs = res.data;
            this.setState({ clubs });
          });
        axios.get(`https://fiveoneo.com/api/match`)
          .then(res => {
            const matches = res.data;
            this.setState({ matches });
          })
      }
  render(){
    return (
    <div className='px-2 mb-20'>
        {/* <ul>
            { this.state.clubs.map((club, i)=>{
              return(
                <ul key={i}>
                  <li>{club.name}</li>
                  <li>{club.homebase}</li>
                  <li><img className='h-[100px]' src={club.image} alt=''/></li>
                </ul>
              );
            })}
        </ul>
        <div>
          {this.state.matches.map((match, i) => {
            return(
              <div key={i}>
                <div>{match.home_id}</div>
                <div>{match.away_id}</div>
              </div>
            );
          })}
        </div> */}
        <div className='h-[5px] w-full bg-gradient-to-r from-[#1C6DD0] via-[#0575E6] to-[#00F260] mb-8'></div>
        <div className='flex flex-col lg:flex-row items-center lg:justify-between gap-y-4'>
            {sponsor.map((sponsor, i) => {
                return(
                    <div className='gap-x-4' key={i}>
                        <img className='h-[75px]' src={sponsor.img.type} alt='' />
                    </div>
                );
            })}
        </div>
    </div>
  );
}
}