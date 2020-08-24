<template>
  <div class="date_info" v-if="date">
    <div>
      <span>{{ date.name }}</span>
    </div>
    <ul>
      <transaction v-for="(transaction, key) in date.children"
                   :transaction="transaction"
                   :key="key"/>
    </ul>
  </div>
</template>

<script>

/**
 * Компонент для отображения Одного дня
 */
import Transaction from "@/components/Transaction";
export default {
  name: "DateInfo",
  components: {Transaction},
  props: {
    date: Object,
  },
}
</script>

<style scoped>
  .date_info {
    padding: 0 !important;
  }
</style>