import {Gender} from "./Canbo";
import {Canbo} from "./Canbo";
export class cadresManager {
    cadres: Canbo[] = []
    constructor() {
    }
getList() {
        return this.cadres
}
addcadres(cadres: Canbo) {
        this.cadres.push(cadres)
}
findindexCadres (fullname: string) {
        let index = -1;
    for (let i = 0; i < this.cadres.length; i++) {
        if (this.cadres[i].Fullname === fullname) {
            index = i;
        }
    }
    return index
}
findCadres(fullname: string) {
        if (this.findindexCadres(fullname) !== -1){
            return this.cadres[this.findindexCadres(fullname)]
        }
}
}