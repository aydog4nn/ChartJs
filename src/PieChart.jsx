import React from 'react';
import {Pie} from "react-chartjs-2";

function PieChart({chartData}) {
    return (
        <div className="chart-container w-75 m-auto mb-lg-5">
            <h2 style={{textAlign: "center"}}>Pie Chart</h2>
            <Pie
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Kullanıcının harcadığı para"
                        }
                    }
                }
                }
            />
        </div>
    )
}

export default PieChart;