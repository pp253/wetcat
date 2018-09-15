<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <v-layout wrap
                  class="value-window">
          <v-flex xs6
                  class="value-window-big text-xs-right">
            {{temperature}}
            <span class="unit-text">°C</span>
          </v-flex>
          <v-flex xs6
                  class="value-window-big text-xs-left">
            <div>{{humidity}}</div>
            <div class="unit-text">%</div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12
              class="text--secondary text-xs-center">
        最近更新：{{lastUpdateFromNow}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '../api'
import dayjs from 'dayjs'
import zhTW from 'dayjs/locale/zh-tw'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-tw', zhTW)
dayjs.extend(relativeTime)

export default {
  name: 'Home',
  data () {
    return {
      temperature: null,
      humidity: null,
      lastUpdate: null
    }
  },
  computed: {
    lastUpdateFromNow() {
      return dayjs(this.lastUpdate).fromNow()
    }
  },
  methods:{
    update() {
      api.device.getData('DTQj4ROiclK7aT4K')
      .then(data => {
        let latest = data[0]
        this.temperature = latest.data.temperature
        this.humidity = latest.data.humidity
        this.lastUpdate = latest.timestamp
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.update()
    setInterval(this.update, 5 * 1000)
  }
}
</script>

<style lang="scss" scoped>
.value-window {
  height: 80vh;
}
.value-window-big {
  padding-left: 4vmin;
  padding-right: 4vmin;
  font-size: 20vmin;
  line-height: 80vh;
  letter-spacing: -1vmin;
  word-spacing: -3vmin;

  div {
    display: inline;
  }
  .unit-text {
    font-size: 8vmin;
  }
}
</style>
