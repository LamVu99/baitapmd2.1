import {Gender} from "./Canbo";
import {Nhanvien} from "./Nhanvien";
import {CongNhan} from "./CongNhan";
import {Kysu} from "./Kysu";
import {cadresManager} from "./QuanliCanbo";

let cadres1 = new Nhanvien('Lam Vu',18,Gender.Male, 'Ha Noi','Ke toan')
let cadres2 = new CongNhan('Hai Nguyen',23,Gender.Male, 'Nghe An',2)
let cadres3 = new Kysu('Hoang Tran',26,Gender.Female, 'Sai Gon','CNTT')
let cadres4 = new CongNhan('Viet Le',20,Gender.Other, 'Thai Binh',10)
let Cadres = new cadresManager()
Cadres.addcadres(cadres1)
Cadres.addcadres(cadres2)
Cadres.addcadres(cadres3)
Cadres.addcadres(cadres4)
let cadres5 = new Kysu('Thang Tran', 32,Gender.Male, 'Ha Noi','xay dung')
Cadres.addcadres(cadres5)
console.log(Cadres.getList())
console.log(Cadres.findCadres('Lam Vu'))