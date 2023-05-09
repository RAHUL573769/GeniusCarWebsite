import React from "react";
import { useQuery } from "react-query";
import SingleService from "./SingleService";

const Services = () => {
  const { data: services = [] } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch("services.json");
      const data = await res.json();
      return data;
    }
  });

  return (
    <div>
      <h1 className="text-orange-500 text-center font-bold my-6">
        Our Inventory Services
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <SingleService service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
