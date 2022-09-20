import { useEffect , useState} from "react"
import Image from "next/image";
import sony_alpha_logo from '../public/sony_alpha_logo.svg'
const StockModal = ({toggleStockModal, showStockModal, lensSku, lensAvailabilty }) => {

const [inStock, setInStock] = useState()
const [loading, setLoading] = useState();
const [fetchError, setFetchError] = useState();


useEffect(() => {
    setLoading(true)
    const _apiUrl = `/api/stock?sku=${lensSku}`
    const checkStock = async () => { 
        if (lensSku) {
        try {
            const res = await fetch(_apiUrl);
            const storeStock = await res.json();
            showStockModal && setInStock(storeStock)
    }   catch (error) {
        setFetchError(true)
        console.log(error)
    }
    }
    }

    checkStock();

}, [lensSku])

useEffect(() => {
 if (inStock) {
    setLoading(false)
 }
}, [inStock])




  return (

    <div className="w-1/2 h-[30rem] text-xl fixed inset-x-1/4 inset-y-20 bg-orange-600/50 shadow-2xl shadow-orange-900 flex flex-col p-10 justify-center items-center backdrop-blur-md">
    <h1 className="underline text-2xl tracking-wide my-2"> Currently this lens is in stock at: </h1>
    {inStock && !fetchError && inStock.stores?.map(store => <h1 key={store.storeID}>{`Store ${store.storeID} in ${store.name}`}</h1>)}
    {inStock && !fetchError && (inStock.stores?.length == 0) && <h1>This lens is out of stock near you.</h1>}
    <h1 className="w-4/5 text-center">{fetchError && `There was an error checking stock on this lens. Close this window and try again.`}</h1>
    {loading ? <div className="flex items-center justify-center w-full animate-pulse relative"><Image src={sony_alpha_logo} width={250} height={250} alt={'logo'} /><h1 className="absolute inset-5 text-lg tracking-widest">loading....</h1></div> : ''}
    <button onClick={toggleStockModal} className="py-2 px-4 m-4 border-2 border-orange-600/100">Close</button>
    <h1 className="text-center italic">NOTE: Stores will only show as in stock if their inventory is greater than one.</h1>
    </div>

  )
}

export default StockModal



