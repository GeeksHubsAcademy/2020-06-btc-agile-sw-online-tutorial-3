//Palindromo
//Hace el reverso de la string de entrada
//'' -> ''       (T)
//a  -> a        (T)
//bu -> ub       (F)
//qwe -> ewq     (F)
//aba -> aba     (T)
//hola -> aloh   (F)
//anna -> anna   (T)
//civic -> civic (T)
//kayak -> kayak (T)
export function palindromo(input:string) : boolean {
    var res = "";

    var length = input.length - 1;
    for(var i = length; i >= 0 ;i--) 
        res += input.charAt(i);

    //return res === input;
    return false;
}