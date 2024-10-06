import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem'; // Ensure this import is correct

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
      {Array.isArray(food_list) ? (
        food_list.map((item)=>{
        const imageUrl = `${url}/images/${item.image}`;
        console.log(imageUrl);
          if (category==="All" || category===item.category) {
            return( <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>);
          } return null;
        })
      ) : (
        <p>Loading food items...</p> // Optional loading message
      )}
      </div>
    </div>
  )
}

export default FoodDisplay;
