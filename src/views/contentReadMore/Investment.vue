<template>
	<div>
		<h2 class="text-2xl font-bold mb-4">COOPERATION SCHEME WITH INVESTORS</h2>
		<div class="grid grid-cols-1 gap-8">
			<div>
				<!-- <h2 class="text-1xl font-bold mb-4">Requirements</h2> -->
				<hr class="mb-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.points"
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
	<div class="my-12"></div>
	<div>
		<h2 class="text-2xl font-bold mb-4">DOCUMENTS THAT MUST BE PREPARED</h2>
		<div class="grid grid-cols-1 gap-8">
			<div>
				<!-- <h2 class="text-1xl font-bold mb-4">Requirements</h2> -->
				<hr class="mb-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.pointsPersonal"
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