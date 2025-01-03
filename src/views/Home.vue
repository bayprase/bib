<template>
	<!-- <navbar></navbar> -->
	<div class="bg-white">
	    <header class="fixed inset-x-0 top-0 z-50">
	      <nav class="flex items-center justify-between p-6 lg:px-8" :class="{ 'shadow-lg bg-white': !atTopOfPage, 'shadow-none': atTopOfPage }" aria-label="Global">
	        <div class="flex lg:flex-1">
	          <a href="#" class="-m-1.5 p-1.5">
	            <span class="sr-only">Your Company</span>
	            <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
	          </a>
	        </div>
	        <div class="flex lg:hidden">
	          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
	            <span class="sr-only">Open main menu</span>
	            <Bars3Icon class="size-6" aria-hidden="true" />
	          </button>
	        </div>
	        <div class="hidden lg:flex lg:gap-x-12">
	          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm/6 font-semibold text-gray-900" v-smooth-scroll>{{ item.name }}</a>
	        </div>
	        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
		        <select v-model="selectedLanguage" @change="changeLanguage">
			      <option value="en">English</option>
			      <option value="id">Bahasa Indonesia</option>
			    </select>
	        </div>
	        <!-- <div class="hidden lg:flex lg:flex-1 lg:justify-end">
	          <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
	        </div> -->
	      </nav>
	      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
	        <div class="fixed inset-0 z-50" />
	        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
	          <div class="flex items-center justify-between">
	            <a href="#" class="-m-1.5 p-1.5">
	              <span class="sr-only">Your Company</span>
	              <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
	            </a>
	            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
	              <span class="sr-only">Close menu</span>
	              <XMarkIcon class="size-6" aria-hidden="true" />
	            </button>
	          </div>
	          <div class="mt-6 flow-root">
	            <div class="-my-6 divide-y divide-gray-500/10">
	              <div class="space-y-2 py-6">
	                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
	              </div>
	              <div class="py-6">
	                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
	              </div>
	            </div>
	          </div>
	        </DialogPanel>
	      </Dialog>
	    </header>

	    <div class="relative isolate h-screen px-6 pt-14 lg:px-8" id="home">
	      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
	        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
	      </div>
	      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
	        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
	          <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
	            Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
	          </div>
	        </div>
	        <div class="text-center">
	          <h1 class="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Best in Business CONSULTING</h1>
	          <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Office BIB CONSULTING at GRHA TIRTADI, Jl Wolter Monginsidi 71, Kebayoran Baru, Jakarta Selatan.</p>
	          <div class="mt-10 flex items-center justify-center gap-x-6">
	            <a href="#about" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" v-smooth-scroll>{{ t('button.getStarted') }}</a>
	            <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
	          </div>
	        </div>
	      </div>
	      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
	        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
	      </div>
	    </div>
	</div>

	<div class="bg-white py-24 sm:py-32" id="about">
		<section class="mx-auto max-w-7xl px-6 lg:px-8">
		    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">{{ t('heading.aboutUs') }}</h2>
		    <p class="text-center text-gray-600 mb-8">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

		    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
		      <!-- Left Section with Image and Text -->
		      <div class="flex flex-col">
		        <h3 class="text-2xl font-bold mb-4">
		          Voluptatem dignissimos provident laboris nisi ut aliquip ex ea commodo
		        </h3>
		        <img
		          src="assets/company/about.jpg"
		          alt="Charts and graphs"
		          class="rounded-md mb-6"
		        />
		        <p class="text-gray-700 mb-4">
		          Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat
		          debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur
		          fugiat voluptas ea.
		        </p>
		        <p class="text-gray-700">
		          Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae
		          quo officia vel.
		        </p>
		      </div>

		      <!-- Right Section with List and Video -->
		      <div class="flex flex-col justify-between">
		        <p class="text-gray-600 italic mb-6">
		          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
		          ut labore et dolore magna aliqua.
		        </p>
		        <ul class="space-y-3 mb-8">
		          <li class="flex items-start">
		            <span class="text-green-500 mr-2">✔</span>
		            <span class="text-gray-700">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
		          </li>
		          <li class="flex items-start">
		            <span class="text-green-500 mr-2">✔</span>
		            <span class="text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit.</span>
		          </li>
		          <li class="flex items-start">
		            <span class="text-green-500 mr-2">✔</span>
		            <span class="text-gray-700">
		              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
		              reprehenderit.
		            </span>
		          </li>
		        </ul>
		        <div class="relative">
		          <img
		            src="assets/company/about-2.jpg"
		            alt="Team meeting"
		            class="rounded-md mb-4"
		          />
		          <button
		            class="absolute inset-0 flex items-center justify-center"
		            aria-label="Play video"
		          >
		            <div class="bg-green-500 text-white rounded-full p-4">
		              ▶
		            </div>
		          </button>
		        </div>
		      </div>
		    </div>
		</section>
	</div>

	<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" id="working">
	    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center" />
	    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
	      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
	    </div>
	    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
	      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
	    </div>
	    <div class="mx-auto max-w-7xl px-6 lg:px-8">
	      <div class="mx-auto max-w-2xl lg:mx-0">
	        <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">{{ t('heading.workingWithUs') }}</h2>
	        <p class="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
	      </div>
	      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
	        <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
	          <a v-for="link in links" :key="link.name" :href="link.href">{{ link.name }} <span aria-hidden="true">&rarr;</span></a>
	        </div>
	        <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
	          <div v-for="stat in stats" :key="stat.name" class="flex flex-col-reverse gap-1">
	            <dt class="text-base/7 text-gray-300">{{ stat.name }}</dt>
	            <dd class="text-4xl font-semibold tracking-tight text-white">{{ stat.value }}</dd>
	          </div>
	        </dl>
	      </div>
	    </div>
	</div>

	<div class="bg-white py-24 sm:py-32" id="ourService">
	    <div class="mx-auto max-w-7xl px-6 lg:px-8">
	      <div class="mx-auto max-w-2xl lg:text-center">
	        <h2 class="text-base/7 font-semibold text-indigo-600">Everything you need</h2>
	        <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">{{ t('heading.ourService') }}</p>
	        <p class="mt-6 text-lg/8 text-gray-600">We have 5 services to grow your business.</p>
	      </div>
	      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
	        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
	          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
	            <dt class="text-base/7 font-semibold text-gray-900">
	              <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
	                <component :is="feature.icon" class="size-6 text-white" aria-hidden="true" />
	              </div>
	              {{ feature.name }}
	            </dt>
	            <dd class="my-2 text-base/7 text-gray-500">{{ feature.description }}</dd>
	            <a href="/readMore" class="underline text-base/7 text-gray-400 hover:text-gray-600">{{ t('button.readMore') }} <span aria-hidden="true">→</span></a>
	          </div>
	        </dl>
	      </div>
	    </div>
	</div>

	<div class="bg-white py-16 sm:py-32">
	    <div class="mx-auto max-w-7xl px-6 lg:px-8">
	      <h2 class="text-center text-lg font-semibold text-gray-900">
	        {{ t('heading.trustByClient') }}
	      </h2>
	      <swiper
	        :loop="true"
	        :autoplay="{ delay: 2000, disableOnInteraction: false }"
	        :slides-per-view="6"
	        :space-between="20"
	        :breakpoints="breakpoints"
	        class="mt-10">
	        <swiper-slide v-for="(client, index) in clients" :key="index">
	          <img :src="client" alt="Client Logo" class="h-24 w-auto object-contain mx-auto">
	        </swiper-slide>
	      </swiper>
	    </div>
	</div>

	<div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
	    <div class="mx-auto max-w-7xl px-6 lg:px-8">
	      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
	        <div class="max-w-xl lg:max-w-lg">
	          <h2 class="text-4xl font-semibold tracking-tight text-white">{{ t('heading.subcribe') }}</h2>
	          <p class="mt-4 text-lg text-gray-300">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
	          <div class="mt-6 flex max-w-md gap-x-4">
	            <label for="email-address" class="sr-only">Email address</label>
	            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" placeholder="Enter your email" />
	            <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
	          </div>
	        </div>
	        <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
	          <div class="flex flex-col items-start">
	            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
	              <CalendarDaysIcon class="size-6 text-white" aria-hidden="true" />
	            </div>
	            <dt class="mt-4 text-base font-semibold text-white">Weekly articles</dt>
	            <dd class="mt-2 text-base/7 text-gray-400">Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.</dd>
	          </div>
	          <div class="flex flex-col items-start">
	            <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
	              <HandRaisedIcon class="size-6 text-white" aria-hidden="true" />
	            </div>
	            <dt class="mt-4 text-base font-semibold text-white">No spam</dt>
	            <dd class="mt-2 text-base/7 text-gray-400">Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.</dd>
	          </div>
	        </dl>
	      </div>
	    </div>
	    <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
	      <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
	    </div>
	</div>

	<div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="contact">
	    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
	      <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
	    </div>
	    <div class="mx-auto max-w-2xl text-center">
	      <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ t('heading.contactSales') }}</h2>
	      <p class="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
	    </div>
	    <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
	      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
	        <div>
	          <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">{{ t('contact.firstName') }}</label>
	          <div class="mt-2.5">
	            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
	          </div>
	        </div>
	        <div>
	          <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">{{ t('contact.lastName') }}</label>
	          <div class="mt-2.5">
	            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
	          </div>
	        </div>
	        <div class="sm:col-span-2">
	          <label for="company" class="block text-sm/6 font-semibold text-gray-900">{{ t('contact.company') }}</label>
	          <div class="mt-2.5">
	            <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
	          </div>
	        </div>
	        <div class="sm:col-span-2">
	          <label for="email" class="block text-sm/6 font-semibold text-gray-900">{{ t('contact.email') }}</label>
	          <div class="mt-2.5">
	            <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
	          </div>
	        </div>
	        <div class="sm:col-span-2">
	          <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">{{ t('contact.phone') }}</label>
	          <div class="mt-2.5">
	            <div 
	            class="flex rounded-md bg-white outline outline-1 outline-gray-300
	            has-[input:focus-within]:outline has-[input:focus-within]:outline-2 
	            has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600
	            has-[select:focus-within]:outline has-[select:focus-within]:outline-2 
	            has-[select:focus-within]:-outline-offset-2 has-[select:focus-within]:outline-indigo-600">
	              <div class="grid shrink-0 grid-cols-1 focus-within:relative">
	                <select id="country" name="country" autocomplete="country" aria-label="Country" class="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 sm:text-sm/6 outline-0 border-0">
	                  <option>ID</option>
	                  <option>US</option>
	                  <option>EU</option>
	                </select>
	                <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
	              </div>
	              <input type="text" name="phone-number" id="phone-number" class="block min-w-0 grow text-base text-gray-900 placeholder:text-gray-400 border-0 outline-none active:outline-none focus:ring-0 focus:ring-violet-300 sm:text-sm/6" placeholder="123-456-7890" />
	            </div>
	          </div>
	        </div>
	        <div class="sm:col-span-2">
	          <label for="message" class="block text-sm/6 font-semibold text-gray-900">{{ t('contact.message') }}</label>
	          <div class="mt-2.5">
	            <textarea name="message" id="message" rows="4" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
	          </div>
	        </div>
	        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
	          <div class="flex h-6 items-center">
	            <Switch v-model="agreed" :class="[agreed ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">
	              <span class="sr-only">Agree to policies</span>
	              <span aria-hidden="true" :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
	            </Switch>
	          </div>
	          <SwitchLabel class="text-sm/6 text-gray-600">
	            {{ t('contact.privacy') }}
	            {{ ' ' }}
	            <a href="#" class="font-semibold text-indigo-600">{{ t('button.privacy') }}</a>.
	          </SwitchLabel>
	        </SwitchGroup>
	      </div>
	      <div class="mt-10">
	        <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{ t('button.letsTalk') }}</button>
	      </div>
	    </form>
	</div>

	<footnote></footnote>
