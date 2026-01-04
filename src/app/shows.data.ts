export interface Show {
  id: string;
  url: string;
  rating?: number;
  subItems?: SubItem[];
}

export interface SubItem {
  id: string;
  url: string;
  rating: number;
  prefix?: string; // Used to display a prefix above the sub item in the carousel
}

const w = 400;
const baseURL = `https://image.tmdb.org/t/p/w${w}`;
const tumblrURL  = `https://image.tmdb.org/t/p/w${w}`;

export const shows: Show[] = [
  { id: '13 Reasons Why Season 1', url: `${baseURL}/kTzJ5PrPTZVjLoKeiiShl5Z8Owf.jpg`, rating: 9 }, 
  { id: 'Adolescence', url: `${baseURL}/tDHWWReefmOOjBCJZUck8cNwssk.jpg`, rating: 9 }, 
  { id: 'Alice In Borderland', url: `${baseURL}/2iUyLK0QyTI6VlXOp3SZbBeR7UW.jpg`, rating: 0 }, 
  { id: 'Arcane', url: `${baseURL}/b2PlJsBGAU4NvqyBfFDdK3HXnL7.jpg`, rating: 9 }, 
  { id: 'Avatar: The Last Airbender', url: `${baseURL}/v2vn1coUMPKw0GI1KGC5J4IXtqp.jpg`, rating: 7 }, 
  { id: 'Baby Reindeer', url: `${baseURL}/tN9OcbkAOPwHSr1sgMornZtQZBx.jpg`, rating: 8 }, 
  // MARK: WW2 Trilogy
  { 
    id: 'WW2 Trilogy', 
    url: '',
    subItems: [
      { id: 'Band Of Brothers', url: `${baseURL}/8JMXquNmdMUy2n2RgW8gfOM0O3l.jpg`, rating: 8 }, 
      { id: 'The Pacific', url: `${baseURL}/1SsuFZalrkfbBBWmMRjVNhbWpO3.jpg`, rating: 6 },
      { id: 'Masters Of The Air', url: `${baseURL}/rSAmgcoA74371rplbqM27yVsd3y.jpg`, rating: 0 }, 
    ]
  },
  { id: 'BEEF', url: `${baseURL}/4b4v7RnPhNyPEaVGFarEuo74r8W.jpg`, rating: 7 }, 
  { id: 'Black Bird', url: `${baseURL}/79M2yNSmkh4CCMrWNV6b2xvIeNn.jpg`, rating: 8 },
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
      { id: 'Be Right Back', url: `${baseURL}/ssGyFkTGaj5LDYrFlfnnv9hUmhe.jpg`, rating: 5 },
      { id: 'White Bear', url: `${baseURL}/97XqLjCKwRh0vHVjmn6rlotYJnE.jpg`, rating: 9 },
      { id: 'The Waldo Moment', url: `${baseURL}/ssGyFkTGaj5LDYrFlfnnv9hUmhe.jpg`, rating: 7 },
      // Season 3
      { id: 'Nosedive', url: `${baseURL}/1sh0AysG4yXrdc1djvAQpjHjCoC.jpg`, rating: 8 },
      { id: 'Playtest', url: `${baseURL}/64PMbfan4ijg7hcDxPM51BV2B0A.jpg`, rating: 9 },
      { id: 'Shut Up and Dance', url: `${baseURL}/oTESNF5psI4ZCDspSXDVepHj7K8.jpg`, rating: 9 },
      { id: 'San Junipero', url: `${baseURL}/ssGyFkTGaj5LDYrFlfnnv9hUmhe.jpg`, rating: 10 },
      { id: 'Men Against Fire', url: `${baseURL}/9l3C6NAZXhgOT4OYRLZl95PfZMZ.jpg`, rating: 7 },
      { id: 'Hated in the Nation', url: `${baseURL}/ssGyFkTGaj5LDYrFlfnnv9hUmhe.jpg`, rating: 10 },
      // Season 4
      { id: 'USS Callister', url: `${baseURL}/1a0L2uglsOovQmhTQtu2VHvb98Z.jpg`, rating: 10 },
      { id: 'Arkangel', url: `${baseURL}/7VSDhqNXaK55xEGRvJDs0iTOD6L.jpg`, rating: 8 },
      { id: 'Crocodile', url: `${baseURL}/zlxFLlwcA0x0GFI9doXEHvc0ZvF.jpg`, rating: 8 },
      { id: 'Hang the DJ', url: `${baseURL}/nHiylk2WJTl4wsf8ovsDtsGWxoV.jpg`, rating: 8 },
      { id: 'Metalhead', url: `${baseURL}/ymjCnzTuu83kyAvXMe5DBSRjRr0.jpg`, rating: 5 },
      { id: 'Black Museum', url: `${baseURL}/hMEGFxOM1G9A0Y4f18tFR8KBJBG.jpg`, rating: 9 },
      // Season 5
      { id: 'Striking Vipers', url: `${baseURL}/tm0kBhbsQiww8VnJnRGe7pavkt3.jpg`, rating: 6 },
      { id: 'Smithereens', url: `${baseURL}/8i7xDwwDyyKXyIryKZPXqjHovBs.jpg`, rating: 7 },
      { id: 'Rachel, Jack and Ashley Too', url: `${baseURL}/fAEUG5spzCwPU0JaqESknp2A8mU.jpg`, rating: 5 },
      // Season 6
      { id: 'Joan Is Awful', url: `${baseURL}/kb3GO7AJAukOIfjFCdSVcjUVWnK.jpg`, rating: 8 },
      { id: 'Loch Henry', url: `${baseURL}/h9275pcd2gvop2qCeANL9EyTHET.jpg`, rating: 9 },
      { id: 'Beyond The Sea', url: `${baseURL}/m5ILo0BfwAnLGhFuzPxKlcUzoB0.jpg`, rating: 7 },
      { id: 'Mazey Day', url: `${baseURL}/3fQcHtdmARBVnT8djV53jtGUIUU.jpg`, rating: 8 },
      { id: 'Demon 79', url: `${baseURL}/iPMcM7hvaN3mrbBYlU70h3mFG8q.jpg`, rating: 8 },
      // Season 7
      { id: 'Common People',  url: `${baseURL}/xM7gJYnfPNWbOa6BYyRcmAiYXSM.jpg`, rating: 9 },
      { id: 'Bête Noire', url: `${baseURL}/5KeVSvfiLbs8dZMzZAUdjlWQf5t.jpg`, rating: 9 },
      { id: 'Hotel Reverie', url: `${baseURL}/gyLCvYSSNisHresFItp0aS4alFp.jpg`, rating: 8 },
      { id: 'Plaything', url: `${baseURL}/39TCU9SGvRlRKdQR2Mdm96PYdQZ.jpg`, rating: 9 },
      { id: 'Eulogy', url: `${baseURL}/mFqwZIlZrjYO0J9eDmfT1nQfwnQ.jpg`, rating: 10 },
      { id: 'USS Callister: Into Infinity', url: `${baseURL}/dzc3DUC76Uw5tGtLCwN1u6ooObY.jpg`, rating: 8 },
      // Specials
      { id: 'Black Mirror: White Christmas', url: `${baseURL}/o17soyXVfLqikV6FTyqIuPHAr58.jpg`, rating: 10 },
      { id: 'Black Mirror: Bandersnatch', url: `${baseURL}/fR0VZ0VE598zl1lrYf7IfBqEwQ2.jpg`, rating: 7 },
    ],
  },
  { id: 'Bodies', url: `${baseURL}/qWX71nLvoLsBNPEjddZMC75lq6I.jpg`, rating: 8 }, 
  { id: 'Breaking Bad', url: `${baseURL}/3ZMOKFDA3fPLlIgFnrZLYLXGoiD.jpg`, rating: 6 }, 
  { id: 'Camera Café', url: `${baseURL}/vmdCodGh2nUPRDBQbIVsxGaIMyK.jpg`, rating: 7 }, 
  { id: 'Chernobyl', url: `${baseURL}/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg`, rating: 9 }, 
  { id: 'Devs', url: `${baseURL}/f6Mfzu3RdCBaVQXME6tvlf7cZbv.jpg`, rating: 7 }, 
  { id: 'Evil Genius', url: `${baseURL}/rXaq7vl7sXynXFBVLPrNzj6CGUp.jpg`, rating: 5 },
  // MARK: FARGO
  {
    id: 'Fargo',
    url: `${baseURL}/hFkdib1m2sfrTRYzcSqAc215kRz.jpg`,
    subItems: [
      { id: 'Season 1', url: `${baseURL}/sYCaM1Aq7DR8GdJHMkcSWl0NHh9.jpg`, rating: 9 },
      { id: 'Season 2', url: `${baseURL}/ww5ec8tSMhhMDwRg2gWGIx4imrf.jpg`, rating: 10 },
      { id: 'Season 3', url: `${baseURL}/dYHoNzcpQXzU2qBMZYbyOnrcuvi.jpg`, rating: 6 },
      { id: 'Season 4', url: `${baseURL}/zLhsNgyby6jqlrSOcrU2TWXm7yB.jpg`, rating: 8 },
      { id: 'Season 5', url: `${baseURL}/7ADSODABMUGW181hhbwU5zn9S7F.jpg`, rating: 8 },
    ],
  },
  // MARK: GOOSEBUMPS
  {
    id: 'Goosebumps',
    url: '',
    subItems: [
      {
        id: 'Goosebumps',
        url: `${baseURL}/l378JaD4xHnauo8q2TnClvfsIlj.jpg`,
        rating: 9 },
      {
        id: 'Goosebumps: The Vanishing',
        url: `${baseURL}/ajghauMTZ4RKVeISDUzxcMWjXnI.jpg`,
        rating: 8 },
    ],
  },
  // MARK: CABINET
  {
    id: 'Guillermo del Toro\'s Cabinet of Curiosities',
    url: `${baseURL}/3pl9u0ZeUUQdAqA7lfvusyfu1kh.jpg`,
    subItems: [
      { id: 'Lot 36', url: `${baseURL}/wKqiQumz8vRyJqy2IKA89yUqM6k.jpg`, rating: 9 },
      { id: 'Graveyard Rats', url: `${baseURL}/q6qol8kabEXsqdcmxOJpcN5ES4I.jpg`, rating: 6 },
      { id: 'The Autopsy', url: `${baseURL}/w8YKY5xxrCUpiIZC0KHS9IvRxb5.jpg`, rating: 8 },
      { id: 'The Outside', url: `${baseURL}/9cxMWF0RRUVUEYEq6SnszSkIlJO.jpg`, rating: 7 },
      { id: 'Pickman\'s Model', url: `${baseURL}/pbNCONhfMxwYbqd7P5tCCiYljyn.jpg`, rating: 7 },
      { id: 'Dreams in the Witch House', url: `${baseURL}/6U0cggStrF6lJjQEj8ki1vfMqJR.jpg`, rating: 6 },
      { id: 'The Viewing', url: `${baseURL}/gSoYSKSQ4XSKnUB0lZwaRHwEMRg.jpg`, rating: 7 },
      { id: 'The Murmuring', url: `${baseURL}/yN8yNys3GqdrijZ7nZaSOMnHaTO.jpg`, rating: 6 },
    ],
  },
  // MARK: HEROES
  {
    id: 'Heroes',
    url: '',
    subItems: [
      { id: 'Heroes', url: `${baseURL}/7Cn1Sj5yipu7tBX14BbaXuBHbL1.jpg`, rating: 8 },
      { id: 'Heroes Reborn', url: `${baseURL}/bHSkrlwjJgHq8Aa6AdDJvWuSI2X.jpg`, rating: 6 },
      { id: 'Heroes Reborn: Dark Matters', url: `${baseURL}/fixaFo6VbICZEqdHfXsJdLOBqBi.jpg`, rating: 7 },
    ],
  },
  { id: 'Into the Badlands', url: `${baseURL}/kwZZWOm5mpKvt5Yt9fMbsl0taOf.jpg`, rating: 8 }, 
  { id: 'Kaleidoscope', url: `${baseURL}/9rmE7IEUwdNBRy8XHBu1j82BqnU.jpg`, rating: 7 }, 
  { id: 'La Palma', url: `${baseURL}/2zehV5eBl6QTPFss6wuDK4lzR4i.jpg`, rating: 9 }, 
  { id: 'Legion', url: `${baseURL}/d6T86JYMW4sSLRmNfdtFilvugOv.jpg`, rating: 7 }, 
  { id: 'Lesson In Chemestry', url: `${baseURL}/tCPIf5f6jUIr8KDMWsfaXwXW0kl.jpg`, rating: 9 }, 
  { id: 'Locke & Key', url: `${baseURL}/zuxGfRKziGHPogipnEXXykdDmyT.jpg`, rating: 8 }, 
  { id: 'Lost', url: `${baseURL}/rSPXRV2TD2LlU26QyDSS9uYCnGb.jpg`, rating: 8 },
  // MARK: LD&R
  {
    id: 'Love, Death & Robots',
    url: `${baseURL}/cG6lqN82R9HeiM2w4Yy63aJ83qc.jpg`,
    subItems: [
      // Season 1
      { id: 'Sonnie\'s Edge', url: `${baseURL}/qgqj0lNZ8mighfj8bCyx44ulJsI.jpg`, rating: 9 },
      { id: 'Three Robots', url: `${baseURL}/zC25FBaMbimIS0QYHddrvJIsQ0y.jpg`, rating: 6 },
      { id: 'The Witness', url: `${baseURL}/cls82CWOAhEZB3HMpfkVLZNXTik.jpg`, rating: 10 },
      { id: 'Suits', url: `${baseURL}/oirU0A0Zcisjbjob3VPyUkvyvIt.jpg`, rating: 8 },
      { id: 'Sucker of Souls', url: `${baseURL}/pdlDA2UT9PZtzV0oGQ9jLs4b2BX.jpg`, rating: 8 },
      { id: 'When the Yogurt Took Over', url: `${baseURL}/aRbjOwtU2cwOf09GqJAVDSyQQAE.jpg`, rating: 6 },
      { id: 'Beyond the Aquila Rift', url: `${baseURL}/dMuUAIwnzLZvnUIiEBhPfjvMn6l.jpg`, rating: 10 },
      { id: 'Good Hunting', url: `${baseURL}/5hPosd5yld0HHS45QvZOpbR4OfO.jpg`, rating: 9 },
      { id: 'The Dump', url: `${baseURL}/4qNsbt88O38K4fxWdTsonor49bK.jpg`, rating: 7 },
      { id: 'Shape-Shifters', url: `${baseURL}/fnWPZ4eJQlTrKhGyMlwUaSn9pTw.jpg`, rating: 8 },
      { id: 'Helping Hand', url: `${baseURL}/x1CBEZUwKO8wc3Z2W7PTjAFGkhr.jpg`, rating: 8 },
      { id: 'Fish Night', url: `${baseURL}/wuAwUUqmJGQujqFCmoexM8F50uF.jpg`, rating: 10 },
      { id: 'Lucky 13', url: `${baseURL}/gubgAJ0FlpGoOuPPmUNPKc1ZddH.jpg`, rating: 8 },
      { id: 'Zima Blue', url: `${baseURL}/4jAXttZ2hlrzdC8fmQcv7Ctc2tz.jpg`, rating: 6 },
      { id: 'Blindspot', url: `${baseURL}/7IFffDBwMAPGrvBY8aJh6SPliso.jpg`, rating: 7 },
      { id: 'Ice Age', url: `${baseURL}/skce9ZIYu9OZR0tbTmbv8NDgAf4.jpg`, rating: 8 },
      { id: 'Alternate Histories', url: `${baseURL}/dYECiDXfeGIQohX722AfTXP2G15.jpg`, rating: 5 },
      { id: 'The Secret War', url: `${baseURL}/oFDhMz3W5jRvHsALSnDcIq7tqXE.jpg`, rating: 10 },
      // Season 2
      { id: 'Automated Customer Support', url: `${baseURL}/maxhu2EhK7oCwxexeGI3rCuLOJW.jpg`, rating: 8 },
      { id: 'Ice', url: `${baseURL}/maxhu2EhK7oCwxexeGI3rCuLOJW.jpg`, rating: 8 },
      { id: 'Pop Squad', url: `${baseURL}/maxhu2EhK7oCwxexeGI3rCuLOJW.jpg`, rating: 10 },
      { id: 'Snow in the Desert', url: `${baseURL}/maxhu2EhK7oCwxexeGI3rCuLOJW.jpg`, rating: 10 },
      { id: 'The Tall Grass', url: `${baseURL}/maxhu2EhK7oCwxexeGI3rCuLOJW.jpg`, rating: 8 },
      { id: 'The Drowned Giant', url: `${baseURL}/maxhu2EhK7oCwxexeGI3rCuLOJW.jpg`, rating: 7 },
      { id: 'All Through the House', url: `${baseURL}/maxhu2EhK7oCwxexeGI3rCuLOJW.jpg`, rating: 7 },
      { id: 'Life Hutch', url: `${baseURL}/maxhu2EhK7oCwxexeGI3rCuLOJW.jpg`, rating: 7 },
      // Season 3
      { id: 'Three Robots: Exit Strategies', url: `${baseURL}/zAZAP2jVvCIhHmxj03LTsnLQ3Jq.jpg`, rating: 7 },
      { id: 'Bad Travelling', url: `${baseURL}/bZhGP0mB8GbsTSs5oS2WXNu7eec.jpg`, rating: 8 },
      { id: 'The Very Pulse of the Machine', url: `${baseURL}/cRiDlzzZC5lL7fvImuSjs04SUIJ.jpg`, rating: 8 },
      { id: 'Night of the Mini Dead', url: `${baseURL}/cRiDlzzZC5lL7fvImuSjs04SUIJ.jpg`, rating: 10 },
      { id: 'Kill Team Kill', url: `${baseURL}/cRiDlzzZC5lL7fvImuSjs04SUIJ.jpg`, rating: 8 },
      { id: 'Swarm', url: `${baseURL}/cRiDlzzZC5lL7fvImuSjs04SUIJ.jpg`, rating: 7 },
      { id: 'Mason\'s Rats', url: `${baseURL}/cRiDlzzZC5lL7fvImuSjs04SUIJ.jpg`, rating: 8 },
      { id: 'In Vaulted Halls Entombed', url: `${baseURL}/cRiDlzzZC5lL7fvImuSjs04SUIJ.jpg`, rating: 9 },
      { id: 'Jibaro', url: `${baseURL}/nWMXMNvVy5DEgFpbUCvcuNK35oV.jpg`, rating: 9 },
      // Season 4
      { id: 'Can\'t Stop', url: `${baseURL}/ldyN0McqaRlcbdDZN8HWGEFEiWF.jpg`, rating: 7 },
      { id: 'Close Encounters of the Mini Kind', url: `${baseURL}/ldyN0McqaRlcbdDZN8HWGEFEiWF.jpg`, rating: 8 },
      { id: 'Spider Rose', url: `${baseURL}/ldyN0McqaRlcbdDZN8HWGEFEiWF.jpg`, rating: 8 },
      { id: '400 Boys', url: `${baseURL}/ldyN0McqaRlcbdDZN8HWGEFEiWF.jpg`, rating: 7 },
      { id: 'The Other Large Thing', url: `${baseURL}/ldyN0McqaRlcbdDZN8HWGEFEiWF.jpg`, rating: 8 },
      { id: 'Golgotha', url: `${baseURL}/ldyN0McqaRlcbdDZN8HWGEFEiWF.jpg`, rating: 7 },
      { id: 'The Screaming of the Tyrannosaur', url: `${baseURL}/ldyN0McqaRlcbdDZN8HWGEFEiWF.jpg`, rating: 10 },
      { id: 'How Zeke Got Religion', url: `${baseURL}/ldyN0McqaRlcbdDZN8HWGEFEiWF.jpg`, rating: 9 },
      { id: 'Smart Appliances, Stupid Owners', url: `${baseURL}/ldyN0McqaRlcbdDZN8HWGEFEiWF.jpg`, rating: 9 },
      { id: 'For He Can Creep', url: `${baseURL}/ldyN0McqaRlcbdDZN8HWGEFEiWF.jpg`, rating: 10 }

    ],

  },
  { id: 'Maniac', url: `${baseURL}/kCNl4QPstAqChFD0NnLpbDFG8ul.jpg`, rating: 5 },
  { id: 'Mare Of Easttown', url: `${baseURL}/78aK4Msbr22A5PGa6PZV0pAvdwf.jpg`, rating: 9 }, 
  { id: 'Misfits', url: `${baseURL}/1yjmRIp8A92FlAw5JpouQ50ATUA.jpg`, rating: 8 }, 
  { id: 'Moon Knight', url: `${baseURL}/9T4e6kA8tVtIK9GZ1Cy1QMvK9js.jpg`, rating: 8 },
  // MARK: MONSTER
  {
    id: 'Monster',
    url: '',
    subItems: [
      { id: 'The Jeffrey Dahmer Story', url: `${baseURL}/f2PVrphK0u81ES256lw3oAZuF3x.jpg`, rating: 8 },
      { id: 'The Lyle & Erik Menendez Story', url: `${baseURL}/x9YC2rpXHUFMqI1hCekKDm9UE4w.jpg`, rating: 8 },
      { id: 'The Ed Gein Story', url: `${baseURL}/iDHzRALtZCzHVmx7uyjTTKvMAPB.jpg`, rating: 9 }
    ]
  }, 
  { id: 'Mr. Robot', url: `${baseURL}/5yaTYdq9xZdZnYWSbdz2yhkMNdA.jpg`, rating: 7 }, 
  { id: 'Ms. Marvel', url: `${baseURL}/3HWWh92kZbD7odwJX7nKmXNZsYo.jpg`, rating: 6 }, 
  { id: 'Neverwhere', url: `${baseURL}/vrVbb6DanOxuhlIH8TQ1s67dQ6P.jpg`, rating: 5 }, 
  { id: 'Oz', url: `${baseURL}/tS6P1LtTThVGhnncYttQ1TSLupd.jpg`, rating: 9 }, 
  { id: 'Parallèles', url: `${baseURL}/o259EJfN0tQl7smNXs7Rpz4t8H0.jpg`, rating: 9 }, 
  // MARK: PKD
  {
    id: 'Philip K. Dick\'s Electric Dreams',
    url: `${baseURL}/tyaNrGepu4HbkjLFkK6vgua1vgn.jpg`,
    subItems: [
      { id: 'Real Life', url: `${baseURL}/xyxNdRjpm1IcEFjmWdzU0Y2x9fC.jpg`, rating: 9 },
      { id: 'Autofac', url: `${baseURL}/xyxNdRjpm1IcEFjmWdzU0Y2x9fC.jpg`, rating: 8 },
      { id: 'Human Is', url: `${baseURL}/xyxNdRjpm1IcEFjmWdzU0Y2x9fC.jpg`, rating: 8 },
      { id: 'Crazy Diamond', url: `${baseURL}/xyxNdRjpm1IcEFjmWdzU0Y2x9fC.jpg`, rating: 6 },
      { id: 'The Hood Maker', url: `${baseURL}/xyxNdRjpm1IcEFjmWdzU0Y2x9fC.jpg`, rating: 9 },
      { id: 'Safe & Sound', url: `${baseURL}/xyxNdRjpm1IcEFjmWdzU0Y2x9fC.jpg`, rating: 9 },
      { id: 'The Father Thing', url: `${baseURL}/xyxNdRjpm1IcEFjmWdzU0Y2x9fC.jpg`, rating: 8 },
      { id: 'Impossible Planet', url: `${baseURL}/xyxNdRjpm1IcEFjmWdzU0Y2x9fC.jpg`, rating: 9 },
      { id: 'The Commuter', url: `${baseURL}/xyxNdRjpm1IcEFjmWdzU0Y2x9fC.jpg`, rating: 8 },
      { id: 'Kill All Others', url: `${baseURL}/xyxNdRjpm1IcEFjmWdzU0Y2x9fC.jpg`, rating: 7 },
    ],
  },
  { id: 'Romanzo Criminale', url: `${baseURL}/cbx0rsTG9K5Sv8kQFyaHtoc9JF2.jpg`, rating: 10 },
  // MARK: SECRET LEVEL
  {
    id: 'Secret Level',
    url: `${baseURL}/uRNVZNfDeQmbjdM8UHf0mmEzsgl.jpg`,
    subItems: [
      { id: 'Dungeons & Dragons: The Queen\'s Cradle', url: `${baseURL}/pJBOXZ5lrh5l64RzRVXi6wqDYVx.jpg`, rating: 8 },
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
  { id: 'Sense8',url: `${baseURL}/re2aPwo7XRUTLa7XwOyExsaWL3R.jpg`, rating: 10 },
  { id: 'Sharp Objects', url: `${baseURL}/1SGovj2qDdkJexvhFiXllj9EYfu.jpg`, rating: 7 },
  { id: 'Sherlock',url: `${baseURL}/czzJiwfOJVDQKddRidHkQ2lw4as.jpg`, rating: 9 },
  { id: 'Sound Of Creation', url: `${baseURL}/gBLL87ZMeaanqtrB7Eca7cVxtUA.jpg`, rating: 0 },
  { id: 'Squid Game', url: `${baseURL}/fRKEvCCELSZwPN5jw3VqvRDnLDZ.jpg`, rating: 8 },
  { id: 'Stranger Things',url: `${baseURL}/uKYUR8GPkKRCksczYDJb3pwZauo.jpg`, rating: 9 },
  { id: 'Tales From The Loop', url: `${baseURL}/no7WuiGWQdmaHlW7PWDsJ5W9B9e.jpg`, rating: 0 },
  { id: 'The 100',url: `${baseURL}/wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg`, rating: 8 },
  { id: 'The Act', url: `${baseURL}/uegpHsJP6AMQOvcGSTu7ytj2xCT.jpg`, rating: 0 },
  { id: 'The Breakthrough', url: `${baseURL}/ZOr8cJQiwqgO1GTdGPQJxZ6O1D.jpg`, rating: 9 },
  { id: 'The End Of The F***ing World',url: `${baseURL}/fMnNMaWa6yQJAEGtlN4uADmVsX.jpg`, rating: 7 },
  { id: 'The Fall Of The House of Usher', url: `${baseURL}/aFX5bdLKVCxFEKTwB1yLh6MCpsX.jpg`, rating: 7 },
  // MARK: THE HAUNTING
  {
    id: 'The Haunting',
    url: '',
    subItems: [
      { id: 'The Haunting Of Hill House', url: `${baseURL}/7Q2yog7gESEX8FFzFh4pcxRwM1S.jpg`, rating: 0 },
      { id: 'The Haunting Of Bly Manor', url: `${baseURL}/vIXQ8UymmQ7zJEPrKJP3s3fSbhR.jpg`, rating: 0 },
    ]
  }, 
  { id: 'The Fall Of The House of Usher', url: `${baseURL}/aFX5bdLKVCxFEKTwB1yLh6MCpsX.jpg`, rating: 7 },
  { id: 'The Magicians',url: `${baseURL}/d3Q4yFK3D3NOWzYRgJdsxYpZdH0.jpg`, rating: 8 },
  { id: 'The Mentalist',url: `${baseURL}/wHBpu72EW1oUYwDSaJMD46sC4nG.jpg`, rating: 8 },
  { id: 'The Night Of', url: `${baseURL}/q13XJHdnsmxQL9rXRcnNDrZGHjO.jpg`, rating: 9 },
  { id: 'The Queen\'s Gambit',url: `${baseURL}/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg`, rating: 10 },
  { id: 'The Silent Sea',url: `${baseURL}/fFT0IgqtCOks4munDTxQwkvNJkd.jpg`, rating: 7 },
  { id: 'The Twelve', url: `${baseURL}/qn4hUvR6aYm9A52vO87q3Q7u1pU.jpg`, rating: 0 },
  // MARK: THE TWILIGHT ZONE
  {
    id: 'The Twilight Zone',
    url: `${baseURL}/4gzrxZZkgrmUNOJSWXqLUEgPUeF.jpg`,
    subItems: [
      // Season 1
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
      // Season 2
      { id: 'Meet In The Middle', url: `${baseURL}/twpirU8fnVfMcPwfP6Xb4Djrwet.jpg`, rating: 8 },
      { id: 'Downtime', url: `${baseURL}/twpirU8fnVfMcPwfP6Xb4Djrwet.jpg`, rating: 9 },
      { id: 'The Who Of You', url: `${baseURL}/twpirU8fnVfMcPwfP6Xb4Djrwet.jpg`, rating: 10 },
      { id: 'Ovation', url: `${baseURL}/twpirU8fnVfMcPwfP6Xb4Djrwet.jpg`, rating: 8 },
      { id: 'Among the Untrodden', url: `${baseURL}/twpirU8fnVfMcPwfP6Xb4Djrwet.jpg`, rating: 8 },
      { id: '8', url: `${baseURL}/twpirU8fnVfMcPwfP6Xb4Djrwet.jpg`, rating: 7 },
      { id: 'A Human Face', url: `${baseURL}/twpirU8fnVfMcPwfP6Xb4Djrwet.jpg`, rating: 0 },
      { id: 'A Small Town', url: `${baseURL}/twpirU8fnVfMcPwfP6Xb4Djrwet.jpg`, rating: 0 },
      { id: 'Try, Try', url: `${baseURL}/twpirU8fnVfMcPwfP6Xb4Djrwet.jpg`, rating: 0 },
      { id: 'You Might Also Like', url: `${baseURL}/twpirU8fnVfMcPwfP6Xb4Djrwet.jpg`, rating: 0 }
    ],
  },
  { id: 'The Umbrella Academy', url: `${baseURL}/qhcwrnnCnN8NE1N6XXKHFmveJR9.jpg`, rating: 8 },
  // MARK: TWD
  {
    id: 'The Walking Dead',
    url: `${baseURL}/a093PCUdiTHXL6UH6X1kEPMZqon.jpg`,
    subItems: [
      { id: 'The Walking Dead', url: `${baseURL}/yff28MtQ52vrngK5aM3DtnArwCr.jpg`, rating: 8 },
      { id: 'The Walking Dead: The Ones Who Live', url: `${baseURL}/glsSEchiMDbaNAhzDYhRsQj3DON.jpg`, rating: 9 },
      { id: 'Tales Of The Walking Dead', url: `${baseURL}/zRMUHvTgQ79zteQafNI46Nd9XFm.jpg`, rating: 0 },
    ],
  },

  // MARK: TIME
  {
    id: 'Time',
    url: '',
    subItems: [
      { id: 'Time S01', url: `${baseURL}/nSxE6STKTRWb5XLNJgH6q2AKGas.jpg`, rating: 9 },
      { id: 'Time S02', url: `${baseURL}/lj2vzzPIcuN9Hil40vBwxOsjWuz.jpg`, rating: 8 },
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
  { id: 'Twin Peaks', url: `${baseURL}/kfGlKqHRukOib8PnNUlam8r5aLi.jpg`, rating: 8 },
  { id: 'Unbelievable', url: `${baseURL}/lLp80aDfjDTs87PfKmK1n1n9W9U.jpg`, rating: 9 }, 
  { id: 'Undone', url: `${baseURL}/ucUhydbM7DEHDhFPV3KhKRxJ51l.jpg`, rating: 0 },
  { id: 'Veleno', url: `${baseURL}/gcZmxFyeSYLFj3kotQetw66Tp0m.jpg`, rating: 0 },
  { id: 'Video Game High School', url: `${baseURL}/bTmfH8JF8GISz4XrZvrwt5aXrF0.jpg`, rating: 9 },
  { id: 'Watchmen', url: `${baseURL}/noStVK6Nw4k5X5F6IF8Ud72BA6L.jpg`, rating: 0 },
  { id: 'When They See Us', url: `${baseURL}/oPv3nNtkuc6EPEql5lgdOuQNHuG.jpg`, rating: 9 },
];
