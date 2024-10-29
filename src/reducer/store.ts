import { configureStore } from '@reduxjs/toolkit'

export function manageStore(){ // store 만들어주는 기능'
    return configureStore({
        reducer: {
         }
    })

  }

  const store = manageStore();



  export default store;