<?php if (!defined('FW')) {
    die('Forbidden');
}
/**
 * Опции (поля) шорткода
 * @link Список всех возможных опицй http://manual.unyson.io/en/latest/options/built-in/introduction.html
 */
$options = [
//    //ключ - slug опции, к которому будем обращаться во view
    //значение - массив конфигураций для опции
	'h2'     => [
		'type'  => 'text',
		'value' => 'О нас',
		'label' => __('Заголовок', '{domain}'),
	],
	'text'     => [
		'type'  => 'wp-editor',
		'value' => '',
		'label' => __('Текст', '{domain}'),
	],
];