<template>
  <v-container fluid>
    <v-container>
      <v-breadcrumbs class="px-0" :items="navigations"></v-breadcrumbs>
    </v-container>

    <div class="mx-n3" style="max-height: 300px;">
      <v-img
        class="white--text align-center pa-5"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        height="300"
      >
        <v-container>
          <h1 class="text-h2">Le cours de Javascript</h1>
          <span>14 chapitres</span>
        </v-container>
      </v-img>
    </div>

    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <p class="body-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quam quae sit adipisci, accusamus porro ullam, dolorem vero quis nulla tempora praesentium fugiat consequuntur dolor est quasi, qui perspiciatis. Excepturi ut consequatur maxime quisquam.</p>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined>
            <v-card-text>lol</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </v-container>
</template>

<script>
export default {
  data : () => ({
    navigations: [
      {
        text: 'Cours',
        disabled: false,
        href: '/cursus'
      },
      {
        text: 'Javascript',
        disabled: true,
        href: '/cursus/javascript'
      },
    ],
  })
}
</script>