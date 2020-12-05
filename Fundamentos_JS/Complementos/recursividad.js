/*
 13 /4
 13 - 4 = 9   1
 9 - 4 = 5   1
 5 - 4 = 1   1
 1 - 4 = -3  0
*/

// Recursividad
function divisionEntera(dividiendo, divisor){
    if(dividiendo < divisor){
        return 0
    }
    return 1+ divisionEntera(dividiendo-divisor, divisor) 
}