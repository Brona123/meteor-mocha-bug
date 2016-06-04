import { assert } from 'meteor/practicalmeteor:chai';
import { Template } from 'meteor/templating';

import { withRenderedTemplate } from '../../test-helpers.js';
import './home.js';

if (Meteor.isClient) {
    describe('home page', function () {
        it('Renders correctly', function () {
            withRenderedTemplate('home', {}, el => {
                assert.notEqual($(el).find().length, 0);
            });
        });
    });
}