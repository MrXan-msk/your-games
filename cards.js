// cards.js - Система карточек для магазина

class CardSystem {
    constructor() {
        this.cards = new Map();
        this.categories = new Map();
        this.initializeCards();
    }

    initializeCards() {
        // Все карточки с новыми названиями и ценами
        this.addCard(1, {
            title: "B-Day Candle",
            description: "",
            price: 1.65,
            category: "items",
            rarity: "",
            image: "assets/shop/item_1.png"
        });

        this.addCard(2, {
            title: "Lunar Snake",
            description: "",
            price: 1.65,
            category: "items",
            rarity: "",
            image: "assets/shop/item_2.png"
        });

        this.addCard(3, {
            title: "Snake Box",
            description: "",
            price: 1.65,
            category: "items",
            rarity: "",
            image: "assets/shop/item_3.png"
        });

        this.addCard(4, {
            title: "Desk Calendar",
            description: "",
            price: 1.75,
            category: "items",
            rarity: "",
            image: "assets/shop/item_4.png"
        });

        this.addCard(5, {
            title: "Whip Cupcake",
            description: "",
            price: 1.85,
            category: "items",
            rarity: "",
            image: "assets/shop/item_5.png"
        });

        this.addCard(6, {
            title: "lol Pop",
            description: "",
            price: 2,
            category: "items",
            rarity: "",
            image: "assets/shop/item_6.png"
        });

        this.addCard(7, {
            title: "Xmas Stocking",
            description: "",
            price: 2.1,
            category: "items",
            rarity: "",
            image: "assets/shop/item_7.png"
        });

        this.addCard(8, {
            title: "Candy Cane",
            description: "",
            price: 2.1,
            category: "items",
            rarity: "",
            image: "assets/shop/item_8.png"
        });

        this.addCard(9, {
            title: "Pet Snake",
            description: "",
            price: 2.1,
            category: "items",
            rarity: "",
            image: "assets/shop/item_9.png"
        });

        this.addCard(10, {
            title: "Jester Hat",
            description: "",
            price: 2.1,
            category: "items",
            rarity: "",
            image: "assets/shop/item_10.png"
        });

        this.addCard(11, {
            title: "Big Year",
            description: "",
            price: 2.2,
            category: "items",
            rarity: "",
            image: "assets/shop/item_11.png"
        });

        this.addCard(12, {
            title: "Holiday Drink",
            description: "",
            price: 2.2,
            category: "items",
            rarity: "",
            image: "assets/shop/item_12.png"
        });

        this.addCard(13, {
            title: "Party Sparkler",
            description: "",
            price: 2.2,
            category: "items",
            rarity: "",
            image: "assets/shop/item_13.png"
        });

        this.addCard(14, {
            title: "Cookie Heart",
            description: "",
            price: 2.2,
            category: "items",
            rarity: "",
            image: "assets/shop/item_14.png"
        });

        this.addCard(15, {
            title: "Hypno Lollipop",
            description: "",
            price: 2.2,
            category: "items",
            rarity: "",
            image: "assets/shop/item_15.png"
        });

        this.addCard(16, {
            title: "Winter Wreath",
            description: "",
            price: 2.2,
            category: "items",
            rarity: "",
            image: "assets/shop/item_16.png"
        });

        this.addCard(17, {
            title: "Fresh Socks",
            description: "",
            price: 2.2,
            category: "items",
            rarity: "",
            image: "assets/shop/item_17.png"
        });

        this.addCard(18, {
            title: "Homemade Cake",
            description: "",
            price: 2.2,
            category: "items",
            rarity: "",
            image: "assets/shop/item_18.png"
        });

        this.addCard(19, {
            title: "Jingle Balls",
            description: "",
            price: 2.3,
            category: "items",
            rarity: "",
            image: "assets/shop/item_19.png"
        });

        this.addCard(20, {
            title: "Ginger Cookie",
            description: "",
            price: 2.3,
            category: "items",
            rarity: "",
            image: "assets/shop/item_20.png"
        });

        this.addCard(21, {
            title: "Clover Pin",
            description: "",
            price: 2.3,
            category: "items",
            rarity: "",
            image: "assets/shop/item_21.png"
        });

        this.addCard(22, {
            title: "Tama Gadget",
            description: "",
            price: 2.4,
            category: "items",
            rarity: "",
            image: "assets/shop/item_22.png"
        });

        this.addCard(23, {
            title: "Spices Wine",
            description: "",
            price: 2.45,
            category: "items",
            rarity: "",
            image: "assets/shop/item_23.png"
        });

        this.addCard(24, {
            title: "Stellar Rocket",
            description: "",
            price: 2.5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_24.png"
        });

        this.addCard(25, {
            title: "Snoop Dogg",
            description: "",
            price: 2.6,
            category: "items",
            rarity: "",
            image: "assets/shop/item_25.png"
        });

        this.addCard(26, {
            title: "Swag Bag",
            description: "",
            price: 2.7,
            category: "items",
            rarity: "",
            image: "assets/shop/item_26.png"
        });

        this.addCard(27, {
            title: "Moon Pendant",
            description: "",
            price: 2.8,
            category: "items",
            rarity: "",
            image: "assets/shop/item_27.png"
        });

        this.addCard(28, {
            title: "Jack-in-the-Box",
            description: "",
            price: 3,
            category: "items",
            rarity: "",
            image: "assets/shop/item_28.png"
        });

        this.addCard(29, {
            title: "Star Notepad",
            description: "",
            price: 3,
            category: "items",
            rarity: "",
            image: "assets/shop/item_29.png"
        });

        this.addCard(30, {
            title: "Easter Egg",
            description: "",
            price: 3,
            category: "items",
            rarity: "",
            image: "assets/shop/item_30.png"
        });

        this.addCard(31, {
            title: "Santa Hat",
            description: "",
            price: 3,
            category: "items",
            rarity: "",
            image: "assets/shop/item_31.png"
        });

        this.addCard(32, {
            title: "Restless Jar",
            description: "",
            price: 3,
            category: "items",
            rarity: "",
            image: "assets/shop/item_32.png"
        });

        this.addCard(33, {
            title: "Joyful Bundle",
            description: "",
            price: 3,
            category: "items",
            rarity: "",
            image: "assets/shop/item_33.png"
        });

        this.addCard(34, {
            title: "Light Sword",
            description: "",
            price: 3,
            category: "items",
            rarity: "",
            image: "assets/shop/item_34.png"
        });

        this.addCard(35, {
            title: "Lush Bouquet",
            description: "",
            price: 3.5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_35.png"
        });

        this.addCard(36, {
            title: "Snow Globe",
            description: "",
            price: 3.5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_36.png"
        });

        this.addCard(37, {
            title: "Hex Pot",
            description: "",
            price: 3.5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_37.png"
        });

        this.addCard(38, {
            title: "Bunnt Muffin",
            description: "",
            price: 3.75,
            category: "items",
            rarity: "",
            image: "assets/shop/item_38.png"
        });

        this.addCard(39, {
            title: "Witch Hat",
            description: "",
            price: 3.8,
            category: "items",
            rarity: "",
            image: "assets/shop/item_39.png"
        });

        this.addCard(40, {
            title: "Input Key",
            description: "",
            price: 4,
            category: "items",
            rarity: "",
            image: "assets/shop/item_40.png"
        });

        this.addCard(41, {
            title: "Bow Tie",
            description: "",
            price: 4,
            category: "items",
            rarity: "",
            image: "assets/shop/item_41.png"
        });

        this.addCard(42, {
            title: "Jelly Bunny",
            description: "",
            price: 4,
            category: "items",
            rarity: "",
            image: "assets/shop/item_42.png"
        });

        this.addCard(43, {
            title: "Eternal Candle",
            description: "",
            price: 4,
            category: "items",
            rarity: "",
            image: "assets/shop/item_43.png"
        });

        this.addCard(44, {
            title: "Spy Agaric",
            description: "",
            price: 4.3,
            category: "items",
            rarity: "",
            image: "assets/shop/item_44.png"
        });

        this.addCard(45, {
            title: "Snow Mittens",
            description: "",
            price: 4.5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_45.png"
        });

        this.addCard(46, {
            title: "Berry Box",
            description: "",
            price: 4.5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_46.png"
        });

        this.addCard(47, {
            title: "Evil Eye",
            description: "",
            price: 5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_47.png"
        });

        this.addCard(48, {
            title: "Jolly Chimp",
            description: "",
            price: 5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_48.png"
        });

        this.addCard(49, {
            title: "Hanging Star",
            description: "",
            price: 5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_49.png"
        });

        this.addCard(50, {
            title: "Valentine Box",
            description: "",
            price: 5.3,
            category: "items",
            rarity: "",
            image: "assets/shop/item_50.png"
        });

        this.addCard(51, {
            title: "Sakura Flower",
            description: "",
            price: 5.5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_51.png"
        });

        this.addCard(52, {
            title: "Snoop Cigar",
            description: "",
            price: 6.5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_52.png"
        });

        this.addCard(53, {
            title: "Slegh Bell",
            description: "",
            price: 7.5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_53.png"
        });

        this.addCard(54, {
            title: "Sky Skitettos",
            description: "",
            price: 8,
            category: "items",
            rarity: "",
            image: "assets/shop/item_54.png"
        });

        this.addCard(55, {
            title: "Record Player",
            description: "",
            price: 8,
            category: "items",
            rarity: "",
            image: "assets/shop/item_55.png"
        });

        this.addCard(56, {
            title: "Crystal Ball",
            description: "",
            price: 8.4,
            category: "items",
            rarity: "",
            image: "assets/shop/item_56.png"
        });

        this.addCard(57, {
            title: "Love Candle",
            description: "",
            price: 7.5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_57.png"
        });

        this.addCard(58, {
            title: "Top Hat",
            description: "",
            price: 8.5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_58.png"
        });

        this.addCard(59, {
            title: "Skull Flower",
            description: "",
            price: 9,
            category: "items",
            rarity: "",
            image: "assets/shop/item_59.png"
        });

        this.addCard(60, {
            title: "Trapped Heart",
            description: "",
            price: 10,
            category: "items",
            rarity: "",
            image: "assets/shop/item_60.png"
        });

        this.addCard(61, {
            title: "Love Potion",
            description: "",
            price: 11.5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_61.png"
        });

        this.addCard(62, {
            title: "Flying Broom",
            description: "",
            price: 12,
            category: "items",
            rarity: "",
            image: "assets/shop/item_62.png"
        });

        this.addCard(63, {
            title: "Ionic Dryer",
            description: "",
            price: 13,
            category: "items",
            rarity: "",
            image: "assets/shop/item_63.png"
        });

        this.addCard(64, {
            title: "Cupid Charm",
            description: "",
            price: 14,
            category: "items",
            rarity: "",
            image: "assets/shop/item_64.png"
        });

        this.addCard(65, {
            title: "Eternal Rose",
            description: "",
            price: 17,
            category: "items",
            rarity: "",
            image: "assets/shop/item_65.png"
        });

        this.addCard(66, {
            title: "Mad Pumpkin",
            description: "",
            price: 18.5,
            category: "items",
            rarity: "",
            image: "assets/shop/item_66.png"
        });

        this.addCard(67, {
            title: "Diamond Ring",
            description: "",
            price: 20,
            category: "items",
            rarity: "",
            image: "assets/shop/item_67.png"
        });

        this.addCard(68, {
            title: "Voodoo Doll",
            description: "",
            price: 22,
            category: "items",
            rarity: "",
            image: "assets/shop/item_68.png"
        });

        this.addCard(69, {
            title: "Toy Bear",
            description: "",
            price: 24,
            category: "items",
            rarity: "",
            image: "assets/shop/item_69.png"
        });

        this.addCard(70, {
            title: "Vintage Cigar",
            description: "",
            price: 25,
            category: "items",
            rarity: "",
            image: "assets/shop/item_70.png"
        });

        this.addCard(71, {
            title: "Signet Ring",
            description: "",
            price: 28,
            category: "items",
            rarity: "",
            image: "assets/shop/item_71.png"
        });

        this.addCard(72, {
            title: "Low Rider",
            description: "",
            price: 30,
            category: "items",
            rarity: "",
            image: "assets/shop/item_72.png"
        });

        this.addCard(73, {
            title: "Neko Helmet",
            description: "",
            price: 33,
            category: "items",
            rarity: "",
            image: "assets/shop/item_73.png"
        });

        this.addCard(74, {
            title: "Kissed Frog",
            description: "",
            price: 35,
            category: "items",
            rarity: "",
            image: "assets/shop/item_74.png"
        });

        this.addCard(75, {
            title: "Sharp Tongue",
            description: "",
            price: 40,
            category: "items",
            rarity: "",
            image: "assets/shop/item_75.png"
        });

        this.addCard(76, {
            title: "Swiss Watch",
            description: "",
            price: 47,
            category: "items",
            rarity: "",
            image: "assets/shop/item_76.png"
        });

        this.addCard(77, {
            title: "Genie Lamp",
            description: "",
            price: 50,
            category: "items",
            rarity: "",
            image: "assets/shop/item_77.png"
        });

        this.addCard(78, {
            title: "Bonded Ring",
            description: "",
            price: 55,
            category: "items",
            rarity: "",
            image: "assets/shop/item_78.png"
        });

        this.addCard(79, {
            title: "Westside Sign",
            description: "",
            price: 58,
            category: "items",
            rarity: "",
            image: "assets/shop/item_79.png"
        });

        this.addCard(80, {
            title: "Scared Cat",
            description: "",
            price: 60,
            category: "items",
            rarity: "",
            image: "assets/shop/item_80.png"
        });

        this.addCard(81, {
            title: "Gem Signet",
            description: "",
            price: 65,
            category: "items",
            rarity: "",
            image: "assets/shop/item_81.png"
        });

        this.addCard(82, {
            title: "Magic Potion",
            description: "",
            price: 77,
            category: "items",
            rarity: "",
            image: "assets/shop/item_82.png"
        });

        this.addCard(83, {
            title: "Ion Gem",
            description: "",
            price: 80,
            category: "items",
            rarity: "",
            image: "assets/shop/item_83.png"
        });

        this.addCard(84, {
            title: "Perfume Bottle",
            description: "",
            price: 88,
            category: "items",
            rarity: "",
            image: "assets/shop/item_84.png"
        });

        this.addCard(85, {
            title: "Mini Oscar",
            description: "",
            price: 90,
            category: "items",
            rarity: "",
            image: "assets/shop/item_85.png"
        });

        this.addCard(86, {
            title: "Loot Bag",
            description: "",
            price: 95,
            category: "items",
            rarity: "",
            image: "assets/shop/item_86.png"
        });

        this.addCard(87, {
            title: "Artisan Brick",
            description: "",
            price: 110,
            category: "items",
            rarity: "",
            image: "assets/shop/item_87.png"
        });

        this.addCard(88, {
            title: "Nail Bracelet",
            description: "",
            price: 120,
            category: "items",
            rarity: "",
            image: "assets/shop/item_88.png"
        });

        this.addCard(89, {
            title: "Astral Shard",
            description: "",
            price: 145,
            category: "items",
            rarity: "",
            image: "assets/shop/item_89.png"
        });

        this.addCard(90, {
            title: "Mighty Arm",
            description: "",
            price: 235,
            category: "items",
            rarity: "",
            image: "assets/shop/item_90.png"
        });

        this.addCard(91, {
            title: "Heroic Helmet",
            description: "",
            price: 250,
            category: "items",
            rarity: "",
            image: "assets/shop/item_91.png"
        });

        this.addCard(92, {
            title: "Precious Peach",
            description: "",
            price: 385,
            category: "items",
            rarity: "",
            image: "assets/shop/item_92.png"
        });

        this.addCard(93, {
            title: "Durov's Cap",
            description: "",
            price: 900,
            category: "items",
            rarity: "",
            image: "assets/shop/item_93.png"
        });

        this.addCard(94, {
            title: "Heart Locket",
            description: "",
            price: 1300,
            category: "items",
            rarity: "",
            image: "assets/shop/item_94.png"
        });

        this.addCard(95, {
            title: "Plush Pepe",
            description: "",
            price: 6000,
            category: "items",
            rarity: "",
            image: "assets/shop/item_95.png"
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

    getRarityText(rarity) {
        const rarityMap = {
            'common': 'Обычная',
            'rare': 'Редкая',
            'epic': 'Эпическая',
            'legendary': 'Легендарная'
        };
        return rarityMap[rarity] || rarity;
    }
}

// Создаем глобальный экземпляр системы карточек
const cardSystem = new CardSystem();
