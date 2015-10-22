var request = require('urllib-sync').request;
var sizeOf = require('image-size');
var url = require('url');
var http = require('http');

module.exports = function (options) {
    
    var round;
    options = options || {};
    options.round = options.round || true;
    if (options.round) {
         round = function (numb) {
            return Math.round(numb / 5) * 5
        }
    } else{
        round = function (numb) {
            return numb;
        }
    }
    
    return function ($) {
        // local image
        $('img[src]:not([src*="//"]):not(width):not(height)').each(function () {
            var image = 'test//' + $(this).attr('src');
            var size = sizeOf(image);
            $(this).attr({
                width: round(size.width),
                height: round(size.height)
            });
        });
        // image with size in url
        $('img[src*="x"]:not(width):not(height)').each(function () {
            var image = $(this).attr('src');
            var size = {
                width: round( image.match(/[\D]\d+[x]/g)[0].slice(1, -1) ),
                height: round( image.match(/[x]\d+[\D]/g)[0].slice(1, -1) )
            };
            $(this).attr(size);
        });
    };
};
