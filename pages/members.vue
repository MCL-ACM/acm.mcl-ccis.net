<template>
  <div class="relative bg-white rounded-3xl">
    <main class="container flex flex-col min-h-screen">
      <h1 class="text-dark-blue text-5xl font-bold mb-6 pt-10">Members</h1>
      <MembersCollapsibleItem>
        <template #header> Committees </template>
        <!-- Executive Committee --->
        <MembersCollapsibleItem>
          <template #header> Executive Committee </template>
          <MembersExecutiveCard :members="details.executiveCommittee" />
        </MembersCollapsibleItem>

        <!-- Committees --->
        <MembersCollapsibleItem
          v-for="(committee, index) in details.committees"
          :key="index"
        >
          <template #header>
            {{ committee.title }}
          </template>
          <MembersCommitteeCard :details="committee" />
        </MembersCollapsibleItem>
      </MembersCollapsibleItem>

      <!-- Alumni --->
      <MembersCollapsibleItem>
        <template #header> Alumni </template>
        <MembersAlumniCard :names="details.alumni" />
      </MembersCollapsibleItem>
    </main>

    <!-- Bottom Gradient --->
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

<style lang="scss" scoped></style>
