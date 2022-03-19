window.addEventListener("load", init);
var kepek = [
    {
        cim: "01-es kép",
        eleresiut:"./kepek/01.jpg",
        leírás:"Ez a első cicás kép",
    },
    {
        cim: "02-es kép",
        eleresiut:"./kepek/02.jpg",
        leírás:"Ez a második cicás kép",
    },
    {
        cim: "03-es kép",
        eleresiut:"./kepek/03.jpg",
        leírás:"Ez a harmadik cicás kép",
    },
    {
        cim: "04-es kép",
        eleresiut:"./kepek/04.jpg",
        leírás:"Ez a negyedik cicás kép",
    },
    {
        cim: "05-es kép",
        eleresiut:"./kepek/05.jpg",
        leírás:"Ez a ötödik cicás kép",
    },
    {
        cim: "06-es kép",
        eleresiut:"./kepek/06.jpg",
        leírás:"Ez a hatodik cicás kép",
    },
]
function ID(elem){
    return document.getElementById(elem);
}
function CLASS(elem){
    return  document.getElementsByClassName(elem)
}
function $(elem){
    return  document.querySelectorAll(elem)
}
var aktualiskepIndex = 0;
function init(){
    kiirKepek()
    kepkeret()
    $("#bal")[0].addEventListener("click",bal)
    $("#jobb")[0].addEventListener("click",jobb)
}
function kiirKepek(){
    var txt = " ";
    for (let i = 0; i < kepek.length; i++) {
        txt = txt + "<div>" + "<h3>"+ kepek[i].cim +"</h3>" + "<img src='"+ kepek[i].eleresiut+ "' class='kepek' id='"+i +"' alt='cicás képek'/>"+
        "<p>"+kepek[i].leírás+"</p> </div>"
    }
    ID("galeria").innerHTML = txt;

}

function kepkeret() {
    for (let index = 0; index < kepek.length; index++) {
        /* CLASS("kepek").style.backgroundColor="red"; */
        /*CLASS("kepek")[index].style.border = "10px solid gray"
        CLASS("kepek")[index].style.padding= "2px"
        $("#galeria div img")[index].style.backgroundColor="black" */
        /* $("#galeria div")[index].className = "divekFormazasa" */
        //Ha az első képre kattintás
        $("#galeria div img")[index].addEventListener("click",kattintás)
    }
}
function kattintás(event) {
    //console.log(event.target.id)
    aktualiskepIndex= event.target.id
    kepMegjelenit();
}
function kepMegjelenit() {
    var txt = "<img src='"+kepek[aktualiskepIndex].eleresiut +"' alt='nagykep'/>"
    ID("nagykep").innerHTML = txt;
    
}

function bal() {
    aktualiskepIndex--;
    if (aktualiskepIndex < 0) {
        aktualiskepIndex=kepek.length-1
    }
    kepMegjelenit()
}
function jobb() {
    aktualiskepIndex++;
    if (aktualiskepIndex > kepek.length-1) {
        aktualiskepIndex=0
    }
    kepMegjelenit()
}
