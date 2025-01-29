import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Area, Bar, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const gadget = useLoaderData();
  const data = gadget.map((gadget) => ({
    name: gadget.title,
    price: gadget.price
  }));
    return (
      <div className="container mx-auto px-4 py-8">
        <Helmet>
          <title>Gadget Heaven || Statistics</title>
        </Helmet>
        <h3 className="text-2xl font-bold text-center mb-8">
          Price vs Product Name
        </h3>
        <ResponsiveContainer width="95%" height={400}>
          <ComposedChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              fill="#9538E2"
              stroke="#7A30B5"
            />
            <Bar dataKey="price" barSize={2} fill="#A566D9" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
};

export default Statistics;