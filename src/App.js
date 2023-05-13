import './App.css';
import React from 'react';
import List from './components/List';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.png'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'

const data = [{
  title:'AI + RPA is what we do',
  paragraph: 'Future-Proof your business. Drive efficiency, profitability and deliver on customer experience',
  buttonText: 'AI + RPA Automation',
  image: img1
},
{
  title:'Make Bolder Choices',
  paragraph: 'Digital focused strategies to realize market-changing ideas',
  buttonText: 'Build Better Apps',
  image: img2
},
{
  title:'Innovate with Speed',
  paragraph: 'Create higher quality software, deliver on customer expectations and business goals',
  buttonText: 'DevOps',
  image: img3
},
{
  title:'Embrace Cloud',
  paragraph: 'With Cloud-First accelerate innovation and optimize performance',
  buttonText: 'Cloud Services',
  image:img4
},
]

function App() {
  
  return (
    <div className="collaborate">
      <h4>Let's Collaborate</h4>
      <List data={data}/>
    </div>
  );
}

export default App;
