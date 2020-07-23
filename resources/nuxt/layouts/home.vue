<template>
  <v-app>
    <v-app-bar color="primary" hide-on-scroll app dark>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-toolbar-title style="cursor: pointer;" @click="$router.push('/')">
        <span style="display: inline-block; background: white; height: 32px; width: 32px; border-radius: 50%;" class="mr-2 text-center primary--text">M</span>
        <span>Molearn</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <nuxt />

    </v-main>
  </v-app>
</template>
