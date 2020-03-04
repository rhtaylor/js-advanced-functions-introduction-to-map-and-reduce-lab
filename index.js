function mapToNegativize(ary){
    const newAry = [];
    for (let i=0; i < ary.length; i++){
        let x = (ary[i] * -1);
        newAry.push(x); 
        }
    return newAry
} 

function mapToNoChange(ary){
    return ary
} 

function mapToDouble(ary){
    const newAry = [];
    for( let i =0; i < ary.length; i++){
        let x = (ary[i] * 2);
        newAry.push(x); 
    }
    return newAry
} 

function mapToSquare(ary){ 
    
    const newAry = [];
    for (let i =0; i < ary.length; i++ ){
            let y = (ary[i] ** 2); 
            
            newAry.push(y);
        } 
        
        return newAry
} 

function reduceToTotal(ary, startingPoint = 0){
    let num = startingPoint; 
        for( let i = 0; i < ary.length; i++){ 
            debugger
            num += ary[i] 
        }
    return num;
} 

function reduceToAllTrue(ary){
    let x = false; 
    for(let i =0; i < ary.length; i++){
         if (Boolean(ary[i]) == false){ return x = false } 
         else { x = true } ; 
    } 
    return x
} 

function reduceToAnyTrue(arg){
        let x = true; 
        for(let i=0; i < arg.length; i++){
            if (Boolean(arg[i]) == true){ return x = true}
            else { x = false } 
        } 
        return x 
}