import EkoClient from 'eko-sdk';

class EkoClientWrapper {

  static allowInstantiation = false;
  static instance = null;

  constructor () {

    if (!EkoClientWrapper.allowInstantiation) {
      throw new Error('Please don\'t call new EkoClientWrapper directly, ust EkoClientWrapper.getInstance()');
    } else {
      const client = new EkoClient({ apiKey: 'b3b9ec583fdef73348328a14555c16db840c85e1ba30662c' });
      // Register Session with EkoClient with userId and display name
      client.registerSession({
        userId: 'trueugc-stag-admin',
        displayName: 'Stage Admin 2',
      });
      
      return client;
    }
  }

  static getInstance() {
    if (!EkoClientWrapper.instance) {
      EkoClientWrapper.allowInstantiation = true;
      EkoClientWrapper.instance = new EkoClientWrapper();
      EkoClientWrapper.allowInstantiation = false;
    }
    return EkoClientWrapper.instance;
  }
}
export default EkoClientWrapper
