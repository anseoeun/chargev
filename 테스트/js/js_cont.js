// JavaScript Document
/*let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
window.addEventListener('touchend', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});*/

// 이메일 @입력 시 나오는 메일 리스트
$(function () {
    var info = $('.info');

    $('#email-input').mailtip({
        mails: ['naver.com', 'gmail.com', 'hanmail.net', 'daum.net'],
        onselected: function (mail) {
            info.text('you choosed email: ' + mail)
        }
    });
});

var iframe = false
if (self !== top) {
  iframe = true
}

//지도 시작
$(document).ready(function () {
  mapSize();
  mapSearch();
});

//지도
function mapSize() {
  if ($('.map-search .map').length <= 0) return;

  var winw;
  winSet();
  fnc();

  $(window).resize(function () {
    winSet();
    fnc();

  });

  function winSet() {
    winw = $(window).outerWidth();
    if ($('.map-search .map').parents().is('.pagepopup.layerpop')) {
      winw = $('.map-search .map').parents('.layerpop').find('.wrapper').outerWidth();
    }
  }

  function fnc() {
    var mapw = $('.map-search .map').outerWidth();
    var maph = $('.map-search .map').outerHeight();
    var scale = winw / mapw
    var left = (mapw - (mapw * scale)) / 2;
    var top = (maph - (maph * scale)) / 2;
    var height = maph * scale;

    if (winw <= 405) {
      $('.map-search').attr('style', '');
      if (iframe) {
        $('.map-search-wrap').attr('style', 'padding-bottom:' + top * 0.5 + 'px;');
        $('.map-search').attr('style', 'height:' + height + 'px;margin-bottom:-' + top * 1.8 + 'px;padding:' + top + 20 + 'px 0;');
        $('.map-search .map').attr('style', 'transform:scale(' + scale + ');margin-left:-' + left + 'px;margin-top:-' + top * 2 + 'px;');
      } else {
        $('.map-search').attr('style', 'height:' + height + 'px;margin-bottom:-' + (top * 1.7) + 'px;padding:' + (20 + top / 2) + 'px 0;');
        $('.map-search .map').attr('style', 'transform:scale(' + scale + ');margin-left:-' + left + 'px;margin-top:-' + top * 1.5 + 'px;');
      }

    } else {
      $('.map-search-wrap').attr('style', '');
      $('.map-search').attr('style', '');
      $('.map-search .map').attr('style', '');
    }
  }
}


function mapSearch() {
  if ($('.map-search .map').length <= 0) return;

  var start = false;
  var arrive = false;
  var $startStation = $('[data-id="startStation"]');
  var $startArea = $('[data-id="startArea"]');
  var $arriveStation = $('[data-id="arriveStation"]');
  var $arriveArea = $('[data-id="arriveArea"]');
  var $confirmBtn = $('[data-btn="stationConfirm"]');

  function stationInit() {
    $('.map-search .map .list li').removeClass('on start arrive');
    $('.map-search .map .list li .pos').text('');
    stationInitSetting();
    $confirmBtn.attr('disabled', 'disabled');
    start = false;
    arrive = false;
  }

  function stationSetting(station, area) {
    if (!start) {
      $startStation.text(station);
      $startArea.text(area);
    } else if (start && !arrive) {
      $arriveStation.text(station);
      $arriveArea.text(area);
    }
  }

  function stationInitSetting() {
    $startStation.css('color', '#999')
    $arriveStation.css('color', '#999')
    $startStation.text('출발역');
    $startArea.text('출발역 선택');
    $arriveStation.text('도착역');
    $arriveArea.text('도착역 선택');
  }


  //$('.map-search .map .list li').append('<span class="pos"></span>')
  $('.map-search .map .list li i').on('click', function () {
    var $this = $(this);
    checkStation($this);
  });


  function checkStation(station) {
    var $station = station;
    var name = $station.siblings('.tit').text();
    var area = $station.siblings('.txt').text();

    if (!start) {
      $station.parents('li').addClass('on start');
      //$station.siblings('.pos').text('출발');

      stationSetting(name, '출발역');
      $startStation.css('color', '#1d1d1d')
      start = true;
      return false;
    } else if (start && !arrive) {
      if ($station.parents('li').hasClass('start')) {
        stationInit();
        return false;
      }

      $station.parents('li').addClass('on arrive');

      stationSetting(name, '도착역');
      $confirmBtn.removeAttr('disabled');
      $arriveStation.css('color', '#1d1d1d')
      arrive = true;
      //$station.siblings('.pos').text('도착');
      return false;
    } else {
      stationInit();
      checkStation($station);
    }
  }
}
//지도 끝


    
// dot-bg
function dotBg(){
  if($('.tickets_comp_ticket .pay_more .bot_bg').length <= 0) return;
  $('.tickets_comp_ticket .pay_more .bot_bg').html('');
  $('.tickets_comp_coupon .top_bg').html('');
  var f = function(){
    $('.tickets_comp_ticket .pay_more .bot_bg, .tickets_comp_coupon .top_bg').each(function(){
      $(this).html('<div class="side"></div> <div class="auto"> </div> <div class="side"></div>')
      var wrap = $(this).parents('.bot_bg')
      var w = $(this).width()
      var num = Math.floor((w - 20) / 15)
      var wrap = $(this).find('.auto')

      for(var i = 0; i < num ; i++){
        wrap.append('<span></span>')
      }
      $(this).find('.side').width( (w - 15*num) / 2)
    });   
  }
  f()

  $(window).on('resize', function(){
    $('.tickets_comp_ticket .pay_more .bot_bg').html('');
    $('.tickets_comp_coupon .top_bg').html('');
    f();
  });
}

$(function () {
  dotBg()
});