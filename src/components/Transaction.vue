<template>
  <li class="transaction">
    <details>
      <summary>
        <div class="order">{{ getOrderName(transaction.type) }} <b> {{ transaction.id }}</b></div>
        <div class="time">{{ transaction.created_time }}</div>
        <div class="account">{{ transaction.account_number }}</div>
        <div class="amount rubles positive">{{ transaction.amount }}</div>
      </summary>
      <p class="description">{{transaction.description}}</p>
    </details>
  </li>
</template>

<script>
/**
 * Enum для отображения типа транзакции
 */
let PAYMENT_TYPE = {
  PURCHASE_BILL: 'Заказ',
  PURCHASE: 'Перевод',
  REFUND: 'Возврат',
}

/**
 * Компонент для отображения одной транзакции
 */
export default {
  name: "Transaction",
  props: ['transaction'],

  methods: {
    getOrderName(order) {
      return PAYMENT_TYPE[order];
    }
  }
}
</script>

<style scoped>

</style>