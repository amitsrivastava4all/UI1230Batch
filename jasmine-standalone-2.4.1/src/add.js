function add(){
    var sum = 0;
    for(var i = 0 ; i<arguments.length; i++){
        if(typeof arguments[i]==="function"){
            sum = sum + arguments[i]();
        }
        else
        if(typeof arguments[i]==="object"){
            if(arguments[i] instanceof Array){
                var array = arguments[i];
                for(var j = 0; j<array.length; j++){
                    if(typeof array[j]==="function"){
                        sum = sum + array[j]();
                    }
                    else{
                        var val = isNaN(parseInt(array[j]))?0:parseInt(array[j]);
                        sum = sum + val;
                    } // else
                } // loop
            }//if
        } //if
        else{
            var d = isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]);
            sum = sum + d;
        }


    } // loop
    return sum;
}