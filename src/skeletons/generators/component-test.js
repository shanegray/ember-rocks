/* jshint expr:true */
import {
  describeComponent,
  it
} from 'ember-mocha';

describeComponent(
  '<%= dasherizedModuleName %>',
  '<%= classifiedModuleName %>Component',
  {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  },
  function() {
    it('renders', function() {
      // creates the component instance
      var component = this.subject();
      component._state.should.equal('preRender');

      // renders the component on the page
      this.render();
      component._state.should.equal('inDOM');
    });
  }
);
