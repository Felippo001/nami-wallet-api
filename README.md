**Install**

```bash
npm i nami-wallet-api
```

**Usage**


Import with await 

```js
const nami_lib = await import('nami-wallet-api')
const Nami = await nami_lib.NamiWalletApi(
    window.cardano, //nami wallet object
    "<blockfrost-api-key>"
)

// The library runs with the pure js 
// https://www.npmjs.com/package/@emurgo/cardano-serialization-lib-asmjs
// but its super slow



//React example

useEffect(() => {
  async function t(){
    const nami_lib = await import('nami-wallet-api')
    const Nami = await nami_lib.NamiWalletApi(
        window.cardano,
        "<blockfrost-api-key>"
    )
    let addr = await Nami.getAddress()
    console.log(addr)
  }
  
  t()
}, [])






// Setup the wasm lib to get 100x performance
// https://www.npmjs.com/package/@emurgo/cardano-serialization-lib-browser

const WASM_lib = await import('@emurgo/cardano-serialization-lib-browser/ cardano_serialization_lib')
const Nami = await nami_lib.NamiWalletApi(
    window.cardano,
    "<blockfrost-api-key>",
    WASM_lib
)
```
    
   The best way to import the wasm library is to make a webpack 5 project and 	activate wasm + top level await


Enable Nami

```js
await Nami.enable()
```

Get Address

```js
let address = await Nami.getAddress()
console.log(address)
```

Send
	
```js
Nami.send({
        address: "addr1q9zuz87pdpavf4qv887ku2d5u3cvamz8v7mlzqdm6rw62jln442xmqc6emat80hua9a5sdf5jsavm22mkp7c2ka80c2suk45r7",
        amount: 20
    })
    
//with metadata + assets

let txHash = await Nami.send({
    address: "addr1q9zuz87pdpavf4qv887ku2d5u3cvamz8v7mlzqdm6rw62jln442xmqc6emat80hua9a5sdf5jsavm22mkp7c2ka80c2suk45r7",
    amount: 20,
    assets: [
        {
            "unit": "b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f.BerryAlba",
            "quantity": "1"
        }
    ],
    metadata: {
        "TEST": "My transaction"
    }
})

//send to multiple recipients

Nami.sendMultiple({
    recipients: [
        {
            address: "",
            amount: 2,
            assets: [
                {
                    "unit": "",
                    "quantity": "1"
                }
            ]
        },
        {
            address: "",
            amount: 3
        },
        {
            address: "",
            amount: 213
        }
    ],
})

```

Delegate
```js
let txHash = await Nami.delegate({
    poolId: "pool1fvxfg0pcr4umked5cx7jgczdajp70hrz5fsutzk338u0jljlfpy"
})
```
Endpoints
```ts

isEnabled :  ()  =>  Promise<boolean>,
enable :  ()  =>  Promise<void>,
getAddress :  ()  =>  Promise<string>,
getAddressHex :  ()  =>  Promise<string>,
getRewardAddress :  ()  =>  Promise<string>,
getRewardAddressHex :  ()  =>  Promise<string>,
getNetworkId :  ()  =>  Promise<{
    id:  number,
    network:  string
}>,
getUtxos:  ()  =>  Promise<Utxo[]>,
getAssets:  ()  =>  Promise<Asset[]>,
getUtxosHex:  ()  =>  Promise<string[]>,

send:  (data)  =>  Promise<string>,
sendMultiple: (data) => Promise<string>,
delegate:  (data)  =>  Promise<string>

```
Wasm library highly recommended for send(), delegate() functions. Takes 1-2 minutes without the wasm library just to build the transaction.