import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('em-checkbox', {
  // Specify the other units that are required for this test
  integration: true
});

test('checkbox gets rendered', function(assert) {
  // console.log('as8j');
  // console.log(JSON.stringify(requirejs.entries));
  this.render(hbs`{{em-checkbox property="asd"}}`);

  assert.equal(this.$().find(':checkbox').length, 1);
});

test('checkbox also renders label', function(assert) {
  this.render(hbs`{{em-checkbox label="my-label"}}`);
  assert.equal(this.$().find(':checkbox').length, 1);
  assert.equal(this.$().find('label:contains("my-label")').length, 1);
});