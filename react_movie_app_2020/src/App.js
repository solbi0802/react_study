import React from 'react'
import PropTypes from "prop-types"

function Food({name, picture,rating}) {
  const imgStyle = {
    width: '200px',
    height:'200px'
  }
  return <div>
    <h1>I Love {name} </h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} style={imgStyle}/>
  </div>
  
}

const foodILike = [
  {
    id:1,
    name:"Chicken",
    image:"https://www.inspiredtaste.net/wp-content/uploads/2017/10/Roasted-Chicken-with-Lemon-Recipe-1200.jpg",
    rating:5
  },
  {
    id:2,
    name:"Kimchi",
    image:"https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
    rating:4.9
  },
  {
    id:3,
    name:"Cake",
    image:"https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/16730-beckys-butter-cake-600x600.jpg?ext=.jpg",
    rating:3.4
  },
  {
    id:4,
    name:"Kimbab",
    image:"http://www.nongsaro.go.kr/ps/img/interabang/num207/headerImg.jpg",
    rating:4.7
  },
]

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.picture}/>
// }

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  //number or undefined
  rating:PropTypes.number,
}


function App() {
  return (
    <div>
      <h1> Hello World!</h1> 
      {foodILike.map(dish => 
      <Food key={dish.id} name= {dish.name} picture={dish.image} rating={dish.rating}/>
      )}
      </div>
  )
}

export default App;
