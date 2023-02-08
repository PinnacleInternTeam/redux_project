const counterReducer = (state = 100 ,action)=>
{
    switch(action.type){
        case "increment":
            return state + 1
        case "dec":
            return state - 1
       case "add":
            return  state + action.payload 
    default : 
        return state;
    }
}
export default counterReducer;