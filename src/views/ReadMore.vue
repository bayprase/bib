<template>
	<div class="bg-white">
		<navbar></navbar>
		<section>
	    <!-- Hero Banner -->
	    <div class="bg-white dark:bg-gray-900 py-32 px-4 text-center">
	      <h1 class="text-white text-4xl font-bold mb-2">Service Details</h1>
	      <!-- <p class="text-white max-w-3xl mx-auto">
	        Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint
	        voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores.
	      </p> -->
	    </div>

	    <!-- Breadcrumb Navigation -->

	    <!-- Main Content -->
	    <div class="mx-auto max-w-7xl px-6 lg:px-8">
		    <div class="px-4 md:px-16 py-4 text-gray-600">
		      <span>Home</span> <span class="mx-1">/</span>
		      <span class="font-semibold">Service Details</span>
		    </div>

		    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-16 py-8">
				<!-- Sidebar Menu -->
				<div class="lg:col-span-1">
					<div class="border rounded-md p-6">
						<ul class="space-y-4">
							<li
								v-for="(service, index) in services"
								:key="index"
								@click="selectService(service)"
								:class="[
								'cursor-pointer hover:text-teal-600',
								selectedService.id === service.id
								  ? 'font-semibold border-l-4 border-teal-500 pl-2'
								  : 'pl-2'
								]"
								>
								{{ service.title }}
							</li>
						</ul>
					</div>
				</div>

				<!-- Service Details Content -->
				<div class="lg:col-span-2">
					<div class="mb-8">
						<img :src="selectedService.image" :alt="selectedService.title" class="rounded-md w-full" />
					</div>

					<div v-if="(selectedService?.id !== 5)">
						<h2 class="text-2xl font-bold mb-4">{{ selectedService.heading }}</h2>
						<p class="text-gray-700 mb-6">{{ selectedService.description }}</p>
						<ul class="grid grid-cols-2 items-center">
							<li v-for="(item, index) in selectedService.banks" :key="index" class="flex items-start col-span-1 mb-2">
								<span class="text-teal-500 mr-2">✔</span>
								<span class="text-gray-700">{{ item }}</span>
							</li>
						</ul>
						<hr class="my-4">
					</div>


					<loanWithBanking :selectedService="selectedService" v-if="(selectedService?.id == 1)"></loanWithBanking>
					<unsecuredLoan :selectedService="selectedService" v-if="(selectedService?.id == 2)"></unsecuredLoan>
					<loanWithInstrument :selectedService="selectedService" v-if="(selectedService?.id == 3)"></loanWithInstrument>
					<crowdFunding :selectedService="selectedService" v-if="(selectedService?.id == 4)"></crowdFunding>
					<investment :selectedService="selectedService" v-if="(selectedService?.id == 5)"></investment>

				</div>
		    </div>
	    	
	    </div>
	  </section>
	</div>
	<footnote></footnote>
</template>

