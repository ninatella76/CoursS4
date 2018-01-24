function creerTables(tableau){
  var tab = "<table><tr>";
  for (var i=0; i<tableau.length; i++){
    tab += "<td>" + i + "</td>";
  }
  tab += "</tr><tr>";

  for (var i=0; i<tableau.length; i++){
    tab += "<td>" + tableau[i] + "</td>";
  }

  tab += "</tr></table>";
  return tab;

}

function fibonacci (nb){
  var tab = new Array();
  tab[0] = 1;
  tab[1] = 1;
  for (var i=2; i<nb; i++){
    tab[i] = tab[i-2] + tab[i-1];
  }
  return creerTables(tab);
}
var t = new Array();
t = fibonacci(41);
document.write(t);
