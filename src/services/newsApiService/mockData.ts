import {Response, Error} from './newsApiServiceTypes';

export const mockError: Error = {
  status: 'error',
  code: 'apiKeyInvalid',
  message:
    'Your API key is invalid or incorrect. Check your key, or go to https://newsapi.org to create a free API key.',
};

export const mockResponse: Response = {
  status: 'ok',
  totalResults: 2271,
  articles: [
    {
      source: {
        id: 'the-next-web',
        name: 'The Next Web',
      },
      author: 'The Cosmic Companion',
      title:
        'The Lucy spacecraft — designed to explore the Trojan asteroids of Jupiter — prepares for take-off',
      description:
        'On 30 July, an Air Force C-17 cargo plane touched down on a runway at NASA’s Kennedy Space Center in Florida. A massive shipping container was rolled off the craft. The precious cargo inside, revealed in an Astrotech cleanroom, was examined, and cleared by in…',
      url: 'https://thenextweb.com/news/lucy-spacecraft-explore-trojan-asteroids-jupiter-takeoff-syndication',
      urlToImage:
        'https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F08%2Fhedfinal_lucy_high-end-render_pira.jpg&signature=b87791aea06e02201d07329208d89909',
      publishedAt: '2021-08-14T08:00:20Z',
      content:
        'On 30 July, an Air Force C-17 cargo plane touched down on a runway at NASAs Kennedy Space Center in Florida. A massive shipping container was rolled off the craft. The precious cargo inside, revealed… [+3095 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Taylor Hatmaker,Hiroshi Iwatani',
      title: '米国の国会議員が掌紋データの今後の扱い方などでアマゾンに質問状',
      description:
        '一部の上院議員たちが金曜日（米国時間8/13）に、Amazonの新CEO、Andy Jassy氏に書簡を送って、同社の小売店で使用する顧客の掌紋の、スキャンのされ方と保存のされ方に関する詳しい情報を求めた。\r\n\r\n同社は<a target="_blank" href="https://one.amazon.com/" rel="noopener noreferrer">Amazon One</a>と呼ばれるプログラムで掌紋スキャナーを展開し、同社の物理店ではカードを使わずに無接触決済を利用するよう顧客に勧めている…',
      url: 'https://jp.techcrunch.com/2021/08/14/2021-08-13-amazon-biometric-data-senate-letter/',
      urlToImage:
        'https://jp.techcrunch.com/wp-content/uploads/2021/08/plm.jpg?w=730',
      publishedAt: '2021-08-14T06:00:37Z',
      content:
        '8/13AmazonCEOAndy Jassy\r\nAmazon OneAmazonAmazon OneAmazon GoAmazon BooksAmazon 4-starAmazon8Whole Foods\r\n: \r\nAmy Klobuchar()Bill Cassidy()Jon Ossoff()JassyAmazon\r\n: Amazon OneAmazonAmazonAmazon\r\nAmaz… [+204 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Miranda Halpern',
      title:
        'Growth roundup: Storytelling for startups, early-stage influencers, retail media spend',
      description:
        '“I like to think of successful brand-building as creating a company that customers would be upset to separate from their identity,” growth marketing expert...',
      url: 'https://techcrunch.com/2021/08/13/growth-roundup-storytelling-for-startups-early-stage-influencers-retail-media-spend/',
      urlToImage:
        'https://s.yimg.com/ny/api/res/1.2/CSDnwfEBYDl3DzJUmPWlow--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xMzMz/https://s.yimg.com/uu/api/res/1.2/GFMQHN9Ht.rELvS00iqHZw--~B/aD0zODQwO3c9NTc2MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/techcrunch_350/5e774c257a6bd17462351a6111e1df1d',
      publishedAt: '2021-08-13T23:08:22Z',
      content:
        'I like to think of successful brand-building as creating a company that customers would be upset to separate from their identity, growth marketing expert Julian Shapiro told us earlier this week. For… [+5066 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Miranda Halpern',
      title:
        'Growth roundup: Storytelling for startups, early-stage influencers, retail media spend',
      description:
        '“I like to think of successful brand-building as creating a company that customers would be upset to separate from their identity,” growth marketing expert Julian Shapiro told us earlier this week. “For example, they’d cease to be the man with Slack stickers …',
      url: 'http://techcrunch.com/2021/08/13/growth-roundup-storytelling-for-startups-early-stage-influencers-retail-media-spend/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2021/08/mike-erskine-S_VbdMTsdiA-unsplash.jpg?w=600',
      publishedAt: '2021-08-13T23:08:22Z',
      content:
        'I like to think of successful brand-building as creating a company that customers would be upset to separate from their identity, growth marketing expert Julian Shapiro told us earlier this week. For… [+5066 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Walter Thompson and Annie Siebert',
      title:
        "Extra Crunch roundup: 3 lies VCs tell, betting big on Kubernetes, NYC's enterprise boom",
      description:
        'Although older adults are one of the fastest-growing demographics, they\'re quite underserved when it comes to consumer tech.  "If you can provide a valuable,...',
      url: 'https://techcrunch.com/2021/08/13/extra-crunch-roundup-3-lies-vcs-tell-betting-big-on-kubernetes-nycs-enterprise-boom/',
      urlToImage:
        'https://s.yimg.com/uu/api/res/1.2/MKxGUYk8K_Amf8fyLDbpyA--~B/aD02ODM7dz0xMDI0O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/0767a0ef1b567a69674bbcf6bd3790e0',
      publishedAt: '2021-08-13T22:57:22Z',
      content:
        "Although older adults are one of the fastest-growing demographics, they're quite underserved when it comes to consumer tech.\r\nThe global population of people older than 65 will reach 1.5 billion by 2… [+8118 chars]",
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Walter Thompson',
      title:
        'Extra Crunch roundup: 3 lies VCs tell, betting big on Kubernetes, NYC’s enterprise boom',
      description:
        'Thanks very much for reading Extra Crunch this week! Have a great weekend.',
      url: 'http://techcrunch.com/2021/08/13/extra-crunch-roundup-3-lies-vcs-tell-betting-big-on-kubernetes-nycs-enterprise-boom/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2021/08/GettyImages-1233568776.jpg?w=600',
      publishedAt: '2021-08-13T22:57:22Z',
      content:
        'Although older adults are one of the fastest-growing demographics, they’re quite underserved when it comes to consumer tech.\r\nThe global population of people older than 65 will reach 1.5 billion by 2… [+6949 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Alex Wilhelm',
      title:
        'Daily Crunch: 3 US Senators ask Amazon how biometric payment system will handle customers’ palm prints - TechCrunch',
      description:
        'Hello friends and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.',
      url: 'http://techcrunch.com/2021/08/13/daily-crunch-46/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2019/05/GettyImages-1027656194.jpg?w=606',
      publishedAt: '2021-08-13T22:14:02Z',
      content:
        'To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT, subscribe here.\r\nHello and welcome to Daily Crunch for August 13, 2021. We made it … [+5881 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Alex Wilhelm',
      title:
        "Daily Crunch: 3 US Senators ask Amazon how biometric payment system will handle customers' palm prints",
      description:
        'Despite it being the end of the week, we still have lots to talk about.  Reddit takes on TikTok: Recently TikTok announced that it was going to shake up its ...',
      url: 'https://techcrunch.com/2021/08/13/daily-crunch-46/',
      urlToImage:
        'https://s.yimg.com/ny/api/res/1.2/9NByUAD6ZQmxkLadRX_qwg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xMzIx/https://s.yimg.com/uu/api/res/1.2/N9vxhUiOldXI9o2z.SHIkQ--~B/aD0zMjE5O3c9NDg3MzthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/techcrunch_350/734fe028b08a216fc0352dd35eb54935',
      publishedAt: '2021-08-13T22:10:15Z',
      content:
        'To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT, subscribe here.\r\nHello and welcome to Daily Crunch for August 13, 2021. We made it … [+6038 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Miranda Halpern',
      title:
        'Building a growth community in India with Ayush Srivastava of Growth Folks',
      description:
        'To hear more about the strategies that are boosting Indian startups, we interviewed Ayush Srivastava, co-founder of growth marketing group Growth Folks (and a growth marketer at Zynga by day).',
      url: 'http://techcrunch.com/2021/08/13/building-a-growth-community-in-india-with-ayush-srivastava-of-growth-folks/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2021/08/Ayush-HQ.jpg?w=559',
      publishedAt: '2021-08-13T21:36:48Z',
      content:
        'Indian startups of all sizes are raising record amounts of investment funding this year and getting public exits, as we’ve been coveringin recentmonths. To hear more about the growth behind the numbe… [+6657 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Miranda Halpern',
      title:
        'Building a growth community in India with Ayush Srivastava of Growth Folks',
      description:
        "Indian startups of all sizes are raising record amounts of investment funding this year and getting public exits, as we've been covering in recent months...",
      url: 'https://techcrunch.com/2021/08/13/building-a-growth-community-in-india-with-ayush-srivastava-of-growth-folks/',
      urlToImage:
        'https://s.yimg.com/uu/api/res/1.2/pH5anDSfd85NZImeVzLgfw--~B/aD0xNDAwO3c9MTk1ODthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/techcrunch_350/71484fa1048b5fe901b497203959d724',
      publishedAt: '2021-08-13T21:36:48Z',
      content:
        "Indian startups of all sizes are raising record amounts of investment funding this year and getting public exits, as we've been coveringin recentmonths. To hear more about the growth behind the numbe… [+6666 chars]",
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Brian Heater',
      title:
        'Google infringed on five Sonos patents, according to preliminary ruling',
      description:
        'Way back in January 2020, Sonos sued Google over patent infringement.  A preliminary ruling penned by ITC chief administrative law judge Charles Bullock...',
      url: 'https://techcrunch.com/2021/08/13/google-infringed-on-five-sonos-patents-according-to-preliminary-ruling/',
      urlToImage:
        'https://s.yimg.com/uu/api/res/1.2/wiybf6n0peA0MsZJqeCDvg--~B/aD01NjI7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/32ddefe6114d60d67736fb98c98f75f6',
      publishedAt: '2021-08-13T21:24:52Z',
      content:
        'Way back in January 2020, Sonos sued Google over patent infringement. Today, the streaming speaker company scored an early victory with the U.S. International Trade Commission. A preliminary ruling p… [+2180 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Brian Heater',
      title:
        'Google infringed on five Sonos patents, according to preliminary ruling',
      description:
        'Way back in January 2020, Sonos sued Google over patent infringement. Today, the streaming speaker company scored an early victory with the U.S. International Trade Commission. A preliminary ruling penned by ITC chief administrative law judge Charles Bullock …',
      url: 'http://techcrunch.com/2021/08/13/google-infringed-on-five-sonos-patents-according-to-preliminary-ruling/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2020/12/google-nest-audio.png?w=712',
      publishedAt: '2021-08-13T21:24:52Z',
      content:
        'Way back in January 2020, Sonos sued Google over patent infringement. Today, the streaming speaker company scored an early victory with the U.S. International Trade Commission. A preliminary ruling p… [+2180 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Amanda Silberling',
      title:
        'Twitter’s web redesign isn’t as accessible as it should be, experts say',
      description:
        'After teasing its new font in January, Twitter made some major changes to its website and app design this week. But while Twitter framed these updates as making the platform “more accessible,” some accessibility experts say that these changes missed the mark.…',
      url: 'http://techcrunch.com/2021/08/13/twitters-web-redesign-isnt-as-accessible-as-it-should-be-experts-say/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2021/08/twitter-update-august-2021.jpg?w=711',
      publishedAt: '2021-08-13T21:09:20Z',
      content:
        'After teasing its new font in January, Twitter made some major changes to its website and app design this week. But while Twitter framed these updates as making the platform more accessible, some acc… [+6885 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Amanda Silberling',
      title:
        'Twitter’s web redesign isn’t as accessible as it should be, experts say',
      description:
        'After teasing its new font in January, Twitter made some major changes to its website and app design this week. But while Twitter framed these updates as making the platform “more accessible,” some accessibility experts say that these changes missed the mark.…',
      url: 'http://techcrunch.com/2021/08/13/twitters-web-redesign-isnt-as-accessible-as-it-should-be-experts-say/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2021/08/twitter-update-august-2021.jpg?w=711',
      publishedAt: '2021-08-13T21:09:20Z',
      content:
        'After teasing its new font in January, Twitter made some major changes to its website and app design this week. But while Twitter framed these updates as making the platform more accessible, some acc… [+6885 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Connie Loizos',
      title:
        'Carta says it just used its own product to establish a new -- and far higher -- valuation for itself',
      description:
        "With so much money flooding into privately held companies, giant leaps in valuation are no longer all that notable.  What's different about this particular...",
      url: 'https://techcrunch.com/2021/08/13/carta-says-it-just-used-its-own-product-to-establish-a-new-and-far-higher-valuation-for-itself/',
      urlToImage:
        'https://s.yimg.com/ny/api/res/1.2/0iOd9J__pqzNndkxzLHKGw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xMzMz/https://s.yimg.com/uu/api/res/1.2/yuL.3TlTvhD8huZ.I6E8mg--~B/aD0xOTIwO3c9Mjg4MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/techcrunch_350/aee003d905aabbdc467aab3c1cc5ac46',
      publishedAt: '2021-08-13T20:36:21Z',
      content:
        "Carta, the nine-year-old, San Francisco-based cap table management and valuation software company, just raised $500 million in its eighth round of funding, at a $7.4 billion valuation. That's more th… [+4661 chars]",
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Connie Loizos',
      title:
        'Carta says it just used its own product to establish a new — and far higher — valuation for itself',
      description:
        'Carta, the nine-year-old, San Francisco-based cap table management and valuation software company, just raised $500 million in its eighth round of funding, at a $7.4 billion valuation. That’s more than double where the company was valued eight months ago when…',
      url: 'http://techcrunch.com/2021/08/13/carta-says-it-just-used-its-own-product-to-establish-a-new-and-far-higher-valuation-for-itself/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2018/12/Carta-Henry-Ward.jpg?w=600',
      publishedAt: '2021-08-13T20:36:21Z',
      content:
        'Carta, the nine-year-old, San Francisco-based cap table management and valuation software company, just raised $500 million in its eighth round of funding, at a $7.4 billion valuation. That’s more th… [+4648 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Igor Bonifacic',
      title:
        "Lamborghini's Countach LPI 800-4 is an 802-horsepower hybrid supercar",
      description:
        'After all the leaks and teases, Lamborghini has finally announced its new hybrid-engine Countach.  Thankfully, almost everything you need to know about the...',
      url: 'https://techcrunch.com/2021/08/13/lamborghinis-countach-lpi-800-4-is-an-802-horsepower-hybrid-supercar/',
      urlToImage:
        'https://s.yimg.com/uu/api/res/1.2/x3pbgrOhFzFGyiMl5pnALg--~B/aD04Mzg7dz0xMzQ0O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/f43bd893dae1fe20ed8d8171faa7977e',
      publishedAt: '2021-08-13T19:55:27Z',
      content:
        'After all the leaks and teases, Lamborghini has finally announced its new hybrid-engine Countach.\r\nThankfully, almost everything you need to know about the car is in its model designation: LPI 800-4.… [+1869 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Henry Pickavet',
      title:
        'Lamborghini’s Countach LPI 800-4 is an 802-horsepower hybrid supercar',
      description:
        'After all the leaks and teases, Lamborghini has finally announced its new hybrid-engine Countach. Thankfully, almost everything you need to know about the car is in its model designation: LPI 800-4.',
      url: 'http://techcrunch.com/2021/08/13/lamborghinis-countach-lpi-800-4-is-an-802-horsepower-hybrid-supercar/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2021/08/Screen-Shot-2021-08-13-at-12.51.10-PM.png?w=642',
      publishedAt: '2021-08-13T19:55:27Z',
      content:
        'More posts by this contributor\r\nAfter all the leaks and teases, Lamborghini has finally announced its new hybrid-engine Countach.\r\nThankfully, almost everything you need to know about the car is in i… [+1903 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Annie Siebert',
      title: 'Growth tactics that will jump-start your customer base',
      description:
        'Brand-building is no longer a one-hit game, but an exercise in repetition: It may take four or five times for a user to see your startup’s name or logo to recognize, remember or Google it.',
      url: 'http://techcrunch.com/2021/08/13/growth-tactics-that-will-jump-start-your-customer-base/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2021/08/GettyImages-1283399889.jpg?w=521',
      publishedAt: '2021-08-13T19:12:26Z',
      content:
        'Five years ago, the playbook for launching a new company involved a tried-and-true list of to-dos. Once you built an awesome product with a catchy name, youd try to get a feature article on TechCrunc… [+3173 chars]',
    },
    {
      source: {
        id: 'techcrunch',
        name: 'TechCrunch',
      },
      author: 'Jordan Crook',
      title:
        'Sequoia’s Stephanie Zhan and Rec Room’s Nick Fajt are joining us on Extra Crunch Live',
      description:
        'Sequoia is one of the most prestigious and successful venture firms to ever exist. The firm’s portfolio includes Airbnb, 23andMe, Docker, Dropbox, Figma and GitHub — and that barely covers the first half of the alphabet. (The Sequoia website lists portfolio c…',
      url: 'http://techcrunch.com/2021/08/13/sequoias-stephanie-zhan-and-rec-rooms-nick-fajt-are-joining-us-on-extra-crunch-live/',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2021/08/ECL-2021-august-18.jpg?w=711',
      publishedAt: '2021-08-13T19:03:01Z',
      content:
        'Sequoia is one of the most prestigious and successful venture firms to ever exist. The firm’s portfolio includes Airbnb, 23andMe, Docker, Dropbox, Figma and GitHub — and that barely covers the first … [+1977 chars]',
    },
  ],
};
