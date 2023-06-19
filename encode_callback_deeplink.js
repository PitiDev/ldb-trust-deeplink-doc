const path = require("path");
const fs = require("fs");
const forge = require("node-forge");

function encryptStringWithRsaPublicKey(text) {
    const absolutePath = path.resolve('publicKey_APPLINK.pem');
    const publicKeyFile = fs.readFileSync(absolutePath, 'utf-8');

    var pki = forge.pki;
    // convert a PEM-formatted public key to a Forge public key
    var publicKey = pki.publicKeyFromPem(publicKeyFile);
    const encrypted = publicKey.encrypt(text);
    console.log("encrypted:", forge.util.encode64(encrypted));

    return forge.util.encode64(encrypted);
};


function decryptStringWithRsaPrivateKey(toDecrypt) {
    
};

module.exports = encryptStringWithRsaPublicKey('{\"merchId\":\"LDB0302000001\",\"refNumber\":\"pitix99\"}');
