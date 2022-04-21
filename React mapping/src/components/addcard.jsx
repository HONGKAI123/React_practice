import React from 'react';
import Card from './Card';

function addcard(add) {
  return (
    <div>
        <Card 
        key ={add.id}
        cardem = {add.emoji}
        name = {add.name}
       
        mean = {add.meaning} />





    </div>
  )
}

export default addcard