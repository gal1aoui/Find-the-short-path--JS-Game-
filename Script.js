function move(tabtype){
var debut = 1;
var fin = 3;
var l = 0;
do{
debut = begin(debut);
fin = end(fin);
}while(fin - debut < 9);
console.log("debut",debut);
console.log("fin",fin);
   var nbrstep = 0; 
   var compteur = 0; 
   var numberways = Math.floor(Math.random()*5)+3;
   var tabcount = new Array();
   tabcount[0]=debut;
   console.log("numberways",numberways); //nombre totale de directions
   count = debut;
   var tabd = new Array(numberways-1); //table de  directions
   directiontable(tabd,numberways); //puis remplir le tableau avec les ordres de direction
do{
    if(Math.abs(tabd[compteur-1] - tabd[compteur]) == 3){
        tabd[compteur] = 1; // pour eviter la collusion entre direction bas et haut
    }
    waydirection(tabd[compteur]); // suivi la direction selon l'ordre
    //console.log("Direction :",tabd[compteur]);
    compteur++;
}while((compteur <= numberways-1));
    complete();
    firstable(fin,"lapindf.jpg");
    firstable(debut,"lapindf.jpg");
function firstable(j,img){
document.getElementById(tabtype+j).style.backgroundImage = "url('"+img+"')";
document.getElementById(tabtype+j).style.backgroundSize = "120px 100px";
document.getElementById(tabtype+j).style.backgroundRepeat = "no-repeat";
document.getElementById(tabtype+j).style.backgroundPosition = "center center";
}

function complete(){
    while(count % 10 > 0){
        count ++;
        firstable(count,"lapin.jpg");
        nbrstep ++;
        tabcount[nbrstep] = count;
    }
    do{
        if(count < fin){
            count += 10;
            nbrstep ++;
            tabcount[nbrstep] = count;
        }
        if(count > fin){
            count -= 10;
            nbrstep ++;
            tabcount[nbrstep] = count;
        }
        firstable(count,"lapin.jpg");
    }while(count != fin);
    console.log("termined by",nbrstep,"steps");
  }// pour compléter le path si il n'arrive pas à la point finale
function directiontable(tab,n){
    var randomize = [1,2,5];
    var directions;
    for(let i = 0 ; i< n; i++){
    directions = Math.floor(Math.random()*3)+0;    
    tab[i] = randomize[directions];
    }        
}    
function waydirection(direction){
    if(direction == 1){
        steps = Math.floor(Math.random()*3)+2;
        count = advance(count,steps);
        console.log("steps",steps);
    }
    if((direction == 2)){
        if(count < 1){
            count = count;
        }else{
            count = up(count);
        }
    }//pour les mouvements ascendants
    if((direction == 5)){
      if (count > 40) {
        count = count;
      }else{
        count = down(count);
    }
    }//pour les mouvement descendant
}
function begin(b){
    var tabmin = [1,11,21,31];
    var rndb = Math.floor(Math.random()*4)+0;
    b = tabmin[rndb];
    return b;    
}
function end(e){
var tabmax = [10,20,30,40]; //l'indice de chacun ligne final  
var rnde = Math.floor(Math.random()*4)+0;
e = tabmax[rnde];
return e;
}
function down(d){
  if((d <= 30)&&(d != fin)){ 
      d += 10;
      nbrstep++;
      tabcount[nbrstep] = d;
  }else{
      d += 0;
  }
 firstable(d,"lapin.jpg");
return d;
}
function up(u){
    if((u >= 11)&&(u != fin)){
    u -= 10;
    nbrstep++;
    tabcount[nbrstep] = u;
    }else{
        u -= 0;
    }
    firstable(u,"lapin.jpg")
return u;
}
function advance(a,cx){
    for (i = 1; i<= cx; i++){
        if ((a % 10 == 0)||(a > 40) || (a < 1)) {
            break;
        }else{
            a++;
            nbrstep ++;
            tabcount[nbrstep] = a;
        }
        firstable(a,"lapin.jpg");
    }
    return a;
}
function anim(){
          setTimeout(function() {
          firstable(tabcount[l],"count.jpg");  
          l++;
          if (l < nbrstep) {
            anim();         
          }
        }, 1000);
      }; //l'animation de mouvement
      return {nbrstep,anim};
}
function start(){
    stepc = move("c");
    document.getElementById("btn1").onclick = function(){
        document.getElementById("Msg").innerHTML = resultc;
        alert("Number of steps : "+stepc.nbrstep);
        stepc.anim();
    };
   stepd = move("d");
   document.getElementById("btn2").onclick = function(){
    document.getElementById("Msg").innerHTML = resultd;
    alert("Number of steps : "+stepd.nbrstep);
    stepd.anim();
};
   stepf = move("f");
   document.getElementById("btn3").onclick = function(){
    document.getElementById("Msg").innerHTML = resultf;
    alert("Number of steps : "+stepf.nbrstep);
    stepf.anim();
};
    if((stepc.nbrstep <= stepd.nbrstep) && (stepd.nbrstep <= stepf.nbrstep )){
        resultc = "Congratulations !! This was the short way";
        resultd = "So Close !! this wasn't the short way";
        resultf = "This was terrible way try another";
    }
    if((stepd.nbrstep <= stepc.nbrstep) && (stepc.nbrstep <= stepf.nbrstep )){
        resultd = "Congratulations !! This was the short way";
        resultc = "So Close !! this wasn't the short way";
        resultf = "This was terrible way !! try another";
    }
    if((stepf.nbrstep <= stepd.nbrstep) && (stepd.nbrstep <= stepc.nbrstep )){
        resultf = "Congratulations !! This was the short way";
        resultd = "So Close !! this wasn't the short way";
        resultc = "This was terrible way !! try another";
    }
    if( (stepf.nbrstep == stepd.nbrstep)&& (stepd.nbrstep > stepc.nbrstep) ){
        resultf = "How lucky you are !! you found Similar Ways";
        resultd = "How lucky you are !! you found Similar Ways";
        resultc = "Good job !! this is the only short way";
    }
    if( (stepf.nbrstep == stepc.nbrstep)&& (stepd.nbrstep < stepc.nbrstep) ){
        resultf = "How lucky you are !! you found Similar Ways";
        resultc = "How lucky you are !! you found Similar Ways";
        resultd = "Good job !! this is the only short way";
    }
    if( (stepc.nbrstep == stepd.nbrstep)&& (stepd.nbrstep > stepf.nbrstep) ){
        resultc = "How lucky you are !! you found Similar Ways";
        resultd = "How lucky you are !! you found Similar Ways";
        resultf = "Good job !! this is the only short way";
    }
}