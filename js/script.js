//WebP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});

//burger
$(document).ready(function() {
	$('.menu__burger').click(function(event){
		$('.menu__burger, .top__menu_nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//slider
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,//наявність стілок
		dots:false,//наявніст кружечків знизу
		adaptiveHeight:true,//адаптивність висоти фото
		slidesToShow:4,//кількість слайдів до показу
		slidesToScroll:1,//кількість слайдів за одну прокрутку
		speed:1000,//швидкіть прокрутки в мс
		easing:'ease',//динаміка прокрутки(наявні приклади в шрарглці урок про анімацію)
		infinite:true,//віповідає за те чи буде слайдер безкінечний/.slick-disable-новий клас для стрілочки при значенні false
		initialSlide:0,//відповідає за номер стартового слайда
		autoplay: true,//авто прокрутка
		autoplaySpeed:1500,//швидкість автопрокрутки
		pauseOnFocus:true,//пауза при наведенні на фото/доти, відновлюється, коли прибрав
		pauseOnHover:true,//пауза при натисканні на фото, відновлюється при перезавантаженні
		pauseOnDotsHover:true,//пауза при натисканні на доти, відновлюється при перезавантаженні
		draggable:true,//відповідає за можливість прокрутки за допомогою протягування мишкою
		swipe:true,// відповідає за переключення протягуванням тачскріном
		touchTreshhold:5,//відповідає за відстань, яку треба протягнути,щоб слайд змінився/більше значення=менша відстань
		touchMove:true,//включає можливіть рухати слайдер, при значенні false буде перемикатись при протягуванні, але не рухатсь за стрілкою
		waitForAnimate:false,//при значенні false слайди перемикаються зі швидкістю клікання по стрілкам
		centerMode:false,//при включеній опції додається новий клас slick-center
		varibleWidth:true,//дає можливість самому контенту всередині слайда займати відповідну ширину, коли потрібний адаптивний слайдер
		rows:1,//кількіт рядів в вслайді
		slidesPerRow:1, //кількість слайдів в ряду
		vertical:false, //вертикальний сладер, треба в .slider.slick-track - display:block
		verticalSwiping:false,//включає вертикальну прокрутку
		responsive:[
			{
				breakpoint:820,
					settings:{
					slidesToShow:3
				}
			},
			{
				breakpoint:642,
					settings:{
					slidesToShow:2
				}
			},
			{
				breakpoint:464,
					settings:{
					slidesToShow:1
				}
			}
		]

	});
});