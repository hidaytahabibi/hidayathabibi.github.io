const nama="HDYT";
let usia = 20;
let biodata = document.getElementById('biodata');
console.log(biodata)

function generateData(){
    let generasi;

    if (usia<25&&usia>16){
       generasi="anda remaja";
    } 
    else if(usia<15&&usia>0){
        generasi="Njirr Bocill Cok";
    }else {
        generasi="tua lu anjing"
    }
    return biodata.innerHTML= generasi;
}

console.log(nama);
console.log(usia);

generateData();
 