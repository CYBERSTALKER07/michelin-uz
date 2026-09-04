export type Language = 'uz' | 'ru';

export const content = {
  uz: {
    nav: {
      catalog: "Katalog",
      technology: "Texnologiya",
      wheels: "G'ildiraklar",
      supercars: "Superkarlar",
      faq: "FAQ",
      contact: "Aloqa",
      bookFitting: "O'rnatishga yozilish"
    },
    hero: {
      badge: "O'zbekistondagi Rasmiy Distribyutor",
      titleLine1: "Chegaralardan",
      titleHighlight: "Oshing",
      subtitle: "Harakatlantiruvchi Shinalar, Disklar va Aksessuarlar",
      description: "Avtomobilingizni yuqori darajadagi shinalar, zamonaviy disklar va ishonchli aksessuarlar bilan kuchaytiring. Har qanday yo'lda mukammal boshqaruv va chidamlilik.",
      catalogBtn: "Katalogga O'tish",
      exploreTechBtn: "Texnologiyalar"
    },
    categories: {
      tag: "Bizning To'plam",
      title: "Kategoriyalar",
      subtitle: "Mukammal Uslub va Quvvat — Haydash Talablaringizga Mos",
      searchPlaceholder: "Avtomobil rusumi yoki shina o'lchamini qidiring...",
      tire: {
        badge: "SHINALAR",
        title: "Shina",
        desc: "Yo'lga to'liq ishonch bilan chiqing. Bizning shinalar yuqori tishlashish, qisqa tormoz masofasi va har qanday mavsumda uzoq muddatli xizmatni ta'minlaydi."
      },
      wheel: {
        badge: "DISKLAR",
        title: "Disk",
        desc: "Qayerda bo'lmang, unutilmas taassurot qoldiring. Yengil quyma va soxtalashtirilgan (forged) qotishma disklar aggressive dizayn va muhandislik mustahkamligini o'zida jamlagan."
      },
      accessories: {
        badge: "AKSESSUARLAR",
        title: "Aksessuarlar",
        desc: "Kuchli LED yoritgichlar va TPMS bosim datchiklaridan tortib, baquvvat radiator panjaralari va himoya vositalarigacha barchasi avtomobilingiz uchun."
      }
    },
    supercars: {
      tag: "Flagman O'rnatmalar",
      title: "Superkarlar Galereyasi",
      subtitle: "Dunyodagi eng talabchan giperkarlar uchun zavod original va chempionat darajasidagi sozlamalar.",
      badge: "Trekda Sinovdan O'tgan • Nürburgring Tasdiqlagan",
      ferrari: {
        badge: "FERRARI SF90 STRADALE",
        stat: "1,000 Ot Kuchi • 4WD",
        tireName: "Pilot Sport Cup 2R",
        desc: "Formula 1 va WEC chidamlilik poygalarida to'g'ridan-to'g'ri ishlab chiqilgan ikki komponentli motorsport texnologiyasi.",
        front: "Old: 255/35 ZR20",
        rear: "Orqa: 315/30 ZR20"
      },
      porsche: {
        badge: "PORSCHE 911 GT3",
        title: "Trek Aniqligi",
        desc: "Burilishlarda 1.4G dan yuqori lateral tortishish kuchlari uchun asimmetrik protektor qattiqligi bilan yaratilgan.",
        spec: "Markaziy qulflangan forged disklarga mos"
      },
      lambo: {
        badge: "LAMBORGHINI V12",
        title: "Aventador SVJ Spec",
        desc: "355mm o'ta keng orqa kontakt profili va maksimal barqarorlik"
      },
      mclaren: {
        badge: "MCLAREN 720S",
        title: "Karbon Monokok Aero",
        desc: "Quruq va nam yo'llarda tormoz muvozanatini optimallashtirish"
      },
      amg: {
        badge: "AMG PERFORMANCE",
        title: "AMG GT Biturbo",
        desc: "Tormozlarni aero-sovutuvchi yengil forged disklar"
      }
    },
    stats: {
      headline: "Avtomobilingizga munosib sifat va uslubni taqdim etuvchi shina va g'ildirak yechimlari",
      subtitle: "Yuqori tezlikdagi poyga shinalaridan tortib maxsus off-road g'ildiraklarigacha har qanday yo'lda haydash darajangizni yangi bosqichga olib chiqamiz.",
      number: "50K+",
      numberLabel: "Mahsulotlarimiz Bilan Boyitilgan Avtomobillar",
      dataIntegrations: "Mahsulot Ma'lumotlari Integratsiyasi",
      warehouseDist: "Ombor Distribyutorlari"
    },
    tech: {
      tag: "Muhandislik Intellekti",
      title: "Mukammal Tishlashish, Cheksiz Bardoshlilik",
      safety: {
        title: "Mutlaq Xavfsizlik",
        desc: "Shinalarimiz ilg'or polimer aralashmalari bilan yaratilgan bo'lib, gidroplaningga qarshi maksimal qarshilik va barcha sharoitlarda barqarorlikni ta'minlaydi."
      },
      versatility: {
        title: "Har Qanday Yo'lga Mos",
        desc: "Shahar ko'chalari, tezyurar magistrallar yoki notekis hududlarda adaptiv protektor yo'l bilan uzluksiz aloqani kafolatlaydi."
      },
      durability: {
        title: "Uzoq Yillar Xizmat Qiladi",
        desc: "Mustahkamlangan po'lat tasmalar va yuqori zichlikdagi kremniyli rezina aralashmasi kilometrlar davomida bir tekis eskirishni ta'minlaydi."
      },
      testing: {
        title: "Sinovdan O'tgan va Ishonchli",
        desc: "Har bir model ekstremal haroratlarda, kuchli yomg'irlarda va yuqori burilish yuklarida millionlab kilometr sinovdan o'tkaziladi."
      },
      btn: "O'z Shinangizni Toping"
    },
    wheels: {
      tag: "Forged va Cast Mukammalligi",
      title: "Eng Yuqori Ko'rsatkichli Disklar, E'tiborni Tortuvchi Uslub",
      sizes: "5 Xil O'lcham Mavjud",
      btn: "O'z Disklaringizni Tanlang"
    },
    testimonials: {
      tag: "Mijozlarimiz Fikrlari",
      quote: "\"Shina tanlashdagi professional tavsiyalardan tortib Toshkent bo'ylab tezkor yetkazib berish va o'rnatishgacha — Michelin UZ butun jarayonni oson, shaffof va qulay qildi. Premium xizmat namunasi!\"",
      author: "Azizbek Rahimov",
      role: "Michelin Pilot Sport 4S Egasi • Toshkent"
    },
    faq: {
      tag: "Savollaringiz Bormi?",
      title: "Savollaringizga Mukammal Javoblar.",
      subtitle: "Shina o'lchamlari, mavsumiy aralashmalar, g'ildiraklarni balanslash va butun O'zbekiston bo'ylab rasmiy kafolat bo'yicha javoblar.",
      contactLink: "Muhandislarimizdan To'g'ridan-to'g'ri So'rang →",
      items: [
        { 
          q: "Avtomobilimga qaysi shina o'lchami to'g'ri kelishini qanday bilsam bo'ladi?", 
          a: "Siz hozirgi shinangiz yon tomonidagi yozuvni (masalan, 255/75 R17) yoki avtomobilingiz haydovchi eshigi ochilgandagi stikerni tekshirishingiz mumkin. Shuningdek, mutaxassislarimiz avtomobilingiz rusumiga aniq mos o'lchamni tanlashda 24/7 yordam berishadi." 
        },
        { 
          q: "O'zbekiston bo'ylab o'rnatish va balanslash xizmatlari bormi?", 
          a: "Ha! Biz Toshkent, Samarqand va barcha yirik viloyatlardagi eng zamonaviy Hunter balanslash va montaj uskunalariga ega rasmiy servis markazlari bilan hamkorlik qilamiz." 
        },
        { 
          q: "Michelin shinalariga qanday kafolat beriladi?", 
          a: "Rasmiy do'konimizdan xarid qilingan barcha Michelin va BFGoodrich shinalariga konstruktiv butunlik va 80 000 km gacha protektor eskirishiga rasmiy ishlab chiqaruvchi kafolati beriladi." 
        },
        { 
          q: "Disk va shinani birga yig'ilgan va balanslangan holda buyurtma qilsa bo'ladimi?", 
          a: "Albatta. Disk va shina birga tanlanganda, biz ularni montaj qilib, tebranishsiz balanslab, TPMS datchiklarini dasturlab beramiz — mashinangizga to'g'ridan-to'g'ri o'rnatishga tayyor holda yetkaziladi." 
        },
        { 
          q: "Toshkent va viloyatlarga yetkazib berish qancha vaqt oladi?", 
          a: "Toshkent shahri bo'yicha omborda mavjud mahsulotlar o'sha kunning o'zida yoki 24 soat ichida yetkaziladi. Viloyatlarga esa tezkor kuryer xizmati orqali 1-3 ish kunida yetkazib beriladi." 
        }
      ]
    },
    cta: {
      title: "Savollaringiz Bormi?",
      highlight: "Yordamga Tayyormiz!",
      desc: "Mahsulot tanlash, montaj bo'yicha maslahat yoki korporativ avtoparklar uchun buyurtmalar bo'yicha bog'laning. Malakali avtomobil mutaxassislarimiz yordamga shay.",
      actionBtn: "Telegram Orqali Bog'lanish",
      catalogBtn: "Katalogga O'tish"
    },
    footer: {
      center: "Premium Shinalar va Disklar Markazi",
      rights: "Barcha huquqlar himoyalangan."
    }
  },
  ru: {
    nav: {
      catalog: "Каталог",
      technology: "Технологии",
      wheels: "Диски",
      supercars: "Суперкары",
      faq: "FAQ",
      contact: "Контакты",
      bookFitting: "Запись на монтаж"
    },
    hero: {
      badge: "Официальный Дистрибьютор в Узбекистане",
      titleLine1: "За Пределами",
      titleHighlight: "Возможного",
      subtitle: "Шины, Диски и Аксессуары, Которые Двигают Вас Вперед",
      description: "Оснастите свой автомобиль шинами премиум-класса, стильными коваными дисками и надежными аксессуарами. Непревзойденный контроль и долговечность на любой дороге.",
      catalogBtn: "Перейти в Каталог",
      exploreTechBtn: "О Технологиях"
    },
    categories: {
      tag: "Наша Коллекция",
      title: "Категории",
      subtitle: "Превосходный Стиль и Мощь — Под Ваши Требования к Вождению",
      searchPlaceholder: "Поиск по марке авто или размеру шин...",
      tire: {
        badge: "ШИНЫ",
        title: "Шины",
        desc: "Уверенность на каждом километре. Наши шины обеспечивают превосходное сцепление, короткий тормозной путь и высокую износостойкость в любых погодных условиях."
      },
      wheel: {
        badge: "ДИСКИ",
        title: "Диски",
        desc: "Производите яркое впечатление, где бы вы ни находились. Легкие литые и кованые диски сочетают в себе агрессивный дизайн и высочайшую конструктивную прочность."
      },
      accessories: {
        badge: "АКСЕССУАРЫ",
        title: "Аксессуары",
        desc: "От мощных светодиодных фар и датчиков давления TPMS до усиленных решеток радиатора и защиты для внедорожников — всё для вашего авто."
      }
    },
    supercars: {
      tag: "Флагманские Комплектации",
      title: "Галерея Суперкаров",
      subtitle: "Заводская оригинальная комплектация и трековые решения для самых требовательных гиперкаров мира.",
      badge: "Проверено на Треке • Одобрено Nürburgring",
      ferrari: {
        badge: "FERRARI SF90 STRADALE",
        stat: "1,000 Л.С. • 4WD",
        tireName: "Pilot Sport Cup 2R",
        desc: "Двухсоставной автоспортивный компаунд, разработанный непосредственно в гонках Formula 1 и чемпионате на выносливость WEC.",
        front: "Перед: 255/35 ZR20",
        rear: "Зад: 315/30 ZR20"
      },
      porsche: {
        badge: "PORSCHE 911 GT3",
        title: "Трековая Точность",
        desc: "Созданы с асимметричной жесткостью протектора для боковых перегрузок свыше 1.4G на гоночных дугах.",
        spec: "Совместимы с дисками на центральной гайке"
      },
      lambo: {
        badge: "LAMBORGHINI V12",
        title: "Aventador SVJ Spec",
        desc: "Сверхширокий задний профиль 355 мм для максимальной устойчивости"
      },
      mclaren: {
        badge: "MCLAREN 720S",
        title: "Карбоновый Монокок Аэро",
        desc: "Оптимизация баланса торможения на сухом и мокром асфальте"
      },
      amg: {
        badge: "AMG PERFORMANCE",
        title: "AMG GT Biturbo",
        desc: "Кованые диски с аэродинамическим охлаждением тормозов"
      }
    },
    stats: {
      headline: "Решения для шин, дисков и аксессуаров, обеспечивающие качество и стиль вашему авто",
      subtitle: "От скоростных гоночных шин до эксклюзивных внедорожных дисков — мы выводим ваши впечатления от вождения на принципиально новый уровень.",
      number: "50K+",
      numberLabel: "Автомобилей Оснащено Нашей Продукцией",
      dataIntegrations: "Интеграции Данных Продукции",
      warehouseDist: "Складские Дистрибьюторы"
    },
    tech: {
      tag: "Интеллектуальная Инженерия",
      title: "Исключительное Сцепление, Непревзойденная Долговечность",
      safety: {
        title: "Абсолютная Безопасность",
        desc: "Наши шины разработаны с применением передовых полимеров, обеспечивающих максимальную защиту от аквапланирования и курсовую устойчивость."
      },
      versatility: {
        title: "Универсальность в Любой Поездке",
        desc: "На городских улицах, скоростных трассах или сложных региональных маршрутах адаптивный протектор сохраняет непрерывное сцепление с дорогой."
      },
      durability: {
        title: "Созданы на Долгие Годы",
        desc: "Усиленные стальные корды и высокоплотная резиновая смесь с диоксидом кремния обеспечивают равномерный износ километр за километром."
      },
      testing: {
        title: "Проверено и Доказано",
        desc: "Каждая модель проходит миллионы километров испытаний в экстремальных температурах, проливных дождях и при колоссальных нагрузках крутящего момента."
      },
      btn: "Подобрать Ваши Шины"
    },
    wheels: {
      tag: "Кованое и Литое Совершенство",
      title: "Высокоэффективные Диски, Притягивающие Взгляды",
      sizes: "Доступно в 5 размерах",
      btn: "Выбрать Идеальные Диски"
    },
    testimonials: {
      tag: "Отзывы Наших Клиентов",
      quote: "\"От профессиональных рекомендаций по подбору до быстрой доставки и установки в Ташкенте — Michelin UZ сделал всё максимально просто, прозрачно и комфортно. Настоящий премиум сервис!\"",
      author: "Азизбек Рахимов",
      role: "Владелец Michelin Pilot Sport 4S • Ташкент"
    },
    faq: {
      tag: "Есть Вопросы?",
      title: "Ваши Вопросы, Исчерпывающие Ответы.",
      subtitle: "Ответы на популярные вопросы о подборе типоразмера, сезонных смесях, балансировке и официальной гарантии по всему Узбекистану.",
      contactLink: "Задать Вопрос Нашим Инженерам Напрямую →",
      items: [
        { 
          q: "Как узнать, какой размер шин подходит моему автомобилю?", 
          a: "Вы можете посмотреть маркировку на боковине текущих шин (например, 255/75 R17) или на табличке в дверном проеме водителя. Наши специалисты также круглосуточно готовы проверить точный типоразмер для вашей модели." 
        },
        { 
          q: "Предоставляете ли вы услуги монтажа и балансировки по Узбекистану?", 
          a: "Да! Мы сотрудничаем с сертифицированными автоцентрами в Ташкенте, Самарканде и областных центрах, оснащенными высокоточными стендами Hunter." 
        },
        { 
          q: "Какая гарантия действует на шины Michelin?", 
          a: "На все шины Michelin и BFGoodrich, приобретенные в нашем официальном магазине, действует заводская гарантия на целостность конструкции и износ протектора до 80 000 км пробега." 
        },
        { 
          q: "Можно ли заказать комплект колес в сборе с балансировкой?", 
          a: "Безусловно. При покупке дисков и шин мы выполняем сборку, прецизионную балансировку и установку запрограммированных датчиков TPMS — колеса приедут готовыми к установке." 
        },
        { 
          q: "Сколько времени занимает доставка по Ташкенту и регионам?", 
          a: "По Ташкенту товары в наличии доставляются в день заказа или в течение 24 часов. В регионы Узбекистана экспресс-доставка занимает от 1 до 3 рабочих дней." 
        }
      ]
    },
    cta: {
      title: "Остались Вопросы?",
      highlight: "Мы Готовы Помочь!",
      desc: "Свяжитесь с нами для индивидуального подбора продукции, консультаций по установке или оптовых заказов. Наша команда экспертов всегда к вашим услугам.",
      actionBtn: "Связаться в Telegram",
      catalogBtn: "Перейти в Каталог"
    },
    footer: {
      center: "Центр Премиальных Шин и Дисков",
      rights: "Все права защищены."
    }
  }
};
