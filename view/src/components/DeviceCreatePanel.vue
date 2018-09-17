<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1>登錄新裝置</h1>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid">
              <v-subheader>裝置基本資訊</v-subheader>
              <v-text-field v-model="name"
                            label="名稱"
                            required></v-text-field>
              <v-checkbox label="裝置不會移動"
                          type="checkbox"
                          required></v-checkbox>
              <v-text-field v-model="location"
                            label="位置"></v-text-field>
              <v-textarea v-model="hardwareInfo"
                          label="裝置硬體資訊"></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn :disabled="!valid"
                   @click="submit">新增資料</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '../api'
export default {
  name: 'DeviceCreatePanel',
  data () {
    return {
      valid: false,

      name: '',
      fixed: false,
      location: '',
      hardwareInfo:''
    }
  },
  methods:{
    submit() {
      api.device.create({
        name: this.name,
        fixed: this.fixed,
        location: this.location,
        hardwareInfo: this.hardwareInfo
      })
    }
  }
}
</script>

<style scoped>
</style>
