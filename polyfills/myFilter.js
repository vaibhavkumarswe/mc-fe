Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i=0; i<this.length; i++){
        if(cd(this[i], i, this)){
            temp.push(temp[i]);
        }
    }
    return temp;
}