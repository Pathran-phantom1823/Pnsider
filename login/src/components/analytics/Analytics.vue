<template>
  <div class="table">
    <h2>How was your relationship to your co-scholar?</h2>
    <v-data-table
      :headers="headers"
      :items="answers"
      :items-per-page="5"
      hide-default-footer
      class="elevation-1"
    ></v-data-table>
    <span>
      <h2>Student Who Answer</h2>
    </span>
    <h1>{{total}}</h1>
    <div class="my-2">
      <v-btn small color="error">See Students</v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      headers: [
        {
          text: "Answers overAll",
          align: "left",
          sortable: false,
          value: "_id"
        },
        { text: "Count of Answers", value: "answers" }
      ],
      answers: [],
      total: null,
    };
  },
  mounted() {
    axios
      .post("http://localhost:5000/staff/summary/1")
      .then(res => {
        for (var i = 0; i < res.data.data.length; i++) {
          //console.log(res.data.data[0])
          this.answers.push(res.data.data[i]);
        }
        this.total = res.data.data.length;
      })
      .catch(err => {
        alert("Ni error", err);
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.table {
  margin-left: 25%;
  width: 50%;
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  color: 
}
</style>