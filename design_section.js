// 디자인섹션에 들어가는 js들은 일단 여기에 다 넣고, 나중에 CDN으로 올린다.
// 이 js 파일은 web only 이며 wish js의 반응형 셋팅보다 선실행 되어야 한다.



function multi_slide_play(slide_group){
	if (slide_group.hasClass('multi_slide01')) {
		slide_group.children('.thum_slide').append(slide_group.children('.big_slide').find('picture').clone());
		slide_group.children('.big_slide').slick({
			arrows: false,
			autoplay: false,
			infinite: true,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			pauseOnHover: false,
			pauseOnFocus: false,
			focusOnSelect: true,
			touchThreshold: 20,
			asNavFor: slide_group.children('.thum_slide')
		});

		slide_group.children('.thum_slide').slick({
			centerMode: true,
			centerPadding: '0',
			arrows: true,
			autoplay: false,
			infinite: true,
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			pauseOnHover: false,
			pauseOnFocus: false,
			focusOnSelect: true,
			touchThreshold: 20,
			prevArrow: '<div class="slide_arrow prev"><i class="fa-solid fa-chevron-left"></i></div>',
			nextArrow: '<div class="slide_arrow next"><i class="fa-solid fa-chevron-right"></i></div>',
			asNavFor: slide_group.children('.big_slide')
		});
	}

	if (slide_group.hasClass('multi_slide02')) {
		slide_group.find('.big_img').children('a').each(function(){
			slide_group.children('.big_slide').append($(this));
		});
		slide_group.children('.con_slide').slick({
			dots: false,
			arrows: false,
			infinite: true,
			autoplay: true,
			speed: 500,
			autoplaySpeed: 5000,
			pauseOnHover: false,
			pauseOnFocus: false,
			touchThreshold: 20,
			asNavFor: slide_group.children('.big_slide')
		});
		slide_group.children('.big_slide').slick({
			dots: true,
			arrows: false,
			infinite: true,
			autoplay: true,
			speed: 500,
			autoplaySpeed: 5000,
			pauseOnHover: false,
			pauseOnFocus: false,
			touchThreshold: 20,
			asNavFor: slide_group.children('.con_slide')
		});

		slide_group.children('.big_slide').find('.slick-dots li').each(function(){
			let tab_tit = $(this).closest('.multi_slide02').children('.con_slide').find('.slick-slide').eq($(this).index()+1).data('tit');
			$(this).children('button').text(tab_tit);
		});

	}
}

