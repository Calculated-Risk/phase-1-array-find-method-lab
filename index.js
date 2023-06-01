// code your solution here

function superbowlWin(recordArray){
    let winner = recordArray.find(record => record.result === 'W');
    if (winner){
        return winner.year 
    }else{
        return undefined;
    }
    
}






