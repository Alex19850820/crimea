<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package new-seo
 */
$contacts = fw_get_db_customizer_option();
?>
		<section id="contacts" class="rd-footer">
			<div class="container">
				<div class="rd-footer navigation" id="foot_menu">
					<ul class="rd-footer-nav">
						<li><a href="#about">О нас</a></li>
						<li><a href="#service">Услуги и цены</a></li>
						<li><a href="#cases">Цены</a></li>
						<li><a href="#feedbacks">Отзывы клиентов</a></li>
						<li><a href="#contacts">Контакты</a></li>
					</ul>
					<div class="rd-footer-nav contacts">
						<div class="contacts-item">
							<a href="mailto:<?=$contacts['email']?>" target="_blank">
								<img src="<?php bloginfo('template_url')?>/img/footer_mail.png">
								<span><?=$contacts['email']?></span>
							</a>
							<a href="#"> Написать нам</a>
						</div>
						<div class="contacts-item">
							<a href="tel:<?=$contacts['phone']?>" target="_blank">
								<img src="<?php bloginfo('template_url')?>/img/phone.png">
								<span><?=$contacts['phone']?></span>
							</a>
							<a href="#">Заказать звонок</a>
						</div>
					</div>
					<div class="rd-footer cocial">
						<a href="<?=$contacts['facebook']?>" target="_blank"><img src="<?php bloginfo('template_url')?>/img/facebook_ico.png"></a>
						<a href="<?=$contacts['twitter']?>" target="_blank"><img src="<?php bloginfo('template_url')?>/img/twiter_ico.png"></a>
						<a href="<?=$contacts['instagram']?>" target="_blank"><img src="<?php bloginfo('template_url')?>/img/instagram_ico.png"></a>
						<a href="<?=$contacts['google']?>" target="_blank"><img src="<?php bloginfo('template_url')?>/img/google_ico.png"></a>
					</div>
					<span>&copy; 2019 КрымГенПроект</span
				</div>
			</div>
		</section>
		<!--CALL BACK-->
		<a href="#" id="popup__toggle" onclick="return false;">
			<div class="circlephone" style="transform-origin: center;"></div>
			<div class="circle-fill" style="transform-origin: center;"></div>
			<div class="img-circle" style="transform-origin: center;">
				<div class="img-circleblock" style="transform-origin: center;"></div>
			</div>
		</a>
		<!--END-CALL BACK-->
		<!--MODAL-->
		<!--[if lt IE 9]>
		<div class="popup__overlay popup__overlay_ie"></div><![endif]-->
		<div class="popup__overlay modal">
			<div class="popup">
				<div class="popup__close">X</div>
				<h2>Обратный звонок</h2>
				<p>Оставьте ваш телефон и с Вами свяжутся в ближайшее время!</p>
				<form id="send_call_back">
					<input name="name" type="text" placeholder="Имя">
					<input name="phone" type="tel" id="phone2" placeholder="Телефон">
					<div class="form-button">
						<button id="send__form" data-form="send_call_back" type="submit">Позвонить</button>
					</div>
				</form>
			</div>
			<!--[if lt IE 9]>
			<div class="popup__valignfix"></div><![endif]-->
		</div>
		<div class="popup__overlay modal_success">
			<div class="popup">
				<div class="popup__close">X</div>
				<h2>Поздравляем</h2>
				<p>Ваша заявка отправлена с Вами свяжутся в ближайшее время!</p>
			</div>
			<!--[if lt IE 9]>
			<div class="popup__valignfix"></div><![endif]-->
		</div>
		<!--END-MODAL-->
<?php wp_footer(); fw_print()?>
</body>
</html>
