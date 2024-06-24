<template>
    <q-page padding>
      <q-card>
        <q-card-section>
          <q-input v-model="city" label="Enter Location" />
          <q-btn @click="fetchWeather">Get Weather</q-btn>
        </q-card-section>
        <q-card-section v-if="weather">
          <p>{{ weather.name }}</p>
          <p>{{ weather.main.temp }} °C</p>
          <p>{{ weather.weather[0].description }}</p>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        city: '',
        weather: null
      }
    },
    methods: {
      async fetchWeather() {
        const apiKey = 'e384bc33e7c0a81b5915e90d711e36c8'
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`)
        this.weather = await response.json()
      }
    }
  }
  </script>
  