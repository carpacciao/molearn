<template>
  <v-app>
    <!-- <v-navigation-drawer v-model="drawer" app>
      <v-list nav>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in drawerItems" :key="i" color="primary" link :to="item.to" @click="drawer = false">
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer> -->

    <v-app-bar color="primary" hide-on-scroll app dark>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-toolbar-title style="cursor: pointer;" @click="$router.push('/')">
        <span style="display: inline-block; background: white; height: 32px; width: 32px; border-radius: 50%;" class="mr-2 text-center primary--text">M</span>
        <span>Molearn</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>


      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
              <v-avatar size="32" color="green">
                l
              </v-avatar>
            </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs v-model="tabs" fixed-tabs>
          <v-tabs-slider></v-tabs-slider>
            <v-tab v-for="item in drawerItems" :key="item.title" :to="item.to">
              <!-- <v-icon>{{item.icon}}</v-icon> -->
              {{item.title}}
            </v-tab>
        </v-tabs>
      </template>      

    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      drawer: false,
      drawerItems: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/dashboard'
        },
        {
          icon: 'mdi-book',
          title: 'Cours',
          to: '/cursus'
        },
        {
          icon: 'mdi-apps',
          title: 'Editorjs',
          to: '/editor'
        },
      ],
    }
  },
}
</script>
