window.onload = function () {

 /* ========================= possibility ========================= */

new Chart(document.getElementById("radar-chart"), {
  type: 'radar',
  data: {
    labels: ["책임감", "성실성", "도전정신", "응용력", "소통능력"],
    datasets: [{
      label: "",
      fill: true,
      backgroundColor: "hsl(10, 43%, 90%, 60%)",
      borderColor: "#e6c7c1",
      data: [95, 95, 80, 75, 100]
    }]
  },

});
  




  /* ========================= skill ========================= */
  function makeCircle(_id, _endColor) {
    var bar = new ProgressBar.Circle(_id, {
      color: '#333',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4, //바깥 선 굵기
      trailWidth: 1, //안 선 굵기
      easing: 'easeInOut',
      duration: 1500,
      text: {
        autoStyleContainer: true
      },
      from: {
        color: '#fff',
        width: 1
      },
      to: {
        color: _endColor,
        width: 3
      },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value); //원 안에들어가는 요소
        }

      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    return bar;
  }

  let bar_html = makeCircle(pro_html, '#d1baf35e');
  let bar_css = makeCircle(pro_css, '#d1baf35e');
  let bar_js = makeCircle(pro_js, '#d1baf35e');
  let bar_jquery = makeCircle(pro_jquery, '#d1baf35e');
  let bar_vue = makeCircle(pro_vue, '#d1baf35e');
  let bar_git = makeCircle(pro_git, '#d1baf35e');
  let bar_flex = makeCircle(pro_flex, '#d1baf35e');
  let bar_scss = makeCircle(pro_scss, '#d1baf35e');

  new Waypoint({
    element: $('.skill'),
    handler: function (direction) {
      if (direction == 'down') {
        // 모션실행
        bar_html.animate(0.95); // Number from 0.0 to 1.0
        bar_css.animate(0.9); // Number from 0.0 to 1.0
        bar_js.animate(0.75); // Number from 0.0 to 1.0
        bar_jquery.animate(0.75); // Number from 0.0 to 1.0
        bar_vue.animate(0.7); // Number from 0.0 to 1.0
        bar_git.animate(0.8); // Number from 0.0 to 1.0
        bar_flex.animate(0.9); // Number from 0.0 to 1.0
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