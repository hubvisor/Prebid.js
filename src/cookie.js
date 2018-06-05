import * as utils from './utils';
import * as adLoader from './adloader';

export function cookieSet(cookieSetUrl) {
  if (!utils.isSafariBrowser()) {
    return;
  }
  adLoader.loadScript(cookieSetUrl, null, true);
};
