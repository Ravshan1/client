interface reactBI {
    datasources: any[],
    users:any[]
}

const initReactBI: reactBI = {
    datasources: [],
    users:[]
}

// function GetActiveState(state=initReactBI, controllerName:string){
//     for (const key in state) {
//         //This will give key
//           console.log(key);
 
//     } 
// }

export default function reducer(state = initReactBI, action: any) 
{ 

   // let currentState=GetActiveState(state,action.controllerName );

   console.log(action);
    if (action.name=="users") {
        if (action.type === 'CLEAN_'+action.name) {
            state.users = []
        }

        if (action.type === 'ADD_'+action.name) {
            return {
                ...state,
                users: [...state.users, action.item],
            }
        } 

    }


    if (action.name=="datasources") {
        if (action.type === 'CLEAN_'+action.name) {
            state.datasources = []
        }

        if (action.type === 'ADD_'+action.name) {
            return {
                ...state,
                datasources: [...state.datasources, action.item],
            }
        } 
    
    } 

    
    return state
}