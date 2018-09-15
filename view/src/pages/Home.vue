<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        {{temperature}}℃ {{humidity}}%
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '../api'
export default {
  name: 'Home',
  data () {
    return {
      temperature: null,
      humidity: null
    }
  },
  methods:{
    update() {
      api.device.getData('wzaHMXe3G0NweRFW')
      .then(data => {
        let latest = data[0]
        this.temperature = latest.data.temperature
        this.humidity = latest.data.humidity
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.update()
  }
}
</script>

<style scoped>
</style>
