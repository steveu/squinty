// Local Storage Options
//localStorage.persist = false;

//if (localStorage.persist) {

    /*Chibi v0.9.2, (C)2012 Kyle Barrow, MIT licensed*/(function(){"use strict";function Q(){var e;V=t;for(e=0;e<W[n];e+=1)W[e]();W=[]}function G(){var e;$=t;V||Q();for(e=0;e<X[n];e+=1)X[e]();X=[]}function Y(e,t){var r;for(r=t[n]-1;r>=0;r-=1)e(t[r])}function Z(e){return e[o](/-\w/g,function(e){return e.charAt(1)[u]()})}function et(e,t){return e[a]?e[a][Z(t)]:K[f]?K[f](e,l).getPropertyValue(t):l}function tt(e,t){return encodeURIComponent(e)[o](/%20/g,"+")+"="+encodeURIComponent(t)[o](/%20/g,"+")}function nt(r){var i=[],s=[],o=e,u;if(r)if(r.nodeType&&r.nodeType===1)i=[r];else if(typeof r=="object"||typeof r[n]=="number"&&typeof r.item===c){o=t;i=r}else if(typeof r===h){J[p]||(J[p]=function(e){var t,r=J[d]("head")[0],i,s=[],o;t=J[v]("STYLE");t.type="text/css";if(t[m]){t[m][g]=e+" {a:b}";r.appendChild(t);i=J[d]("*");for(o=0;o<i[n];o+=1)et(i[o],"a")==="b"&&s[y](i[o]);r[b](t)}return s});i=J[p](r)}if(o)s=i;else for(u=0;u<i[n];u+=1)s[u]=i[u];return s}function rt(e,t,n){try{e[w][Z(t)]=n}catch(r){}}function it(e){e[w][E]="";et(e,E)===S&&(e[w][E]="block")}function st(e){e=e.reverse();e[n]===1&&(e=e[0]);return e}function ot(e){var t="",r,i,s;if(e[x]===Object){for(r in e)if(e.hasOwnProperty(r))if(e[r][x]===Array)for(i=0;i<e[r][n];i+=1)t+=T+tt(r,e[r][i]);else t+=T+tt(r,e[r])}else Y(function(e){if(e[N]==="FORM")for(i=0;i<e.elements[n];i+=1){r=e.elements[i];if(!r.disabled)switch(r.type){case"button":case"image":case"file":case"submit":case"reset":break;case"select-one":r[n]>0&&(t+=T+tt(r[C],r[k]));break;case"select-multiple":for(s=0;s<r[n];s+=1)r[s][L]&&(t+=T+tt(r[C],r[s][k]));break;case A:case O:r[M]&&(t+=T+tt(r[C],r[k]));break;default:t+=T+tt(r[C],r[k])}}},e);return t[n]>0?t.substring(1):""}function ut(a){var f=nt(a);return{ready:function(e){e&&(V?e():W[y](e))},loaded:function(e){e&&($?e():X[y](e))},loop:function(e){typeof e===c&&Y(function(t){e(t)},f)},find:function(t){if(t){var r=[],i;switch(t){case"first":f[n]>0&&(f=[f.shift()]);break;case"last":f[n]>0&&(f=[f.pop()]);break;case"odd":case"even":for(i=t==="odd"?0:1;i<f[n];i+=2)r[y](f[i]);f=r}}return f[n]>0?f[n]===1?f[0]:f:e},hide:function(){Y(function(e){e[w][E]=S},f)},show:function(){Y(function(e){it(e)},f)},toggle:function(){Y(function(e){et(e,E)===S?it(e):e[w][E]=S},f)},remove:function(){var e=f[n];Y(function(e){try{e[_][b](e)}catch(t){}},f);f=[]},css:function(e,t){var r=[];Y(function(n){t?rt(n,e,t):n[w][Z(e)]?r[y](n[w][Z(e)]):et(n,e)?r[y](et(n,e)):r[y](l)},f);if(r[n]>0)return st(r)},cls:function(r,i){var s=[],u,a,l,c,h;if(r){u=r.split(/\s+/);i=i||o}Y(function(f){a=f[D];if(r){switch(i){case"add":f[D]=a+" "+r;break;case o:f[D]=r;break;case P:case H:case"remove":c=t;for(h=0;h<u[n];h+=1){l=new RegExp("\\b"+u[h]+"\\b","g");if(i===P){if(!a.match(l)){c=e;break}}else i===H?f[D]=f[D].match(l)?f[D][o](l,""):f[D]+" "+u[h]:f[D]=f[D][o](l,"")}i===P&&s[y](c)}f[D]=f[D][o](/^\s+|\s+$/g,"")}else s[y](a)},f);if(s[n]>0)return st(s)},html:function(e,t){var r=[],i,s;Y(function(n){if(t){i=J[v]("div");i[B]=e;while((s=i.lastChild)!==l)try{t==="before"?n[_][j](s,n):t==="after"&&n[_][j](s,n.nextSibling)}catch(o){break}}else e?n[B]=e:r[y](n[B])},f);if(r[n]>0)return st(r)},attr:function(e,t){var r=[];Y(function(n){if(e){e=e.toLowerCase();switch(e){case w:t?n[w][g]=t:n[w][g]?r[y](n[w][g]):r[y](l);break;case"class":t?n[D]=t:n[D]?r[y](n[D]):r[y](l);break;default:t?n.setAttribute(e,t):n[F](e)?r[y](n[F](e)):r[y](l)}}},f);if(r[n]>0)return st(r)},val:function(r){var i=[],s=[],o,u,a,c;typeof r===h&&(r=[r]);Y(function(f){if(r)switch(f[N]){case I:for(o=0;o<f[n];o+=1)for(u=0;u<r[n];u+=1){f[o][L]="";if(f[o][k]===r[u]){f[o][L]=L;break}}break;case q:switch(f.type){case A:case O:f[M]="";for(o=0;o<r[n];o+=1)if(f[k]===r[o]){f[M]=M;break}break;default:f[k]=r[0]}break;case R:case U:f[k]=r[0]}else switch(f[N]){case I:c=s[n];s[y]([]);for(o=0;o<f[n];o+=1)f[o][L]&&s[c][y](f[o][k]);switch(s[c][n]){case 0:s[c]=l;break;case 1:s[c]=s[c][0]}break;case q:switch(f.type){case A:f[M]?s[y](f[k]):s[y](l);break;case O:a=e;for(o=0;o<i[n];o+=1)if(i[o][0]===f[C]){f[M]&&(s[i[o][1]]=f[k]);a=t}if(!a){i[y]([f[C],s[n]]);f[M]?s[y](f[k]):s[y](l)}break;default:s[y](f[k])}break;case R:case U:s[y](f[k])}},f);if(s[n]>0)return st(s)},on:function(t,n,s){if(a===K||a===J)f=[a];Y(function(o){J[r]?s?o.removeEventListener(t,n,e):o[r](t,n,e):J[i]&&(s?o.detachEvent("on"+t,n):o[i]("on"+t,n))},f)},ajax:function(e,n,r,i){var o,a=ot(f),l=e.indexOf("?")===-1?"?":T,c="_ts="+ +(new Date);n=n||"GET";K.XMLHttpRequest?o=new XMLHttpRequest:K.ActiveXObject&&(o=new ActiveXObject("Microsoft.XMLHTTP"));if(o){n=n[u]();n==="GET"&&(e+=l+a);i&&(e+=n===z?l+c:T+c);o.open(n,e,t);n===z&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded");o.send(a);o[s]=function(){if(o.readyState===4&&o.status===200&&r)try{r(o.responseText)}catch(e){}}}}}}var e=!1,t=!0,n="length",r="addEventListener",i="attachEvent",s="onreadystatechange",o="replace",u="toUpperCase",a="currentStyle",f="getComputedStyle",l=null,c="function",h="string",p="querySelectorAll",d="getElementsByTagName",v="createElement",m="styleSheet",g="cssText",y="push",b="removeChild",w="style",E="display",S="none",x="constructor",T="&",N="nodeName",C="name",k="value",L="selected",A="checkbox",O="radio",M="checked",_="parentNode",D="className",P="has",H="toggle",B="innerHTML",j="insertBefore",F="getAttribute",I="SELECT",q="INPUT",R="TEXTAREA",U="BUTTON",z="POST",W=[],X=[],V=e,$=e,J=document,K=window;if(J[r]){J[r]("DOMContentLoaded",Q,e);K[r]("load",G,e)}else if(J[i]){J[i](s,Q);K[i]("onload",G)}else K.onload=G;K.$=ut})();

    // Global filters object
    var filters = [];
    var css_filters = "";
    var page_css = '';

    var presets = {
        blur: {
            filter: 'blur(3px)'
        },
        grayscale: {
            filter: 'grayscale(100%)'
        },
        invert: {
            filter: 'invert(1)'
        },
        distance: {
            zoom: '80%'
        },
        flip: {
            rotate: '180deg'
        }
    };

    var distance = false;
    var flip = false;


    // If DOM Loaded
    document.addEventListener('DOMContentLoaded', function () {

        //console.log(presets.blur.filter);

        // Find all buttons
        var buttons = document.querySelectorAll('a');

        // for each button
        for (var i = 0; i < buttons.length; i++) {

            //console.log(localStorage);

            // add onclick event listener
            buttons[i].addEventListener('click', function(e) {

                chrome.tabs.insertCSS(
                    null,
                    {code:'html {-webkit-filter: none; zoom: none; -webkit-transition-property: all; -webkit-transition-duration: 0.25s, 0.25s; -webkit-transition-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955); }'}
                );

                css_filters = '';
                distance = false;
                flip = false;

                // get command key
                var target = e.target;
                var command = target.dataset.preset;

                // Is button press on/off
                var active = target.dataset.active;

                 // if off
                if (active === 'off') {

                    // append command to filters
                    filters.push(command);

                    // set active flag
                    target.dataset.active = 'on';

                    // set local storage
                    //localStorage["var"]=data;
                }

                // else if on already
                else {

                    // splice command out of array
                    var index = filters.indexOf(command);
                    filters.splice(index, 1);

                    // set active flag
                    target.dataset.active = 'off';

                }


                // apply CSS changes based on filters
                //console.log(filters.join(" "));

                // loop filters building
                if (filters.length === 0) {
                    css_filters = 'none';
                }
                else {
                    for (var i = 0; i < filters.length; i++) {

                        //console.log(filters[i]);
                        //var object_name = eval(filters[i]);
                        if (presets[filters[i]].filter) {
                            css_filters += presets[filters[i]].filter + " ";
                        }
                        // zoom
                        else if (filters[i] == 'distance') {
                            distance = true;
                        }
                        // flip
                        else if (filters[i] == 'flip') {
                            flip = true;
                        }
                    };
                }
                console.log(filters.length);
                console.log(css_filters);

                // have filters set
   
                page_css = '-webkit-filter: ' + css_filters + ';';

                if (distance) {
                    page_css += ' zoom: 70%;';
                }
                else {
                    page_css += ' zoom: 100%;';
                }

                if (flip) {
                    page_css += ' -webkit-transform: rotate(180deg);';
                }
                else {
                    page_css += ' -webkit-transform: none;';
                }
                //console.log(css_filters);


                
                chrome.tabs.insertCSS(
                    null,
                    {code:'html {' + page_css + '}'}
                );


            });

        }
    });
//}