function slick_slide_play(slide_list){
	let slide_section = slide_list.closest('section');

	if (slide_section.hasClass('col3_slide01') && slide_section.hasClass('img_slide')) {

		slide_list.slick({
			arrows: false,
			autoplay: true,
			infinite: true,
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			pauseOnHover: false,
			pauseOnFocus: false,
			focusOnSelect: false,
			touchThreshold: 20,
			responsive: [
			    {
			      breakpoint: 767,
			      settings: {
			      	slidesToShow: 1,
			      	centerMode: true,
			      	centerPadding: '30%'
			      }
			    },
			    {
			      breakpoint: 520,
			      settings: {
			      	slidesToShow: 1,
			      	centerMode: true,
			      	centerPadding: '15%'
			      }
			    }
			]
		});
	}

	if (slide_section.hasClass('col3_slide01') && slide_section.hasClass('box_slide')) {

		slide_list.slick({
			arrows: false,
			autoplay: true,
			infinite: true,
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			pauseOnHover: false,
			pauseOnFocus: false,
			focusOnSelect: false,
			touchThreshold: 20,
			responsive: [
			    {
			      breakpoint: 1023,
			      settings: {
			      	slidesToShow: 1,
			      	centerMode: true,
			      	centerPadding: '30%'
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			      	slidesToShow: 1,
			      	centerMode: true,
			      	centerPadding: '18%'
			      }
			    },
			    {
			      breakpoint: 540,
			      settings: {
			      	slidesToShow: 1,
			      	centerMode: true,
			      	centerPadding: '10%'
			      }
			    }
			]
		});
	}

	if (slide_section.hasClass('col5_slide01')) {

		slide_list.slick({
			arrows: false,
			autoplay: true,
			infinite: true,
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			pauseOnHover: false,
			pauseOnFocus: false,
			focusOnSelect: false,
			touchThreshold: 20,
			responsive: [
			    {
			      breakpoint: 1100,
			      settings: {
			      	slidesToShow: 4
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			      	slidesToShow: 2,
			      	centerMode: true,
			      	centerPadding: '20%'
			      }
			    },
			    {
			      breakpoint: 520,
			      settings: {
			      	slidesToShow: 2,
			      	centerMode: true,
			      	centerPadding: '0'
			      }
			    }
			]
		});
	}

	if (slide_section.hasClass('over_slide01')) {
		slide_list.slick({
			arrows: false,
			autoplay: true,
			infinite: true,
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplaySpeed: 3000,
			pauseOnHover: false,
			pauseOnFocus: false,
			focusOnSelect: true,
			touchThreshold: 20,
			responsive: [
			    {
			      breakpoint: 1600,
			      settings: {
			        slidesToShow: 4
			      }
			    },
	            {
			      breakpoint: 1000,
			      settings: {
			        slidesToShow: 3
			      }
			    },
			    {
			      breakpoint: 540,
			      settings: {
			        slidesToShow: 2
			      }
			    }
			]
		});
	}

	if (slide_section.hasClass('over_slide02')) {
		slide_list.slick({
			arrows: false,
			autoplay: true,
			infinite: true,
			dots: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplaySpeed: 3000,
			pauseOnHover: false,
			pauseOnFocus: false,
			focusOnSelect: true,
			touchThreshold: 20,
			responsive: [
	            {
			      breakpoint: 1600,
			      settings: {
			        slidesToShow: 3
			      }
			    },
			    {
			      breakpoint: 540,
			      settings: {
			        slidesToShow: 2
			      }
			    }
			]
		});
	}

	if (slide_section.hasClass('over_slide03')) {
		slide_list.slick({
			centerMode: true,
			centerPadding: '8%',
			arrows: false,
			autoplay: true,
			infinite: true,
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplaySpeed: 3000,
			pauseOnHover: false,
			pauseOnFocus: false,
			focusOnSelect: true,
			touchThreshold: 20,
			responsive: [
	            {
			      breakpoint: 2400,
			      settings: {
			        centerPadding: '12%',
			        slidesToShow: 3
			      }
			    },
	            {
			      breakpoint: 1600,
			      settings: {
			        centerPadding: '8%',
			        slidesToShow: 3
			      }
			    },
	            {
			      breakpoint: 1024,
			      settings: {
			        centerPadding: '5%',
			        slidesToShow: 3
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        centerPadding: '30%',
			        slidesToShow: 1
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        centerPadding: '15%',
			        slidesToShow: 1
			      }
			    }
			]
		});
	}

	if (slide_section.hasClass('col1_slide01')) {
		slide_list.slick({
			arrows: false,
			autoplay: true,
			infinite: true,
			dots: true,
			speed: 1000,
			autoplaySpeed: 5000,
			pauseOnHover: true,
			pauseOnFocus: false,
			focusOnSelect: false,
			touchThreshold: 20
		});
	}


}



$(function(){

	$(".slide_out_prev").click(function(){
		$(this).closest('section').find('.slick-slider').first().slick('slickPrev');
	});
	$(".slide_out_next").click(function(){
		$(this).closest('section').find('.slick-slider').first().slick('slickNext');
	});

	$(".slide_list").each(function(){
		if (!$(this).hasClass('latest_list')) slick_slide_play($(this));
	});
	$(".multi_slide").each(function(){
		multi_slide_play($(this));
	});
	$(".rolling_con").each(function(){
		let wrap_w = $(this).width();
		let rolling_con = $(this).find('.con_move').children();
		let roll_w = rolling_con.width();
		let roll_per = roll_w / wrap_w;
		let roll_dur = 20;
		if ($(this).is('[data-dur]')) roll_dur = parseInt($(this).data('dur'));

		if (roll_w > wrap_w) {
			let clone_con = rolling_con.clone();
			rolling_con.after(clone_con);
			rolling_con = $(this).find('.con_move').children();

			let roll_time = (roll_per/1.6) * roll_dur;
			roll_time = roll_time / (2000/wrap_w);
			roll_time = Math.round(roll_time);

			rolling_con.css({'animation-name':'marquee', 'animation-duration':roll_time+'s'});
		}
	});
});