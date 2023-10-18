import { services } from "../Constants/Constants"
import ServiceCard from "../Components/ServiceCard"

const Services = () => {
  return (
    <section className="padding-x py-10">
        <div className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service}/>
        ))}
      </div>
    </section>
  )
}

export default Services