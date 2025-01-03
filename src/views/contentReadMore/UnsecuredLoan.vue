<template>
	<div>
		<h2 class="text-2xl font-bold mb-4">Using Fairbanc</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h2 class="text-1xl font-bold mb-4">Requirements</h2>
				<hr class="my-4">
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

			<div>
				<h2 class="text-1xl font-bold mb-4">Loan Scheme</h2>
				<hr class="my-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.loadScheme"
						:key="index"
						class="flex items-start"
						>
						<span class="text-teal-500 mr-2">✔</span>
						<span class="text-gray-700">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="text-1xl font-bold mb-4">Disburstment Time</h2>
				<hr class="my-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.distribute"
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
		<h2 class="text-2xl font-bold mb-4">Using ALAMI</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h2 class="text-1xl font-bold mb-4">Requirements</h2>
				<hr class="my-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.pointsAlami"
						:key="index"
						class="flex items-start"
						>
						<span class="text-teal-500 mr-2">✔</span>
						<span class="text-gray-700">{{ item }}</span>
					</li>
				</ul>
			</div>

			<div>
				<h2 class="text-1xl font-bold mb-4">Loan Scheme</h2>
				<hr class="my-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.loadSchemeAlami"
						:key="index"
						class="flex items-start"
						>
						<span class="text-teal-500 mr-2">✔</span>
						<span class="text-gray-700">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="text-1xl font-bold mb-4">Disburstment Time</h2>
				<hr class="my-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.distributeAlami"
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
		<h2 class="text-2xl font-bold mb-4">Using KoinWorks</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h2 class="text-1xl font-bold mb-4">Requirements</h2>
				<hr class="my-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.pointsKoinwork"
						:key="index"
						class="flex items-start"
						>
						<span class="text-teal-500 mr-2">✔</span>
						<span class="text-gray-700">{{ item }}</span>
					</li>
				</ul>
			</div>

			<div>
				<h2 class="text-1xl font-bold mb-4">Loan Scheme</h2>
				<hr class="my-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.loadSchemeKoinwork"
						:key="index"
						class="flex items-start"
						>
						<span class="text-teal-500 mr-2">✔</span>
						<span class="text-gray-700">{{ item }}</span>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="text-1xl font-bold mb-4">Disbursement Time</h2>
				<hr class="my-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.distributeKoinwork"
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