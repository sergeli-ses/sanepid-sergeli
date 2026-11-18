// =========================================================================
// ФАЙЛ УПРАВЛЕНИЯ КОНТЕНТОМ САЙТА (НОВОСТИ, ФОТО И ВИДЕО)
// =========================================================================
// Чтобы добавить новость, фото или видео — редактируйте ТОЛЬКО этот файл!
// =========================================================================

// 1. НОВОСТИ И ОБЪЯВЛЕНИЯ
// Поля tag_uz / tag_ru — это категория новости (отображается цветной плашкой)
const newsData = [
    {
        image: "images/news1.jpg",
        tag_uz: "Foydali maslahat",
        tag_ru: "Полезный совет",
        date: "17.11.2026",
        title_uz: "GRIPPga chalinmay desangiz!",
        title_ru: "Если не хотите заболеть гриппом!",
        excerpt_uz: "Gripp — havo-tomchi yo‘li orqali yuqadigan o‘tkir yuqumli kasallik bo‘lib, og‘ir asoratlarga olib kelishi mumkin. Kasallikning oldini olish bo‘yicha asosiy tavsiyalar.",
        excerpt_ru: "Грипп — острое инфекционное заболевание, передающееся воздушно-капельным путём и способное вызвать тяжёлые осложнения. Основные меры профилактики.",
        body_uz: "Gripp — virus qo‘zg‘atuvchi, havo-tomchi yo‘li orqali organizmga tushib, kuchli intoksikatsiya va O‘RI belgilari bilan namoyon bo‘luvchi yuqumli kasallikdir. Kasallik o‘zidan keyin turli asoratlarga, hatto nogironlikka olib kelishi mumkin. Shu boisdan ham grippning oldini olish juda muhim.\n\n❗️ Grippga chalinmaslik uchun quyidagi profilaktika chora-tadbirlariga amal qiling:\n\n💉 Grippga qarshi emlaning. Zero vaksinatsiya grippning yengil kechuvi hamda asoratlari yuzaga kelmasligini ta’minlaydi;\n\n😷 Jamoaviy, odamlar gavjum joylarda shaxsiy himoya niqobini taqing;\n\n🙌 Shaxsiy gigiyenaga rioya qiling. Qo‘llaringizni tez-tez sovun bilan yuving. Agar buning imkoni bo‘lmasa, antiseptiklardan (sanitariya vositalaridan) foydalaning;\n\n🏠 Xonalarni tez-tez shamollating. Yopiq joylarda virus tez ko‘payadi;\n\n✅ Kasallanganlar bilan muloqotda bo‘lishdan saqlaning;\n\n✅ Immunitet muvozanatini yuqori saqlang. Vitaminlarga boy oziq-ovqat mahsulotlarini iste’mol qiling.\n\nSanepidqo‘mita Toshkent shahar boshqarmasi Sergeli tuman bo‘limi jamoatchilik bilan ishlash bo‘linmasi",
        body_ru: "Грипп — это вирусное инфекционное заболевание, передающееся воздушно-капельным путём и проявляющееся сильной интоксикацией и симптомами ОРИ. Болезнь может привести к различным тяжёлым осложнениям, вплоть до инвалидности. Поэтому профилактика гриппа имеет решающее значение.\n\n❗️ Чтобы не заболеть гриппом, соблюдайте следующие профилактические меры:\n\n💉 Сделайте прививку от гриппа. Вакцинация обеспечивает лёгкое течение заболевания и предотвращает развитие осложнений;\n\n😷 В общественных местах и местах массового скопления людей носите индивидуальную защитную маску;\n\n🙌 Соблюдайте личную гигиену. Чаще мойте руки с мылом, а при отсутствии такой возможности используйте антисептические средства;\n\n🏠 Регулярно проветривайте помещения — в закрытых пространствах вирус размножается быстрее;\n\n✅ Избегайте контакта с заболевшими людьми;\n\n✅ Поддерживайте высокий уровень иммунитета. Употребляйте продукты, богатые витаминами.\n\nОтделение по связям с общественностью Сергелийского районного отдела Ташкентского городского управления Санэпидкомитета"
    },
    {
        image: "images/news2.jpg",
        tag_uz: "Ogohlantirish",
        tag_ru: "Предупреждение",
        date: "18.11.2026",
        title_uz: "⚠️ BOTULIZM — KO‘ZGA KO‘RINMAYDIGAN, AMMO HAYOT UCHUN O‘TA XAVFLI XAVF!",
        title_ru: "⚠️ БОТУЛИЗМ — НЕВИДИМАЯ, НО СМЕРТЕЛЬНО ОПАСНАЯ УГРОЗА!",
        excerpt_uz: "Uy sharoitida tayyorlangan konservalar har doim ham xavfsizmi? Noto‘g‘ri tayyorlangan va saqlangan mahsulotlar og‘ir zaharlanish — botulizmga olib kelishi mumkin.",
        excerpt_ru: "Всегда ли безопасны консервы домашнего приготовления? Неправильно приготовленные и хранящиеся продукты могут вызвать тяжёлое отравление — ботулизм.",
        body_uz: "⚠️ BOTULIZM — KO‘ZGA KO‘RINMAYDIGAN, AMMO HAYOT UCHUN O‘TA XAVFLI XAVF!\n\n🫙 Uy sharoitida tayyorlangan konservalar har doim ham xavfsizmi? Afsuski, noto‘g‘ri tayyorlangan va saqlangan mahsulotlar hayot uchun jiddiy xavf tug‘dirishi mumkin.\n\n🗣 Botulizm — asab tizimini zararlovchi kuchli toksin ta’sirida yuzaga keladigan og‘ir oziq-ovqat zaharlanishidir. Kasallik o‘z vaqtida aniqlanmasa, mushaklar falajlanishi va nafas olish faoliyatining buzilishiga olib kelishi mumkin.\n\n🚑 Muhim! Botulizmga xos alomatlar kuzatilsa, zudlik bilan tibbiy yordamga murojaat qiling. Uy sharoitida davolanishga urinmang!\n\n🔴 Unutmang: botulizmning oldini olish — avvalo, oziq-ovqat xavfsizligiga mas’uliyat bilan yondashishdan boshlanadi!\n\nSanepidqo‘mita Toshkent shahar boshqarmasi\nAxborot xizmati",
        body_ru: "⚠️ БОТУЛИЗМ — НЕВИДИМАЯ, НО СМЕРТЕЛЬНО ОПАСНАЯ УГРОЗА!\n\n🫙 Всегда ли безопасны консервы домашнего приготовления? К сожалению, неправильно приготовленные и хранящиеся продукты могут представлять серьёзную угрозу для жизни.\n\n🗣 Ботулизм — это тяжёлое пищевое отравление, вызванное сильным токсином, поражающим нервную систему. Если заболевание не выявить вовремя, оно может привести к параличу мышц и нарушению дыхания.\n\n🚑 Важно! При появлении симптомов, характерных для ботулизма, немедленно обратитесь за медицинской помощью. Не пытайтесь лечиться в домашних условиях!\n\n🔴 Помните: профилактика ботулизма начинается, прежде всего, с ответственного отношения к безопасности пищевых продуктов!\n\nИнформационная служба\nТашкентского городского управления Санэпидкомитета"
    },
    {
        image: "images/news3.jpg",
        tag_uz: "Bilasizmi?",
        tag_ru: "Знаете ли вы?",
        date: "18.11.2026",
        title_uz: "Go‘zallik salonlari va sartaroshxonalarga qo‘yiladigan sanitar-gigiyenik talablar",
        title_ru: "Санитарно-гигиенические требования к салонам красоты и парикмахерским",
        excerpt_uz: "Go‘zallik salonlari va sartaroshxonalarda mijozlarga ko‘rsatiladigan estetik maishiy xizmatlar inson salomatligiga ziyon yetkazmay, yuqumli kasalliklar tarqalishining oldini olgan holda yuritilishi lozim.",
        excerpt_ru: "Эстетические бытовые услуги в салонах красоты и парикмахерских должны оказываться без вреда для здоровья человека и с соблюдением мер профилактики инфекционных заболеваний.",
        body_uz: "#bilasizmi\n\nGo‘zallik salonlari va sartaroshxonalarga qo‘yiladigan sanitar-gigiyenik talablar\n\nGo‘zallik salonlari va sartaroshxonalarda mijozlarga ko‘rsatiladigan estetik maishiy xizmatlar inson salomatligiga ziyon yetkazmay, yuqumli kasalliklarni tarqalishini oldini olgan holda yuritilishi lozim. Bu borada sartaroshxona va salonlar faoliyati sanitariya-gigiyena talablari asosida tartiblashtiriladi.\n\n♦️ Sanepidqo‘mita Toshkent shahar boshqarmasi Sergeli tuman bo‘limi tomonidan tayyorlangan infografika orqali go‘zallik salonlari va sartaroshxonalarga qo‘yiladigan sanitar-gigiyenik talablar haqida ma’lumot berildi.\n\nSanepidqo‘mita Toshkent shahar boshqarmasi Sergeli tuman bo‘limi",
        body_ru: "#знаетеливы\n\nСанитарно-гигиенические требования к салонам красоты и парикмахерским\n\nЭстетические бытовые услуги, оказываемые клиентам в салонах красоты и парикмахерских, должны осуществляться без вреда для здоровья человека и с предотвращением распространения инфекционных заболеваний. В связи с этим деятельность парикмахерских и салонов регламентируется на основе санитарно-гигиенических норм и правил.\n\n♦️ В инфографике, подготовленной Сергелийским районным отделом Ташкентского городского управления Санэпидкомитета, представлена подробная информация о санитарно-гигиенических требованиях, предъявляемых к салонам красоты и парикмахерским.\n\nСергелийский районный отдел Ташкентского городского управления Санэпидкомитета"
    },
    {
        image: "images/news4.jpg",
        tag_uz: "Bilasizmi?",
        tag_ru: "Знаете ли вы?",
        date: "18.11.2026",
        title_uz: "Qizamiqning jiddiy asoratlari",
        title_ru: "Серьёзные осложнения кори",
        excerpt_uz: "Qizamiq — teri va shilliq qavatlarga o‘ziga xos toshmalar toshishi, kuchli intoksikatsiya belgilari bilan kechuvchi o‘ta yuquvchan virusli kasallikdir.",
        excerpt_ru: "Корь — высококонтагиозное вирусное заболевание, протекающее с характерными высыпаниями на коже и слизистых оболочках и выраженной интоксикацией.",
        body_uz: "#bilasizmi\n\nQizamiqning jiddiy asoratlari\n\nQizamiq — teri va shilliq qavatlarga o‘ziga xos toshmalar toshishi, kuchli intoksikatsiya belgilari bilan kechuvchi o‘ta yuquvchan virusli kasallikdir. Qizamiq bilan kasallanishning ayanchli jihati og‘ir asoratlarga olib keladi.\n\n♦️ Sanepidqo‘mita Toshkent shahar boshqarmasi Sergeli tuman bo‘limi tomonidan tayyorlangan infografika orqali qizamiq kasalligining jiddiy va og‘ir asoratlari haqida ma’lumot berildi.\n\nSanepidqo‘mita Toshkent shahar boshqarmasi Sergeli tuman bo‘limi",
        body_ru: "#знаетеливы\n\nСерьёзные осложнения кори\n\nКорь — это высококонтагиозное вирусное заболевание, протекающее с характерными высыпаниями на коже и слизистых оболочках, а также признаками сильной интоксикации. Опасность заболевания заключается в том, что оно нередко приводит к тяжёлым осложнениям.\n\n♦️ В инфографике, подготовленной Сергелийским районным отделом Ташкентского городского управления Санэпидкомитета, представлена подробная информация о серьёзных и тяжёлых осложнениях кори.\n\nСергелийский районный отдел Ташкентского городского управления Санэпидкомитета"
    }
];

