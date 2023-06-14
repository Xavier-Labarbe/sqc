<script setup lang="ts">
import {ref} from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useRouter} from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();

const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        router.push('/feed')
      })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/invalid-email":
            errMsg.value = "Email invalide";
            break;
          case "auth/wrong-password":
            errMsg.value = "Mauvais mot de passe";
            break;
        }
      });
};
</script>

<template>
  <h1>Sign in to an Account</h1>
  <p><input type="email" placeholder="email" v-model="email"></p>
  <p><input type="password" placeholder="password" v-model="password"></p>
  <p v-if="errMsg"></p>
  <p><button @click="register">Submit</button></p>
</template>

<style scoped>

</style>