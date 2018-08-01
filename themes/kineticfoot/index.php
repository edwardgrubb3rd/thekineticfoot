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
			<a href="<?php echo $hero_content['button_link'] ?>" class="cta-button" target="_blank"><?php echo $hero_content['button_text'] ?></a>
 		</div>

  </div>

	<!-- About Section -->
	<?php
		$about = get_field('about_title');
	 ?>

	<div class="about section">
		<span class="title"><?php echo $about ?></span>

		<div class="about-grid">

			<?php
			if (have_rows('about_us')):
				while(have_rows('about_us')) : the_row();

				$img = get_sub_field('image');
        $subtitle = get_sub_field('subtitle');
        $desc = get_sub_field('description');
			?>

			<div class="about-item">
				<img class="about-item-img" src="<?php echo $img ?>" alt="">
				<span class="about-item-subtitle"><?php echo $subtitle ?></span>
				<p class="about-item-desc"><?php echo $desc ?></p>
			</div>

		<?php endwhile; endif; ?>

		</div>
	</div>

</body>

<?php

 get_template_part( 'templates/footer' );
