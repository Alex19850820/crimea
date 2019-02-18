<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package new-seo
 */
$contacts = fw_get_db_customizer_option();
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width height=device-height initial-scale=1.0 maximum-scale=1.0 user-scalable=0">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Work+Sans:300,700,800%7COswald:300,400,500">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<header class="header">
	<div class="container">
		<div class="logo-head">
			<a class="rd-navbar-brand" href="/">
				<img src="<?=$contacts['img_logo']['url'] ?? ''?>" alt="" srcset="<?=$contacts['img_logo']['url'] ?? ''?>"/>
				<span class="logo-title"><?=$contacts['logo_title'] ?? ''?></span>
			</a>
		</div>
		<div class="header-menu" id="menu">
			<ul class="header-menu-main">
				<li><a href="#service">Услуги</a></li>
				<li><a href="#cases">Цены</a></li>
				<li><a href="#feedbacks">Отзывы</a></li>
				<li><a href="#contacts">Контакты</a></li>
			</ul>
		</div>
		<div class="header-contacts">
<!--			<span><button class="header-button" id="popup__toggle2">Заказать звонок</button></span>-->
			<span><a href="tel:<?=$contacts['phone']?>" target="_blank"><?=$contacts['phone']?></a></span>
		</div>
		<!--mobile-->
		<div class="rd-navbar-mob-menu jsMobMenu">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div class="rd-nav-menu__right jsMenu menu-active" id="menu_mob">
			<h3>Меню</h3>
			<ul>
				<li><a href="#service">Услуги</a></li>
				<li><a href="#cases">Цены</a></li>
				<li><a href="#feedbacks">Отзывы</a></li>
				<li><a href="#contacts">Контакты</a></li>
			</ul>
			<div class="header-contacts">
				<span><button class="header-button" id="popup__toggle">Заказать звонок</button></span>
				<span><a href="tel:<?=$contacts['phone']?>" target="_blank"><?=$contacts['phone']?></a></span>
			</div>
		</div>
		<!--end-->
	</div>
</header>