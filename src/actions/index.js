export const submit = input => ({type:'SUBMIT', payload:input})
export const deleteTask  = id => ({type:'DELETE_TASK', payload: id})
export const tagCompleted = id => ({type:'TAG_COMPLETE', payload: id})