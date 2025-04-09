import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import axios from 'axios'
import Navbar from '../navbar'

const App = () => {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios('https://dummyjson.com/products')
            .then(res => {
                console.log(res.data.products);
                setProducts(res.data.products)
            }).catch((err) => {
                console.log(err);
                setError(true)
            }).finally(() => {
                console.log("finally chal rha ha");
                setLoading(false)

            })
    }, [])
    if (loading) {
        return <div className=' flex justify-center h-[80vh] items-center text-3xl font-bold'>
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }

    if (error) {
        return <div className=' flex justify-center h-[80vh] items-center text-3xl font-bold'>
            <h1 className='text-red-300'>Error occured</h1>
        </div>
    }
    return (
        <>
            <Navbar />
            <h1 className='text-center font-extrabold text-4xl underline'>PRODUCTS</h1> <br /><br />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px'
            }}>
                {products && products.map(item => {
                    return <Card key={item.id} title={item.title} image={item.thumbnail} description = {item.description} />
                })}
            </div>
        </>

    )
}

export default App