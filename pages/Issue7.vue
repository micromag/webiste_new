<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <Header />
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-4">
          <!-- Magazine Cover Image -->
          <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-58 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
            <img class="aspect-[10/14] w-full rounded-2xl object-cover" src="/Issue7.png" alt="Issue 7 Cover image" />
          </div>
        </div>
        <div>
          <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
            <!-- Issue Number and topic -->
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl"> 
              Issue 7 - 5 Awesome micro:bit Features 
            </h1>
            <!-- Issue date (Month Year) -->
            <p class="text-base font-semibold leading-7 text-white"> 
              March 2020 
            </p>
            <div class="max-w-xl">
              <!-- Cover feature title -->
              <p class="mt-6 text-blue-400 font-bold"> 
                5 Awesome micro:bit Features 
              </p>
              <!-- Overview of the cover feature -->
              <p class="mt-6 text-white">
                This issue’s cover feature is “5 Awesome micro:bit Features”. If you’re a regular reader of micro:mag, you probably 
                already know that the BBC micro:bit is AWESOME. However, it’s easy to get caught up in using accessories such as 
                robots, speakers and LED lights and forget about some of the amazing onboard features the micro:bit has. That’s why 
                this issue we have compiled five of our favourite features of the BBC micro:bit and put them into this cover feature 
                with code examples in three of the major code editors for the micro:bit (MakeCode, EduBlocks and Python) which should 
                cater for all levels of coders.
              </p>
              <p class="mt-8 text-blue-400 font-bold">
                Plus!
              </p>
              <!-- Other articles -->
              <ul class="mt-6 text-white">
                <li> Scratch Audio Game </li>
                <li> MIT App Inventor + micro:bit </li>
                <li> Adafruit Clue </li>
                <li> micro:bit Classroom Tool released </li>
                <li> And more! </li>
              </ul>
            </div>
          </div>
          <!--Link to PDF --> 
          <div class="mt-10 flex">
            <a href="https://drive.google.com/file/d/1ltRolUWRvmlqmivRMfPkoeHTiRqxq7Y7/view?usp=sharing" target="_Blank" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"> 
              Download PDF 
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
  