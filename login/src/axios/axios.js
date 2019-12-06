import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

export function getStudents() {
        return axios.get(`${BASE_URL}/accounts/retrieveAll`)
                .then(response => response);
}
export function deleteStudent(id){
        return axios.delete(`${BASE_URL}/account/delete/${id}`)
                .then(response => response)
                .catch(err => Promise.reject(err.message));
}
export function createStudent(data) {
        return axios.post(`${BASE_URL}/student/create`, 
        { fullname: data.fullname, batch: data.batch, username:data.username, email:data.email, password:data.password}
        )      .then(response => {
                        alert(response)
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}
export function createQuestion(data) {
        return axios.post(`${BASE_URL}/question/create`, 
        {  q1 : data.q1,
                q2 : data.q2,
                q3 : data.q3,
                q4 : data.q4,
                q5 : data.q5,
                q6 : data.q6,
                q7 : data.q7,
                q8 : data.q8,
                q9 : data.q9,
                q10 : data.q10,
                q11: data.q11,
                q12 : data.q12,
    }
        )      .then(response => {
                        alert(response)
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}
export function updateStudent(data, id) {
        return axios.put(`${BASE_URL}/account/update/${id}`, { data })
                .then(response => {
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}