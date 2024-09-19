<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <Header />
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-4">
          <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-58 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
            <!-- Magazine Cover Image -->
            <img class="aspect-[10/14] w-full rounded-2xl object-cover" src="/Issue4.png" alt="Issue 4 Cover image" />
          </div>
        </div>
        <div>
          <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
            <!-- Issue Number and topic -->
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl"> 
              Issue 4 - Global Challenge 
            </h1>
            <!-- Issue date (Month Year) -->
            <p class="text-base font-semibold leading-7 text-white"> 
              April 2019 
            </p>
            <div class="max-w-xl">
              <!-- Cover feature title -->
              <p class="mt-6 text-blue-400 font-bold"> 
                Global Challenge 
              </p>
              <!-- Overview of the cover feature -->
              <p class="mt-6 text-white">
                This issues Cover feature is “Global Challenge”. In 2018, the Micro:bit Educational Foundation with Arm and World’s 
                Largest Lesson challenged students aged 8-12 across the globe to consider how these Goals could change the lives of 
                themselves and others and to design solutions to these Goals using the micro:bit. The challenge was supported by a 
                number of delivery partners, the Global Challenge competition saw hundreds of entries from a diverse range of 
                countries, cultures, and backgrounds. There were hundreds of entries showcasing unique ideas tackling the Safety 
                challenge or the Non-communicable diseases challenge! In this exciting cover feature, we learn more about the 
                challenge and meet the winners.
              </p>
              <p class="mt-8 text-blue-400 font-bold">
                Plus!
              </p>
              <!-- Other articles -->
              <ul class="mt-6 text-white">
                <li> Playing with Magnets </li>
                <li> Battery Eliminator for micro:bit </li>
                <li> Pimoroni’s Bear Badge Bit:Kit Review </li>
                <li> Make your own Neopixel-Style LED board for under £1 </li>
                <li> And more! </li>
              </ul>
            </div>
          </div>
          <!--Link to PDF --> 
          <div class="mt-10 flex">
            <a href="https://drive.google.com/file/d/1rPlQ03GFfm5WGWSNzcGM9GVaamo0L1zz/view?usp=sharing" target="_Blank" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"> 
              Download PDF 
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>