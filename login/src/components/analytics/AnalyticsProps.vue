<template>
  <div id="table">
    <v-data-table :headers="headers" :items="score" hide-default-footer class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>
              <i id="question">How was your relationship to your co-scholar?</i>
            </v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <i>TotalStudent: </i><h3>{{ question }}</h3>
            <v-divider class="mx-4" inset vertical></v-divider>
            <div class="my-2">
              <v-btn small color="error">See Students</v-btn>
            </div>
          </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
          <v-icon small @click="seeStudentWhoAnswered(item)">mdi-account-multiple</v-icon>
        </template>
      </v-data-table>
      <v-spacer></v-spacer>
  </div>
</template>


<script>
export default {
  props: {
    score: {
      type: Array,
      required: true
    },
    question: Number
  },
  data() {
    return {
      headers: [
        {
          text: "Category",
          align: "left",
          value: "num"
        },
        { text: "Number of Answers", value: "answers" },
        { text: "Action", value: "action", sortable: false }
      ],
      answers: [],
      total: null,
    };
  }

}


</script>

<style>
  .table {
  margin-left: 25%;
  width: 50%;
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  color: 
}
</style>