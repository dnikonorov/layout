<template>
  <div id="report">
    <header>
      <hgroup>
        <h1 class="header"> Layout по заданию </h1>
      </hgroup>
    </header>
    <date-info v-for="(node, key) in treeTransactions"
               :key="key"
               :date="node"/>
  </div>
</template>

<script>
import DateInfo from "@/components/DateInfo";
import RestServer from "@/datasource/RestServer";
import { treeTransactionsByDate } from '@/utils/TreeUtils';

export default {
  name: 'Layout',
  components: { DateInfo },
  data: function () {
    return {
      transactions: [],
    }
  },

  async created() {
    this.transactions = await RestServer.getTransactionList();
  },

  // Использовал computed, чтобы показать, что умею им пользоваться
  computed: {
    treeTransactions() {
      if (this.transactions) {
        return treeTransactionsByDate(this.transactions);
      }
      return [];
    }
  }
}
</script>
<style scoped>
  .header {
    color: white;
    padding-bottom: 10px;
  }
</style>
