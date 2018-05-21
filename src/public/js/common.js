$(function() {
	let loading = {
		show: function() {
			$("body").append("<div class='main-loading'></div>");
		},
		hide: function() {
			$(".main-loading").remove();
		}
	}
	$("body").easeScroll();

  particlesJS.load('works', 'assets/particles.json', function () {
    console.log('LOADED');
  });

	$("[data-bg]").each(function() {
		let $this = $(this),
				$bg = $this.attr("data-bg");

		$this.css({
			backgroundImage: 'url('+$bg+')',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			backgroundSize: 'cover'
		});
		$this.prepend("<div class='overlay'></div>");
	});

	$(".smooth-link").click(function() {
		let $this = $(this),
				$target = $($this.attr("href"));
		$("html, body").animate({
			scrollTop: $target.offset().top - ($(".main-navbar").outerHeight() - 1)
		});

		return false;
	});
  $('.works').ready(() => {
    let works = new Swiper('.works', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  });

  $('.technologies').ready(() => {
    let technologies = new Swiper('.technologies', {
      slidesPerView: 4,
      spaceBetween: 10,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      breakpoints: {
        991: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        502: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  });

  $('.masonry').imagesLoaded(function() {
    setTimeout(() => {
      $('.masonry').masonry({
        itemSelector: '.masonry-item',
      });
    }, 2000)
  });

	$(window).scroll(function() {
		let $this = $(this);
		if($this.scrollTop() > $(".hero").outerHeight() - 150) {
			$(".main-navbar").addClass("bg-dark");
		}else{
			$(".main-navbar").removeClass("bg-dark");
		}

		$("section").each(function() {
			if($this.scrollTop() >= ($(this).offset().top - $(".main-navbar").outerHeight())) {
				$(".smooth-link").parent().removeClass("active");
				$(".smooth-link[href='#"+$(this).attr("id")+"']").parent().addClass('active');
			}
		});
	});

	$("[data-toggle=read]").click(function() {
		let $this = $(this),
				$id = $this.attr("id");

		$("body").css({
			overflow: "hidden"
		});

		let $element = '<div class="article-read">';
				$element += '<div class="article-read-inner">';
				$element += '<div class="article-back">';
				$element += '<a class="btn btn-outline-primary"><i class="ion ion-chevron-left"></i> Back</a>';
				$element += '</div>';
				$element += '<h1 class="article-title">{title}</h1>';
				$element += '<div class="article-metas">';
				$element += '<div class="meta">';
				$element += '	{date}';
				$element += '</div>';
				$element += '<div class="meta">';
				$element += '	{category}';
				$element += '</div>';
				$element += '<div class="meta">';
				$element += '	{author}';
				$element += '</div>';
				$element += '</div>';
				$element += '<figure class="article-picture"><img src="{picture}"></figure>';
				$element += '<div class="article-content">';
				$element += '{content}';
				$element += '</div>';
				$element += '</div>';
				$element += '</div>';

		$.ajax({
			url: "mock/article.json",
			dataType: 'json',
			beforeSend: function() {
				loading.show();
			},
			complete: function() {
				loading.hide();
			},
			success: function(data) {
				let reg = /{([a-zA-Z0-9]+)}/g,
						res = [],
						element = $element;
				while(match = reg.exec($element)) {
					element = element.replace('{' + match[1] + '}', data[match[1]]);
				}

				$("body").prepend(element);
				$(".article-read").fadeIn();
				$(document).on("click", ".article-back .btn", function() {
					$(".article-read").fadeOut(function() {
						$(".article-read").remove();
						$("body").css({
							overflow: 'auto'
						});
					});
					return false;
				});
			}
		});

		return false;
	});

	/*$("#contact-form").submit(function() {
		let $this = $(this);
		$.ajax({
			url: 'server/send.php',
			type: "post",
			data: $this.serialize(),
			dataType: 'json',
			beforeSend: function() {
				loading.show();
			},
			complete: function() {
				loading.hide();
			},
			success: function(data) {
				if(data.status == true) {
					swal("Success", data.data, "success");
					$this[0].reset();
				}else{
					swal("Failed", data.data, "error");
				}
			}
		});
		return false;
	});*/

});
