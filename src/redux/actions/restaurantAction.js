import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
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

export const actionFilterFoodAsync = (searchParam, searchValue) => {
    return async (dispatch) => {
        const foodCollection = collection(database, collectionFood)
        const f = query(foodCollection, where(searchParam, "==", searchValue));
        const food = [];
        try {
            const querySnapshot= await getDocs(f);
            querySnapshot.forEach((doc) => {
                food.push({
                id: doc.id,
                ...doc.data(),
                });
            });
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(actionButtonFoodSync(food))
        }
    }
}

const actionButtonFoodSync = (food) => {
    return {
        type: foodTypes.FOOD_BUTTON,
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

  export const actionDeleteRestAsync =(restaurant) => {
    return  async (dispatch) => {
        const restaurantRef = doc(database, collectionName, restaurant.id)
        try {
            await deleteDoc(restaurantRef);
            dispatch(actionDeleteRestSync(restaurant))
        } catch (error) {
            console.log(error);
            dispatch(actionDeleteRestSync({
                error: true,
                errorMessage: error.message
            }))
        }        
    }
}

const actionDeleteRestSync = (restaurant) => {
    return {
        type: restaurantTypes.RESTAURANT_DELETE,
        payload: {id: restaurant.id}
    }
}