var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

   var processed = postxml([plugin(opts)]).process(input);

   expect(processed).to.eql(output);
};

describe('postxml-image-size', function () {
    it('local image', function () {
        test(
            '<img src="schoolgirl.png">',
            '<img src="schoolgirl.png" width="255" height="180">',
            {
                cwd: 'test'
            }
        )
    });
    it('remote image with size in url', function () {
        test(
            '<img src="http://placehold.it/350x150/848443">',
            '<img src="http://placehold.it/350x150/848443" width="350" height="150">'
        );
    });
});
