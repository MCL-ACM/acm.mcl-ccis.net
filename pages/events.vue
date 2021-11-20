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
            <EventsEventCard 
              v-for="(event, index) in computedEvents" 
              :key="index" 
              :details="event" 
              @open-modal="openModal"
            />
        </div>

        <!-- Load More -->
        <div v-if="limit < Object.keys(events).length" class="inline-block">
          <button
            class="
              text-lg
              font-medium
              bg-blue
              text-white
              rounded-full
              px-5
              py-3
              transition
              duration-75
              transform
              hover:scale-105 hover:shadow-lg
            "
            @click="limit += 3"
          >
            Load More
          </button>
        </div>

        <!-- Event Modal -->
        <EventsEventModal v-if="toggleModal" :details="modalDetails" @close-modal="closeModal" />
        
        <!-- Modal Background -->
        <div v-if="toggleModal" class="fixed inset-0 z-40 opacity-90 bg-gray-50"></div>
        
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          title: 'Hello Programming: Hour of Code',
          date: 'January 1, 2021',
          cover: '/content/hoc.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          images: [
            '/content/hoc.jpg',
            '/content/codex-logo.png',
            '/content/hoc.jpg',
            '/content/codex-logo.png',
          ]
        },
        {
          title: 'CodeX',
          date: 'March 2021',
          cover: '/content/codex-logo.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          images: [
            '/content/hoc.jpg',
            '/content/codex-logo.png',
            '/content/hoc.jpg',
            '/content/codex-logo.png',
          ]
        },
        {
          title: 'Hello Programming: Hour of Code',
          date: 'January 1, 2021',
          cover: '/content/hoc.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          images: [
            '/content/hoc.jpg',
            '/content/codex-logo.png',
            '/content/hoc.jpg',
            '/content/codex-logo.png',
          ]
        },
        {
          title: 'CodeX',
          date: 'March 2021',
          cover: '/content/codex-logo.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          images: [
            '/content/hoc.jpg',
            '/content/codex-logo.png',
            '/content/hoc.jpg',
            '/content/codex-logo.png',
          ]
        },
        {
          title: 'Hello Programming: Hour of Code',
          date: 'January 1, 2021',
          cover: '/content/hoc.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          images: [
            '/content/hoc.jpg',
            '/content/codex-logo.png',
            '/content/hoc.jpg',
            '/content/codex-logo.png',
          ]
        },
        {
          title: 'CodeX',
          date: 'March 2021',
          cover: '/content/codex-logo.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          images: [
            '/content/hoc.jpg',
            '/content/codex-logo.png',
            '/content/hoc.jpg',
            '/content/codex-logo.png',
          ]
        },
        {
          title: 'Hello Programming: Hour of Code',
          date: 'January 1, 2021',
          cover: '/content/hoc.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          images: [
            '/content/hoc.jpg',
            '/content/codex-logo.png',
            '/content/hoc.jpg',
            '/content/codex-logo.png',
          ]
        },
        {
          title: 'CodeX',
          date: 'March 2021',
          cover: '/content/codex-logo.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          images: [
            '/content/hoc.jpg',
            '/content/codex-logo.png',
            '/content/hoc.jpg',
            '/content/codex-logo.png',
          ]
        },
      ],
      limit: 3,
      toggleModal: false,
      modalDetails: {},
    }
  },
  computed: {
    computedEvents() {
      return this.limit ? this.events.slice(0,this.limit) : this.events
    }
  },
  methods: {
    openModal(details) {
      this.modalDetails = details;
      this.toggleModal = true;
    },
    closeModal() {
      this.toggleModal = false;
    }
  }
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