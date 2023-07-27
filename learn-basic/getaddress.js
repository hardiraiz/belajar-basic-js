let text = "759J+RGP, Jl. Tribrata, GG. palapa, Kel. Duri Barat, Mandau, Bengkalis Regency, Riau, Indonesia";

text = text.toLowerCase();
text = text.split(", ");
let result = text.slice(1);

let final = "Belum Berubah";
for(i in result){
	if (result[i].includes("jl.") == true || result[i].includes("gg.")){
        continue;} 
    else{
        final = result[i];
        final = final.replace("kel.","");
        final = final.replace("kec.","");
        break;}
}
