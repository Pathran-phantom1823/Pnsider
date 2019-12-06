<template>
  <!-- <v-card> -->
  <v-navigation-drawer expand-on-hover absolute permanent>
    <template v-slot:prepend>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://www.pngrepo.com/png/41173/170/admin-with-cogwheels.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link two-line>
          <v-list-item-content>
            <v-list-item-title class="title" v-model="info.username">{{info.username}}</v-list-item-title>
            <v-list-item-subtitle v-model="info.email">{{info.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>

    <v-divider></v-divider>
    <v-list>
      <v-list-item-group>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  <!-- <ul id="dashboard">
      <li v-for="item in items" v-bind:key="item.title">{{ item.message }}</li>
  </ul>-->
  <!-- </v-card> -->
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    drawer: null,
    info: {
      username: "Jane Repollo",
      email: "jane@yahoo.com"
    },
    items: [
      { title: "Summary/Analytics", icon: "assessment" },
      { title: "2021", icon: "account_box" },
      { title: "2022", icon: "account_box" }
    ]
  }),
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    },
    show2021() {
      this.$router.push("/accounts2021");
    },
    analytics() {
      this.$router.push("/analytics");
    }
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function() {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  },
};
</script>