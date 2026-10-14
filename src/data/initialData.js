export const CATEGORIES =[
    {id: 'food', name: 'Продукты', color: '#10b981', icon: 'ShoppingCart'},
    {id: 'cafe', name: 'Кафе и доставка', color: '#f59e0b', icon: 'ShoppingCart'},
    {id: 'home', name: 'Дом и ЖКХ', color: '#3b82f6', icon: 'ShoppingCart'},
    {id: 'transport', name: 'Транспорт', color: '#6366f1', icon: 'ShoppingCart'},
    {id: 'entertainment', name: 'Развлечения', color: '#8b5cf6', icon: 'ShoppingCart'},
    {id: 'other', name: 'Прочее', color: '#64748b', icon: 'ShoppingCart'},
];

export const USERS = [
    {id: 'user_1', name: 'Евгений', color: '#2563eb'},
    {id: 'user_2', name: 'Ирина', color: '#db2777'},
];

export const INITIAL_TRANSACTIONS =[
    {
        id: '1',
        amount: 1850,
        categoryId: 'food',
        userId: 'user_1',
        date: new Date().toISOString(),
        comment: 'Закупка в супермаркете'
    },
    {
        id: '2',
        amount: 450,
        categoryId: 'cafe',
        userId: 'user_2',
        date: new Date().toISOString(),
        comment: 'Кофе и выпечка'
    },
];