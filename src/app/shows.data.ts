export interface Show {
  id: string;
  url: string;
  rating?: number;
  subItems?: SubItem[];
}

interface SubItem {
  id: string;
  url: string;
  rating: number;
  prefix?: string; // Used to display a prefix above the sub item in the carousel
}

const w = 400;
const baseURL = `https://image.tmdb.org/t/p/w${w}`;

export const shows: Show[] = [
  {
    id: '13 Reasons Why Season 1',
    url: `${baseURL}/kTzJ5PrPTZVjLoKeiiShl5Z8Owf.jpg`,
    rating: 9,
  },
  {
    id: 'Adolescence',
    url: `${baseURL}/tDHWWReefmOOjBCJZUck8cNwssk.jpg`,
    rating: 9,
  },
  {
    id: 'Arcane',
    url: `${baseURL}/b2PlJsBGAU4NvqyBfFDdK3HXnL7.jpg`,
    rating: 9,
  },
  {
    id: 'Avatar: The Last Airbender',
    url: `${baseURL}/v2vn1coUMPKw0GI1KGC5J4IXtqp.jpg`,
    rating: 7,
  },
  {
    id: 'Baby Reindeer',
    url: `${baseURL}/tN9OcbkAOPwHSr1sgMornZtQZBx.jpg`,
    rating: 8,
  },
  {
    id: 'Band of Brothers',
    url: `${baseURL}/8JMXquNmdMUy2n2RgW8gfOM0O3l.jpg`,
    rating: 8,
  },
  {
    id: 'BEEF',
    url: `${baseURL}/4b4v7RnPhNyPEaVGFarEuo74r8W.jpg`,
    rating: 7,
  },
  {
    id: 'Black Bird',
    url: `${baseURL}/79M2yNSmkh4CCMrWNV6b2xvIeNn.jpg`,
    rating: 8,
  },
  // MARK: BM
  {
    id: 'Black Mirror',
    url: `${baseURL}/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg`,
    subItems: [
      // Season 1
      { id: 'The National Anthem', url: `${baseURL}/6YuxcgdeAsSU6IUaZQ3VBsdtgg6.jpg`, rating: 6 },
      { id: 'Fifteen Million Merits', url: `${baseURL}/pknSc3JOH4tHXWiesHL3XSWEwmm.jpg`, rating: 8 },
      { id: 'The Entire History of You', url: `${baseURL}/yBaN8IBS0YFTeHG3O26ClJHShgH.jpg`, rating: 8 },
      // Season 2
      { id: 'Be Right Back', url: ``, rating: 5 },
      { id: 'White Bear', url: ``, rating: 9 },
      { id: 'The Waldo Moment', url: ``, rating: 7 },
      // Season 3
      { id: 'Nosedive', url: `${baseURL}/1sh0AysG4yXrdc1djvAQpjHjCoC.jpg`, rating: 8 },
      { id: 'Playtest', url: `${baseURL}/64PMbfan4ijg7hcDxPM51BV2B0A.jpg`, rating: 9 },
      { id: 'Shut Up and Dance', url: `${baseURL}/oTESNF5psI4ZCDspSXDVepHj7K8.jpg`, rating: 9 },
      { id: 'San Junipero', url: ``, rating: 10 },
      { id: 'Men Against Fire', url: `${baseURL}/9l3C6NAZXhgOT4OYRLZl95PfZMZ.jpg`, rating: 7 },
      { id: 'Hated in the Nation', url: ``, rating: 10 },
      // Season 4
      { id: 'USS Callister', url: `${baseURL}/tHq9uHXjVmi14gxh3RKCbuGAy0H.jpg`, rating: 10 },
      { id: 'Arkangel', url: `${baseURL}/4QDwNVeWqavrP82SLRP73jzrxtP.jpg`, rating: 8 },
      { id: 'Crocodile', url: `${baseURL}/zlxFLlwcA0x0GFI9doXEHvc0ZvF.jpg`, rating: 8 },
      { id: 'Hang the DJ', url: `${baseURL}/nHiylk2WJTl4wsf8ovsDtsGWxoV.jpg`, rating: 8 },
      { id: 'Metalhead', url: `${baseURL}/ymjCnzTuu83kyAvXMe5DBSRjRr0.jpg`, rating: 5 },
      { id: 'Black Museum', url: ``, rating: 9 },
      // Season 5
      { id: 'Striking Vipers', url: `${baseURL}/phNZotfQsSKXJwnwdChgqATNtn7.jpg`, rating: 6 },
      { id: 'Smithereens', url: `${baseURL}/8i7xDwwDyyKXyIryKZPXqjHovBs.jpg`, rating: 7 },
      { id: 'Rachel, Jack and Ashley Too', url: `${baseURL}/bEQeQgPSRjHXhymVZKx9nWParTp.jpg`, rating: 5 },
      // Season 6
      { id: 'Joan Is Awful', url: `${baseURL}/kb3GO7AJAukOIfjFCdSVcjUVWnK.jpg`, rating: 8 },
      { id: 'Loch Henry', url: `${baseURL}/h9275pcd2gvop2qCeANL9EyTHET.jpg`, rating: 9 },
      { id: 'Beyond the Sea', url: `${baseURL}/m5ILo0BfwAnLGhFuzPxKlcUzoB0.jpg`, rating: 7 },
      { id: 'Mazey Day', url: `${baseURL}/3fQcHtdmARBVnT8djV53jtGUIUU.jpg`, rating: 8 },
      { id: 'Demon 79', url: `${baseURL}/iPMcM7hvaN3mrbBYlU70h3mFG8q.jpg`, rating: 8 },
      // Season 7
      {  id: 'Common People',  url: `${baseURL}/xM7gJYnfPNWbOa6BYyRcmAiYXSM.jpg`, rating: 9 },
      { id: 'Bête Noire', url: `${baseURL}/5KeVSvfiLbs8dZMzZAUdjlWQf5t.jpg`, rating: 9 },
      { id: 'Hotel Reverie', url: `${baseURL}/gyLCvYSSNisHresFItp0aS4alFp.jpg`, rating: 8 },
      { id: 'Plaything', url: `${baseURL}/39TCU9SGvRlRKdQR2Mdm96PYdQZ.jpg`, rating: 9 },
      { id: 'Eulogy', url: `https://image.tmdb.org/t/p/w454_and_h254_bestv2/j0FZRa4xHvvFS8YLekRdwgwlnOL.jpg`, rating: 10 },
      { id: 'USS Callister: Into Infinity', url: `${baseURL}/dzc3DUC76Uw5tGtLCwN1u6ooObY.jpg`, rating: 8 },
      // Specials
      { id: 'Black Mirror: White Christmas', url: `${baseURL}/o17soyXVfLqikV6FTyqIuPHAr58.jpg`, rating: 10 },
      { id: 'Black Mirror: Bandersnatch', url: `${baseURL}/fR0VZ0VE598zl1lrYf7IfBqEwQ2.jpg`, rating: 7 },
    ],
  },
  {
    id: 'Breaking Bad',
    url: `${baseURL}/3ZMOKFDA3fPLlIgFnrZLYLXGoiD.jpg`,
    rating: 6,
  },
  {
    id: 'Camera Café',
    url: `${baseURL}/vmdCodGh2nUPRDBQbIVsxGaIMyK.jpg`,
    rating: 7,
  },
  {
    id: 'Chernobyl',
    url: `${baseURL}/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg`,
    rating: 9,
  },
  {
    id: 'Devs',
    url: `${baseURL}/f6Mfzu3RdCBaVQXME6tvlf7cZbv.jpg`,
    rating: 7,
  },
  {
    id: 'Evil Genius',
    url: `${baseURL}/rXaq7vl7sXynXFBVLPrNzj6CGUp.jpg`,
    rating: 5,
  },
  // MARK: FARGO
  {
    id: 'Fargo',
    url: `${baseURL}/hFkdib1m2sfrTRYzcSqAc215kRz.jpg`,
    subItems: [
      { id: 'Season 1', url: `${baseURL}/sYCaM1Aq7DR8GdJHMkcSWl0NHh9.jpg`, rating: 9 },
      { id: 'Season 2', url: `${baseURL}/ww5ec8tSMhhMDwRg2gWGIx4imrf.jpg`, rating: 10 },
      { id: 'Season 3', url: `${baseURL}/dYHoNzcpQXzU2qBMZYbyOnrcuvi.jpg`, rating: 6 },
    ],
  },
  {
    id: 'Goosebumps',
    url: `${baseURL}/l378JaD4xHnauo8q2TnClvfsIlj.jpg`,
    rating: 9,
  },
  {
    id: 'Goosebumps: The Vanishing',
    url: `${baseURL}/ajghauMTZ4RKVeISDUzxcMWjXnI.jpg`,
    rating: 8,
  },
  // MARK: CABINET
  {
    id: "Guillermo del Toro's Cabinet of Curiosities",
    url: `${baseURL}/3pl9u0ZeUUQdAqA7lfvusyfu1kh.jpg`,
    subItems: [
      { id: 'Lot 36', url: `${baseURL}/tdigtD2JaWNltdWTANNbw5CjcNp.jpg`, rating: 9 },
      { id: 'Graveyard Rats', url: `${baseURL}/mAU2C7Sn6QOCSVnjeeoMGUKBJK6.jpg`, rating: 6 },
      { id: 'The Autopsy', url: `${baseURL}/w8YKY5xxrCUpiIZC0KHS9IvRxb5.jpg`, rating: 8 },
      { id: 'The Outside', url: `${baseURL}/9cxMWF0RRUVUEYEq6SnszSkIlJO.jpg`, rating: 7 },
      { id: "Pickman's Model", url: `${baseURL}/pbNCONhfMxwYbqd7P5tCCiYljyn.jpg`, rating: 7 },
      { id: "Dreams in the Witch House", url: `${baseURL}/6U0cggStrF6lJjQEj8ki1vfMqJR.jpg`, rating: 6 },
      { id: 'The Viewing', url: `${baseURL}/gSoYSKSQ4XSKnUB0lZwaRHwEMRg.jpg`, rating: 7 },
      { id: 'The Murmuring', url: `${baseURL}/yN8yNys3GqdrijZ7nZaSOMnHaTO.jpg`, rating: 6 },
    ],
  },
  {
    id: 'Heroes',
    url: `${baseURL}/dvCPxEZmy8kjedNZXTw7x4jLYvI.jpg`,
    subItems: [
      { id: 'Heroes', url: `${baseURL}/7Cn1Sj5yipu7tBX14BbaXuBHbL1.jpg`, rating: 8 },
      { id: 'Heroes Reborn', url: `${baseURL}/bHSkrlwjJgHq8Aa6AdDJvWuSI2X.jpg`, rating: 6 },
      { id: 'Heroes Reborn: Dark Matters', url: `${baseURL}/fixaFo6VbICZEqdHfXsJdLOBqBi.jpg`, rating: 7 },
    ],
  },
  {
    id: 'Into the Badlands',
    url: `${baseURL}/kwZZWOm5mpKvt5Yt9fMbsl0taOf.jpg`,
    rating: 8,
  },
  {
    id: 'Kaleidoscope',
    url: `${baseURL}/9rmE7IEUwdNBRy8XHBu1j82BqnU.jpg`,
    rating: 7,
  },
  {
    id: 'Legion',
    url: `${baseURL}/d6T86JYMW4sSLRmNfdtFilvugOv.jpg`,
    rating: 7,
  },
  {
    id: 'Locke & Key',
    url: `${baseURL}/zuxGfRKziGHPogipnEXXykdDmyT.jpg`,
    rating: 8,
  },
  {
    id: 'Lost',
    url: `${baseURL}/rSPXRV2TD2LlU26QyDSS9uYCnGb.jpg`,
    rating: 8,
  },
  // MARK: DL&R
  {
    id: 'Love, Death & Robots',
    url: `${baseURL}/cG6lqN82R9HeiM2w4Yy63aJ83qc.jpg`,
    subItems: [
      { id: '1x01', url: ``, rating: 9 },
      { id: '1x02', url: ``, rating: 6 },
      { id: '1x03', url: ``, rating: 10 },
      { id: '1x04', url: ``, rating: 8 },
      { id: '1x05', url: ``, rating: 8 },
      { id: '1x06', url: ``, rating: 6 },
      { id: '1x07', url: ``, rating: 10 },
      { id: '1x08', url: ``, rating: 9 },
      { id: '1x09', url: ``, rating: 7 },
      { id: '1x10', url: ``, rating: 8 },
      { id: '1x11', url: ``, rating: 8 },
      { id: '1x12', url: ``, rating: 10 },
      { id: '1x13', url: ``, rating: 8 },
      { id: '1x14', url: ``, rating: 6 },
      { id: '1x15', url: ``, rating: 7 },
      { id: '1x16', url: ``, rating: 8 },
      { id: '1x17', url: ``, rating: 5 },
      { id: '1x18', url: ``, rating: 10 },
      { id: '2x01', url: ``, rating: 8 },
      { id: '2x02', url: ``, rating: 8 },
      { id: '2x03', url: ``, rating: 10 },
      { id: '2x04', url: ``, rating: 10 },
      { id: '2x05', url: ``, rating: 8 },
      { id: '2x06', url: ``, rating: 7 },
      { id: '2x07', url: ``, rating: 7 },
      { id: '2x08', url: ``, rating: 7 },
      { id: '3x01', url: ``, rating: 7 },
      { id: '3x02', url: ``, rating: 8 },
      { id: '3x03', url: ``, rating: 8 },
      { id: '3x04', url: ``, rating: 10 },
      { id: '3x05', url: ``, rating: 8 },
      { id: '3x06', url: ``, rating: 7 },
      { id: '3x07', url: ``, rating: 8 },
      { id: '3x08', url: ``, rating: 9 },
      { id: '3x09', url: ``, rating: 9 },
    ],
  },
  {
    id: 'Mare Of Easttown',
    url: `${baseURL}/78aK4Msbr22A5PGa6PZV0pAvdwf.jpg`,
    rating: 8,
  },
  {
    id: 'Misfits',
    url: `${baseURL}/1yjmRIp8A92FlAw5JpouQ50ATUA.jpg`,
    rating: 8,
  },
  {
    id: 'Moon Knight',
    url: `${baseURL}/9T4e6kA8tVtIK9GZ1Cy1QMvK9js.jpg`,
    rating: 8,
  },
  {
    id: 'Mr. Robot',
    url: `${baseURL}/5yaTYdq9xZdZnYWSbdz2yhkMNdA.jpg`,
    rating: 7,
  },
  {
    id: 'Ms. Marvel',
    url: `${baseURL}/3HWWh92kZbD7odwJX7nKmXNZsYo.jpg`,
    rating: 6,
  },
  {
    id: 'Neverwhere',
    url: `${baseURL}/vrVbb6DanOxuhlIH8TQ1s67dQ6P.jpg`,
    rating: 5,
  },
  {
    id: 'Oz',
    url: `${baseURL}/tS6P1LtTThVGhnncYttQ1TSLupd.jpg`,
    rating: 9,
  },
  // MARK: PKD
  {
    id: "Philip K. Dick's Electric Dreams",
    url: `${baseURL}/tyaNrGepu4HbkjLFkK6vgua1vgn.jpg`,
    subItems: [
      { id: 'Real Life', url: `https://image.tmdb.org/t/p/w454_and_h254_bestv2/gU4jACkobrOSOwU12saICGTtqt6.jpg`, rating: 9 },
      { id: 'Autofac', url: `https://image.tmdb.org/t/p/w454_and_h254_bestv2/zVc5AJgZoyLWT04WBbBANFdXypj.jpg`, rating: 8 },
      { id: 'Human Is', url: `https://image.tmdb.org/t/p/w454_and_h254_bestv2/mTDpl3sIgx5vGvt84dJcszAsKXa.jpg`, rating: 8 },
      { id: 'Crazy Diamond', url: `https://image.tmdb.org/t/p/w454_and_h254_bestv2/z6Sjg5M7lLGYTkkVuQOcjLJxUE3.jpg`, rating: 6 },
      { id: 'The Hood Maker', url: `https://image.tmdb.org/t/p/w454_and_h254_bestv2/dNmmTnSY0Dg528qERXm7Iu2pKJZ.jpg`, rating: 9 },
      { id: 'Safe & Sound', url: `https://image.tmdb.org/t/p/w454_and_h254_bestv2/9PgGQVvLa8i00V4Rfg02nqBB1oN.jpg`, rating: 9 },
      { id: 'The Father Thing', url: `https://image.tmdb.org/t/p/w454_and_h254_bestv2/4hqlzmUBHBS1k3FJpUvWKyr42qX.jpg`, rating: 8 },
      { id: 'Impossible Planet', url: `https://image.tmdb.org/t/p/w454_and_h254_bestv2/rxFjnYFf7zceAu2XQhApinrIRFl.jpg`, rating: 9 },
      { id: 'The Commuter', url: `https://image.tmdb.org/t/p/w454_and_h254_bestv2/tnQCrMveQXWc5mwqQ3CFntbs1T2.jpg`, rating: 8 },
      { id: 'Kill All Others', url: `https://image.tmdb.org/t/p/w454_and_h254_bestv2/hb8ND4gf17MtXBzNdfI1UjlPNSI.jpg`, rating: 7 },
    ],
  },
  {
    id: 'Romanzo Criminale',
    url: `${baseURL}/cbx0rsTG9K5Sv8kQFyaHtoc9JF2.jpg`,
    rating: 10,
  },
  // MARK: SECRET LEVEL
  {
    id: 'Secret Level',
    url: `${baseURL}/uRNVZNfDeQmbjdM8UHf0mmEzsgl.jpg`,
    subItems: [
      { id: "Dungeons & Dragons: The Queen's Cradle", url: `${baseURL}/pJBOXZ5lrh5l64RzRVXi6wqDYVx.jpg`, rating: 8 },
      { id: 'Sifu: It Takes a Life', url: `${baseURL}/2GQq3AVe9IiRUbvJ0CRArM5YEYS.jpg`, rating: 8 },
      { id: 'New World: The Once and Future King', url: `${baseURL}/5reK2edUyj6myiz83pgUVY6tEvC.jpg`, rating: 9 },
      { id: 'Unreal Tournament: Xan', url: `${baseURL}/oqjBmwRUwmDVkP4MWBoDogBcpnp.jpg`, rating: 8 },
      { id: 'Warhammer 40,000: And They Shall Know No Fear', url: `${baseURL}/AwopuQxgDK5qwZTbACo2EbkY6vk.jpg`, rating: 10 },
      { id: 'PAC-MAN: Circle', url: `${baseURL}/A9b7YbLAWT9oooTXNUh5U68HwNl.jpg`, rating: 7 },
      { id: 'Crossfire: Good Conflict', url: `${baseURL}/7Mzun1fcXzh5oT36HWFrGRADYcc.jpg`, rating: 7 },
      { id: 'Armored Core: Asset Management', url: `${baseURL}/9QnZ3kdh4iQGjOGvK26yfBWj3ll.jpg`, rating: 9 },
      { id: 'The Outer Worlds: The Company We Keep', url: `${baseURL}/as3TAQCg8ePQk1kd1EbtTioILfW.jpg`, rating: 7 },
      { id: 'Mega Man: Start', url: `${baseURL}/7UZ8tEP8TKUWEMG6CEIRee7UIjx.jpg`, rating: 7 },
      { id: 'Exodus: Odyssey', url: `${baseURL}/c7xQjdhBcxQy4f7Hulk76TnvHNj.jpg`, rating: 8 },
      { id: 'Spelunky: Tally', url: `${baseURL}/ab8F6MIHlIe4R5iQLagBk1Y7ppR.jpg`, rating: 7 },
      { id: 'Concord: Tale Of The Implacable', url: `${baseURL}/4iYdzggNRQsgnyEljsvxEoMSoei.jpg`, rating: 8 },
      { id: 'Honor of Kings: The Way of All Things', url: `${baseURL}/s6L5c76oEa8jMHizH0MAjMQ2Lxs.jpg`, rating: 7 },
      { id: 'Playtime: Fulfillment', url: `${baseURL}/j5dnkwFjRR6VHYpeEK2dgkIvqEm.jpg`, rating: 8 },
    ],
  },
  {
    id: 'Sense8',
    url: `${baseURL}/re2aPwo7XRUTLa7XwOyExsaWL3R.jpg`,
    rating: 10,
  },
  {
    id: 'Sherlock',
    url: `${baseURL}/czzJiwfOJVDQKddRidHkQ2lw4as.jpg`,
    rating: 9,
  },
  {
    id: 'Stranger Things',
    url: `${baseURL}/uKYUR8GPkKRCksczYDJb3pwZauo.jpg`,
    rating: 8,
  },
  {
    id: 'The 100',
    url: `${baseURL}/wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg`,
    rating: 8,
  },
  {
    id: 'The End Of The F***ing World',
    url: `${baseURL}/fMnNMaWa6yQJAEGtlN4uADmVsX.jpg`,
    rating: 7,
  },
  {
    id: 'The Fall Of The House of Usher',
    url: `${baseURL}/aFX5bdLKVCxFEKTwB1yLh6MCpsX.jpg`,
    rating: 7,
  },
  {
    id: 'The Magicians',
    url: `${baseURL}/d3Q4yFK3D3NOWzYRgJdsxYpZdH0.jpg`,
    rating: 8,
  },
  {
    id: 'The Mentalist',
    url: `${baseURL}/wHBpu72EW1oUYwDSaJMD46sC4nG.jpg`,
    rating: 8,
  },
  {
    id: 'The Pacific',
    url: `${baseURL}/1SsuFZalrkfbBBWmMRjVNhbWpO3.jpg`,
    rating: 6,
  },
  {
    id: "The Queen's Gambit",
    url: `${baseURL}/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg`,
    rating: 10,
  },
  // MARK: THE TWILIGHT ZONE
  {
    id: 'The Twilight Zone',
    url: `${baseURL}/4gzrxZZkgrmUNOJSWXqLUEgPUeF.jpg`,
    subItems: [
      { id: 'The Comedian', url: `${baseURL}/7Vh2DdqwN5fYQLQrPszFofwoJjs.jpg`, rating: 8 },
      { id: 'Nightmare at 30,000 Feet', url: `${baseURL}/7Vh2DdqwN5fYQLQrPszFofwoJjs.jpg`, rating: 7 },
      { id: 'Replay', url: `${baseURL}/7Vh2DdqwN5fYQLQrPszFofwoJjs.jpg`, rating: 8 },
      { id: 'A Traveler', url: `${baseURL}/7Vh2DdqwN5fYQLQrPszFofwoJjs.jpg`, rating: 7 },
      { id: 'The Wunderkind', url: `${baseURL}/7Vh2DdqwN5fYQLQrPszFofwoJjs.jpg`, rating: 7 },
      { id: 'Six Degrees of Freedom', url: `${baseURL}/7Vh2DdqwN5fYQLQrPszFofwoJjs.jpg`, rating: 8 },
      { id: 'Not All Men', url: `${baseURL}/7Vh2DdqwN5fYQLQrPszFofwoJjs.jpg`, rating: 9 },
      { id: 'Point of Origin', url: `${baseURL}/7Vh2DdqwN5fYQLQrPszFofwoJjs.jpg`, rating: 7 },
      { id: 'The Blue Scorpion', url: `${baseURL}/7Vh2DdqwN5fYQLQrPszFofwoJjs.jpg`, rating: 8 },
      { id: 'Blurryman', url: `${baseURL}/7Vh2DdqwN5fYQLQrPszFofwoJjs.jpg`, rating: 6 },
    ],
  },
  {
    id: 'The Umbrella Academy',
    url: `${baseURL}/qhcwrnnCnN8NE1N6XXKHFmveJR9.jpg`,
    rating: 8,
  },
  // MARK: TWD
  {
    id: 'The Walking Dead',
    url: `${baseURL}/4Rq7INXiCXGXrZl6zfsnpuRjWko.jpg`,
    subItems: [
      { id: 'The Walking Dead', url: `${baseURL}/yff28MtQ52vrngK5aM3DtnArwCr.jpg`, rating: 8 },
      { id: 'The Walking Dead: The Ones Who Live', url: `${baseURL}/glsSEchiMDbaNAhzDYhRsQj3DON.jpg`, rating: 9 },
    ],
  },
  // MARK: TRUE DETECTIVE
  {
    id: 'True Detective',
    url: `${baseURL}/4t69U5WlWYlLippHH6RMWCLxqfV.jpg`,
    subItems: [
      { id: 'Season 1', url: `${baseURL}/u9gL6EP9aTL439a2xrPu1guRD7c.jpg`, rating: 10 },
      { id: 'Season 2', url: `${baseURL}/1LkvGRXP9onB1sRMIWVZy9cDXme.jpg`, rating: 4 },
      { id: 'Season 3', url: `${baseURL}/fYSWGcyTlBSmZuYy7zFeGxRM2yT.jpg`, rating: 7 },
      { id: 'True Detective: Night Country', prefix: 'Night Country', url: `${baseURL}/cuV2O5ZyDLHSOWzg3nLVljp1ubw.jpg`, rating: 7 },
    ],
  },
  {
    id: 'Video Game High School',
    url: `${baseURL}/bTmfH8JF8GISz4XrZvrwt5aXrF0.jpg`,
    rating: 9,
  },
];
