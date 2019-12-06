<template>
<v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">AddStudent</v-btn>
        </template>
        <v-card>
            <v-container>
                <v-card-title>
                    <span class="headline">Student Profile</span>
                </v-card-title>
                <v-form ref="form" v-model="valid" @submit.prevent="create">

                    <v-text-field v-model="fname" :rules="requiredRules" label="First Name" required></v-text-field>

                    <v-text-field v-model="batch" :rules="requiredRules" label="Batch" required></v-text-field>

                    <v-text-field v-model="username" :rules="requiredRules" label="Username" required></v-text-field>

                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                    <v-text-field v-model="password" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="paswordRules" :type="show2 ? 'text' : 'password'" name="input-10-2" label="Password" hint="At least 8 characters" class="input-group--focused" @click:append="show2 = !show2"></v-text-field>

                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn :disabled="!valid" color="success" class="mr-4" @click="create">
                            Add Account
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-container>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
import {
    createStudent
} from '@/store/axios.js'
export default {
    data() {
        return {
            dialog: false,
            show2: false,
            valid: true,
            fname: '',
            batch: '',
            username: '',
            password: '',
            paswordRules: [
                v => !!v || 'Password is required',
                v => /^([a-zA-Z0-9@*#]{8,15})$/.test(v) || 'Password matching expression. Match all alphanumeric character and predefined wild characters. Password must consists of at least 8 characters and not more than 15 characters.',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            requiredRules: [
                v => !!v || 'This is Required Field'
            ],
        }
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
        },
        create: function () {
            let data = {
                fullname: this.fname,
                batch: this.batch,
                username: this.username,
                email: this.email,
                password: this.password
            }
            createStudent(data)
                .then(data => {
                    this.$emit('createStudent', data.data);
                    this.email =this.fname =  this.password = this.username = this.batch = this.batch = '';
                    this.dialog = false;
                })
                .catch(err => alert(err.message));
        }
    },
}
</script>