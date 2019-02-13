$(document).ready(function(){
	// if($('.js_phone-mask').length > 0) {
	// 	$('.js_phone-mask').inputmask({alias: 'phoneru'});
	// }
	// $('.js_modalWindow').fancybox({
	// 	afterClose : function () {
	// 		$('.modal-block').removeClass('modal-noactive');
	// 		$('.modal-thanks').removeClass('modal-active');
	// 	}
	// });
	// $(document).on('click', '.js_modalThanks', function () {
	// 	$('.modal-block').addClass('modal-noactive');
	// 	$('.modal-thanks').addClass('modal-active');
	// });// уже добавлял тоже самое - смотри
	// $('#fw-ext-builder-frontend-grid-css').remove();
});
$(document).on('click', '.jsMobMenu', function () {
	$(this).addClass('burger-active');
	$('.rd-nav-menu__right').css({'-webkit-transform':'none'});
	// $('.rd-nav-menu__right').css({'display':'block !important'});
});
$(document).on('click', '.burger-active', function () {
	$('.rd-navbar-mob-menu').removeClass('burger-active');
	$('.rd-nav-menu__right').css({'-webkit-transform':'translateX(1200px)'});
	// $('.rd-nav-menu__right').css({'display':'none !important'});
});
$(document).on('click', '#send__form', function (e) {
	e.preventDefault();
	var id = '#' + $(this).attr('data-form') + '';
	// var data = $('#'+id+'').serialize();
	var $data = {};
	$(id).find ('input').each(function() {
		$data[this.name] = $(this).val();
	});
	// var name = $("input[name='name']").val();
	// var phone = $("input[name='phone']").val();
	var name = $data.name;
	var email = $data.email;
	var phone = $data.phone;
	var site = $data.site;

	var form_data = new FormData();
	if (name ==='') {
		alert('Введите Ваше имя!');
		return false;
	}
	if (phone ==='') {
		alert('Введите Ваш телефон!');
		return false;
	}
	if(email === '') {
		alert('Введите Ваш E-mail!');
		return false;
	}
	if(site === '') {
		alert('Введите Ваш сайт!');
		return false;
	}
	if(name !== '') {
		form_data.append('action', 'sendForm');
		form_data.append('name', name);
		form_data.append('email', email);
		form_data.append('phone', phone);
		form_data.append('site', site);
		$.ajax({
			url: myajax.url,
			type: 'post',
			data: form_data,
			contentType: false,
			processData: false,
			success: function (response) {
				if (response.result === 'success') {
					/*form.reset();*/
					// console.log(123); //консоль
					$(id).trigger('reset');
					  // $('.modal-block').addClass('modal-noactive');
					  // $('.modal-thanks').addClass('modal-active');
					  // $('.modal-phone').addClass('modal-noactive');
					$('.popup__overlay').hide();
					$('.modal_success').show();
					$('.popup p').html(response.message);
				} else {
					alert(response.message);
				}
			}
		});
		return false;
	} else {
		alert('Вы не заполнили все поля!');
	}
});
/*Плавный якорь*/
$(document).ready(function(){
	$("#menu").on("click","a", function () {
		//отменяем стандартную обработку нажатия по ссылке
		// e.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$("#menu_mob").on("click","a", function () {
		//отменяем стандартную обработку нажатия по ссылке
		// e.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
		$('.burger-active').click();
	});
	$("#foot_menu").on("click","a", function () {
		//отменяем стандартную обработку нажатия по ссылке
		// e.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
/*sliders*/
	$(".vertical-center-4").slick({
		dots: true,
		vertical: true,
		centerMode: true,
		slidesToShow: 4,
		slidesToScroll: 2
	});
	$(".vertical-center-3").slick({
		dots: true,
		vertical: true,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});
	$(".vertical-center-2").slick({
		dots: true,
		vertical: true,
		centerMode: true,
		slidesToShow: 2,
		slidesToScroll: 2
	});
	$(".vertical-center").slick({
		dots: true,
		vertical: true,
		centerMode: true,
	});
	$(".vertical").slick({
		dots: true,
		vertical: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});
	$(".regular").slick({
		dots: true,
		infinite: true,
		// centerMode: true,
		slidesToShow: 4,
		slidesToScroll: 4
	});
	$(".center").slick({
		dots: true,
		infinite: true,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});
	$(".variable").slick({
		dots: true,
		infinite: true,
		variableWidth: true
	});
	$(".lazy").slick({
		lazyLoad: 'ondemand', // ondemand progressive anticipated
		infinite: true
	});
	$('.autoplay').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: true,
		autoplaySpeed: 7000,
		adaptiveHeight: true,
		variableWidth: true,
		centerMode: true
	});
	$('.filtering').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,
		adaptiveHeight: true,
		variableWidth: true,
		centerMode: true
	});

	$('.responsive').slick({
		dots: true,
		infinite: true,
		speed: 300,
		autoplay: true,
		autoplaySpeed: 7000,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	var myChart = $('#myChart');
	if(myChart[0]) {
		console.log(myChart);
		makeGraph();
	}
	/*GRAPH*/
	function makeGraph() {
		var ctx = document.getElementById('myChart').getContext('2d');
		var chart = new Chart(ctx, {
			// The type of chart we want to create
			type: 'bar',
			// "line - Охват аудитории, Конверсии"
			// The data for our dataset
			data: {
				labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль"],
				datasets: [
					{
						label: " Позиций ТОП-10",
						backgroundColor: 'rgb(0,128,0)',
						borderColor: 'rgb(0,128,0)',
						data: [28, 30,32, 35,37,40,45,47],
					},
					{
						label: "Посещаемость",
						backgroundColor: 'rgb(255, 99, 132)',
						borderColor: 'rgb(255, 99, 132)',
						data: [100, 200, 250, 300, 350, 400, 450],
					},
					{
						label: "Конверсии",
						backgroundColor: 'blue',
						borderColor: 'blue',
						data: [25, 29, 38, 45, 60, 70, 89],
					}

				]
			},

			// Configuration options go here
			options: {}
		});
	}
	$('#allGraph').on("click", function (event) {
		var graph = $('#resGraph')
		graph.empty();
		graph.html('<canvas id="myChart" width="600" height="400"></canvas>');
		makeGraph();
	});
	$('.mGraph').on("click", function (event) {
		var graph = $('#resGraph')
		graph.empty();
		graph.html('<canvas id="myChart" width="600" height="400"></canvas>');
		var color = $(this).attr('data-color');
		var values = $(this).attr('data-val');
		var h2  = $(this).text();
		var arr = values.split(', ');
		var type = $(this).attr('data-type');
		// var canvas = document.getElementById('myChart');
		// var context = canvas.getContext('2d');
		// context.clearRect(0,0, canvas.width, canvas.height);
		var ctx = document.getElementById('myChart').getContext('2d');
		var chart = new Chart(ctx, {
			// The type of chart we want to create
			type: type,
			// "line - Охват аудитории, Конверсии"
			// The data for our dataset
			data: {
				labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль"],
				datasets: [
					{
						label: h2,
						backgroundColor: color,
						borderColor: color,
						data: arr
					}
				]
			},
			// Configuration options go here
			options: {}
		});
	});
	$('#questions').on('click', '.rowlink', function (event) {
		var answer = $(this).find('.getAnswer').attr('data-answer');
		$('#answer').val(answer);
	});

	/*modal*/
	p = $('.popup__overlay.modal')
	modal_success = $('.popup__overlay.modal_success');
	$('#popup__toggle, #popup__toggle2').click(function() {
		p.css('display', 'block')
		$('#popup__toggle').hide();
	});
	p.click(function(event) {
		e = event || window.event
		if (e.target == this) {
			$(p).css('display', 'none');
		}
	});
	modal_success.click(function(event) {
		e = event || window.event
		if (e.target == this) {
			$(modal_success).css('display', 'none');
		}
	});
	$('.popup__close').click(function() {
		p.css('display', 'none');
		modal_success.css('display', 'none');
		$('#popup__toggle').show();
	});
	p.click(function () {
		$('#popup__toggle').show();
	});
	modal_success.click(function () {
		$('#popup__toggle').show();
	});
	$('#phone').inputmask("+9(999) 999-9999");
	$('#phone2').inputmask("+9(999) 999-9999");
});
