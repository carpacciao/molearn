<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <h1 class="text-h4 mb-2">S'inscrire à E-learning</h1>
        <nuxt-link to="/login" class="caption">Se connecter</nuxt-link>

        <v-form class="mt-10" v-show="step === 0">
          <v-text-field outlined rounded label="Adresse email"></v-text-field>
          <v-text-field outlined rounded type="password" label="Mot de passe"></v-text-field>
          <v-text-field outlined rounded type="password" label="Confirmation mot de passe"></v-text-field>
          <v-btn type="submit" @click.prevent="step++" color="primary" large block rounded>Suivant</v-btn>
        </v-form>

        <v-form class="mt-10" v-show="step === 1">
          <v-text-field outlined rounded label="Nom"></v-text-field>
          <v-text-field outlined rounded label="Prénom"></v-text-field>
          <v-select outlined rounded label="Genre" :items="genders"></v-select>
          <v-btn type="submit" @click.prevent="step++" color="primary" large block rounded>Suivant</v-btn>
        </v-form>

        <v-form class="mt-10" v-show="step === 2">
          <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field outlined rounded v-model="date" label="Date de naissance" readonly v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">Annuler</v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
            </v-date-picker>
          </v-dialog>

          <v-textarea outlined rounded label="Description"></v-textarea>
          <v-btn type="submit" @click.prevent="$router.push('/dashboard')" color="primary" large block rounded>Terminer</v-btn>
        </v-form>
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
  data: () => ({
    step: 0,
    genders: ['Homme', 'Femme', 'Helicopter', 'Robot', 'une grosse merde'],
    date: null,
    modal: false
  })
}
</script>