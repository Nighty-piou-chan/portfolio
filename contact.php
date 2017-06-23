<?php 
$erreur = "";


	if (isset($_POST['submit']) AND $_POST['submit'] == "envoyer") {

		foreach($_POST 	as $indices=>$valeurs)
		{
			if(empty($valeurs))
			{
				$erreur .= "<div>Merci de remplir le champ : $indices !</div>";

			}
		}


		if(empty($erreur))
		{
			$destinataire = 'emilie.badin77@gmail.com';
			$sujet 			= 'Formulaire de contact site';
			$prenom 		= $_POST['prenom'];
			$expediteur 		= $_POST['mail'];
			$message 		= $_POST['message'] . " de la part de " . $_POST['nom'] . " " . $_POST['prenom'];
	
	 	 	$_POST["mail"] = "From: $_POST[mail] \n";
	 	 	$_POST["mail"] .= "Reply-to: $expediteur";
	 	 	$_POST["nom"] .= "MIME-Version: 1.0 \r\n";
	 	 	$_POST["nom"] .= "Content-type: text; charset=UTF-8";

	 	 	mail($destinataire, $sujet, $message, $_POST['mail']);			
		}
		echo $indices;
	 }


 ?>

<!DOCTYPE html>
<html lang="fr-FR">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Contact</title>
		<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
		<link rel="stylesheet" href="./src/css/style.css">
		<link href="https://fonts.googleapis.com/css?family=Qwigley" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"> 
		
		<script src="https://use.fontawesome.com/e0360ce757.js"></script>
	</head>
	<body onload="menu()">

		<header class="contact" id="header">
			<div class="flex">
				<div class="logo"><img  class="logo" src="./media/img/logo.png" alt="logo" title="logo"></div>
				<nav id="menu">
					<a href="index.html"><span>A</span>ccueil</a>
					<a href="a-propos.html"><span>À</span> Propos</a>
					<a href="portfolio.html"><span>P</span>ortfolio</a>
					<a href="contact.php"><span>C</span>ontact</a>
				</nav>
					<nav id="menu-responsive">
						<span id="burger" class="fa fa-bars fa-2x" aria-hidden="true"></span>
						<div class="responsive">
							<a class="list" href="index.html"><span>A</span>ccueil</a>
							<a class="list" href="a-propos.html"><span>À</span> Propos</a>
							<a class="list" href="portfolio.html"><span>P</span>ortfolio</a>
							<a class="list" href="contact.php"><span>C</span>ontact</a>
						</div>
					</nav>
			</div>
			<div>
				<h1 class="contact">
					Contact
				</h1>
			</div>
			<a href="#" id="bottom"><i class="fa fa-angle-down fa-3x" aria-hidden="true"></i></a>
		</header>

		<section class="formulaire">
			<form method="post" action="<?php $_SERVER['PHP_SELF'];?>">
				<h3><span>D</span>es questions ? N'hésitez pas à me contacter :</h3>
				<?= $erreur;?>
				<label for="nom">Nom</label>
				<input type="text" name="nom" id="nom" placeholder="Nom">

				<label for="prenom">Prénom</label>
				<input type="text" name="prenom" id="prenom" placeholder="Prénom">

				<label for="email">Adresse e-mail</label>
				<input type="email" name="mail" id="mail" placeholder="Adresse e-mail">

				<label for="message">Message</label>
				<textarea name="message" id="message" placeholder="Message" cols="30" rows="10"></textarea>

				<input type="submit" name="submit" value="envoyer" id="submit">
			</form>
		</section>

		<footer>
			<div class="copyright">
				<p>© Emilie Badin - 2017</p><p> <i class="fa fa-facebook-square" aria-hidden="true"></i></p>
					
			</div>
		</footer>
		<script src="./src/js/app.js"></script>
	</body>
</html>
