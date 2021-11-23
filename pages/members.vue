<template>
  <div class="relative">
    <main class="container flex flex-col min-h-screen">
      <h1 class="text-dark-blue text-5xl font-bold mb-6">Members</h1>
      <MembersCollapsibleItem class="collapse-item">
        <template #header>
          <p class="collapse-header">Committees</p>
        </template>
        <template #content>
          <MembersCollapsibleItem class="collapse-item">
            <template #header>
              <p class="collapse-header">Executive Committee</p>
            </template>
            <template #content>
              <MembersExecutiveCard
                :members="details.executiveCommittee"
                class="collapse-content"
              />
            </template>
          </MembersCollapsibleItem>
          <div v-for="(committee, index) in details.committees" :key="index">
            <MembersCollapsibleItem class="collapse-item">
              <template #header>
                <p class="collapse-header text-left">
                  {{ committee.title }}
                </p>
              </template>
              <template #content>
                <MembersCommitteeCard
                  :details="committee"
                  class="collapse-content"
                />
              </template>
            </MembersCollapsibleItem>
          </div>
        </template>
      </MembersCollapsibleItem>
      <MembersCollapsibleItem class="collapse-item">
        <template #header> <p class="collapse-header">Alumni</p> </template>
        <template #content>
          <MembersAlumniCard :names="details.alumni" class="collapse-content" />
        </template>
      </MembersCollapsibleItem>
    </main>
    <div
      class="gradient-bg-reverse absolute bottom-0 h-screen w-full"
      style="z-index: -1"
    ></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    details: {
      executiveCommittee: [
        {
          fullName: "Kikuchi, Khristian",
          image: "/images/members/sirian.png",
          title: "Adviser",
        },
        {
          fullName: "Paz, James Michael E. ",
          image: "/images/members/james.jpg",
          title: "President",
        },
        {
          fullName: "Palisoc, Karlo Miguel F.",
          image: "/images/members/karlo.jpg",
          title: "Vice President",
        },
        {
          fullName: "Mapote, Jayvee N.",
          image: "/images/members/jv.jpg",
          title: "Secretary",
        },
        {
          fullName: "Mediodia, Patrick V.",
          image: "/images/members/pat.jpg",
          title: "Treasurer",
        },
      ],
      committees: [
        {
          title: "Membership Committee",
          committeeChair: {
            fullName: "Panti, John Arthur G.",
            image: "/images/members/arthur.jpg",

            title: "Committee Chair",
          },
          members: [
            "Adante, John Rieven P.",
            "Manrique, Alain Moses Q.",
            "Pomperada, Jon Peter P.",
          ],
        },
        {
          title: "Research and Development Committee",
          committeeChair: {
            fullName: "Lipat, Job J.",
            image: "/images/members/job.jpg",
            title: "Committee Chair",
          },
          members: [
            "Ayson, Cyril Justin B.",
            "Cobar, Joachim Elijah V.",
            "Garcia, Elijah Raphael F.",
          ],
        },
        {
          title: "Finance Committee",
          committeeChair: {
            fullName: "Mediodia, Patrick V.",
            image: "/images/members/pat.jpg",
            title: "Committee Chair",
          },
          members: ["Gurion, Sherald Ryoj O.", "Melchor, Carlos Lorenzo M."],
        },
        {
          title: "Publication Committee",
          committeeChair: {
            fullName: "Hermoso, Vivien Ericca I.",
            image: "/images/members/vivien.jpg",
            title: "Committee Chair",
          },
          members: ["Bautista, Roigene Marc J.", "Rabano, Charmaine Eunice I."],
        },
      ],

      alumni: [
        "Abadines, Marc Fernan H.",
        "Adanza, Raymond Alfred T.",
        "Alejandro, Arviejhay D.",
        "Alvarez, Andre Gabriel V.",
        "Alvarez, Angelo D.",
        "Corpuz, John Noel J.",
        "Cortez, John Derick D.",
        "Daraman, Allan ",
        "Disonglo, John M.",
        "Escarda, Gwyneth A.",
        "France, Jeffrey, B",
        "Iligan, Marco C.",
        "Mababangloob, Miguel",
        "Malabayas, Chantal Jem B.",
        "Mañalac, Russell Jacob (.)",
        "Punay, Mark Nicholo J.",
        "Tejano, Jereh A.",
        "Velandres, Juan Matthew V.",
      ],
    },
  }),
  head() {
    return {
      title: "Members - MCL-ACM",
    };
  },
};
</script>

<style lang="scss" scoped>
.collapse-header {
  @apply text-xl;
}

.collapse-item {
  @apply mx-2  sm:ml-8 mb-2;
}

.collapse-content {
  @apply mb-12 sm:ml-6;
}
</style>
