import React from 'react'
import Compteur from './composants/Compteur';

export default function App() {
    const age = 10;
    const nom = 'Pierre';
  return (
      <div className='App'>
          <h2>Voici un autre composant dans un autre fichier.</h2>
          <p>Bonjour, il a {age} ans</p>  
          {
              age >18 ? <p>Vous êtes majeur</p> : <p>Vous êtes mineur</p>
          }
          <Compteur age={age} nom={nom} />
      </div>
  )
}
