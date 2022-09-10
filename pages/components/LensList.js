import LensCard from "./LensCard"
import { useEffect, useState } from "react"

const LensList = ({ lensData, toggleStockModal, showStockModal, lensStock, searchThisLens, query }) => {
const [filteredLenses, setFilteredLenses] = useState()
const [searchBy, setSearchBy] = useState()
const [initialCardList, setInitialCardList] = useState()

useEffect(() => {
    const cardArray = lensData.products?.map((lens) => 
    <LensCard key={lens.sku} sku={lens.sku} name={lens.name} image={lens.image} salePrice={lens.salePrice} toggleStockModal={toggleStockModal} showStockModal={showStockModal} lensStock={lensStock} searchThisLens={searchThisLens} />
    )
    setInitialCardList(cardArray)
    
    setSearchBy(query)
    const test = initialCardList?.map(el => el.props.name.toLowerCase())
    console.log(test)
    const search = searchBy?.toString()
    console.log(initialCardList)
    }
, [query, lensData])

useEffect(() => {
  initialCardList && setFilteredLenses(initialCardList.filter(el => 
    el.props.name.toLowerCase().includes(query)))
}, [initialCardList, query])




  return (
    <div className="flex flex-wrap gap-8 justify-center">
    {query ? filteredLenses : initialCardList}
    </div>
  )
}

export default LensList