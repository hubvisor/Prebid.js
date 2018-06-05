import assert from 'assert';
import * as ga from 'modules/googleAnalyticsAdapter';

describe('Ga', function () {
  describe('enableAnalytics', function () {
    it('should accept a tracker name option and output prefixed send string', function () {
      var config = { options: { trackerName: 'foo' } };
      ga.enableAnalytics(config);

      var output = ga.getTrackerSend();
      assert.equal(output, 'foo.send');
    });
  });
});
