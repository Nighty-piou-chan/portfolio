var loader = function loader(){
	var body = document.querySelector('body');
	var preload = document.getElementById('loader');
	var header = document.querySelector('header');
	var footer = document.querySelector('footer');
	
	if (header.classList.contains("after") && footer.classList.contains("after")) {
		// Si l'attribut class du header et celui du footer contient after
		header.classList.remove('after'); // Retirer la class after dans le header
		footer.classList.remove('after'); // Retirer la class after dans le footer
		body.removeChild(preload); //Retirer la div de chargement
	}
}

var menu = function burgerMenu(){
	"use strict";
	var body, div, icon, auTouche, nav;

	body = document.querySelector('body'); // sélection du corps.
	icon = document.getElementById('burger'); //selection de l'icone du menu burger
	nav = document.getElementById("menu-responsive"); //selection de la navigation
	div = document.querySelector("#menu-responsive div"); // selection de la div où se trouve tous les éléments
	
	var auTouche = function auTouche(){
	div = document.querySelector("#menu-responsive div"); // selection de la div où se trouve tous les éléments

		div.classList.toggle('is-active');
	};
	icon.onclick = auTouche;
};

// Calculatrice 
function calculette() {

				var input1, input2, select, btn, btnReset, reset, calculer; 
				
					console.log('on est ready!');
					btn = document.getElementById("calculate");
					select = document.getElementById("operateur");
					reset = document.getElementById('reset');

					
				calculer = function	calculer() {
					console.log('on veut calculer');

					var a = Number(document.getElementById("number1").value); // déclaration qu'il doit récupérer la valeur dans l'input ayant l'Id number1 en précisant que cet objet est un nombre.
						console.log(typeof(a));

						var b = Number(document.getElementById("number2").value);
						console.log(typeof(b));
				
				if (select.selectedIndex == 0) {//selectedIndex = Emplacement de l'option dans un tableau défini plus tôt avec le ciblage du select.

						var divCalculate = document.getElementById('calculatrice'); //définition de l'élément body.
						console.log(divCalculate);
						div = document.createElement('div'); //création de la div après le = de manière symbolique
						div.id = "resultat";
						divCalculate.appendChild(div); // ajout de manière physique de la div créée plus tôt
						var resultat = (a * b); // calcul
						div.innerHTML = resultat; // rajout du text dans le HTML ayant hérité de la valeur du calcul.
						
					}

					else if (select.selectedIndex == 1) {

						var divCalculate = document.getElementById('calculatrice');
						console.log(divCalculate);
						div = document.createElement('div');
						div.id = "resultat";
						divCalculate.appendChild(div);
						var resultat = (a / b);
						div.innerHTML = resultat;
						console.log(typeof(resultat));
					}

					else if (select.selectedIndex == 2) { 

						var divCalculate = document.getElementById('calculatrice');
						console.log(divCalculate);
						div = document.createElement('div');
						div.id = "resultat";
						divCalculate.appendChild(div);
						var resultat = (a + b);
						div.innerHTML = resultat;
						console.log(typeof(resultat));
					}

					else {
						var divCalculate = document.getElementById('calculatrice');
						console.log(divCalculate);
						div = document.createElement('div');
						div.id = "resultat";
						divCalculate.appendChild(div);
						var resultat = (a - b);
						div.innerHTML = resultat;
						console.log(typeof(resultat));
					};

				}

					btnReset = function btnReset() {
						var divCalculate = document.getElementById('calculatrice');
						div = document.getElementById('resultat');
						divCalculate.removeChild(div); // supprimer du HTML la div existante. 
						var a = document.getElementById('number1');
						var b = document.getElementById('number2');
						a.value = ""; // attibuer un champs vide à la valeur de l'input.
						b.value = "";

				}
				btn.onclick = calculer;
				reset.onclick = btnReset; 
			};


//scroll scroll scroll
document.getElementById('bottom').onclick = function (event) {
	event.preventDefault();
	var clientHauteur = document.getElementById('header').clientHeight;
   scrollTo(document.body, clientHauteur, 1250);  
}
    
function scrollTo(element, to, duration) {
    var start = window.scrollY,
        change = to - start,
        currentTime = 0,
        increment = 20;
        element.scrollTop = start;
        console.log("window.scrollY");
        console.log(window.scrollY);
        console.log("start");
        console.log(start);
        
    var animateScroll = function(){        
        currentTime += increment;
        var val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
            console.log("easeInOutQuad()");
            console.log(easeInOutQuad());
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
var easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
}