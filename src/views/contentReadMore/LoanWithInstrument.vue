<template>
	<div>
		<h2 class="text-2xl font-bold mb-4">Using Fairbanc - Bank Guarantee </h2>
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
				<h2 class="text-1xl font-bold mb-4">Disbursement Time</h2>
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
		<h2 class="text-2xl font-bold mb-4">Using PT ACN - DOMESTIC DOCUMENTED LETTER OF CREDIT (SKBDN)</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h2 class="text-1xl font-bold mb-4">Requirements</h2>
				<hr class="my-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.pointsSKBDN"
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
						v-for="(item, index) in selectedService?.loadSchemeSKBDN"
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
						v-for="(item, index) in selectedService?.distributeSKBDN"
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
		<h2 class="text-2xl font-bold mb-4">Using PT PAK - LETTER OF CREDIT (LC)</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h2 class="text-1xl font-bold mb-4">Requirements</h2>
				<hr class="my-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.pointsLC"
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
						v-for="(item, index) in selectedService?.loadSchemeLC"
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
						v-for="(item, index) in selectedService?.distributeLC"
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
		<h2 class="text-2xl font-bold mb-4">Using PT TOR - STANDBY LETTER OF CREDIT (SBLC)</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h2 class="text-1xl font-bold mb-4">Requirements</h2>
				<hr class="my-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.pointsSBLC"
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
						v-for="(item, index) in selectedService?.loadSchemeSBLC"
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
						v-for="(item, index) in selectedService?.distributeSBLC"
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
		<h2 class="text-2xl font-bold mb-4">Using Personal Funds - TERM DEPOSIT CERTIFICATE (SDB)</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h2 class="text-1xl font-bold mb-4">Requirements</h2>
				<hr class="my-4">
				<ul class="space-y-3">
					<li
						v-for="(item, index) in selectedService?.pointsSDB"
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
						v-for="(item, index) in selectedService?.loadSchemeSDB"
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
						v-for="(item, index) in selectedService?.distributeSDB"
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