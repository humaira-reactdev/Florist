const products = [
  {
    id: 1,
    name: "Rose Bouquet",
    price: 29.99,
    originalPrice: 39.99,
    img: "https://i.pinimg.com/736x/07/46/97/074697c6460d8e637c6f45e0bf554df0.jpg",
    img2: "https://i.pinimg.com/474x/eb/3e/97/eb3e9755d878477c2fa5a6bc59cf33e3.jpg",
    img3: "https://i.pinimg.com/474x/6d/b8/f1/6db8f19b6c576e9cf2afe6e87cadda76.jpg",
    img4: "https://i.pinimg.com/474x/bc/a7/7b/bca77bcbd189ab3853f344a5e08c829f.jpg",
    status: "Sale",
    discount: true,
    category: "Flower Box",
    stock: 50,
    quantity: 1,
    description: "A classic bouquet of fresh red roses, perfect for any romantic occasion.",
    productCode: "RB-001",
    rewardPoints: 30,
  },
  {
    id: 2,
    name: "Tulip",
    price: 19.99,
    originalPrice: null,
    img: "https://i.pinimg.com/736x/f0/cb/83/f0cb836648ceed99bfa0d804ee58df81.jpg",
    img2: "https://i.pinimg.com/474x/34/9c/f8/349cf8b2b91577bf4177eff6752b0909.jpg",
    img3: "https://i.pinimg.com/474x/76/39/cd/7639cd8fefcd5ab3661264d672575a47.jpg",
    img4: "https://i.pinimg.com/474x/2d/55/59/2d5559a9458c1a3c692399b5298d8e1b.jpg",
    status: "New",
    discount: false,
    category: "Bouquet",
    stock: 30,
    quantity: 1,
    description: "Bright and colorful tulips to bring joy and cheer to any space.",
    productCode: "TU-002",
    rewardPoints: 20,
  },
  {
    id: 3,
    name: "Sunflower Delight",
    price: 24.99,
    originalPrice: 29.99,
    img: "https://i.pinimg.com/564x/ac/00/d5/ac00d5d67ff3bbbcfe5a09a0fe16f63e.jpg",
    img2: "https://i.pinimg.com/474x/79/88/61/798861471c41725d66d842168686dcaf.jpg",
    img3: "https://i.pinimg.com/474x/da/19/d4/da19d4d14efc232a5bd44bbbcaf70a3c.jpg",
    img4: "https://i.pinimg.com/474x/fd/cb/3a/fdcb3a53513cfab1333a8fcdd856ec1b.jpg",
    status: "Sale",
    discount: true,
    category: "Flower Box",
    stock: 25,
    quantity: 1,
    description: "A vibrant sunflower arrangement sure to brighten anyone's day.",
    productCode: "SF-003",
    rewardPoints: 25,
  },
  {
    id: 4,
    name: "Lilies Galore",
    price: 34.99,
    originalPrice: null,
    img: "https://i.pinimg.com/736x/a2/ef/38/a2ef387cffe2f38630159e76afcb27d5.jpg",
    img2: "https://i.pinimg.com/474x/51/56/53/51565333525c4389449fca20dd086b91.jpg",
    img3: "https://i.pinimg.com/474x/57/55/89/575589d46d099fb0a6168e7236130aa9.jpg",
    img4: "https://i.pinimg.com/474x/c3/46/d0/c346d000426b82bcdf4e502add0af4d1.jpg",
    status: "New",
    discount: false,
    category: "Bouquet",
    stock: 20,
    quantity: 1,
    description: "Elegant and fragrant lilies, ideal for expressing sophistication and grace.",
    productCode: "LG-004",
    rewardPoints: 35,
  },
  {
    id: 5,
    name: "Orchid Elegance",
    price: 49.99,
    originalPrice: 59.99,
    img: "https://i.pinimg.com/736x/98/fc/07/98fc071a23e650c4e9973ba7763d3efb.jpg",
    img2: "https://i.pinimg.com/474x/45/0a/d0/450ad0a797381c66148b21878b8936dc.jpg",
    img3: "https://i.pinimg.com/474x/91/95/8d/91958db60c844891bea49cfad8b3edeb.jpg",
    img4: "https://i.pinimg.com/474x/bb/91/25/bb9125c2bd38d189d6009f46d0fe4882.jpg",
    status: "Out of Stock",
    discount: true,
    category: "Flower Shelf",
    stock: 0,
    quantity: 1,
    description: "Luxurious and stunning orchid arrangement, perfect for special occasions.",
    productCode: "OE-005",
    rewardPoints: 50,
  },
  {
    id: 6,
    name: "Daisy Chain",
    price: 14.99,
    originalPrice: null,
    img: "https://i.pinimg.com/564x/d6/f0/d7/d6f0d71e546409c5bb217616444410f6.jpg",
    img2: "https://i.pinimg.com/474x/45/88/e0/4588e02c0e2217b6115ddb9aaf26a126.jpg",
    img3: "https://i.pinimg.com/474x/9d/73/ec/9d73ec7033cd94885baa2a8f979e2887.jpg",
    img4: "https://i.pinimg.com/474x/4c/4a/60/4c4a601466123b4c8e73a4d1428fba15.jpg",
    status: "New",
    discount: false,
    category: "Bouquet",
    stock: 40,
    quantity: 1,
    description: "Delicate daisies arranged for a light and refreshing display.",
    productCode: "DC-006",
    rewardPoints: 15,
  },
  {
    id: 7,
    name: "Chrysanthemum Charm",
    price: 19.99,
    originalPrice: null,
    img: "https://i.pinimg.com/564x/35/54/d4/3554d49060cc94fe114cf5a6be6122de.jpg",
    img2: "https://i.pinimg.com/736x/1b/50/61/1b50619e329840e5e5d94ab26a881095.jpg",
    img3: "https://i.pinimg.com/474x/b2/12/5d/b2125d46ac8407f4de0a4c2507616ca8.jpg",
    img4: "https://i.pinimg.com/474x/33/21/57/332157ecbadc2579d807ed9ebf6a7be8.jpg",
    status: "New",
    discount: false,
    category: "Bouquet",
    stock: 35,
    quantity: 1,
    description: "Charming chrysanthemum flowers to add a touch of beauty to any occasion.",
    productCode: "CC-007",
    rewardPoints: 20,
  },
  {
    id: 8,
    name: "Carnation Bliss",
    price: 18.99,
    originalPrice: 22.99,
    img: "https://i.pinimg.com/564x/22/13/37/2213374c6e354ac61ddf39b4220f3bdf.jpg",
    img2: "https://i.pinimg.com/originals/c5/3a/5b/c53a5b004ef7b73ce38dfa04c69bc954.jpg",
    img3: "https://i.pinimg.com/474x/68/4d/2a/684d2a8bcc14047d67333bda0a3c9a07.jpg",
    img4: "https://i.pinimg.com/474x/7c/05/a6/7c05a64626d70fc10d678f967233d2d1.jpg",
    status: "Sale",
    discount: true,
    category: "Basket of Flowers",
    stock: 45,
    quantity: 1, 
    description: "Soft and colorful carnation bouquet, perfect for any occasion.",
    productCode: "CB-008",
    rewardPoints: 19,
  },
  {
    id: 9,
    name: "Peony Love",
    price: 29.99,
    originalPrice: 39.99,
    img: "https://i.pinimg.com/564x/4b/ae/3b/4bae3b4459cd9c0e0fca1b6741cd8836.jpg",
    img2: "https://i.pinimg.com/474x/54/83/99/54839936ce5b9334099ea71cff155d20.jpg",
    img3: "https://i.pinimg.com/474x/14/cb/0c/14cb0c56e1dc42bdd84b11983e5f0b5a.jpg",
    img4: "https://i.pinimg.com/474x/aa/b1/f9/aab1f9a09b049bdb8e4d2e13e8ec5287.jpg",
    status: "Sale",
    discount: true,
    category: "Flower Box",
    stock: 20,
    quantity: 1,
    description: "Lush and luxurious peonies for a romantic touch.",
    productCode: "PP-009",
    rewardPoints: 40,
  },
  {
    id: 10,
    name: "Hydrangea Magic",
    price: 39.99,
    originalPrice: null,
    img: "https://i.pinimg.com/564x/2d/ce/29/2dce29af327f47985e585883759bae36.jpg",
    img2: "https://i.pinimg.com/474x/59/cf/2c/59cf2cf3efd195a0931fd93b975aef40.jpg",
    img3: "https://i.pinimg.com/474x/2d/cd/13/2dcd13976a9eb8f57442cf3a19b9bb69.jpg",
    img4: "https://i.pinimg.com/474x/09/2f/a2/092fa29958288379a138d5e9e6ce9999.jpg",
    status: "New",
    discount: false,
    category: "Flower Shelf",
    stock: 10,
    quantity: 1,
    description: "Soft lavender bouquet with a dreamy fragrance, perfect for relaxation.",
    productCode: "LD-010",
    rewardPoints: 25,
  },
  {
    id: 11,
    name: "Gerbera Joy",
    price: 22.99,
    originalPrice: null,
    img: "https://i.pinimg.com/564x/34/f2/2c/34f22ccfda6ff2c1c4b6291c21d1dd67.jpg",
    img2: "https://i.pinimg.com/474x/b3/b9/bc/b3b9bc602eec0b0abf78abe369d807ad.jpg",
    img3: "https://i.pinimg.com/474x/bb/1a/c0/bb1ac06673c542a91a39a2a7911e5466.jpg",
    img4: "https://i.pinimg.com/474x/ba/b4/bc/bab4bceac80607ede081ee3db22c392a.jpg",
    status: "New",
    discount: false,
    category: "Bouquet",
    stock: 25,
    quantity: 1,
    description: "Bright dahlias to brighten any space, perfect for bold statements.",
    productCode: "DD-011",
    rewardPoints: 30,
  },
  {
    id: 12,
    name: "Pansy Play",
    price: 15.99,
    originalPrice: 18.99,
    img: "https://i.pinimg.com/564x/1d/92/6b/1d926b56d078783fa1b86393d7b96685.jpg",
    img2: "https://i.pinimg.com/474x/cf/f8/79/cff87957f6b0510e587ddd383011b9a6.jpg",
    img3: "https://i.pinimg.com/474x/62/32/e4/6232e49d0c2afb9ed31c447fcc6798da.jpg",
    img4: "https://i.pinimg.com/474x/fe/70/5e/fe705efed08df3defe885c7602095856.jpg",
    status: "Sale",
    discount: true,
    category: "Basket of Flowers",
    stock: 30,
    quantity: 1,
    description: "Lovely gardenia blossoms for a fresh, fragrant bouquet.",
    productCode: "GG-012",
    rewardPoints: 28,
  },
  {
    id: 13,
    name: "Calla Lily Grace",
    price: 32.99,
    originalPrice: null,
    img: "https://i.pinimg.com/564x/a0/45/e7/a045e7ec7f7c649f4c3cab1b84bf9f1d.jpg",
    img2: "https://i.pinimg.com/474x/98/ed/62/98ed6200db5f29e597ce2ef547c30b3a.jpg",
    img3: "https://i.pinimg.com/474x/30/22/07/302207ea6e792b877e0aba275aaf29d2.jpg",
    img4: "https://i.pinimg.com/474x/6d/bd/70/6dbd7051a34cda89130eaff64903a0d3.jpg",
    status: "New",
    discount: false,
    category: "Flower Box",
    stock: 12,
    quantity: 1,
    description: "Huge hydrangea blooms in stunning shades for a grand floral arrangement.",
    productCode: "HH-013",
    rewardPoints: 45,
  },
  {
    id: 14,
    name: "Lily of the Valley",
    price: 27.99,
    originalPrice: 34.99,
    img: "https://i.pinimg.com/564x/3f/bd/47/3fbd473ba58bb9d4d7ebe6a0b911c740.jpg",
    img2: "https://i.pinimg.com/474x/35/04/f3/3504f32fb62d28d794ede7b2bc9f0e41.jpg",
    img3: "https://i.pinimg.com/736x/31/f9/17/31f91765ad277e302742a24c13134142.jpg",
    img4: "https://i.pinimg.com/474x/ac/c7/5a/acc75ae31ef5cb2610e6d91998a7e967.jpg",
    status: "Sale",
    discount: true,
    category: "Flower Shelf",
    stock: 18,
    quantity: 1,
    description: "Iris blooms in deep blues and purples to create a lasting impression.",
    productCode: "II-014",
    rewardPoints: 20,
  },
  {
    id: 15,
    name: "Jasmine Fragrance",
    price: 24.99,
    originalPrice: null,
    img: "https://i.pinimg.com/564x/b7/f7/0f/b7f70fea60f6dd2b30e6e8d3164cfc82.jpg",
    img2: "https://i.pinimg.com/474x/12/51/57/1251578f1dfe35a16494ff7e27b5f9ed.jpg",
    img3: "https://i.pinimg.com/474x/20/21/41/20214187a509a6eb470cf8c51760e862.jpg",
    img4: "https://i.pinimg.com/474x/f1/39/d4/f139d45da038192279c785a41b1873c3.jpg",
    status: "New",
    discount: false,
    category: "Bouquet",
    stock: 20,
    quantity: 1,
    description: "Delicate jasmine flowers with a soft, sweet fragrance for peaceful moments.",
    productCode: "JJ-015",
    rewardPoints: 23,
  },
  {
    id: 16,
    name: "Tulip & Daffodil Mix",
    price: 35.99,
    originalPrice: 42.99,
    img: "https://i.pinimg.com/564x/34/e6/ce/34e6cebf2525a3f0d1aa3831bd7f2587.jpg",
    img2: "https://i.pinimg.com/474x/b6/31/95/b63195eec4565dfd0f2db7e02612c71d.jpg",
    img3: "https://i.pinimg.com/474x/58/c4/1e/58c41ece162e0dd686dbd77dbefe1677.jpg",
    img4: "https://i.pinimg.com/736x/05/cd/45/05cd45a64c715c0479af0d12262140f6.jpg",
    status: "Sale",
    discount: true,
    category: "Gift Combos",
    stock: 22,
    quantity: 1,
    description: "Elegant lotus flowers that symbolize purity and beauty, now on sale.",
    productCode: "LL-016",
    rewardPoints: 35,
  },
  {
    id: 17,
    name: "Bird of Paradise",
    price: 59.99,
    originalPrice: null,
    img: "https://i.pinimg.com/564x/1d/92/6b/1d926b56d078783fa1b86393d7b96685.jpg",
    img2: "https://i.pinimg.com/736x/da/6e/e0/da6ee04d1cee4b28b6aa4e7cdec52a41.jpg",
    img3: "https://i.pinimg.com/474x/59/0c/b5/590cb5f440aacff9d82b939c91864823.jpg",
    img4: "https://i.pinimg.com/736x/3e/31/9e/3e319e71dfe0c63426f69c6f813d62aa.jpg",
    status: "New",
    discount: false,
    category: "Flower Box",
    stock: 8,
    quantity: 1,
    description: "Bright and cheerful marigold flowers for a lively display of color.",
    productCode: "MM-017",
    rewardPoints: 19,
  },
  {
    id: 18,
    name: "Iris Inspiration",
    price: 29.99,
    originalPrice: 35.99,
    img: "https://i.pinimg.com/564x/50/af/5b/50af5b90ca7fe30b65cc0e58206e13ba.jpg",
    img2: "https://i.pinimg.com/474x/4d/97/bb/4d97bb5e79db6c4d17d6697d337627cc.jpg",
    img3: "https://i.pinimg.com/474x/9a/6f/89/9a6f893bcaebca429f9de74bd00a1fe7.jpg",
    img4: "https://i.pinimg.com/564x/ec/e2/ff/ece2ffc895dcd820dbe4c12839b4aae8.jpg",
    status: "Sale",
    discount: true,
    category: "Gift Combos",
    stock: 14,
    quantity: 1,
    description: "Fragrant narcissus flowers that offer both beauty and grace.",
    productCode: "NB-018",
    rewardPoints: 29,
  },
  {
    id: 19,
    name: "Sweet Pea Charm",
    price: 18.99,
    originalPrice: null,
    img: "https://i.pinimg.com/736x/b8/e9/85/b8e985d9c99b53773caba7a17edd5fa7.jpg",
    img2: "https://i.pinimg.com/474x/b6/31/95/b63195eec4565dfd0f2db7e02612c71d.jpg",
    img3: "https://i.pinimg.com/474x/3d/7e/a9/3d7ea9b3ec26f98808e55f6ac45940b6.jpg",
    img4: "https://i.pinimg.com/474x/09/71/2b/09712b24838104b380f03d788d4a361e.jpg",
    status: "New",
    discount: false,
    category: "Basket of Flowers",
    stock: 35,
    quantity: 1,
    description: "Soft pea blossoms in vibrant hues for a relaxing and refreshing bouquet.",
    productCode: "PC-019",
    rewardPoints: 22,
  },
  {
    id: 20,
    name: "Bluebell Bliss",
    price: 26.99,
    originalPrice: 32.99,
    img: "https://i.pinimg.com/474x/ba/7a/23/ba7a23f29cd0dc20ad56f20d8e082678.jpg",
    img2: "https://i.pinimg.com/474x/eb/3e/97/eb3e9755d878477c2fa5a6bc59cf33e3.jpg",
    img3: "https://i.pinimg.com/474x/6d/b8/f1/6db8f19b6c576e9cf2afe6e87cadda76.jpg",
    img4: "https://i.pinimg.com/474x/bc/a7/7b/bca77bcbd189ab3853f344a5e08c829f.jpg",
    status: "Sale",
    discount: true,
    category: "Bouquet",
    stock: 16,
    quantity: 1,
    description: "Bright bluebells bloom in vibrant shades for a beautiful and elegant arrangement.",
    productCode: "BB-020",
    rewardPoints: 27,
  },
];

export default products;