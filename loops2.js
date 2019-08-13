s = 'javascriptloops';

var sArray = s.split('');
var vogais = ['a', 'e', 'i', 'o', 'u'];
var indicesV = [];
var indicesC = [];

for (let i = 0; i < sArray.length; i++) {
  if(vogais.indexOf(sArray[i])!= -1){
    indicesV.push(i);
    //console.log(sArray[i]);
  }else{
    indicesC.push(i);
  }
}
var imprime = indicesV.concat(indicesC);

for (var i = 0; i < imprime.length; i++) {
  console.log(sArray[imprime[i]]);
}
