import React from 'react';

const Sum = React.memo(({number})=>{

    function CalculateSum(){
        let sum = 0;

        for(let i = 0; i<=number; i++){
            sum += i;
        }
        return sum;
    }

    let total = CalculateSum();

    return (
        <h1>This is my total Sum: {total}</h1>
    )

});

export default Sum;