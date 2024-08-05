// Import our custom CSS
import '/src/css/custom.scss';
import $ from 'jquery';
import '/src/scripts/jquery.particleground.js';
import '/src/scripts/background.js';
import '/src/scripts/3d.js';
import '/src/scripts/projectsList.js';

$(document).ready(function () {
  let menuId = -1;

  console.log("test");

  function previous() {
    console.log("menuId = " + menuId);
    switch (menuId) {
      case 0:
        fadeObject('#mention-legale-text', 0, 'none');
        break;
      case 1:
        fadeObject('#render-menu', 0, 'none');
        break;
      case 2:
        moveObject('#profil', '-70%');
        resizeMenu('60%', 0);
        fadeObject('#profil-content', 0, 'all');
        $('#profil-content').css('padding-left', '40%');
        break;
      case 3:
        moveObject('#profil', '-70%');
        resizeMenu('60%', 0);
        fadeObject('#diplomes-content', 0, 'all');
        $('#diplomes-content').css('padding-left', '40%');
        break;
      case 4:
        fadeObject('#render-game', 0, 'none');
            $('#webgl-render').attr({
                "src": ""
            });
        break;
      case 5:
        moveObject('#projects', '-70%');
        fadeObject('#project-text', 0, 'none');
        break;
      default:
        break;
    }
    menuId = -1;
    fadeMenu(1, '0%', false, 'relative', "visible");
  }

  function fadeObject(name, opacity, userselect) {
    $(name).css('opacity', opacity);
    if (opacity > 0) {
      setTimeout(function() { $(name).css('z-index', 1); }, 1000);
    } else {
      setTimeout(function() { $(name).css('z-index', 'auto'); }, 1000);
    }
    $(name).css('user-select', userselect);
  }

  function fadeMenu(opacity, padding, disable, pos, visi) {
    $('.menu-parent').css({
      'opacity': opacity,
      'padding-top': padding,
      'position': pos,
      'visibility': visi
    });

    if (opacity > 0) {
      $('.menu-parent').css('z-index', 1);
    } else {
      setTimeout(function() { $('.menu-parent').css('z-index', 'auto'); }, 1000);
    }
    $('.menu-button').prop('disabled', disable);
  }

  function resizeMenu(widthSize, distance) {
    $('#menu_container').css('width', widthSize);
    moveObject('#menu_container', distance);
  }

  function moveObject(name, distance) {
    $(name).css('left', distance);
  }

  $('#mention-button').on('click', function () {
    previous();
    fadeMenu(0, '10%', true, 'absolute', "hidden");
    fadeObject('#mention-legale-text', 1, 'auto');
    menuId = 0;
  });

  $('#previous-button').on('click', function () {
    previous();
  });

  $('#modelisation-button').on('click', function () {
    previous();
    fadeMenu(0, '10%', true, 'absolute', "hidden");
    fadeObject('#render-menu', 1, 'auto');
    menuId = 1;
  });

  $('#profil-button').on('click', function () {
    previous();
    fadeObject('#profil-content', 1, 'auto');
    moveObject('#profil', '-20%');
    resizeMenu('50%', '20%');
    $('#profil-content').css('padding-left', '45%');
    menuId = 2;
  });

  $('#diplomes-button').on('click', function () {
    previous();
    fadeObject('#diplomes-content', 1, 'auto');
    moveObject('#profil', '-20%');
    resizeMenu('50%', '20%');
    $('#diplomes-content').css('padding-left', '45%');
    menuId = 3;
  });

  $('#games-button').on('click', function () {
    previous();
    fadeMenu(0, '10%', true, 'absolute', "hidden");
    fadeObject('#render-game', 1, 'auto');
      $('#webgl-render').attr({
          "src": "Games/golem/index.html"
      });
    menuId = 4;
  });

  $('#projects-button').on('click', function () {
    previous();
    fadeMenu(0, '10%', true, 'absolute', "hidden");
    fadeObject('#project-text', 1, 'auto');
    moveObject('#projects', '0');
    menuId = 5;
  });

  $('.menu-button').on('mouseenter', function () {
    let element = $(this).find('.menu-content');
    element.css('opacity', 1);
    element.css('padding-bottom', '20%');
  });

  $('.menu-button').on('mouseleave', function () {
    let element = $(this).find('.menu-content');
    element.css('opacity', 0);
    element.css('padding-bottom', '0');
  });
});
