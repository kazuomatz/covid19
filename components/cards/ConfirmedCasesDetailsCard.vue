<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('検査陽性者の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="Data.patients.date"
    >
      <template v-slot:button />
      <confirmed-cases-details-table
        :aria-label="$t('検査陽性者の状況')"
        v-bind="confirmedCases"
      />
    </data-view>
  </v-col>
</template>

<style lang="scss" module>
.note {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>

<script>
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import DataView from '@/components/DataView.vue'
import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'

export default {
  components: {
    DataView,
    ConfirmedCasesDetailsTable
  },
  data() {
    // Vuexからデータを取得
    const Data = this.$store.state.data.data

    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(Data.main_summary)

    const data = {
      Data,
      confirmedCases
    }
    return data
  }
}
</script>
