import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { log } from 'console';
import type { RootState } from 'store'

// Define a type for the slice state
export interface MenuType {
    id : number;
    type : string;
    name : string;
    price : number;
    url : string;
    quantity : number;
}

export interface CounterState {
  cartItem : Array<MenuType>
  cartTotalQuantity : number
  cartTotalAmount : number

}

// Define the initial state using that type
const initialState: CounterState = {
  cartItem : [],
    cartTotalQuantity : 0,
    cartTotalAmount : 0
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart(state, action){
        state.cartItem.push(action.payload)
        state.cartTotalQuantity += 1
        state.cartTotalAmount += action.payload.price

        
    },
    increaseItem(state, action){
        const item = state.cartItem.findIndex(
            cartItem => cartItem.id === action.payload
        )
        state.cartItem[item].quantity += 1
        state.cartTotalAmount += state.cartItem[item].price
        state.cartTotalQuantity += 1
    },
    decreaseItem(state, action){
        const item = state.cartItem.findIndex(
            cartItem => cartItem.id === action.payload
        )

        const removedItem = state.cartItem.filter(
            item => item.id !== action.payload
        )

        if(state.cartItem[item].quantity > 1){
            state.cartItem[item].quantity -= 1
            state.cartTotalAmount -= state.cartItem[item].price
            state.cartTotalQuantity -= 1


        } else if(state.cartItem[item].quantity == 1) {    
            state.cartTotalAmount -= state.cartItem[item].price
            state.cartItem = removedItem
            state.cartTotalQuantity -= 1
        }
    },
    removeItem(state, action){
        const removedItem = state.cartItem.filter(
            item => item.id !== action.payload
        )

        const item = state.cartItem.findIndex(
            cartItem => cartItem.id === action.payload
        )

        const total = state.cartItem[item].price * state.cartItem[item].quantity
        console.log(state.cartItem[item].quantity);
        
        state.cartTotalQuantity -= state.cartItem[item].quantity
        state.cartTotalAmount -= total
        state.cartItem = removedItem

    }

  }
})

export const { addToCart, decreaseItem, increaseItem, removeItem } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer