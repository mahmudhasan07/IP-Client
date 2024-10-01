import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2'
import data from '../../../public/data.json'
import useAxios, { AxiosSource } from '../Hooks/useAxios';

const AddIP = () => {
    const ref = useRef()

    const axiosLink = useAxios(AxiosSource)

    const [start, setstart] = useState(50)
    const [end, setend] = useState(50)

    const handleSubmit = async (e) => {
        e.preventDefault()

        // console.log(data.slice(0, 2));
        data.slice(start, data.length).map((e, idx) => {
            // console.log(e);

            axiosLink.post('/ips', e)
                .then(res => {
                    console.log(res);

                    if (idx+1 == (start - data.length)) {
                       alert("Successfully post")
                    }

                })
                .catch(err => {
                    console.log(err);

                })
            // console.log(e);


        })



    }


    return (
        <section>
            <h1 className='text-2xl my-5 font-semibold text-center'>Add Your IP DNA</h1>
            <div className='w-1/3 mx-auto top-10 relative text-center'>
                <textarea ref={ref} id="" className='border-2 p-2 rounded-md w-full h-52 border-gray-500'></textarea>
                <button onClick={handleSubmit} className='border-2 px-3 py-2 bg-blue-700 w-32 text-white mt-5 rounded-lg'>Submit</button>
            </div>
        </section>
    );
};

export default AddIP;