<template>
<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <v-container fluid>
            <!-- <v-col col="12" md="4"></v-col>
    <v-col col="12" md="4"></v-col>-->
            <v-form v-model="valid" ref="form" class="form">

                <!-- <v-col col="12" md="4"> -->
                <center>
                    <h1>CENTER LIFE</h1>
                </center>
                <!-- <section >
          <h3>How do you feel in the center?</h3>
          <input type="radio" v-model="feeling" value="Comfortable" />Comfortable
          <input type="radio" v-model="feeling" value="Happy" />Happy
          <input type="radio" v-model="feeling" value="Homesick" />Homesick 
          <input type="radio" v-model="feeling" value="Sad" />Sad 

        </section>-->

                <v-radio-group :rules="[v => !!v || 'Item is required']" required v-model="question1" column>
                    <h3>How do you feel in the center?</h3>
                    <v-radio type="radio" label="Comfortable" value="Comfortable"></v-radio>
                    <v-radio type="radio" label="Happy" value="Happy"></v-radio>
                    <v-radio type="radio" label="Homesick" value="Homesick"></v-radio>
                    <v-radio type="radio" label="Sad" value="Sad"></v-radio>
                </v-radio-group>
                <!-- <span>value: {{question1}}</span> -->
                <hr>

                <v-radio-group :rules="[v=>!!v||'required']" v-model="question2" column>
                    <h3>How was your relationship to your co-scholar?</h3>
                    <v-radio type="radio" label="Good" value="Good"></v-radio>
                    <v-radio type="radio" label="Normal" value="Normal"></v-radio>
                    <v-radio type="radio" label="Bad" value="Bad"></v-radio>
                </v-radio-group>
                <!-- <span>value: {{question2}}</span> -->
                <hr>

                <v-radio-group :rules="[v=>!!v||'required']" v-model="question3" column>
                    <h3>How was your relationship with PN Staff?</h3>
                    <v-radio type="radio" label="Good" value="Good"></v-radio>
                    <v-radio type="radio" label="Normal" value="Normal"></v-radio>
                    <v-radio type="radio" label="Bad" value="Bad"></v-radio>
                </v-radio-group>
                <!-- <span>value: {{question3}}</span> -->
                <hr>
                <v-radio-group :rules="[v=>!!v||'required']" v-model="question4" column>
                    <h3>How was your overall performance and collaboration of the tasking team?</h3>
                    <v-radio type="radio" label="Good" value="Good"></v-radio>
                    <v-radio type="radio" label="Normal" value="Normal"></v-radio>
                    <v-radio type="radio" label="Bad" value="Bad"></v-radio>
                </v-radio-group>
                <!-- <span>value: {{question4}}</span> -->
                <hr>

                <v-radio-group :rules="[v=>!!v||'required']" v-model="question5" column>
                    <h3>What PN core values did you experience this week?</h3>
                    <v-radio type="radio" label="Demand" value="Demand"></v-radio>
                    <v-radio type="radio" label="Respect" value="Respect"></v-radio>
                    <v-radio type="radio" label="Responsibility" value="Responsibility"></v-radio>
                    <v-radio type="radio" label="Solidarity" value="Solidarity"></v-radio>
                    <v-radio type="radio" label="Trust" value="Trust"></v-radio>
                </v-radio-group>
                <!-- <span>value: {{question5}}</span> -->

                <!-- <span>value: {{question6}}</span> -->

                <hr>
                <v-radio-group :rules="[v=>!!v||'required']" v-model="question7" column>
                    <h3>What soft skill or behavior that you want to improve?</h3>
                    <v-radio type="radio" label="Listening Skill" value="Listening Skill"></v-radio>
                    <v-radio type="radio" label="Anger Management" value="Anger Management"></v-radio>
                    <v-radio type="radio" label="Sensitivity to Others" value="Sensitivity to Others"></v-radio>
                    <v-radio type="radio" label="Punctuality" value="Punctuality"></v-radio>
                    <v-radio type="radio" label=" Politiness" value="Politiness"></v-radio>
                    <v-radio type="radio" label="Self Awareness" value="Self Awareness"></v-radio>
                    <v-radio type="radio" label="Patience" value="Patience"></v-radio>
                    <v-radio type="radio" label="Honesty" value="Honesty"></v-radio>
                    <!-- <v-radio type="radio" label="Others" value="Others"></v-radio> -->
                    <!-- <v-text-field  label="Others"></v-text-field> -->
                </v-radio-group>
                <!-- <span>value: {{question7}}</span> -->
                <center>
                    <h1>ACADEMICS</h1>
                </center>
                <hr>
                <v-radio-group :rules="[v=>!!v||'required']" v-model="question6" column>
                    <h3>Which educational activities do you prefer?</h3>
                    <v-radio type="radio" label="Sports" value="Sports"></v-radio>
                    <v-radio type="radio" label="Lecture" value="Lecture"></v-radio>
                    <v-radio type="radio" label="Film viewing" value="Film Viewing"></v-radio>
                    <v-radio type="radio" label="Clubings" value="Clubings"></v-radio>
                    <!-- <v-radio label="Others" value="educ-5"></v-radio> -->
                    <!-- <v-text-field  label="Others"></v-text-field> -->
                </v-radio-group>
                <hr>
                <v-radio-group :rules="[v=>!!v||'required']" v-model="question8" column>
                    <h3>What subject do you find difficult?</h3>
                    <v-radio type="radio" label="Programming" value="Programming"></v-radio>
                    <v-radio type="radio" label="Web Development" value="Web Development"></v-radio>
                    <v-radio type="radio" label="Networking" value="Networking"></v-radio>
                    <v-radio type="radio" label="Database" value="Database"></v-radio>
                    <v-radio type="radio" label="Computer Science" value="Computer Science"></v-radio>
                    <!-- <v-radio type="radio" label="Others" value="Others"></v-radio> -->
                    <!-- <v-text-field label="Others"></v-text-field> -->
                </v-radio-group>
                <!-- <span>value: {{question8}}</span> -->
                <hr>
                <v-radio-group :rules="[v=>!!v||'required']" v-model="question9" column>
                    <h3>How do you deal with your difficulties?</h3>
                    <v-radio type="radio" label="Self Study" value="Self Study"></v-radio>
                    <v-radio type="radio" label="Ask for Help" value="Ask for Help"></v-radio>
                    <v-radio type="radio" label="Tutorial" value="Tutorial"></v-radio>
                    <!-- <v-radio type="radio" label="Others" value="Others"></v-radio> -->
                    <!-- <v-text-field label="Others"></v-text-field> -->
                </v-radio-group>
                <!-- <span>value: {{question9}}</span> -->
                <hr>
                <v-radio-group v-model="question10" :rules="[v=>!!v||'required']" column>
                    <h3>How was your relationship with your teacher?</h3>
                    <v-radio type="radio" label="Respectful" value="Respectful"></v-radio>
                    <v-radio type="radio" label="Courteus" value="Courteus"></v-radio>
                    <v-radio type="radio" label="Educational" value="Educational"></v-radio>
                    <v-radio type="radio" label="Helpful" value="Helpful"></v-radio>
                    <!-- <v-radio type="radio" label="Others" value="Others"></v-radio> -->
                    <!-- <v-text-field  label="Others" ></v-text-field> -->
                </v-radio-group>
                <!-- <span>value: {{question10}}</span> -->
                <hr>
                <v-radio-group :rules="[v=>!!v||'required']" v-model="question11" column>
                    <h3>What academic skill that you want to improve?</h3>
                    <v-radio type="radio" label="Critical Thinking" value="Critical Thinking"></v-radio>
                    <v-radio type="radio" label="Understanding" value="Understanding"></v-radio>
                    <v-radio type="radio" label="Application" value="Application"></v-radio>
                    <v-radio type="radio" label="Coding" value="Coding"></v-radio>
                    <!-- <v-radio type="radio" label="Others" value="Others"></v-radio> -->
                    <!-- <v-text-field label="Others" ></v-text-field> -->
                </v-radio-group>
                <!-- <span>value: {{question11}}</span> -->
                <hr>
                <v-radio-group :rules="[v=>!!v||'required']" v-model="question12" column>
                    <h3>What challenges have you encounter during class?</h3>
                    <v-radio type="radio" label="Teacher Communication" value="Teacher Communication"></v-radio>
                    <v-radio type="radio" label="Classmates Communication" value="Classmates Communication"></v-radio>
                    <v-radio type="radio" label="Understanding the Lesson" value="Understanding the Lesson"></v-radio>
                    <v-radio type="radio" label="Projects" value="Projects"></v-radio>
                    <!-- <v-radio type="radio" label="Others" value="Others" @click="others" v-model="othersVal" @suspend="hideOthers"></v-radio >
          <v-text-field  label="Others" v-if="show"></v-text-field>-->
                </v-radio-group>
                <!-- <span>value: {{question12}}</span> -->
                <br>
                <br>

                <v-btn color="primary" @click="submit">SUBMIT</v-btn>
                <!-- </v-col> -->
            </v-form>
        </v-container>
    </div>

    <div class="col-md-2"></div>

</div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            valid: true,
            centerLife: {
                question1: null,
                question2: null,
                question3: null,
                question4: null,
                question5: null,
                question6: null,
            },
            ademicLife: {
                question7: null,
                question8: null,
                question9: null,
                question10: null,
                question11: null,
                question12: null
            }

        };
    },
    methods: {
        submit() {
                axios.post("localhost:3000/answers/added", this.centerLife, this.ademicLife)
                    .then(() => {
                        alert("Added Successfully")
                    })
                    .catch(() =>{
                      alert("error")
                    })
        }
    }
};
</script>

<style lang="css" scoped>
.col-md-8 {
    background-color: #c3e4fd;
}
</style>
