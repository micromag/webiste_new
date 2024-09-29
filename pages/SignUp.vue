<template>
    <div class="bg-gray-900">
      <Header />
      <div class="relative isolate overflow-hidden pt-14">
        
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
  
        <!-- Tag Line 
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl">
            Micro:Bit, EdTech & Technology news
          </h1>
        </div>-->
        
        <!-- Blog -->
        <div class="relative px-4 pt-16 pb-20 sm:px-6 lg:pt-26 lg:pb-28 lg:px-10 bg-gray-900">
          <div class="relative mx-auto max-w-7xl bg-gray-900">
            <div class="text-center">
              <h1 class="text-3xl font-extrabold tracking-tight text-blue-400  md:text-7xl">
                Newsletter
              </h1>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </template>