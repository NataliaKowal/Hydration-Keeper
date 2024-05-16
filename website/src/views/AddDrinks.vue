<template>
	<div class="add-drinks">
		<div class="carousel-container">
			<Carousel ref="carousel" :itemsToShow="3.95" :wrapAround="true" :transition="500">
				<Slide v-for="(drink, index) in drinks" :key="index">
					<div class="carousel-item">
						<img :src="drink.image" :alt="drink.name" style="width: 100px; height: 100px; object-fit: cover; margin-bottom: 10px;" />
						<p>{{ drink.name }} - {{ drink.volume }} ml</p>
					</div>
				</Slide>
				<template #addons>
					<Navigation />
					<Pagination />
				</template>
			</Carousel>
		</div>
		<button>Drink!</button>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { Carousel, Pagination, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
	name: 'AddDrinks',
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
	setup() {
		const carousel = ref(null);

		return {
			carousel,
		};
	},
	data() {
		return {
			drinks: [
				{
					name: 'Kawa',
					volume: 250,
					image: require('@/assets/coffee.png')
				},
				{
					name: 'Szklanka wody',
					volume: 300,
					image: require('@/assets/cup_of_water.png')
				},
				{
					name: 'Butelka wody',
					volume: 500,
					image: require('@/assets/bottle_of_water.png')
				}
				// Dodaj więcej napojów w razie potrzeby
			]
		};
	},
	methods: {
		drinkSelected() {
			alert('Napój został wybrany!');
			// Tutaj dodasz logikę do obsługi przycisku "Drink!"
		}
	}
});
</script>

<style>
.add-drinks {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background-color: #e0f7fa;
	/* Jasny odcień niebieskiego */
	border-radius: 15px;
	/* Zaokrąglone brzegi */
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	/* Delikatny cień */
	color: #00796b;
	/* Głęboki odcień niebieskiego */
	max-width: 800px;
	margin: 20px auto;
}

.add-drinks h1 {
	color: #00796b;
	/* Głęboki odcień niebieskiego */
	margin-bottom: 20px;
}

.carousel-container {
	position: relative;
	width: 100%;
	max-width: 600px;
}

button {
	margin-top: 20px;
	padding: 10px 20px;
	background-color: #00796b;
	/* Głęboki odcień niebieskiego */
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;
}

button:hover {
	background-color: #004d40;
	/* Ciemniejszy odcień niebieskiego */
}

.carousel-item img {
	width: 200px; /* Nowy rozmiar zdjęcia */
	height: 200px; /* Nowy rozmiar zdjęcia */
	object-fit: cover;
	margin-bottom: 10px; /* Odstęp między zdjęciami */
}

.carousel-item {
	background-color: #fff;
	border-radius: 10px;
	padding: 10px;
	margin: 5px; /* Odstęp między elementami */
}


.carousel__slide {
	padding: 5px;
}

.carousel__viewport {
	perspective: 2000px;
}

.carousel__track {
	transform-style: preserve-3d;
}

.carousel__slide--sliding {
	transition: 0.5s;
}

.carousel__slide {
	opacity: 0.5;
	transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
	transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
	opacity: 0.75;
	transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
	opacity: 0.75;
	transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
	opacity: 1;
	transform: rotateY(0) scale(1.1);
}
</style>