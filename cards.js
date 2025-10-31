// cards.js - Система карточек для магазина

class CardSystem {
    constructor() {
        this.cards = new Map();
        this.categories = new Map();
        this.initializeCards();
    }

    initializeCards() {
        // Апгрейды (25 карточек)
        this.addCard(1, {
            title: "Увеличение ставки",
            description: "Максимальная ставка +100 TON",
            price: 50,
            category: "upgrades",
            rarity: "rare",
            image: "assets/shop/boost.png"
        });

        this.addCard(2, {
            title: "Быстрый вывод",
            description: "Ускоренный вывод средств",
            price: 75,
            category: "upgrades",
            rarity: "epic",
            image: "assets/shop/fast_withdraw.png"
        });

        this.addCard(3, {
            title: "Золотой аккаунт",
            description: "Особые привилегии",
            price: 150,
            category: "upgrades",
            rarity: "legendary",
            image: "assets/shop/gold_account.png"
        });

        this.addCard(4, {
            title: "Дополнительные слоты",
            description: "+3 слота для улучшений",
            price: 40,
            category: "upgrades",
            rarity: "common",
            image: "assets/shop/extra_slots.png"
        });

        this.addCard(5, {
            title: "Защита от проигрыша",
            description: "Страховка первой ставки",
            price: 100,
            category: "upgrades",
            rarity: "epic",
            image: "assets/shop/protection.png"
        });

        this.addCard(6, {
            title: "Умный анализ",
            description: "Аналитика в реальном времени",
            price: 120,
            category: "upgrades",
            rarity: "rare",
            image: "assets/shop/analytics.png"
        });

        this.addCard(7, {
            title: "VIP статус",
            description: "Доступ к эксклюзивным играм",
            price: 200,
            category: "upgrades",
            rarity: "legendary",
            image: "assets/shop/vip.png"
        });

        this.addCard(8, {
            title: "Бонусный множитель",
            description: "+0.1x к множителям",
            price: 80,
            category: "upgrades",
            rarity: "rare",
            image: "assets/shop/multiplier.png"
        });

        this.addCard(9, {
            title: "Авто-ставки",
            description: "Автоматические ставки",
            price: 90,
            category: "upgrades",
            rarity: "epic",
            image: "assets/shop/auto_bet.png"
        });

        this.addCard(10, {
            title: "Расширенная история",
            description: "История за 30 дней",
            price: 35,
            category: "upgrades",
            rarity: "common",
            image: "assets/shop/history.png"
        });

        this.addCard(11, {
            title: "Приватный чат",
            description: "Закрытый чат с игроками",
            price: 60,
            category: "upgrades",
            rarity: "rare",
            image: "assets/shop/private_chat.png"
        });

        this.addCard(12, {
            title: "Кастомный аватар",
            description: "Уникальный аватар",
            price: 25,
            category: "upgrades",
            rarity: "common",
            image: "assets/shop/avatar.png"
        });

        this.addCard(13, {
            title: "Расширенный профиль",
            description: "Доп. информация в профиле",
            price: 45,
            category: "upgrades",
            rarity: "common",
            image: "assets/shop/profile.png"
        });

        this.addCard(14, {
            title: "Турнирный доступ",
            description: "Участие в турнирах",
            price: 180,
            category: "upgrades",
            rarity: "legendary",
            image: "assets/shop/tournament.png"
        });

        this.addCard(15, {
            title: "Быстрая поддержка",
            description: "Приоритетная поддержка",
            price: 70,
            category: "upgrades",
            rarity: "rare",
            image: "assets/shop/support.png"
        });

        this.addCard(16, {
            title: "Анализ рисков",
            description: "Оценка рисков в реальном времени",
            price: 95,
            category: "upgrades",
            rarity: "epic",
            image: "assets/shop/risk.png"
        });

        this.addCard(17, {
            title: "Экспресс-ставки",
            description: "Быстрые комбинированные ставки",
            price: 55,
            category: "upgrades",
            rarity: "common",
            image: "assets/shop/express.png"
        });

        this.addCard(18, {
            title: "Статистика игроков",
            description: "Подробная статистика",
            price: 65,
            category: "upgrades",
            rarity: "rare",
            image: "assets/shop/stats.png"
        });

        this.addCard(19, {
            title: "Персональный бот",
            description: "Бот-помощник для игры",
            price: 300,
            category: "upgrades",
            rarity: "legendary",
            image: "assets/shop/bot.png"
        });

        this.addCard(20, {
            title: "Расширенные уведомления",
            description: "Детальные уведомления",
            price: 30,
            category: "upgrades",
            rarity: "common",
            image: "assets/shop/notifications.png"
        });

        this.addCard(21, {
            title: "Двойной кэшбэк",
            description: "Удвоенный кэшбэк за игру",
            price: 110,
            category: "upgrades",
            rarity: "epic",
            image: "assets/shop/cashback.png"
        });

        this.addCard(22, {
            title: "Авто-выход",
            description: "Автоматический выход по цели",
            price: 85,
            category: "upgrades",
            rarity: "rare",
            image: "assets/shop/auto_cashout.png"
        });

        this.addCard(23, {
            title: "Расширенный банк",
            description: "Увеличенный банкролл",
            price: 130,
            category: "upgrades",
            rarity: "epic",
            image: "assets/shop/bank.png"
        });

        this.addCard(24, {
            title: "Приватный сервер",
            description: "Личный игровой сервер",
            price: 250,
            category: "upgrades",
            rarity: "legendary",
            image: "assets/shop/server.png"
        });

        this.addCard(25, {
            title: "Умный советник",
            description: "AI помощник для ставок",
            price: 170,
            category: "upgrades",
            rarity: "legendary",
            image: "assets/shop/advisor.png"
        });

        // Кейсы (15 карточек)
        this.addCard(26, {
            title: "Бронзовый кейс",
            description: "Шанс получить обычные предметы",
            price: 10,
            category: "cases",
            rarity: "common",
            image: "assets/shop/bronze_case.png"
        });

        this.addCard(27, {
            title: "Серебряный кейс",
            description: "Шанс получить редкие предметы",
            price: 25,
            category: "cases",
            rarity: "rare",
            image: "assets/shop/silver_case.png"
        });

        this.addCard(28, {
            title: "Золотой кейс",
            description: "Шанс получить эпические предметы",
            price: 50,
            category: "cases",
            rarity: "epic",
            image: "assets/shop/gold_case.png"
        });

        this.addCard(29, {
            title: "Платиновый кейс",
            description: "Шанс получить легендарные предметы",
            price: 100,
            category: "cases",
            rarity: "legendary",
            image: "assets/shop/platinum_case.png"
        });

        this.addCard(30, {
            title: "Мистический кейс",
            description: "Загадочный кейс с сюрпризом",
            price: 75,
            category: "cases",
            rarity: "epic",
            image: "assets/shop/mystery_case.png"
        });

        this.addCard(31, {
            title: "Легендарный кейс",
            description: "Только легендарные предметы",
            price: 200,
            category: "cases",
            rarity: "legendary",
            image: "assets/shop/legendary_case.png"
        });

        this.addCard(32, {
            title: "Новичковый кейс",
            description: "Идеально для начала игры",
            price: 5,
            category: "cases",
            rarity: "common",
            image: "assets/shop/beginner_case.png"
        });

        this.addCard(33, {
            title: "Профессиональный кейс",
            description: "Для опытных игроков",
            price: 150,
            category: "cases",
            rarity: "epic",
            image: "assets/shop/pro_case.png"
        });

        this.addCard(34, {
            title: "Удачный кейс",
            description: "Повышенный шанс на удачу",
            price: 60,
            category: "cases",
            rarity: "rare",
            image: "assets/shop/lucky_case.png"
        });

        this.addCard(35, {
            title: "Боевой кейс",
            description: "Агрессивные улучшения",
            price: 90,
            category: "cases",
            rarity: "epic",
            image: "assets/shop/combat_case.png"
        });

        this.addCard(36, {
            title: "Экономичный кейс",
            description: "Выгодные предложения",
            price: 40,
            category: "cases",
            rarity: "common",
            image: "assets/shop/economy_case.png"
        });

        this.addCard(37, {
            title: "Премиум кейс",
            description: "Эксклюзивные предметы",
            price: 120,
            category: "cases",
            rarity: "epic",
            image: "assets/shop/premium_case.png"
        });

        this.addCard(38, {
            title: "Фортуна кейс",
            description: "Кейс удачи и везения",
            price: 80,
            category: "cases",
            rarity: "rare",
            image: "assets/shop/fortune_case.png"
        });

        this.addCard(39, {
            title: "Титановый кейс",
            description: "Невероятно ценные предметы",
            price: 180,
            category: "cases",
            rarity: "legendary",
            image: "assets/shop/titan_case.png"
        });

        this.addCard(40, {
            title: "Беспроигрышный кейс",
            description: "Гарантированный выигрыш",
            price: 95,
            category: "cases",
            rarity: "epic",
            image: "assets/shop/win_case.png"
        });

        // Контракты (15 карточек)
        this.addCard(41, {
            title: "Базовый контракт",
            description: "Простой контракт на 7 дней",
            price: 20,
            category: "contracts",
            rarity: "common",
            image: "assets/shop/basic_contract.png"
        });

        this.addCard(42, {
            title: "Стандартный контракт",
            description: "Контракт на 14 дней",
            price: 35,
            category: "contracts",
            rarity: "common",
            image: "assets/shop/standard_contract.png"
        });

        this.addCard(43, {
            title: "Премиум контракт",
            description: "Контракт на 30 дней",
            price: 60,
            category: "contracts",
            rarity: "rare",
            image: "assets/shop/premium_contract.png"
        });

        this.addCard(44, {
            title: "Золотой контракт",
            description: "Контракт с бонусами",
            price: 100,
            category: "contracts",
            rarity: "epic",
            image: "assets/shop/gold_contract.png"
        });

        this.addCard(45, {
            title: "Платиновый контракт",
            description: "Эксклюзивный контракт",
            price: 150,
            category: "contracts",
            rarity: "legendary",
            image: "assets/shop/platinum_contract.png"
        });

        this.addCard(46, {
            title: "Быстрый контракт",
            description: "Короткий но выгодный",
            price: 25,
            category: "contracts",
            rarity: "common",
            image: "assets/shop/fast_contract.png"
        });

        this.addCard(47, {
            title: "Долгосрочный контракт",
            description: "Контракт на 90 дней",
            price: 200,
            category: "contracts",
            rarity: "legendary",
            image: "assets/shop/long_contract.png"
        });

        this.addCard(48, {
            title: "Прибыльный контракт",
            description: "Высокая доходность",
            price: 80,
            category: "contracts",
            rarity: "epic",
            image: "assets/shop/profit_contract.png"
        });

        this.addCard(49, {
            title: "Страховой контракт",
            description: "Защита от потерь",
            price: 45,
            category: "contracts",
            rarity: "rare",
            image: "assets/shop/insurance_contract.png"
        });

        this.addCard(50, {
            title: "Агрессивный контракт",
            description: "Высокий риск - высокая награда",
            price: 120,
            category: "contracts",
            rarity: "epic",
            image: "assets/shop/aggressive_contract.png"
        });

        this.addCard(51, {
            title: "Консервативный контракт",
            description: "Низкий риск - стабильный доход",
            price: 70,
            category: "contracts",
            rarity: "rare",
            image: "assets/shop/conservative_contract.png"
        });

        this.addCard(52, {
            title: "Экспресс контракт",
            description: "Быстрое выполнение",
            price: 30,
            category: "contracts",
            rarity: "common",
            image: "assets/shop/express_contract.png"
        });

        this.addCard(53, {
            title: "VIP контракт",
            description: "Эксклюзивные условия",
            price: 180,
            category: "contracts",
            rarity: "legendary",
            image: "assets/shop/vip_contract.png"
        });

        this.addCard(54, {
            title: "Стартовый контракт",
            description: "Идеален для новичков",
            price: 15,
            category: "contracts",
            rarity: "common",
            image: "assets/shop/start_contract.png"
        });

        this.addCard(55, {
            title: "Профессиональный контракт",
            description: "Для опытных инвесторов",
            price: 140,
            category: "contracts",
            rarity: "epic",
            image: "assets/shop/pro_contract.png"
        });

        // Бустеры (15 карточек)
        this.addCard(56, {
            title: "Бустер удачи",
            description: "Временное увеличение удачи",
            price: 15,
            category: "boosters",
            rarity: "common",
            image: "assets/shop/luck_booster.png"
        });

        this.addCard(57, {
            title: "Бустер опыта",
            description: "Ускоренный набор опыта",
            price: 20,
            category: "boosters",
            rarity: "common",
            image: "assets/shop/exp_booster.png"
        });

        this.addCard(58, {
            title: "Золотой бустер",
            description: "Увеличение дохода",
            price: 50,
            category: "boosters",
            rarity: "rare",
            image: "assets/shop/gold_booster.png"
        });

        this.addCard(59, {
            title: "Скоростной бустер",
            description: "Ускорение процессов",
            price: 35,
            category: "boosters",
            rarity: "common",
            image: "assets/shop/speed_booster.png"
        });

        this.addCard(60, {
            title: "Эпический бустер",
            description: "Мощное временное усиление",
            price: 75,
            category: "boosters",
            rarity: "epic",
            image: "assets/shop/epic_booster.png"
        });

        this.addCard(61, {
            title: "Легендарный бустер",
            description: "Максимальное усиление",
            price: 120,
            category: "boosters",
            rarity: "legendary",
            image: "assets/shop/legendary_booster.png"
        });

        this.addCard(62, {
            title: "Защитный бустер",
            description: "Снижение рисков",
            price: 40,
            category: "boosters",
            rarity: "rare",
            image: "assets/shop/defense_booster.png"
        });

        this.addCard(63, {
            title: "Атакующий бустер",
            description: "Увеличение выигрышей",
            price: 55,
            category: "boosters",
            rarity: "epic",
            image: "assets/shop/attack_booster.png"
        });

        this.addCard(64, {
            title: "Энергетический бустер",
            description: "Восстановление энергии",
            price: 25,
            category: "boosters",
            rarity: "common",
            image: "assets/shop/energy_booster.png"
        });

        this.addCard(65, {
            title: "Магический бустер",
            description: "Особые способности",
            price: 90,
            category: "boosters",
            rarity: "epic",
            image: "assets/shop/magic_booster.png"
        });

        this.addCard(66, {
            title: "Бустер времени",
            description: "Продление времени",
            price: 30,
            category: "boosters",
            rarity: "common",
            image: "assets/shop/time_booster.png"
        });

        this.addCard(67, {
            title: "Критический бустер",
            description: "Увеличение шанса крита",
            price: 65,
            category: "boosters",
            rarity: "rare",
            image: "assets/shop/critical_booster.png"
        });

        this.addCard(68, {
            title: "Бустер везения",
            description: "Максимальная удача",
            price: 100,
            category: "boosters",
            rarity: "legendary",
            image: "assets/shop/lucky_booster.png"
        });

        this.addCard(69, {
            title: "Бустер прогресса",
            description: "Ускорение развития",
            price: 45,
            category: "boosters",
            rarity: "rare",
            image: "assets/shop/progress_booster.png"
        });

        this.addCard(70, {
            title: "Бустер богатства",
            description: "Приумножение капитала",
            price: 110,
            category: "boosters",
            rarity: "legendary",
            image: "assets/shop/wealth_booster.png"
        });
    }

    addCard(id, cardData) {
        this.cards.set(id, {
            id,
            title: cardData.title,
            description: cardData.description,
            price: cardData.price,
            image: cardData.image,
            category: cardData.category,
            rarity: cardData.rarity
        });
    }

    getCardsByCategory(category) {
        if (category === 'all') {
            return Array.from(this.cards.values());
        }
        return Array.from(this.cards.values()).filter(card => card.category === category);
    }

    getCard(id) {
        return this.cards.get(id);
    }

    getAllCards() {
        return Array.from(this.cards.values());
    }
}

// Создаем глобальный экземпляр системы карточек
const cardSystem = new CardSystem();