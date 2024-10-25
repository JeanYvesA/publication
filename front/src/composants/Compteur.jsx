import React from 'react'

export default function Compteur(props) {
  return (
      <div> 
          <h1>Bonjour { props.nom }</h1>
          <h2>Bonjour les amis, voici un autre composant.</h2>
          <p>Vous avez { props.age} ans</p>
    </div>
  )
}
