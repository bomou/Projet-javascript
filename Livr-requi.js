function nombreLivresRequis(categ, ne, use){
    if(categ == 1){
        if (use == 1){
            return Math.floor(ne*0.85);
        }
        else{
            return Math.floor(ne*0.6);
        }
    }
    else{
        if (use == 1){
            return Math.floor(ne*0.4);
        }
        else{
            return Math.floor(ne*025);
        }
    }
}