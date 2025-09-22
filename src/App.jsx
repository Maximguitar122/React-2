import React, { useState } from 'react';
import BandInfo from './components/BandInfo';
import ButtonLike from './components/ButtonLike';
import Member from './components/Member';
import MusicList from './components/MusicList';
import Music from './components/Music';
import './App.css';

export default function App() {
  const [likes, setLikes] = useState(0);

  const members = [
    { name: 'Chris Brown', role: 'Vocals' },
    { name: 'Chandler Moore', role: 'Vocals' },
    { name: 'E Edwards', role: 'Electric Guitar' },
    { name: 'Vicent Baynard', role: 'Drummer' },
  ];

  const musicList = [
    { title: 'Graves Into Gardens', year: "2020" },
    { title: 'Praise', year: "2023" },
    { title: 'Lion', year: "2022" },
    { title: 'Yahweh We Love You', year:" 2024" },
  ];

  return (
    <div className="App">

      <h1>Elevation Worship</h1>
      <img src="/public/image1_resized.png"/>
      <img src="/public/image2_resized.png"/>
      <BandInfo
        name="Elevation Worship"
        description="Elevation Worship is a contemporary Christian music group from Charlotte, North Carolina (USA).It was founded in 2007 as part of the ministry of Elevation Church. The band is known for its powerful live performances and songs that are sung in many churches around the world."
      />

      <ButtonLike onLike={() => setLikes(likes + 1)}/>

      <h2>Members of group</h2>
      {members.map(m => (
        <Member key={m.name} name={m.name} role={m.role}/>
      ))}

      <h3>Songs</h3>
      <img src="/public/img.png"/>
      {musicList.map(y => (
        <MusicList key={y.title} title={y.title} year={y.year}/>
      ))}

    </div>
  );
}






