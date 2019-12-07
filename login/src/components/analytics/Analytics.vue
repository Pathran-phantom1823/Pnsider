<template>
  <div class="table">
    <Props :score="answers1" :question="1" />
    <Props :score="answers2" :question="2" />
  </div>
</template>

<script>
import Props from "./AnalyticsProps.vue"
import axios from "axios"

export default {
  data() {
    return {
      answers1: [],
      answers2: [],
      answers3: [],
    };
  },
  components: {
    Props
  },
  mounted() {
    var index = 1;
    while (index <= 3) {
      axios
        .post("http://localhost:5000/staff/summary/" + index)
        .then(res => {
          for (let i= 0; i < res.data.length ; i++) {
            console.log(index, "here")
            this.answers1.push(res.data[i])
          }
          index++;
          // console.log(this.answers[index], "answers")
        })
        .catch(err => {
          console.log("Ni error", err);
          index = 3;
        });
        
    } 
  }
};
</script>