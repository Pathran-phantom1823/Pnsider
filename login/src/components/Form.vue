<template>
  <div id="background">
    <v-flex justify-center>
      <h1 class="subtitle-110 text-center">PNsider</h1>

      <v-card class="mx-auto card" max-width="400">
        <v-container>
          <center>
            <h1>Admin</h1>
          </center>
          <form id="form">
            <v-container>
              <v-text-field
                prepend-inner-icon="people"
                v-model="username"
                :rules="[rules.required]"
                label="Username"
              ></v-text-field>
              <v-text-field
                prepend-inner-icon="lock"
                v-model="password"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>
              <v-btn class="mr-4" @click="login" color="green">submit</v-btn>
              <v-btn>clear</v-btn>
            </v-container>
          </form>
          <br />
        </v-container>
      </v-card>
    </v-flex>
  </div>
</template>

<style>
h1,
h2 {
  font-weight: normal;
  color: teal;
}
.v-content__wrap {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
  background-size: cover;
}
.v-application .text-center {
  text-align: center !important;
  font-size: 80px;
  color: white;
}
.card {
  margin-top: 1%;
}
#image {
  width: 40%;
  height: 40%;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      show1: false,
      username: "",
      password: "",
      rules: {
        required: value => !!value || "Required.",
        min: value => value.length >= 8 || "Min 8 characters",
        password: value => {
          const pattern = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
          //   valid = true;
          return (
            pattern.test(value) ||
            "Password Must contain 1 capital, special characters, and more than 8 letters"
          );
        }
      }
    };
  },
  methods: {
    login: function() {
      let data = {
        username: this.username,
        password: this.password
      };
      // this.$store.dispatch('login', { username, password })
      axios
        .post("http://localhost:5000/login", data)
        .then(res => {
          console.log("RESPONSE HERE!");
          //roouterr push
          localStorage.setItem("token", res.data.token);
          sessionStorage.setItem("username", res.data.username);
          console.log(res);
         if (sessionStorage.getItem("username") == "admin") {
            this.$router.push("/admin/dashboard")
            this.$emit("loggedIn");
            
          }else{
               this.$router.push("/admin/dashboard")
                this.$emit("loggedIn");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>