<template>
  <div id="table">
    <v-app>
      <v-data-table :headers="headers" :items="expenses" :search="search" hide-default-footer class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>
              <i id="question">How was your relationship to your co-scholar?</i>
            </v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <i>TotalStudent: </i><h3>{{total}}</h3>
            <v-divider class="mx-4" inset vertical></v-divider>
            <div class="my-2">
              <v-btn small color="error">See Students</v-btn>
            </div>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
          <v-icon small @click="seeStudentWhoAnswered(item)">mdi-account-multiple</v-icon>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>
 
<script>
/* eslint-disable */

import axios from "axios";
export default {
  data: () => ({
    search: "",
    dialog: false,
    total: null,
    headers: [
      {
        text: "ANSWERS",
        align: "left",
        sortable: false,
        value: "_id"
      },
      { text: "Total Answers", value: "answers" },
      { text: "Date", value: "amount" },
      { text: "Actions", value: "action", sortable: false }
    ],
    expenses: [],
    totalAmount: 0,
  }),

  created() {
    this.initialize();
    this.getAll();
  },

  methods: {
    initialize() {
      this.expenses = [];
    },
    getAll() {
      axios
        .post("http://localhost:5000/staff/summary/2")
        .then(res => {
          // for (var i = 0; i < res.data.data.length; i++) {
          //   // this.expenses.push(res.data.data[i]);

          // }
           this.expenses.push({_id: "Jane"})
          this.total = res.data.data.length;
        })
        .catch(err => {
          alert(err);
        });
    },
    seeStudentWhoAnswered(item) {
        console.log(item._id)
      const index = this.expenses.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        axios
          .delete(
            "http://localhost:5000/item/delete" +
              this.expenses[this.editedIndex]._id
          )
          .then(res => {
            alert("Succesfully Updated!");
          })
          .catch(err => {
            alert(err);
          });
      this.expenses.splice(index, 1);
    },
  }
};
</script>
<style>
#table {
  max-width: 50% !important;
  margin-left: 25% !important;
  /* margin-top: 5%; */
}
#question {
    font-size: 12px;
}
</style>
