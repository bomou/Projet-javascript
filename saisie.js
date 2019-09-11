function saisie(){
    var id, stock, categorie, nei, usase, prix, continuer,
        livre = new Array();
 do{
     var livre = new Array;
     do{
        id = parseInt(prompt("donner le numero d\' identifiant du livre"));
    }  
    while (!id || id < 100 || id>999);
    livre.push(id);
    do{
        stock = parseInt(prompt("donner la quantite actuelle du stock du live"));
    }
    while(!stock);
    livre.push(stock);
    do{
        categorie = parseInt(prompt("donner la categorie du livre"));
    }
    while(!categorie||(categorie !=1 && categorie !=2));
    livre.push(categorie);
    do{
        nei = parseInt(prompt("donner le nombre d\' etudiant inscrits au(x) cours qui utilisent ce livre"));
    }
    while(!nei);
    livre.push(nei);
    do{
        usase = parseInt(prompt("donner est ce la premiere fois que ce livre est utilise"));
    }
    while(!usase || (usase !=1 && usase !=2));
    livre.push(usase);
    do{
        prix = parseInt(prompt("donner le prix d\' achat du livre "));
    }
    while(!prix);
    livre.push(prix);
    livres.push(livre);
    continuer = prompt("si les livres sont fini appuier sur la touche, sinon sur n\' importe qu\'elle autre touche");
    }
    while (continuer !='f' && continuer !='F');
}