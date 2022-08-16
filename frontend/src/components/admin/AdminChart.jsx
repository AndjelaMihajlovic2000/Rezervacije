import React from 'react';
import {CartesianGrid, Line, XAxis, YAxis, LineChart, ResponsiveContainer} from "recharts";


function AdminChart({data}) {
    return (
        <ResponsiveContainer width="90%" height="80%">
            <LineChart width={500} height={200} margin ={{top:20}} data={data}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                <Line type="monotone" dataKey="pv" stroke="#82ca9d"/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default AdminChart;