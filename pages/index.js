import dynamic from 'next/dynamic'
import { useState } from "react"


const WasmComponent = dynamic({
  loader: async () => {
 
    const wasmModule = await import('../main.wasm')
    
    return () => <div>Adding two numbers: {wasmModule.add(2, 4)}</div>
  },
})

export default function Index() {
  return (
    <div>
      <WasmComponent/>
    </div>
  )
}
