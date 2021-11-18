<template>
  <section class="event-sec px-6 py-16 md:py-36">
      <div class="flex flex-col max-w-6xl mx-auto gap-y-28 items-center">
        <!-- Info -->
        <div>
            <h1 class="font-bold text-dark-blue text-5xl text-center mb-12">Events</h1>
            <p class="font-extralight text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie morbi porta justo faucibus 
                    laoreet nunc cursus quisque. In sed eget faucibus est. Convallis nisi tortor, faucibus quisque 
                    mauris netus vitae. Consequat commodo sem bibendum dolor ultrices etiam enim nunc velit. Lacus 
                    ut adipiscing ligula adipiscing pellentesque maecenas varius lacus. In eget in duis nibh elementum. 
                    Tristique amet, feugiat id lacus at et. Nibh.
            </p>
        </div>

        <!-- Event Grid -->
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventsEventCard />
            <EventsEventCard />
            <EventsEventCard />
            <EventsEventCard />
            <EventsEventCard />
            <EventsEventCard />
        </div>

        <!-- Load More -->
        <Button text="Load More" class="px-10 inline-block" />
        
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.event-sec {
    background-image: linear-gradient(
      to top, 
    rgba(44, 193, 199, 0.8) 0%, 
    rgba(217, 237, 146, 0.15) 40%, 
    rgba(217, 237, 146, 0));
}
</style>