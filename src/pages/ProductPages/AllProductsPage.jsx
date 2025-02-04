import React, { useState } from 'react'
import logo from '../../images/logo.png'
import ProductCards from '../../components/AllProductComponents/ProductCards'
import { useGetAllProductQuery } from '../../slices/productManufactureApiSlice';
import Loader from '../../components/Loader';

function AllProductsPage() {
  const [page , setPage] = useState(1)
  const [limit , setLimit] = useState(2)
  const {data: products, isLoading: productLoading, error, refetch} = useGetAllProductQuery({page, limit});

  const handleNext = () => {
    if(products?.pagination?.next) {
      setPage(prevPage => prevPage + 1)
    }
  }

  const handlePrevious = () => {
    if(products?.pagination?.prev) {
      setPage(prevPage => prevPage - 1)
    }
  }
  return (
    <>
      {productLoading ? (
        <Loader />
      ) : error ? (
        <p>Error</p>
      ) : (
      <div className='px-10 py-4 w-full h-screen'>
          <div className='flex items-center justify-start gap-8'>
              <img className='w-24 h-auto object-cover' src={logo} alt="logo" />
              <h1 className='text-2xl md:text-3xl mb-8 font-bold'>Vegan Delight Near Me</h1>
          </div>

          <ProductCards products={products?.data} />

          <div className='flex items-center gap-2 justify-center mt-4'>
              <button onClick={handlePrevious} disabled={!products?.pagination?.prev} className={`bg-gray-200 px-8 py-2 rounded-sm ${!products?.pagination?.prev ? 'hidden' : ''}`}>Prev</button>
              <p>{page} page</p>
              <button onClick={handleNext} disabled={!products?.pagination?.next} className={`bg-gray-200 px-8 py-2 rounded-sm ${!products?.pagination?.next ? 'hidden' : ''}`}>Next</button>
          </div>
          
      </div>
      )}
    </>
  )
}

export default AllProductsPage