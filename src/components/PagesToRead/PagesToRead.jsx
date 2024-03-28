import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';

const PagesToRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const data = useLoaderData();
    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
       C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
       C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
       Z`
    );

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    return (
        <div className='bg-[#13131308] w-full h-[756px] rounded-3xl mt-6'>
            <ResponsiveContainer width="100%" height="100%" >
                <BarChart
                    data={data}
                    margin={{
                        top: 80,
                        right: 80,
                        left: 50,
                        bottom: 80,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;