<?php

add_action( 'wp_ajax_sendForm', 'sendForm' );
add_action( 'wp_ajax_nopriv_sendForm', 'sendForm' );
//
function sendForm() {
	if (isset($_POST )) {
		// обрабатываем запрос
		$adminEmail = get_option('admin_email');
//		$adminEmail = '89261231522@mail.ru,
//globus_estate@mail.ru';
		$name = ($_POST['name'] == 'undefined') ? '' : $_POST['name'] ?? '' ;
		$phone = ($_POST['phone'] == 'undefined' ) ? '' : $_POST['phone'] ?? '' ;
		$email = ($_POST['email'] == 'undefined') ? '' : $_POST['email'] ?? '' ;
		$site = ($_POST['site'] == 'undefined') ? '' : $_POST['site'] ?? '';
		
		$message = '<h2>Заявка с '.get_bloginfo('description').' '.get_bloginfo('url').'</h2><br>';
		$message .= 'Имя: ' . $name . '<br>';
		$message .= ($phone)? 'Телефон: ' . $phone . '<br>' : '';
		$message .= ($email)? 'E-mail: ' . $email . '<br>'  : '';
		$message .= ($site) ? 'Сайт: ' . $site . '<br>' : '';
		

		if (wp_mail($adminEmail,'Заявка на обратный звонок c '.get_bloginfo('description').' '.get_bloginfo('url'), $message, 'content-type: text/html')) {
			$result = [
				'result' => 'success',
				'message' => 'Ваш запрос отправлен!'
			];
		} else {
			$result = [
				'result' => 'error',
				'message' => 'Возникла ошибка при отправке запроса. Попробуйте позже!'
			];
		}
		// возвращаем результат
		wp_send_json($result);
	}
	wp_die();
}
