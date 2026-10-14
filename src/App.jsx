import {useState, useEffect} from "react";
import {INITIAL_TRANSACTIONS, CATEGORIES, USERS} from "./data/initialData.js";

function App() {
    // 1. Инициализируем стейт: пробуем достать данные из localStorage,
    // а если там пусто — берем наши тестовые INITIAL_TRANSACTIONS

    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem('family_budget_transactions')
        return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS;
    });

    // 2. Следим за изменениями: как только массив transactions меняется,
    // автоматически сохраняем его в localStorage
    useEffect(() => {
        localStorage.setItem('family_budget_transactions', JSON.stringify(transactions));
    }, [transactions]);

    return (
        <div className="min-h-screen bg-slate-100 text-slate-800 py-8 px-4">
            <div className="max-w-xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Семейный бюджет</h1>
            </div>

            {/* Временный вывод списка, чтобы проверить, как связываются данные */}
            <div className="flex flex-col gap-3">
                {transactions.map((item) => {
                    // Находим объект категории и пользователя по их ID
                    const category = CATEGORIES.find((c) => c.id === item.categoryId);
                    const user = USERS.find((u) => u.id === item.userId);

                    return (
                        <div
                            key={item.id}
                            className="bg-white p-4 rounded-xl shadow-xs flex justify-between items-center border border-slate-200/60"
                        >
                            <div className="flex items-center gap-3">
                                {/* Цветной кружок категории */}
                                <div
                                    className="w-3 h-3 rounded-full shrink-0"
                                    style={{backgroundColor: category?.color || '#cbd5e1'}}
                                />
                                <div>
                                    <div className="font-semibold text-slate-900">
                                        {category ? category.name : 'Без категории'}
                                    </div>
                                    <div className="text-xs text-slate-500">
                                        {user ? user.name : 'Неизвестно'}
                                        {item.comment && ` • ${item.comment}`}
                                    </div>
                                </div>
                            </div>
                            <div className="font-bold text-base text-slate-900">
                                -{item.amount.toLocaleString('ru-RU')} ₽
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;

