export const increment = ()=>{
    return{
        type:'increment'
    }
}
export const decrement = ()=>{
    return{
        type:'dec'
    }
}
export const add = (x)=>{
    
    return{
        
        type:'add',
        payload :x
    }
}