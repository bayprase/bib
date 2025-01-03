<template>
	<div>
		<h2 class="text-1xl font-bold mb-4">What is the Funding Range for Crowdfunding? </h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="col-span-3">
				<h2 class="text-4xl font-bold mb-4">500 MILLION – 1 BILLION</h2>
			</div>
		</div>
	</div>
	<hr class="my-4" />
	<div>
		<h2 class="text-2xl font-semibold mb-4">Crowdfunding Stages</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div>
				<!-- <h2 class="text-1xl font-bold mb-4">Requirements</h2> -->
				<!-- <hr class="my-4"> -->
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.pointsPersonal"
						:key="index"
						class="flex items-start"
						>
						<span class="text-teal-500 mr-2">✔</span>
						<div v-for="(items, indexing) in selectedService?.descriptionStage1">
							<p class="text-base m-0 text-gray-700" v-if="(item.id === items.id)"><b>{{ item.describe }}</b> <br> {{ items.describe }}</p>
						</div>
					</li>
				</ul>
			</div>

			<div>
				<!-- <h2 class="text-1xl font-bold mb-4">Loan Scheme</h2> -->
				<!-- <hr class="my-4"> -->
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.loadSchemePersonal"
						:key="index"
						class="flex items-start"
						>
						<span class="text-teal-500 mr-2">✔</span>
						<div v-for="(items, indexing) in selectedService?.descriptionStage2">
							<p class="text-base m-0 text-gray-700" v-if="(item.id === items.id)"><b>{{ item.describe }}</b> <br> {{ items.describe }}</p>
						</div>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="text-2xl font-semibold mb-4">TIMELINE Crowdfunding</h2>
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.distributePersonal"
						:key="index"
						class="flex items-start"
						>
						<span class="text-teal-500 mr-2">✔</span>
						<span class="text-gray-700">{{ item }}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script setup>

	import { defineProps } from 'vue'

	const props = defineProps({
	  selectedService: {
	    type: Object,
	    required: true,
	  },
	})
</script>