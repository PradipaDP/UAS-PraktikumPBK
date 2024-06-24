<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Weather App
        </q-toolbar-title>
        <q-btn flat @click="$router.push('/')">Home</q-btn>
        <q-btn flat @click="$router.push('/task1')">Task 1</q-btn>
        <q-btn flat @click="$router.push('/task2')">Task 2</q-btn>
        <q-btn flat @click="$router.push('/task3')">Task 3</q-btn>
        <q-btn flat @click="$router.push('/task4')">Task 4</q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
</script>
