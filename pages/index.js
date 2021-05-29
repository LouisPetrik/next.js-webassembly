import dynamic from 'next/dynamic'

const WasmComponent = dynamic({
  loader: async () => {
 
    const wasmModule = await import('../main.wasm')
    
    return () => <div>Our number: {wasmModule.getNum()}</div>
  },
})

export default function Index() {
  return (
    <div>
      <WasmComponent/>
    </div>
  )
}

