<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <div class="portal-link">
      <a
        href="https://www.city.shizuoka.lg.jp/388_000101.html#h2_1"
        target="_blank"
        >発生状況について（感染が疑われる経路含む）
        <i
          aria-label="別タブで開く"
          role="img"
          class="v-icon notranslate ExternalLinkIcon mdi mdi-open-in-new theme--light"
          style="font-size: 15px;"
        />
      </a>
    </div>
    <template v-slot:button>
      <span />
    </template>
    <v-data-table
      :ref="'displayedTable'"
      :headers="chartData.headers"
      :items="chartData.datasets"
      :items-per-page="-1"
      :hide-default-footer="true"
      :height="240"
      :fixed-header="true"
      :mobile-breakpoint="0"
      :custom-sort="customSort"
      class="cardTable"
    >
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.text">
            <th class="text-start">{{ item['公表日'] }}</th>
            <td class="text-start">{{ item['居住地'] }}</td>
            <td class="text-start">{{ item['年代'] }}</td>
            <td class="text-start">{{ item['性別'] }}</td>
            <td class="text-center">{{ item['退院'] }}</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
    <div class="note">
      {{ $t('※1 退院には、死亡退院を含みます') }}<br />
      {{ $t('※2 ') }}
      <a
        href="https://www.city.shizuoka.lg.jp/388_000109.html#h2_7"
        target="_blank"
        >{{ $t('静岡市公式HP') }}
        <i
          aria-label="別タブで開く"
          role="img"
          class="v-icon notranslate ExternalLinkIcon mdi mdi-open-in-new theme--light"
          style="font-size: 15px;"
        />
      </a>
      {{ $t('にて統計情報を公開しています') }}
    </div>
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="info.lText"
        :s-text="info.sText"
        :unit="info.unit"
      />
    </template>
    <template v-slot:footer>
      <open-data-link :url="url" />
    </template>
  </data-view>
</template>

<style lang="scss">
.cardTable {
  &.v-data-table {
    th {
      padding: 8px 10px;
      height: auto;
      border-bottom: 1px solid $gray-4;
      white-space: nowrap;
      color: $gray-2;
      font-size: 12px;

      &.text-center {
        text-align: center;
      }
    }

    tbody {
      tr {
        color: $gray-1;

        th {
          font-weight: normal;
        }

        td {
          padding: 8px 10px;
          height: auto;
          font-size: 12px;

          &.text-center {
            text-align: center;
          }
        }

        &:nth-child(odd) {
          th,
          td {
            background: rgba($gray-4, 0.3);
          }
        }

        &:not(:last-child) {
          td:not(.v-data-table__mobile-row) {
            border: none;
          }
        }
      }
    }
    &:focus {
      outline: dotted $gray-3 1px;
    }
  }
}

.note {
  padding: 8px;
  font-size: 12px;
  color: $gray-3;
  a:link {
    text-decoration: none;
  }
}
.portal-link {
  margin-top: -30px;
  a:link {
    text-decoration: none;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import DataView from '@/components/DataView.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'

export default Vue.extend({
  components: { DataView, DataViewBasicInfoPanel, OpenDataLink },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    },
    chartData: {
      type: Object,
      default: () => {}
    },
    date: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      default: () => {}
    },
    url: {
      type: String,
      default: ''
    },
    customSort: {
      type: Function,
      default(items: Object[], index: string[], isDesc: boolean[]) {
        items.sort((a: any, b: any) => {
          let comparison = 0
          if (String(a[index[0]]) < String(b[index[0]])) {
            comparison = -1
          } else if (String(b[index[0]]) < String(a[index[0]])) {
            comparison = 1
          }
          // a と b が等しい場合は上記のif文を両方とも通過するので 0 のままとなる

          // 降順指定の場合は符号を反転
          if (comparison !== 0) {
            comparison = isDesc[0] ? comparison * -1 : comparison
          }
          return comparison
        })
        return items
      }
    }
  },
  mounted() {
    const vTables = this.$refs.displayedTable as Vue
    const vTableElement = vTables.$el
    const tables = vTableElement.querySelectorAll('table')

    tables.forEach((table: HTMLElement) => {
      table.setAttribute('tabindex', '0')
    })
  }
})
</script>
