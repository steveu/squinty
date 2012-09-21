/*
    Squinty
    Author: Steve Urmston
    http://urm.st/
*/

var sq_presets = {
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



function activeFilters()
{

    var filters = [];

    for (var key in sq_presets) {

        if (localStorage[key] == 'on') {
            filters.push(key);
        }
    }

    return filters;
}

function buildCSS(active_filters)
{

    var page_css = '';
    var css_filters = '';
    var flip = false;
    var distance = false;

    if (active_filters.length === 0) {
        css_filters = 'none';
    }
    else {
        for (var i = 0; i < active_filters.length; i++) {

            if (sq_presets[active_filters[i]].filter) {
                css_filters += sq_presets[active_filters[i]].filter + " ";
            }
            // zoom
            else if (active_filters[i] == 'distance') {
                distance = true;
            }
            // flip
            else if (active_filters[i] == 'flip') {
                flip = true;
            }
        };
    }

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

    return page_css;

}


// If DOM Loaded
document.addEventListener('DOMContentLoaded', function () {

    chrome.tabs.insertCSS(
        null,
        {code:'html {-webkit-transition-property: all; -webkit-transition-duration: 0.15s, 0.15s; -webkit-transition-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955); }'}
    );

    // Apply any soted filters
    var sq_active = activeFilters();

    var sq_filters_css = buildCSS(sq_active);

    chrome.tabs.insertCSS(
        null,
        {code:'html {' + sq_filters_css + ' }'}
    );

    // Find all buttons
    var buttons = document.getElementById('presets').querySelectorAll('a');

    for (var i = 0; i < buttons.length; i++) {

        var button_preset = buttons[i].dataset.preset;
        var button_active = localStorage[button_preset];
        if (button_active == 'on') {
            buttons[i].dataset.active = 'on';
        }

        buttons[i].addEventListener('click', function(e) {

            // get command key
            var target = e.target;
            var command = target.dataset.preset;

            var active = localStorage[command];

            // set local storage
            localStorage[command] = (active == 'on') ? 'off' : 'on';

            // create and apply filters
            sq_active = activeFilters();

            sq_filters_css = buildCSS(sq_active);

            chrome.tabs.insertCSS(
                null,
                {code:'html {' + sq_filters_css + ' }'}
            );

            // active button state
            target.dataset.active = (active == 'on') ? 'off' : 'on';

        });
    }

    // credits link
    document.getElementById('credits').addEventListener('click', function(e) {
        chrome.tabs.update({url: 'http://urm.st/projects/squinty'}); 
    });

});