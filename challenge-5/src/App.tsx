import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { useContractWrapper } from './hooks/useContractWrapper'
import { useConnection } from './hooks/useConnection';

function App() {

/*2 
return (
  <>
    <TonConnectButton/> 
    </>
  )
}
*/

/* 3*/

  const {
    number,
    contract_address,
    sendInternalMessage,
  } = useContractWrapper();

  const { connected } = useConnection();



  return (
    <>
      <TonConnectButton/> 
      <div>
      <b>Contract Address:</b>
      <div>{contract_address}</div>
      <b>Current counter</b>
      <div>{number}</div>

      {connected && (
        <a
          onClick={()=>{
            sendInternalMessage();
          }}
        >
          Send increase by 1
        </a>
      )}


      </div>
    </>
  )
}



export default App;
