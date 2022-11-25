import { addDoc, collection, getDocs} from "firebase/firestore"
import {database} from '../../firebase/firebaseConfi';
import { orderTypes } from "../types/orderTypes";

const collectionOrder = 'order';

export const actionGetOrderAsync = () => {
    return async (dispatch) => {
        const orderCollection = collection(database, collectionOrder);
        const querySnapshot = await getDocs(orderCollection);
        const order = [];
        try {
            querySnapshot.forEach((doc) => {
                order.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionGetOrderSync(order));
        }
    }
}

const actionGetOrderSync = (order) => {
    return {
        type: orderTypes.ORDER_GET,
        payload: {
            order: order
        }
    }
}

export const actionAddOrderAsync = (order) => {
    return async (dispatch) => {
      try {
        const orderCollection = collection(database, collectionOrder);
        const docs = await addDoc(orderCollection, order);
        dispatch(actionAddOrderSync({ id: docs.id, ...order }));
      } catch (error) {
        console.log(error);
        dispatch(actionAddOrderSync({}));
      }
    };
  };
  
  const actionAddOrderSync = (order) => {
    return {
      type: orderTypes.ORDER_ADD,
      payload: order,
    };
  };
