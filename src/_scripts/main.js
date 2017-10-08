// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var $ = require('jquery-easing');

$(function() {
    var navs = ['#about', '#projects', '#contact'];

    // hand-rolled scrollspy handlers
    $(window).scroll(function() {
        if(!isElementInView($('header'))) {
            $('nav').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
        }
    });

    // smooth scroll effect
    // https://stackoverflow.com/a/6677069
    $("nav a").click(function() {
        var linkTarget = $(this).attr('href');

        $('html, body').animate({scrollTop: $(linkTarget).offset().top - 50}, 600, 'easeInOutCubic');
    });
});

// source: https://stackoverflow.com/a/488073
function isElementInView(element, fullyInView) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();

    if (fullyInView === true) {
        return ((pageTop < elementTop) && (pageBottom > elementBottom));
    } else {
        return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
    }
};
