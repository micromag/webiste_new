<template>
    <div class="bg-gray-900">
      <!-- Header -->
      <Header />
  
  
        <!-- Header section -->
        <div class="px-6 pt-14 lg:px-8">
          <div class="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Magazine Issues</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">Here you will find all the past issues to download as PDF</p>
          </div>
        </div>
  
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            <!-- Issue 8 -->
            <li>
              <img class="aspect-[10/14] w-full rounded-2xl object-cover" src="/Issue8.png" alt="Issue 8 Cover image" />
              <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-white"> Issue 8 </h3>
              <p class="text-base leading-7 text-gray-300"> Design your own micro:bit add-on </p>
              <NuxtLink to = "/Issue8" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                More Details
              </NuxtLink>
              
            </li>
            <!-- Issue 7 -->
            <li>
              <img class="aspect-[10/14] w-full rounded-2xl object-cover" src="/Issue7.png" alt="Issue 7 Cover image" />
              <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-white"> Issue 7 </h3>
              <p class="text-base leading-7 text-gray-300"> 5 Awesome Features </p>
              <NuxtLink to="/Issue7" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                More Details
              </NuxtLink>
            </li>
            <!-- Issue 6 -->
            <li>
              <img class="aspect-[10/14] w-full rounded-2xl object-cover" src="/Issue6.png" alt="Issue 6 Cover image" />
              <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-white"> Issue 6 </h3>
              <p class="text-base leading-7 text-gray-300"> Build a Robot </p>
              <NuxtLink to="/Issue6" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                More Details
              </NuxtLink>
            </li>
            <!-- Issue 5 -->
            <li>
              <img class="aspect-[10/14] w-full rounded-2xl object-cover" src="/Issue5.png" alt="Issue 5 Cover image" />
              <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-white"> Issue 5 </h3>
              <p class="text-base leading-7 text-gray-300"> Explore MicroPython </p>
              <NuxtLink to="/Issue5" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                More Details 
              </NuxtLink>
            </li>
            <!-- Issue 4 -->
            <li>
              <img class="aspect-[10/14] w-full rounded-2xl object-cover" src="/Issue4.png" alt="Issue 4 Cover image" />
              <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-white"> Issue 4 </h3>
              <p class="text-base leading-7 text-gray-300"> Global Challenge </p>
              <NuxtLink to="/Issue4" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                More Details
              </NuxtLink>
            </li>
            <!-- Issue 3 -->
            <li>
              <img class="aspect-[10/14] w-full rounded-2xl object-cover" src="/Issue3.png" alt="Issue 3 Cover image" />
              <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-white"> Issue 3 </h3>
              <p class="text-base leading-7 text-gray-300"> 10 Amazing micro:bit Projects </p>
              <NuxtLink to="/Issue3" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                More Details
              </NuxtLink>
            </li>
            <!-- Issue 2 -->
            <li>
              <img class="aspect-[10/14] w-full rounded-2xl object-cover" src="/Issue2.png" alt="Issue 2 Cover image" />
              <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-white"> Issue 2 </h3>
              <p class="text-base leading-7 text-gray-300"> Scratch for micro:bit </p>
              <NuxtLink to="/Issue2" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                More Details
              </NuxtLink>
            </li>
            <!-- Issue 1 -->
            <li>
              <img class="aspect-[10/14] w-full rounded-2xl object-cover" src="/Issue1.png" alt="Issue 1 Cover image" />
              <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-white"> Issue 1 </h3>
              <p class="text-base leading-7 text-gray-300"> micro:bits in Libraries </p>
              <NuxtLink to="/Issue1" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                More Details
              </NuxtLink>
            </li>
          </ul>
        </div>
        <NewsletterForm />
      <!-- Footer -->
      <Footer />
     
    </div>
  </template>
  
<script setup lang="ts">
  import {NuxtLink} from '#components'
</script>