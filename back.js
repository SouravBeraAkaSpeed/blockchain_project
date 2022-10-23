const { getWebSocketProvider } = require("@wagmi/core");

function connecting(){
  if (typeof window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
  ethereum.request({ method: 'eth_requestAccounts' });
  console.log(ethereum.isConnected());
}
  else {
    alert("u have not installed metamask wallet")
  }
}

const address = '0x5D4046683516826f2e83a92bF53E1982904D9cd7'
const addr='0xc465D72A96FB9124b50fCb5E557120Ffa7918f1e'


async function trans(){
  console.log(ethereum.isConnected());
  if(ethereum.isConnected()==false){
    alert("wallet is not connected")
  }

  else{
  const paisa = document.getElementById('print3');
  console.log(paisa.value)
  console.log(typeof paisa.innerText)
  let params = [{
      from: "0x5D4046683516826f2e83a92bF53E1982904D9cd7",
      to: "0xc465D72A96FB9124b50fCb5E557120Ffa7918f1e",
      gas: Number(21000).toString(16), 
      gasPrice: Number(25000).toString(16), 
      value: paisa.value, 
    }]
  
  window.ethereum.request({method: "eth_sendTransaction", params})
  }
}
