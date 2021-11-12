<template>
  <div>
    <main class="flex flex-col lg:px-32">
      <h1 class="text-dark-blue text-4xl font-bold">Members</h1>
      <MembersExecutiveCard :members="details.commitees[0].members" />
      <MembersCommitteeCard :details="details.commitees[1]" />
      <MembersAlumniCard :names="details.alumni" />
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    details: {
      commitees: [
        {
          title: "Executive Committee",
          members: [
            {
              fullName: "Khristian Kikiuchi",
              image: "/images/president.png",
              title: "Adviser",
            },
            {
              fullName: "Paz, James Michael E. ",
              image: "/images/president.png",
              title: "President",
            },
            {
              fullName: "Palisoc, Karlo Miguel F.",
              image: "/images/president.png",
              title: "Vice President",
            },
            {
              fullName: "Mapote, Jayvee N.",
              image: "/images/president.png",
              title: "Secretary",
            },
            {
              fullName: "Mediodia, Patrick V.",
              image: "/images/president.png",
              title: "Treasurer",
            },
          ],
        },
        {
          title: "Research and Development Committee",
          committeeChair: {
            fullName: "Lipat, Job J.",
            image: "/images/president.png",
            title: "Committee Chair",
          },
          members: [
            "Garcia, Elijah Raphael F.",
            "Ayson, Cyril Justin B.",
            "Cobar, Joachim Elijah V.",
          ],
        },
      ],
      alumni: [
        "Abadines, Marc Fernan H.",
        "Adanza, Raymond Alfred T.",
        "Alejandro, Arviejhay D.",
        "Alvarez, Andre Gabriel V.",
        "Alvarez, Angelo D.",
        "Balane, Daphne P. ",
        "Corpuz, John Noel J.",
        "Cortez, John Derick D.",
        "Daraman, Allan ",
        "Disonglo, John M.",
        "Escarda, Gwyneth A.",
        "France, Jeffrey, B",
      ],
    },
  }),
};
</script>

<style lang="scss" scoped></style>
