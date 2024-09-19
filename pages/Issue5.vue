<template>
  <div class="bg-gray-900 py-24 sm:py-32">
    <Header />
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-4">
          <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-58 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
            <!-- Magazine Cover Image -->
            <img class="aspect-[10/14] w-full rounded-2xl object-cover" src="/Issue5.png" alt="Issue 5 Cover image" />
          </div>
        </div>
        <div>
          <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
            <!-- Issue Number and topic -->
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl"> 
              Issue 5 - Explore MicroPython 
            </h1>
            <!-- Issue date (Month Year) -->
            <p class="text-base font-semibold leading-7 text-white"> 
              August 2019 
            </p>
            <div class="max-w-xl">
              <!-- Cover feature title -->
              <p class="mt-6 text-blue-400 font-bold"> 
                Explore MicroPyton 
              </p>
              <!-- Overview of the cover feature -->
              <p class="mt-6 text-white">
                This issue’s cover feature is “Explore MicroPython”. We’ve got lots of MicroPython content this issue, in fact, most 
                of the code in this issue is written in MicroPython. In our cover feature, you’ll find some information about 
                MicroPython, tips on which editor to use, useful links/guides and 10 MicroPython mini projects for you to try!
              </p>
              <p class="mt-8 text-blue-400 font-bold">
                Plus!
              </p>
              <!-- Other articles -->
              <ul class="mt-6 text-white">
                <li> Robotics in Canada </li>
                <li> Drones </li>
                <li> Thermal Pollution Monitoring </li>
                <li> micro:bit Live News </li>
                <li> Add wifi to your micro:bit </li>
                <li> And more! </li>
              </ul>
            </div>
          </div>
          <!--Link to PDF --> 
          <div class="mt-10 flex">
            <a href="https://drive.google.com/file/d/1DIojpYcidUD585qkNlCEFaIxzByHj9CN/view?usp=sharing" target="_Blank" class="rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold text-grey-900 shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"> 
              Download PDF 
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>