// 2. ФОТОГАЛЕРЕЯ
// Поля cat_uz / cat_ru — категория фото (по ним автоматически строятся кнопки-фильтры!)
const photoGallery = [
    {
        src: "images/laboratory.jpg",
        cat_uz: "Laboratoriya",
        cat_ru: "Лаборатория",
        caption_uz: "Bakteriologik va sanitariya-gigiyena laboratoriyasi ish jarayoni",
        caption_ru: "Рабочий процесс бактериологической и санитарно-гигиенической лаборатории"
    },
    {
        src: "images/laboratory1.jpg",
        cat_uz: "Laboratoriya",
        cat_ru: "Лаборатория",
        caption_uz: "Laboratoriya tahlillari va zamonaviy uskunalar",
        caption_ru: "Лабораторные исследования и современное оборудование"
    },
    {
        src: "images/laboratory2.jpg",
        cat_uz: "Laboratoriya",
        cat_ru: "Лаборатория",
        caption_uz: "Suv va oziq-ovqat mahsulotlari xavfsizligi nazorati",
        caption_ru: "Контроль безопасности воды и пищевых продуктов"
    },
    {
        src: "images/news2.jpg",
        cat_uz: "Dezinfeksiya",
        cat_ru: "Дезинфекция",
        caption_uz: "Ta’lim muassasalarida profilaktik dezinfeksiya tadbirlari",
        caption_ru: "Профилактические дезинфекционные мероприятия в образовательных учреждениях"
    },
    {
        src: "images/news3.jpg",
        cat_uz: "Profilaktika",
        cat_ru: "Профилактика",
        caption_uz: "Aholi o‘rtasida sog‘lom turmush tarzi va gigiyena targ‘iboti",
        caption_ru: "Санитарно-просветительская работа и пропаганда гигиены среди населения"
    }
];

