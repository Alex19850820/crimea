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
<section class="rd-marketing" style="background: url(<?=$atts['img']['url']?>) top center no-repeat; background-size: cover;">
	<div class="container">
		<div class="rd-marketing left-text">
			<h1><?=$atts['h1']?></h1>
			<h2><?=$atts['h2']?></h2>
			<p>
				<?=$atts['text']?>
			</p>
		</div>
		<div class="rd-marketing right-form">
			<h2><?=$atts['h2_form']?></h2>
			<form id="request" class="form-feedback" action="">
				<input name="name" type="text" placeholder="Ваше имя"><hr>
				<input name="email" type="text" placeholder="E-mail"><hr>
				<input name="phone" type="text" id="phone" placeholder="Ваш телефон"><hr>
				<div class="form-button">
					<button id="send__form" data-form="request" type="submit">Отправить</button>
				</div>
			</form>
		</div>
	</div>
</section>