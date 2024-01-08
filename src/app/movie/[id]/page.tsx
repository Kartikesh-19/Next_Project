import React from 'react'
import styles from "@/app/styles/common.module.css"
import Image from 'next/image';

const page = async({params}:any) => {
    const {id}=params;
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd8738c1fa8msh6437d3e8783db5fp11b316jsn66db670a20e7',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const response=await fetch(url, options)
    const output=await response.json()
    console.log('output',output[0]?.details)
    const finalData=output[0]?.details

    return (
        <div className={styles.container}>
        <h2 className={styles.movie_title} style={{ fontWeight:"bolder", fontSize:"larger"}}> Netflix \ <span>{finalData?.type}</span>
        </h2>
        <div className={styles.card_section}>
            <div>
            <Image src={finalData.backgroundImage?.url ?? "/logo.png"} alt={finalData?.title} width={600} height={200} />
            </div> 
            <div>
               <h1 style={{ fontWeight:900, fontSize:"xx-large"}}>{finalData?.title}</h1>
               <p>{finalData?.synopsis}</p>
            </div> 
         
        </div>
      </div>
    )
}

export default page