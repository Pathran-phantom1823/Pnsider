<template>
<v-app>
  <v-container>
    <v-app-bar app color="blue" v-if="isLoggedIn" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
       <v-spacer></v-spacer>
        <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer height="910" class="overflow-hidden" v-model="drawer" absolute temporary>
        <v-list-item>
            <v-list-item-avatar>
                
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>GoEco</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item link  @click="analytics">
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="show2021">
                <v-list-item-action>
                    <v-icon>mdi-account</v-icon>
                    <!-- <i class="fad fa-clipboard-list"></i> -->
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Student List</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-information</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>About Us</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </v-container>
    <v-content>
        <router-view />
    </v-content>
</v-app>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data: () => ({
      drawer: null,
         items: [
          { title: 'Dashboard', icon: 'dashboard' },
          { title: 'Account', icon: 'account_box' },
          { title: 'Admin', icon: 'gavel' }
        ]
    }),
    computed: {
        isLoggedIn: function () {
            return this.$store.getters.isLoggedIn
        }
    },
     methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
        })
      },
      show2021(){
        this.$router.push('/accounts2021')
      },
      analytics(){
          this.$router.push('/analytics')
      }
    },
    created: function () {
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function () {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch('logout')
          }
          throw err;
        });
      });
    }
};
</script>