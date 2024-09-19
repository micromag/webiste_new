<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <Header />
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-4">
          <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-58 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
            <!-- Magazine Cover Image -->
            <img class="aspect-[10/14] w-full rounded-2xl object-cover" src="/Issue8.png" alt="Issue 8 Cover image" />
          </div>
        </div>
        <div>
          <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
            <!-- Issue Number and topic -->
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl"> 
              Issue 8 - Design an add-on 
            </h1>
            <!-- Issue date (Month Year) -->
            <p class="text-base font-semibold leading-7 text-white"> 
              August 2020 
            </p>
            <div class="max-w-xl">
              <!-- Cover feature title -->
              <p class="mt-6 text-blue-400 font-bold">
                Design an add-on
              </p>
              <!-- Overview of the cover feature -->
              <p class="mt-6 text-white">
                This issue’s cover feature is “Design an add-on”.One of the awesome features we outlined about the micro:bit in our 
                last issue was the edge connector at the bottom. This is great for providing expandability to your micro:bit and 
                increasing the number of things you can do with it. The market is full of interesting add-on boards you can connect 
                to your micro:bit to enable it to do a whole host of different things, but sometimes, there isn’t an add-on board for 
                everything. So why not make your own? In this issue, we’ll be taking a look at how we can make our very own micro:bit 
                add-on board using a free piece of software called Fritzing and how to take it to the manufacturing stage in a few 
                simple and easy to follow steps.
              </p>
              <p class="mt-8 text-blue-400 font-bold">
                Plus!
              </p>
              <!-- Other articles -->
              <ul class="mt-6 text-white">
                <li> No-Touch Handwash Timer </li>
                <li> Making of a micro:bit product </li>
                <li> Coding with 5th Graders </li>
                <li> Huskylens - Reviewed </li>
                <li> And more! </li>
              </ul>
            </div>
          </div>
      
          <!--Link to PDF --> 
          <div class="mt-10 flex">
            <a href="https://drive.google.com/file/d/1A8tzx9YzF3qK5PiOwdkpaVI-etp8rl6_/view?usp=sharing" target="_Blank" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"> 
              Download PDF 
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
  