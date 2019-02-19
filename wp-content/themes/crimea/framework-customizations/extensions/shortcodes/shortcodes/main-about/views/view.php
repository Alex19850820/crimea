<?php if ( ! defined( 'FW' ) ) {
    die( 'Forbidden' );
}
/***
  * Верстка шорткода
  * весь контент лежит в переменной $atts
 *@var $atts array
 *
 **/

?>
<section class="rd-about" id="about" style="background: url(<?=$atts['img']['url']?>) top center no-repeat;">
	<div class="container">
		<h2><?=$atts['h2']?></h2>
		<?=$atts['text']?>
	</div>
</section>