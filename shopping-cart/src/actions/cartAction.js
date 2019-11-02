import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from './actionType/actionType'
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
export const increment = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}
export const decrement = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }

}