import { useState } from "react"
export default function App() {
  const [level, setLevel] = useState(0);

  const foodwatermalon = () => {
    setLevel(level + 5);
    checkLevelAndZoom();
  };
  const foodpumgin = () => {
    setLevel(level + 10);
    checkLevelAndZoom();
  };
  const foodglass = () => {
    setLevel(level + 15);
    checkLevelAndZoom();
  };
  const newImageUrl = 'https://assets.ch3plus.com/newsch/2024/09/928109319261.jpg'
  function checkLevelAndZoom() {
    if (level == 30) {
      document.getElementById('hippo').style.width = '300px';
    } else if (level == 60) {
      document.getElementById('hippo').style.width = '400px';
    } else if (level == 90) {
      document.getElementById('hippo').style.width = '500px';
    } else if (level >= 100) {
      document.getElementById('hippo').src = newImageUrl;
    }

  };

  return (
    <div className="container">
      <h1>หมูเด้ง: level {level}</h1>
      <img src="https://www.khaosod.co.th/wpapp/uploads/2024/09/Nong-Moo-Deng4548-5.jpg" alt="หมูเด้ง" width='250px' id="hippo" />
      <p>คลิกที่ปุ่มเพื่อให้อาหารหมูเด้ง!</p>
      <h2>
        <button onClick={foodwatermalon}><img src="https://www.disthai.com/images/content/original-1696393000736.jpg" alt="แตงโม" width='200px' /></button>
        <button onClick={foodpumgin}><img src="https://www.disthai.com/images/content/original-1634722656944.jpg" alt="ฟักทอง" width='200px' /></button>
        <button onClick={foodglass}><img src="https://www.chokchai.go.th/wp-content/uploads/2022/08/image-photo2-95902.jpg" alt="หญ้า" width='200px' /></button>
      </h2>

    </div>
  );
}