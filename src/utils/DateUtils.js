import moment from 'moment'

moment.locale('ru');

/**
 * Статичный класс для работы с датами.
 * Использовал класс, т.к. хотел показать, что знаю статику))
 */
export default class DateUtils {
    static RUSSIAN_DATE_FORMAT = 'DD.MM.YYYY';
    static ISO_DATE_FORMAT = 'YYYY-MM-DD';
    static TIME_FORMAT = 'HH:mm';

    static getDateFromDateTime(dateTime) {
        return moment(dateTime).format(DateUtils.RUSSIAN_DATE_FORMAT);
    }

    static getTimeFromDateTime(dateTime) {
        return moment(dateTime).format(DateUtils.TIME_FORMAT);
    }

    static isNow(date) {
      return moment(date).format(DateUtils.ISO_DATE_FORMAT) === DateUtils.getNowAsISO();
    }

    static isYesterday(date) {
        return moment(DateUtils.getNowAsISO()).diff(date, 'days') === 1;
    }

    static getNowAsISO() {
        return moment().format(DateUtils.ISO_DATE_FORMAT);
    }
}