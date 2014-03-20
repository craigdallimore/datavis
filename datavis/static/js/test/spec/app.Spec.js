// App spec
// ----------------------------------------------------------------------------

define([ 'app' ], function(datavis) {

  describe('datavais application', function() {

    it('is defined', function() {

      expect(datavis).to.be.defined;

    });

    it('has controllers', function() {

      expect(datavis.controllers).to.be.defined;

    });

  });

});
