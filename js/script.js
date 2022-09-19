window.onload = function () {

  /* ========================= header ========================= */
  let gnbButton = $('.gnb-button');
  gnbButton.eq(0).addClass('gnb-button-active');
  $.each(gnbButton, function (index, item) {
    $(this).click(function (event) {

      event.preventDefault();

      //  일단 모든 클래스 제거
      gnbButton.removeClass('gnb-button-active');
      // 클릭된 대상만 클래스 추가
      $(this).addClass('gnb-button-active');

      // 부드럽게 이동하기
      let posY = $(this).attr('href');
      posY = $(posY).offset().top;
      posY = parseInt(posY);

      gsap.to($('html'), 0.5, {
        scrollTo: posY - 90
      });

    });
  });

  
// 스크롤시 섹션이동








  /* ========================= home ========================= */
  const content = "안녕하세요 :) \n  프론트엔드 개발자 \n 조효민 입니다.";
  const text = document.querySelector(".home-text");
  let i = 0;

  function typing() {
      let txt = content[i++];
      text.innerHTML += txt === "\n" ? "<br/>" : txt;
      if (i > content.length) {
          text.textContent = "";
          i = 0;
      }
  }
  setInterval(typing, 150)

  /* ========================= gotop ========================= */
  let go_top = $('.gotop');
  let buttonList = $('.button-list');
  go_top.click(function () {
    $('html').animate({
      scrollTop: 0
    }, 1000);
  });


  new Waypoint({
    element: $('.about'), // html 의 기준이 어딘가?
    handler: function (direction) {
      if (direction == 'down') {
        buttonList.show();
      } else if (direction == 'up') {
        buttonList.hide();
        contactList.hide();
      }
    },
    offset: '50%'
  });


  /* ========================= contact ========================= */
  let contact = $('.contact');
  let contactList = $('.contact-list');
  contact.click(function (event) {
    event.preventDefault();
    event.stopPropagation();
    // contact 를 눌렀을때 나왔다가 다시누르면 다시 나옴
    contactList.stop().toggle();
  });


  $('body').click(function (event) {
    contactList.hide();
  });




  /* ========================= possibility ========================= */

  const labels = [
    '책임감',
    '도전정신',
    '포용력',
    'IT 활용 능력',
    '소통 능력'
  ];

  const data = {
    labels: labels,

    datasets: [{
      backgroundColor: 'rgb(230, 200, 194,30%)',
      borderColor: '#e6c7c1',
      borderWidth: 5,
      data: [95, 85, 95, 90, 100],
    }]
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scale: {
        min: 0,
        max: 100,
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          textStrokeWidth: 35
        }
      }
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );




  /* ========================= skill ========================= */
  function makeCircle(_id, _endColor) {
    var bar = new ProgressBar.Circle(_id, {
      color: '#333',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 6, //바깥 선 굵기
      trailWidth: 4, //안 선 굵기
      easing: 'easeInOut',
      duration: 1500,
      text: {
        autoStyleContainer: true
      },
      from: {
        color: _endColor,
        width: 1
      },
      to: {
        color: _endColor,
        width: 36
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(''); //원 안에들어가는 요소
        }

      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    return bar;
  }

  let bar_html = makeCircle(pro_html, '#f1a294');
  let bar_css = makeCircle(pro_css, '#93a9eb');
  let bar_js = makeCircle(pro_js, '#f9ecab');
  let bar_git = makeCircle(pro_git, '#000');
  let bar_jquery = makeCircle(pro_jquery, '#414193');
  let bar_vue = makeCircle(pro_vue, '#3cb371');
  let bar_figma = makeCircle(pro_figma, '#a3e3f0');
  let bar_scss = makeCircle(pro_scss, '#c091c0');

  new Waypoint({
    element: $('.skill'),
    handler: function (direction) {
      if (direction == 'down') {
        // 모션실행
        bar_html.animate(0.95); // Number from 0.0 to 1.0
        bar_css.animate(0.9); // Number from 0.0 to 1.0
        bar_js.animate(0.75); // Number from 0.0 to 1.0
        bar_jquery.animate(0.8); // Number from 0.0 to 1.0
        bar_vue.animate(0.8); // Number from 0.0 to 1.0
        bar_git.animate(0.9); // Number from 0.0 to 1.0
        bar_figma.animate(0.9); // Number from 0.0 to 1.0
        bar_scss.animate(0.85); // Number from 0.0 to 1.0

      } else if (direction == 'up') {}
    },
    offset: '50%'
  });




  /* ========================= portfolio ========================= */
  let portfolioMenu = $('.portfolio-bt');
  let portfolioContent = $('.portfolio-content');
  portfolioMenu.eq(0).find('button').addClass('portfolio-menu-active');

  $.each(portfolioMenu, function (index, item) {
    $(this).find('button').click(function (event) {
      //  일단 모든 클래스 제거
      portfolioMenu.find('button').removeClass('portfolio-menu-active');
      // 클릭된 대상만 클래스 추가
      $(this).addClass('portfolio-menu-active');
      let data_cate = $(this).attr('data-cate');
      showPortfolio(data_cate);
    });
  });

  function showPortfolio(_cate) {
    $.each(portfolioContent, function (index, item) {
      let data_cate = $(this).attr('data-cate');
      let data_cate_arr = data_cate.split('-');
      if (_cate == 'all' || _cate == data_cate_arr[0] || _cate == data_cate_arr[1]) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }





  AOS.init();

}