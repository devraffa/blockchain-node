const Blockchain = require('./blockchain');
const Transaction = require('./transaction');

const bitcoins = new Blockchain('primeiro endereço');
bitcoins.minerarTraPendente('endereço1');

bitcoins.criaTransaction(new Transaction('primeiro endereço', 'segundo endereço', 20)); // teste para saber se está funcionando
bitcoins.criaTransaction(new Transaction('primeiro endereço', 'terceiro endereço', 40)); 

bitcoins.minerarTraPendente('segundo endereço');

bitcoins.printBlockchain();

console.log(`Essa blockchain é válida? ${bitcoins.validBlockchain()}`);