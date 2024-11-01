import {useState} from 'react'
import './App.css'
import Button from 'react-bootstrap/Button'
import Chart from "chart.js/auto"
import {CategoryScale} from "chart.js";
import PieChart from "./PieChart.jsx";
import {useEffect} from "react";

Chart.register(CategoryScale, {})

function App() {

    const [expenses, setExpenses] = useState([
        {category: "Sigara", amount: 0},
        {category: "Yemek", amount: 0},
        {category: "Gıda Alışverişi", amount: 0},
        {category: "Kozmetik", amount: 0},
        {category: "Tekstil", amount: 0},
        {category: "Elektronik", amount: 0},
        {category: "Seyahat", amount: 0},
    ])

    const increaseAmount = (category) => {
        setExpenses(expenses.map(expense =>
            expense.category === category ? {...expense, amount: expense.amount + 10}
                : expense
        ));
    };

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: "Harcanılan para",
                data: expenses.map((expense) => expense.amount),
                backgroundColor: [
                    "rgba(75,75,192,0.2)",
                    'rgba(54,162,235,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(75,192,192,0.2)',
                    'rgba(153,102,255,0.2)',
                    'rgba(255,159,64,0.2)',
                    'rgba(255,99,132,0.2)'
                ],
                borderColor: "black",
                borderWidth: 2
            }

        ]
    })

    useEffect(() => {
        setChartData({
            labels: expenses.map((expense) => expense.category),
            datasets: [
                {
                    label: 'Harcanılan para',
                    data: expenses.map((expense) => expense.amount),
                    backgroundColor: [
                        'rgba(75,192,192,0.2)',
                        'rgba(54,162,235,0.2)',
                        'rgba(255,206,86,0.2)',
                        'rgba(75,192,192,0.2)',
                        'rgba(153,102,255,0.2)',
                        'rgba(255,159,64,0.2)',
                        'rgba(255,99,132,0.2)',
                    ],
                    borderColor: 'black',
                    borderWidth: 2,
                },
            ],
        });
    }, [expenses]);


        return (
            <div className="container d-flex flex-column bg-light w-50">
                <h2 className="fs-2">Neye para harcadım?</h2>
                <div className="w-100 d-flex flex-column justify-content-xl-between">
                    {expenses.map((expense, index) => (
                        <div key={index}>
                            {expense.category}
                            <Button
                                variant="danger"
                                className="m-1 text-center"
                                onClick={() => increaseAmount(expense.category)}
                            >
                                +
                            </Button>
                            Harcanan para: {expense.amount} TL

                        </div>

                    ))}
                </div>
                <div className="container d-flex flex-row justify-content-center gap-2 mt-5 mb-2">
                    <Button variant="danger">Pasta Grafiği</Button>
                    <Button variant="danger">Çizgi Grafiği</Button>
                    <Button variant="danger">Sütun Grafiği</Button>
                </div>
                <div className="contaniner">
                    <PieChart chartData={chartData}/>
                </div>
            </div>
        )
    }

    export default App
