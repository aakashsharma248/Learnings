const initialState = {
    "users": [],
    "moveCount": 0,
}

export default function Reducer (state=initialState, action) {
   if(action.type === "increment"){
    //  state = state.map((item)=>{
    //    return item.id === 0 ? {...item, count: item.count + action.payload || 1} : item
    //  })

    // you can also write simple return keyword instead of using "state" below
    // {
    //     "users":state.users,
    //     "moveCount": state.moveCount+ (action.payload || 1)
    // }
    state= {
        "users":state.users,
        "moveCount": state.moveCount+ (action.payload || 1)
    }
   }
   else if(action.type === "decrement"){
    // state = state.map((item)=>{
    //     return item.id === 0 ? {...item, count: item.count - action.payload || 0} : item
    //   })
    state = {
        "users":state.users,
        "moveCount": state.moveCount- (action.payload || 0)
    }
   }
   else if(action.type === "SET_USER"){
     state = {
        "users": action.payload,
        "moveCount": state.moveCount
     }
   }
   return state;
}