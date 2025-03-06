import { data } from 'framer-motion/client'
import React from 'react'

const dataClient = [
    { id: 1, name: 'John', age: 25 },
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
                            <h1>{dataClient.name}</h1>
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
