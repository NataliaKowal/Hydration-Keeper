<template>
	<div class="home">
		<h1>Daily Progress</h1>
		<div class="drop-container">
			<div class="drop-inside-container">
				<div class="drop-fill" :style="{ height: Math.min(fillHeight, 100) + '%' }"></div>
				<img src="@/assets/water-drop.png" class="drop-mask" alt="Water Drop">
			</div>
		</div>
		<div class="percentage">
			{{ Math.min(fillHeight, 100) }}% wypitej wody
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
	setup() {
		const fillHeight = ref(20);

		onMounted(() => {
			// Możesz tutaj dodać logikę inicjalizacji, jeśli jest potrzebna
		});

		return {
			fillHeight
		};
	}
};
</script>

<style>
.home {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	width: 100%;
	box-sizing: border-box;
}

.drop-container {
	position: relative;
	width: 300px;
	height: 300px;
	background-color: #e0f7fa;
	border-radius: 15px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	overflow: hidden; /* Upewniamy się, że zawartość nie wychodzi poza kontener */
	padding: 20px;
}

.drop-inside-container {
	position: relative;
	width: 100%;
	height: 100%;
	background-color: #ffffff; /* Białe tło */
}

.drop-fill {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: rgba(54, 162, 235, 0.5);
	z-index: 1;
}

.drop-mask {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: border-box; /* Upewniamy się, że padding jest uwzględniany w wymiarach */
	z-index: 2;
}

.percentage {
	margin-top: 20px;
	font-size: 24px;
	color: #00796b;
}
</style>
