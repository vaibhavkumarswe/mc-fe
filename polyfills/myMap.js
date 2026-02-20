Array.prototype.myMap = function (cd){
    let temp = [];
    for(let i=0; i<this.length; i++){
        temp.push(cd(this[i], i, this));
    }
    return temp;
}