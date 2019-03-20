/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);

(function($) {
    'use strict';
    if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
        return;
    }
    wpcf7 = $.extend({
        cached: 0,
        inputs: []
    }, wpcf7);
    $(function() {
        wpcf7.supportHtml5 = (function() {
            var features = {};
            var input = document.createElement('input');
            features.placeholder = 'placeholder' in input;
            var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
            $.each(inputTypes, function(index, value) {
                input.setAttribute('type', value);
                features[value] = input.type !== 'text';
            });
            return features;
        })();
        $('div.wpcf7 > form').each(function() {
            var $form = $(this);
            wpcf7.initForm($form);
            if (wpcf7.cached) {
                wpcf7.refill($form);
            }
        });
    });
    wpcf7.getId = function(form) {
        return parseInt($('input[name="_wpcf7"]', form).val(), 10);
    };
    wpcf7.initForm = function(form) {
        var $form = $(form);
        $form.submit(function(event) {
            if (typeof window.FormData !== 'function') {
                return;
            }
            wpcf7.submit($form);
            event.preventDefault();
        });
        $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
        wpcf7.toggleSubmit($form);
        $form.on('click', '.wpcf7-acceptance', function() {
            wpcf7.toggleSubmit($form);
        });
        $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function() {
            var name = $(this).attr('name');
            $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
        $('.wpcf7-list-item.has-free-text', $form).each(function() {
            var $freetext = $(':input.wpcf7-free-text', this);
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(':checkbox, :radio', this).is(':checked')) {
                $freetext.prop('disabled', false);
            } else {
                $freetext.prop('disabled', true);
            }
            $wrap.on('change', ':checkbox, :radio', function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
        if (!wpcf7.supportHtml5.placeholder) {
            $('[placeholder]', $form).each(function() {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeheld');
                $(this).focus(function() {
                    if ($(this).hasClass('placeheld')) {
                        $(this).val('').removeClass('placeheld');
                    }
                });
                $(this).blur(function() {
                    if ('' === $(this).val()) {
                        $(this).val($(this).attr('placeholder'));
                        $(this).addClass('placeheld');
                    }
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
            $form.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
            $form.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        $('.wpcf7-character-count', $form).each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function(target) {
                var $target = $(target);
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $(':input[name="' + name + '"]', $form).each(function() {
                updateCount(this);
                $(this).keyup(function() {
                    updateCount(this);
                });
            });
        });
        $form.on('change', '.wpcf7-validates-as-url', function() {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    wpcf7.submit = function(form) {
        if (typeof window.FormData !== 'function') {
            return;
        }
        var $form = $(form);
        $('.ajax-loader', $form).addClass('is-active');
        $('[placeholder].placeheld', $form).each(function(i, n) {
            $(n).val('');
        });
        wpcf7.clearResponse($form);
        var formData = new FormData($form.get(0));
        var detail = {
            id: $form.closest('div.wpcf7').attr('id'),
            status: 'init',
            inputs: [],
            formData: formData
        };
        $.each($form.serializeArray(), function(i, field) {
            if ('_wpcf7' == field.name) {
                detail.contactFormId = field.value;
            } else if ('_wpcf7_version' == field.name) {
                detail.pluginVersion = field.value;
            } else if ('_wpcf7_locale' == field.name) {
                detail.contactFormLocale = field.value;
            } else if ('_wpcf7_unit_tag' == field.name) {
                detail.unitTag = field.value;
            } else if ('_wpcf7_container_post' == field.name) {
                detail.containerPostId = field.value;
            } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
                var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
                detail.inputs.push({
                    name: owner + '-free-text',
                    value: field.value
                });
            } else if (field.name.match(/^_/)) {} else {
                detail.inputs.push(field);
            }
        });
        wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
        var ajaxSuccess = function(data, status, xhr, $form) {
            detail.id = $(data.into).attr('id');
            detail.status = data.status;
            detail.apiResponse = data;
            var $message = $('.wpcf7-response-output', $form);
            switch (data.status) {
                case 'validation_failed':
                    $.each(data.invalidFields, function(i, n) {
                        $(n.into, $form).each(function() {
                            wpcf7.notValidTip(this, n.message);
                            $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
                            $('[aria-invalid]', this).attr('aria-invalid', 'true');
                        });
                    });
                    $message.addClass('wpcf7-validation-errors');
                    $form.addClass('invalid');
                    wpcf7.triggerEvent(data.into, 'invalid', detail);
                    break;
                case 'acceptance_missing':
                    $message.addClass('wpcf7-acceptance-missing');
                    $form.addClass('unaccepted');
                    wpcf7.triggerEvent(data.into, 'unaccepted', detail);
                    break;
                case 'spam':
                    $message.addClass('wpcf7-spam-blocked');
                    $form.addClass('spam');
                    $('[name="g-recaptcha-response"]', $form).each(function() {
                        if ('' === $(this).val()) {
                            var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
                            wpcf7.notValidTip($recaptcha, wpcf7.recaptcha.messages.empty);
                        }
                    });
                    wpcf7.triggerEvent(data.into, 'spam', detail);
                    break;
                case 'aborted':
                    $message.addClass('wpcf7-aborted');
                    $form.addClass('aborted');
                    wpcf7.triggerEvent(data.into, 'aborted', detail);
                    break;
                case 'mail_sent':
                    $message.addClass('wpcf7-mail-sent-ok');
                    $form.addClass('sent');
                    wpcf7.triggerEvent(data.into, 'mailsent', detail);
                    break;
                case 'mail_failed':
                    $message.addClass('wpcf7-mail-sent-ng');
                    $form.addClass('failed');
                    wpcf7.triggerEvent(data.into, 'mailfailed', detail);
                    break;
                default:
                    var customStatusClass = 'custom-' + data.status.replace(/[^0-9a-z]+/i, '-');
                    $message.addClass('wpcf7-' + customStatusClass);
                    $form.addClass(customStatusClass);
            }
            wpcf7.refill($form, data);
            wpcf7.triggerEvent(data.into, 'submit', detail);
            if ('mail_sent' == data.status) {
                $form.each(function() {
                    this.reset();
                });
            }
            $form.find('[placeholder].placeheld').each(function(i, n) {
                $(n).val($(n).attr('placeholder'));
            });
            $message.html('').append(data.message).slideDown('fast');
            $message.attr('role', 'alert');
            $('.screen-reader-response', $form.closest('.wpcf7')).each(function() {
                var $response = $(this);
                $response.html('').attr('role', '').append(data.message);
                if (data.invalidFields) {
                    var $invalids = $('<ul></ul>');
                    $.each(data.invalidFields, function(i, n) {
                        if (n.idref) {
                            var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                        } else {
                            var $li = $('<li></li>').append(n.message);
                        }
                        $invalids.append($li);
                    });
                    $response.append($invalids);
                }
                $response.attr('role', 'alert').focus();
            });
        };
        $.ajax({
            type: 'POST',
            url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        }).done(function(data, status, xhr) {
            ajaxSuccess(data, status, xhr, $form);
            $('.ajax-loader', $form).removeClass('is-active');
        }).fail(function(xhr, status, error) {
            var $e = $('<div class="ajax-error"></div>').text(error.message);
            $form.after($e);
        });
    };
    wpcf7.triggerEvent = function(target, name, detail) {
        var $target = $(target);
        var event = new CustomEvent('wpcf7' + name, {
            bubbles: true,
            detail: detail
        });
        $target.get(0).dispatchEvent(event);
        $target.trigger('wpcf7:' + name, detail);
        $target.trigger(name + '.wpcf7', detail);
    };
    wpcf7.toggleSubmit = function(form, state) {
        var $form = $(form);
        var $submit = $('input:submit', $form);
        if (typeof state !== 'undefined') {
            $submit.prop('disabled', !state);
            return;
        }
        if ($form.hasClass('wpcf7-acceptance-as-validation')) {
            return;
        }
        $submit.prop('disabled', false);
        $('.wpcf7-acceptance', $form).each(function() {
            var $span = $(this);
            var $input = $('input:checkbox', $span);
            if (!$span.hasClass('optional')) {
                if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
                    $submit.prop('disabled', true);
                    return false;
                }
            }
        });
    };
    wpcf7.notValidTip = function(target, message) {
        var $target = $(target);
        $('.wpcf7-not-valid-tip', $target).remove();
        $('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
        if ($target.is('.use-floating-validation-tip *')) {
            var fadeOut = function(target) {
                $(target).not(':hidden').animate({
                    opacity: 0
                }, 'fast', function() {
                    $(this).css({
                        'z-index': -100
                    });
                });
            };
            $target.on('mouseover', '.wpcf7-not-valid-tip', function() {
                fadeOut(this);
            });
            $target.on('focus', ':input', function() {
                fadeOut($('.wpcf7-not-valid-tip', $target));
            });
        }
    };
    wpcf7.refill = function(form, data) {
        var $form = $(form);
        var refillCaptcha = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        };
        var refillQuiz = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        };
        if (typeof data === 'undefined') {
            $.ajax({
                type: 'GET',
                url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
                beforeSend: function(xhr) {
                    var nonce = $form.find(':input[name="_wpnonce"]').val();
                    if (nonce) {
                        xhr.setRequestHeader('X-WP-Nonce', nonce);
                    }
                },
                dataType: 'json'
            }).done(function(data, status, xhr) {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }
                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            });
        } else {
            if (data.captcha) {
                refillCaptcha($form, data.captcha);
            }
            if (data.quiz) {
                refillQuiz($form, data.quiz);
            }
        }
    };
    wpcf7.clearResponse = function(form) {
        var $form = $(form);
        $form.removeClass('invalid spam sent failed');
        $form.siblings('.screen-reader-response').html('').attr('role', '');
        $('.wpcf7-not-valid-tip', $form).remove();
        $('[aria-invalid]', $form).attr('aria-invalid', 'false');
        $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
        $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
    };
    wpcf7.apiSettings.getRoute = function(path) {
        var url = wpcf7.apiSettings.root;
        url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
        return url;
    };
})(jQuery);
(function() {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
(function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
            return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: false
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.loaded = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
})
([(function(module, exports, __webpack_require__) {
    'use strict';
    __webpack_require__(1);
    __webpack_require__(2);
    __webpack_require__(3);
    __webpack_require__(4);
    __webpack_require__(5);
    __webpack_require__(20);
    __webpack_require__(21);
    __webpack_require__(22);
    __webpack_require__(23);
    __webpack_require__(27);
    __webpack_require__(41);
    __webpack_require__(42);
    __webpack_require__(43);
    __webpack_require__(44);
}), (function(module, exports) {
    'use strict';
    var body = document.body;
    body.setAttribute('data-loaded', false);
    var windowLoaded, logoLoaded;

    function windowLoad() {
        windowLoaded = true;
        if (logoLoaded) body.setAttribute('data-loaded', true);
    }

    function logoLoad() {
        logoLoaded = true;
        if (windowLoaded) body.setAttribute('data-loaded', true);
    }
    setTimeout(logoLoad, 3200);
    document.addEventListener("DOMContentLoaded", function(event) {
        windowLoad();
    });
}), (function(module, exports) {
    'use strict';
    var par = document.getElementsByClassName('pnlm-render-container')[0];
}), (function(module, exports) {
    'use strict';
    var control = document.querySelector('.control');
    if (control) {
        var boxes = control.querySelectorAll('.box');
        var videos = document.querySelectorAll('.video-playback');
        var video = document.querySelector('.video-playback');
        var playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then(function(_) {
                video.play();
            }).catch(function(error) {
                video.play();
            });
        }
        boxes.forEach(function(box, i) {
            var bottom = box.querySelector('.bottom');
            var paragraf = box.querySelector('p');
            var heightP = paragraf.offsetHeight;
            box.addEventListener('mouseover', function() {
                control.setAttribute('data-selected', i + 1);
                videos[i].play();
            });
            box.addEventListener('mouseenter', function() {
                control.setAttribute('data-hover', 'true');
                bottom.style.height = heightP + 'px';
            });
            box.addEventListener('mouseleave', function() {
                control.setAttribute('data-hover', 'false');
                bottom.style.height = '0px';
            });
        });
    }
}), (function(module, exports) {
    'use strict';
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame;
    exports.requestAnimationFrame = requestAnimationFrame;

    function parallaxScroll() {
        var windowOffset = document.body.scrollTop;
        var lastPosition = -1;
        if (lastPosition == windowOffset) {
            requestAnimationFrame(parallaxScroll);
            return false;
        } else lastPosition = windowOffset;
        var parallaxElements = document.querySelectorAll('[data-parallax]');
        var i;
        for (i = 0; i < parallaxElements.length; i++) {
            var el = parallaxElements[i];
            var parent = el.parentNode;
            var parentHeight = parent.getBoundingClientRect().height;
            var parentOffset = parent.getBoundingClientRect().top + parentHeight / 2;
            var finalOffset = window.innerHeight / 2 - parentOffset;
            var translate = finalOffset * el.getAttribute('data-parallax');
            if (el.getAttribute('data-no-mobile') && window.innerWidth < 768) {
                el.style.transform = 'translate3d(0,0,0)';
            } else {
                el.style.transform = 'translate3d(0,' + translate.toFixed(1) + 'px, 0)';
            }
        }
        requestAnimationFrame(parallaxScroll);
    }
    parallaxScroll();
}), (function(module, exports, __webpack_require__) {
    'use strict';
    var _smoothScrollbar = __webpack_require__(6);
    var _smoothScrollbar2 = _interopRequireDefault(_smoothScrollbar);
    var _anchorScroll = __webpack_require__(7);
    var _anchorScroll2 = _interopRequireDefault(_anchorScroll);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    window.addEventListener('load', function() {
        if (window.innerWidth > 1024) {
            var _scrollContainer = document.querySelector('.section-scrollbar');
            _smoothScrollbar2.default.init(_scrollContainer);
            var scrollbar = _smoothScrollbar2.default.init(document.querySelector('[data-scrollbar]'));
            var scrollIntoViewOptions = {
                offsetTop: 60
            };
            var links = document.querySelectorAll('[href="#about"]');
            links.forEach(function(link) {
                link.addEventListener('click', function() {
                    scrollbar.scrollIntoView(document.querySelector('#about'), scrollIntoViewOptions);
                });
            });
        }
    });
    var scrollContainer = document.querySelector('.section-scrollbar');
    scrollContainer.style.overflow = 'visible';
    _anchorScroll2.default.init({
        updateUrl: true,
        ease: 'outCirc',
        duration: 1500,
        offset: -60
    });
}), (function(module, exports, __webpack_require__) {
    ! function(t, e) {
        true ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Scrollbar = e() : t.Scrollbar = e()
    }(this, function() {
        return function(t) {
            function e(o) {
                if (r[o]) return r[o].exports;
                var n = r[o] = {
                    exports: {},
                    id: o,
                    loaded: !1
                };
                return t[o].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
            }
            var r = {};
            return e.m = t, e.c = r, e.p = "", e(0)
        }([function(t, e, r) {
            "use strict";
            var o = r(1)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(39),
                i = r(47);
            r(97), r(117), r(121), r(133), e["default"] = n.SmoothScrollbar, n.SmoothScrollbar.version = "5.6.5", n.SmoothScrollbar.init = function(t, e) {
                if (!t || 1 !== t.nodeType) throw new TypeError("expect element to be DOM Element, but got " + typeof t);
                if (i.sbList.has(t)) return i.sbList.get(t);
                t.setAttribute("data-scrollbar", "");
                var r = [].concat(o(t.children)),
                    a = document.createElement("div");
                a.innerHTML = '\n        <article class="scroll-content"></article>\n        <aside class="scrollbar-track scrollbar-track-x">\n            <div class="scrollbar-thumb scrollbar-thumb-x"></div>\n        </aside>\n        <aside class="scrollbar-track scrollbar-track-y">\n            <div class="scrollbar-thumb scrollbar-thumb-y"></div>\n        </aside>\n    ';
                var c = a.querySelector(".scroll-content");
                return [].concat(o(a.children)).forEach(function(e) {
                    return t.appendChild(e)
                }), r.forEach(function(t) {
                    return c.appendChild(t)
                }), new n.SmoothScrollbar(t, e)
            }, n.SmoothScrollbar.initAll = function(t) {
                return [].concat(o(document.querySelectorAll(i.selectors))).map(function(e) {
                    return n.SmoothScrollbar.init(e, t)
                })
            }, n.SmoothScrollbar.has = function(t) {
                return i.sbList.has(t)
            }, n.SmoothScrollbar.get = function(t) {
                return i.sbList.get(t)
            }, n.SmoothScrollbar.getAll = function() {
                return [].concat(o(i.sbList.values()))
            }, n.SmoothScrollbar.destroy = function(t) {
                return n.SmoothScrollbar.has(t) && n.SmoothScrollbar.get(t).destroy()
            }, n.SmoothScrollbar.destroyAll = function() {
                i.sbList.forEach(function(t) {
                    t.destroy()
                })
            }, t.exports = e["default"]
        }, function(t, e, r) {
            "use strict";
            var o = r(2)["default"];
            e["default"] = function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
                    return r
                }
                return o(t)
            }, e.__esModule = !0
        }, function(t, e, r) {
            t.exports = {
                "default": r(3),
                __esModule: !0
            }
        }, function(t, e, r) {
            r(4), r(28), t.exports = r(12).Array.from
        }, function(t, e, r) {
            "use strict";
            var o = r(5)(!0);
            r(8)(String, "String", function(t) {
                this._t = String(t), this._i = 0
            }, function() {
                var t, e = this._t,
                    r = this._i;
                return r >= e.length ? {
                    value: void 0,
                    done: !0
                } : (t = o(e, r), this._i += t.length, {
                    value: t,
                    done: !1
                })
            })
        }, function(t, e, r) {
            var o = r(6),
                n = r(7);
            t.exports = function(t) {
                return function(e, r) {
                    var i, a, c = String(n(e)),
                        u = o(r),
                        l = c.length;
                    return 0 > u || u >= l ? t ? "" : void 0 : (i = c.charCodeAt(u), 55296 > i || i > 56319 || u + 1 === l || (a = c.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? c.charAt(u) : i : t ? c.slice(u, u + 2) : (i - 55296 << 10) + (a - 56320) + 65536)
                }
            }
        }, function(t, e) {
            var r = Math.ceil,
                o = Math.floor;
            t.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? o : r)(t)
            }
        }, function(t, e) {
            t.exports = function(t) {
                if (void 0 == t) throw TypeError("Can't call method on  " + t);
                return t
            }
        }, function(t, e, r) {
            "use strict";
            var o = r(9),
                n = r(10),
                i = r(15),
                a = r(16),
                c = r(21),
                u = r(22),
                l = r(23),
                s = r(24),
                f = r(17).getProto,
                d = r(25)("iterator"),
                h = !([].keys && "next" in [].keys()),
                v = "@@iterator",
                p = "keys",
                _ = "values",
                b = function() {
                    return this
                };
            t.exports = function(t, e, r, y, m, S, g) {
                l(r, e, y);
                var x, w, O = function(t) {
                        if (!h && t in E) return E[t];
                        switch (t) {
                            case p:
                                return function() {
                                    return new r(this, t)
                                };
                            case _:
                                return function() {
                                    return new r(this, t)
                                }
                        }
                        return function() {
                            return new r(this, t)
                        }
                    },
                    M = e + " Iterator",
                    P = m == _,
                    j = !1,
                    E = t.prototype,
                    k = E[d] || E[v] || m && E[m],
                    A = k || O(m);
                if (k) {
                    var T = f(A.call(new t));
                    s(T, M, !0), !o && c(E, v) && a(T, d, b), P && k.name !== _ && (j = !0, A = function() {
                        return k.call(this)
                    })
                }
                if (o && !g || !h && !j && E[d] || a(E, d, A), u[e] = A, u[M] = b, m)
                    if (x = {
                            values: P ? A : O(_),
                            keys: S ? A : O(p),
                            entries: P ? O("entries") : A
                        }, g)
                        for (w in x) w in E || i(E, w, x[w]);
                    else n(n.P + n.F * (h || j), e, x);
                return x
            }
        }, function(t, e) {
            t.exports = !0
        }, function(t, e, r) {
            var o = r(11),
                n = r(12),
                i = r(13),
                a = "prototype",
                c = function(t, e, r) {
                    var u, l, s, f = t & c.F,
                        d = t & c.G,
                        h = t & c.S,
                        v = t & c.P,
                        p = t & c.B,
                        _ = t & c.W,
                        b = d ? n : n[e] || (n[e] = {}),
                        y = d ? o : h ? o[e] : (o[e] || {})[a];
                    d && (r = e);
                    for (u in r) l = !f && y && u in y, l && u in b || (s = l ? y[u] : r[u], b[u] = d && "function" != typeof y[u] ? r[u] : p && l ? i(s, o) : _ && y[u] == s ? function(t) {
                        var e = function(e) {
                            return this instanceof t ? new t(e) : t(e)
                        };
                        return e[a] = t[a], e
                    }(s) : v && "function" == typeof s ? i(Function.call, s) : s, v && ((b[a] || (b[a] = {}))[u] = s))
                };
            c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, t.exports = c
        }, function(t, e) {
            var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = r)
        }, function(t, e) {
            var r = t.exports = {
                version: "1.2.6"
            };
            "number" == typeof __e && (__e = r)
        }, function(t, e, r) {
            var o = r(14);
            t.exports = function(t, e, r) {
                if (o(t), void 0 === e) return t;
                switch (r) {
                    case 1:
                        return function(r) {
                            return t.call(e, r)
                        };
                    case 2:
                        return function(r, o) {
                            return t.call(e, r, o)
                        };
                    case 3:
                        return function(r, o, n) {
                            return t.call(e, r, o, n)
                        }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }
        }, function(t, e) {
            t.exports = function(t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t
            }
        }, function(t, e, r) {
            t.exports = r(16)
        }, function(t, e, r) {
            var o = r(17),
                n = r(18);
            t.exports = r(19) ? function(t, e, r) {
                return o.setDesc(t, e, n(1, r))
            } : function(t, e, r) {
                return t[e] = r, t
            }
        }, function(t, e) {
            var r = Object;
            t.exports = {
                create: r.create,
                getProto: r.getPrototypeOf,
                isEnum: {}.propertyIsEnumerable,
                getDesc: r.getOwnPropertyDescriptor,
                setDesc: r.defineProperty,
                setDescs: r.defineProperties,
                getKeys: r.keys,
                getNames: r.getOwnPropertyNames,
                getSymbols: r.getOwnPropertySymbols,
                each: [].forEach
            }
        }, function(t, e) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        }, function(t, e, r) {
            t.exports = !r(20)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }, function(t, e) {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (e) {
                    return !0
                }
            }
        }, function(t, e) {
            var r = {}.hasOwnProperty;
            t.exports = function(t, e) {
                return r.call(t, e)
            }
        }, function(t, e) {
            t.exports = {}
        }, function(t, e, r) {
            "use strict";
            var o = r(17),
                n = r(18),
                i = r(24),
                a = {};
            r(16)(a, r(25)("iterator"), function() {
                return this
            }), t.exports = function(t, e, r) {
                t.prototype = o.create(a, {
                    next: n(1, r)
                }), i(t, e + " Iterator")
            }
        }, function(t, e, r) {
            var o = r(17).setDesc,
                n = r(21),
                i = r(25)("toStringTag");
            t.exports = function(t, e, r) {
                t && !n(t = r ? t : t.prototype, i) && o(t, i, {
                    configurable: !0,
                    value: e
                })
            }
        }, function(t, e, r) {
            var o = r(26)("wks"),
                n = r(27),
                i = r(11).Symbol;
            t.exports = function(t) {
                return o[t] || (o[t] = i && i[t] || (i || n)("Symbol." + t))
            }
        }, function(t, e, r) {
            var o = r(11),
                n = "__core-js_shared__",
                i = o[n] || (o[n] = {});
            t.exports = function(t) {
                return i[t] || (i[t] = {})
            }
        }, function(t, e) {
            var r = 0,
                o = Math.random();
            t.exports = function(t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + o).toString(36))
            }
        }, function(t, e, r) {
            "use strict";
            var o = r(13),
                n = r(10),
                i = r(29),
                a = r(30),
                c = r(33),
                u = r(34),
                l = r(35);
            n(n.S + n.F * !r(38)(function(t) {
                Array.from(t)
            }), "Array", {
                from: function(t) {
                    var e, r, n, s, f = i(t),
                        d = "function" == typeof this ? this : Array,
                        h = arguments,
                        v = h.length,
                        p = v > 1 ? h[1] : void 0,
                        _ = void 0 !== p,
                        b = 0,
                        y = l(f);
                    if (_ && (p = o(p, v > 2 ? h[2] : void 0, 2)), void 0 == y || d == Array && c(y))
                        for (e = u(f.length), r = new d(e); e > b; b++) r[b] = _ ? p(f[b], b) : f[b];
                    else
                        for (s = y.call(f), r = new d; !(n = s.next()).done; b++) r[b] = _ ? a(s, p, [n.value, b], !0) : n.value;
                    return r.length = b, r
                }
            })
        }, function(t, e, r) {
            var o = r(7);
            t.exports = function(t) {
                return Object(o(t))
            }
        }, function(t, e, r) {
            var o = r(31);
            t.exports = function(t, e, r, n) {
                try {
                    return n ? e(o(r)[0], r[1]) : e(r)
                } catch (i) {
                    var a = t["return"];
                    throw void 0 !== a && o(a.call(t)), i
                }
            }
        }, function(t, e, r) {
            var o = r(32);
            t.exports = function(t) {
                if (!o(t)) throw TypeError(t + " is not an object!");
                return t
            }
        }, function(t, e) {
            t.exports = function(t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        }, function(t, e, r) {
            var o = r(22),
                n = r(25)("iterator"),
                i = Array.prototype;
            t.exports = function(t) {
                return void 0 !== t && (o.Array === t || i[n] === t)
            }
        }, function(t, e, r) {
            var o = r(6),
                n = Math.min;
            t.exports = function(t) {
                return t > 0 ? n(o(t), 9007199254740991) : 0
            }
        }, function(t, e, r) {
            var o = r(36),
                n = r(25)("iterator"),
                i = r(22);
            t.exports = r(12).getIteratorMethod = function(t) {
                return void 0 != t ? t[n] || t["@@iterator"] || i[o(t)] : void 0
            }
        }, function(t, e, r) {
            var o = r(37),
                n = r(25)("toStringTag"),
                i = "Arguments" == o(function() {
                    return arguments
                }());
            t.exports = function(t) {
                var e, r, a;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = (e = Object(t))[n]) ? r : i ? o(e) : "Object" == (a = o(e)) && "function" == typeof e.callee ? "Arguments" : a
            }
        }, function(t, e) {
            var r = {}.toString;
            t.exports = function(t) {
                return r.call(t).slice(8, -1)
            }
        }, function(t, e, r) {
            var o = r(25)("iterator"),
                n = !1;
            try {
                var i = [7][o]();
                i["return"] = function() {
                    n = !0
                }, Array.from(i, function() {
                    throw 2
                })
            } catch (a) {}
            t.exports = function(t, e) {
                if (!e && !n) return !1;
                var r = !1;
                try {
                    var i = [7],
                        a = i[o]();
                    a.next = function() {
                        r = !0
                    }, i[o] = function() {
                        return a
                    }, t(i)
                } catch (c) {}
                return r
            }
        }, function(t, e, r) {
            "use strict";
            var o = r(40)["default"],
                n = r(41)["default"],
                i = r(45)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = r(47),
                c = r(79),
                u = function l(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    o(this, l), t.setAttribute("tabindex", "1"), t.scrollTop = t.scrollLeft = 0, (0, c.setStyle)(t, {
                        overflow: "hidden",
                        outline: "none"
                    });
                    var r = (0, c.findChild)(t, "scrollbar-track-x"),
                        u = (0, c.findChild)(t, "scrollbar-track-y");
                    this.__readonly("targets", n({
                        container: t,
                        content: (0, c.findChild)(t, "scroll-content"),
                        xAxis: n({
                            track: r,
                            thumb: (0, c.findChild)(r, "scrollbar-thumb-x")
                        }),
                        yAxis: n({
                            track: u,
                            thumb: (0, c.findChild)(u, "scrollbar-thumb-y")
                        })
                    })).__readonly("offset", {
                        x: 0,
                        y: 0
                    }).__readonly("limit", {
                        x: 1 / 0,
                        y: 1 / 0
                    }).__readonly("movement", {
                        x: 0,
                        y: 0
                    }).__readonly("thumbSize", {
                        x: 0,
                        y: 0,
                        realX: 0,
                        realY: 0
                    }).__readonly("bounding", {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }).__readonly("children", []).__readonly("parents", []).__readonly("size", this.getSize()).__readonly("isNestedScrollbar", !1), i(this, {
                        __updateThrottle: {
                            value: (0, c.debounce)(this.update.bind(this))
                        },
                        __hideTrackThrottle: {
                            value: (0, c.debounce)(this.hideTrack.bind(this), 300, !1)
                        },
                        __listeners: {
                            value: []
                        },
                        __handlers: {
                            value: []
                        },
                        __children: {
                            value: []
                        },
                        __timerID: {
                            value: {}
                        }
                    }), i(this, {
                        scrollTop: {
                            get: function() {
                                return this.offset.y
                            }
                        },
                        scrollLeft: {
                            get: function() {
                                return this.offset.x
                            }
                        }
                    }), this.__initOptions(e), this.__initScrollbar(), a.sbList.set(t, this)
                };
            e.SmoothScrollbar = u
        }, function(t, e) {
            "use strict";
            e["default"] = function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }, e.__esModule = !0
        }, function(t, e, r) {
            t.exports = {
                "default": r(42),
                __esModule: !0
            }
        }, function(t, e, r) {
            r(43), t.exports = r(12).Object.freeze
        }, function(t, e, r) {
            var o = r(32);
            r(44)("freeze", function(t) {
                return function(e) {
                    return t && o(e) ? t(e) : e
                }
            })
        }, function(t, e, r) {
            var o = r(10),
                n = r(12),
                i = r(20);
            t.exports = function(t, e) {
                var r = (n.Object || {})[t] || Object[t],
                    a = {};
                a[t] = e(r), o(o.S + o.F * i(function() {
                    r(1)
                }), "Object", a)
            }
        }, function(t, e, r) {
            t.exports = {
                "default": r(46),
                __esModule: !0
            }
        }, function(t, e, r) {
            var o = r(17);
            t.exports = function(t, e) {
                return o.setDescs(t, e)
            }
        }, function(t, e, r) {
            "use strict";
            var o = r(48)["default"],
                n = r(60)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(61);
            o(e, n(i, o));
            var a = r(78);
            o(e, n(a, o))
        }, function(t, e, r) {
            "use strict";
            var o = r(49)["default"],
                n = r(55)["default"],
                i = r(58)["default"];
            e["default"] = function(t, e) {
                for (var r = o(e), a = 0; a < r.length; a++) {
                    var c = r[a],
                        u = n(e, c);
                    u && u.configurable && void 0 === t[c] && i(t, c, u)
                }
                return t
            }, e.__esModule = !0
        }, function(t, e, r) {
            t.exports = {
                "default": r(50),
                __esModule: !0
            }
        }, function(t, e, r) {
            var o = r(17);
            r(51), t.exports = function(t) {
                return o.getNames(t)
            }
        }, function(t, e, r) {
            r(44)("getOwnPropertyNames", function() {
                return r(52).get
            })
        }, function(t, e, r) {
            var o = r(53),
                n = r(17).getNames,
                i = {}.toString,
                a = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                c = function(t) {
                    try {
                        return n(t)
                    } catch (e) {
                        return a.slice()
                    }
                };
            t.exports.get = function(t) {
                return a && "[object Window]" == i.call(t) ? c(t) : n(o(t))
            }
        }, function(t, e, r) {
            var o = r(54),
                n = r(7);
            t.exports = function(t) {
                return o(n(t))
            }
        }, function(t, e, r) {
            var o = r(37);
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                return "String" == o(t) ? t.split("") : Object(t)
            }
        }, function(t, e, r) {
            t.exports = {
                "default": r(56),
                __esModule: !0
            }
        }, function(t, e, r) {
            var o = r(17);
            r(57), t.exports = function(t, e) {
                return o.getDesc(t, e)
            }
        }, function(t, e, r) {
            var o = r(53);
            r(44)("getOwnPropertyDescriptor", function(t) {
                return function(e, r) {
                    return t(o(e), r)
                }
            })
        }, function(t, e, r) {
            t.exports = {
                "default": r(59),
                __esModule: !0
            }
        }, function(t, e, r) {
            var o = r(17);
            t.exports = function(t, e, r) {
                return o.setDesc(t, e, r)
            }
        }, function(t, e) {
            "use strict";
            e["default"] = function(t, e) {
                var r = e({}, t);
                return delete r["default"], r
            }, e.__esModule = !0
        }, function(t, e, r) {
            "use strict";
            var o = r(62)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = new o,
                i = n.set.bind(n),
                a = n["delete"].bind(n);
            n.update = function() {
                n.forEach(function(t) {
                    requestAnimationFrame(function() {
                        t.__updateTree()
                    })
                })
            }, n["delete"] = function() {
                var t = a.apply(void 0, arguments);
                return n.update(), t
            }, n.set = function() {
                var t = i.apply(void 0, arguments);
                return n.update(), t
            }, e.sbList = n
        }, function(t, e, r) {
            t.exports = {
                "default": r(63),
                __esModule: !0
            }
        }, function(t, e, r) {
            r(64), r(4), r(65), r(69), r(76), t.exports = r(12).Map
        }, function(t, e) {}, function(t, e, r) {
            r(66);
            var o = r(22);
            o.NodeList = o.HTMLCollection = o.Array
        }, function(t, e, r) {
            "use strict";
            var o = r(67),
                n = r(68),
                i = r(22),
                a = r(53);
            t.exports = r(8)(Array, "Array", function(t, e) {
                this._t = a(t), this._i = 0, this._k = e
            }, function() {
                var t = this._t,
                    e = this._k,
                    r = this._i++;
                return !t || r >= t.length ? (this._t = void 0, n(1)) : "keys" == e ? n(0, r) : "values" == e ? n(0, t[r]) : n(0, [r, t[r]])
            }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
        }, function(t, e) {
            t.exports = function() {}
        }, function(t, e) {
            t.exports = function(t, e) {
                return {
                    value: e,
                    done: !!t
                }
            }
        }, function(t, e, r) {
            "use strict";
            var o = r(70);
            r(75)("Map", function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            }, {
                get: function(t) {
                    var e = o.getEntry(this, t);
                    return e && e.v
                },
                set: function(t, e) {
                    return o.def(this, 0 === t ? 0 : t, e)
                }
            }, o, !0)
        }, function(t, e, r) {
            "use strict";
            var o = r(17),
                n = r(16),
                i = r(71),
                a = r(13),
                c = r(72),
                u = r(7),
                l = r(73),
                s = r(8),
                f = r(68),
                d = r(27)("id"),
                h = r(21),
                v = r(32),
                p = r(74),
                _ = r(19),
                b = Object.isExtensible || v,
                y = _ ? "_s" : "size",
                m = 0,
                S = function(t, e) {
                    if (!v(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!h(t, d)) {
                        if (!b(t)) return "F";
                        if (!e) return "E";
                        n(t, d, ++m)
                    }
                    return "O" + t[d]
                },
                g = function(t, e) {
                    var r, o = S(e);
                    if ("F" !== o) return t._i[o];
                    for (r = t._f; r; r = r.n)
                        if (r.k == e) return r
                };
            t.exports = {
                getConstructor: function(t, e, r, n) {
                    var s = t(function(t, i) {
                        c(t, s, e), t._i = o.create(null), t._f = void 0, t._l = void 0, t[y] = 0, void 0 != i && l(i, r, t[n], t)
                    });
                    return i(s.prototype, {
                        clear: function() {
                            for (var t = this, e = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete e[r.i];
                            t._f = t._l = void 0, t[y] = 0
                        },
                        "delete": function(t) {
                            var e = this,
                                r = g(e, t);
                            if (r) {
                                var o = r.n,
                                    n = r.p;
                                delete e._i[r.i], r.r = !0, n && (n.n = o), o && (o.p = n), e._f == r && (e._f = o), e._l == r && (e._l = n), e[y]--
                            }
                            return !!r
                        },
                        forEach: function(t) {
                            for (var e, r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;)
                                for (r(e.v, e.k, this); e && e.r;) e = e.p
                        },
                        has: function(t) {
                            return !!g(this, t)
                        }
                    }), _ && o.setDesc(s.prototype, "size", {
                        get: function() {
                            return u(this[y])
                        }
                    }), s
                },
                def: function(t, e, r) {
                    var o, n, i = g(t, e);
                    return i ? i.v = r : (t._l = i = {
                        i: n = S(e, !0),
                        k: e,
                        v: r,
                        p: o = t._l,
                        n: void 0,
                        r: !1
                    }, t._f || (t._f = i), o && (o.n = i), t[y]++, "F" !== n && (t._i[n] = i)), t
                },
                getEntry: g,
                setStrong: function(t, e, r) {
                    s(t, e, function(t, e) {
                        this._t = t, this._k = e, this._l = void 0
                    }, function() {
                        for (var t = this, e = t._k, r = t._l; r && r.r;) r = r.p;
                        return t._t && (t._l = r = r ? r.n : t._t._f) ? "keys" == e ? f(0, r.k) : "values" == e ? f(0, r.v) : f(0, [r.k, r.v]) : (t._t = void 0, f(1))
                    }, r ? "entries" : "values", !r, !0), p(e)
                }
            }
        }, function(t, e, r) {
            var o = r(15);
            t.exports = function(t, e) {
                for (var r in e) o(t, r, e[r]);
                return t
            }
        }, function(t, e) {
            t.exports = function(t, e, r) {
                if (!(t instanceof e)) throw TypeError(r + ": use the 'new' operator!");
                return t
            }
        }, function(t, e, r) {
            var o = r(13),
                n = r(30),
                i = r(33),
                a = r(31),
                c = r(34),
                u = r(35);
            t.exports = function(t, e, r, l) {
                var s, f, d, h = u(t),
                    v = o(r, l, e ? 2 : 1),
                    p = 0;
                if ("function" != typeof h) throw TypeError(t + " is not iterable!");
                if (i(h))
                    for (s = c(t.length); s > p; p++) e ? v(a(f = t[p])[0], f[1]) : v(t[p]);
                else
                    for (d = h.call(t); !(f = d.next()).done;) n(d, v, f.value, e)
            }
        }, function(t, e, r) {
            "use strict";
            var o = r(12),
                n = r(17),
                i = r(19),
                a = r(25)("species");
            t.exports = function(t) {
                var e = o[t];
                i && e && !e[a] && n.setDesc(e, a, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        }, function(t, e, r) {
            "use strict";
            var o = r(17),
                n = r(11),
                i = r(10),
                a = r(20),
                c = r(16),
                u = r(71),
                l = r(73),
                s = r(72),
                f = r(32),
                d = r(24),
                h = r(19);
            t.exports = function(t, e, r, v, p, _) {
                var b = n[t],
                    y = b,
                    m = p ? "set" : "add",
                    S = y && y.prototype,
                    g = {};
                return h && "function" == typeof y && (_ || S.forEach && !a(function() {
                    (new y).entries().next()
                })) ? (y = e(function(e, r) {
                    s(e, y, t), e._c = new b, void 0 != r && l(r, p, e[m], e)
                }), o.each.call("add,clear,delete,forEach,get,has,set,keys,values,entries".split(","), function(t) {
                    var e = "add" == t || "set" == t;
                    t in S && (!_ || "clear" != t) && c(y.prototype, t, function(r, o) {
                        if (!e && _ && !f(r)) return "get" == t ? void 0 : !1;
                        var n = this._c[t](0 === r ? 0 : r, o);
                        return e ? this : n
                    })
                }), "size" in S && o.setDesc(y.prototype, "size", {
                    get: function() {
                        return this._c.size
                    }
                })) : (y = v.getConstructor(e, t, p, m), u(y.prototype, r)), d(y, t), g[t] = y, i(i.G + i.W + i.F, g), _ || v.setStrong(y, t, p), y
            }
        }, function(t, e, r) {
            var o = r(10);
            o(o.P, "Map", {
                toJSON: r(77)("Map")
            })
        }, function(t, e, r) {
            var o = r(73),
                n = r(36);
            t.exports = function(t) {
                return function() {
                    if (n(this) != t) throw TypeError(t + "#toJSON isn't generic");
                    var e = [];
                    return o(this, !1, e.push, e), e
                }
            }
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = "scrollbar, [scrollbar], [data-scrollbar]";
            e.selectors = r
        }, function(t, e, r) {
            "use strict";
            var o = r(48)["default"],
                n = r(60)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(80);
            o(e, n(i, o));
            var a = r(81);
            o(e, n(a, o));
            var c = r(82);
            o(e, n(c, o));
            var u = r(86);
            o(e, n(u, o));
            var l = r(88);
            o(e, n(l, o));
            var s = r(92);
            o(e, n(s, o));
            var f = r(93);
            o(e, n(f, o));
            var d = r(95);
            o(e, n(d, o));
            var h = r(96);
            o(e, n(h, o));
            var v = r(94);
            o(e, n(v, o));
            var p = r(87);
            o(e, n(p, o))
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = 100,
                o = function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? r : arguments[1],
                        o = arguments.length <= 2 || void 0 === arguments[2] ? !0 : arguments[2];
                    if ("function" == typeof t) {
                        var n = void 0;
                        return function() {
                            for (var r = arguments.length, i = Array(r), a = 0; r > a; a++) i[a] = arguments[a];
                            !n && o && setTimeout(function() {
                                return t.apply(void 0, i)
                            }), clearTimeout(n), n = setTimeout(function() {
                                n = void 0, t.apply(void 0, i)
                            }, e)
                        }
                    }
                };
            e.debounce = o
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];
                return e.some(function(e) {
                    return t === e
                })
            };
            e.isOneOf = r
        }, function(t, e, r) {
            "use strict";
            var o = r(83)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = ["webkit", "moz", "ms", "o"],
                i = new RegExp("^-(?!(?:" + n.join("|") + ")-)"),
                a = function(t) {
                    var e = {};
                    return o(t).forEach(function(r) {
                        if (!i.test(r)) return void(e[r] = t[r]);
                        var o = t[r];
                        r = r.replace(/^-/, ""), e[r] = o, n.forEach(function(t) {
                            e["-" + t + "-" + r] = o
                        })
                    }), e
                },
                c = function(t, e) {
                    e = a(e), o(e).forEach(function(r) {
                        var o = r.replace(/^-/, "").replace(/-([a-z])/g, function(t, e) {
                            return e.toUpperCase()
                        });
                        t.style[o] = e[r]
                    })
                };
            e.setStyle = c
        }, function(t, e, r) {
            t.exports = {
                "default": r(84),
                __esModule: !0
            }
        }, function(t, e, r) {
            r(85), t.exports = r(12).Object.keys
        }, function(t, e, r) {
            var o = r(29);
            r(44)("keys", function(t) {
                return function(e) {
                    return t(o(e))
                }
            })
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(87),
                n = {
                    STANDARD: 1,
                    OTHERS: -3
                },
                i = [1, 28, 500],
                a = function(t) {
                    return i[t] || i[0]
                },
                c = function(t) {
                    if (t = (0, o.getOriginalEvent)(t), "deltaX" in t) {
                        var e = a(t.deltaMode);
                        return {
                            x: t.deltaX / n.STANDARD * e,
                            y: t.deltaY / n.STANDARD * e
                        }
                    }
                    return "wheelDeltaX" in t ? {
                        x: t.wheelDeltaX / n.OTHERS,
                        y: t.wheelDeltaY / n.OTHERS
                    } : {
                        x: 0,
                        y: t.wheelDelta / n.OTHERS
                    }
                };
            e.getDelta = c
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function(t) {
                return t.originalEvent || t
            };
            e.getOriginalEvent = r
        }, function(t, e, r) {
            "use strict";
            var o = r(89)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function(t, e) {
                var r = t.children;
                if (!r) return null;
                var n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var c, u = o(r); !(n = (c = u.next()).done); n = !0) {
                        var l = c.value;
                        if (l.className.match(e)) return l
                    }
                } catch (s) {
                    i = !0, a = s
                } finally {
                    try {
                        !n && u["return"] && u["return"]()
                    } finally {
                        if (i) throw a
                    }
                }
                return null
            };
            e.findChild = n
        }, function(t, e, r) {
            t.exports = {
                "default": r(90),
                __esModule: !0
            }
        }, function(t, e, r) {
            r(65), r(4), t.exports = r(91)
        }, function(t, e, r) {
            var o = r(31),
                n = r(35);
            t.exports = r(12).getIterator = function(t) {
                var e = n(t);
                if ("function" != typeof e) throw TypeError(t + " is not iterable!");
                return o(e.call(t))
            }
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function(t, e) {
                var r = [];
                if (0 >= e) return r;
                for (var o = Math.round(e / 1e3 * 60), n = -t / Math.pow(o, 2), i = -2 * n * o, a = 0; o > a; a++) r.push(n * Math.pow(a, 2) + i * a);
                return r
            };
            e.buildCurve = r
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(87),
                n = r(94),
                i = function(t) {
                    t = (0, o.getOriginalEvent)(t);
                    var e = (0, n.getPointerData)(t);
                    return e.identifier
                };
            e.getTouchID = i
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(87),
                n = function(t) {
                    return t = (0, o.getOriginalEvent)(t), t.touches ? t.touches[t.touches.length - 1] : t
                };
            e.getPointerData = n
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(87),
                n = r(94),
                i = function(t) {
                    t = (0, o.getOriginalEvent)(t);
                    var e = (0, n.getPointerData)(t);
                    return {
                        x: e.clientX,
                        y: e.clientY
                    }
                };
            e.getPosition = i
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                    r = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2];
                return Math.max(e, Math.min(t, r))
            };
            e.pickInRange = r
        }, function(t, e, r) {
            "use strict";
            var o = r(48)["default"],
                n = r(60)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(98);
            o(e, n(i, o));
            var a = r(99);
            o(e, n(a, o));
            var c = r(100);
            o(e, n(c, o));
            var u = r(101);
            o(e, n(u, o));
            var l = r(102);
            o(e, n(l, o));
            var s = r(103);
            o(e, n(s, o));
            var f = r(104);
            o(e, n(f, o));
            var d = r(109);
            o(e, n(d, o));
            var h = r(111);
            o(e, n(h, o));
            var v = r(112);
            o(e, n(v, o));
            var p = r(113);
            o(e, n(p, o));
            var _ = r(114);
            o(e, n(_, o));
            var b = r(115);
            o(e, n(b, o));
            var y = r(116);
            o(e, n(y, o))
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(79),
                n = r(39);
            e.SmoothScrollbar = n.SmoothScrollbar, n.SmoothScrollbar.prototype.update = function() {
                var t = this,
                    e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0],
                    r = function() {
                        t.__updateBounding();
                        var e = t.getSize();
                        t.__readonly("size", e);
                        var r = {
                            x: e.content.width - e.container.width,
                            y: e.content.height - e.container.height
                        };
                        if (!t.limit || r.x !== t.limit.x || r.y !== t.limit.y) {
                            var n = t.targets,
                                i = t.options,
                                a = {
                                    realX: e.container.width / e.content.width * e.container.width,
                                    realY: e.container.height / e.content.height * e.container.height
                                };
                            a.x = Math.max(a.realX, i.thumbMinSize), a.y = Math.max(a.realY, i.thumbMinSize), t.__readonly("limit", r).__readonly("thumbSize", a);
                            var c = n.xAxis,
                                u = n.yAxis;
                            (0, o.setStyle)(c.track, {
                                display: e.content.width <= e.container.width ? "none" : "block"
                            }), (0, o.setStyle)(u.track, {
                                display: e.content.height <= e.container.height ? "none" : "block"
                            }), (0, o.setStyle)(c.thumb, {
                                width: a.x + "px"
                            }), (0, o.setStyle)(u.thumb, {
                                height: a.y + "px"
                            });
                            var l = t.offset,
                                s = t.limit;
                            t.setPosition(Math.min(l.x, s.x), Math.min(l.y, s.y)), t.__setThumbPosition()
                        }
                    };
                e ? requestAnimationFrame(r) : r()
            }
        }, function(t, e, r) {
            "use strict";
            var o = r(1)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(39),
                i = r(79),
                a = r(47);
            e.SmoothScrollbar = n.SmoothScrollbar, n.SmoothScrollbar.prototype.destroy = function() {
                var t = this,
                    e = this.__listeners,
                    r = this.__handlers,
                    n = this.targets,
                    c = n.container,
                    u = n.content;
                r.forEach(function(t) {
                    var e = t.evt,
                        r = t.elem,
                        o = t.fn;
                    r.removeEventListener(e, o)
                }), this.scrollTo(0, 0, 300, function() {
                    cancelAnimationFrame(t.__timerID.render), r.length = e.length = 0, (0, i.setStyle)(c, {
                        overflow: ""
                    }), c.scrollTop = c.scrollLeft = 0;
                    var n = [].concat(o(u.children));
                    c.innerHTML = "", n.forEach(function(t) {
                        return c.appendChild(t)
                    }), a.sbList["delete"](c)
                })
            }
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(39);
            e.SmoothScrollbar = o.SmoothScrollbar, o.SmoothScrollbar.prototype.getSize = function() {
                var t = this.targets.container,
                    e = this.targets.content;
                return {
                    container: {
                        width: t.clientWidth,
                        height: t.clientHeight
                    },
                    content: {
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    }
                }
            }
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(39);
            e.SmoothScrollbar = o.SmoothScrollbar, o.SmoothScrollbar.prototype.addListener = function(t) {
                "function" == typeof t && this.__listeners.push(t)
            }, o.SmoothScrollbar.prototype.removeListener = function(t) {
                "function" == typeof t && this.__listeners.some(function(e, r, o) {
                    return e === t && o.splice(r, 1)
                })
            }
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(79),
                n = r(39);
            e.SmoothScrollbar = n.SmoothScrollbar, n.SmoothScrollbar.prototype.scrollTo = function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? this.offset.x : arguments[0],
                    e = arguments.length <= 1 || void 0 === arguments[1] ? this.offset.y : arguments[1],
                    r = this,
                    n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                    i = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
                    a = this.options,
                    c = this.offset,
                    u = this.limit,
                    l = this.__timerID;
                cancelAnimationFrame(l.scrollTo), i = "function" == typeof i ? i : function() {}, a.renderByPixels && (t = Math.round(t), e = Math.round(e));
                var s = c.x,
                    f = c.y,
                    d = (0, o.pickInRange)(t, 0, u.x) - s,
                    h = (0, o.pickInRange)(e, 0, u.y) - f,
                    v = (0, o.buildCurve)(d, n),
                    p = (0, o.buildCurve)(h, n),
                    _ = 0,
                    b = v.length,
                    y = function m() {
                        return _ === b ? (r.setPosition(t, e), requestAnimationFrame(function() {
                            i(r)
                        })) : (r.setPosition(s + v[_], f + p[_]), _++, void(l.scrollTo = requestAnimationFrame(m)))
                    };
                y()
            }
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(39);
            e.SmoothScrollbar = o.SmoothScrollbar, o.SmoothScrollbar.prototype.isVisible = function(t) {
                var e = this.bounding,
                    r = t.getBoundingClientRect(),
                    o = Math.max(e.top, r.top),
                    n = Math.max(e.left, r.left),
                    i = Math.min(e.right, r.right),
                    a = Math.min(e.bottom, r.bottom);
                return a >= o && i >= n
            }
        }, function(t, e, r) {
            "use strict";
            var o = r(83)["default"],
                n = r(105)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(39);
            e.SmoothScrollbar = i.SmoothScrollbar, i.SmoothScrollbar.prototype.setOptions = function() {
                var t = this,
                    e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    r = {};
                o(e).forEach(function(o) {
                    t.options.hasOwnProperty(o) && void 0 !== e[o] && (r[o] = e[o])
                }), n(this.options, r)
            }
        }, function(t, e, r) {
            t.exports = {
                "default": r(106),
                __esModule: !0
            }
        }, function(t, e, r) {
            r(107), t.exports = r(12).Object.assign
        }, function(t, e, r) {
            var o = r(10);
            o(o.S + o.F, "Object", {
                assign: r(108)
            })
        }, function(t, e, r) {
            var o = r(17),
                n = r(29),
                i = r(54);
            t.exports = r(20)(function() {
                var t = Object.assign,
                    e = {},
                    r = {},
                    o = Symbol(),
                    n = "abcdefghijklmnopqrst";
                return e[o] = 7, n.split("").forEach(function(t) {
                    r[t] = t
                }), 7 != t({}, e)[o] || Object.keys(t({}, r)).join("") != n
            }) ? function(t, e) {
                for (var r = n(t), a = arguments, c = a.length, u = 1, l = o.getKeys, s = o.getSymbols, f = o.isEnum; c > u;)
                    for (var d, h = i(a[u++]), v = s ? l(h).concat(s(h)) : l(h), p = v.length, _ = 0; p > _;) f.call(h, d = v[_++]) && (r[d] = h[d]);
                return r
            } : Object.assign
        }, function(t, e, r) {
            "use strict";
            var o = r(110)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(79),
                i = r(39);
            e.SmoothScrollbar = i.SmoothScrollbar, i.SmoothScrollbar.prototype.setPosition = function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? this.offset.x : arguments[0],
                    e = arguments.length <= 1 || void 0 === arguments[1] ? this.offset.y : arguments[1],
                    r = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2];
                this.__updateThrottle();
                var i = {},
                    a = this.options,
                    c = this.offset,
                    u = this.limit,
                    l = this.targets,
                    s = this.__listeners;
                a.renderByPixels && (t = Math.round(t), e = Math.round(e)), Math.abs(t - c.x) > 1 && this.showTrack("x"), Math.abs(e - c.y) > 1 && this.showTrack("y"), t = (0, n.pickInRange)(t, 0, u.x), e = (0, n.pickInRange)(e, 0, u.y), this.__hideTrackThrottle(), t === c.x && e === c.y || (i.direction = {
                    x: t === c.x ? "none" : t > c.x ? "right" : "left",
                    y: e === c.y ? "none" : e > c.y ? "down" : "up"
                }, i.limit = o({}, u), c.x = t, c.y = e, i.offset = o({}, c), this.__setThumbPosition(), (0, n.setStyle)(l.content, {
                    "-transform": "translate3d(" + -t + "px, " + -e + "px, 0)"
                }), r || s.forEach(function(t) {
                    requestAnimationFrame(function() {
                        t(i)
                    })
                }))
            }
        }, function(t, e, r) {
            "use strict";
            var o = r(105)["default"];
            e["default"] = o || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
                }
                return t
            }, e.__esModule = !0
        }, function(t, e, r) {
            "use strict";

            function o() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? "show" : arguments[0],
                    e = "show" === t ? "add" : "remove";
                return function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "both" : arguments[0],
                        r = this.targets,
                        o = r.container,
                        n = r.xAxis,
                        i = r.yAxis;
                    t = t.toLowerCase(), o.classList[e]("scrolling"), "both" === t && (n.track.classList[e]("show"), i.track.classList[e]("show")), "x" === t && n.track.classList[e]("show"), "y" === t && i.track.classList[e]("show")
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(39);
            e.SmoothScrollbar = n.SmoothScrollbar, n.SmoothScrollbar.prototype.showTrack = o("show"), n.SmoothScrollbar.prototype.hideTrack = o("hide")
        }, function(t, e, r) {
            "use strict";

            function o(t, e) {
                return !!e.length && e.every(function(e) {
                    return t.match(e)
                })
            }

            function n(t) {
                t = !!t;
                var e = t ? "removeEventListener" : "addEventListener";
                return function() {
                    for (var r = arguments.length, n = Array(r), i = 0; r > i; i++) n[i] = arguments[i];
                    this.__handlers.forEach(function(r) {
                        var i = r.elem,
                            a = r.evt,
                            c = r.fn,
                            u = r.hasRegistered;
                        t === u && o(a, n) && (i[e](a, c), r.hasRegistered = !u)
                    })
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(39);
            e.SmoothScrollbar = i.SmoothScrollbar, i.SmoothScrollbar.prototype.unregisterEvents = n(!0), i.SmoothScrollbar.prototype.registerEvents = n(!1)
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(39);
            e.SmoothScrollbar = o.SmoothScrollbar, o.SmoothScrollbar.prototype.clearMovement = o.SmoothScrollbar.prototype.stop = function() {
                this.movement.x = this.movement.y = 0, cancelAnimationFrame(this.__timerID.scrollTo)
            }
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(39);
            e.SmoothScrollbar = o.SmoothScrollbar, o.SmoothScrollbar.prototype.infiniteScroll = function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? 50 : arguments[1];
                if ("function" == typeof t) {
                    var r = {
                            x: 0,
                            y: 0
                        },
                        o = !1;
                    this.addListener(function(n) {
                        var i = n.offset,
                            a = n.limit;
                        a.y - i.y <= e && i.y > r.y && !o && (o = !0, setTimeout(function() {
                            return t(n)
                        })), a.y - i.y > e && (o = !1), r = i
                    })
                }
            }
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(39);
            e.SmoothScrollbar = o.SmoothScrollbar, o.SmoothScrollbar.prototype.getContentElem = function() {
                return this.targets.content
            }
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(39);
            e.SmoothScrollbar = o.SmoothScrollbar, o.SmoothScrollbar.prototype.scrollIntoView = function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    r = e.onlyScrollIfNeeded,
                    o = void 0 === r ? !1 : r,
                    n = e.offsetTop,
                    i = void 0 === n ? 0 : n,
                    a = e.offsetLeft,
                    c = void 0 === a ? 0 : a,
                    u = this.targets,
                    l = this.bounding;
                if (t && u.container.contains(t)) {
                    var s = t.getBoundingClientRect();
                    o && this.isVisible(t) || this.__setMovement(s.left - l.left - c, s.top - l.top - i)
                }
            }
        }, function(t, e, r) {
            "use strict";
            var o = r(48)["default"],
                n = r(60)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(118);
            o(e, n(i, o));
            var a = r(119);
            o(e, n(a, o));
            var c = r(120);
            o(e, n(c, o))
        }, function(t, e, r) {
            "use strict";

            function o(t, e, r) {
                var o = t.friction,
                    n = t.renderByPixels;
                if (Math.abs(r) < 1) {
                    var i = e + r;
                    return {
                        movement: 0,
                        position: r > 0 ? Math.ceil(i) : Math.floor(i)
                    }
                }
                var a = r * (1 - o / 100);
                return n && (a |= 0), {
                    movement: a,
                    position: e + r - a
                }
            }

            function n() {
                var t = this.options,
                    e = this.offset,
                    r = this.movement,
                    i = this.__timerID;
                if (r.x || r.y) {
                    var a = o(t, e.x, r.x),
                        c = o(t, e.y, r.y);
                    r.x = a.movement, r.y = c.movement, this.setPosition(a.position, c.position)
                }
                i.render = requestAnimationFrame(n.bind(this))
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(39);
            e.SmoothScrollbar = i.SmoothScrollbar, Object.defineProperty(i.SmoothScrollbar.prototype, "__render", {
                value: n,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";

            function o() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                    e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                    r = this.options,
                    o = this.movement;
                this.__updateThrottle(), r.renderByPixels && (t = Math.round(t), e = Math.round(e));
                var a = o.x + t,
                    c = o.y + e;
                if (r.continuousScrolling) o.x = a, o.y = c;
                else {
                    var u = this.__getDeltaLimit();
                    o.x = i.pickInRange.apply(void 0, [a].concat(n(u.x))), o.y = i.pickInRange.apply(void 0, [c].concat(n(u.y)))
                }
            }
            var n = r(1)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(79),
                a = r(39);
            e.SmoothScrollbar = a.SmoothScrollbar, Object.defineProperty(a.SmoothScrollbar.prototype, "__addMovement", {
                value: o,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";

            function o() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                    e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                    r = this.options,
                    o = this.movement;
                this.__updateThrottle();
                var a = this.__getDeltaLimit();
                r.renderByPixels && (t = Math.round(t), e = Math.round(e)), o.x = i.pickInRange.apply(void 0, [t].concat(n(a.x))), o.y = i.pickInRange.apply(void 0, [e].concat(n(a.y)))
            }
            var n = r(1)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(79),
                a = r(39);
            e.SmoothScrollbar = a.SmoothScrollbar, Object.defineProperty(a.SmoothScrollbar.prototype, "__setMovement", {
                value: o,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";
            var o = r(48)["default"],
                n = r(60)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(122);
            o(e, n(i, o));
            var a = r(123);
            o(e, n(a, o));
            var c = r(124);
            o(e, n(c, o));
            var u = r(125);
            o(e, n(u, o));
            var l = r(126);
            o(e, n(l, o));
            var s = r(127);
            o(e, n(s, o));
            var f = r(128);
            o(e, n(f, o))
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(39),
                n = r(79);
            e.SmoothScrollbar = o.SmoothScrollbar;
            var i = function() {
                var t = this,
                    e = this.targets,
                    r = e.container,
                    o = e.content,
                    i = !1,
                    a = void 0,
                    c = void 0;
                Object.defineProperty(this, "__isDrag", {
                    get: function() {
                        return i
                    },
                    enumerable: !1
                });
                var u = function l(e) {
                    var r = e.x,
                        o = e.y;
                    if (r || o) {
                        var n = t.options.speed;
                        t.__setMovement(r * n, o * n), a = requestAnimationFrame(function() {
                            l({
                                x: r,
                                y: o
                            })
                        })
                    }
                };
                this.__addEvent(r, "dragstart", function(e) {
                    t.__eventFromChildScrollbar(e) || (i = !0, c = e.target.clientHeight, (0, n.setStyle)(o, {
                        "pointer-events": "auto"
                    }), cancelAnimationFrame(a), t.__updateBounding())
                }), this.__addEvent(document, "dragover mousemove touchmove", function(e) {
                    if (i && !t.__eventFromChildScrollbar(e)) {
                        cancelAnimationFrame(a), e.preventDefault();
                        var r = t.__getPointerTrend(e, c);
                        u(r)
                    }
                }), this.__addEvent(document, "dragend mouseup touchend blur", function() {
                    cancelAnimationFrame(a), i = !1
                })
            };
            Object.defineProperty(o.SmoothScrollbar.prototype, "__dragHandler", {
                value: i,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";
            var o = r(83)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(39),
                i = r(79);
            e.SmoothScrollbar = n.SmoothScrollbar;
            var a = /Android/.test(navigator.userAgent) ? window.devicePixelRatio : 1,
                c = {},
                u = function() {
                    var t = this,
                        e = this.options,
                        r = this.targets,
                        n = r.container,
                        u = e.friction,
                        l = void 0,
                        s = void 0,
                        f = {},
                        d = {},
                        h = function(t) {
                            var e = (0, i.getOriginalEvent)(t).touches;
                            o(e).forEach(function(t) {
                                var r = e[t],
                                    o = (0, i.getPosition)(r),
                                    n = o.x,
                                    a = o.y,
                                    u = c[r.identifier];
                                u ? (u.x = n, u.y = a) : c[r.identifier] = {
                                    x: n,
                                    y: a
                                }
                            })
                        };
                    this.__addEvent(n, "touchstart", function(r) {
                        t.__isDrag || (u = e.friction, h(r), l = Date.now(), s = (0, i.getTouchID)(r), d = (0, i.getPosition)(r), t.stop(), f.x = f.y = 0)
                    }), this.__addEvent(n, "touchmove", function(r) {
                        if (!t.__isDrag) {
                            h(r);
                            var o = (0, i.getTouchID)(r);
                            if (!c[o].activeScrollbar || c[o].activeScrollbar === t) {
                                if (void 0 === s) s = o, l = Date.now(), d = c[o];
                                else if (o !== s) return;
                                if (d) {
                                    var n = Date.now() - l || 1,
                                        a = d,
                                        u = d = (0, i.getPosition)(r),
                                        v = a.x - u.x,
                                        p = a.y - u.y;
                                    if (f.x = v / n, f.y = p / n, e.continuousScrolling && t.__scrollOntoEdge(v, p)) return t.__updateThrottle();
                                    c[o].activeScrollbar = t, r.preventDefault(), e.friction = 40, t.__addMovement(v, p)
                                }
                            }
                        }
                    }), this.__addEvent(n, "touchend", function() {
                        if (!t.__isDrag) {
                            delete c[s], s = void 0, e.friction = u;
                            var r = f.x,
                                o = f.y;
                            r *= 1e3, o *= 1e3;
                            var n = t.options.speed;
                            t.__addMovement(Math.abs(r) > 5 ? r * n * a : 0, Math.abs(o) > 5 ? o * n * a : 0), f.x = f.y = 0
                        }
                    })
                };
            Object.defineProperty(n.SmoothScrollbar.prototype, "__touchHandler", {
                value: u,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(39),
                n = r(79);
            e.SmoothScrollbar = o.SmoothScrollbar;
            var i = function() {
                var t = this,
                    e = this.targets,
                    r = e.container,
                    o = e.xAxis,
                    i = e.yAxis,
                    a = void 0,
                    c = void 0,
                    u = void 0,
                    l = void 0,
                    s = void 0,
                    f = function(t) {
                        return (0, n.isOneOf)(t, [o.track, o.thumb]) ? "x" : (0, n.isOneOf)(t, [i.track, i.thumb]) ? "y" : void 0
                    };
                this.__addEvent(r, "click", function(e) {
                    if (!c && (0, n.isOneOf)(e.target, [o.track, i.track])) {
                        var r = e.target,
                            a = f(r),
                            u = r.getBoundingClientRect(),
                            l = (0, n.getPosition)(e),
                            s = t.size,
                            d = t.offset,
                            h = t.thumbSize;
                        if ("x" === a) {
                            var v = (l.x - u.left - h.x / 2) / (s.container.width - (h.x - h.realX));
                            t.__setMovement(v * s.content.width - d.x, 0)
                        } else {
                            var v = (l.y - u.top - h.y / 2) / (s.container.height - (h.y - h.realY));
                            t.__setMovement(0, v * s.content.height - d.y)
                        }
                    }
                }), this.__addEvent(r, "mousedown", function(e) {
                    if ((0, n.isOneOf)(e.target, [o.thumb, i.thumb])) {
                        a = !0;
                        var r = (0, n.getPosition)(e),
                            c = e.target.getBoundingClientRect();
                        l = f(e.target), u = {
                            x: r.x - c.left,
                            y: r.y - c.top
                        }, s = t.targets.container.getBoundingClientRect()
                    }
                }), this.__addEvent(window, "mousemove", function(e) {
                    if (a) {
                        c = !0, e.preventDefault();
                        var r = t.size,
                            o = t.offset,
                            i = (0, n.getPosition)(e);
                        return "x" === l ? void t.setPosition((i.x - u.x - s.left) / (s.right - s.left) * r.content.width, o.y) : void t.setPosition(o.x, (i.y - u.y - s.top) / (s.bottom - s.top) * r.content.height)
                    }
                }), this.__addEvent(window, "mouseup blur", function() {
                    a = c = !1
                })
            };
            Object.defineProperty(o.SmoothScrollbar.prototype, "__mouseHandler", {
                value: i,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(39),
                n = r(79);
            e.SmoothScrollbar = o.SmoothScrollbar;
            var i = "onwheel" in window ? "wheel" : "mousewheel",
                a = function() {
                    var t = this,
                        e = this.targets.container;
                    this.__addEvent(e, i, function(e) {
                        var r = t.options,
                            o = (0, n.getDelta)(e),
                            i = o.x,
                            a = o.y;
                        return r.continuousScrolling && t.__scrollOntoEdge(i, a) ? t.__updateThrottle() : (e.preventDefault(), void t.__addMovement(i * r.speed, a * r.speed))
                    })
                };
            Object.defineProperty(o.SmoothScrollbar.prototype, "__wheelHandler", {
                value: a,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(39);
            e.SmoothScrollbar = o.SmoothScrollbar;
            var n = function() {
                this.__addEvent(window, "resize", this.__updateThrottle)
            };
            Object.defineProperty(o.SmoothScrollbar.prototype, "__resizeHandler", {
                value: n,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = r(39),
                n = r(79);
            e.SmoothScrollbar = o.SmoothScrollbar;
            var i = function() {
                var t = this,
                    e = !1,
                    r = void 0,
                    o = this.targets,
                    i = o.container,
                    a = o.content,
                    c = function l(e) {
                        var o = e.x,
                            n = e.y;
                        if (o || n) {
                            var i = t.options.speed;
                            t.__setMovement(o * i, n * i), r = requestAnimationFrame(function() {
                                l({
                                    x: o,
                                    y: n
                                })
                            })
                        }
                    },
                    u = function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0];
                        (0, n.setStyle)(i, {
                            "-user-select": t
                        })
                    };
                this.__addEvent(window, "mousemove", function(o) {
                    if (e) {
                        cancelAnimationFrame(r);
                        var n = t.__getPointerTrend(o);
                        c(n)
                    }
                }), this.__addEvent(a, "selectstart", function(o) {
                    return t.__eventFromChildScrollbar(o) ? u("none") : (cancelAnimationFrame(r), t.__updateBounding(), void(e = !0))
                }), this.__addEvent(window, "mouseup blur", function() {
                    cancelAnimationFrame(r), u(), e = !1
                }), this.__addEvent(i, "scroll", function(t) {
                    t.preventDefault(), i.scrollTop = i.scrollLeft = 0
                })
            };
            Object.defineProperty(o.SmoothScrollbar.prototype, "__selectHandler", {
                value: i,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";
            var o = r(129)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(79),
                i = r(39);
            e.SmoothScrollbar = i.SmoothScrollbar;
            var a = function() {
                var t = this,
                    e = this.targets,
                    r = this.options,
                    i = function(e) {
                        var r = t.size,
                            o = t.offset,
                            n = t.limit,
                            i = t.movement;
                        switch (e) {
                            case 32:
                                return [0, 200];
                            case 33:
                                return [0, -r.container.height + 40];
                            case 34:
                                return [0, r.container.height - 40];
                            case 35:
                                return [0, Math.abs(i.y) + n.y - o.y];
                            case 36:
                                return [0, -Math.abs(i.y) - o.y];
                            case 37:
                                return [-40, 0];
                            case 38:
                                return [0, -40];
                            case 39:
                                return [40, 0];
                            case 40:
                                return [0, 40];
                            default:
                                return null
                        }
                    },
                    a = e.container,
                    c = !1;
                this.__addEvent(a, "focus", function() {
                    c = !0
                }), this.__addEvent(a, "blur", function() {
                    c = !1
                }), this.__addEvent(a, "keydown", function(e) {
                    if (c) {
                        e = (0, n.getOriginalEvent)(e);
                        var u = i(e.keyCode || e.which);
                        if (u) {
                            var l = o(u, 2),
                                s = l[0],
                                f = l[1];
                            if (r.continuousScrolling && t.__scrollOntoEdge(s, f)) return a.blur(), t.parents.length && t.parents[0].focus(), t.__updateThrottle();
                            e.preventDefault();
                            var d = t.options.speed;
                            t.__addMovement(s * d, f * d)
                        }
                    }
                })
            };
            Object.defineProperty(i.SmoothScrollbar.prototype, "__keyboardHandler", {
                value: a,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";
            var o = r(89)["default"],
                n = r(130)["default"];
            e["default"] = function() {
                function t(t, e) {
                    var r = [],
                        n = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var c, u = o(t); !(n = (c = u.next()).done) && (r.push(c.value), !e || r.length !== e); n = !0);
                    } catch (l) {
                        i = !0, a = l
                    } finally {
                        try {
                            !n && u["return"] && u["return"]()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return r
                }
                return function(e, r) {
                    if (Array.isArray(e)) return e;
                    if (n(Object(e))) return t(e, r);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(), e.__esModule = !0
        }, function(t, e, r) {
            t.exports = {
                "default": r(131),
                __esModule: !0
            }
        }, function(t, e, r) {
            r(65), r(4), t.exports = r(132)
        }, function(t, e, r) {
            var o = r(36),
                n = r(25)("iterator"),
                i = r(22);
            t.exports = r(12).isIterable = function(t) {
                var e = Object(t);
                return void 0 !== e[n] || "@@iterator" in e || i.hasOwnProperty(o(e))
            }
        }, function(t, e, r) {
            "use strict";
            var o = r(48)["default"],
                n = r(60)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(134);
            o(e, n(i, o));
            var a = r(135);
            o(e, n(a, o));
            var c = r(136);
            o(e, n(c, o));
            var u = r(137);
            o(e, n(u, o));
            var l = r(138);
            o(e, n(l, o));
            var s = r(139);
            o(e, n(s, o));
            var f = r(140);
            o(e, n(f, o));
            var d = r(141);
            o(e, n(d, o));
            var h = r(142);
            o(e, n(h, o));
            var v = r(143);
            o(e, n(v, o));
            var p = r(144);
            o(e, n(p, o))
        }, function(t, e, r) {
            "use strict";

            function o(t, e) {
                return n(this, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0
                })
            }
            var n = r(58)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(39);
            e.SmoothScrollbar = i.SmoothScrollbar, Object.defineProperty(i.SmoothScrollbar.prototype, "__readonly", {
                value: o,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";

            function o(t, e, r) {
                var o = this;
                if (!t || "function" != typeof t.addEventListener) throw new TypeError("expect elem to be a DOM element, but got " + t);
                var n = function(t) {
                    for (var e = arguments.length, o = Array(e > 1 ? e - 1 : 0), n = 1; e > n; n++) o[n - 1] = arguments[n];
                    !t.type.match(/drag/) && t.defaultPrevented || r.apply(void 0, [t].concat(o))
                };
                e.split(/\s+/g).forEach(function(e) {
                    o.__handlers.push({
                        evt: e,
                        elem: t,
                        fn: n,
                        hasRegistered: !0
                    }), t.addEventListener(e, n)
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(39);
            e.SmoothScrollbar = n.SmoothScrollbar, Object.defineProperty(n.SmoothScrollbar.prototype, "__addEvent", {
                value: o,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";

            function o() {
                var t = this.targets,
                    e = t.container,
                    r = t.content;
                this.__readonly("children", [].concat(n(r.querySelectorAll(a.selectors)))), this.__readonly("isNestedScrollbar", !1);
                for (var o = []; e;) e = e.parentElement, a.sbList.has(e) && (this.__readonly("isNestedScrollbar", !0), o.push(e));
                this.__readonly("parents", o)
            }
            var n = r(1)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(39),
                a = r(47);
            e.SmoothScrollbar = i.SmoothScrollbar, Object.defineProperty(i.SmoothScrollbar.prototype, "__updateTree", {
                value: o,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";

            function o(t) {
                var e = this,
                    r = {
                        speed: 1,
                        friction: 10,
                        ignoreEvents: [],
                        thumbMinSize: 20,
                        renderByPixels: !0,
                        continuousScrolling: "auto"
                    },
                    o = {
                        friction: [0, 100],
                        speed: [0, 1 / 0],
                        thumbMinSize: [0, 1 / 0]
                    },
                    l = function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? "auto" : arguments[0];
                        switch (t) {
                            case "auto":
                                return e.isNestedScrollbar;
                            default:
                                return !!t
                        }
                    },
                    s = i({}, {
                        ignoreEvents: {
                            set: function(t) {
                                console.warn("`options.ignoreEvents` parameter is deprecated, use `instance#unregisterEvents()` method instead. https://github.com/idiotWu/smooth-scrollbar/wiki/Instance-Methods#instanceunregisterevents-regex--regex-regex--")
                            },
                            configurable: !0,
                            enumerable: !0
                        },
                        renderByPixels: {
                            get: function() {
                                return r.renderByPixels
                            },
                            set: function(t) {
                                r.renderByPixels = !!t
                            },
                            configurable: !0,
                            enumerable: !0
                        },
                        continuousScrolling: {
                            get: function() {
                                return l(r.continuousScrolling)
                            },
                            set: function(t) {
                                "auto" === t ? r.continuousScrolling = t : r.continuousScrolling = !!t
                            },
                            configurable: !0,
                            enumerable: !0
                        }
                    });
                a(r).filter(function(t) {
                    return !s.hasOwnProperty(t)
                }).forEach(function(t) {
                    c(s, t, {
                        enumerable: !0,
                        get: function() {
                            return r[t]
                        },
                        set: function(e) {
                            if (isNaN(parseFloat(e))) throw new TypeError("expect `options." + t + "` to be a number, but got " + typeof e);
                            r[t] = u.pickInRange.apply(void 0, [e].concat(n(o[t])))
                        }
                    })
                }), this.__readonly("options", s), this.setOptions(t)
            }
            var n = r(1)["default"],
                i = r(45)["default"],
                a = r(83)["default"],
                c = r(58)["default"];
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = r(79),
                l = r(39);
            e.SmoothScrollbar = l.SmoothScrollbar, Object.defineProperty(l.SmoothScrollbar.prototype, "__initOptions", {
                value: o,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";

            function o() {
                this.update(), this.__keyboardHandler(), this.__resizeHandler(), this.__selectHandler(), this.__mouseHandler(), this.__touchHandler(), this.__wheelHandler(), this.__dragHandler(), this.__render()
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(39);
            e.SmoothScrollbar = n.SmoothScrollbar, Object.defineProperty(n.SmoothScrollbar.prototype, "__initScrollbar", {
                value: o,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";

            function o() {
                var t = this.offset,
                    e = this.limit;
                return {
                    x: [-t.x, e.x - t.x],
                    y: [-t.y, e.y - t.y]
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(39);
            e.SmoothScrollbar = n.SmoothScrollbar, Object.defineProperty(n.SmoothScrollbar.prototype, "__getDeltaLimit", {
                value: o,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";

            function o() {
                var t = this.targets.container,
                    e = t.getBoundingClientRect(),
                    r = e.top,
                    o = e.right,
                    n = e.bottom,
                    i = e.left,
                    a = window.innerHeight,
                    c = window.innerWidth;
                this.__readonly("bounding", {
                    top: Math.max(r, 0),
                    right: Math.min(o, c),
                    bottom: Math.min(n, a),
                    left: Math.max(i, 0)
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(39);
            e.SmoothScrollbar = n.SmoothScrollbar, Object.defineProperty(n.SmoothScrollbar.prototype, "__updateBounding", {
                value: o,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";

            function o() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                    e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                    r = this.offset,
                    o = this.limit,
                    n = (0, i.pickInRange)(t + r.x, 0, o.x),
                    a = (0, i.pickInRange)(e + r.y, 0, o.y),
                    c = !0;
                return c &= n === r.x, c &= a === r.y, c &= n === o.x || 0 === n, c &= a === o.y || 0 === a, !!c
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(39),
                i = r(79);
            e.SmoothScrollbar = n.SmoothScrollbar, Object.defineProperty(n.SmoothScrollbar.prototype, "__scrollOntoEdge", {
                value: o,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";

            function o(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                    r = this.bounding,
                    o = r.top,
                    n = r.right,
                    a = r.bottom,
                    c = r.left,
                    u = (0, i.getPosition)(t),
                    l = u.x,
                    s = u.y,
                    f = {
                        x: 0,
                        y: 0
                    };
                return 0 === l && 0 === s ? f : (l > n - e ? f.x = l - n + e : c + e > l && (f.x = l - c - e), s > a - e ? f.y = s - a + e : o + e > s && (f.y = s - o - e), f)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(39),
                i = r(79);
            e.SmoothScrollbar = n.SmoothScrollbar, Object.defineProperty(n.SmoothScrollbar.prototype, "__getPointerTrend", {
                value: o,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";

            function o() {
                var t = this.targets,
                    e = this.size,
                    r = this.offset,
                    o = this.thumbSize,
                    i = r.x / e.content.width * (e.container.width - (o.x - o.realX)),
                    a = r.y / e.content.height * (e.container.height - (o.y - o.realY));
                (0, n.setStyle)(t.xAxis.thumb, {
                    "-transform": "translate3d(" + i + "px, 0, 0)"
                }), (0, n.setStyle)(t.yAxis.thumb, {
                    "-transform": "translate3d(0, " + a + "px, 0)"
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(79),
                i = r(39);
            e.SmoothScrollbar = i.SmoothScrollbar, Object.defineProperty(i.SmoothScrollbar.prototype, "__setThumbPosition", {
                value: o,
                writable: !0,
                configurable: !0
            })
        }, function(t, e, r) {
            "use strict";

            function o() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    e = t.target;
                return this.children.some(function(t) {
                    return t.contains(e)
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = r(39);
            e.SmoothScrollbar = n.SmoothScrollbar, Object.defineProperty(n.SmoothScrollbar.prototype, "__eventFromChildScrollbar", {
                value: o,
                writable: !0,
                configurable: !0
            })
        }])
    });
}), (function(module, exports, __webpack_require__) {
    var closest = __webpack_require__(8);
    var assign = __webpack_require__(10);
    var scrollTo = __webpack_require__(11);
    var eventHandler;

    function destroy() {
        document.removeEventListener('click', eventHandler, false);
    }

    function init(options) {
        destroy();
        options = assign({
            updateUrl: true
        }, options);
        eventHandler = function(ev) {
            var link = closest(ev.target, options.selector || "a[href*='#']", true);
            if (link) {
                ev.preventDefault();
                if (history.pushState && options.updateUrl) {
                    history.pushState(null, null, link.hash || '#');
                }
                scrollTo(link.hash || 'html', options);
            }
        };
        document.addEventListener('click', eventHandler, false);
    }
    module.exports = {
        init: init,
        destroy: destroy
    };
}), (function(module, exports, __webpack_require__) {
    var matches = __webpack_require__(9)
    module.exports = function(element, selector, checkYoSelf) {
        var parent = checkYoSelf ? element : element.parentNode
        while (parent && parent !== document) {
            if (matches(parent, selector)) return parent;
            parent = parent.parentNode
        }
    }
}), (function(module, exports) {
    var proto = Element.prototype;
    var vendor = proto.matchesSelector || proto.webkitMatchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector;
    module.exports = match;

    function match(el, selector) {
        if (vendor) return vendor.call(el, selector);
        var nodes = el.parentNode.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; ++i) {
            if (nodes[i] == el) return true;
        }
        return false;
    }
}), (function(module, exports) {
    'use strict';

    function ToObject(val) {
        if (val == null) {
            throw new TypeError('Object.assign cannot be called with null or undefined');
        }
        return Object(val);
    }
    module.exports = Object.assign || function(target, source) {
        var from;
        var keys;
        var to = ToObject(target);
        for (var s = 1; s < arguments.length; s++) {
            from = arguments[s];
            keys = Object.keys(Object(from));
            for (var i = 0; i < keys.length; i++) {
                to[keys[i]] = from[keys[i]];
            }
        }
        return to;
    };
}), (function(module, exports, __webpack_require__) {
    var scroll = __webpack_require__(12);

    function calculateScrollOffset(elem, additionalOffset, alignment) {
        var body = document.body,
            html = document.documentElement;
        var elemRect = elem.getBoundingClientRect();
        var clientHeight = html.clientHeight;
        var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        additionalOffset = additionalOffset || 0;
        var scrollPosition;
        if (alignment === 'bottom') {
            scrollPosition = elemRect.bottom - clientHeight;
        } else if (alignment === 'middle') {
            scrollPosition = elemRect.bottom - clientHeight / 2 - elemRect.height / 2;
        } else {
            scrollPosition = elemRect.top;
        }
        var maxScrollPosition = documentHeight - clientHeight;
        return Math.min(scrollPosition + additionalOffset + window.pageYOffset, maxScrollPosition);
    }
    module.exports = function(elem, options) {
        options = options || {};
        if (typeof elem === 'string') elem = document.querySelector(elem);
        if (elem) return scroll(0, calculateScrollOffset(elem, options.offset, options.align), options);
    };
}), (function(module, exports, __webpack_require__) {
    var Tween = __webpack_require__(13);
    var raf = __webpack_require__(19);
    module.exports = scrollTo;

    function scrollTo(x, y, options) {
        options = options || {};
        var start = scroll();
        var tween = Tween(start).ease(options.ease || 'out-circ').to({
            top: y,
            left: x
        }).duration(options.duration || 1000);
        tween.update(function(o) {
            window.scrollTo(o.left | 0, o.top | 0);
        });
        tween.on('end', function() {
            animate = function() {};
        });

        function animate() {
            raf(animate);
            tween.update();
        }
        animate();
        return tween;
    }

    function scroll() {
        var y = window.pageYOffset || document.documentElement.scrollTop;
        var x = window.pageXOffset || document.documentElement.scrollLeft;
        return {
            top: y,
            left: x
        };
    }
}), (function(module, exports, __webpack_require__) {
    var Emitter = __webpack_require__(14);
    var clone = __webpack_require__(15);
    var type = __webpack_require__(17);
    var ease = __webpack_require__(18);
    module.exports = Tween;

    function Tween(obj) {
        if (!(this instanceof Tween)) return new Tween(obj);
        this._from = obj;
        this.ease('linear');
        this.duration(500);
    }
    Emitter(Tween.prototype);
    Tween.prototype.reset = function() {
        this.isArray = 'array' === type(this._from);
        this._curr = clone(this._from);
        this._done = false;
        this._start = Date.now();
        return this;
    };
    Tween.prototype.to = function(obj) {
        this.reset();
        this._to = obj;
        return this;
    };
    Tween.prototype.duration = function(ms) {
        this._duration = ms;
        return this;
    };
    Tween.prototype.ease = function(fn) {
        fn = 'function' == typeof fn ? fn : ease[fn];
        if (!fn) throw new TypeError('invalid easing function');
        this._ease = fn;
        return this;
    };
    Tween.prototype.stop = function() {
        this.stopped = true;
        this._done = true;
        this.emit('stop');
        this.emit('end');
        return this;
    };
    Tween.prototype.step = function() {
        if (this._done) return;
        var duration = this._duration;
        var now = Date.now();
        var delta = now - this._start;
        var done = delta >= duration;
        if (done) {
            this._from = this._to;
            this._update(this._to);
            this._done = true;
            this.emit('end');
            return this;
        }
        var from = this._from;
        var to = this._to;
        var curr = this._curr;
        var fn = this._ease;
        var p = (now - this._start) / duration;
        var n = fn(p);
        if (this.isArray) {
            for (var i = 0; i < from.length; ++i) {
                curr[i] = from[i] + (to[i] - from[i]) * n;
            }
            this._update(curr);
            return this;
        }
        for (var k in from) {
            curr[k] = from[k] + (to[k] - from[k]) * n;
        }
        this._update(curr);
        return this;
    };
    Tween.prototype.update = function(fn) {
        if (0 == arguments.length) return this.step();
        this._update = fn;
        return this;
    };
}), (function(module, exports) {
    module.exports = Emitter;

    function Emitter(obj) {
        if (obj) return mixin(obj);
    };

    function mixin(obj) {
        for (var key in Emitter.prototype) {
            obj[key] = Emitter.prototype[key];
        }
        return obj;
    }
    Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
        return this;
    };
    Emitter.prototype.once = function(event, fn) {
        function on() {
            this.off(event, on);
            fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(event, on);
        return this;
    };
    Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        if (0 == arguments.length) {
            this._callbacks = {};
            return this;
        }
        var callbacks = this._callbacks['$' + event];
        if (!callbacks) return this;
        if (1 == arguments.length) {
            delete this._callbacks['$' + event];
            return this;
        }
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
            cb = callbacks[i];
            if (cb === fn || cb.fn === fn) {
                callbacks.splice(i, 1);
                break;
            }
        }
        return this;
    };
    Emitter.prototype.emit = function(event) {
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1),
            callbacks = this._callbacks['$' + event];
        if (callbacks) {
            callbacks = callbacks.slice(0);
            for (var i = 0, len = callbacks.length; i < len; ++i) {
                callbacks[i].apply(this, args);
            }
        }
        return this;
    };
    Emitter.prototype.listeners = function(event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks['$' + event] || [];
    };
    Emitter.prototype.hasListeners = function(event) {
        return !!this.listeners(event).length;
    };
}), (function(module, exports, __webpack_require__) {
    var type;
    try {
        type = __webpack_require__(16);
    } catch (_) {
        type = __webpack_require__(16);
    }
    module.exports = clone;

    function clone(obj) {
        switch (type(obj)) {
            case 'object':
                var copy = {};
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        copy[key] = clone(obj[key]);
                    }
                }
                return copy;
            case 'array':
                var copy = new Array(obj.length);
                for (var i = 0, l = obj.length; i < l; i++) {
                    copy[i] = clone(obj[i]);
                }
                return copy;
            case 'regexp':
                var flags = '';
                flags += obj.multiline ? 'm' : '';
                flags += obj.global ? 'g' : '';
                flags += obj.ignoreCase ? 'i' : '';
                return new RegExp(obj.source, flags);
            case 'date':
                return new Date(obj.getTime());
            default:
                return obj;
        }
    }
}), (function(module, exports) {
    var toString = Object.prototype.toString;
    module.exports = function(val) {
        switch (toString.call(val)) {
            case '[object Date]':
                return 'date';
            case '[object RegExp]':
                return 'regexp';
            case '[object Arguments]':
                return 'arguments';
            case '[object Array]':
                return 'array';
            case '[object Error]':
                return 'error';
        }
        if (val === null) return 'null';
        if (val === undefined) return 'undefined';
        if (val !== val) return 'nan';
        if (val && val.nodeType === 1) return 'element';
        if (isBuffer(val)) return 'buffer';
        val = val.valueOf ? val.valueOf() : Object.prototype.valueOf.apply(val);
        return typeof val;
    };

    function isBuffer(obj) {
        return !!(obj != null && (obj._isBuffer || (obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj))))
    }
}), (function(module, exports) {
    var toString = Object.prototype.toString;
    module.exports = function(val) {
        switch (toString.call(val)) {
            case '[object Date]':
                return 'date';
            case '[object RegExp]':
                return 'regexp';
            case '[object Arguments]':
                return 'arguments';
            case '[object Array]':
                return 'array';
            case '[object Error]':
                return 'error';
        }
        if (val === null) return 'null';
        if (val === undefined) return 'undefined';
        if (val !== val) return 'nan';
        if (val && val.nodeType === 1) return 'element';
        val = val.valueOf ? val.valueOf() : Object.prototype.valueOf.apply(val)
        return typeof val;
    };
}), (function(module, exports) {
    exports.linear = function(n) {
        return n;
    };
    exports.inQuad = function(n) {
        return n * n;
    };
    exports.outQuad = function(n) {
        return n * (2 - n);
    };
    exports.inOutQuad = function(n) {
        n *= 2;
        if (n < 1) return 0.5 * n * n;
        return -0.5 * (--n * (n - 2) - 1);
    };
    exports.inCube = function(n) {
        return n * n * n;
    };
    exports.outCube = function(n) {
        return --n * n * n + 1;
    };
    exports.inOutCube = function(n) {
        n *= 2;
        if (n < 1) return 0.5 * n * n * n;
        return 0.5 * ((n -= 2) * n * n + 2);
    };
    exports.inQuart = function(n) {
        return n * n * n * n;
    };
    exports.outQuart = function(n) {
        return 1 - (--n * n * n * n);
    };
    exports.inOutQuart = function(n) {
        n *= 2;
        if (n < 1) return 0.5 * n * n * n * n;
        return -0.5 * ((n -= 2) * n * n * n - 2);
    };
    exports.inQuint = function(n) {
        return n * n * n * n * n;
    }
    exports.outQuint = function(n) {
        return --n * n * n * n * n + 1;
    }
    exports.inOutQuint = function(n) {
        n *= 2;
        if (n < 1) return 0.5 * n * n * n * n * n;
        return 0.5 * ((n -= 2) * n * n * n * n + 2);
    };
    exports.inSine = function(n) {
        return 1 - Math.cos(n * Math.PI / 2);
    };
    exports.outSine = function(n) {
        return Math.sin(n * Math.PI / 2);
    };
    exports.inOutSine = function(n) {
        return .5 * (1 - Math.cos(Math.PI * n));
    };
    exports.inExpo = function(n) {
        return 0 == n ? 0 : Math.pow(1024, n - 1);
    };
    exports.outExpo = function(n) {
        return 1 == n ? n : 1 - Math.pow(2, -10 * n);
    };
    exports.inOutExpo = function(n) {
        if (0 == n) return 0;
        if (1 == n) return 1;
        if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
        return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
    };
    exports.inCirc = function(n) {
        return 1 - Math.sqrt(1 - n * n);
    };
    exports.outCirc = function(n) {
        return Math.sqrt(1 - (--n * n));
    };
    exports.inOutCirc = function(n) {
        n *= 2
        if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
        return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
    };
    exports.inBack = function(n) {
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
    };
    exports.outBack = function(n) {
        var s = 1.70158;
        return --n * n * ((s + 1) * n + s) + 1;
    };
    exports.inOutBack = function(n) {
        var s = 1.70158 * 1.525;
        if ((n *= 2) < 1) return 0.5 * (n * n * ((s + 1) * n - s));
        return 0.5 * ((n -= 2) * n * ((s + 1) * n + s) + 2);
    };
    exports.inBounce = function(n) {
        return 1 - exports.outBounce(1 - n);
    };
    exports.outBounce = function(n) {
        if (n < (1 / 2.75)) {
            return 7.5625 * n * n;
        } else if (n < (2 / 2.75)) {
            return 7.5625 * (n -= (1.5 / 2.75)) * n + 0.75;
        } else if (n < (2.5 / 2.75)) {
            return 7.5625 * (n -= (2.25 / 2.75)) * n + 0.9375;
        } else {
            return 7.5625 * (n -= (2.625 / 2.75)) * n + 0.984375;
        }
    };
    exports.inOutBounce = function(n) {
        if (n < .5) return exports.inBounce(n * 2) * .5;
        return exports.outBounce(n * 2 - 1) * .5 + .5;
    };
    exports['in-quad'] = exports.inQuad;
    exports['out-quad'] = exports.outQuad;
    exports['in-out-quad'] = exports.inOutQuad;
    exports['in-cube'] = exports.inCube;
    exports['out-cube'] = exports.outCube;
    exports['in-out-cube'] = exports.inOutCube;
    exports['in-quart'] = exports.inQuart;
    exports['out-quart'] = exports.outQuart;
    exports['in-out-quart'] = exports.inOutQuart;
    exports['in-quint'] = exports.inQuint;
    exports['out-quint'] = exports.outQuint;
    exports['in-out-quint'] = exports.inOutQuint;
    exports['in-sine'] = exports.inSine;
    exports['out-sine'] = exports.outSine;
    exports['in-out-sine'] = exports.inOutSine;
    exports['in-expo'] = exports.inExpo;
    exports['out-expo'] = exports.outExpo;
    exports['in-out-expo'] = exports.inOutExpo;
    exports['in-circ'] = exports.inCirc;
    exports['out-circ'] = exports.outCirc;
    exports['in-out-circ'] = exports.inOutCirc;
    exports['in-back'] = exports.inBack;
    exports['out-back'] = exports.outBack;
    exports['in-out-back'] = exports.inOutBack;
    exports['in-bounce'] = exports.inBounce;
    exports['out-bounce'] = exports.outBounce;
    exports['in-out-bounce'] = exports.inOutBounce;
}), (function(module, exports) {
    exports = module.exports = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || fallback;
    var prev = new Date().getTime();

    function fallback(fn) {
        var curr = new Date().getTime();
        var ms = Math.max(0, 16 - (curr - prev));
        var req = setTimeout(fn, ms);
        prev = curr;
        return req;
    }
    var cancel = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.clearTimeout;
    exports.cancel = function(id) {
        cancel.call(window, id);
    };
}), (function(module, exports, __webpack_require__) {
    'use strict';
    var _parallax = __webpack_require__(4);
    var header = document.getElementById('header');
    var nav = document.getElementsByClassName('nav')[0];
    var body = document.body;
    var navButton = document.getElementsByClassName('nav-button')[0];
    var scrollCallback = function scrollCallback() {
        var headerTopOff = header.getBoundingClientRect().top;
        if (headerTopOff < -10) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
        (0, _parallax.requestAnimationFrame)(scrollCallback);
    };
    scrollCallback();
    navButton.addEventListener('click', function() {
        if (body.dataset['menu'] === 'closed') {
            body.setAttribute("data-menu", "open");
        } else {
            body.setAttribute("data-menu", "closed");
        }
    });
}), (function(module, exports) {
    'use strict';
    var hartlandLink = document.querySelectorAll('a[href*="#"]');
    hartlandLink.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.setAttribute('data-delay', 'true');
            var URL = event.target.getAttribute('href');
            setTimeout(function() {
                window.location = URL;
            }, 500);
        });
    });
}), (function(module, exports) {
    'use strict';
    var fileUpload = document.querySelector('#file-upload');
    if (fileUpload) {
        fileUpload.addEventListener('change', function() {
            var filename = this.value.match(/([^\/\\]+)$/)[1];
            document.querySelector('#file-name').classList.add('file-added');
            document.querySelector('#file-name').innerHTML = filename;
        });
    }
}), (function(module, exports, __webpack_require__) {
    'use strict';
    __webpack_require__(24);
    __webpack_require__(25);
    __webpack_require__(26);
    var panorama = document.querySelector('#panorama');
    if (panorama) {
        var hotspot = function hotspot(hotSpotDiv, args) {
            hotSpotDiv.classList.add('tooltip');
            var text = document.createElement('span');
            text.classList.add('hotspot-box');
            var ring = document.createElement('span');
            ring.classList.add('hotspot-ring');
            text.innerHTML = args;
            hotSpotDiv.appendChild(text);
            hotSpotDiv.appendChild(ring);
        };
        var floor = '\n  <img src=\'' + object_exe.hsFloorImage.url + '\' />\n  <div class=\'hotspot-desc\'>\n  <h3 class=\'hotspot-heading\' data-num=\'F\'>' + object_exe.hsFloorTitle + '</h3>\n  <p class=\'hotspot-text\'>' + object_exe.hsFloorContent + '</p>\n  </div>\n  ';
        var wall = '\n  <img src=\'' + object_exe.hsWallImage.url + '\' />\n  <div class=\'hotspot-desc\'>\n  <h3 class=\'hotspot-heading\' data-num=\'W\'>' + object_exe.hsWallTitle + '</h3>\n  <p class=\'hotspot-text\'>' + object_exe.hsFloorContent + '</p>\n  </div>\n  ';
        var ceiling = '\n  <img src=\'' + object_exe.hsCeilingImage.url + '\' />\n  <div class=\'hotspot-desc\'>\n  <h3 class=\'hotspot-heading\' data-num=\'C\'>' + object_exe.hsCeilingTitle + '</h3>\n  <p class=\'hotspot-text\'>' + object_exe.hsCeilingContent + '</p>\n  </div>\n  ';
        pannellum.viewer('panorama', {
            'type': 'equirectangular',
            'panorama': window.innerWidth < 1000 ? '' + object_exe.mobilePanImage.url : '' + object_exe.mobilePanImage.url,
            'autoLoad': true,
            'autoRotate': -1,
            'orientationOnByDefault': window.innerWidth < 1000 ? true : false,
            'autoRotateInactivityDelay': 5000,
            'toggleFullscreen': true,
            'mouseZoom': false,
            'pitch': -10.1,
            'yaw': -20.5,
            'hfov': window.innerWidth < 1024 ? -100 : 130
        });
        var fullscreen = document.querySelector('.pnlm-fullscreen-toggle-button').innerHTML = '<span class=\'open\'>Fullscreen</span><span class=\'close-full\'><span></span><span></span></span>';
        window.addEventListener('load', function() {
            var fullscreenBtn = document.querySelector('.pnlm-fullscreen-toggle-button');
            var closeBtn = document.querySelector('.close-full');
            fullscreenBtn.addEventListener('click', function() {
                var body = document.getElementsByTagName('body')[0];
                document.getElementById('header').style.height = "100vh";
                body.classList.toggle('noScroll');
            });
        });
    }
}), (function(module, exports) {
    'use strict';
    window.pannellum = function(window, document, undefined) {
        'use strict';

        function Viewer(container, initialConfig) {
            var _this = this;
            var config, renderer, preview, isUserInteracting = false,
                latestInteraction = Date.now(),
                onPointerDownPointerX = 0,
                onPointerDownPointerY = 0,
                onPointerDownPointerDist = -1,
                onPointerDownYaw = 0,
                onPointerDownPitch = 0,
                keysDown = new Array(10),
                fullscreenActive = false,
                loaded = false,
                error = false,
                isTimedOut = false,
                listenersAdded = false,
                panoImage, prevTime, speed = {
                    'yaw': 0,
                    'pitch': 0,
                    'hfov': 0
                },
                animating = false,
                orientation = false,
                autoRotateStart, autoRotateSpeed = 0,
                origHfov, origPitch, animatedMove = {},
                externalEventListeners = {},
                specifiedPhotoSphereExcludes = [],
                update = false,
                hotspotsCreated = false;
            var defaultConfig = {
                hfov: 100,
                minHfov: 50,
                maxHfov: 120,
                pitch: 0,
                minPitch: undefined,
                maxPitch: undefined,
                yaw: 0,
                minYaw: -180,
                maxYaw: 180,
                roll: 0,
                haov: 360,
                vaov: 180,
                vOffset: 0,
                autoRotate: false,
                autoRotateInactivityDelay: -1,
                autoRotateStopDelay: undefined,
                type: 'equirectangular',
                northOffset: 0,
                showFullscreenCtrl: true,
                dynamic: false,
                keyboardZoom: true,
                mouseZoom: true,
                showZoomCtrl: true,
                autoLoad: false,
                showControls: true,
                orientationOnByDefault: false,
                hotSpotDebug: false,
                backgroundColor: [0, 0, 0]
            };
            container = typeof container === 'string' ? document.getElementById(container) : container;
            container.classList.add('pnlm-container');
            container.tabIndex = 0;
            var renderContainer = document.createElement('div');
            renderContainer.className = 'pnlm-render-container';
            container.appendChild(renderContainer);
            var dragFix = document.createElement('div');
            dragFix.className = 'pnlm-dragfix';
            container.appendChild(dragFix);
            var aboutMsg = document.createElement('span');
            aboutMsg.className = 'pnlm-about-msg';
            aboutMsg.innerHTML = '<a href="https://pannellum.org/" target="_blank">Pannellum</a>';
            container.appendChild(aboutMsg);
            dragFix.addEventListener('contextmenu', aboutMessage);
            var infoDisplay = {};
            var hotSpotDebugIndicator = document.createElement('div');
            hotSpotDebugIndicator.className = 'pnlm-sprite pnlm-hot-spot-debug-indicator';
            container.appendChild(hotSpotDebugIndicator);
            infoDisplay.container = document.createElement('div');
            infoDisplay.container.className = 'pnlm-panorama-info';
            infoDisplay.title = document.createElement('div');
            infoDisplay.title.className = 'pnlm-title-box';
            infoDisplay.container.appendChild(infoDisplay.title);
            infoDisplay.author = document.createElement('div');
            infoDisplay.author.className = 'pnlm-author-box';
            infoDisplay.container.appendChild(infoDisplay.author);
            container.appendChild(infoDisplay.container);
            infoDisplay.load = {};
            infoDisplay.load.box = document.createElement('div');
            infoDisplay.load.box.className = 'pnlm-load-box';
            infoDisplay.load.box.innerHTML = '<p>Loading...</p>';
            infoDisplay.load.lbox = document.createElement('div');
            infoDisplay.load.lbox.className = 'pnlm-lbox';
            infoDisplay.load.lbox.innerHTML = '<div class="pnlm-loading"></div>';
            infoDisplay.load.box.appendChild(infoDisplay.load.lbox);
            infoDisplay.load.lbar = document.createElement('div');
            infoDisplay.load.lbar.className = 'pnlm-lbar';
            infoDisplay.load.lbarFill = document.createElement('div');
            infoDisplay.load.lbarFill.className = 'pnlm-lbar-fill';
            infoDisplay.load.lbar.appendChild(infoDisplay.load.lbarFill);
            infoDisplay.load.box.appendChild(infoDisplay.load.lbar);
            infoDisplay.load.msg = document.createElement('p');
            infoDisplay.load.msg.className = 'pnlm-lmsg';
            infoDisplay.load.box.appendChild(infoDisplay.load.msg);
            container.appendChild(infoDisplay.load.box);
            infoDisplay.errorMsg = document.createElement('div');
            infoDisplay.errorMsg.className = 'pnlm-error-msg pnlm-info-box';
            container.appendChild(infoDisplay.errorMsg);
            var controls = {};
            controls.container = document.createElement('div');
            controls.container.className = 'pnlm-controls-container';
            container.appendChild(controls.container);
            controls.load = document.createElement('div');
            controls.load.className = 'pnlm-load-button';
            controls.load.innerHTML = '<p>Click to<br>Load<br>Panorama<p>';
            controls.load.addEventListener('click', load);
            container.appendChild(controls.load);
            controls.zoom = document.createElement('div');
            controls.zoom.className = 'pnlm-zoom-controls pnlm-controls';
            controls.zoomIn = document.createElement('div');
            controls.zoomIn.className = 'pnlm-zoom-in pnlm-sprite pnlm-control';
            controls.zoomIn.addEventListener('click', zoomIn);
            controls.zoom.appendChild(controls.zoomIn);
            controls.zoomOut = document.createElement('div');
            controls.zoomOut.className = 'pnlm-zoom-out pnlm-sprite pnlm-control';
            controls.zoomOut.addEventListener('click', zoomOut);
            controls.zoom.appendChild(controls.zoomOut);
            controls.container.appendChild(controls.zoom);
            controls.fullscreen = document.createElement('div');
            controls.fullscreen.addEventListener('click', toggleFullscreen);
            controls.fullscreen.className = 'pnlm-fullscreen-toggle-button pnlm-sprite pnlm-fullscreen-toggle-button-inactive pnlm-controls pnlm-control';
            if (document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled) controls.container.appendChild(controls.fullscreen);
            controls.orientation = document.createElement('div');
            controls.orientation.addEventListener('click', function(e) {
                if (orientation) stopOrientation();
                else startOrientation();
            });
            controls.orientation.addEventListener('mousedown', function(e) {
                e.stopPropagation();
            });
            controls.orientation.addEventListener('touchstart', function(e) {
                e.stopPropagation();
            });
            controls.orientation.addEventListener('pointerdown', function(e) {
                e.stopPropagation();
            });
            controls.orientation.className = 'pnlm-orientation-button pnlm-orientation-button-inactive pnlm-sprite pnlm-controls pnlm-control';
            if (window.DeviceOrientationEvent) {
                window.addEventListener('deviceorientation', function(e) {
                    window.removeEventListener('deviceorientation', this);
                    if (e && e.alpha !== null && e.beta !== null && e.gamma !== null) controls.container.appendChild(controls.orientation);
                });
            }
            var compass = document.createElement('div');
            compass.className = 'pnlm-compass pnlm-controls pnlm-control';
            container.appendChild(compass);
            if (initialConfig.firstScene) {
                mergeConfig(initialConfig.firstScene);
            } else if (initialConfig.default && initialConfig.default.firstScene) {
                mergeConfig(initialConfig.default.firstScene);
            } else {
                mergeConfig(null);
            }
            processOptions();

//            function init() {
//                var div = document.createElement("div");
//                div.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->";
//                if (div.getElementsByTagName("i").length == 1) {
//                    anError();
//                    return;
//                }
//                origHfov = config.hfov;
//                origPitch = config.pitch;
//                var i, p;
//                if (config.type == 'cubemap') {
//                    panoImage = [];
//                    for (i = 0; i < 6; i++) {
//                        panoImage.push(new Image());
//                        panoImage[i].crossOrigin = 'anonymous';
//                    }
//                    infoDisplay.load.lbox.style.display = 'block';
//                    infoDisplay.load.lbar.style.display = 'none';
//                } else if (config.type == 'multires') {
//                    var c = JSON.parse(JSON.stringify(config.multiRes));
//                    if (config.basePath && config.multiRes.basePath && !/^(?:[a-z]+:)?\/\//i.test(config.multiRes.basePath)) {
//                        c.basePath = config.basePath + config.multiRes.basePath;
//                    } else if (config.multiRes.basePath) {
//                        c.basePath = config.multiRes.basePath;
//                    } else if (config.basePath) {
//                        c.basePath = config.basePath;
//                    }
//                    panoImage = c;
//                } else {
//                    if (config.dynamic === true) {
//                        panoImage = config.panorama;
//                    } else {
//                        if (config.panorama === undefined) {
//                            anError('No panorama image was specified.');
//                            return;
//                        }
//                        panoImage = new Image();
//                    }
//                }
//                if (config.type == 'cubemap') {
//                    var itemsToLoad = 6;
//                    var onLoad = function onLoad() {
//                        itemsToLoad--;
//                        if (itemsToLoad === 0) {
//                            onImageLoad();
//                        }
//                    };
//                    var onError = function onError(e) {
//                        var a = document.createElement('a');
//                        a.href = e.target.src;
//                        a.innerHTML = a.href;
//                        anError('The file ' + a.outerHTML + ' could not be accessed.');
//                    };
//                    for (i = 0; i < panoImage.length; i++) {
//                        panoImage[i].onload = onLoad;
//                        panoImage[i].onerror = onError;
//                        p = config.cubeMap[i];
//                        if (config.basePath && !absoluteURL(p)) {
//                            p = config.basePath + p;
//                        }
//                        panoImage[i].src = encodeURI(p);
//                    }
//                } else if (config.type == 'multires') {
//                    onImageLoad();
//                } else {
//                    p = '';
//                    if (config.basePath) {
//                        p = config.basePath;
//                    }
//                    if (config.dynamic !== true) {
//                        p = absoluteURL(config.panorama) ? config.panorama : p + config.panorama;
//                        panoImage.onload = function() {
//                            window.URL.revokeObjectURL(this.src);
//                            onImageLoad();
//                        };
//                        var xhr = new XMLHttpRequest();
//                        xhr.onloadend = function() {
//                            if (xhr.status != 200) {
//                                var a = document.createElement('a');
//                                a.href = encodeURI(p);
//                                a.innerHTML = a.href;
//                                anError('The file ' + a.outerHTML + ' could not be accessed.');
//                            }
//                            var img = this.response;
//                            parseGPanoXMP(img);
//                            infoDisplay.load.msg.innerHTML = '';
//                        };
//                        xhr.onprogress = function(e) {
//                            if (e.lengthComputable) {
//                                var percent = e.loaded / e.total * 100;
//                                infoDisplay.load.lbarFill.style.width = percent + '%';
//                                var unit, numerator, denominator;
//                                if (e.total > 1e6) {
//                                    unit = 'MB';
//                                    numerator = (e.loaded / 1e6).toFixed(2);
//                                    denominator = (e.total / 1e6).toFixed(2);
//                                } else if (e.total > 1e3) {
//                                    unit = 'kB';
//                                    numerator = (e.loaded / 1e3).toFixed(1);
//                                    denominator = (e.total / 1e3).toFixed(1);
//                                } else {
//                                    unit = 'B';
//                                    numerator = e.loaded;
//                                    denominator = e.total;
//                                }
//                                infoDisplay.load.msg.innerHTML = numerator + ' / ' + denominator + ' ' + unit;
//                            } else {
//                                infoDisplay.load.lbox.style.display = 'block';
//                                infoDisplay.load.lbar.style.display = 'none';
//                            }
//                        };
//                        try {
//                            xhr.open('GET', p, true);
//                        } catch (e) {
//                            anError('There is something wrong with the panorama URL.');
//                        }
//                        xhr.responseType = 'blob';
//                        xhr.setRequestHeader('Accept', 'image/*,*/*;q=0.9');
//                        xhr.send();
//                    }
//                }
//                container.classList.add('pnlm-grab');
//                container.classList.remove('pnlm-grabbing');
//            }
//
//            function absoluteURL(url) {
//                return new RegExp('^(?:[a-z]+:)?//', 'i').test(url) || url[0] == '/' || url.slice(0, 5) == 'blob:';
//            };

            function onImageLoad() {
                if (!renderer) renderer = new libpannellum.renderer(renderContainer);
                if (!listenersAdded) {
                    listenersAdded = true;
                    dragFix.addEventListener('mousedown', onDocumentMouseDown, false);
                    document.addEventListener('mousemove', onDocumentMouseMove, false);
                    document.addEventListener('mouseup', onDocumentMouseUp, false);
                    if (config.mouseZoom) {
                        container.addEventListener('mousewheel', onDocumentMouseWheel, false);
                        container.addEventListener('DOMMouseScroll', onDocumentMouseWheel, false);
                    }
                    container.addEventListener('mozfullscreenchange', onFullScreenChange, false);
                    container.addEventListener('webkitfullscreenchange', onFullScreenChange, false);
                    container.addEventListener('msfullscreenchange', onFullScreenChange, false);
                    container.addEventListener('fullscreenchange', onFullScreenChange, false);
                    window.addEventListener('resize', onDocumentResize, false);
                    window.addEventListener('orientationchange', onDocumentResize, false);
                    container.addEventListener('keydown', onDocumentKeyPress, false);
                    container.addEventListener('keyup', onDocumentKeyUp, false);
                    container.addEventListener('blur', clearKeys, false);
                    document.addEventListener('mouseleave', onDocumentMouseUp, false);
                    dragFix.addEventListener('touchstart', onDocumentTouchStart, false);
                    dragFix.addEventListener('touchmove', onDocumentTouchMove, false);
                    dragFix.addEventListener('touchend', onDocumentTouchEnd, false);
                    dragFix.addEventListener('pointerdown', onDocumentPointerDown, false);
                    dragFix.addEventListener('pointermove', onDocumentPointerMove, false);
                    dragFix.addEventListener('pointerup', onDocumentPointerUp, false);
                    dragFix.addEventListener('pointerleave', onDocumentPointerUp, false);
                    if (window.navigator.pointerEnabled) container.style.touchAction = 'none';
                }
                renderInit();
                setTimeout(function() {
                    isTimedOut = true;
                }, 500);
            }

            function parseGPanoXMP(image) {
                var reader = new FileReader();
                reader.addEventListener('loadend', function() {
                    var img = reader.result;
                    if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)) {
                        var flagIndex = img.indexOf('\xff\xc2');
                        if (flagIndex < 0 || flagIndex > 65536) {
                            anError("Due to iOS 8's broken WebGL implementation, only " + "progressive encoded JPEGs work for your device (this " + "panorama uses standard encoding).");
                        }
                    }
                    var start = img.indexOf('<x:xmpmeta');
                    if (start > -1 && config.ignoreGPanoXMP !== true) {
                        var xmpData = img.substring(start, img.indexOf('</x:xmpmeta>') + 12);
                        var getTag = function getTag(tag) {
                            var result;
                            if (xmpData.indexOf(tag + '="') >= 0) {
                                result = xmpData.substring(xmpData.indexOf(tag + '="') + tag.length + 2);
                                result = result.substring(0, result.indexOf('"'));
                            } else if (xmpData.indexOf(tag + '>') >= 0) {
                                result = xmpData.substring(xmpData.indexOf(tag + '>') + tag.length + 1);
                                result = result.substring(0, result.indexOf('<'));
                            }
                            if (result !== undefined) {
                                return Number(result);
                            }
                            return null;
                        };
                        var xmp = {
                            fullWidth: getTag('GPano:FullPanoWidthPixels'),
                            croppedWidth: getTag('GPano:CroppedAreaImageWidthPixels'),
                            fullHeight: getTag('GPano:FullPanoHeightPixels'),
                            croppedHeight: getTag('GPano:CroppedAreaImageHeightPixels'),
                            topPixels: getTag('GPano:CroppedAreaTopPixels'),
                            heading: getTag('GPano:PoseHeadingDegrees'),
                            horizonPitch: getTag('GPano:PosePitchDegrees'),
                            horizonRoll: getTag('GPano:PoseRollDegrees')
                        };
                        if (xmp.fullWidth !== null && xmp.croppedWidth !== null && xmp.fullHeight !== null && xmp.croppedHeight !== null && xmp.topPixels !== null) {
                            if (specifiedPhotoSphereExcludes.indexOf('haov') < 0) config.haov = xmp.croppedWidth / xmp.fullWidth * 360;
                            if (specifiedPhotoSphereExcludes.indexOf('vaov') < 0) config.vaov = xmp.croppedHeight / xmp.fullHeight * 180;
                            if (specifiedPhotoSphereExcludes.indexOf('vOffset') < 0) config.vOffset = ((xmp.topPixels + xmp.croppedHeight / 2) / xmp.fullHeight - 0.5) * -180;
                            if (xmp.heading !== null && specifiedPhotoSphereExcludes.indexOf('northOffset') < 0) {
                                config.northOffset = xmp.heading;
                                if (config.compass !== false) {
                                    config.compass = true;
                                }
                            }
                            if (xmp.horizonPitch !== null && xmp.horizonRoll !== null) {
                                if (specifiedPhotoSphereExcludes.indexOf('horizonPitch') < 0) config.horizonPitch = xmp.horizonPitch;
                                if (specifiedPhotoSphereExcludes.indexOf('horizonRoll') < 0) config.horizonRoll = xmp.horizonRoll;
                            }
                        }
                    }
                    panoImage.src = window.URL.createObjectURL(image);
                });
                if (reader.readAsBinaryString !== undefined) reader.readAsBinaryString(image);
                else reader.readAsText(image);
            }

            function anError(errorMsg) {
                if (errorMsg === undefined) errorMsg = 'Your browser does not have the necessary WebGL support to display this panorama.';
                infoDisplay.errorMsg.innerHTML = '<p>' + errorMsg + '</p>';
                controls.load.style.display = 'none';
                infoDisplay.load.box.style.display = 'none';
                infoDisplay.errorMsg.style.display = 'table';
                error = true;
                renderContainer.style.display = 'none';
                fireEvent('error', errorMsg);
            }

            function clearError() {
                if (error) {
                    infoDisplay.load.box.style.display = 'none';
                    infoDisplay.errorMsg.style.display = 'none';
                    error = false;
                    fireEvent('errorcleared');
                }
            }

            function aboutMessage(event) {
                var pos = mousePosition(event);
                aboutMsg.style.left = pos.x + 'px';
                aboutMsg.style.top = pos.y + 'px';
                clearTimeout(aboutMessage.t1);
                clearTimeout(aboutMessage.t2);
                aboutMsg.style.display = 'block';
                aboutMsg.style.opacity = 1;
                aboutMessage.t1 = setTimeout(function() {
                    aboutMsg.style.opacity = 0;
                }, 2000);
                aboutMessage.t2 = setTimeout(function() {
                    aboutMsg.style.display = 'none';
                }, 2500);
                event.preventDefault();
            }

            function mousePosition(event) {
                var bounds = container.getBoundingClientRect();
                var pos = {};
                pos.x = event.clientX - bounds.left;
                pos.y = event.clientY - bounds.top;
                return pos;
            }

            function onDocumentMouseDown(event) {
                event.preventDefault();
                container.focus();
                if (!loaded) {
                    return;
                }
                var pos = mousePosition(event);
                if (config.hotSpotDebug) {
                    var coords = mouseEventToCoords(event);
                    console.log('Pitch: ' + coords[0] + ', Yaw: ' + coords[1] + ', Center Pitch: ' + config.pitch + ', Center Yaw: ' + config.yaw + ', HFOV: ' + config.hfov);
                }
                stopAnimation();
                stopOrientation();
                config.roll = 0;
                speed.hfov = 0;
                isUserInteracting = true;
                latestInteraction = Date.now();
                onPointerDownPointerX = pos.x;
                onPointerDownPointerY = pos.y;
                onPointerDownYaw = config.yaw;
                onPointerDownPitch = config.pitch;
                container.classList.add('pnlm-grabbing');
                container.classList.remove('pnlm-grab');
                fireEvent('mousedown', event);
                animateInit();
            }

            function mouseEventToCoords(event) {
                var pos = mousePosition(event);
                var canvas = renderer.getCanvas();
                var canvasWidth = canvas.width / (window.devicePixelRatio || 1),
                    canvasHeight = canvas.height / (window.devicePixelRatio || 1);
                var x = pos.x / canvasWidth * 2 - 1;
                var y = (1 - pos.y / canvasHeight * 2) * canvasHeight / canvasWidth;
                var focal = 1 / Math.tan(config.hfov * Math.PI / 360);
                var s = Math.sin(config.pitch * Math.PI / 180);
                var c = Math.cos(config.pitch * Math.PI / 180);
                var a = focal * c - y * s;
                var root = Math.sqrt(x * x + a * a);
                var pitch = Math.atan((y * c + focal * s) / root) * 180 / Math.PI;
                var yaw = Math.atan2(x / root, a / root) * 180 / Math.PI + config.yaw;
                return [pitch, yaw];
            }

            function onDocumentMouseMove(event) {
                if (isUserInteracting && loaded) {
                    latestInteraction = Date.now();
                    var canvas = renderer.getCanvas();
                    var canvasWidth = canvas.width / (window.devicePixelRatio || 1),
                        canvasHeight = canvas.height / (window.devicePixelRatio || 1);
                    var pos = mousePosition(event);
                    var yaw = (Math.atan(onPointerDownPointerX / canvasWidth * 2 - 1) - Math.atan(pos.x / canvasWidth * 2 - 1)) * 180 / Math.PI * config.hfov / 90 + onPointerDownYaw;
                    speed.yaw = (yaw - config.yaw) % 360 * 0.2;
                    config.yaw = yaw;
                    var vfov = 2 * Math.atan(Math.tan(config.hfov / 360 * Math.PI) * canvasHeight / canvasWidth) * 180 / Math.PI;
                    var pitch = (Math.atan(pos.y / canvasHeight * 2 - 1) - Math.atan(onPointerDownPointerY / canvasHeight * 2 - 1)) * 180 / Math.PI * vfov / 90 + onPointerDownPitch;
                    speed.pitch = (pitch - config.pitch) * 0.2;
                    config.pitch = pitch;
                }
            }

            function onDocumentMouseUp(event) {
                if (!isUserInteracting) {
                    return;
                }
                isUserInteracting = false;
                if (Date.now() - latestInteraction > 15) {
                    speed.pitch = speed.yaw = 0;
                }
                container.classList.add('pnlm-grab');
                container.classList.remove('pnlm-grabbing');
                latestInteraction = Date.now();
                fireEvent('mouseup', event);
            }

            function onDocumentTouchStart(event) {
                if (!loaded) {
                    return;
                }
                stopAnimation();
                stopOrientation();
                config.roll = 0;
                speed.hfov = 0;
                var pos0 = mousePosition(event.targetTouches[0]);
                onPointerDownPointerX = pos0.x;
                onPointerDownPointerY = pos0.y;
                if (event.targetTouches.length == 2) {
                    var pos1 = mousePosition(event.targetTouches[1]);
                    onPointerDownPointerX += (pos1.x - pos0.x) * 0.5;
                    onPointerDownPointerY += (pos1.y - pos0.y) * 0.5;
                    onPointerDownPointerDist = Math.sqrt((pos0.x - pos1.x) * (pos0.x - pos1.x) + (pos0.y - pos1.y) * (pos0.y - pos1.y));
                }
                isUserInteracting = true;
                latestInteraction = Date.now();
                onPointerDownYaw = config.yaw;
                onPointerDownPitch = config.pitch;
                animateInit();
            }

            function onDocumentTouchMove(event) {
                event.preventDefault();
                if (loaded) {
                    latestInteraction = Date.now();
                }
                if (isUserInteracting && loaded) {
                    var pos0 = mousePosition(event.targetTouches[0]);
                    var clientX = pos0.x;
                    var clientY = pos0.y;
                    if (event.targetTouches.length == 2 && onPointerDownPointerDist != -1) {
                        var pos1 = mousePosition(event.targetTouches[1]);
                        clientX += (pos1.x - pos0.x) * 0.5;
                        clientY += (pos1.y - pos0.y) * 0.5;
                        var clientDist = Math.sqrt((pos0.x - pos1.x) * (pos0.x - pos1.x) + (pos0.y - pos1.y) * (pos0.y - pos1.y));
                        setHfov(config.hfov + (onPointerDownPointerDist - clientDist) * 0.1);
                        onPointerDownPointerDist = clientDist;
                    }
                    var touchmovePanSpeedCoeff = config.hfov / 360;
                    var yaw = (onPointerDownPointerX - clientX) * touchmovePanSpeedCoeff + onPointerDownYaw;
                    speed.yaw = (yaw - config.yaw) % 360 * 0.2;
                    config.yaw = yaw;
                    var pitch = (clientY - onPointerDownPointerY) * touchmovePanSpeedCoeff + onPointerDownPitch;
                    speed.pitch = (pitch - config.pitch) * 0.2;
                    config.pitch = pitch;
                }
            }

            function onDocumentTouchEnd() {
                isUserInteracting = false;
                if (Date.now() - latestInteraction > 150) {
                    speed.pitch = speed.yaw = 0;
                }
                onPointerDownPointerDist = -1;
                latestInteraction = Date.now();
            }
            var pointerIDs = [],
                pointerCoordinates = [];

            function onDocumentPointerDown(event) {
                if (event.pointerType == 'touch') {
                    pointerIDs.push(event.pointerId);
                    pointerCoordinates.push({
                        clientX: event.clientX,
                        clientY: event.clientY
                    });
                    event.targetTouches = pointerCoordinates;
                    onDocumentTouchStart(event);
                    event.preventDefault();
                }
            }

            function onDocumentPointerMove(event) {
                if (event.pointerType == 'touch') {
                    for (var i = 0; i < pointerIDs.length; i++) {
                        if (event.pointerId == pointerIDs[i]) {
                            pointerCoordinates[i] = {
                                clientX: event.clientX,
                                clientY: event.clientY
                            };
                            event.targetTouches = pointerCoordinates;
                            onDocumentTouchMove(event);
                            return;
                        }
                    }
                }
            }

            function onDocumentPointerUp(event) {
                if (event.pointerType == 'touch') {
                    var defined = false;
                    for (var i = 0; i < pointerIDs.length; i++) {
                        if (event.pointerId == pointerIDs[i]) pointerIDs[i] = undefined;
                        if (pointerIDs[i]) defined = true;
                    }
                    if (!defined) {
                        pointerIDs = [];
                        pointerCoordinates = [];
                        onDocumentTouchEnd();
                    }
                    event.preventDefault();
                }
            }

            function onDocumentMouseWheel(event) {
                event.preventDefault();
                if (!loaded) {
                    return;
                }
                stopAnimation();
                latestInteraction = Date.now();
                if (event.wheelDeltaY) {
                    setHfov(config.hfov - event.wheelDeltaY * 0.05);
                    speed.hfov = event.wheelDelta < 0 ? 1 : -1;
                } else if (event.wheelDelta) {
                    setHfov(config.hfov - event.wheelDelta * 0.05);
                    speed.hfov = event.wheelDelta < 0 ? 1 : -1;
                } else if (event.detail) {
                    setHfov(config.hfov + event.detail * 1.5);
                    speed.hfov = event.detail > 0 ? 1 : -1;
                }
                animateInit();
            }

            function onDocumentKeyPress(event) {
                event.preventDefault();
                stopAnimation();
                latestInteraction = Date.now();
                stopOrientation();
                config.roll = 0;
                var keynumber = event.keycode;
                if (event.which) {
                    keynumber = event.which;
                }
                if (keynumber == 27) {
                    if (fullscreenActive) {
                        toggleFullscreen();
                    }
                } else {
                    changeKey(keynumber, true);
                }
            }

            function clearKeys() {
                for (var i = 0; i < 10; i++) {
                    keysDown[i] = false;
                }
            }

            function onDocumentKeyUp(event) {
                event.preventDefault();
                var keynumber = event.keycode;
                if (event.which) {
                    keynumber = event.which;
                }
                changeKey(keynumber, false);
            }

            function changeKey(keynumber, value) {
                var keyChanged = false;
                switch (keynumber) {
                    case 109:
                    case 189:
                    case 17:
                        if (keysDown[0] != value) {
                            keyChanged = true;
                        }
                        keysDown[0] = value;
                        break;
                    case 107:
                    case 187:
                    case 16:
                        if (keysDown[1] != value) {
                            keyChanged = true;
                        }
                        keysDown[1] = value;
                        break;
                    case 38:
                        if (keysDown[2] != value) {
                            keyChanged = true;
                        }
                        keysDown[2] = value;
                        break;
                    case 87:
                        if (keysDown[6] != value) {
                            keyChanged = true;
                        }
                        keysDown[6] = value;
                        break;
                    case 40:
                        if (keysDown[3] != value) {
                            keyChanged = true;
                        }
                        keysDown[3] = value;
                        break;
                    case 83:
                        if (keysDown[7] != value) {
                            keyChanged = true;
                        }
                        keysDown[7] = value;
                        break;
                    case 37:
                        if (keysDown[4] != value) {
                            keyChanged = true;
                        }
                        keysDown[4] = value;
                        break;
                    case 65:
                        if (keysDown[8] != value) {
                            keyChanged = true;
                        }
                        keysDown[8] = value;
                        break;
                    case 39:
                        if (keysDown[5] != value) {
                            keyChanged = true;
                        }
                        keysDown[5] = value;
                        break;
                    case 68:
                        if (keysDown[9] != value) {
                            keyChanged = true;
                        }
                        keysDown[9] = value;
                }
                if (keyChanged && value) {
                    if (typeof performance !== 'undefined' && performance.now()) {
                        prevTime = performance.now();
                    } else {
                        prevTime = Date.now();
                    }
                    animateInit();
                }
            }

            function keyRepeat() {
                if (!loaded) {
                    return;
                }
                var isKeyDown = false;
                var prevPitch = config.pitch;
                var prevYaw = config.yaw;
                var prevZoom = config.hfov;
                var newTime;
                if (typeof performance !== 'undefined' && performance.now()) {
                    newTime = performance.now();
                } else {
                    newTime = Date.now();
                }
                if (prevTime === undefined) {
                    prevTime = newTime;
                }
                var diff = (newTime - prevTime) * config.hfov / 1700;
                diff = Math.min(diff, 1.0);
                if (keysDown[0] && config.keyboardZoom === true) {
                    setHfov(config.hfov + (speed.hfov * 0.8 + 0.5) * diff);
                    isKeyDown = true;
                }
                if (keysDown[1] && config.keyboardZoom === true) {
                    setHfov(config.hfov + (speed.hfov * 0.8 - 0.2) * diff);
                    isKeyDown = true;
                }
                if (keysDown[2] || keysDown[6]) {
                    config.pitch += (speed.pitch * 0.8 + 0.2) * diff;
                    isKeyDown = true;
                }
                if (keysDown[3] || keysDown[7]) {
                    config.pitch += (speed.pitch * 0.8 - 0.2) * diff;
                    isKeyDown = true;
                }
                if (keysDown[4] || keysDown[8]) {
                    config.yaw += (speed.yaw * 0.8 - 0.2) * diff;
                    isKeyDown = true;
                }
                if (keysDown[5] || keysDown[9]) {
                    config.yaw += (speed.yaw * 0.8 + 0.2) * diff;
                    isKeyDown = true;
                }
                if (isKeyDown) latestInteraction = Date.now();
                var inactivityInterval = Date.now() - latestInteraction;
                if (config.autoRotate) {
                    if (newTime - prevTime > 0.001) {
                        var timeDiff = (newTime - prevTime) / 1000;
                        var yawDiff = (speed.yaw / timeDiff * diff - config.autoRotate * 0.2) * timeDiff;
                        yawDiff = (-config.autoRotate > 0 ? 1 : -1) * Math.min(Math.abs(config.autoRotate * timeDiff), Math.abs(yawDiff));
                        config.yaw += yawDiff;
                    }
                    if (config.autoRotateStopDelay) {
                        config.autoRotateStopDelay -= newTime - prevTime;
                        if (config.autoRotateStopDelay <= 0) {
                            config.autoRotateStopDelay = false;
                            autoRotateSpeed = config.autoRotate;
                            config.autoRotate = 0;
                        }
                    }
                }
                if (animatedMove.pitch) {
                    animateMove('pitch');
                    prevPitch = config.pitch;
                }
                if (animatedMove.yaw) {
                    animateMove('yaw');
                    prevYaw = config.yaw;
                }
                if (animatedMove.hfov) {
                    animateMove('hfov');
                    prevZoom = config.hfov;
                }
                if (diff > 0 && !config.autoRotate) {
                    var friction = 0.85;
                    if (!keysDown[4] && !keysDown[5] && !keysDown[8] && !keysDown[9] && !animatedMove.yaw) {
                        config.yaw += speed.yaw * diff * friction;
                    }
                    if (!keysDown[2] && !keysDown[3] && !keysDown[6] && !keysDown[7] && !animatedMove.pitch) {
                        config.pitch += speed.pitch * diff * friction;
                    }
                    if (!keysDown[0] && !keysDown[1] && !animatedMove.hfov) {
                        setHfov(config.hfov + speed.hfov * diff * friction);
                    }
                }
                prevTime = newTime;
                if (diff > 0) {
                    speed.yaw = speed.yaw * 0.8 + (config.yaw - prevYaw) / diff * 0.2;
                    speed.pitch = speed.pitch * 0.8 + (config.pitch - prevPitch) / diff * 0.2;
                    speed.hfov = speed.hfov * 0.8 + (config.hfov - prevZoom) / diff * 0.2;
                    var maxSpeed = config.autoRotate ? Math.abs(config.autoRotate) : 5;
                    speed.yaw = Math.min(maxSpeed, Math.max(speed.yaw, -maxSpeed));
                    speed.pitch = Math.min(maxSpeed, Math.max(speed.pitch, -maxSpeed));
                    speed.hfov = Math.min(maxSpeed, Math.max(speed.hfov, -maxSpeed));
                }
                if (keysDown[0] && keysDown[0]) {
                    speed.hfov = 0;
                }
                if ((keysDown[2] || keysDown[6]) && (keysDown[3] || keysDown[7])) {
                    speed.pitch = 0;
                }
                if ((keysDown[4] || keysDown[8]) && (keysDown[5] || keysDown[9])) {
                    speed.yaw = 0;
                }
            }

            function animateMove(axis) {
                var t = animatedMove[axis];
                var normTime = Math.min(1, Math.max((Date.now() - t.startTime) / 1000 / (t.duration / 1000), 0));
                var result = t.startPosition + timingFunction(normTime) * (t.endPosition - t.startPosition);
                if (t.endPosition > t.startPosition && result >= t.endPosition || t.endPosition < t.startPosition && result <= t.endPosition) {
                    result = t.endPosition;
                    speed[axis] = 0;
                    delete animatedMove[axis];
                }
                config[axis] = result;
            }

            function timingFunction(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }

            function onDocumentResize() {
                onFullScreenChange();
            }

            function animateInit() {
                if (animating) {
                    return;
                }
                animating = true;
                animate();
            }

            function animate() {
                render();
                if (autoRotateStart) clearTimeout(autoRotateStart);
                if (isUserInteracting || orientation) {
                    requestAnimationFrame(animate);
                } else if (keysDown[0] || keysDown[1] || keysDown[2] || keysDown[3] || keysDown[4] || keysDown[5] || keysDown[6] || keysDown[7] || keysDown[8] || keysDown[9] || config.autoRotate || animatedMove.pitch || animatedMove.yaw || animatedMove.hfov || Math.abs(speed.yaw) > 0.01 || Math.abs(speed.pitch) > 0.01 || Math.abs(speed.hfov) > 0.01) {
                    keyRepeat();
                    if (config.autoRotateInactivityDelay >= 0 && autoRotateSpeed && Date.now() - latestInteraction > config.autoRotateInactivityDelay && !config.autoRotate) {
                        config.autoRotate = autoRotateSpeed;
                        _this.lookAt(origPitch, undefined, origHfov, 3000);
                    }
                    requestAnimationFrame(animate);
                } else if (renderer && (renderer.isLoading() || config.dynamic === true && update)) {
                    requestAnimationFrame(animate);
                } else {
                    animating = false;
                    prevTime = undefined;
                    var autoRotateStartTime = config.autoRotateInactivityDelay - (Date.now() - latestInteraction);
                    if (autoRotateStartTime > 0) {
                        autoRotateStart = setTimeout(function() {
                            config.autoRotate = autoRotateSpeed;
                            _this.lookAt(origPitch, undefined, origHfov, 3000);
                            animateInit();
                        }, autoRotateStartTime);
                    } else if (config.autoRotateInactivityDelay >= 0 && autoRotateSpeed) {
                        config.autoRotate = autoRotateSpeed;
                        _this.lookAt(origPitch, undefined, origHfov, 3000);
                        animateInit();
                    }
                }
            }

            function render() {
                var tmpyaw;
                if (loaded) {
                    if (config.yaw > 180) {
                        config.yaw -= 360;
                    } else if (config.yaw < -180) {
                        config.yaw += 360;
                    }
                    tmpyaw = config.yaw;
                    var yawRange = config.maxYaw - config.minYaw,
                        minYaw = -180,
                        maxYaw = 180;
                    if (yawRange < 360) {
                        minYaw = config.minYaw + config.hfov / 2;
                        maxYaw = config.maxYaw - config.hfov / 2;
                        if (yawRange < config.hfov) {
                            minYaw = maxYaw = (minYaw + maxYaw) / 2;
                        }
                    }
                    config.yaw = Math.max(minYaw, Math.min(maxYaw, config.yaw));
                    if (config.autoRotate !== false && tmpyaw != config.yaw) {
                        config.autoRotate *= -1;
                    }
                    var canvas = renderer.getCanvas();
                    var vfov = 2 * Math.atan(Math.tan(config.hfov / 180 * Math.PI * 0.5) / (canvas.width / canvas.height)) / Math.PI * 180;
                    var minPitch = config.minPitch + vfov / 2,
                        maxPitch = config.maxPitch - vfov / 2;
                    var pitchRange = config.maxPitch - config.minPitch;
                    if (pitchRange < vfov) {
                        minPitch = maxPitch = (minPitch + maxPitch) / 2;
                    }
                    if (isNaN(minPitch)) minPitch = -90;
                    if (isNaN(maxPitch)) maxPitch = 90;
                    config.pitch = Math.max(minPitch, Math.min(maxPitch, config.pitch));
                    renderer.render(config.pitch * Math.PI / 180, config.yaw * Math.PI / 180, config.hfov * Math.PI / 180, {
                        roll: config.roll * Math.PI / 180
                    });
                    renderHotSpots();
                    if (config.compass) {
                        compass.style.transform = 'rotate(' + (-config.yaw - config.northOffset) + 'deg)';
                        compass.style.webkitTransform = 'rotate(' + (-config.yaw - config.northOffset) + 'deg)';
                    }
                }
            }

            function Quaternion(w, x, y, z) {
                this.w = w;
                this.x = x;
                this.y = y;
                this.z = z;
            }
            Quaternion.prototype.multiply = function(q) {
                return new Quaternion(this.w * q.w - this.x * q.x - this.y * q.y - this.z * q.z, this.x * q.w + this.w * q.x + this.y * q.z - this.z * q.y, this.y * q.w + this.w * q.y + this.z * q.x - this.x * q.z, this.z * q.w + this.w * q.z + this.x * q.y - this.y * q.x);
            };
            Quaternion.prototype.toEulerAngles = function() {
                var phi = Math.atan2(2 * (this.w * this.x + this.y * this.z), 1 - 2 * (this.x * this.x + this.y * this.y)),
                    theta = Math.asin(2 * (this.w * this.y - this.z * this.x)),
                    psi = Math.atan2(2 * (this.w * this.z + this.x * this.y), 1 - 2 * (this.y * this.y + this.z * this.z));
                return [phi, theta, psi];
            };

            function taitBryanToQuaternion(alpha, beta, gamma) {
                var r = [beta ? beta * Math.PI / 180 / 2 : 0, gamma ? gamma * Math.PI / 180 / 2 : 0, alpha ? alpha * Math.PI / 180 / 2 : 0];
                var c = [Math.cos(r[0]), Math.cos(r[1]), Math.cos(r[2])],
                    s = [Math.sin(r[0]), Math.sin(r[1]), Math.sin(r[2])];
                return new Quaternion(c[0] * c[1] * c[2] - s[0] * s[1] * s[2], s[0] * c[1] * c[2] - c[0] * s[1] * s[2], c[0] * s[1] * c[2] + s[0] * c[1] * s[2], c[0] * c[1] * s[2] + s[0] * s[1] * c[2]);
            }

            function computeQuaternion(alpha, beta, gamma) {
                var quaternion = taitBryanToQuaternion(alpha, beta, gamma);
                quaternion = quaternion.multiply(new Quaternion(Math.sqrt(0.5), -Math.sqrt(0.5), 0, 0));
                var angle = window.orientation ? -window.orientation * Math.PI / 180 / 2 : 0;
                return quaternion.multiply(new Quaternion(Math.cos(angle), 0, -Math.sin(angle), 0));
            }

            function orientationListener(e) {
                var q = computeQuaternion(e.alpha, e.beta, e.gamma).toEulerAngles();
                config.pitch = q[0] / Math.PI * 180;
                config.roll = -q[1] / Math.PI * 180;
                config.yaw = -q[2] / Math.PI * 180 + config.northOffset;
            }

            function renderInit() {
                try {
                    var params = {};
                    if (config.horizonPitch !== undefined) params.horizonPitch = config.horizonPitch * Math.PI / 180;
                    if (config.horizonRoll !== undefined) params.horizonRoll = config.horizonRoll * Math.PI / 180;
                    if (config.backgroundColor !== undefined) params.backgroundColor = config.backgroundColor;
                    renderer.init(panoImage, config.type, config.dynamic, config.haov * Math.PI / 180, config.vaov * Math.PI / 180, config.vOffset * Math.PI / 180, renderInitCallback, params);
                    if (config.dynamic !== true) {
                        panoImage = undefined;
                    }
                } catch (event) {
                    if (event.type == 'webgl error' || event.type == 'no webgl') {
                        anError();
                    } else if (event.type == 'webgl size error') {
                        anError('This panorama is too big for your device! It\'s ' + event.width + 'px wide, but your device only supports images up to ' + event.maxWidth + 'px wide. Try another device.' + ' (If you\'re the author, try scaling down the image.)');
                    } else {
                        anError('Unknown error. Check developer console.');
                        throw event;
                    }
                }
            }

            function renderInitCallback() {
                if (config.sceneFadeDuration && renderer.fadeImg !== undefined) {
                    renderer.fadeImg.style.opacity = 0;
                    var fadeImg = renderer.fadeImg;
                    delete renderer.fadeImg;
                    setTimeout(function() {
                        renderContainer.removeChild(fadeImg);
                    }, config.sceneFadeDuration);
                }
                if (config.compass) {
                    compass.style.display = 'inline';
                } else {
                    compass.style.display = 'none';
                }
                createHotSpots();
                infoDisplay.load.box.style.display = 'none';
                if (preview !== undefined) {
                    renderContainer.removeChild(preview);
                    preview = undefined;
                }
                loaded = true;
                fireEvent('load');
                animateInit();
            }

            function createHotSpot(hs) {
                hs.pitch = Number(hs.pitch) || 0;
                hs.yaw = Number(hs.yaw) || 0;
                var div = document.createElement('div');
                div.className = 'pnlm-hotspot-base';
                if (hs.cssClass) div.className += ' ' + hs.cssClass;
                else div.className += ' pnlm-hotspot pnlm-sprite pnlm-' + escapeHTML(hs.type);
                var span = document.createElement('span');
                if (hs.text) span.innerHTML = escapeHTML(hs.text);
                var a;
                if (hs.video) {
                    var video = document.createElement('video'),
                        p = hs.video;
                    if (config.basePath && !absoluteURL(p)) p = config.basePath + p;
                    video.src = encodeURI(p);
                    video.controls = true;
                    video.style.width = hs.width + 'px';
                    renderContainer.appendChild(div);
                    span.appendChild(video);
                } else if (hs.image) {
                    var p = hs.image;
                    if (config.basePath && !absoluteURL(p)) p = config.basePath + p;
                    a = document.createElement('a');
                    a.href = encodeURI(hs.URL ? hs.URL : p);
                    a.target = '_blank';
                    span.appendChild(a);
                    var image = document.createElement('img');
                    image.src = encodeURI(p);
                    image.style.width = hs.width + 'px';
                    image.style.paddingTop = '5px';
                    renderContainer.appendChild(div);
                    a.appendChild(image);
                    span.style.maxWidth = 'initial';
                } else if (hs.URL) {
                    a = document.createElement('a');
                    a.href = encodeURI(hs.URL);
                    a.target = '_blank';
                    renderContainer.appendChild(a);
                    div.style.cursor = 'pointer';
                    span.style.cursor = 'pointer';
                    a.appendChild(div);
                } else {
                    if (hs.sceneId) {
                        div.onclick = function() {
                            loadScene(hs.sceneId, hs.targetPitch, hs.targetYaw, hs.targetHfov);
                            return false;
                        };
                        div.ontouchend = function() {
                            loadScene(hs.sceneId, hs.targetPitch, hs.targetYaw, hs.targetHfov);
                            return false;
                        };
                        div.style.cursor = 'pointer';
                        span.style.cursor = 'pointer';
                    }
                    renderContainer.appendChild(div);
                }
                if (hs.createTooltipFunc) {
                    hs.createTooltipFunc(div, hs.createTooltipArgs);
                } else if (hs.text || hs.video || hs.image) {
                    div.classList.add('pnlm-tooltip');
                    div.appendChild(span);
                    span.style.width = span.scrollWidth - 20 + 'px';
                    span.style.marginLeft = -(span.scrollWidth - div.offsetWidth) / 2 + 'px';
                    span.style.marginTop = -span.scrollHeight - 12 + 'px';
                }
                if (hs.clickHandlerFunc) {
                    div.addEventListener('click', function(e) {
                        hs.clickHandlerFunc(e, hs.clickHandlerArgs);
                    }, 'false');
                    div.style.cursor = 'pointer';
                    span.style.cursor = 'pointer';
                }
                hs.div = div;
            };

            function createHotSpots() {
                if (hotspotsCreated) return;
                if (!config.hotSpots) {
                    config.hotSpots = [];
                } else {
                    config.hotSpots = config.hotSpots.sort(function(a, b) {
                        return a.pitch < b.pitch;
                    });
                    config.hotSpots.forEach(createHotSpot);
                }
                hotspotsCreated = true;
                renderHotSpots();
            }

            function destroyHotSpots() {
                if (config.hotSpots) {
                    for (var i = 0; i < config.hotSpots.length; i++) {
                        var current = config.hotSpots[i].div;
                        while (current.parentNode != renderContainer) {
                            current = current.parentNode;
                        }
                        renderContainer.removeChild(current);
                        delete config.hotSpots[i].div;
                    }
                }
                hotspotsCreated = false;
                delete config.hotSpots;
            }

            function renderHotSpot(hs) {
                var hsPitchSin = Math.sin(hs.pitch * Math.PI / 180),
                    hsPitchCos = Math.cos(hs.pitch * Math.PI / 180),
                    configPitchSin = Math.sin(config.pitch * Math.PI / 180),
                    configPitchCos = Math.cos(config.pitch * Math.PI / 180),
                    yawCos = Math.cos((-hs.yaw + config.yaw) * Math.PI / 180);
                var z = hsPitchSin * configPitchSin + hsPitchCos * yawCos * configPitchCos;
                if (hs.yaw <= 90 && hs.yaw > -90 && z <= 0 || (hs.yaw > 90 || hs.yaw <= -90) && z <= 0) {
                    hs.div.style.visibility = 'hidden';
                } else {
                    var yawSin = Math.sin((-hs.yaw + config.yaw) * Math.PI / 180),
                        hfovTan = Math.tan(config.hfov * Math.PI / 360);
                    hs.div.style.visibility = 'visible';
                    var canvas = renderer.getCanvas(),
                        canvasWidth = canvas.width / (window.devicePixelRatio || 1),
                        canvasHeight = canvas.height / (window.devicePixelRatio || 1);
                    var coord = [-canvasWidth / hfovTan * yawSin * hsPitchCos / z / 2, -canvasWidth / hfovTan * (hsPitchSin * configPitchCos - hsPitchCos * yawCos * configPitchSin) / z / 2];
                    var rollSin = Math.sin(config.roll * Math.PI / 180),
                        rollCos = Math.cos(config.roll * Math.PI / 180);
                    coord = [coord[0] * rollCos - coord[1] * rollSin, coord[0] * rollSin + coord[1] * rollCos];
                    coord[0] += (canvasWidth - hs.div.offsetWidth) / 2;
                    coord[1] += (canvasHeight - hs.div.offsetHeight) / 2;
                    var transform = 'translate(' + coord[0] + 'px, ' + coord[1] + 'px) translateZ(9999px) rotate(' + config.roll + 'deg)';
                    hs.div.style.webkitTransform = transform;
                    hs.div.style.MozTransform = transform;
                    hs.div.style.transform = transform;
                }
            }

            function renderHotSpots() {
                config.hotSpots.forEach(renderHotSpot);
            }

            function mergeConfig(sceneId) {
                config = {};
                var k;
                var photoSphereExcludes = ['haov', 'vaov', 'vOffset', 'northOffset', 'horizonPitch', 'horizonRoll'];
                specifiedPhotoSphereExcludes = [];
                for (k in defaultConfig) {
                    if (defaultConfig.hasOwnProperty(k)) {
                        config[k] = defaultConfig[k];
                    }
                }
                for (k in initialConfig.default) {
                    if (initialConfig.default.hasOwnProperty(k)) {
                        config[k] = initialConfig.default[k];
                        if (photoSphereExcludes.indexOf(k) >= 0) {
                            specifiedPhotoSphereExcludes.push(k);
                        }
                    }
                }
                if (sceneId !== null && sceneId !== '' && initialConfig.scenes && initialConfig.scenes[sceneId]) {
                    var scene = initialConfig.scenes[sceneId];
                    for (k in scene) {
                        if (scene.hasOwnProperty(k)) {
                            config[k] = scene[k];
                            if (photoSphereExcludes.indexOf(k) >= 0) {
                                specifiedPhotoSphereExcludes.push(k);
                            }
                        }
                    }
                    config.scene = sceneId;
                }
                for (k in initialConfig) {
                    if (initialConfig.hasOwnProperty(k)) {
                        config[k] = initialConfig[k];
                        if (photoSphereExcludes.indexOf(k) >= 0) {
                            specifiedPhotoSphereExcludes.push(k);
                        }
                    }
                }
            }

            function processOptions() {
                if ('preview' in config) {
                    var p = config.preview;
                    if (config.basePath) {
                        p = config.basePath + p;
                    }
                    preview = document.createElement('div');
                    preview.className = 'pnlm-preview-img';
                    preview.style.backgroundImage = "url('" + encodeURI(p) + "')";
                    renderContainer.appendChild(preview);
                }
                if (!config.hasOwnProperty('title')) infoDisplay.title.innerHTML = '';
                if (!config.hasOwnProperty('author')) infoDisplay.author.innerHTML = '';
                if (!config.hasOwnProperty('title') && !config.hasOwnProperty('author')) infoDisplay.container.style.display = 'none';
                for (var key in config) {
                    if (config.hasOwnProperty(key)) {
                        switch (key) {
                            case 'title':
                                infoDisplay.title.innerHTML = escapeHTML(config[key]);
                                infoDisplay.container.style.display = 'inline';
                                break;
                            case 'author':
                                infoDisplay.author.innerHTML = 'by ' + escapeHTML(config[key]);
                                infoDisplay.container.style.display = 'inline';
                                break;
                            case 'fallback':
                                infoDisplay.errorMsg.innerHTML = '<p>Your browser does not support WebGL.<br><a href="' + encodeURI(config[key]) + '" target="_blank">Click here to view this panorama in an alternative viewer.</a></p>';
                                break;
                            case 'hfov':
                                setHfov(Number(config[key]));
                                break;
                            case 'autoLoad':
                                if (config[key] === true && renderer === undefined) {
                                    infoDisplay.load.box.style.display = 'inline';
                                    controls.load.style.display = 'none';
                                    init();
                                }
                                break;
                            case 'showZoomCtrl':
                                if (config[key] && config.showControls != false) {
                                    controls.zoom.style.display = 'block';
                                } else {
                                    controls.zoom.style.display = 'none';
                                }
                                break;
                            case 'showFullscreenCtrl':
                                if (config[key] && config.showControls != false && ('fullscreen' in document || 'mozFullScreen' in document || 'webkitIsFullScreen' in document || 'msFullscreenElement' in document)) {
                                    controls.fullscreen.style.display = 'block';
                                } else {
                                    controls.fullscreen.style.display = 'none';
                                }
                                break;
                            case 'hotSpotDebug':
                                if (config[key]) hotSpotDebugIndicator.style.display = 'block';
                                else hotSpotDebugIndicator.style.display = 'none';
                                break;
                            case 'showControls':
                                if (!config[key]) {
                                    controls.orientation.style.display = 'none';
                                    controls.zoom.style.display = 'none';
                                    controls.fullscreen.style.display = 'none';
                                }
                                break;
                            case 'orientationOnByDefault':
                                if (config[key]) startOrientation();
                                break;
                        }
                    }
                }
            }

            function toggleFullscreen() {
                if (loaded && !error) {
                    if (!fullscreenActive) {
                        try {
                            if (container.requestFullscreen) {
                                container.requestFullscreen();
                            } else if (container.mozRequestFullScreen) {
                                container.mozRequestFullScreen();
                            } else if (container.msRequestFullscreen) {
                                container.msRequestFullscreen();
                            } else {
                                container.webkitRequestFullScreen();
                            }
                        } catch (event) {}
                    } else {
                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.mozCancelFullScreen) {
                            document.mozCancelFullScreen();
                        } else if (document.webkitCancelFullScreen) {
                            document.webkitCancelFullScreen();
                        } else if (document.msExitFullscreen) {
                            document.msExitFullscreen();
                        }
                    }
                }
            }

            function onFullScreenChange() {
                if (document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement) {
                    controls.fullscreen.classList.add('pnlm-fullscreen-toggle-button-active');
                    fullscreenActive = true;
                } else {
                    controls.fullscreen.classList.remove('pnlm-fullscreen-toggle-button-active');
                    fullscreenActive = false;
                }
                renderer.resize();
                setHfov(config.hfov);
                animateInit();
            }

            function zoomIn() {
                if (loaded) {
                    setHfov(config.hfov - 5);
                    animateInit();
                }
            }

            function zoomOut() {
                if (loaded) {
                    setHfov(config.hfov + 5);
                    animateInit();
                }
            }

            function constrainHfov(hfov) {
                var minHfov = config.minHfov;
                if (config.type == 'multires' && renderer) {
                    minHfov = Math.min(minHfov, renderer.getCanvas().width / (config.multiRes.cubeResolution / 90 * 0.9));
                }
                if (minHfov > config.maxHfov) {
                    console.log('HFOV bounds do not make sense (minHfov > maxHfov).');
                    return config.hfov;
                }
                if (hfov < minHfov) {
                    return minHfov;
                } else if (hfov > config.maxHfov) {
                    return config.maxHfov;
                } else {
                    return hfov;
                }
            }

            function setHfov(hfov) {
                config.hfov = constrainHfov(hfov);
            }

            function stopAnimation() {
                animatedMove = {};
                autoRotateSpeed = config.autoRotate ? config.autoRotate : autoRotateSpeed;
                config.autoRotate = false;
            }

            function load() {
                clearError();
                controls.load.style.display = 'none';
                infoDisplay.load.box.style.display = 'inline';
                init();
            }

            function loadScene(sceneId, targetPitch, targetYaw, targetHfov, fadeDone) {
                loaded = false;
                animatedMove = {};
                var fadeImg, workingPitch, workingYaw, workingHfov;
                if (config.sceneFadeDuration && !fadeDone) {
                    fadeImg = new Image();
                    fadeImg.className = 'pnlm-fade-img';
                    fadeImg.style.transition = 'opacity ' + config.sceneFadeDuration / 1000 + 's';
                    fadeImg.style.width = '100%';
                    fadeImg.style.height = '100%';
                    fadeImg.onload = function() {
                        loadScene(sceneId, targetPitch, targetYaw, targetHfov, true);
                    };
                    var data = renderer.render(config.pitch * Math.PI / 180, config.yaw * Math.PI / 180, config.hfov * Math.PI / 180, {
                        returnImage: true
                    });
                    if (data !== undefined) {
                        fadeImg.src = data;
                    }
                    renderContainer.appendChild(fadeImg);
                    renderer.fadeImg = fadeImg;
                    return;
                }
                if (targetPitch === 'same') {
                    workingPitch = config.pitch;
                } else {
                    workingPitch = targetPitch;
                }
                if (targetYaw === 'same') {
                    workingYaw = config.yaw;
                } else if (targetYaw === 'sameAzimuth') {
                    workingYaw = config.yaw + config.northOffset - initialConfig.scenes[sceneId].northOffset;
                } else {
                    workingYaw = targetYaw;
                }
                if (targetHfov === 'same') {
                    workingHfov = config.hfov;
                } else {
                    workingHfov = targetHfov;
                }
                destroyHotSpots();
                mergeConfig(sceneId);
                speed.yaw = speed.pitch = speed.hfov = 0;
                processOptions();
                if (workingPitch !== undefined) {
                    config.pitch = workingPitch;
                }
                if (workingYaw !== undefined) {
                    config.yaw = workingYaw;
                }
                if (workingHfov !== undefined) {
                    config.hfov = workingHfov;
                }
                fireEvent('scenechange', sceneId);
                load();
            }

            function stopOrientation() {
                window.removeEventListener('deviceorientation', orientationListener);
                controls.orientation.classList.remove('pnlm-orientation-button-active');
                orientation = false;
            }

            function startOrientation() {
                orientation = true;
                window.addEventListener('deviceorientation', orientationListener);
                controls.orientation.classList.add('pnlm-orientation-button-active');
                requestAnimationFrame(animate);
            }

            function escapeHTML(s) {
                return String(s).replace(/&/g, '&amp;').replace('"', '&quot;').replace("'", '&#39;').replace('<', '&lt;').replace('>', '&gt;').replace('/', '&#x2f;');
            }
            this.getPitch = function() {
                return config.pitch;
            };
            this.setPitch = function(pitch, animated) {
                animated = animated == undefined ? 1000 : Number(animated);
                if (animated) {
                    animatedMove.pitch = {
                        'startTime': Date.now(),
                        'startPosition': config.pitch,
                        'endPosition': pitch,
                        'duration': animated
                    };
                } else {
                    config.pitch = pitch;
                }
                animateInit();
                return this;
            };
            this.getPitchBounds = function() {
                return [config.minPitch, config.maxPitch];
            };
            this.setPitchBounds = function(bounds) {
                config.minPitch = Math.max(-90, Math.min(bounds[0], 90));
                config.maxPitch = Math.max(-90, Math.min(bounds[1], 90));
                return this;
            };
            this.getYaw = function() {
                return config.yaw;
            };
            this.setYaw = function(yaw, animated) {
                while (yaw > 180) {
                    yaw -= 360;
                }
                while (yaw < -180) {
                    yaw += 360;
                }
                animated = animated == undefined ? 1000 : Number(animated);
                if (animated) {
                    animatedMove.yaw = {
                        'startTime': Date.now(),
                        'startPosition': config.yaw,
                        'endPosition': yaw,
                        'duration': animated
                    };
                } else {
                    config.yaw = yaw;
                }
                animateInit();
                return this;
            };
            this.getYawBounds = function() {
                return [config.minYaw, config.maxYaw];
            };
            this.setYawBounds = function(bounds) {
                config.minYaw = Math.max(-180, Math.min(bounds[0], 180));
                config.maxYaw = Math.max(-180, Math.min(bounds[1], 180));
                return this;
            };
            this.getHfov = function() {
                return config.hfov;
            };
            this.setHfov = function(hfov, animated) {
                animated = animated == undefined ? 1000 : Number(animated);
                if (animated) {
                    animatedMove.hfov = {
                        'startTime': Date.now(),
                        'startPosition': config.hfov,
                        'endPosition': constrainHfov(hfov),
                        'duration': animated
                    };
                } else {
                    setHfov(hfov);
                }
                animateInit();
                return this;
            };
            this.getHfovBounds = function() {
                return [config.minHfov, config.maxHfov];
            };
            this.setHfovBounds = function(bounds) {
                config.minHfov = Math.max(0, bounds[0]);
                config.maxHfov = Math.max(0, bounds[1]);
                return this;
            };
            this.lookAt = function(pitch, yaw, hfov, animated) {
                animated = animated == undefined ? 1000 : Number(animated);
                if (pitch !== undefined) this.setPitch(pitch, animated);
                if (yaw !== undefined) this.setYaw(yaw, animated);
                if (hfov !== undefined) this.setHfov(hfov, animated);
                return this;
            };
            this.getNorthOffset = function() {
                return config.northOffset;
            };
            this.setNorthOffset = function(heading) {
                config.northOffset = Math.min(360, Math.max(0, heading));
                animateInit();
                return this;
            };
            this.startAutoRotate = function(speed) {
                speed = speed || autoRotateSpeed || 1;
                config.autoRotate = speed;
                _this.lookAt(origPitch, undefined, origHfov, 3000);
                animateInit();
                return this;
            };
            this.stopAutoRotate = function() {
                autoRotateSpeed = config.autoRotate ? config.autoRotate : autoRotateSpeed;
                config.autoRotate = false;
                config.autoRotateInactivityDelay = -1;
                return this;
            };
            this.getRenderer = function() {
                return renderer;
            };
            this.setUpdate = function(bool) {
                update = bool === true;
                if (renderer === undefined) onImageLoad();
                else animateInit();
                return this;
            };
            this.mouseEventToCoords = function(event) {
                return mouseEventToCoords(event);
            };
            this.loadScene = function(sceneId, pitch, yaw, hfov) {
                if (loaded) loadScene(sceneId, pitch, yaw, hfov);
                return this;
            };
            this.getScene = function() {
                return config.scene;
            };
            this.addScene = function(sceneId, config) {
                initialConfig.scenes[sceneId] = config;
                return this;
            };
            this.removeScene = function(sceneId) {
                if (config.scene === sceneId || !initialConfig.scenes.hasOwnProperty(sceneId)) return false;
                delete initialConfig.scenes[sceneId];
                return true;
            };
            this.toggleFullscreen = function() {
                toggleFullscreen();
                return this;
            };
            this.getConfig = function() {
                return config;
            };
            this.addHotSpot = function(hs, sceneId) {
                if (sceneId === undefined || config.scene == sceneId) {
                    createHotSpot(hs);
                    config.hotSpots.push(hs);
                    renderHotSpot(hs);
                } else {
                    if (initialConfig.scenes.hasOwnProperty(sceneId)) initialConfig.scenes[sceneId].hotSpots.push(hs);
                    else throw 'Invalid scene ID!';
                }
                return this;
            };
            this.removeHotSpot = function(hotSpotId) {
                if (!config.hotSpots) return false;
                for (var i = 0; i < config.hotSpots.length; i++) {
                    if (config.hotSpots[i].hasOwnProperty('id') && config.hotSpots[i].id === hotSpotId) {
                        var current = config.hotSpots[i].div;
                        while (current.parentNode != renderContainer) {
                            current = current.parentNode;
                        }
                        renderContainer.removeChild(current);
                        delete config.hotSpots[i].div;
                        config.hotSpots.splice(i, 1);
                        return true;
                    }
                }
                return false;
            };
            this.on = function(type, listener) {
                externalEventListeners[type] = externalEventListeners[type] || [];
                externalEventListeners[type].push(listener);
                return this;
            };
            this.off = function(type, listener) {
                if (!type) {
                    externalEventListeners = {};
                    return this;
                }
                if (listener) {
                    var i = externalEventListeners[type].indexOf(listener);
                    if (i >= 0) {
                        externalEventListeners[type].splice(i, 1);
                    }
                    if (externalEventListeners[type].length = 0) {
                        delete externalEventListeners[type];
                    }
                } else {
                    delete externalEventListeners[type];
                }
                return this;
            };

            function fireEvent(type) {
                if (type in externalEventListeners) {
                    for (var i = 0; i < externalEventListeners[type].length; i++) {
                        externalEventListeners[type][i].apply(null, [].slice.call(arguments, 1));
                    }
                }
            }
            this.destroy = function() {
                if (renderer) renderer.destroy();
                if (listenersAdded) {
                    dragFix.removeEventListener('mousedown', onDocumentMouseDown, false);
                    document.removeEventListener('mousemove', onDocumentMouseMove, false);
                    document.removeEventListener('mouseup', onDocumentMouseUp, false);
                    container.removeEventListener('mousewheel', onDocumentMouseWheel, false);
                    container.removeEventListener('DOMMouseScroll', onDocumentMouseWheel, false);
                    container.removeEventListener('mozfullscreenchange', onFullScreenChange, false);
                    container.removeEventListener('webkitfullscreenchange', onFullScreenChange, false);
                    container.removeEventListener('msfullscreenchange', onFullScreenChange, false);
                    container.removeEventListener('fullscreenchange', onFullScreenChange, false);
                    window.removeEventListener('resize', onDocumentResize, false);
                    window.removeEventListener('orientationchange', onDocumentResize, false);
                    container.removeEventListener('keydown', onDocumentKeyPress, false);
                    container.removeEventListener('keyup', onDocumentKeyUp, false);
                    container.removeEventListener('blur', clearKeys, false);
                    document.removeEventListener('mouseleave', onDocumentMouseUp, false);
                    dragFix.removeEventListener('touchstart', onDocumentTouchStart, false);
                    dragFix.removeEventListener('touchmove', onDocumentTouchMove, false);
                    dragFix.removeEventListener('touchend', onDocumentTouchEnd, false);
                    dragFix.removeEventListener('pointerdown', onDocumentPointerDown, false);
                    dragFix.removeEventListener('pointermove', onDocumentPointerMove, false);
                    dragFix.removeEventListener('pointerup', onDocumentPointerUp, false);
                    dragFix.removeEventListener('pointerleave', onDocumentPointerUp, false);
                }
                container.innerHTML = '';
                container.classList.remove('pnlm-container');
                container.classList.remove('pnlm-grab');
                container.classList.remove('pnlm-grabbing');
            };
        }
        return {
            viewer: function viewer(container, config) {
                return new Viewer(container, config);
            }
        };
    }(window, document);
}), (function(module, exports) {
    'use strict';
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    window.libpannellum = function(window, document, undefined) {
        'use strict';

        function Renderer(container) {
            var canvas = document.createElement('canvas');
            canvas.style.width = canvas.style.height = '100%';
            container.appendChild(canvas);
            var program, gl, vs, fs;
            var fallbackImgSize;
            var world;
            var vtmps;
            var pose;
            var image, imageType, dynamic;
            var texCoordBuffer, cubeVertBuf, cubeVertTexCoordBuf, cubeVertIndBuf;
            this.init = function(_image, _imageType, _dynamic, haov, vaov, voffset, callback, params) {
                if ((typeof _imageType === 'undefined' ? 'undefined' : _typeof(_imageType)) === undefined) _imageType = 'equirectangular';
                imageType = _imageType;
                image = _image;
                dynamic = _dynamic;
                if (program) {
                    if (vs) {
                        gl.detachShader(program, vs);
                        gl.deleteShader(vs);
                    }
                    if (fs) {
                        gl.detachShader(program, fs);
                        gl.deleteShader(fs);
                    }
                    gl.bindBuffer(gl.ARRAY_BUFFER, null);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
                    if (program.texture) gl.deleteTexture(program.texture);
                    if (program.nodeCache)
                        for (var i = 0; i < program.nodeCache.length; i++) {
                            gl.deleteTexture(program.nodeCache[i].texture);
                        }
                    gl.deleteProgram(program);
                    program = undefined;
                }
                pose = undefined;
                var s;
                if (!(imageType == 'cubemap' && (image[0].width & image[0].width - 1) !== 0 && (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/) || navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 9_/) || navigator.userAgent.match(/Trident.*rv[ :]*11\./)))) {
                    if (!gl) gl = canvas.getContext('experimental-webgl', {
                        alpha: false,
                        depth: false
                    });
                }
                if (!gl && (imageType == 'multires' && image.hasOwnProperty('fallbackPath') || imageType == 'cubemap') && ('WebkitAppearance' in document.documentElement.style || navigator.userAgent.match(/Trident.*rv[ :]*11\./) || navigator.appVersion.indexOf('MSIE 10') !== -1)) {
                    if (world) {
                        container.removeChild(world);
                    }
                    world = document.createElement('div');
                    world.className = 'pnlm-world';
                    var path;
                    if (image.basePath) {
                        path = image.basePath + image.fallbackPath;
                    } else {
                        path = image.fallbackPath;
                    }
                    var sides = ['f', 'r', 'b', 'l', 'u', 'd'];
                    var loaded = 0;
                    var onLoad = function onLoad() {
                        var faceCanvas = document.createElement('canvas');
                        faceCanvas.className = 'pnlm-face pnlm-' + sides[this.side] + 'face';
                        world.appendChild(faceCanvas);
                        var faceContext = faceCanvas.getContext('2d');
                        faceCanvas.style.width = this.width + 4 + 'px';
                        faceCanvas.style.height = this.height + 4 + 'px';
                        faceCanvas.width = this.width + 4;
                        faceCanvas.height = this.height + 4;
                        faceContext.drawImage(this, 2, 2);
                        var imgData = faceContext.getImageData(0, 0, faceCanvas.width, faceCanvas.height);
                        var data = imgData.data;
                        var i;
                        var j;
                        for (i = 2; i < faceCanvas.width - 2; i++) {
                            for (j = 0; j < 4; j++) {
                                data[(i + faceCanvas.width) * 4 + j] = data[(i + faceCanvas.width * 2) * 4 + j];
                                data[(i + faceCanvas.width * (faceCanvas.height - 2)) * 4 + j] = data[(i + faceCanvas.width * (faceCanvas.height - 3)) * 4 + j];
                            }
                        }
                        for (i = 2; i < faceCanvas.height - 2; i++) {
                            for (j = 0; j < 4; j++) {
                                data[(i * faceCanvas.width + 1) * 4 + j] = data[(i * faceCanvas.width + 2) * 4 + j];
                                data[((i + 1) * faceCanvas.width - 2) * 4 + j] = data[((i + 1) * faceCanvas.width - 3) * 4 + j];
                            }
                        }
                        for (j = 0; j < 4; j++) {
                            data[(faceCanvas.width + 1) * 4 + j] = data[(faceCanvas.width * 2 + 2) * 4 + j];
                            data[(faceCanvas.width * 2 - 2) * 4 + j] = data[(faceCanvas.width * 3 - 3) * 4 + j];
                            data[(faceCanvas.width * (faceCanvas.height - 2) + 1) * 4 + j] = data[(faceCanvas.width * (faceCanvas.height - 3) + 2) * 4 + j];
                            data[(faceCanvas.width * (faceCanvas.height - 1) - 2) * 4 + j] = data[(faceCanvas.width * (faceCanvas.height - 2) - 3) * 4 + j];
                        }
                        for (i = 1; i < faceCanvas.width - 1; i++) {
                            for (j = 0; j < 4; j++) {
                                data[i * 4 + j] = data[(i + faceCanvas.width) * 4 + j];
                                data[(i + faceCanvas.width * (faceCanvas.height - 1)) * 4 + j] = data[(i + faceCanvas.width * (faceCanvas.height - 2)) * 4 + j];
                            }
                        }
                        for (i = 1; i < faceCanvas.height - 1; i++) {
                            for (j = 0; j < 4; j++) {
                                data[i * faceCanvas.width * 4 + j] = data[(i * faceCanvas.width + 1) * 4 + j];
                                data[((i + 1) * faceCanvas.width - 1) * 4 + j] = data[((i + 1) * faceCanvas.width - 2) * 4 + j];
                            }
                        }
                        for (j = 0; j < 4; j++) {
                            data[j] = data[(faceCanvas.width + 1) * 4 + j];
                            data[(faceCanvas.width - 1) * 4 + j] = data[(faceCanvas.width * 2 - 2) * 4 + j];
                            data[faceCanvas.width * (faceCanvas.height - 1) * 4 + j] = data[(faceCanvas.width * (faceCanvas.height - 2) + 1) * 4 + j];
                            data[(faceCanvas.width * faceCanvas.height - 1) * 4 + j] = data[(faceCanvas.width * (faceCanvas.height - 1) - 2) * 4 + j];
                        }
                        faceContext.putImageData(imgData, 0, 0);
                        loaded++;
                        if (loaded == 6) {
                            fallbackImgSize = this.width;
                            container.appendChild(world);
                            callback();
                        }
                    };
                    for (s = 0; s < 6; s++) {
                        var faceImg = new Image();
                        faceImg.crossOrigin = 'anonymous';
                        faceImg.side = s;
                        faceImg.onload = onLoad;
                        if (imageType == 'multires') {
                            faceImg.src = encodeURI(path.replace('%s', sides[s]) + '.' + image.extension);
                        } else {
                            faceImg.src = encodeURI(image[s].src);
                        }
                    }
                    return;
                } else if (!gl) {
                    console.log('Error: no WebGL support detected!');
                    throw {
                        type: 'no webgl'
                    };
                }
                if (image.basePath) {
                    image.fullpath = image.basePath + image.path;
                } else {
                    image.fullpath = image.path;
                }
                image.invTileResolution = 1 / image.tileResolution;
                var vertices = createCube();
                vtmps = [];
                for (s = 0; s < 6; s++) {
                    vtmps[s] = vertices.slice(s * 12, s * 12 + 12);
                    vertices = createCube();
                }
                var width, maxWidth;
                if (imageType == 'equirectangular') {
                    width = Math.max(image.width, image.height);
                    maxWidth = gl.getParameter(gl.MAX_TEXTURE_SIZE);
                    if (width > maxWidth) {
                        console.log('Error: The image is too big; it\'s ' + width + 'px wide, but this device\'s maximum supported width is ' + maxWidth + 'px.');
                        throw {
                            type: 'webgl size error',
                            width: width,
                            maxWidth: maxWidth
                        };
                    }
                } else if (imageType == 'cubemap') {
                    width = image[0].width;
                    maxWidth = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
                    if (width > maxWidth) {
                        console.log('Error: The cube face image is too big; it\'s ' + width + 'px wide, but this device\'s maximum supported width is ' + maxWidth + 'px.');
                        throw {
                            type: 'webgl size error',
                            width: width,
                            maxWidth: maxWidth
                        };
                    }
                }
                if (params !== undefined && (params.horizonPitch !== undefined || params.horizonRoll !== undefined)) pose = [params.horizonPitch == undefined ? 0 : params.horizonPitch, params.horizonRoll == undefined ? 0 : params.horizonRoll];
                var glBindType = gl.TEXTURE_2D;
                gl.viewport(0, 0, canvas.width, canvas.height);
                vs = gl.createShader(gl.VERTEX_SHADER);
                var vertexSrc = v;
                if (imageType == 'multires') {
                    vertexSrc = vMulti;
                }
                gl.shaderSource(vs, vertexSrc);
                gl.compileShader(vs);
                fs = gl.createShader(gl.FRAGMENT_SHADER);
                var fragmentSrc = fragEquirectangular;
                if (imageType == 'cubemap') {
                    glBindType = gl.TEXTURE_CUBE_MAP;
                    fragmentSrc = fragCube;
                } else if (imageType == 'multires') {
                    fragmentSrc = fragMulti;
                }
                gl.shaderSource(fs, fragmentSrc);
                gl.compileShader(fs);
                program = gl.createProgram();
                gl.attachShader(program, vs);
                gl.attachShader(program, fs);
                gl.linkProgram(program);
                if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) console.log(gl.getShaderInfoLog(vs));
                if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) console.log(gl.getShaderInfoLog(fs));
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) console.log(gl.getProgramInfoLog(program));
                gl.useProgram(program);
                program.drawInProgress = false;
                program.texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
                gl.enableVertexAttribArray(program.texCoordLocation);
                if (imageType != 'multires') {
                    if (!texCoordBuffer) texCoordBuffer = gl.createBuffer();
                    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, -1]), gl.STATIC_DRAW);
                    gl.vertexAttribPointer(program.texCoordLocation, 2, gl.FLOAT, false, 0, 0);
                    program.aspectRatio = gl.getUniformLocation(program, 'u_aspectRatio');
                    gl.uniform1f(program.aspectRatio, canvas.width / canvas.height);
                    program.psi = gl.getUniformLocation(program, 'u_psi');
                    program.theta = gl.getUniformLocation(program, 'u_theta');
                    program.f = gl.getUniformLocation(program, 'u_f');
                    program.h = gl.getUniformLocation(program, 'u_h');
                    program.v = gl.getUniformLocation(program, 'u_v');
                    program.vo = gl.getUniformLocation(program, 'u_vo');
                    program.rot = gl.getUniformLocation(program, 'u_rot');
                    gl.uniform1f(program.h, haov / (Math.PI * 2.0));
                    gl.uniform1f(program.v, vaov / Math.PI);
                    gl.uniform1f(program.vo, voffset / Math.PI * 2);
                    if (imageType == 'equirectangular') {
                        program.backgroundColor = gl.getUniformLocation(program, 'u_backgroundColor');
                        var color = params.backgroundColor ? params.backgroundColor : [0, 0, 0];
                        gl.uniform4fv(program.backgroundColor, color.concat([1]));
                    }
                    program.texture = gl.createTexture();
                    gl.bindTexture(glBindType, program.texture);
                    if (imageType == 'cubemap') {
                        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[1]);
                        gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[3]);
                        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[4]);
                        gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[5]);
                        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[0]);
                        gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[2]);
                    } else {
                        gl.texImage2D(glBindType, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
                    }
                    gl.texParameteri(glBindType, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(glBindType, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(glBindType, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                    gl.texParameteri(glBindType, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                } else {
                    program.vertPosLocation = gl.getAttribLocation(program, 'a_vertCoord');
                    gl.enableVertexAttribArray(program.vertPosLocation);
                    if (!cubeVertBuf) cubeVertBuf = gl.createBuffer();
                    if (!cubeVertTexCoordBuf) cubeVertTexCoordBuf = gl.createBuffer();
                    if (!cubeVertIndBuf) cubeVertIndBuf = gl.createBuffer();
                    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertTexCoordBuf);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);
                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertIndBuf);
                    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
                    program.perspUniform = gl.getUniformLocation(program, 'u_perspMatrix');
                    program.cubeUniform = gl.getUniformLocation(program, 'u_cubeMatrix');
                    program.level = -1;
                    program.currentNodes = [];
                    program.nodeCache = [];
                    program.nodeCacheTimestamp = 0;
                }
                if (gl.getError() !== 0) {
                    console.log('Error: Something went wrong with WebGL!');
                    throw {
                        type: 'webgl error'
                    };
                }
                callback();
            };
            this.destroy = function() {
                if (container !== undefined) {
                    if (canvas !== undefined) {
                        container.removeChild(canvas);
                    }
                    if (world !== undefined) {
                        container.removeChild(world);
                    }
                }
                if (gl) {
                    var extension = gl.getExtension('WEBGL_lose_context');
                    if (extension) extension.loseContext();
                }
            };
            this.resize = function() {
                var pixelRatio = window.devicePixelRatio || 1;
                canvas.width = canvas.clientWidth * pixelRatio;
                canvas.height = canvas.clientHeight * pixelRatio;
                if (gl) {
                    gl.viewport(0, 0, canvas.width, canvas.height);
                    if (imageType != 'multires') {
                        gl.uniform1f(program.aspectRatio, canvas.width / canvas.height);
                    }
                }
            };
            this.resize();
            this.render = function(pitch, yaw, hfov, params) {
                var focal, i, s, roll = 0;
                if (params === undefined) params = {};
                if (params.roll) roll = params.roll;
                if (pose !== undefined) {
                    var horizonPitch = pose[0],
                        horizonRoll = pose[1];
                    var orig_pitch = pitch,
                        orig_yaw = yaw,
                        x = Math.cos(horizonRoll) * Math.sin(pitch) * Math.sin(horizonPitch) + Math.cos(pitch) * (Math.cos(horizonPitch) * Math.cos(yaw) + Math.sin(horizonRoll) * Math.sin(horizonPitch) * Math.sin(yaw)),
                        y = -Math.sin(pitch) * Math.sin(horizonRoll) + Math.cos(pitch) * Math.cos(horizonRoll) * Math.sin(yaw),
                        z = Math.cos(horizonRoll) * Math.cos(horizonPitch) * Math.sin(pitch) + Math.cos(pitch) * (-Math.cos(yaw) * Math.sin(horizonPitch) + Math.cos(horizonPitch) * Math.sin(horizonRoll) * Math.sin(yaw));
                    pitch = Math.asin(Math.max(Math.min(z, 1), -1));
                    yaw = Math.atan2(y, x);
                    var v = [Math.cos(orig_pitch) * (Math.sin(horizonRoll) * Math.sin(horizonPitch) * Math.cos(orig_yaw) - Math.cos(horizonPitch) * Math.sin(orig_yaw)), Math.cos(orig_pitch) * Math.cos(horizonRoll) * Math.cos(orig_yaw), Math.cos(orig_pitch) * (Math.cos(horizonPitch) * Math.sin(horizonRoll) * Math.cos(orig_yaw) + Math.sin(orig_yaw) * Math.sin(horizonPitch))],
                        w = [-Math.cos(pitch) * Math.sin(yaw), Math.cos(pitch) * Math.cos(yaw)];
                    var roll_adj = Math.acos(Math.max(Math.min((v[0] * w[0] + v[1] * w[1]) / (Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]) * Math.sqrt(w[0] * w[0] + w[1] * w[1])), 1), -1));
                    if (v[2] < 0) roll_adj = 2 * Math.PI - roll_adj;
                    roll += roll_adj;
                }
                if (!gl && (imageType == 'multires' || imageType == 'cubemap')) {
                    s = fallbackImgSize / 2;
                    var transforms = {
                        f: 'translate3d(-' + (s + 2) + 'px, -' + (s + 2) + 'px, -' + s + 'px)',
                        b: 'translate3d(' + (s + 2) + 'px, -' + (s + 2) + 'px, ' + s + 'px) rotateX(180deg) rotateZ(180deg)',
                        u: 'translate3d(-' + (s + 2) + 'px, -' + s + 'px, ' + (s + 2) + 'px) rotateX(270deg)',
                        d: 'translate3d(-' + (s + 2) + 'px, ' + s + 'px, -' + (s + 2) + 'px) rotateX(90deg)',
                        l: 'translate3d(-' + s + 'px, -' + (s + 2) + 'px, ' + (s + 2) + 'px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)',
                        r: 'translate3d(' + s + 'px, -' + (s + 2) + 'px, -' + (s + 2) + 'px) rotateY(270deg)'
                    };
                    focal = 1 / Math.tan(hfov / 2);
                    var zoom = focal * canvas.width / (window.devicePixelRatio || 1) / 2 + 'px';
                    var transform = 'perspective(' + zoom + ') translateZ(' + zoom + ') rotateX(' + pitch + 'rad) rotateY(' + yaw + 'rad) ';
                    var faces = Object.keys(transforms);
                    for (i = 0; i < 6; i++) {
                        var face = world.querySelector('.pnlm-' + faces[i] + 'face').style;
                        face.webkitTransform = transform + transforms[faces[i]];
                        face.transform = transform + transforms[faces[i]];
                    }
                    return;
                }
                if (imageType != 'multires') {
                    var vfov = 2 * Math.atan(Math.tan(hfov * 0.5) / (canvas.width / canvas.height));
                    focal = 1 / Math.tan(vfov * 0.5);
                    gl.uniform1f(program.psi, yaw);
                    gl.uniform1f(program.theta, pitch);
                    gl.uniform1f(program.rot, roll);
                    gl.uniform1f(program.f, focal);
                    if (dynamic === true) {
                        if (imageType == 'equirectangular') {
                            gl.bindTexture(gl.TEXTURE_2D, program.texture);
                            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
                        }
                    }
                    gl.drawArrays(gl.TRIANGLES, 0, 6);
                } else {
                    var perspMatrix = makePersp(hfov, canvas.width / canvas.height, 0.1, 100.0);
                    checkZoom(hfov);
                    var matrix = identityMatrix3();
                    matrix = rotateMatrix(matrix, -roll, 'z');
                    matrix = rotateMatrix(matrix, -pitch, 'x');
                    matrix = rotateMatrix(matrix, yaw, 'y');
                    matrix = makeMatrix4(matrix);
                    gl.uniformMatrix4fv(program.perspUniform, false, new Float32Array(transposeMatrix4(perspMatrix)));
                    gl.uniformMatrix4fv(program.cubeUniform, false, new Float32Array(transposeMatrix4(matrix)));
                    var rotPersp = rotatePersp(perspMatrix, matrix);
                    program.nodeCache.sort(multiresNodeSort);
                    if (program.nodeCache.length > 200 && program.nodeCache.length > program.currentNodes.length + 50) {
                        var removed = program.nodeCache.splice(200, program.nodeCache.length - 200);
                        for (var i = 0; i < removed.length; i++) {
                            gl.deleteTexture(removed[i].texture);
                        }
                    }
                    program.currentNodes = [];
                    var sides = ['f', 'b', 'u', 'd', 'l', 'r'];
                    for (s = 0; s < 6; s++) {
                        var ntmp = new MultiresNode(vtmps[s], sides[s], 1, 0, 0, image.fullpath);
                        testMultiresNode(rotPersp, ntmp, pitch, yaw, hfov);
                    }
                    program.currentNodes.sort(multiresNodeRenderSort);
                    for (i = 0; i < program.currentNodes.length; i++) {
                        if (!program.currentNodes[i].texture) {
                            setTimeout(processNextTile(program.currentNodes[i]), 0);
                            break;
                        }
                    }
                    multiresDraw();
                }
                if (params.returnImage !== undefined) {
                    return canvas.toDataURL('image/png');
                }
            };
            this.isLoading = function() {
                if (gl && imageType == 'multires') {
                    for (var i = 0; i < program.currentNodes.length; i++) {
                        if (!program.currentNodes[i].textureLoaded) {
                            return true;
                        }
                    }
                }
                return false;
            };
            this.getCanvas = function() {
                return canvas;
            };

            function multiresNodeSort(a, b) {
                if (a.level == 1 && b.level != 1) {
                    return -1;
                }
                if (b.level == 1 && a.level != 1) {
                    return 1;
                }
                return b.timestamp - a.timestamp;
            }

            function multiresNodeRenderSort(a, b) {
                if (a.level != b.level) {
                    return a.level - b.level;
                }
                return a.diff - b.diff;
            }

            function multiresDraw() {
                if (!program.drawInProgress) {
                    program.drawInProgress = true;
                    for (var i = 0; i < program.currentNodes.length; i++) {
                        if (program.currentNodes[i].textureLoaded) {
                            gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertBuf);
                            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(program.currentNodes[i].vertices), gl.STATIC_DRAW);
                            gl.vertexAttribPointer(program.vertPosLocation, 3, gl.FLOAT, false, 0, 0);
                            gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertTexCoordBuf);
                            gl.vertexAttribPointer(program.texCoordLocation, 2, gl.FLOAT, false, 0, 0);
                            gl.bindTexture(gl.TEXTURE_2D, program.currentNodes[i].texture);
                            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
                        }
                    }
                    program.drawInProgress = false;
                }
            }

            function MultiresNode(vertices, side, level, x, y, path) {
                this.vertices = vertices;
                this.side = side;
                this.level = level;
                this.x = x;
                this.y = y;
                this.path = path.replace('%s', side).replace('%l', level).replace('%x', x).replace('%y', y);
            }

            function testMultiresNode(rotPersp, node, pitch, yaw, hfov) {
                if (checkSquareInView(rotPersp, node.vertices)) {
                    var v = node.vertices;
                    var x = v[0] + v[3] + v[6] + v[9];
                    var y = v[1] + v[4] + v[7] + v[10];
                    var z = v[2] + v[5] + v[8] + v[11];
                    var r = Math.sqrt(x * x + y * y + z * z);
                    var theta = Math.asin(z / r);
                    var phi = Math.atan2(y, x);
                    var ydiff = phi - yaw;
                    ydiff += ydiff > Math.PI ? -2 * Math.PI : ydiff < -Math.PI ? 2 * Math.PI : 0;
                    ydiff = Math.abs(ydiff);
                    node.diff = Math.acos(Math.sin(pitch) * Math.sin(theta) + Math.cos(pitch) * Math.cos(theta) * Math.cos(ydiff));
                    var inCurrent = false;
                    for (var k = 0; k < program.nodeCache.length; k++) {
                        if (program.nodeCache[k].path == node.path) {
                            inCurrent = true;
                            program.nodeCache[k].timestamp = program.nodeCacheTimestamp++;
                            program.nodeCache[k].diff = node.diff;
                            program.currentNodes.push(program.nodeCache[k]);
                            break;
                        }
                    }
                    if (!inCurrent) {
                        node.timestamp = program.nodeCacheTimestamp++;
                        program.currentNodes.push(node);
                        program.nodeCache.push(node);
                    }
                    if (node.level < program.level) {
                        var cubeSize = image.cubeResolution * Math.pow(2, node.level - image.maxLevel);
                        var numTiles = Math.ceil(cubeSize * image.invTileResolution) - 1;
                        var doubleTileSize = cubeSize % image.tileResolution * 2;
                        var lastTileSize = cubeSize * 2 % image.tileResolution;
                        if (lastTileSize === 0) {
                            lastTileSize = image.tileResolution;
                        }
                        if (doubleTileSize === 0) {
                            doubleTileSize = image.tileResolution * 2;
                        }
                        var f = 0.5;
                        if (node.x == numTiles || node.y == numTiles) {
                            f = 1.0 - image.tileResolution / (image.tileResolution + lastTileSize);
                        }
                        var i = 1.0 - f;
                        var children = [];
                        var vtmp, ntmp;
                        var f1 = f,
                            f2 = f,
                            f3 = f,
                            i1 = i,
                            i2 = i,
                            i3 = i;
                        if (lastTileSize < image.tileResolution) {
                            if (node.x == numTiles && node.y != numTiles) {
                                f2 = 0.5;
                                i2 = 0.5;
                                if (node.side == 'd' || node.side == 'u') {
                                    f3 = 0.5;
                                    i3 = 0.5;
                                }
                            } else if (node.x != numTiles && node.y == numTiles) {
                                f1 = 0.5;
                                i1 = 0.5;
                                if (node.side == 'l' || node.side == 'r') {
                                    f3 = 0.5;
                                    i3 = 0.5;
                                }
                            }
                        }
                        if (doubleTileSize <= image.tileResolution) {
                            if (node.x == numTiles) {
                                f1 = 0;
                                i1 = 1;
                                if (node.side == 'l' || node.side == 'r') {
                                    f3 = 0;
                                    i3 = 1;
                                }
                            }
                            if (node.y == numTiles) {
                                f2 = 0;
                                i2 = 1;
                                if (node.side == 'd' || node.side == 'u') {
                                    f3 = 0;
                                    i3 = 1;
                                }
                            }
                        }
                        vtmp = [v[0], v[1], v[2], v[0] * f1 + v[3] * i1, v[1] * f + v[4] * i, v[2] * f3 + v[5] * i3, v[0] * f1 + v[6] * i1, v[1] * f2 + v[7] * i2, v[2] * f3 + v[8] * i3, v[0] * f + v[9] * i, v[1] * f2 + v[10] * i2, v[2] * f3 + v[11] * i3];
                        ntmp = new MultiresNode(vtmp, node.side, node.level + 1, node.x * 2, node.y * 2, image.fullpath);
                        children.push(ntmp);
                        if (!(node.x == numTiles && doubleTileSize <= image.tileResolution)) {
                            vtmp = [v[0] * f1 + v[3] * i1, v[1] * f + v[4] * i, v[2] * f3 + v[5] * i3, v[3], v[4], v[5], v[3] * f + v[6] * i, v[4] * f2 + v[7] * i2, v[5] * f3 + v[8] * i3, v[0] * f1 + v[6] * i1, v[1] * f2 + v[7] * i2, v[2] * f3 + v[8] * i3];
                            ntmp = new MultiresNode(vtmp, node.side, node.level + 1, node.x * 2 + 1, node.y * 2, image.fullpath);
                            children.push(ntmp);
                        }
                        if (!(node.x == numTiles && doubleTileSize <= image.tileResolution) && !(node.y == numTiles && doubleTileSize <= image.tileResolution)) {
                            vtmp = [v[0] * f1 + v[6] * i1, v[1] * f2 + v[7] * i2, v[2] * f3 + v[8] * i3, v[3] * f + v[6] * i, v[4] * f2 + v[7] * i2, v[5] * f3 + v[8] * i3, v[6], v[7], v[8], v[9] * f1 + v[6] * i1, v[10] * f + v[7] * i, v[11] * f3 + v[8] * i3];
                            ntmp = new MultiresNode(vtmp, node.side, node.level + 1, node.x * 2 + 1, node.y * 2 + 1, image.fullpath);
                            children.push(ntmp);
                        }
                        if (!(node.y == numTiles && doubleTileSize <= image.tileResolution)) {
                            vtmp = [v[0] * f + v[9] * i, v[1] * f2 + v[10] * i2, v[2] * f3 + v[11] * i3, v[0] * f1 + v[6] * i1, v[1] * f2 + v[7] * i2, v[2] * f3 + v[8] * i3, v[9] * f1 + v[6] * i1, v[10] * f + v[7] * i, v[11] * f3 + v[8] * i3, v[9], v[10], v[11]];
                            ntmp = new MultiresNode(vtmp, node.side, node.level + 1, node.x * 2, node.y * 2 + 1, image.fullpath);
                            children.push(ntmp);
                        }
                        for (var j = 0; j < children.length; j++) {
                            testMultiresNode(rotPersp, children[j], pitch, yaw, hfov);
                        }
                    }
                }
            }

            function createCube() {
                return [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1];
            }

            function identityMatrix3() {
                return [1, 0, 0, 0, 1, 0, 0, 0, 1];
            }

            function rotateMatrix(m, angle, axis) {
                var s = Math.sin(angle);
                var c = Math.cos(angle);
                if (axis == 'x') {
                    return [m[0], c * m[1] + s * m[2], c * m[2] - s * m[1], m[3], c * m[4] + s * m[5], c * m[5] - s * m[4], m[6], c * m[7] + s * m[8], c * m[8] - s * m[7]];
                }
                if (axis == 'y') {
                    return [c * m[0] - s * m[2], m[1], c * m[2] + s * m[0], c * m[3] - s * m[5], m[4], c * m[5] + s * m[3], c * m[6] - s * m[8], m[7], c * m[8] + s * m[6]];
                }
                if (axis == 'z') {
                    return [c * m[0] + s * m[1], c * m[1] - s * m[0], m[2], c * m[3] + s * m[4], c * m[4] - s * m[3], m[5], c * m[6] + s * m[7], c * m[7] - s * m[6], m[8]];
                }
            }

            function makeMatrix4(m) {
                return [m[0], m[1], m[2], 0, m[3], m[4], m[5], 0, m[6], m[7], m[8], 0, 0, 0, 0, 1];
            }

            function transposeMatrix4(m) {
                return [m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]];
            }

            function makePersp(hfov, aspect, znear, zfar) {
                var fovy = 2 * Math.atan(Math.tan(hfov / 2) * canvas.height / canvas.width);
                var f = 1 / Math.tan(fovy / 2);
                return [f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (zfar + znear) / (znear - zfar), 2 * zfar * znear / (znear - zfar), 0, 0, -1, 0];
            }

            function processLoadedTexture(img, tex) {
                gl.bindTexture(gl.TEXTURE_2D, tex);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.bindTexture(gl.TEXTURE_2D, null);
            }
            var loadTexture = function() {
                var cacheTop = 4;
                var textureImageCache = {};
                var pendingTextureRequests = [];

                function TextureImageLoader() {
                    var self = this;
                    this.texture = this.callback = null;
                    this.image = new Image();
                    this.image.crossOrigin = 'anonymous';
                    this.image.addEventListener('load', function() {
                        processLoadedTexture(self.image, self.texture);
                        self.callback(self.texture);
                        releaseTextureImageLoader(self);
                    });
                };
                TextureImageLoader.prototype.loadTexture = function(src, texture, callback) {
                    this.texture = texture;
                    this.callback = callback;
                    this.image.src = src;
                };

                function PendingTextureRequest(src, texture, callback) {
                    this.src = src;
                    this.texture = texture;
                    this.callback = callback;
                };

                function releaseTextureImageLoader(til) {
                    if (pendingTextureRequests.length) {
                        var req = pendingTextureRequests.shift();
                        til.loadTexture(req.src, req.texture, req.callback);
                    } else textureImageCache[cacheTop++] = til;
                }
                for (var i = 0; i < cacheTop; i++) {
                    textureImageCache[i] = new TextureImageLoader();
                }
                return function(src, callback) {
                    var texture = gl.createTexture();
                    if (cacheTop) textureImageCache[--cacheTop].loadTexture(src, texture, callback);
                    else pendingTextureRequests.push(new PendingTextureRequest(src, texture, callback));
                    return texture;
                };
            }();

            function processNextTile(node) {
                if (!node.textureLoad) {
                    node.textureLoad = true;
                    loadTexture(encodeURI(node.path + '.' + image.extension), function(texture) {
                        node.texture = texture;
                        node.textureLoaded = true;
                    });
                }
            }

            function checkZoom(hfov) {
                var newLevel = 1;
                while (newLevel < image.maxLevel && canvas.width > image.tileResolution * Math.pow(2, newLevel - 1) * Math.tan(hfov / 2) * 0.707) {
                    newLevel++;
                }
                program.level = newLevel;
            }

            function rotatePersp(p, r) {
                return [p[0] * r[0], p[0] * r[1], p[0] * r[2], 0, p[5] * r[4], p[5] * r[5], p[5] * r[6], 0, p[10] * r[8], p[10] * r[9], p[10] * r[10], p[11], -r[8], -r[9], -r[10], 0];
            }

            function applyRotPerspToVec(m, v) {
                return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[4] * v[0] + m[5] * v[1] + m[6] * v[2], m[11] + m[8] * v[0] + m[9] * v[1] + m[10] * v[2], 1 / (m[12] * v[0] + m[13] * v[1] + m[14] * v[2])];
            }

            function checkInView(m, v) {
                var vpp = applyRotPerspToVec(m, v);
                var winX = vpp[0] * vpp[3];
                var winY = vpp[1] * vpp[3];
                var winZ = vpp[2] * vpp[3];
                var ret = [0, 0, 0];
                if (winX < -1) ret[0] = -1;
                if (winX > 1) ret[0] = 1;
                if (winY < -1) ret[1] = -1;
                if (winY > 1) ret[1] = 1;
                if (winZ < -1 || winZ > 1) ret[2] = 1;
                return ret;
            }

            function checkSquareInView(m, v) {
                var check1 = checkInView(m, v.slice(0, 3));
                var check2 = checkInView(m, v.slice(3, 6));
                var check3 = checkInView(m, v.slice(6, 9));
                var check4 = checkInView(m, v.slice(9, 12));
                var testX = check1[0] + check2[0] + check3[0] + check4[0];
                if (testX == -4 || testX == 4) return false;
                var testY = check1[1] + check2[1] + check3[1] + check4[1];
                if (testY == -4 || testY == 4) return false;
                var testZ = check1[2] + check2[2] + check3[2] + check4[2];
                return testZ != 4;
            }
        }
        var v = ['attribute vec2 a_texCoord;', 'varying vec2 v_texCoord;', 'void main() {', 'gl_Position = vec4(a_texCoord, 0.0, 1.0);', 'v_texCoord = a_texCoord;', '}'].join('');
        var vMulti = ['attribute vec3 a_vertCoord;', 'attribute vec2 a_texCoord;', 'uniform mat4 u_cubeMatrix;', 'uniform mat4 u_perspMatrix;', 'varying mediump vec2 v_texCoord;', 'void main(void) {', 'gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);', 'v_texCoord = a_texCoord;', '}'].join('');
        var fragEquiCubeBase = ['precision mediump float;', 'uniform float u_aspectRatio;', 'uniform float u_psi;', 'uniform float u_theta;', 'uniform float u_f;', 'uniform float u_h;', 'uniform float u_v;', 'uniform float u_vo;', 'uniform float u_rot;', 'const float PI = 3.14159265358979323846264;', 'uniform sampler2D u_image;', 'uniform samplerCube u_imageCube;', 'varying vec2 v_texCoord;', 'uniform vec4 u_backgroundColor;', 'void main() {', 'float x = v_texCoord.x * u_aspectRatio;', 'float y = v_texCoord.y;', 'float sinrot = sin(u_rot);', 'float cosrot = cos(u_rot);', 'float rot_x = x * cosrot - y * sinrot;', 'float rot_y = x * sinrot + y * cosrot;', 'float sintheta = sin(u_theta);', 'float costheta = cos(u_theta);', 'float a = u_f * costheta - rot_y * sintheta;', 'float root = sqrt(rot_x * rot_x + a * a);', 'float lambda = atan(rot_x / root, a / root) + u_psi;', 'float phi = atan((rot_y * costheta + u_f * sintheta) / root);'].join('\n');
        var fragCube = fragEquiCubeBase + ['float cosphi = cos(phi);', 'gl_FragColor = textureCube(u_imageCube, vec3(cosphi*sin(lambda), sin(phi), cosphi*cos(lambda)));', '}'].join('\n');
        var fragEquirectangular = fragEquiCubeBase + ['lambda = mod(lambda + PI, PI * 2.0) - PI;', 'vec2 coord = vec2(lambda / PI, phi / (PI / 2.0));', 'if(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)', 'gl_FragColor = u_backgroundColor;', 'else', 'gl_FragColor = texture2D(u_image, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));', '}'].join('\n');
        var fragMulti = ['varying mediump vec2 v_texCoord;', 'uniform sampler2D u_sampler;', 'void main(void) {', 'gl_FragColor = texture2D(u_sampler, v_texCoord);', '}'].join('');
        return {
            renderer: function renderer(container, image, imagetype, dynamic) {
                return new Renderer(container, image, imagetype, dynamic);
            }
        };
    }(window, document);
}), (function(module, exports) {
    "use strict";
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function() {
            return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
                window.setTimeout(callback, 1000 / 60);
            };
        }();
    }
}), (function(module, exports, __webpack_require__) {
    'use strict';
    var _isotopeLayout = __webpack_require__(28);
    var _isotopeLayout2 = _interopRequireDefault(_isotopeLayout);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    var grid = document.querySelector('.grid');
    var showAllBtn = document.querySelector('.grid-show-all');
    var filterItems = document.querySelectorAll('.filter-item');
    if (grid) {
        (function() {
            var iso = new _isotopeLayout2.default(grid, {
                itemSelector: '.grid-item',
                transformsEnabled: false,
                layoutMode: 'fitRows',
                fitRows: {
                    gutter: 10
                },
                stagger: 0,
                visibleStyle: {
                    transform: 'translateY(0)',
                    opacity: 1
                },
                hiddenStyle: {
                    transform: 'translateY(100px)',
                    opacity: 0
                }
            });
            _isotopeLayout2.default.prototype._positionAbs = function(x, y) {
                return {
                    right: x,
                    top: y
                };
            };
            var filters = document.querySelector('.filters');
            var filterButtons = filters.querySelectorAll('.filter-item');
            filterItems.forEach(function(element) {
                element.addEventListener('click', function handleClick() {
                    var currentItem = document.querySelector('.filter-item.button');
                    currentItem.classList.remove('selected-clicked');
                    this.classList.add('selected-clicked');
                });
            });
            var _loop = function _loop(i) {
                var filterButton = filterButtons[i];
                filterButton.addEventListener('click', function(e) {
                    var filterValue = e.target.getAttribute('data-filter');
                    iso.arrange({
                        filter: filterValue
                    });
                    filters.setAttribute('data-selected', i);
                });
            };
            for (var i = 0; i < filterButtons.length; i++) {
                _loop(i);
            }
        })();
    }
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
     * Isotope v3.0.5
     *
     * Licensed GPLv3 for open source use
     * or Isotope Commercial License for commercial use
     *
     * https://isotope.metafizzy.co
     * Copyright 2017 Metafizzy
     */
    (function(window, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(32), __webpack_require__(29), __webpack_require__(30), __webpack_require__(31), __webpack_require__(40), __webpack_require__(35), __webpack_require__(36), __webpack_require__(38), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
                return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module == 'object' && module.exports) {
            module.exports = factory(window, require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('fizzy-ui-utils'), require('./item'), require('./layout-mode'), require('./layout-modes/masonry'), require('./layout-modes/fit-rows'), require('./layout-modes/vertical'));
        } else {
            window.Isotope = factory(window, window.Outlayer, window.getSize, window.matchesSelector, window.fizzyUIUtils, window.Isotope.Item, window.Isotope.LayoutMode);
        }
    }(window, function factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
        'use strict';
        var jQuery = window.jQuery;
        var trim = String.prototype.trim ? function(str) {
            return str.trim();
        } : function(str) {
            return str.replace(/^\s+|\s+$/g, '');
        };
        var Isotope = Outlayer.create('isotope', {
            layoutMode: 'masonry',
            isJQueryFiltering: true,
            sortAscending: true
        });
        Isotope.Item = Item;
        Isotope.LayoutMode = LayoutMode;
        var proto = Isotope.prototype;
        proto._create = function() {
            this.itemGUID = 0;
            this._sorters = {};
            this._getSorters();
            Outlayer.prototype._create.call(this);
            this.modes = {};
            this.filteredItems = this.items;
            this.sortHistory = ['original-order'];
            for (var name in LayoutMode.modes) {
                this._initLayoutMode(name);
            }
        };
        proto.reloadItems = function() {
            this.itemGUID = 0;
            Outlayer.prototype.reloadItems.call(this);
        };
        proto._itemize = function() {
            var items = Outlayer.prototype._itemize.apply(this, arguments);
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                item.id = this.itemGUID++;
            }
            this._updateItemsSortData(items);
            return items;
        };
        proto._initLayoutMode = function(name) {
            var Mode = LayoutMode.modes[name];
            var initialOpts = this.options[name] || {};
            this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
            this.modes[name] = new Mode(this);
        };
        proto.layout = function() {
            if (!this._isLayoutInited && this._getOption('initLayout')) {
                this.arrange();
                return;
            }
            this._layout();
        };
        proto._layout = function() {
            var isInstant = this._getIsInstant();
            this._resetLayout();
            this._manageStamps();
            this.layoutItems(this.filteredItems, isInstant);
            this._isLayoutInited = true;
        };
        proto.arrange = function(opts) {
            this.option(opts);
            this._getIsInstant();
            var filtered = this._filter(this.items);
            this.filteredItems = filtered.matches;
            this._bindArrangeComplete();
            if (this._isInstant) {
                this._noTransition(this._hideReveal, [filtered]);
            } else {
                this._hideReveal(filtered);
            }
            this._sort();
            this._layout();
        };
        proto._init = proto.arrange;
        proto._hideReveal = function(filtered) {
            this.reveal(filtered.needReveal);
            this.hide(filtered.needHide);
        };
        proto._getIsInstant = function() {
            var isLayoutInstant = this._getOption('layoutInstant');
            var isInstant = isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
            this._isInstant = isInstant;
            return isInstant;
        };
        proto._bindArrangeComplete = function() {
            var isLayoutComplete, isHideComplete, isRevealComplete;
            var _this = this;

            function arrangeParallelCallback() {
                if (isLayoutComplete && isHideComplete && isRevealComplete) {
                    _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
                }
            }
            this.once('layoutComplete', function() {
                isLayoutComplete = true;
                arrangeParallelCallback();
            });
            this.once('hideComplete', function() {
                isHideComplete = true;
                arrangeParallelCallback();
            });
            this.once('revealComplete', function() {
                isRevealComplete = true;
                arrangeParallelCallback();
            });
        };
        proto._filter = function(items) {
            var filter = this.options.filter;
            filter = filter || '*';
            var matches = [];
            var hiddenMatched = [];
            var visibleUnmatched = [];
            var test = this._getFilterTest(filter);
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.isIgnored) {
                    continue;
                }
                var isMatched = test(item);
                if (isMatched) {
                    matches.push(item);
                }
                if (isMatched && item.isHidden) {
                    hiddenMatched.push(item);
                } else if (!isMatched && !item.isHidden) {
                    visibleUnmatched.push(item);
                }
            }
            return {
                matches: matches,
                needReveal: hiddenMatched,
                needHide: visibleUnmatched
            };
        };
        proto._getFilterTest = function(filter) {
            if (jQuery && this.options.isJQueryFiltering) {
                return function(item) {
                    return jQuery(item.element).is(filter);
                };
            }
            if (typeof filter == 'function') {
                return function(item) {
                    return filter(item.element);
                };
            }
            return function(item) {
                return matchesSelector(item.element, filter);
            };
        };
        proto.updateSortData = function(elems) {
            var items;
            if (elems) {
                elems = utils.makeArray(elems);
                items = this.getItems(elems);
            } else {
                items = this.items;
            }
            this._getSorters();
            this._updateItemsSortData(items);
        };
        proto._getSorters = function() {
            var getSortData = this.options.getSortData;
            for (var key in getSortData) {
                var sorter = getSortData[key];
                this._sorters[key] = mungeSorter(sorter);
            }
        };
        proto._updateItemsSortData = function(items) {
            var len = items && items.length;
            for (var i = 0; len && i < len; i++) {
                var item = items[i];
                item.updateSortData();
            }
        };
        var mungeSorter = (function() {
            function mungeSorter(sorter) {
                if (typeof sorter != 'string') {
                    return sorter;
                }
                var args = trim(sorter).split(' ');
                var query = args[0];
                var attrMatch = query.match(/^\[(.+)\]$/);
                var attr = attrMatch && attrMatch[1];
                var getValue = getValueGetter(attr, query);
                var parser = Isotope.sortDataParsers[args[1]];
                sorter = parser ? function(elem) {
                    return elem && parser(getValue(elem));
                } : function(elem) {
                    return elem && getValue(elem);
                };
                return sorter;
            }

            function getValueGetter(attr, query) {
                if (attr) {
                    return function getAttribute(elem) {
                        return elem.getAttribute(attr);
                    };
                }
                return function getChildText(elem) {
                    var child = elem.querySelector(query);
                    return child && child.textContent;
                };
            }
            return mungeSorter;
        })();
        Isotope.sortDataParsers = {
            'parseInt': function(val) {
                return parseInt(val, 10);
            },
            'parseFloat': function(val) {
                return parseFloat(val);
            }
        };
        proto._sort = function() {
            if (!this.options.sortBy) {
                return;
            }
            var sortBys = utils.makeArray(this.options.sortBy);
            if (!this._getIsSameSortBy(sortBys)) {
                this.sortHistory = sortBys.concat(this.sortHistory);
            }
            var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(itemSorter);
        };
        proto._getIsSameSortBy = function(sortBys) {
            for (var i = 0; i < sortBys.length; i++) {
                if (sortBys[i] != this.sortHistory[i]) {
                    return false;
                }
            }
            return true;
        };

        function getItemSorter(sortBys, sortAsc) {
            return function sorter(itemA, itemB) {
                for (var i = 0; i < sortBys.length; i++) {
                    var sortBy = sortBys[i];
                    var a = itemA.sortData[sortBy];
                    var b = itemB.sortData[sortBy];
                    if (a > b || a < b) {
                        var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
                        var direction = isAscending ? 1 : -1;
                        return (a > b ? 1 : -1) * direction;
                    }
                }
                return 0;
            };
        }
        proto._mode = function() {
            var layoutMode = this.options.layoutMode;
            var mode = this.modes[layoutMode];
            if (!mode) {
                throw new Error('No layout mode: ' + layoutMode);
            }
            mode.options = this.options[layoutMode];
            return mode;
        };
        proto._resetLayout = function() {
            Outlayer.prototype._resetLayout.call(this);
            this._mode()._resetLayout();
        };
        proto._getItemLayoutPosition = function(item) {
            return this._mode()._getItemLayoutPosition(item);
        };
        proto._manageStamp = function(stamp) {
            this._mode()._manageStamp(stamp);
        };
        proto._getContainerSize = function() {
            return this._mode()._getContainerSize();
        };
        proto.needsResizeLayout = function() {
            return this._mode().needsResizeLayout();
        };
        proto.appended = function(elems) {
            var items = this.addItems(elems);
            if (!items.length) {
                return;
            }
            var filteredItems = this._filterRevealAdded(items);
            this.filteredItems = this.filteredItems.concat(filteredItems);
        };
        proto.prepended = function(elems) {
            var items = this._itemize(elems);
            if (!items.length) {
                return;
            }
            this._resetLayout();
            this._manageStamps();
            var filteredItems = this._filterRevealAdded(items);
            this.layoutItems(this.filteredItems);
            this.filteredItems = filteredItems.concat(this.filteredItems);
            this.items = items.concat(this.items);
        };
        proto._filterRevealAdded = function(items) {
            var filtered = this._filter(items);
            this.hide(filtered.needHide);
            this.reveal(filtered.matches);
            this.layoutItems(filtered.matches, true);
            return filtered.matches;
        };
        proto.insert = function(elems) {
            var items = this.addItems(elems);
            if (!items.length) {
                return;
            }
            var i, item;
            var len = items.length;
            for (i = 0; i < len; i++) {
                item = items[i];
                this.element.appendChild(item.element);
            }
            var filteredInsertItems = this._filter(items).matches;
            for (i = 0; i < len; i++) {
                items[i].isLayoutInstant = true;
            }
            this.arrange();
            for (i = 0; i < len; i++) {
                delete items[i].isLayoutInstant;
            }
            this.reveal(filteredInsertItems);
        };
        var _remove = proto.remove;
        proto.remove = function(elems) {
            elems = utils.makeArray(elems);
            var removeItems = this.getItems(elems);
            _remove.call(this, elems);
            var len = removeItems && removeItems.length;
            for (var i = 0; len && i < len; i++) {
                var item = removeItems[i];
                utils.removeFrom(this.filteredItems, item);
            }
        };
        proto.shuffle = function() {
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                item.sortData.random = Math.random();
            }
            this.options.sortBy = 'random';
            this._sort();
            this._layout();
        };
        proto._noTransition = function(fn, args) {
            var transitionDuration = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var returnValue = fn.apply(this, args);
            this.options.transitionDuration = transitionDuration;
            return returnValue;
        };
        proto.getFilteredItemElements = function() {
            return this.filteredItems.map(function(item) {
                return item.element;
            });
        };
        return Isotope;
    }));
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
     * getSize v2.0.2
     * measure size of elements
     * MIT license
     */
    (function(window, factory) {
        'use strict';
        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return factory();
            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module == 'object' && module.exports) {
            module.exports = factory();
        } else {
            window.getSize = factory();
        }
    })(window, function factory() {
        'use strict';

        function getStyleSize(value) {
            var num = parseFloat(value);
            var isValid = value.indexOf('%') == -1 && !isNaN(num);
            return isValid && num;
        }

        function noop() {}
        var logError = typeof console == 'undefined' ? noop : function(message) {
            console.error(message);
        };
        var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
        var measurementsLength = measurements.length;

        function getZeroSize() {
            var size = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            };
            for (var i = 0; i < measurementsLength; i++) {
                var measurement = measurements[i];
                size[measurement] = 0;
            }
            return size;
        }

        function getStyle(elem) {
            var style = getComputedStyle(elem);
            if (!style) {
                logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See http://bit.ly/getsizebug1');
            }
            return style;
        }
        var isSetup = false;
        var isBoxSizeOuter;

        function setup() {
            if (isSetup) {
                return;
            }
            isSetup = true;
            var div = document.createElement('div');
            div.style.width = '200px';
            div.style.padding = '1px 2px 3px 4px';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px 2px 3px 4px';
            div.style.boxSizing = 'border-box';
            var body = document.body || document.documentElement;
            body.appendChild(div);
            var style = getStyle(div);
            getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize(style.width) == 200;
            body.removeChild(div);
        }

        function getSize(elem) {
            setup();
            if (typeof elem == 'string') {
                elem = document.querySelector(elem);
            }
            if (!elem || typeof elem != 'object' || !elem.nodeType) {
                return;
            }
            var style = getStyle(elem);
            if (style.display == 'none') {
                return getZeroSize();
            }
            var size = {};
            size.width = elem.offsetWidth;
            size.height = elem.offsetHeight;
            var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
            for (var i = 0; i < measurementsLength; i++) {
                var measurement = measurements[i];
                var value = style[measurement];
                var num = parseFloat(value);
                size[measurement] = !isNaN(num) ? num : 0;
            }
            var paddingWidth = size.paddingLeft + size.paddingRight;
            var paddingHeight = size.paddingTop + size.paddingBottom;
            var marginWidth = size.marginLeft + size.marginRight;
            var marginHeight = size.marginTop + size.marginBottom;
            var borderWidth = size.borderLeftWidth + size.borderRightWidth;
            var borderHeight = size.borderTopWidth + size.borderBottomWidth;
            var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
            var styleWidth = getStyleSize(style.width);
            if (styleWidth !== false) {
                size.width = styleWidth +
                    (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
            }
            var styleHeight = getStyleSize(style.height);
            if (styleHeight !== false) {
                size.height = styleHeight +
                    (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
            }
            size.innerWidth = size.width - (paddingWidth + borderWidth);
            size.innerHeight = size.height - (paddingHeight + borderHeight);
            size.outerWidth = size.width + marginWidth;
            size.outerHeight = size.height + marginHeight;
            return size;
        }
        return getSize;
    });
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(window, factory) {
        'use strict';
        if (true) {
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module == 'object' && module.exports) {
            module.exports = factory();
        } else {
            window.matchesSelector = factory();
        }
    }(window, function factory() {
        'use strict';
        var matchesMethod = (function() {
            var ElemProto = window.Element.prototype;
            if (ElemProto.matches) {
                return 'matches';
            }
            if (ElemProto.matchesSelector) {
                return 'matchesSelector';
            }
            var prefixes = ['webkit', 'moz', 'ms', 'o'];
            for (var i = 0; i < prefixes.length; i++) {
                var prefix = prefixes[i];
                var method = prefix + 'MatchesSelector';
                if (ElemProto[method]) {
                    return method;
                }
            }
        })();
        return function matchesSelector(elem, selector) {
            return elem[matchesMethod](selector);
        };
    }));
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(window, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(30)], __WEBPACK_AMD_DEFINE_RESULT__ = function(matchesSelector) {
                return factory(window, matchesSelector);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module == 'object' && module.exports) {
            module.exports = factory(window, require('desandro-matches-selector'));
        } else {
            window.fizzyUIUtils = factory(window, window.matchesSelector);
        }
    }(window, function factory(window, matchesSelector) {
        'use strict';
        var utils = {};
        utils.extend = function(a, b) {
            for (var prop in b) {
                a[prop] = b[prop];
            }
            return a;
        };
        utils.modulo = function(num, div) {
            return ((num % div) + div) % div;
        };
        utils.makeArray = function(obj) {
            var ary = [];
            if (Array.isArray(obj)) {
                ary = obj;
            } else if (obj && typeof obj == 'object' && typeof obj.length == 'number') {
                for (var i = 0; i < obj.length; i++) {
                    ary.push(obj[i]);
                }
            } else {
                ary.push(obj);
            }
            return ary;
        };
        utils.removeFrom = function(ary, obj) {
            var index = ary.indexOf(obj);
            if (index != -1) {
                ary.splice(index, 1);
            }
        };
        utils.getParent = function(elem, selector) {
            while (elem.parentNode && elem != document.body) {
                elem = elem.parentNode;
                if (matchesSelector(elem, selector)) {
                    return elem;
                }
            }
        };
        utils.getQueryElement = function(elem) {
            if (typeof elem == 'string') {
                return document.querySelector(elem);
            }
            return elem;
        };
        utils.handleEvent = function(event) {
            var method = 'on' + event.type;
            if (this[method]) {
                this[method](event);
            }
        };
        utils.filterFindElements = function(elems, selector) {
            elems = utils.makeArray(elems);
            var ffElems = [];
            elems.forEach(function(elem) {
                if (!(elem instanceof HTMLElement)) {
                    return;
                }
                if (!selector) {
                    ffElems.push(elem);
                    return;
                }
                if (matchesSelector(elem, selector)) {
                    ffElems.push(elem);
                }
                var childElems = elem.querySelectorAll(selector);
                for (var i = 0; i < childElems.length; i++) {
                    ffElems.push(childElems[i]);
                }
            });
            return ffElems;
        };
        utils.debounceMethod = function(_class, methodName, threshold) {
            var method = _class.prototype[methodName];
            var timeoutName = methodName + 'Timeout';
            _class.prototype[methodName] = function() {
                var timeout = this[timeoutName];
                if (timeout) {
                    clearTimeout(timeout);
                }
                var args = arguments;
                var _this = this;
                this[timeoutName] = setTimeout(function() {
                    method.apply(_this, args);
                    delete _this[timeoutName];
                }, threshold || 100);
            };
        };
        utils.docReady = function(callback) {
            var readyState = document.readyState;
            if (readyState == 'complete' || readyState == 'interactive') {
                setTimeout(callback);
            } else {
                document.addEventListener('DOMContentLoaded', callback);
            }
        };
        utils.toDashed = function(str) {
            return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
                return $1 + '-' + $2;
            }).toLowerCase();
        };
        var console = window.console;
        utils.htmlInit = function(WidgetClass, namespace) {
            utils.docReady(function() {
                var dashedNamespace = utils.toDashed(namespace);
                var dataAttr = 'data-' + dashedNamespace;
                var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
                var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
                var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
                var dataOptionsAttr = dataAttr + '-options';
                var jQuery = window.jQuery;
                elems.forEach(function(elem) {
                    var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                    var options;
                    try {
                        options = attr && JSON.parse(attr);
                    } catch (error) {
                        if (console) {
                            console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
                        }
                        return;
                    }
                    var instance = new WidgetClass(elem, options);
                    if (jQuery) {
                        jQuery.data(elem, namespace, instance);
                    }
                });
            });
        };
        return utils;
    }));
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
     * Outlayer v2.1.1
     * the brains and guts of a layout library
     * MIT license
     */
    (function(window, factory) {
        'use strict';
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(33), __webpack_require__(29), __webpack_require__(31), __webpack_require__(34)], __WEBPACK_AMD_DEFINE_RESULT__ = function(EvEmitter, getSize, utils, Item) {
                return factory(window, EvEmitter, getSize, utils, Item);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module == 'object' && module.exports) {
            module.exports = factory(window, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./item'));
        } else {
            window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
        }
    }(window, function factory(window, EvEmitter, getSize, utils, Item) {
        'use strict';
        var console = window.console;
        var jQuery = window.jQuery;
        var noop = function() {};
        var GUID = 0;
        var instances = {};

        function Outlayer(element, options) {
            var queryElement = utils.getQueryElement(element);
            if (!queryElement) {
                if (console) {
                    console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
                }
                return;
            }
            this.element = queryElement;
            if (jQuery) {
                this.$element = jQuery(this.element);
            }
            this.options = utils.extend({}, this.constructor.defaults);
            this.option(options);
            var id = ++GUID;
            this.element.outlayerGUID = id;
            instances[id] = this;
            this._create();
            var isInitLayout = this._getOption('initLayout');
            if (isInitLayout) {
                this.layout();
            }
        }
        Outlayer.namespace = 'outlayer';
        Outlayer.Item = Item;
        Outlayer.defaults = {
            containerStyle: {
                position: 'relative'
            },
            initLayout: true,
            originLeft: true,
            originTop: true,
            resize: true,
            resizeContainer: true,
            transitionDuration: '0.4s',
            hiddenStyle: {
                opacity: 0,
                transform: 'scale(0.001)'
            },
            visibleStyle: {
                opacity: 1,
                transform: 'scale(1)'
            }
        };
        var proto = Outlayer.prototype;
        utils.extend(proto, EvEmitter.prototype);
        proto.option = function(opts) {
            utils.extend(this.options, opts);
        };
        proto._getOption = function(option) {
            var oldOption = this.constructor.compatOptions[option];
            return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
        };
        Outlayer.compatOptions = {
            initLayout: 'isInitLayout',
            horizontal: 'isHorizontal',
            layoutInstant: 'isLayoutInstant',
            originLeft: 'isOriginLeft',
            originTop: 'isOriginTop',
            resize: 'isResizeBound',
            resizeContainer: 'isResizingContainer'
        };
        proto._create = function() {
            this.reloadItems();
            this.stamps = [];
            this.stamp(this.options.stamp);
            utils.extend(this.element.style, this.options.containerStyle);
            var canBindResize = this._getOption('resize');
            if (canBindResize) {
                this.bindResize();
            }
        };
        proto.reloadItems = function() {
            this.items = this._itemize(this.element.children);
        };
        proto._itemize = function(elems) {
            var itemElems = this._filterFindItemElements(elems);
            var Item = this.constructor.Item;
            var items = [];
            for (var i = 0; i < itemElems.length; i++) {
                var elem = itemElems[i];
                var item = new Item(elem, this);
                items.push(item);
            }
            return items;
        };
        proto._filterFindItemElements = function(elems) {
            return utils.filterFindElements(elems, this.options.itemSelector);
        };
        proto.getItemElements = function() {
            return this.items.map(function(item) {
                return item.element;
            });
        };
        proto.layout = function() {
            this._resetLayout();
            this._manageStamps();
            var layoutInstant = this._getOption('layoutInstant');
            var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, isInstant);
            this._isLayoutInited = true;
        };
        proto._init = proto.layout;
        proto._resetLayout = function() {
            this.getSize();
        };
        proto.getSize = function() {
            this.size = getSize(this.element);
        };
        proto._getMeasurement = function(measurement, size) {
            var option = this.options[measurement];
            var elem;
            if (!option) {
                this[measurement] = 0;
            } else {
                if (typeof option == 'string') {
                    elem = this.element.querySelector(option);
                } else if (option instanceof HTMLElement) {
                    elem = option;
                }
                this[measurement] = elem ? getSize(elem)[size] : option;
            }
        };
        proto.layoutItems = function(items, isInstant) {
            items = this._getItemsForLayout(items);
            this._layoutItems(items, isInstant);
            this._postLayout();
        };
        proto._getItemsForLayout = function(items) {
            return items.filter(function(item) {
                return !item.isIgnored;
            });
        };
        proto._layoutItems = function(items, isInstant) {
            this._emitCompleteOnItems('layout', items);
            if (!items || !items.length) {
                return;
            }
            var queue = [];
            items.forEach(function(item) {
                var position = this._getItemLayoutPosition(item);
                position.item = item;
                position.isInstant = isInstant || item.isLayoutInstant;
                queue.push(position);
            }, this);
            this._processLayoutQueue(queue);
        };
        proto._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            };
        };
        proto._processLayoutQueue = function(queue) {
            this.updateStagger();
            queue.forEach(function(obj, i) {
                this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
            }, this);
        };
        proto.updateStagger = function() {
            var stagger = this.options.stagger;
            if (stagger === null || stagger === undefined) {
                this.stagger = 0;
                return;
            }
            this.stagger = getMilliseconds(stagger);
            return this.stagger;
        };
        proto._positionItem = function(item, x, y, isInstant, i) {
            if (isInstant) {
                item.goTo(x, y);
            } else {
                item.stagger(i * this.stagger);
                item.moveTo(x, y);
            }
        };
        proto._postLayout = function() {
            this.resizeContainer();
        };
        proto.resizeContainer = function() {
            var isResizingContainer = this._getOption('resizeContainer');
            if (!isResizingContainer) {
                return;
            }
            var size = this._getContainerSize();
            if (size) {
                this._setContainerMeasure(size.width, true);
                this._setContainerMeasure(size.height, false);
            }
        };
        proto._getContainerSize = noop;
        proto._setContainerMeasure = function(measure, isWidth) {
            if (measure === undefined) {
                return;
            }
            var elemSize = this.size;
            if (elemSize.isBorderBox) {
                measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
                    elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop +
                    elemSize.borderTopWidth + elemSize.borderBottomWidth;
            }
            measure = Math.max(measure, 0);
            this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
        };
        proto._emitCompleteOnItems = function(eventName, items) {
            var _this = this;

            function onComplete() {
                _this.dispatchEvent(eventName + 'Complete', null, [items]);
            }
            var count = items.length;
            if (!items || !count) {
                onComplete();
                return;
            }
            var doneCount = 0;

            function tick() {
                doneCount++;
                if (doneCount == count) {
                    onComplete();
                }
            }
            items.forEach(function(item) {
                item.once(eventName, tick);
            });
        };
        proto.dispatchEvent = function(type, event, args) {
            var emitArgs = event ? [event].concat(args) : args;
            this.emitEvent(type, emitArgs);
            if (jQuery) {
                this.$element = this.$element || jQuery(this.element);
                if (event) {
                    var $event = jQuery.Event(event);
                    $event.type = type;
                    this.$element.trigger($event, args);
                } else {
                    this.$element.trigger(type, args);
                }
            }
        };
        proto.ignore = function(elem) {
            var item = this.getItem(elem);
            if (item) {
                item.isIgnored = true;
            }
        };
        proto.unignore = function(elem) {
            var item = this.getItem(elem);
            if (item) {
                delete item.isIgnored;
            }
        };
        proto.stamp = function(elems) {
            elems = this._find(elems);
            if (!elems) {
                return;
            }
            this.stamps = this.stamps.concat(elems);
            elems.forEach(this.ignore, this);
        };
        proto.unstamp = function(elems) {
            elems = this._find(elems);
            if (!elems) {
                return;
            }
            elems.forEach(function(elem) {
                utils.removeFrom(this.stamps, elem);
                this.unignore(elem);
            }, this);
        };
        proto._find = function(elems) {
            if (!elems) {
                return;
            }
            if (typeof elems == 'string') {
                elems = this.element.querySelectorAll(elems);
            }
            elems = utils.makeArray(elems);
            return elems;
        };
        proto._manageStamps = function() {
            if (!this.stamps || !this.stamps.length) {
                return;
            }
            this._getBoundingRect();
            this.stamps.forEach(this._manageStamp, this);
        };
        proto._getBoundingRect = function() {
            var boundingRect = this.element.getBoundingClientRect();
            var size = this.size;
            this._boundingRect = {
                left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
                top: boundingRect.top + size.paddingTop + size.borderTopWidth,
                right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
                bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
            };
        };
        proto._manageStamp = noop;
        proto._getElementOffset = function(elem) {
            var boundingRect = elem.getBoundingClientRect();
            var thisRect = this._boundingRect;
            var size = getSize(elem);
            var offset = {
                left: boundingRect.left - thisRect.left - size.marginLeft,
                top: boundingRect.top - thisRect.top - size.marginTop,
                right: thisRect.right - boundingRect.right - size.marginRight,
                bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
            };
            return offset;
        };
        proto.handleEvent = utils.handleEvent;
        proto.bindResize = function() {
            window.addEventListener('resize', this);
            this.isResizeBound = true;
        };
        proto.unbindResize = function() {
            window.removeEventListener('resize', this);
            this.isResizeBound = false;
        };
        proto.onresize = function() {
            this.resize();
        };
        utils.debounceMethod(Outlayer, 'onresize', 100);
        proto.resize = function() {
            if (!this.isResizeBound || !this.needsResizeLayout()) {
                return;
            }
            this.layout();
        };
        proto.needsResizeLayout = function() {
            var size = getSize(this.element);
            var hasSizes = this.size && size;
            return hasSizes && size.innerWidth !== this.size.innerWidth;
        };
        proto.addItems = function(elems) {
            var items = this._itemize(elems);
            if (items.length) {
                this.items = this.items.concat(items);
            }
            return items;
        };
        proto.appended = function(elems) {
            var items = this.addItems(elems);
            if (!items.length) {
                return;
            }
            this.layoutItems(items, true);
            this.reveal(items);
        };
        proto.prepended = function(elems) {
            var items = this._itemize(elems);
            if (!items.length) {
                return;
            }
            var previousItems = this.items.slice(0);
            this.items = items.concat(previousItems);
            this._resetLayout();
            this._manageStamps();
            this.layoutItems(items, true);
            this.reveal(items);
            this.layoutItems(previousItems);
        };
        proto.reveal = function(items) {
            this._emitCompleteOnItems('reveal', items);
            if (!items || !items.length) {
                return;
            }
            var stagger = this.updateStagger();
            items.forEach(function(item, i) {
                item.stagger(i * stagger);
                item.reveal();
            });
        };
        proto.hide = function(items) {
            this._emitCompleteOnItems('hide', items);
            if (!items || !items.length) {
                return;
            }
            var stagger = this.updateStagger();
            items.forEach(function(item, i) {
                item.stagger(i * stagger);
                item.hide();
            });
        };
        proto.revealItemElements = function(elems) {
            var items = this.getItems(elems);
            this.reveal(items);
        };
        proto.hideItemElements = function(elems) {
            var items = this.getItems(elems);
            this.hide(items);
        };
        proto.getItem = function(elem) {
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (item.element == elem) {
                    return item;
                }
            }
        };
        proto.getItems = function(elems) {
            elems = utils.makeArray(elems);
            var items = [];
            elems.forEach(function(elem) {
                var item = this.getItem(elem);
                if (item) {
                    items.push(item);
                }
            }, this);
            return items;
        };
        proto.remove = function(elems) {
            var removeItems = this.getItems(elems);
            this._emitCompleteOnItems('remove', removeItems);
            if (!removeItems || !removeItems.length) {
                return;
            }
            removeItems.forEach(function(item) {
                item.remove();
                utils.removeFrom(this.items, item);
            }, this);
        };
        proto.destroy = function() {
            var style = this.element.style;
            style.height = '';
            style.position = '';
            style.width = '';
            this.items.forEach(function(item) {
                item.destroy();
            });
            this.unbindResize();
            var id = this.element.outlayerGUID;
            delete instances[id];
            delete this.element.outlayerGUID;
            if (jQuery) {
                jQuery.removeData(this.element, this.constructor.namespace);
            }
        };
        Outlayer.data = function(elem) {
            elem = utils.getQueryElement(elem);
            var id = elem && elem.outlayerGUID;
            return id && instances[id];
        };
        Outlayer.create = function(namespace, options) {
            var Layout = subclass(Outlayer);
            Layout.defaults = utils.extend({}, Outlayer.defaults);
            utils.extend(Layout.defaults, options);
            Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
            Layout.namespace = namespace;
            Layout.data = Outlayer.data;
            Layout.Item = subclass(Item);
            utils.htmlInit(Layout, namespace);
            if (jQuery && jQuery.bridget) {
                jQuery.bridget(namespace, Layout);
            }
            return Layout;
        };

        function subclass(Parent) {
            function SubClass() {
                Parent.apply(this, arguments);
            }
            SubClass.prototype = Object.create(Parent.prototype);
            SubClass.prototype.constructor = SubClass;
            return SubClass;
        }
        var msUnits = {
            ms: 1,
            s: 1000
        };

        function getMilliseconds(time) {
            if (typeof time == 'number') {
                return time;
            }
            var matches = time.match(/(^\d*\.?\d*)(\w*)/);
            var num = matches && matches[1];
            var unit = matches && matches[2];
            if (!num.length) {
                return 0;
            }
            num = parseFloat(num);
            var mult = msUnits[unit] || 1;
            return num * mult;
        }
        Outlayer.Item = Item;
        return Outlayer;
    }));
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(global, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module == 'object' && module.exports) {
            module.exports = factory();
        } else {
            global.EvEmitter = factory();
        }
    }(typeof window != 'undefined' ? window : this, function() {
        "use strict";

        function EvEmitter() {}
        var proto = EvEmitter.prototype;
        proto.on = function(eventName, listener) {
            if (!eventName || !listener) {
                return;
            }
            var events = this._events = this._events || {};
            var listeners = events[eventName] = events[eventName] || [];
            if (listeners.indexOf(listener) == -1) {
                listeners.push(listener);
            }
            return this;
        };
        proto.once = function(eventName, listener) {
            if (!eventName || !listener) {
                return;
            }
            this.on(eventName, listener);
            var onceEvents = this._onceEvents = this._onceEvents || {};
            var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
            onceListeners[listener] = true;
            return this;
        };
        proto.off = function(eventName, listener) {
            var listeners = this._events && this._events[eventName];
            if (!listeners || !listeners.length) {
                return;
            }
            var index = listeners.indexOf(listener);
            if (index != -1) {
                listeners.splice(index, 1);
            }
            return this;
        };
        proto.emitEvent = function(eventName, args) {
            var listeners = this._events && this._events[eventName];
            if (!listeners || !listeners.length) {
                return;
            }
            listeners = listeners.slice(0);
            args = args || [];
            var onceListeners = this._onceEvents && this._onceEvents[eventName];
            for (var i = 0; i < listeners.length; i++) {
                var listener = listeners[i]
                var isOnce = onceListeners && onceListeners[listener];
                if (isOnce) {
                    this.off(eventName, listener);
                    delete onceListeners[listener];
                }
                listener.apply(this, args);
            }
            return this;
        };
        proto.allOff = function() {
            delete this._events;
            delete this._onceEvents;
        };
        return EvEmitter;
    }));
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(window, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(33), __webpack_require__(29)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module == 'object' && module.exports) {
            module.exports = factory(require('ev-emitter'), require('get-size'));
        } else {
            window.Outlayer = {};
            window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
        }
    }(window, function factory(EvEmitter, getSize) {
        'use strict';

        function isEmptyObj(obj) {
            for (var prop in obj) {
                return false;
            }
            prop = null;
            return true;
        }
        var docElemStyle = document.documentElement.style;
        var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
        var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
        var transitionEndEvent = {
            WebkitTransition: 'webkitTransitionEnd',
            transition: 'transitionend'
        }[transitionProperty];
        var vendorProperties = {
            transform: transformProperty,
            transition: transitionProperty,
            transitionDuration: transitionProperty + 'Duration',
            transitionProperty: transitionProperty + 'Property',
            transitionDelay: transitionProperty + 'Delay'
        };

        function Item(element, layout) {
            if (!element) {
                return;
            }
            this.element = element;
            this.layout = layout;
            this.position = {
                x: 0,
                y: 0
            };
            this._create();
        }
        var proto = Item.prototype = Object.create(EvEmitter.prototype);
        proto.constructor = Item;
        proto._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            };
            this.css({
                position: 'absolute'
            });
        };
        proto.handleEvent = function(event) {
            var method = 'on' + event.type;
            if (this[method]) {
                this[method](event);
            }
        };
        proto.getSize = function() {
            this.size = getSize(this.element);
        };
        proto.css = function(style) {
            var elemStyle = this.element.style;
            for (var prop in style) {
                var supportedProp = vendorProperties[prop] || prop;
                elemStyle[supportedProp] = style[prop];
            }
        };
        proto.getPosition = function() {
            var style = getComputedStyle(this.element);
            var isOriginLeft = this.layout._getOption('originLeft');
            var isOriginTop = this.layout._getOption('originTop');
            var xValue = style[isOriginLeft ? 'left' : 'right'];
            var yValue = style[isOriginTop ? 'top' : 'bottom'];
            var x = parseFloat(xValue);
            var y = parseFloat(yValue);
            var layoutSize = this.layout.size;
            if (xValue.indexOf('%') != -1) {
                x = (x / 100) * layoutSize.width;
            }
            if (yValue.indexOf('%') != -1) {
                y = (y / 100) * layoutSize.height;
            }
            x = isNaN(x) ? 0 : x;
            y = isNaN(y) ? 0 : y;
            x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
            y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
            this.position.x = x;
            this.position.y = y;
        };
        proto.layoutPosition = function() {
            var layoutSize = this.layout.size;
            var style = {};
            var isOriginLeft = this.layout._getOption('originLeft');
            var isOriginTop = this.layout._getOption('originTop');
            var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
            var xProperty = isOriginLeft ? 'left' : 'right';
            var xResetProperty = isOriginLeft ? 'right' : 'left';
            var x = this.position.x + layoutSize[xPadding];
            style[xProperty] = this.getXValue(x);
            style[xResetProperty] = '';
            var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
            var yProperty = isOriginTop ? 'top' : 'bottom';
            var yResetProperty = isOriginTop ? 'bottom' : 'top';
            var y = this.position.y + layoutSize[yPadding];
            style[yProperty] = this.getYValue(y);
            style[yResetProperty] = '';
            this.css(style);
            this.emitEvent('layout', [this]);
        };
        proto.getXValue = function(x) {
            var isHorizontal = this.layout._getOption('horizontal');
            return this.layout.options.percentPosition && !isHorizontal ? ((x / this.layout.size.width) * 100) + '%' : x + 'px';
        };
        proto.getYValue = function(y) {
            var isHorizontal = this.layout._getOption('horizontal');
            return this.layout.options.percentPosition && isHorizontal ? ((y / this.layout.size.height) * 100) + '%' : y + 'px';
        };
        proto._transitionTo = function(x, y) {
            this.getPosition();
            var curX = this.position.x;
            var curY = this.position.y;
            var didNotMove = x == this.position.x && y == this.position.y;
            this.setPosition(x, y);
            if (didNotMove && !this.isTransitioning) {
                this.layoutPosition();
                return;
            }
            var transX = x - curX;
            var transY = y - curY;
            var transitionStyle = {};
            transitionStyle.transform = this.getTranslate(transX, transY);
            this.transition({
                to: transitionStyle,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: true
            });
        };
        proto.getTranslate = function(x, y) {
            var isOriginLeft = this.layout._getOption('originLeft');
            var isOriginTop = this.layout._getOption('originTop');
            x = isOriginLeft ? x : -x;
            y = isOriginTop ? y : -y;
            return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
        };
        proto.goTo = function(x, y) {
            this.setPosition(x, y);
            this.layoutPosition();
        };
        proto.moveTo = proto._transitionTo;
        proto.setPosition = function(x, y) {
            this.position.x = parseFloat(x);
            this.position.y = parseFloat(y);
        };
        proto._nonTransition = function(args) {
            this.css(args.to);
            if (args.isCleaning) {
                this._removeStyles(args.to);
            }
            for (var prop in args.onTransitionEnd) {
                args.onTransitionEnd[prop].call(this);
            }
        };
        proto.transition = function(args) {
            if (!parseFloat(this.layout.options.transitionDuration)) {
                this._nonTransition(args);
                return;
            }
            var _transition = this._transn;
            for (var prop in args.onTransitionEnd) {
                _transition.onEnd[prop] = args.onTransitionEnd[prop];
            }
            for (prop in args.to) {
                _transition.ingProperties[prop] = true;
                if (args.isCleaning) {
                    _transition.clean[prop] = true;
                }
            }
            if (args.from) {
                this.css(args.from);
                var h = this.element.offsetHeight;
                h = null;
            }
            this.enableTransition(args.to);
            this.css(args.to);
            this.isTransitioning = true;
        };

        function toDashedAll(str) {
            return str.replace(/([A-Z])/g, function($1) {
                return '-' + $1.toLowerCase();
            });
        }
        var transitionProps = 'opacity,' + toDashedAll(transformProperty);
        proto.enableTransition = function() {
            if (this.isTransitioning) {
                return;
            }
            var duration = this.layout.options.transitionDuration;
            duration = typeof duration == 'number' ? duration + 'ms' : duration;
            this.css({
                transitionProperty: transitionProps,
                transitionDuration: duration,
                transitionDelay: this.staggerDelay || 0
            });
            this.element.addEventListener(transitionEndEvent, this, false);
        };
        proto.onwebkitTransitionEnd = function(event) {
            this.ontransitionend(event);
        };
        proto.onotransitionend = function(event) {
            this.ontransitionend(event);
        };
        var dashedVendorProperties = {
            '-webkit-transform': 'transform'
        };
        proto.ontransitionend = function(event) {
            if (event.target !== this.element) {
                return;
            }
            var _transition = this._transn;
            var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
            delete _transition.ingProperties[propertyName];
            if (isEmptyObj(_transition.ingProperties)) {
                this.disableTransition();
            }
            if (propertyName in _transition.clean) {
                this.element.style[event.propertyName] = '';
                delete _transition.clean[propertyName];
            }
            if (propertyName in _transition.onEnd) {
                var onTransitionEnd = _transition.onEnd[propertyName];
                onTransitionEnd.call(this);
                delete _transition.onEnd[propertyName];
            }
            this.emitEvent('transitionEnd', [this]);
        };
        proto.disableTransition = function() {
            this.removeTransitionStyles();
            this.element.removeEventListener(transitionEndEvent, this, false);
            this.isTransitioning = false;
        };
        proto._removeStyles = function(style) {
            var cleanStyle = {};
            for (var prop in style) {
                cleanStyle[prop] = '';
            }
            this.css(cleanStyle);
        };
        var cleanTransitionStyle = {
            transitionProperty: '',
            transitionDuration: '',
            transitionDelay: ''
        };
        proto.removeTransitionStyles = function() {
            this.css(cleanTransitionStyle);
        };
        proto.stagger = function(delay) {
            delay = isNaN(delay) ? 0 : delay;
            this.staggerDelay = delay + 'ms';
        };
        proto.removeElem = function() {
            this.element.parentNode.removeChild(this.element);
            this.css({
                display: ''
            });
            this.emitEvent('remove', [this]);
        };
        proto.remove = function() {
            if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
                this.removeElem();
                return;
            }
            this.once('transitionEnd', function() {
                this.removeElem();
            });
            this.hide();
        };
        proto.reveal = function() {
            delete this.isHidden;
            this.css({
                display: ''
            });
            var options = this.layout.options;
            var onTransitionEnd = {};
            var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
            onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
            this.transition({
                from: options.hiddenStyle,
                to: options.visibleStyle,
                isCleaning: true,
                onTransitionEnd: onTransitionEnd
            });
        };
        proto.onRevealTransitionEnd = function() {
            if (!this.isHidden) {
                this.emitEvent('reveal');
            }
        };
        proto.getHideRevealTransitionEndProperty = function(styleProperty) {
            var optionStyle = this.layout.options[styleProperty];
            if (optionStyle.opacity) {
                return 'opacity';
            }
            for (var prop in optionStyle) {
                return prop;
            }
        };
        proto.hide = function() {
            this.isHidden = true;
            this.css({
                display: ''
            });
            var options = this.layout.options;
            var onTransitionEnd = {};
            var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
            onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
            this.transition({
                from: options.visibleStyle,
                to: options.hiddenStyle,
                isCleaning: true,
                onTransitionEnd: onTransitionEnd
            });
        };
        proto.onHideTransitionEnd = function() {
            if (this.isHidden) {
                this.css({
                    display: 'none'
                });
                this.emitEvent('hide');
            }
        };
        proto.destroy = function() {
            this.css({
                position: '',
                left: '',
                right: '',
                top: '',
                bottom: '',
                transition: '',
                transform: ''
            });
        };
        return Item;
    }));
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(window, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(29), __webpack_require__(32)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module == 'object' && module.exports) {
            module.exports = factory(require('get-size'), require('outlayer'));
        } else {
            window.Isotope = window.Isotope || {};
            window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
        }
    }(window, function factory(getSize, Outlayer) {
        'use strict';

        function LayoutMode(isotope) {
            this.isotope = isotope;
            if (isotope) {
                this.options = isotope.options[this.namespace];
                this.element = isotope.element;
                this.items = isotope.filteredItems;
                this.size = isotope.size;
            }
        }
        var proto = LayoutMode.prototype;
        var facadeMethods = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout', '_getOption'];
        facadeMethods.forEach(function(methodName) {
            proto[methodName] = function() {
                return Outlayer.prototype[methodName].apply(this.isotope, arguments);
            };
        });
        proto.needsVerticalResizeLayout = function() {
            var size = getSize(this.isotope.element);
            var hasSizes = this.isotope.size && size;
            return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
        };
        proto._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments);
        };
        proto.getColumnWidth = function() {
            this.getSegmentSize('column', 'Width');
        };
        proto.getRowHeight = function() {
            this.getSegmentSize('row', 'Height');
        };
        proto.getSegmentSize = function(segment, size) {
            var segmentName = segment + size;
            var outerSize = 'outer' + size;
            this._getMeasurement(segmentName, outerSize);
            if (this[segmentName]) {
                return;
            }
            var firstItemSize = this.getFirstItemSize();
            this[segmentName] = firstItemSize && firstItemSize[outerSize] || this.isotope.size['inner' + size];
        };
        proto.getFirstItemSize = function() {
            var firstItem = this.isotope.filteredItems[0];
            return firstItem && firstItem.element && getSize(firstItem.element);
        };
        proto.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments);
        };
        proto.getSize = function() {
            this.isotope.getSize();
            this.size = this.isotope.size;
        };
        LayoutMode.modes = {};
        LayoutMode.create = function(namespace, options) {
            function Mode() {
                LayoutMode.apply(this, arguments);
            }
            Mode.prototype = Object.create(proto);
            Mode.prototype.constructor = Mode;
            if (options) {
                Mode.options = options;
            }
            Mode.prototype.namespace = namespace;
            LayoutMode.modes[namespace] = Mode;
            return Mode;
        };
        return LayoutMode;
    }));
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
     * Masonry layout mode
     * sub-classes Masonry
     * https://masonry.desandro.com
     */
    (function(window, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(35), __webpack_require__(37)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module == 'object' && module.exports) {
            module.exports = factory(require('../layout-mode'), require('masonry-layout'));
        } else {
            factory(window.Isotope.LayoutMode, window.Masonry);
        }
    }(window, function factory(LayoutMode, Masonry) {
        'use strict';
        var MasonryMode = LayoutMode.create('masonry');
        var proto = MasonryMode.prototype;
        var keepModeMethods = {
            _getElementOffset: true,
            layout: true,
            _getMeasurement: true
        };
        for (var method in Masonry.prototype) {
            if (!keepModeMethods[method]) {
                proto[method] = Masonry.prototype[method];
            }
        }
        var measureColumns = proto.measureColumns;
        proto.measureColumns = function() {
            this.items = this.isotope.filteredItems;
            measureColumns.call(this);
        };
        var _getOption = proto._getOption;
        proto._getOption = function(option) {
            if (option == 'fitWidth') {
                return this.options.isFitWidth !== undefined ? this.options.isFitWidth : this.options.fitWidth;
            }
            return _getOption.apply(this.isotope, arguments);
        };
        return MasonryMode;
    }));
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
     * Masonry v4.2.1
     * Cascading grid layout library
     * https://masonry.desandro.com
     * MIT License
     * by David DeSandro
     */
    (function(window, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(32), __webpack_require__(29)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module == 'object' && module.exports) {
            module.exports = factory(require('outlayer'), require('get-size'));
        } else {
            window.Masonry = factory(window.Outlayer, window.getSize);
        }
    }(window, function factory(Outlayer, getSize) {
        'use strict';
        var Masonry = Outlayer.create('masonry');
        Masonry.compatOptions.fitWidth = 'isFitWidth';
        var proto = Masonry.prototype;
        proto._resetLayout = function() {
            this.getSize();
            this._getMeasurement('columnWidth', 'outerWidth');
            this._getMeasurement('gutter', 'outerWidth');
            this.measureColumns();
            this.colYs = [];
            for (var i = 0; i < this.cols; i++) {
                this.colYs.push(0);
            }
            this.maxY = 0;
            this.horizontalColIndex = 0;
        };
        proto.measureColumns = function() {
            this.getContainerWidth();
            if (!this.columnWidth) {
                var firstItem = this.items[0];
                var firstItemElem = firstItem && firstItem.element;
                this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth;
            }
            var columnWidth = this.columnWidth += this.gutter;
            var containerWidth = this.containerWidth + this.gutter;
            var cols = containerWidth / columnWidth;
            var excess = columnWidth - containerWidth % columnWidth;
            var mathMethod = excess && excess < 1 ? 'round' : 'floor';
            cols = Math[mathMethod](cols);
            this.cols = Math.max(cols, 1);
        };
        proto.getContainerWidth = function() {
            var isFitWidth = this._getOption('fitWidth');
            var container = isFitWidth ? this.element.parentNode : this.element;
            var size = getSize(container);
            this.containerWidth = size && size.innerWidth;
        };
        proto._getItemLayoutPosition = function(item) {
            item.getSize();
            var remainder = item.size.outerWidth % this.columnWidth;
            var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
            var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
            colSpan = Math.min(colSpan, this.cols);
            var colPosMethod = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition';
            var colPosition = this[colPosMethod](colSpan, item);
            var position = {
                x: this.columnWidth * colPosition.col,
                y: colPosition.y
            };
            var setHeight = colPosition.y + item.size.outerHeight;
            var setMax = colSpan + colPosition.col;
            for (var i = colPosition.col; i < setMax; i++) {
                this.colYs[i] = setHeight;
            }
            return position;
        };
        proto._getTopColPosition = function(colSpan) {
            var colGroup = this._getTopColGroup(colSpan);
            var minimumY = Math.min.apply(Math, colGroup);
            return {
                col: colGroup.indexOf(minimumY),
                y: minimumY,
            };
        };
        proto._getTopColGroup = function(colSpan) {
            if (colSpan < 2) {
                return this.colYs;
            }
            var colGroup = [];
            var groupCount = this.cols + 1 - colSpan;
            for (var i = 0; i < groupCount; i++) {
                colGroup[i] = this._getColGroupY(i, colSpan);
            }
            return colGroup;
        };
        proto._getColGroupY = function(col, colSpan) {
            if (colSpan < 2) {
                return this.colYs[col];
            }
            var groupColYs = this.colYs.slice(col, col + colSpan);
            return Math.max.apply(Math, groupColYs);
        };
        proto._getHorizontalColPosition = function(colSpan, item) {
            var col = this.horizontalColIndex % this.cols;
            var isOver = colSpan > 1 && col + colSpan > this.cols;
            col = isOver ? 0 : col;
            var hasSize = item.size.outerWidth && item.size.outerHeight;
            this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
            return {
                col: col,
                y: this._getColGroupY(col, colSpan),
            };
        };
        proto._manageStamp = function(stamp) {
            var stampSize = getSize(stamp);
            var offset = this._getElementOffset(stamp);
            var isOriginLeft = this._getOption('originLeft');
            var firstX = isOriginLeft ? offset.left : offset.right;
            var lastX = firstX + stampSize.outerWidth;
            var firstCol = Math.floor(firstX / this.columnWidth);
            firstCol = Math.max(0, firstCol);
            var lastCol = Math.floor(lastX / this.columnWidth);
            lastCol -= lastX % this.columnWidth ? 0 : 1;
            lastCol = Math.min(this.cols - 1, lastCol);
            var isOriginTop = this._getOption('originTop');
            var stampMaxY = (isOriginTop ? offset.top : offset.bottom) +
                stampSize.outerHeight;
            for (var i = firstCol; i <= lastCol; i++) {
                this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
            }
        };
        proto._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var size = {
                height: this.maxY
            };
            if (this._getOption('fitWidth')) {
                size.width = this._getContainerFitWidth();
            }
            return size;
        };
        proto._getContainerFitWidth = function() {
            var unusedCols = 0;
            var i = this.cols;
            while (--i) {
                if (this.colYs[i] !== 0) {
                    break;
                }
                unusedCols++;
            }
            return (this.cols - unusedCols) * this.columnWidth - this.gutter;
        };
        proto.needsResizeLayout = function() {
            var previousWidth = this.containerWidth;
            this.getContainerWidth();
            return previousWidth != this.containerWidth;
        };
        return Masonry;
    }));
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(window, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(35)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof exports == 'object') {
            module.exports = factory(require('../layout-mode'));
        } else {
            factory(window.Isotope.LayoutMode);
        }
    }(window, function factory(LayoutMode) {
        'use strict';
        var FitRows = LayoutMode.create('fitRows');
        var proto = FitRows.prototype;
        proto._resetLayout = function() {
            this.x = 0;
            this.y = 0;
            this.maxY = 0;
            this._getMeasurement('gutter', 'outerWidth');
        };
        proto._getItemLayoutPosition = function(item) {
            item.getSize();
            var itemWidth = item.size.outerWidth + this.gutter;
            var containerWidth = this.isotope.size.innerWidth + this.gutter;
            if (this.x !== 0 && itemWidth + this.x > containerWidth) {
                this.x = 0;
                this.y = this.maxY;
            }
            var position = {
                x: this.x,
                y: this.y
            };
            this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
            this.x += itemWidth;
            return position;
        };
        proto._getContainerSize = function() {
            return {
                height: this.maxY
            };
        };
        return FitRows;
    }));
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(window, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(35)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module == 'object' && module.exports) {
            module.exports = factory(require('../layout-mode'));
        } else {
            factory(window.Isotope.LayoutMode);
        }
    }(window, function factory(LayoutMode) {
        'use strict';
        var Vertical = LayoutMode.create('vertical', {
            horizontalAlignment: 0
        });
        var proto = Vertical.prototype;
        proto._resetLayout = function() {
            this.y = 0;
        };
        proto._getItemLayoutPosition = function(item) {
            item.getSize();
            var x = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
            var y = this.y;
            this.y += item.size.outerHeight;
            return {
                x: x,
                y: y
            };
        };
        proto._getContainerSize = function() {
            return {
                height: this.y
            };
        };
        return Vertical;
    }));
}), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(window, factory) {
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(32)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module == 'object' && module.exports) {
            module.exports = factory(require('outlayer'));
        } else {
            window.Isotope = window.Isotope || {};
            window.Isotope.Item = factory(window.Outlayer);
        }
    }(window, function factory(Outlayer) {
        'use strict';

        function Item() {
            Outlayer.Item.apply(this, arguments);
        }
        var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
        var _create = proto._create;
        proto._create = function() {
            this.id = this.layout.itemGUID++;
            _create.call(this);
            this.sortData = {};
        };
        proto.updateSortData = function() {
            if (this.isIgnored) {
                return;
            }
            this.sortData.id = this.id;
            this.sortData['original-order'] = this.id;
            this.sortData.random = Math.random();
            var getSortData = this.layout.options.getSortData;
            var sorters = this.layout._sorters;
            for (var key in getSortData) {
                var sorter = sorters[key];
                this.sortData[key] = sorter(this.element, this);
            }
        };
        var _destroy = proto.destroy;
        proto.destroy = function() {
            _destroy.apply(this, arguments);
            this.css({
                display: ''
            });
        };
        return Item;
    }));
}), (function(module, exports) {
    'use strict';
    /*!
     * Lightbox
     * ----------------
     * @authors TheHive™ Media
     * lightBox Toggle
     */
    var lightboxWrapper = document.querySelector('.lightbox-wrapper');
    var close = document.querySelector('.close');
    var lightBoxOpener = document.querySelector('.open-lightbox');
    var openLightBox = function openLightBox() {
        if (lightboxWrapper.dataset.lightbox === 'closed') {
            lightboxWrapper.setAttribute('data-lightbox', 'open');
        }
    };
    var shouldOpenPopUp = function shouldOpenPopUp() {
        var regex = new RegExp('[?&]payment=true');
        var results = regex.exec(window.location.href);
        if (results) {
            return true;
        }
        return null;
    };
    if (shouldOpenPopUp() === true) {
        openLightBox();
    }
    close.addEventListener('click', function() {
        if (lightboxWrapper.dataset.lightbox === 'open') {
            lightboxWrapper.setAttribute('data-lightbox', 'closed');
        }
    });
    lightBoxOpener.addEventListener('click', function() {
        openLightBox();
    });
}), (function(module, exports) {
    'use strict';
    var body = document.querySelector('body');
    var forms = document.querySelectorAll('.form-container');
    document.addEventListener('wpcf7mailsent', function(event) {
        var lang = document.documentElement.lang.substring(0, 2);
        var url = window.location.origin;
        if (lang === 'ru') {
            url = url + '/' + lang;
        }
        url = url + '/thank-you';
        window.location.assign(url);
    }, false);
    if (forms) {
        (function() {
            var _loop = function _loop(j) {
                var form = forms[j];
                var submitForm = form.querySelector('.button.submit');
                var formHolder = document.querySelector('.form-holder');
                submitForm.addEventListener('click', function(e) {
                    var errorIndex = 0;
                    var inputs = form.querySelectorAll('.form-control');
                    var numOfInputs = inputs.length;
                    var wrongInputs = numOfInputs;
                    for (var i = 0; i < numOfInputs; i++) {
                        var thisInput = inputs[i],
                            parent = findParent(thisInput, 'form-group'),
                            value = thisInput.value.trim();
                        if (thisInput.type == 'text' && !value || thisInput.type == 'textarea' && !value || thisInput.classList.contains('selectable') && !value || thisInput.classList.contains('select-box-lightbox') && !value || thisInput.type === 'tel' && !isNumber(value) || thisInput.type == 'email' && !isValidEmailAddress(value)) {
                            e.preventDefault();
                            parent.getAttribute('data-error') == 2 ? errorIndex = 1 : errorIndex = 2;
                            parent.setAttribute('data-error', errorIndex);
                        } else {
                            wrongInputs--;
                            parent.setAttribute('data-error', 0);
                        }
                    }
                });
            };
            for (var j = 0; j < forms.length; j++) {
                _loop(j);
            }
            var redirectPost = function redirectPost(data) {
                var form = document.createElement('form');
                document.body.appendChild(form);
                form.method = 'post';
                form.action = data.action;
                for (var name in data.inputs) {
                    var input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = name;
                    input.value = data.inputs[name];
                    form.appendChild(input);
                }
                form.submit();
            };
            var findParent = function findParent(el, cls) {
                while ((el = el.parentElement) && !el.classList.contains(cls)) {}
                return el;
            };
            var isNumber = function isNumber(number) {
                var pattern = /^[0-9]+$/;
                return pattern.test(number);
            };
            var isValidEmailAddress = function isValidEmailAddress(emailAddress) {
                var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
                return pattern.test(emailAddress);
            };
        })();
    }
}), (function(module, exports) {
    'use strict';
    /*!
     * Accordions
     * ----------------
     * @authors DXBee™ Media
     * .accordions
     ** .acorddion-item data-acc-state="open"
     *** .accordion-title
     *** .accordion-content
     */
    var accords = document.querySelector('.accordions');
    if (accords) {
        var toggleItem = function toggleItem(event) {
            var item = event.target;
            var itemClass = item.dataset.accState;
            var heightItem = item.querySelector('.accordion-content');
            for (var i = 0; i < accItem.length; i++) {
                accItem[i].setAttribute('data-acc-state', 'close');
            }
            if (itemClass !== 'open') {
                item.querySelector('.accordion-content').style.height = heightItem + 'px';
                event.target.setAttribute('data-acc-state', 'open');
            }
        };
        accords.addEventListener('click', toggleItem);
        var accItem = document.querySelectorAll('.acorddion-item');
        var accTitle = document.querySelectorAll('.accordion-title');
    }
}), (function(module, exports) {
    'use strict';
    var selectable = document.querySelectorAll('.selectable');
    var videoPanorama = document.querySelectorAll('.video-playback');
    console.log(videoPanorama);
    for (var i = 0; i < selectable.length; i++) {
        selectable[i].querySelector('option').setAttribute('disabled', '');
        selectable[i].querySelector('option').setAttribute('hidden', '');
        selectable[i].querySelector('option').setAttribute('value', ' ');
    }
    window.addEventListener('pageshow', function() {
        for (var _i = 0; _i < videoPanorama.length; _i++) {
            videoPanorama[_i].play();
        }
    });
})]);
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
                var d = c.data;
                if (d.secret || d.message || d.value)
                    if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                        var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                            k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                        for (e = 0; e < k.length; e++) k[e].style.display = "none";
                        for (e = 0; e < j.length; e++)
                            if (f = j[e], c.source === f.contentWindow) {
                                if (f.removeAttribute("style"), "height" === d.message) {
                                    if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                    else if (~~g < 200) g = 200;
                                    f.height = g
                                }
                                if ("link" === d.message)
                                    if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                        if (b.activeElement === f) a.top.location.href = d.value
                            } else;
                    }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);