<script setup>
	import {ref} from 'vue'
	import navbar from './partials/Navbar.vue'
	import footnote from './partials/Footer.vue'
	import loanWithBanking from './contentReadMore/LoanWithBanking.vue'
	import unsecuredLoan from './contentReadMore/unsecuredLoan.vue'
	import loanWithInstrument from './contentReadMore/LoanWithInstrument.vue'
	import crowdFunding from './contentReadMore/Crowdfunding.vue'
	import investment from './contentReadMore/Investment.vue'


	const services = [
	  {
	    id: 1,
	    title: 'Loans with collateral',
	    heading: 'Loans with collateral',
	    description: 'You can apply for a loan using banking or using personal funds, this is banking that has been registered.',
	    image: 'https://via.placeholder.com/700x400?text=Web+Design',
	    banks: ['BANK BRI', 'BANK BNI', 'BANK MANDIRI', 'BANK BSI', 'Bridging Assets'],

	    points: [
	      'ASSETS AS COLLATERAL .',
	      'BI CHECKING CLEAR.',
	      'PT/CV MINIMUM 2 YEARS.',
	      'PROPOSAL PROJECT.',
	    ],

	    loadScheme: [
	    	'LOAN VALUE FROM 80% APPRAISAL/NJOP ASSETS',
	    	'MONTHLY INSTALLMENT + PROFIT SHARING DURING CONTRACT PERIOD'
	    ],

	    distribute: [
	    	'1 MONTH (BIB EXPRESS SERVICE)'
	    ],

	    pointsPersonal: [
	      'ASSETS AS COLLATERAL .',
	      'PT/CV MINIMUM 2 YEARS.',
	    ],

	    loadSchemePersonal: [
	    	'LOAN VALUE FROM NJOP / COLLATERAL ASSET APPRAISAL',
	    	'HOUSE & LAND LIQUID 50% NJOP/APPR',
	    	'LAND ONLY LIQUID 30% NJOP/APPR',
	    	'Discounts up to 10-15%',
	    	'PROFIT SHARING 2-3% /MONTH',
	    	'MAX 6 MONTHS LOAN',
	    	'ATTACH PO / SPK / INVOICE FOR RETURN SCHEME'
	    ],

	    distributePersonal: [
	    	'7 DAYS AFTER MOU'
	    ]
	  },
	  {
	    id: 2,
	    title: 'Unsecured Loans',
	    heading: 'Unsecured Loans',
	    description: 'We have 3 methods to apply for a loan without collateral, namely using.',
	    image: 'https://via.placeholder.com/700x400?text=Web+Design',
	    banks: ['Fairbanc', 'Koinworks', 'ALAMI'],

	    points: [
	      'ASSETS AS COLLATERAL .',
	      'FREE CASH FLOW (FCF) ANALYSIS OF ANNUAL ACCOUNT MOVEMENTS.',
	    ],

	    loadScheme: [
	    	'MAX 5 BILLION',
	    	'LOAN VALUE 10 X AVERAGE FREE CASH FLOW PER YEAR OR ½ OF NET PROFIT PER YEAR',
	    	'MAX LOAN 1 YEAR THEN RENEWAL',
	    	'PER MONTH FAIRBANC FEE 3%',
	    	'LOAN DISBURSEMENT WITHOUT DEDUCTIONS',
	    	'EVERY MONTH PAY THE END OF THE MONTH FEE ONLY WITHOUT INSTALLMENTS',
	    	'END OF YEAR RETURN',
	    ],

	    distribute: [
	    	'10 DAYS AFTER MOU'
	    ],

	    pointsAlami: [
	      'PT or CV',
	      'PT/CV MINIMUM 1 YEARS',
	      'BI CHECKING',
	    ],

	    loadSchemeAlami: [
	    	'MAX 10 BILLION',
	    	'OVER 2 Billion accounts joined ALAMI',
	    	'80% DISBURSEMENT FROM PO / INVOICE',
	    	'DEDUCTED ADMIN FEE: 0.9% (1 Month), 1.2% (2 Months), 1.75% (3 Months)',
	    	'RETURN PLUS PROFIT SHARING 15%-25% /Year',
	    	'PO BRIDGING MAX 6 Months, INVOICE MAX 3 Months',
	    ],

	    distributeAlami: [
	    	'MAX 1 MONTH AFTER MOU'
	    ],

	    pointsKoinwork: [
	      'PT/ CV/ PD/ INDIVIDUAL HAS NIB',
	      'MINIMUM 1 YEAR',
	      'BI CHECKING',
	    ],

	    loadSchemeKoinwork: [
	    	'MAX 10 BILLION',
	    	'OVER 2 Billion accounts joined ALAMI',
	    	'80% DISBURSEMENT FROM PO / INVOICE',
	    	'DEDUCTED ADMIN FEE: 0.9% (1 Month), 1.2% (2 Months), 1.75% (3 Months)',
	    	'RETURN PLUS PROFIT SHARING 15%-25% /Year',
	    	'PO BRIDGING MAX 6 Months, INVOICE MAX 3 Months',
	    	'FOR LOAN MAX 24 MONTHS, MONTHLY INSTALLMENT + PROFIT SHARING 15-25%',
	    ],

	    distributeKoinwork: [
	    	'1 MONTH AFTER MOU'
	    ],
	  },
	  {
	    id: 3,
	    title: 'Loans with Instruments',
	    heading: 'Loans with Instruments',
	    description: 'We have 5 methods to apply for a loan without collateral, namely using.',
	    image: 'https://via.placeholder.com/700x400?text=Web+Design',
	    banks: ['Bank Guarantee (BG)', 'DOMESTIC DOCUMENTED LETTER OF CREDIT (SKBDN)', 'LETTER OF CREDIT (LC)', 'STANDBY LETTER OF CREDIT (SBLC)', 'TERM DEPOSIT CERTIFICATE (SDB)'],

	    points: [
	      'PT / CV MINIMUM 2 YEARS',
	      'BANK GUARANTEE TYPE OF PAYMENT GUARANTEE READY FOR ISSUANCE',
	    ],

	    loadScheme: [
	    	'MAX 100 BILLION',
	    	'RETURN TIME 1 YEAR',
	    	'CONTRACT OWNER PROJECT WITH FAIRBANC',
	    	'BG ISSUED WITH FAIRBANC AS A BENEFICIARY',
	    	'BG ISSUANCE FEES IN APPLICANT COVER',
	    	'AFTER THE ON WARRANTY IS SUBMITTED TO FAIRBANC',
	    	'THE NEXT DAY THE DISBURSEMENT WILL BE TO THE ACTUAL BENEFICIARY WITH A DISCOUNT VALUE OF UP TO 7-8%',
	    	'PER MONTH 2% FAIRBANC CONSULTANT FEE',
	    	'FULL REFUND OF BG VALUE',
	    	'CAN BE EXTENDED AFTER 1 YEAR WITH RENEWAL',
	    ],

	    distribute: [
	    	'1-3 DAYS AFTER THE BG ON WARRANTY'
	    ],

	    pointsSKBDN: [
	      'PT / CV MINIMUM 2 YEARS',
	      'SKBDN TYPE USANCE ACCEPTANCE WILL BE ISSUED',
	    ],

	    loadSchemeSKBDN: [
	    	'MAX 1 TRILLION',
	    	'1 YEAR RETURN TIME, EXTEND ACCORDING TO THE PROJECT',
	    	'CONTRACT BENEFICIARY SKBDN WITH PT ACN',
	    	'SKBDN ISSUED BY PT ACN AS BENEFICIARY',
	    	"SKBDN ISSUANCE FEES ON THE ISSUER'S COVER",
	    	'AFTER THE WARRANTY ON PT ACN TRANSFER TO OWNER VALUE OF SKBDN DISCOUNT UP TO 13%',
	    	'FULL REFUND OF CONTRACT VALUE',
	    	'CAN ROLL OVER AFTER 1 YEAR, MAX 2 YEARS',
	    ],

	    distributeSKBDN: [
	    	'3 HARI SETELAH WARKAT SKBDN ON'
	    ],

	    pointsLC: [
	      'PT / CV MINIMUM 2 YEARS',
	      'LC TYPE USANCE ACCEPTANCE'
	    ],

	    loadSchemeLC: [
	    	'MAX 1 TRILLION',
	    	'RETURN PERIOD 1 YEAR OR AS PER CONTRACT',
	    	'BENEFICIARY LC CONTRACT WITH PT PAK',
	    	'LC ISSUED BY BUYER WITH PT PAK AS BENEFICIARY',
	    	"LC ISSUANCE COSTS ARE COVERED BY THE PUBLISHER",
	    	'AFTER THE WARRANTY ON PT PAK TRANSFER TO OWNER VALUE OF LC DISCOUNT UP TO 17%',
	    	'FULL REFUND OF CONTRACT VALUE',
	    	'IF THE LC IS ALREADY ON, PT PAK CAN HELP FUND WITH PT PAK ENTERING THE PROJECT STRUCTURE, LC EXPIRED IN 90 DAYS',
	    ],

	    distributeLC: [
	    	'7 DAYS AFTER LC ON WARRANTY'
	    ],

	    pointsSBLC: [
	      'PT / CV MINIMUM 2 YEARS',
	      'SBLC TYPE USANCE ACCEPTANCE'
	    ],
	    
	    loadSchemeSBLC: [
	    	'MAX 1 TRILLION',
	    	'RETURN PERIOD 1 YEAR OR AS PER CONTRACT',
	    	'BENEFICIARY SBLC CONTRACT WITH PT TOR',
	    	'SBLC ISSUED BY BUYER WITH PT TOR AS BENEFICIARY',
	    	"SBLC ISSUANCE COSTS ARE COVERED BY THE ISSUER",
	    	'AFTER THE WRITERS ON PT TOR TRANSFER TO OWNER SBLC VALUE DISCOUNT UP TO 17%',
	    	'FULL REFUND OF CONTRACT VALUE',
	    	'IF SBLC IS ALREADY ON, PT TOR CAN HELP FUNDING WITH PT TOR ENTERING THE PROJECT STRUCTURE',
	    ],

	    distributeSBLC: [
	    	'7 DAYS AFTER SBLC WARRANTY ON'
	    ],

	    pointsSDB: [
	      'PT / CV MINIMUM 2 YEARS',
	      'ACCOUNT MUTATION'
	    ],
	    
	    loadSchemeSDB: [
	    	'MAX 1 TRILLION',
	    	'HISTORICAL DEPOSIT MIN 1 YEAR',
	    	'DEPOSIT TERM INFORMATION',
	    	'DISCOUNT UP TO 10%',
	    	"MOU DIRECTLY WITH SDB OWNER",
	    	'AGREED RETURN TIME',
	    	'FULL REFUND OF CONTRACT VALUE',
	    ],

	    distributeSDB: [
	    	'1 MONTH AFTER MOU'
	    ],
	  },
	  {
	    id: 4,
	    title: 'Crowdfunding',
	    heading: 'Crowdfunding',
	    description: 'Types of businesses that can be helped with crowdfunding, below are the types of businesses that can be helped with crowdfunding',
	    image: 'https://via.placeholder.com/700x400?text=Web+Design',
	    banks: ['Cafe', 'Restaurant', 'Machine Shop', 'Laundry', 'MiniMart', 'Pharmacy / Apotek', 'Grocery', ' Fruities', 'Barbershop', 'Salon', 'Coffeeshop', 'Meatstore', 'Snackstore', 'Etc.'],

	    points: [
	      'ASSETS AS COLLATERAL .',
	      'BI CHECKING CLEAR.',
	      'PT/CV MINIMUM 2 YEARS.',
	      'PROPOSAL PROJECT.',
	    ],

	    loadScheme: [
	    	'LOAN VALUE FROM 80% APPRAISAL/NJOP ASSETS',
	    	'MONTHLY INSTALLMENT + PROFIT SHARING DURING CONTRACT PERIOD'
	    ],

	    distribute: [
	    	'1 MONTH (BIB EXPRESS SERVICE)'
	    ],

	    pointsPersonal: [
		    {
		    	id: 1,
		    	describe: 'BUSINESS CHECK'
		    },

		    {
		    	id: 2,
		    	describe: 'SALES DATA ANALYSIS',
		    },

		    {
		    	id: 3,
		    	describe: 'CROWDFUNDING SCHEME',
		    },
	      
	    ],

	    loadSchemePersonal: [
	    	{
		    	id: 1,
		    	describe: 'CROWDFUNDING PROCESS',
		    },
		    {
		    	id: 2,
		    	describe: 'CROWDFUNDER GATHERING & MOU',
		    },
	    ],

	    descriptionStage1: [
		    {
		    	id: 1,
		    	describe: '( Visit Business Location, Interview Owner, Historical Sales Data )'
		    },
		    {
		    	id: 2,
		    	describe: '( Cashflow Analysis, Market Research, Sales Plan )'
		    },
		    {
		    	id: 3,
		    	describe: '( Break Event Point, Profit Sharing, Sales Target )'
		    }
	    ],
	    descriptionStage2: [
	    	{
		    	id: 1,
		    	describe: '( Crowdfunder Hunt, Registration, Scheme Explanation )'
		    },
		    {
		    	id: 2,
		    	describe: '( Gathering Invitation, Project Presentation, MOU, Disbursement )'
		    },
	    ],
	  },
	  {
	    id: 5,
	    title: 'Investment',
	    heading: 'Investment',
	    description: 'You can apply for a loan using banking or using personal funds, this is banking that has been registered.',
	    image: 'https://via.placeholder.com/700x400?text=Web+Design',
	    banks: ['BANK BRI', 'BANK BNI', 'BANK MANDIRI', 'BANK BSI', 'Bridging Assets'],

	    points: [
	      'Investors can get company shares',
	      'Investors enter as commissioners or directors',
	      'The size of the shares depends on the agreement or MOU',
	      'Usually investors are at 60%-70% owners are at 30%-40%',
	      'After Return Of Investment (ROI), the share size is replaced',
	      'The cooperation period is usually 2x ROI. If ROI is 5 years, the cooperation is 10 years',
	      'Investors come in as Finance Director. Oversee finances throughout the project',
	      'If the investor does not ask for shares, a Joint Account is created with the owner as a special project account. Profit share or profit will be transferred to the JA account and then divided according to the agreement',
	    ],

	    loadScheme: [
	    	'LOAN VALUE FROM 80% APPRAISAL/NJOP ASSETS',
	    	'MONTHLY INSTALLMENT + PROFIT SHARING DURING CONTRACT PERIOD'
	    ],

	    distribute: [
	    	'1 MONTH (BIB EXPRESS SERVICE)'
	    ],

	    pointsPersonal: [
	      'Company Documents (Deed, Decree, KTP, NIB, NPWP)',
	      'MOU / SPK / PO / DO / Invoice',
	      'Financial Report 2021-2022',
	      'Sales & Margin Forecast 5 Years Ahead',
	      'Project Feasibility Report',
	      'Corporate Strategy 5 – 10 Years Ahead',
	      'Business Risk Strategy',
	    ],

	    loadSchemePersonal: [
	    	'LOAN VALUE FROM NJOP / COLLATERAL ASSET APPRAISAL',
	    	'HOUSE & LAND LIQUID 50% NJOP/APPR',
	    	'LAND ONLY LIQUID 30% NJOP/APPR',
	    	'Discounts up to 10-15%',
	    	'PROFIT SHARING 2-3% /MONTH',
	    	'MAX 6 MONTHS LOAN',
	    	'ATTACH PO / SPK / INVOICE FOR RETURN SCHEME'
	    ],

	    distributePersonal: [
	    	'7 DAYS AFTER MOU'
	    ]
	  },
	]

	const selectedService = ref(services[0])

	// Function to select a service
	const selectService = (service) => {
	  selectedService.value = service
	}

</script>

<style scoped>
li {
  transition: color 0.3s;
  outline: none;
}
</style>