<script setup lang="ts">
import {ref} from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useRouter} from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        router.push('/feed')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+" : "+errorMessage);
      });
};
</script>

<template>
  <h1>Create an Account</h1>
  <p><input type="email" placeholder="email" v-model="email"></p>
  <p><input type="password" placeholder="password" v-model="password"></p>
  <p><button @click="register">Submit</button></p>
</template>

<style scoped>

</style>