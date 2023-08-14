(function ($) {
  'use strict';

  // Sticky Menu
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 100) {
      $('.navigation').addClass('nav-bg');
    } else {
      $('.navigation').removeClass('nav-bg');
    }
  });

  // team slider
  $('.team-slider').slick({
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // clients logo slider
  $('.client-logo-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // about video popup
  $(document).ready(function () {
    $('.venobox').venobox();
  });

  // animation scroll js
  var html_body = $('html, body');
  $('.page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 50
        }, 1500, 'easeInOutExpo');
        return false;
      }
    }
  });

  // easeInOutExpo Declaration
  jQuery.extend(jQuery.easing, {
    easeInOutExpo: function (x, t, b, c, d) {
      if (t === 0) {
        return b;
      }
      if (t === d) {
        return b + c;
      }
      if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1));
      } + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  });

})(jQuery);



$(document).ready(function() {
  $('.navbar-toggler').on('click', function() {
    $(this).toggleClass('collapsed');
    $('.navbar-collapse').toggleClass('show');
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var userInput = document.getElementById("user-input");
  var chatLog = document.getElementById("chat-log");
  var sendButton = document.getElementById("send-button");
  var chatContainer = document.querySelector(".chat-container");
  var chatToggle = document.getElementById("chat-toggle");

  sendButton.addEventListener("click", function() {
    sendMessage();
  });

  userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  chatToggle.addEventListener("click", function() {
    chatContainer.classList.toggle("closed");
  });

  function sendMessage() {
    var message = userInput.value;
    if (message.trim() !== "") {
      addUserMessage(message);
      getBotResponse(message);
      userInput.value = "";
    }
  }

  function addUserMessage(message) {
    var messageElement = document.createElement("div");
    messageElement.className = "chat-message user";
    messageElement.innerHTML = "<p>" + message + "</p>";
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function addBotMessage(message) {
    var messageElement = document.createElement("div");
    messageElement.className = "chat-message bot";
    messageElement.innerHTML = "<p>" + message + "</p>";
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function getBotResponse(message) {
    // Aquí puedes agregar la lógica de inteligencia artificial para generar la respuesta del chatbot.
    // Por simplicidad, en este ejemplo se utiliza una respuesta fija.
    var response = "Gracias por tu mensaje. Nuestro equipo de soporte técnico se pondrá en contacto contigo pronto.";
    addBotMessage(response);
  }
});



// Función para ocultar el banner de cookies y guardar la preferencia en una cookie
function acceptCookies() {
  var cookieBanner = document.getElementById('cookie-banner');
  cookieBanner.style.display = 'none';

  // Crear una cookie con la fecha de expiración en 365 días
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 365);
  document.cookie = 'cookies_accepted=true; expires=' + expirationDate.toUTCString() + '; path=/';
}

// Comprobar si el usuario ya aceptó las cookies
function checkCookiesAccepted() {
  var cookiesAccepted = document.cookie.indexOf('cookies_accepted=true') !== -1;
  if (!cookiesAccepted) {
      var cookieBanner = document.getElementById('cookie-banner');
      cookieBanner.style.display = 'block';
  }
}

// Evento clic en el botón de aceptar cookies
document.getElementById('accept-cookie-btn').addEventListener('click', acceptCookies);

// Comprobar las cookies al cargar la página
checkCookiesAccepted();
