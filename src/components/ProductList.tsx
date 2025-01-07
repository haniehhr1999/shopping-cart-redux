import {type ReactNode } from "react"

type ProductListProps = {
    children : ReactNode
}

const ProductList = ( { children } : ProductListProps) => {
  return (
    <div className="px-36 bg-[#181818]">
        <div>
            {children}
        </div>
    </div>
  )
}

export default ProductList
