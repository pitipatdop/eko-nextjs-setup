import EkoClient from 'eko-sdk';

class EkoClientWrapper {

  static allowInstantiation = false;
  static instance = null;

  constructor () {

    if (!EkoClientWrapper.allowInstantiation) {
      throw new Error('Please don\'t call new EkoClientWrapper directly, ust EkoClientWrapper.getInstance()');
    } else {
      const client = new EkoClient({ apiKey: 'APIKEY' });
      // Register Session with EkoClient with userId and display name
      client.registerSession({
        userId: 'USERID',
        displayName: 'DISPLAYNAME',
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
