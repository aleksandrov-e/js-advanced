function extendPrototype(classToExtend) {
    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString() = function(){
        return `I am ${this.species}. ${this.toString()}`
    }
}
