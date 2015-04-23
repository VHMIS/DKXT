// Helpers
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});

(function ($) {
    $.fn.megamenu = function (options) {
        options = jQuery.extend({
            wrap: '#meganavigator',
            easing: "easeInOutCirc",
            speed: 300,
            justify: "left",
            mm_timeout: 250
        }, options);
        var menuwrap = $(this);
        $('li.level1').css({
            'float': options.justify
        });
        buildmenu(menuwrap);

        function buildmenu(mwrap) {
            mwrap.find('li').each(function () {
                var menucontent = $(this).find(".mega-content:first");
                var menuitemlink = $(this).find(".item-link:first");
                var menucontentinner = $(this).find(".mega-content-inner");
                var mshow_timer = 0;
                var mhide_timer = 0;
                var li = $(this);
                var islevel1 = (li.hasClass('level1')) ? true : false;
                var havechild = (li.hasClass('havechild')) ? true : false;
                if (menucontent) {
                    menucontent.hide();
                }
                li.mouseenter(function (el) {
                    el.stopPropagation();
                    clearTimeout(mhide_timer);
                    clearTimeout(mshow_timer);
                    addHover(li);
                    if (havechild) {
                        positionSubMenu(li, islevel1);
                        mshow_timer = setTimeout(function () {
                            showSubMenu(li, menucontent, menucontentinner);
                        }, options.mm_timeout);
                    }
                }).mouseleave(function (el) {
                    clearTimeout(mshow_timer);
                    clearTimeout(mhide_timer);
                    if (havechild) {
                        mhide_timer = setTimeout(function () {
                            hideSubMenu(li, menucontent, menucontentinner);
                        }, options.mm_timeout);
                    }
                    removeHover(li);
                });
            });
        }

        function showSubMenu(li, mcontent, mcontentinner) {
            mcontentinner.animate({
                opacity: 1
            }, 100, function () {
            });
            mcontent.stop(true, true).slideDown({
                duration: options.speed,
                easing: options.easing
            });
        }

        function hideSubMenu(li, mcontent, mcontentinner) {
            mcontentinner.animate({
                opacity: 0
            }, 2 * options.mm_timeout, function () {
            });
            mcontent.slideUp({
                duration: options.mm_timeout,
                easing: 'linear'
            });
        }

        function addHover(el) {
            $(el).addClass('hover');
        }

        function removeHover(el) {
            $(el).removeClass('hover');
        }

        function positionSubMenu(el, islevel1) {
            menucontent = $(el).find(".mega-content:first");
            menuitemlink = $(el).find(".item-link:first");
            menucontentinner = $(el).find(".mega-content-inner");
            wrap_O = menuwrap.offset().left;
            wrap_W = menuwrap.outerWidth();
            menuitemli_O = menuitemlink.parent('li').offset().left;
            menuitemli_W = menuitemlink.parent('li').outerWidth();
            menuitemlink_H = menuitemlink.outerHeight();
            menuitemlink_W = menuitemlink.outerWidth();
            menuitemlink_O = menuitemlink.offset().left;
            menucontent_W = menucontent.outerWidth();
            if (islevel1) {
                menucontent.css({
                    'top': menuitemlink_H + "px",
                    'left': menuitemlink_O - menuitemli_O + 'px'
                })
                if (options.justify == "left") {
                    var wrap_RE = wrap_O + wrap_W;
                    var menucontent_RE = menuitemlink_O + menucontent_W;
                    if (menucontent_RE >= wrap_RE) {
                        menucontent.css({
                            'left': wrap_RE - menucontent_RE + menuitemlink_O - menuitemli_O + 'px'
                        });
                    }
                } else if (options.justify == "right") {
                    var wrap_LE = wrap_O;
                    var menucontent_LE = menuitemlink_O - menucontent_W + menuitemlink_W;
                    if (menucontent_LE <= wrap_LE) {
                        menucontent.css({
                            'left': wrap_O - (menuitemli_O - menuitemlink_O) - menuitemlink_O + 'px'
                        });
                    } else {
                        menucontent.css({
                            'left': menuitemlink_W + (menuitemlink_O - menuitemli_O) - menucontent_W + 'px'
                        });
                    }
                }
            } else {
                _leftsub = 0;
                menucontent.css({
                    'top': menuitemlink_H * 0 + "px",
                    'left': menuitemlink_W - _leftsub + 'px'
                })
                if (options.justify == "left") {
                    var wrap_RE = wrap_O + wrap_W;
                    var menucontent_RE = menuitemli_O + menuitemli_W + _leftsub + menucontent_W;
                    if (menucontent_RE >= wrap_RE) {
                        menucontent.css({
                            'left': _leftsub - menucontent_W + 'px'
                        });
                    }
                } else if (options.justify == "right") {
                    var wrap_LE = wrap_O;
                    var menucontent_LE = menuitemli_O - menucontent_W + _leftsub;
                    if (menucontent_LE <= wrap_LE) {
                        menucontent.css({
                            'left': menuitemli_W - _leftsub + 'px'
                        });
                    } else {
                        menucontent.css({
                            'left': _leftsub - menucontent_W + 'px'
                        });
                    }
                }
            }
        }
    };
})(jQuery);

function _math_round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

$(document).ready(function () {
    // Var
    var nhommon = {
        1: {
            1: 'Toán',
            2: 'Lý',
            3: 'Hóa'
        },
        2: {
            1: 'Toán',
            2: 'Lý',
            3: 'NN'
        }
    }

    $('#meganavigator').megamenu({
        'wrap': '#yt_menuwrap .container',
        'easing': 'easeInOutCirc',
        'speed': 100,
        'justify': 'left'
    });

    $('form#xettuyen select[name=nhommon]').on('change', function (e) {
        var me = $(this)
        var group = me.val();

        if (group == 0) {
            $('form#xettuyen div.sub_1_form label').text('Điểm môn 1')
            $('form#xettuyen div.sub_1_form input.nhapdiemform').prop('disabled', true)
            $('form#xettuyen div.sub_2_form label').text('Điểm môn 2')
            $('form#xettuyen div.sub_2_form input.nhapdiemform').prop('disabled', true)
            $('form#xettuyen div.sub_3_form label').text('Điểm môn 3')
            $('form#xettuyen div.sub_3_form input.nhapdiemform').prop('disabled', true)
        } else {
            $.each(nhommon[group], function (index, value) {
                $('form#xettuyen div.sub_' + index + '_form label').text('Điểm môn ' + index + " : " + value)
                $('form#xettuyen div.sub_' + index + '_form input.nhapdiemform').prop('disabled', false)
            })
        }
    })

    $('form#xettuyen input.nhapdiemform').on('change', function (e) {
        var me = $(this)
        var form = me.parent().parent().parent()
        var count = 0;
        var sum = 0;
        var error = false;

        form.removeClass('has-error')

        form.find('.nhapdiemform').each(function () {
            var sub = $(this)

            if (sub.val() != '') {
                if ($.isNumeric(sub.val()) && parseFloat(sub.val()) >= 0 && parseFloat(sub.val()) <= 10) {
                    count++
                    sum += parseFloat(sub.val())
                } else {
                    error = true;
                }
            }
        })

        if (error) {
            form.find('.ketqua').val('Nhập sai')
            form.addClass('has-error')
            return;
        }

        form.find('.ketqua').val(_math_round(sum / count, 2))
    })
})
