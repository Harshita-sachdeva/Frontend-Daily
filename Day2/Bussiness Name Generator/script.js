

// function generate(){
//     let rdm=Math.random();
// let first, second, third;
// // 0 0.33 0.66 1

// // 1st way :- 
// if(rdm<0.33){
//      first="Crazy";
// }
// else if(rdm<0.66 && rdm>0.33){
//     first="Amazing";
// }
// else{
//     first="Fire";
// }






// rdm=Math.random(); // for next random no. for second name
// if(rdm<0.33){
//     second="Engine";
// }
// else if(rdm<0.66 && rdm>0.33){
//     second="Foods";
// }
// else{
//     second="Garments";
// }





// rdm=Math.random();  // for next random no. for third name
// if(rdm<0.33){
//     third="Bros";
// }
// else if(rdm<0.66 && rdm>0.33){
//     third="Limited";
// }
// else{
//     third="Hub";
// }
//      document.getElementById("name").innerHTML=`${first} ${second} ${third}`;
// }

// 2nd method
// function generate(){
//     let first={
//         1:"Crazy",
//         2:"Amazing",
//         3:"Fire"
//     }

//     let second={
//         1:"Engine",
//         2:"Foods",
//         3:"Garments"
//     }

//     let third={
//         1:"Bros",
//         2:"Limited",
//         3:"Hub"
//     }

//     var ran1=Math.floor(Math.random()*3+1)
//     var ran2=Math.floor(Math.random()*3+1)
//     var ran3=Math.floor(Math.random()*3+1)

//     document.getElementById("name").innerHTML=`${first[ran1]} ${second[ran2]} ${third[ran3]}` ;

// }

// My app way -->using arrays 
function generate_words(){
    var niche=document.getElementsByName("niche");
    for(let i=0;i<niche.length;i++){
        if(niche[i].checked && niche[i].value==="tech"){
            document.getElementById("tech_words").style.display="block";
            document.getElementById("life_words").style.display="none";
            document.getElementById("Bussiness_words").style.display="none";
        }
        else if(niche[i].checked && niche[i].value==="life"){
            document.getElementById("tech_words").style.display="none";
            document.getElementById("life_words").style.display="block";
            document.getElementById("Bussiness_words").style.display="none";
        }
        else if(niche[i].checked && niche[i].value==="bussiness"){
            document.getElementById("tech_words").style.display="none";
            document.getElementById("life_words").style.display="none";
            document.getElementById("Bussiness_words").style.display="block";
        }
    }
}
function genByCheck(){
    var wordsArr=[];
    var words=document.getElementsByName("word");
    for(let i=0;i<words.length;i++){
        if(words[i].checked){
            wordsArr.push(words[i]);
        }
    }

}