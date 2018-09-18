const dummyState = {
    todos: []
}


export const reducer = (state = dummyState ,action) => {
    console.log(state);
    console.log(action);
    switch(action.type){
        case 'SUBMIT':
            return{
                todos:[...state.todos,{ value: action.payload, completed: false, id: Date.now()}]
            } 
        case 'DELETE_TASK':            
            return{
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }    
        case 'TAG_COMPLETE':
            let temp = state.todos.map(todo => {
                if(todo.id === action.payload){
                    todo.completed = !todo.completed;
                    return todo
                }else{
                    return todo
                }})
                
            return{
                todos: temp
            }    
        default:
        return state
    }
}
