import { useEffect, useState } from "react"
import ServiceCard from "./ServiceCard"

const Service = () => {

    const [services, setServices] = useState([])



    useEffect(()=> {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

  return (
    <div className="mt-10">
        <div className="text-center space-y-2">
            <h1 className="text-2xl text-orange-500 font-bold">Service</h1>
            <h1 className="text-5xl text-black font-bold mt-2">Our Service Area</h1>
            <p className=" text-gray-900">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10">
            {
                services.map((service, idx) => <ServiceCard key={idx} service={service}></ServiceCard> )
            }
        </div>
    </div>
  )
}

export default Service