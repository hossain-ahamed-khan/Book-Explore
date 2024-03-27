import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const PagesToRead = () => {

    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 200, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 500, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 100, pv: 2400, amt: 2400 },
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }
    ];
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
        <div>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8"
                    shape={<TriangleBar />} />
            </BarChart>
        </div>
    );
};

export default PagesToRead;