// 3. ВИДЕОГАЛЕРЕЯ
const videoGallery = [
    {
        lang: "uz", // Показывать ТОЛЬКО при выборе узбекского языка (O‘Z)
        type: "youtube",
        src: "https://www.youtube.com/embed/bv7n4CDhzzs",
        cat_uz: "Profilaktika",
        cat_ru: "Профилактика",
        title_uz: "🔴❗️❗️❗️❗️ 🧠 MENINGIT — XAVFLI KASALLIK! UNING ALOMATLARINI BILASIZMI?",
        title_ru: "",
        desc_uz: "⚠️ Meningit — bosh va orqa miya pardalarining yallig‘lanishi bilan kechadigan jiddiy kasallik...",
        desc_ru: ""
    },
    {
        lang: "ru", // Показывать ТОЛЬКО при выборе русского языка (RU)
        type: "youtube",
        src: "https://www.youtube.com/embed/E3b355mpVRk",
        cat_uz: "Profilaktika",
        cat_ru: "Профилактика",
        title_uz: "",
        title_ru: "🔴❗️❗️❗️❗️ 🧠 МЕНИНГИТ — ОПАСНОЕ ЗАБОЛЕВАНИЕ! ЗНАЕТЕ ЛИ ВЫ ЕГО СИМПТОМЫ?",
        desc_uz: "",
        desc_ru: "⚠️ Менингит — это серьёзное заболевание, сопровождающееся воспалением оболочек головного и спинного мозга. В некоторых случаях оно может развиваться стремительно и представлять угрозу для жизни и здоровья человека.\n\n🛡 Чтобы предотвратить менингит, важно следовать рекомендациям врача по вакцинации, регулярно мыть руки, проветривать помещения и своевременно обращаться за медицинской помощью при появлении симптомов заболевания.\n\n🎙 В этом видео врач-эпидемиолог Шохсанам Абдуллаева, представляющая Ташкентское городское управление Комитета санитарно-эпидемиологического благополучия и общественного здоровья, рассказывает об опасности менингита, его клинических проявлениях и мерах профилактики.\n\n🚨 Важно: если появляются характерные для менингита симптомы, особенно высокая температура и сильная головная боль в сочетании с ригидностью затылочных мышц или изменением сознания, необходимо немедленно обратиться за медицинской помощью. Не ждите появления всех симптомов одновременно.\n\n👁 Берегите своё здоровье! Поделитесь этим видео с близкими — важная информация может помочь сохранить жизнь.\n\nТашкентское городское управление Комитета санитарно-эпидемиологического благополучия и общественного здоровья\nИнформационная служба"
    },
    {
        lang: "all",
        type: "youtube",
        src: "https://www.youtube.com/embed/L9TI7wmTMnM",
        cat_uz: "Bilasizmi?",
        cat_ru: "Знаете ли вы?",
        title_uz: "Emlash — yuqumli kasalliklarning oldini olishda samarali usul",
        title_ru: "Вакцинация — эффективный способ профилактики инфекционных заболеваний",
        desc_uz: "#bilasizmi #foydali_maslahat\n\nEmlash — ma’lum yuqumli kasalliklardan himoya qiluvchi va yuqumli kasalliklarga qarshi immunitetni kuchaytiruvchi samarali usuldir. Emlash — bu mas’uliyat. Emlash orqali biz o‘zimizni, yaqinlarimizni, jamiyatimizni yuqumli kasalliklardan himoya qilamiz.\n\n🔹 Emlash nima uchun kerak?\n🔹 Emlash xavfsizmi?\n🔹 Emlash haqida noto‘g‘ri fikrlar\n\n♦️ Ushbu savollarga Sanepidqo‘mita Toshkent shahar boshqarmasi Sergeli tuman bo‘limi tomonidan tayyorlangan videorolik orqali ma’lumotga ega bo‘lasiz.\n\nSanepidqo‘mita Toshkent shahar boshqarmasi Sergeli tuman bo‘limi jamoatchilik bilan ishlash bo‘linmasi",
        desc_ru: "#знаетеливы #полезный_совет\n\nВакцинация — это эффективный способ защиты от определённых инфекционных заболеваний и укрепления иммунитета. Вакцинация — это ответственность. Делая прививки, мы защищаем себя, своих близких и общество от опасных инфекций.\n\n🔹 Зачем нужна вакцинация?\n🔹 Безопасна ли вакцинация?\n🔹 Распространённые заблуждения о прививках\n\n♦️ Ответы на эти вопросы вы получите в видеоролике, подготовленном Сергелийским районным отделом Ташкентского городского управления Санэпидкомитета.\n\nОтдел по связям с общественностью Сергелийского районного отдела Ташкентского городского управления Санэпидкомитета"
    },
];