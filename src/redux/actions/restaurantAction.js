import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import {database} from '../../firebase/firebaseConfi';
import { foodTypes, restaurantTypes } from "../types/restaurantTypes";

const collectionName = 'restaurants';
const collectionFood = 'food';

export const actionGetRestaurantAsync = () => {
    return async (dispatch) => {
        const restaurantCollection = collection(database, collectionName);
        const querySnapshot = await getDocs(restaurantCollection);
        const restaurant = [];
        try {
            querySnapshot.forEach((doc) => {
                restaurant.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionGetRestaurantSync(restaurant));
        }
    }
}

const actionGetRestaurantSync = (restaurant) => {
    return {
        type: restaurantTypes.RESTAURANT_GET,
        payload: {
            restaurant: restaurant
        }
    }
}

// export const getSingleRestaurantAsync = (restaurantId) => {
//     return (dispatch) => {
//         const docRef = doc(database, collectionName, restaurantId)
//         getDoc(docRef)
//             .then(docSnapshot => {
//                 if (docSnapshot.exists()) {
//                     dispatch(getSingleRestaurantSync(docSnapshot.data()))
//                 } else {
//                     console.log("No such restaurant!");
//                 }
//             })
//             .catch(error => {
//                 console.log(error);
//                 dispatch(getSingleRestaurantSync({}))
//             })
//     }

// }

// export const getSingleRestaurantSync = (restaurant) => {
//     return {
//         type: restaurantTypes.RESTAURANT_SINGLE_GET,
//         payload: {
//             restaurant,
//         }
//     }
// }
 
export const actionFilterRestaurantAsync = (searchParam, searchValue) => {
    return async (dispatch) => {
        const restaurantCollection = collection(database, collectionName)
        const r = query(restaurantCollection, where(searchParam, "==", searchValue));
        const restaurants = [];
        try {
            const querySnapshot= await getDocs(r);
            querySnapshot.forEach((doc) => {
                restaurants.push({
                id: doc.id,
                ...doc.data(),
                });
            });
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(actionFilterRestaurantSync(restaurants))
        }
    }
}

const actionFilterRestaurantSync = (restaurant) => {
    return {
        type: restaurantTypes.RESTAURANT_FILTERED,
        payload: {
            restaurant: restaurant
        }
    };
};

export const actionGetFoodAsync = () => {
    return async (dispatch) => {
        const foodCollection = collection(database, collectionFood);
        const querySnapshot = await getDocs(foodCollection);
        const food = [];
        try {
            querySnapshot.forEach((doc) => {
                food.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionGetFoodSync(food));
        }
    }
}

const actionGetFoodSync = (food) => {
    return {
        type: foodTypes.FOOD_GET,
        payload: {
            food: food
        }
    }
}

export const actionFilterAsync = (searchParam) => {
    return async (dispatch) => {
      const foodCollection = collection(database, collectionFood);
      const querySnapshot = await getDocs(foodCollection);
      const food = [];
      try {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          food.push({
            id: doc.id,
            ...doc.data(),
          });
          //   console.log(doc.id, " => ", doc.data());
        });
    
        const filterdFood = food.filter((item) =>
          item.name.toLowerCase().includes(searchParam.toLowerCase())
        );
        dispatch(actionFilterFoodSync(filterdFood));
      } catch (error) {
        console.error(error);
        dispatch(actionFilterFoodSync([]));
      }
    };
  };

  const actionFilterFoodSync = (food) => {
    return {
        type: foodTypes.FOOD_FILTERED,
        payload: {
            food: food 
        }
    };
};

export const actionAddRestaurantAsync = (restaurant) => {
    return async (dispatch) => {
      try {
        const restaurantCollection = collection(database, collectionName);
        const docs = await addDoc(restaurantCollection, restaurant);
        dispatch(actionAddRestaurantSync({ id: docs.id, ...restaurant }));
      } catch (error) {
        console.log(error);
        dispatch(actionAddRestaurantSync({}));
      }
    };
  };
  
  const actionAddRestaurantSync = (restaurant) => {
    return {
      type: restaurantTypes.RESTAURANT_ADD,
      payload: restaurant,
    };
  };