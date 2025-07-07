import React, { useState } from 'react';
import './App.css';


const wallpapers = [
  'https://wallpapercave.com/wp/wp14807116.webp',
  'https://wallpapercave.com/wp/wp12575573.jpg',
  'https://wallpapercave.com/wp/wp15304313.jpg',
  'https://wallpapercave.com/wp/wp13749827.jpg',
  'https://wallpapercave.com/wp/wp13749720.jpg',
  'https://wallpapercave.com/wp/wp13749674.jpg',
  'https://wallpapercave.com/w400/wp13749629.jpg',
   'https://wallpapercave.com/w400/wp13749620.jpg',
  'https://wallpapercave.com/w400/wp13749620.jpg',
   'https://wallpapercave.com/w400/wp11532866.jpg',
   'https://wallpapercave.com/wp/wp13749669.jpg',
  'https://wallpapercave.com/wp/wp12874119.jpg',
   'https://wallpapercave.com/w400/wp13749616.jpg',
   'https://wallpapercave.com/w400/wp13749614.jpg',
   'https://wallpapercave.com/w400/wp11532866.jpg',
   'https://wallpapercave.com/w400/wp13749621.jpg',
   'https://wallpapercave.com/w400/wp5190351.jpg',
   'https://wallpapercave.com/w400/wp5493477.jpg',
   'https://wallpapercave.com/w400/wp13749674.jpg',
   'https://wallpapercave.com/wp/wp13749677.jpg',
   'https://wallpapercave.com/w400/wp12575554.jpg',
   'https://wallpapercave.com/w400/wp11532869.jpg',
   'https://wallpapercave.com/w400/wp13749648.jpg',
   'https://wallpapercave.com/w400/wp12933462.jpg',
   'https://wallpapercave.com/w400/wp12575588.jpg',
   'https://wallpapercave.com/w400/wp9020261.jpg',
   'https://wallpapercave.com/wp/wp12575578.jpg',
   'https://wallpapercave.com/w400/wp12852877.jpg',
   'https://wallpapercave.com/w400/wp12575558.jpg',
   'https://wallpapercave.com/wp/wp12575554.jpg56',
   'https://wallpapercave.com/w400/wp12825797.jpg',
   'https://wallpapercave.com/w400/wp12874099.jpg',
   'https://wallpapercave.com/w400/wp9040797.jpg',
   'https://wallpapercave.com/w400/wp12852979.jpg',
   'https://wallpapercave.com/w400/wp12575558.jpg',
   'https://wallpapercave.com/w400/wp5190350.jpg',
   'https://wallpapercave.com/w400/wp12874070.jpg',
   'https://wallpapercave.com/w400/wp12874119.jpg',
   'https://wallpapercave.com/w400/wp12874065.jpg',
   'https://wallpapercave.com/w400/wp4857059.jpg',
   'https://wallpapercave.com/w400/wp12874065.jpg',
   'https://wallpapercave.com/w400/wp11532866.jpg',
   'https://wallpapercave.com/w400/wp12874087.jpg',
   'https://wallpapercave.com/w400/wp12874065.jpg',
   'https://wallpapercave.com/w400/wp12852877.jpg',
   'https://wallpapercave.com/w400/wp10254816.jpg',






];

function App() {
  const [index, setIndex] = useState(0);

  const showNext = () => {
    setIndex((prev) => (prev + 1) % wallpapers.length);
  };

const downloadWallpaper = () => {
  const imageUrl = wallpapers[index];
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = `mahi-wallpaper-${index + 1}`; // Optional: name the file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



  return (
    <div className="app">
      <h1>🧢 Mahi Wallpaper Gallery</h1>
      <img src={wallpapers[index]} alt="Mahi" className="wallpaper" />
      <div className="btn-group">
        <button onClick={showNext}>Next 🖼️</button>
        <button onClick={downloadWallpaper}>Download ⬇️</button>
      </div>
    </div>
  );
}

export default App;
