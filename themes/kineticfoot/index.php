<?php

	/*
	Template Name: Home
	*/

 get_template_part( 'templates/header' );

?>

<body>

	<?php

		$hero = get_field('hero_image');

	?>

  <div class="hero" style="background-image: url(<?php echo $hero ?>)">

		<?php
			$hero_content = get_field('hero_content');
		 ?>

		 <div class="hero-content">
 			<h1 class="title"><?php echo $hero_content['heading'] ?></h1>
 			<span class="subtitle">
 				<?php echo $hero_content['subtitle'] ?>
 			</span>
			<a href="<?php echo $hero_content['button_link'] ?>" class="cta-button"><?php echo $hero_content['button_text'] ?></a>
 		</div>

  </div>

</body>

<?php

 get_template_part( 'templates/footer' );
