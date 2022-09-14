window.onload = function () {
  // 포트폴리오 탭기능
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




  // 프로그래스바
  function makeCircle(_id, _stroke, _startColor, _endColor) {
    var bar = new ProgressBar.Circle(_id, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: _stroke,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 2500,
      text: {
        autoStyleContainer: true
      },
      from: {
        color: _startColor,
        width: 1
      },
      to: {
        color: _endColor,
        width: 2
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }

      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    return bar;
  }

  let bar_html = makeCircle(pro_html, 8, '#999' ,'#e4f2c6');
  let bar_css = makeCircle(pro_css, 7,'#999' , '#333');
  let bar_js = makeCircle(pro_js, 5,'#999' , '#333');
  let bar_jquery = makeCircle(pro_jquery, 5,'#999' , '#f00');
  let bar_vue = makeCircle(pro_vue, 2,'#999' , '#d1baf35e');
  let bar_git = makeCircle(pro_git, 10,'#999' , '#f00');
  let bar_scss = makeCircle(pro_scss, 10,'#999' , '#f00');
  let bar_flex = makeCircle(pro_flex, 10,'#999' , '#f00');
  let bar_grid = makeCircle(pro_grid, 10,'#999' , '#f00');
  let bar_maria = makeCircle(pro_maria, 10,'#999' , '#f00');



  new Waypoint({
    element: $('.possibility'),
    handler: function (direction) {
      if (direction == 'down') {
        // 모션실행
        bar_html.animate(1.0); // Number from 0.0 to 1.0
        bar_css.animate(0.8); // Number from 0.0 to 1.0
        bar_jquery.animate(1.0); // Number from 0.0 to 1.0
        bar_vue.animate(1.0); // Number from 0.0 to 1.0
      } else if (direction == 'up') {}
    },
    offset: '50%'
  });










  AOS.init();

}