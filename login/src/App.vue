<template>
  <!-- <v-card> -->
    <div>
  <v-navigation-drawer expand-on-hover absolute permanent v-if="isAdmin">
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
          :key="i"  :to="item.to"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" ></v-icon>
          </v-list-item-icon>
          <v-list-item-content link>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  <!-- ======================================================================== -->

  <v-navigation-drawer expand-on-hover absolute permanent v-if="isUser">
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
          v-for="(item, i) in itemForUser"
          :key="i"  :to="item.to"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" ></v-icon>
          </v-list-item-icon>
          <v-list-item-content link>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  <div>
    <router-view/>
  </div>
  <!-- <ul id="dashboard">
      <li v-for="item in items" v-bind:key="item.title">{{ item.message }}</li>
  </ul>-->
  <!-- </v-card> -->
  </div>
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
      { to: '/analytics',title: "Summary/Analytics", icon: "assessment" },
      { to: '/accounts2021', title: "2021", icon: "account_box" },
      { title: "2022", icon: "account_box" }
    ],
    itemForUser: [
      { to: '/analytics',title: "Summary/Analytics", icon: "assessment" },
      { to: '/accounts2021', title: "2021", icon: "account_box" },
      { title: "2022", icon: "account_box" }
    ]
  }),
  methods: {
    isUser: function() {
      if(sessionStorage.getItem('username') != "admin"){
          return this.$store.getters.isUser;
      }
    },
     isAdmin: function() {
      if(sessionStorage.getItem('username') == "admin"){
          return this.$store.getters.isAdmin;
      }
    },
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