</template>

<script setup>
	
	import {computed, ref, onMounted, onBeforeUnmount, watch} from 'vue'

	import { useI18n } from 'vue-i18n';

	// Use i18n hook
	const { locale, t } = useI18n();
	
	
	import store from '../store'
	import navbar from './partials/Navbar.vue'
	import footnote from './partials/Footer.vue'

	import { Dialog, DialogPanel, Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
	import { 
		Bars3Icon, XMarkIcon, ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, 
		LockClosedIcon, CalendarDaysIcon, HandRaisedIcon, LockOpenIcon, ChevronDoubleRightIcon,
		BanknotesIcon, BuildingStorefrontIcon, CreditCardIcon, DocumentCurrencyDollarIcon
	} from '@heroicons/vue/24/outline'
	import { ChevronDownIcon } from '@heroicons/vue/16/solid'

	import { Swiper, SwiperSlide } from 'swiper/vue';
	import 'swiper/css';
	import 'swiper/css/autoplay';

	const mobileMenuOpen = ref(false)
	const agreed = ref(false)
	const atTopOfPage = ref(true);
	const selectedLanguage = ref(locale.value);

	// Function to change language
	

	
	

	// Scroll event handler
	const handleScroll = () => {
	  	atTopOfPage.value = window.pageYOffset === 0;
	};

	onMounted(() => {
	  window.addEventListener('scroll', handleScroll);
	});

	onBeforeUnmount(() => {
	  window.removeEventListener('scroll', handleScroll);
	});

	const navigation = computed(() => [
	  { name: t('navbar.home'), href: '#home', current: true },
	  { name: t('navbar.about'), href: '#about', current: false },
	  { name: t('navbar.ourService'), href: '#ourService', current: false },
	  { name: t('navbar.contact'), href: '#contact', current: false },
	]);

	const features = computed(() => [
		{
		    name		: t('heading.loanWithCollateral'),
		    description	: 'There are two ways to get a loan with collateral, namely through Banking and with a Personal Funder.',
		    icon 		: CreditCardIcon,
		    more		: t('button.readMore')
		},
		{
		    name		: t('heading.unsecuredLoan'),
		    description	: 'There are three ways to get a loan without collateral, namely through Fairbanc, Koinworks, and ALAMI.',
		    icon 		: CreditCardIcon,
		    more		: t('button.readMore')
		},
		{
		    name		: t('heading.loanWithInstrument'),
		    description	: 'There are five ways to get a loan with Instruments, namely through Fairbanc, Domestic Documented Letter of Credit (SKBDN), Letter Of Credit (LC), Standby Letter Of Credit (SBLC), and Certificate of Term Deposit.',
		    icon 		: DocumentCurrencyDollarIcon,
		    more		: t('button.readMore')
		},
		{
		    name		: t('heading.crowdFunding'),
		    description	: 'Crowdfunding itself has 5 stages. What are they?',
		    icon 		: BuildingStorefrontIcon,
		    more		: t('button.readMore')
		},
		{
		    name		: t('heading.investment'),
		    description	: '',
		    icon 		: DocumentCurrencyDollarIcon,
		    more		: t('button.readMore')
		},
	]) 

	const links = [
		{ name: 'Open roles', href: '#' },
		{ name: 'Internship program', href: '#' },
		{ name: 'Our values', href: '#' },
		{ name: 'Meet our leadership', href: '#' },
	]

	const stats = computed(() => [
		{ name: t('contents.officePlace'), value: '12' },
		{ name: t('contents.colleagues'), value: '33+' },
		{ name: t('contents.clients'), value: '50+' },
		{ name: t('contents.service'), value: '5' },
	]) 

	const clients = [
		'assets/clients/dini-medical-center.jpg',
		'assets/clients/kreasi-muda-wisata.jpg',
		'assets/clients/segala-dimensi-media.jpg',
		'assets/clients/dwi-cahaya.png',
		'assets/clients/dini-medical-center.jpg',
		'assets/clients/kreasi-muda-wisata.jpg',
		'assets/clients/segala-dimensi-media.jpg',
		'assets/clients/dwi-cahaya.png',
		'assets/clients/dini-medical-center.jpg',
		'assets/clients/kreasi-muda-wisata.jpg',
		'assets/clients/segala-dimensi-media.jpg',
		'assets/clients/dwi-cahaya.png',
		'assets/clients/dini-medical-center.jpg',
		'assets/clients/kreasi-muda-wisata.jpg',
		'assets/clients/segala-dimensi-media.jpg',
		'assets/clients/dwi-cahaya.png',
	]

	const breakpoints = [
		{
			320: { slidesPerView: 2, spaceBetween: 10 }, // For small screens (phones)
	        480: { slidesPerView: 3, spaceBetween: 10 }, // For slightly larger screens (small tablets)
	        640: { slidesPerView: 4, spaceBetween: 10 }, // For medium screens (tablets)
	        768: { slidesPerView: 5, spaceBetween: 10 }, // For larger tablets
	        1024: { slidesPerView: 6, spaceBetween: 10 }, // For desktops
		}
	]

	const ourService = computed(() => store.state.ourService)


	const changeLanguage = () => {
	  locale.value = selectedLanguage.value;
	};

	
	// Watch for language changes
	watch(selectedLanguage, changeLanguage);
	

</script>
<style scoped>
.swiper-slide {
  @apply flex items-center justify-center;
}
</style>
