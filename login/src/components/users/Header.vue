<template>
  <div>
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar color="deep-purple accent-4" dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary height="100%">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-avatar size="100" style="margin-left:30%">
         

            <img src="https://img.gaminginturkey.com/2015/12/Gaming-in-Turkey-Gaming-Agency-Partner-Insider-Logo.png" alt="John">
          </v-avatar>
         
           <br> 

          <hr>

          <v-list-item>
            <router-link to="/Home">HOME</router-link>
          </v-list-item>
           <v-list-item>
            <router-link to="/Form">FORMS</router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>


