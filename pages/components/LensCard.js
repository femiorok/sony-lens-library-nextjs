import StockModal from "./StockModal"
import { useState } from "react"

const LensCard = ({ image, name, sku, salePrice, toggleStockModal, showStockModal, searchThisLens }) => {

const [cardSku, setCardSku] = useState(null)

const clickEvents = () => {
    toggleStockModal();
    setCardSku(sku);
    searchThisLens(sku)
}

  return (
    <div className='border-2 border-orange-200 rounded-xl w-72 p-8 h-[30rem] shrink-0 flex-initial relative'>
        <div className="flex justify-center border-b-2 pb-2">
            <img src={image} alt="sony Lens" className="h-28"/>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
        <h1 className="my-4">{name}</h1>
        <h1>{`SKU: ${sku}`}</h1>
        <h1>{`Current Price: $${salePrice}`}</h1>
        <button>More Info!</button>
        <button onClick={clickEvents} >Check Local Stock!</button>
        
        </div>
    </div>
  )
}

export default LensCard