import DateUtils from '@/utils/DateUtils';
import sort from 'fast-sort';

/**
 * Создает дерево транзакций по дате.
 * Верхняя нода - дата
 * Дети - транзакции
 */
export function treeTransactionsByDate(records) {
    const nodes = [];
    if (records) {
        records.forEach((r) => {
            const dateAsParent = nodes
                .find((tr) => tr.name === r.created_date);
            if (dateAsParent) {
                dateAsParent.children.push(r);
            } else {
                const nodeName = DateUtils.isNow(r.created_at)
                    ? 'Сегодня'
                    : DateUtils.isYesterday(r.created_at)
                        ? 'Вчера'
                        : r.created_date;
                nodes.push({
                    id: r.id,
                    name: nodeName,
                    children: [r],
                });
            }
        });
    }
    return sortedTreeDesc(nodes, 'created_at');
}

/**
 * Создает дерево транзакций по дате.
 * @data - данные, которые сортируем
 * @prop - по какому пропсу делаем сортировку
 * @desc - булин, если задан - сортировка по убыванию, в противном случае - по умолчанию
 * Дети - транзакции
 */
function sortedTreeDesc(data, prop, desc) {
    if (desc) {
        sort(data).desc(prop);
    } else {
        sort(data).asc(prop);
    }
    data.forEach((o) => {
        if (o.children) {
            sortedTreeDesc(o.children, 'created_time', true);
        }
    });
    return data;
}