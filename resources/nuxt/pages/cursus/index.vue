<template>
  <v-container>
    <v-breadcrumbs class="px-0" :items="navigations"></v-breadcrumbs>
    <v-layout align-center>
      <h1 class="text-h2">Mes cours</h1>
      <v-spacer></v-spacer>
      <v-btn small fab color="success">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-layout>

    <v-row class="mt-5">
      <v-col
        cols="12"
        sm="6"
        md="4"
        l="4"
        xl="3"
        style="position: relative;"
        v-for="i in 7"
        :key="i"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              style="position: absolute; top: 16px; right: 16px; z-index: 1;"
              small
              fab
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item,index) in menuItems" color="primary" :key="index" @click>
              <v-list-item-icon>
                <v-icon :color="item.color" v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="item.title" :class="item.color ? item.color + '--text' : null"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-card outlined to="cursus/javascript">
          <v-img
            class="white--text align-end"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Javascript</v-card-title>
          </v-img>

          <v-card-subtitle>14 chapitres</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>JavaScript (qui est souvent abrégé en « JS ») est un langage de script léger, orienté objet, principalement...</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    navigations: [
      {
        text: 'Cours',
        disabled: true,
        href: 'cursus'
      }
    ],
    menuItems: [
      {
        title: 'Modifier le cours',
        icon: 'mdi-pencil',
        color: '',
      },
      {
        title: 'Inviter des élèves',
        icon: 'mdi-send',
        color: '',
      },
      {
        title: 'Supprimer le cours',
        icon: 'mdi-delete',
        color: 'error'
      },
    ]
  }),
  methods: {
    test (e = '') {
      alert('Something ' + e)
    }
  }
}
</script>