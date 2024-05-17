import { Bar } from 'react-chartjs-2'
import styles from "@/components/Chart/chart.module.css"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Colors,
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalBarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
                labels: ["Quebec", "Ontario", "Manitoba", "Saskatchewan", "Alberta", "British Columbia"],
                datasets: [
                    {
                        label: 'Excellent or very good perceived mental health by % (All Persons)',
                        data: [47.3, 43.8, 50.6, 48.8, 37.3, 46.6, 55.8, 44.1, 48.5, 42.2, 49.5, 50.1, 43],
                        borderColor: 'rgb(0,0,0)',
                        backgroundColor: 'rgba(255, 0, 0)',
                        color: '#ffffff'
                    },
                    {
                        label: 'Good perceived mental health by % (All Persons)',
                        data: [33, 34.4, 30.5, 33.7, 38.7, 31.8, 32, 33.8, 31.2, 34, 31.1, 30.5, 34.2],
                        borderColor: 'rgb(0,0,0)',
                        backgroundColor: 'rgba(0, 0, 255)',
                        color: '#ffffff'
                    },
                    {
                        label: 'Fair or or poor perceived mental health by % (All Persons)',
                        data: [19.6, 21.8, 19, 17.5, 24, 21.6, 12.3, 22.1, 12.3, 22.1, 20.3, 23.8, 19.4, 19.4, 22.8],
                        borderColor: 'rgb(0,0,0)',
                        backgroundColor: 'rgba(0, 255, 0)',
                    }
            ]
        })

        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top',
                    color: '#ffffff'
                },
                title: {
                    display: true,
                    text: 'Perceived Mental Health, by Gender and Province',
                    color: '#000000'
                },
                maintainAspectRatio: false,
                responsive: true
                }
            })
        })

        return(
            <>
                <Bar data={chartData} options={chartOptions} style={{height: '100%'}}/>
                </>
        
    )
}