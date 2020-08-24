import { createGuid } from '@/utils/Utils';
import DateUtils from "@/utils/DateUtils";

/**
 * Класс для преобразования данных с сервера
 * Оставил только те атрибуты, которые необходимы для отображения
 */
export default class Transaction {

    constructor(json) {
        this.id = json ? json.event_id : createGuid();
        this.payment_method = json ? json.payment_method : null;
        this.card_ps_type = json ? json.card_ps_type : null;
        this.account_number =  json ? json.account_number : null;
        this.amount = json ? json.amount : null;
        this.type = json ? json.type : null;
        this.status = json ? json.status : null;
        this.description =  json ? json.description : null;
        this.created_at = json ? json.created_at : null;
        this.created_date = this.created_at ? DateUtils.getDateFromDateTime(json.created_at) : null;
        this.created_time = this.created_at ? DateUtils.getTimeFromDateTime(json.created_at) : null;
    }
}