import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { nodeApi } from './../services/nodeApi'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import cartReducer from './cartSlice'
const reducers = combineReducers({
  [nodeApi.reducerPath]: nodeApi.reducer,
  cart: cartReducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['nodeApi']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const apiStore = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(nodeApi.middleware)
})

setupListeners(apiStore.dispatch)
