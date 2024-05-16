<template>
	<div class="statistics">
		<BarChart :chartData="chartData" :chartOptions="chartOptions" />
	</div>
</template>

<script>
import { defineComponent, h } from 'vue';
import { Bar } from 'vue-chartjs';
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default defineComponent({
	name: 'StatisticsView',
	components: {
		BarChart: defineComponent({
			name: 'BarChart',
			props: {
				chartData: {
					type: Object,
					required: true
				},
				chartOptions: {
					type: Object,
					required: false,
					default: () => { }
				}
			},
			render() {
				return h(Bar, {
					data: this.chartData,
					options: this.chartOptions
				});
			}
		})
	},
	data() {
		return {
			chartData: {
				labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				datasets: [
					{
						label: 'Ilość wypitych napojów (ml)',
						backgroundColor: ['#42a5f5', '#66bb6a', '#ffa726', '#8d6e63', '#ab47bc'],
						data: [1500, 500, 300, 200, 100, 300, 350]
					}
				]
			},
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					y: {
						beginAtZero: true
					}
				},
				plugins: {
					legend: {
						labels: {
							color: '#00796b' // Kolor tekstu legendy
						}
					}
				}
			}
		};
	}
});
</script>

<style>
.statistics {
	padding: 20px;
	background-color: #e0f7fa;
	border-radius: 15px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	color: #00796b;
	max-width: 800px;
	height: 400px;
	margin: 20px auto;
}

.statistics h1 {
	color: #00796b;
	/* Głęboki odcień niebieskiego */
	margin-bottom: 20px;
}

.statistics canvas {
	max-height: 400px;
	/* Maksymalna wysokość wykresu */
}
</style>
