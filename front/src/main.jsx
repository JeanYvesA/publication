import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./main.css";


// const elementJsx = <h2>Voici un titre</h2>

// const Application = () => {
//   return <div>
//     <h1>Voici un composant</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis ipsa obcaecati velit quisquam beatae quia, mollitia accusantium perspiciatis dicta natus alias et reiciendis veritatis. Libero provident voluptatum modi voluptas!</p>
//   </div>
  
// }

// class Application extends React.Component{
//   render(){
//     return <div>
//          <h1>Voici un composant en classe</h1>
//        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis ipsa obcaecati velit quisquam beatae quia, mollitia accusantium perspiciatis dicta natus alias et reiciendis veritatis. Libero provident voluptatum modi voluptas!</p>
//      </div>
//   }
// }

// ReactDOM.createRoot(document.getElementById("root")).render(elementJsx)
ReactDOM.createRoot(document.getElementById("root")).render(<App/>)

          
      