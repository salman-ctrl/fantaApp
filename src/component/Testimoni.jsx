import { data } from 'framer-motion/client'
import React from 'react'

const dataClient = [
    { id: 1, name: 'John', age: 25, deskripsi: "loremakslak akjs" },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },


]

const Testimoni = () => {
    return (
        <>
            <div>
                <h1>Apa kata mereka?</h1>

                <div>
                    {dataClient.map((item) => (
                        <div key={dataClient.id}>
                            <h1 className='text-center text-lg font-merienda text-white'>{dataClient.name}</h1>
                            <p className='text-sm'>{dataClient.age}</p>
                            <p className='text-sm'>{dataClient.age}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>

            </div>

        </>

    )
}

export default Testimoni
