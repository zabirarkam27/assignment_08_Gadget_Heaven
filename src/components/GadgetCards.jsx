

import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from "./Card";

const GadgetCards = () => {

    const data = useLoaderData();
    // console.log(data);
    const { category } = useParams();
    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
      if (category) {
        const filteredByCategory = [...data].filter(
          (gadget) => gadget.category === category
          );
          console.log(filteredByCategory);
        setGadgets(filteredByCategory);
      }
      else {
          setGadgets(data.slice(0,20));
      }
    }, [category, data]);

    return (
        <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {
                gadgets.map((gadget) => (
                    <Card key={gadget.id} gadget={gadget}/>
                ))
            }
        </div>
    );
};

export default GadgetCards;