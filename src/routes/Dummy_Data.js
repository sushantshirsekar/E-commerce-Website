const DUMMY_DATA = [
    {
      id: 1,
      title: "Burgman Street",
      price: 110000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/suzuki/burgman-street/source/burgman-street61726bef4097e.jpg",
      quantity: 1,
      description: "A great shade of all colors colors that make you feel good",
    },

    {
      id: 2,
      title: "Yamaha Ray Zr 125",
      price: 86000,
      imageUrl:
        "https://media.zigcdn.com/media/model/2021/Sep/yamaha-rayzr-125-hybrid-right-side-view_930x620.jpg",
      quantity: 1,
      description:
        "A great shade of black and white colors that make you feel good",
    },

    {
      id: 3,
      title: "Access 125",
      price: 80000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/suzuki/bs6-access-125/source/bs6-access-12561d6d0a2d5f73.jpg",
      quantity: 1,
      description: "Kam piti hai",
    },

    {
      id: 4,
      title: "Activa 125",
      price: 75000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/honda/activa-125-2019/source/activa-125-201962579fe573f09.jpg",
      quantity: 1,
      description: "India's most trusted and reliable Brand",
    },
    {
      id: 5,
      title: "Tvs Jupiter",
      price: 60000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/tvs/tvs-jupiter/source/tvs-jupiter6230710946430.jpg",
      quantity: 1,
      description: "Jyada ka fayda",
    },
    {
      id: 6,
      title: "Suzuki Avenis",
      price: 60000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/suzuki/sporty-scooter/source/sporty-scooter624bfe2f09cd1.jpg",
      quantity: 1,
      description: "Youth's new sports look",
    },
    {
      id: 7,
      title: "Tvs Ntorq",
      price: 60000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/tvs/ntorq-125/source/ntorq-1256108e5337cf73.jpg",
      quantity: 1,
      description: "Now Ntorq is in avengers edition",
    },
    {
      id: 8,
      title: "Honda Dio",
      price: 60000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/honda/dio-bs6/source/dio-bs662ea4714f1656.jpg",
      quantity: 1,
      description: "Your trusted brand with new graphics",
    },
    {
      id: 9,
      title: "Aprilia SR 160",
      price: 130000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/aprilia/sr-160-bs6/source/sr-160-bs662135f8e85b90.jpg",
      quantity: 1,
      description: "Italian Brand in India",
    },
    {
      id: 10,
      title: "Ktm 390",
      price: 300000,
      imageUrl:
        "https://media.zigcdn.com/media/model/2020/Mar/ktm-390-duke-bs6-right-side-view_930x620.jpg",
      quantity: 1,
      description:
        "Sports bike India, used for travelling and professional riding",
    },
    {
      id: 11,
      title: "Royal Enfield Himalayan",
      price: 215000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/royal-enfield/himalayan-bs6/source/himalayan-bs6637f6287a2f8e.jpg",
      quantity: 1,
      description: "India's tradition with power ",
    },
    {
      id: 12,
      title: "R15 V4",
      price: 180000,
      imageUrl:
        "https://media.zigcdn.com/media/model/2021/Sep/yamaha-r15-v4-dark-right-side-view_930x620.jpg",
      quantity: 1,
      description: "Japanese reliability with speed",
    },
    {
      id: 13,
      title: "Royal Enfield Classic 350",
      price: 190000,
      imageUrl:
        "https://media.zigcdn.com/media/model/2021/Sep/2021-classic-350_930x620.jpg",
      quantity: 1,
      description: "India's power house, racing with passion",
    },
    {
      id: 14,
      title: "Apache RTR 200 4v",
      price: 136000,
      imageUrl:
        "https://media.zigcdn.com/media/model/2021/Nov/tvs-apache-rtr-2004v-right-side-view_930x620.jpg",
      quantity: 1,
      description: "India's tradition with power ",
    },
    {
      id: 15,
      title: "Yamaha FZ-X",
      price: 135000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/yamaha/fz-x/source/fz-x610a1456cfa97.jpg",
      quantity: 1,
      description: "India's reliable engine with tradition ",
    },
    {
      id: 16,
      title: "Honda SP 125",
      price: 84000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/honda/sp-125/source/sp-125625916ffc90d3.jpg",
      quantity: 1,
      description: "India's most affordable bike",
    },
    {
      id: 17,
      title: "Bajaj Pulsar 125",
      price: 87000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/bajaj/pulsar-125/source/pulsar-125614322674098a.jpg",
      quantity: 1,
      description: "Pulsar always with you",
    },
    {
      id: 18,
      title: "TVS Raidor",
      price: 85000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/tvs/raider/494X300/raider635225f6ed3f3.jpg",
      quantity: 1,
      description: "TVS's first 125cc bike",
    },

    {
      id: 19,
      title: "Vespa SXL 125",
      price: 133000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/vespa/sxl-125/source/sxl-1256214a91eb6f1c.jpg",
      quantity: 1,
      description: "Italian Trust",
    },
    {
      id: 20,
      title: "Yamaha Fascino",
      price: 78000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/yamaha/fascino-125/source/fascino-125619df9072eff0.jpg",
      quantity: 1,
      description: "Fascino Fascino",
    },
    {
      id: 21,
      title: "Pleasure Plus",
      price: 70000,
      imageUrl:
        "https://bd.gaadicdn.com/processedimages/hero/pleasure-2019/source/pleasure-20196299cfc5a9433.jpg",
      quantity: 1,
      description: "Pleasure to ride",
    },
  ];