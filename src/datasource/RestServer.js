import axios from 'axios'
import Transaction from "@/domain/Transaction";

/**
 * Токен и url для работы с API
 */
let TOKEN = '5d370094-57a7-4476-ace4-4f29bfa43d44';
let BASE_URL = 'https://api.stage.capusta.space/v1/cabinet/protected/transactions/page/1';

/**
 * Базово задаем пропсы axios'а.
 */
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;

export default {
    /**
     * Метод возвращает список транзакций
     */
    async getTransactionList() {
        let response = await axios.get('').catch(error => {
            alert(error.message)
            return {data: {}}
        })
        return response.data.result
            ? response.data.result.map((tr) => new Transaction(tr))
            : [];
    },
}