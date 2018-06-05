import pbjsTestOnly from 'test/helpers/pbjs-test-only';
import 'src/prebid';

import { assert, expect, should as createShould } from 'chai'
const should = createShould()

describe('Publisher API _ Alias Bidder', function () {
  before(function () {
    var topSlotCode = '/19968336/header-bid-tag1';
    var topSlotSizes = [[728, 90], [970, 90]];
    var adUnit = {
      code: topSlotCode,
      sizes: topSlotSizes,
      bids: [
        {
          bidder: 'appnexus',
          params: {
            placementId: '5215561'
          }
        }
      ]
    };

    $$PREBID_GLOBAL$$.addAdUnits(adUnit);
  });

  after(function () {
    pbjsTestOnly.clearAllAdUnits();
  });

  describe('set Alias Bidder', function () {
    it('should have both of target bidder and alias bidder', function () {
      $$PREBID_GLOBAL$$.aliasBidder('appnexus', 'bRealTime1');
    });
  });
});
