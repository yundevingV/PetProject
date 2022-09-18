import { configureStore , createSlice } from '@reduxjs/toolkit'

let players = createSlice({
    name : 'playersList',
    initialState :  [  {
      id : 0,
      name : 'Mohamed Salah',
      count : 1
    },
    {
      id : 1,
      name : 'Sadio Mane',
      count: 1
    }
    ]
})

export default configureStore({
    reducer: {
      players : players.reducer
     }
  }) 
