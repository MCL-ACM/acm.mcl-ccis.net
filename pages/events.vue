<template>
  <section class="event-sec px-6 pb-6">
    <div class="flex flex-col max-w-6xl mx-auto gap-y-28 items-center">
      <!-- Info -->
      <div>
        <h1 class="font-bold text-dark-blue text-5xl text-center mb-12">
          Events
        </h1>
        <p class="font-extralight text-xl text-center">
          MCL-ACM focuses on providing activities that promote interest in modern computing and develop students' 
          knowledge and skills. This includes programming-related seminars, workshops, contests, and competitions. 
          At the same time, the organization occasionally conducts activities that encourage rest and relaxation 
          among students to build a healthier community.

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
      <transition name="modal-fade">
        <div v-if="toggleModal">
          <!-- Event Modal -->
          <EventsEventModal :details="modalDetails" @close-modal="closeModal" />
          <!-- Modal Background -->
          <div class="fixed inset-0 z-40 opacity-90 bg-gray-50"></div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          title: "422_unprocessable_entity: MCL-ACM Horror Event",
          date: "October 14, 2021",
          cover: "/content/422Horror_01.jpg",
          description:
            "In the spirit of Halloween and as part of MCL’s E-Blaze 2021, MCL-ACM conducted a Horror event for the students to enjoy. It is in the form of an online escape room where teams were given sets of questions that challenged their critical thinking and problem-solving skills.",
          images: ["/content/422Horror_01.jpg", "/content/422Horror_02.jpg", "/content/422Horror_03.jpg", "/content/422Horror_04.jpg", "/content/422Horror_05.jpg", "/content/422Horror_06.jpg", "/content/422Horror_07.jpg", "/content/422Horror_08.jpg", "/content/422Horror_09.jpg", "/content/422Horror_10.jpg", "/content/422Horror_11.jpg", "/content/422Horror_12.jpg", "/content/422Horror_13.jpg", ],
        },
        {
          title: "UXPH Webinar: Utilizing UX to Build Better IT Solutions",
          date: "August 27, 2021",
          cover: "/content/UXPHWebinar_1.jpg",
          description:
            "In celebration of MCL-ACM’s 3rd Founding Anniversary and as part of the ‘CCIS Technology Seminar Series’, MCL-ACM held a webinar in partnership with UXPH. Mr. Jordan Aiko P. Deja, the resource speaker, talked about what User Experience is and how to create a better experience for the users. It was attended by students from MCL and other schools.",
          images: ["/content/UXPHWebinar_1.jpg", "/content/UXPHWebinar_2.jpg", "/content/UXPHWebinar_3.jpg", "/content/UXPHWebinar_4.jpg", "/content/UXPHWebinar_5.jpg", "/content/UXPHWebinar_6.jpg", "/content/UXPHWebinar_7.jpg", "/content/UXPHWebinar_8.jpg", "/content/UXPHWebinar_9.jpg", ],
        },
        {
          title: "Craftivity 2",
          date: "April 26 & 27, 2021",
          cover: "/content/Craftivity2_1.jpg",
          description:
            "For the CCIS College Week 2021, MCL-ACM did a part two of Craftivities after the success of the event during the MCL 15th Foundation Week. It was an event composed of Minecraft activities and was aimed for all the participants to have fun and enjoy the College Week.",
          images: ["/content/Craftivity2_1.jpg", "/content/Craftivity2_2.jpg", "/content/Craftivity2_3.jpg", "/content/Craftivity2_4.jpg", "/content/Craftivity2_5.jpg", "/content/Craftivity2_6.jpg", ],
        },
        {
          title: "CodeX 2021 Programming Workshop",
          date: "April 17, 2021",
          cover: "/content/CodeX2021_1.png",
          description:
            "A Java programming workshop was held for all Senior High School students from different schools. Its aim was to promote education in programming and to demonstrate its application in solving problems.",
          images: ["/content/CodeX2021_1.png", "/content/CodeX2021_2.png", "/content/CodeX2021_3.png", "/content/CodeX2021_4.png", "/content/CodeX2021_5.png", "/content/CodeX2021_6.jpg", ],
        },
        {
          title: "Craftivities",
          date: "January 26 & 27, 2021",
          cover: "/content/Craftivities_1.jpg",
          description:
            "As part of the MCL 15th Foundation Week, MCL-ACM hosted Minecraft activities on their Minecraft server. It was open to all MCL students and was aimed to take the students' minds off their academic responsibilities and have fun during the week.",
          images: ["/content/Craftivities_1.jpg", "/content/Craftivities_2.jpg", "/content/Craftivities_3.jpg", "/content/Craftivities_4.jpg", "/content/Craftivities_5.jpg", "/content/Craftivities_6.png", ],
        },
        {
          title: "Hello Programming 2020: An Hour of Code with MCL-ACM in the New Normal",
          date: "December 10, 2020",
          cover: "/content/HourofCode2020_1.jpg",
          description:
            "MCL-ACM hosted an Hour of Code event in the New Normal using Discord and Google Blocky. Its purpose was to demystify programming and show that everyone can code. The event was participated by Grade 9 to 12 students from the Kids Nucleus School of Laguna, Wise Kids School, and Far Eastern University Alabang.",
          images: ["/content/HourofCode2020_1.jpg", "/content/HourofCode2020_2.jpg", "/content/HourofCode2020_3.jpg", "/content/HourofCode2020_4.jpg", "/content/HourofCode2020_5.png", "/content/HourofCode2020_6.jpg", ],
        },
        {
          title: "Code Masters",
          date: "October 22, 2020",
          cover: "/content/CodeMasters_1.jpg",
          description:
            "Code Masters was an online contest that tested the participants’ understanding of their lessons in IT111/L: Concepts in Object Oriented Programming Lecture/Laboratory and CS102-1/L: Data Structures and Algorithms Analysis Lecture/Laboratory courses. It was executed using Kahoot! and it served as a review for their upcoming final exams.",
          images: ["/content/CodeMasters_1.jpg", "/content/CodeMasters_2.jpg", "/content/CodeMasters_3.jpg", "/content/CodeMasters_4.jpg", "/content/CodeMasters_5.jpg", "/content/CodeMasters_6.png", ],
        },
        {
          title: "Work Immersion Web Development Workshop for ICT-SHS",
          date: "February 1, 2020",
          cover: "/content/WorkImmersionWorkshop_1.jpg",
          description:
            "MCL-ACM, in collaboration with the institution’s SHS-ICT Department, equipped students with basic knowledge and ability in web development in preparation for their work immersion. The workshop introduced web technologies, such as HTML, CSS, Bootstrap, and PHP.",
          images: ["/content/WorkImmersionWorkshop_1.jpg", "/content/WorkImmersionWorkshop_2.jpg", "/content/WorkImmersionWorkshop_3.jpg", ],
        },
        {
          title: "Hello Programming 2019 at Don Jose Integrated High School",
          date: "December 11, 2019",
          cover: "/content/HourofCode2019_1.jpg",
          description:
            "MCL ACM Student Chapter together with the SHS Junior ACM celebrated the Computer Science Education Week 2019 with an Hour of Code event. Thirty-seven Grade 7 students of Don Jose Integrated High School were introduced to concepts of programming using Google Blockly.",
          images: ["/content/HourofCode2019_1.jpg", "/content/HourofCode2019_2.jpg", "/content/HourofCode2019_3.jpg", "/content/HourofCode2019_4.jpg", "/content/HourofCode2019_5.jpg", "/content/HourofCode2019_6.jpg", "/content/HourofCode2019_7.jpg", "/content/HourofCode2019_8.png", ],
        },
        {
          title: "CodeX 2019 Inter-SHS Programming Competition",
          date: "March 1, 2019",
          cover: "/content/CodeX2019Competition_1.jpg",
          description:
            "MCL-ACM held their very first Inter-SHS Programming Competition with six participating schools. The first place, second place and third place were won by Laguna College of Business and Arts, Sto. Domingo Integrated High School, and STI College - Sta. Cruz respectively. Other schools that participated were Christ the King College of Science and Technology, Mind and Integrity College Inc. and Carmona Senior Highschool.",
          images: ["/content/CodeX2019Competition_1.jpg", "/content/CodeX2019Competition_2.jpg", "/content/CodeX2019Competition_3.jpg", "/content/CodeX2019Competition_4.jpg", "/content/CodeX2019Competition_5.jpg", "/content/CodeX2019Competition_6.jpg", "/content/CodeX2019Competition_7.jpg", "/content/CodeX2019Competition_8.jpg", "/content/CodeX2019Competition_9.jpg", ],
        },
        {
          title: "CodeX 2019 Programming Workshop",
          date: "February 16 & 23, 2019",
          cover: "/content/CodeX2019Workshop_1.jpg",
          description:
            "This programming workshop was held to prepare students for the upcoming CodeX 2019 Competition. The competition participants from two different schools were taught about the fundamentals of C# and Java Programming.",
          images: ["/content/CodeX2019Workshop_1.jpg", "/content/CodeX2019Workshop_2.jpg", "/content/CodeX2019Workshop_3.jpg", "/content/CodeX2019Workshop_4.jpg", "/content/CodeX2019Workshop_5.jpg", "/content/CodeX2019Workshop_6.jpg", "/content/CodeX2019Workshop_7.jpg", "/content/CodeX2019Workshop_8.png", ],
        },
        {
          title: "VR PH Seminar: Introduction to Augmented and Virtual Reality",
          date: "January 21, 2019",
          cover: "/content/VRPHSeminar_1.jpg",
          description:
            "MCL-ACM conducted its first seminar in the ‘CCIS Technology Seminar Series’ about VR and AR technology during MCL’s 13th Foundation Day. Its goal was to introduce students to technological advancements, specifically in the fields of Virtual Reality and Augmented Reality.",
          images: ["/content/VRPHSeminar_1.jpg", "/content/VRPHSeminar_2.jpg", "/content/VRPHSeminar_3.jpg", "/content/VRPHSeminar_4.jpg", "/content/VRPHSeminar_5.jpg", "/content/VRPHSeminar_6.jpg", "/content/VRPHSeminar_7.jpg", ],
        },
        {
          title: "Hello Programming!",
          date: "December 7, 2018",
          cover: "/content/HourofCode2018_1.jpg",
          description:
            "In celebration of Computer Science Education Week 2018, MCL-ACM held the ‘Hello Programming! Coding Made Easy, Starts with an #HourofCode’. This event was held to help non-ICT Senior Highschool students understand basic programming using Google Blockly.",
          images: ["/content/HourofCode2018_1.jpg", "/content/HourofCode2018_2.jpg", "/content/HourofCode2018_3.jpg", "/content/HourofCode2018_4.jpg", "/content/HourofCode2018_5.jpg", "/content/HourofCode2018_6.jpg", ],
        },
        {
          title: "CodeX 2018 Programming Challenge",
          date: "October 19, 2018",
          cover: "/content/CodeX2018Challenge_1.jpg",
          description:
            "Students from the previous CodeX Workshop were tested on their programming knowledge. Team Blank, which included ICT members Mikhaela Tapia and Cyrel Ace Lejeta, was awarded the CodeX 2018 champions at the end of the competition.",
          images: ["/content/CodeX2018Challenge_1.jpg", "/content/CodeX2018Challenge_2.jpg", "/content/CodeX2018Challenge_3.jpg", "/content/CodeX2018Challenge_4.jpg", "/content/CodeX2018Challenge_5.jpg", "/content/CodeX2018Challenge_6.jpg", "/content/CodeX2018Challenge_7.jpg", "/content/CodeX2018Challenge_8.jpg", "/content/CodeX2018Challenge_9.jpg", ],
        },
        {
          title: "CodeX 2018 Programming Workshop",
          date: "October 17-18, 2018",
          cover: "/content/CodeX2018Workshop_1.jpg",
          description:
            "In this programming workshop, ICT and STEM students from Malayan Colleges Laguna were taught about the fundamentals of C# and Java Programming. This aimed to introduce the students to the basics of both programming languages.",
          images: ["/content/CodeX2018Workshop_1.jpg", "/content/CodeX2018Workshop_2.jpg", "/content/CodeX2018Workshop_3.jpg", "/content/CodeX2018Workshop_4.jpg", "/content/CodeX2018Workshop_5.jpg", "/content/CodeX2018Workshop_6.jpg", "/content/CodeX2018Workshop_7.jpg", "/content/CodeX2018Workshop_8.jpg", "/content/CodeX2018Workshop_9.jpg", ],
        },
      ],
      limit: 3,
      toggleModal: false,
      modalDetails: {},
    };
  },
  computed: {
    computedEvents() {
      return this.limit ? this.events.slice(0, this.limit) : this.events;
    },
  },
  methods: {
    openModal(details) {
      this.modalDetails = details;
      this.toggleModal = true;
    },
    closeModal() {
      this.toggleModal = false;
    },
  },
};
</script>

<style>
.event-sec {
  background-image: linear-gradient(
    to top,
    rgba(44, 193, 199, 0.8) 0%,
    rgba(217, 237, 146, 0.15) 40%,
    rgba(217, 237, 146, 0)
  );
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
  overflow: hidden;
}
</style>
