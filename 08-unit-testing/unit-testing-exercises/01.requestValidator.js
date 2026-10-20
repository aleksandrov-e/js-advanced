function requestValidator(obj) {
    const methodValidWords = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const regexForUri = /^([a-zA-Z0-9.])+$/g;
    const versionValidWords = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const regexForMessage = /^[^<>\\&'"]*$/g;

    if (!methodValidWords.includes(obj['method'])) {
        throw new Error('Invalid method');
    }
    if (regexForUri.test(obj['uri']) == false) {
        throw new Error('Invalid uri');
    }
    if (regexForMessage.test(obj['message']) == false) {
        throw new Error('Invalid message');
    }
    if (!versionValidWords.includes(obj['version'])) {
        throw new Error('Invalid version');
    }
    return obj;
}
console.log(requestValidator({
  method: 'OPTIONS',
  uri: 'git.master',
  version: 'HTTP/1.1',
  message: '-recursive'
}
));

