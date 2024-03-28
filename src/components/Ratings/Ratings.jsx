
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Ratings = () => {
    const data = useLoaderData();

    return (
        <>
            <div className='bg-[#13131308] w-full h-[756px] rounded-3xl mt-6'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 80,
                            right: 80,
                            left: 50,
                            bottom: 80,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="bookName" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="rating" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};


export default Ratings;