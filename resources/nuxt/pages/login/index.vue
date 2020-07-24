<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <h1 class="text-h4 mb-2">Connectez-vous à E-learning</h1>
        <nuxt-link to="/signup" class="caption">Créer un compte</nuxt-link>
        <v-form class="mt-10" @submit.prevent="$router.push('/dashboard')">
          <v-text-field outlined rounded label="Adresse email ou nom d’utilisateur"></v-text-field>
          <v-text-field outlined rounded type="password" label="Mot de passe"></v-text-field>
          <v-btn type="submit" color="primary" large block rounded>Se connecter</v-btn>
          <v-layout align-center class="mt-5">
            <v-checkbox label="se souvenir de moi"></v-checkbox>
            <v-spacer></v-spacer>
            <a href="#" class="body-1">Mot de passe oublié ?</a>
          </v-layout>
        </v-form>
        <hr class="mt-5">
        <v-layout justify-space-around class="mt-5">
            <v-btn fab color="#3b579d">
              <v-icon color="white">mdi-facebook</v-icon>
            </v-btn>

            <v-btn fab color="#ea4335">
              <v-icon color="white">mdi-google</v-icon>
            </v-btn>

            <v-btn fab color="#1686b0">
              <v-icon color="white">mdi-linkedin</v-icon>
            </v-btn>
        </v-layout>
      </v-col>

      <v-col cols="12" md="6" order="1" class="d-none d-md-block">
        <v-img src="/app/loginsvg.png"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'home',
}
</script>