import React, { useRef, useState } from 'react';
import TableRecord from './TableRecord';
import useAxios, { AxiosSource } from '../Hooks/useAxios';

const Home = () => {
    const input = useRef(null)
    const [data, setData] = useState([])
    const axiosLink = useAxios(AxiosSource)

    const handleSearch = () => {
        const value = input.current.value
        console.log(value);
        axiosLink.get(`/ips/${value}`)
            .then(res => {
                console.log(res);
                setData(res.data)

            })
            .catch(err => {
                console.log(err);

            })

    }
    return (
        <section className=''>
            <div className='bg-black relative'>
                <img className='w-full h-[30rem] object-cover opacity-75' src="https://res.cloudinary.com/daudgshta/image/upload/v1727768496/how-to-resolve-dns-issues1603984926781453_ucyyks.jpg" alt="" />
                <div className='bg-white p-3 top-1/2 left-[38%] absolute rounded-lg'>
                    <input ref={input} type="text" className='border-2 w-96 p-1 rounded-lg' />
                    <button onClick={handleSearch} className='border-2 px-2 py-1  rounded-xl bg-blue-700 text-white mx-5'>Query</button>
                </div>
            </div>

            <div className='mx-10 my-5'>
                <TableRecord array={data}></TableRecord>
            </div>

        </section>
    );
};

export default Home;