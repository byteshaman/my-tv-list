export interface Show {
  id: string;
  pUrl: string;
  url?: string;
  rating?: number | null;
  subItems?: SubItem[];
  title?: string; // For shows without an english title
}

export interface SubItem extends Omit<Show, 'subItems' | 'title'> {
  prefix?: string; // Used to display a prefix above the sub item in the carousel
}

const w = 400;
const basePUrl = `https://image.tmdb.org/t/p/w${w}/`;
const baseUrl = `https://www.themoviedb.org/tv`;
const ext = `.jpg`;

export const shows: Show[] = [
  { id: '13 Reasons Why Season 1', url: `${baseUrl}/66788-13-reasons-why`, pUrl: `${basePUrl}kTzJ5PrPTZVjLoKeiiShl5Z8Owf${ext}`, rating: 9 },
  { id: 'Adolescence', url: `${baseUrl}/249042-adolescence`, pUrl: `${basePUrl}tDHWWReefmOOjBCJZUck8cNwssk${ext}`, rating: 9 },
  { id: 'Alice In Borderland (S1+S2)', url: `${baseUrl}/110316-alice-in-borderland`, pUrl: `${basePUrl}2iUyLK0QyTI6VlXOp3SZbBeR7UW${ext}`, rating: 8 },
  { id: 'All Of Us Are Dead', url: `${baseUrl}/99966-all-of-us-are-dead`, pUrl: `${basePUrl}z4IP8ZiKctB5U9brfKHYujYBUTD${ext}`, rating: null },
  { id: 'Arcane', url: `${baseUrl}/94605-arcane`, pUrl: `${basePUrl}b2PlJsBGAU4NvqyBfFDdK3HXnL7${ext}`, rating: 9 },
  { id: 'Avatar: The Last Airbender', url: `${baseUrl}/246-avatar-the-last-airbender`, pUrl: `${basePUrl}v2vn1coUMPKw0GI1KGC5J4IXtqp${ext}`, rating: 7 },
  { id: 'Baby Reindeer', url: `${baseUrl}/241259-baby-reindeer`, pUrl: `${basePUrl}tN9OcbkAOPwHSr1sgMornZtQZBx${ext}`, rating: 8 },
  // MARK: WW2 Trilogy
  {
    id: 'WW2 Trilogy',
    pUrl: '', subItems: [
      { id: 'Band Of Brothers', url: `${baseUrl}/4613-band-of-brothers`, pUrl: `${basePUrl}8JMXquNmdMUy2n2RgW8gfOM0O3l${ext}`, rating: 8 },
      { id: 'The Pacific', url: `${baseUrl}/16997-the-pacific`, pUrl: `${basePUrl}1SsuFZalrkfbBBWmMRjVNhbWpO3${ext}`, rating: 6 },
      { id: 'Masters Of The Air', url: `${baseUrl}/46518-masters-of-the-air`, pUrl: `${basePUrl}rSAmgcoA74371rplbqM27yVsd3y${ext}`, rating: null },
    ]
  },
  {
    id: 'BEEF',
    pUrl: '', subItems: [
      { id: 'BEEF S01', url: `${baseUrl}/154385-beef`, pUrl: `${basePUrl}4b4v7RnPhNyPEaVGFarEuo74r8W${ext}`, rating: 7 },
      { id: 'BEEF S02', url: `${baseUrl}/154385-beef`, pUrl: `${basePUrl}25ih0Xq2zWbxhhKxwhvswKYQyEr${ext}`, rating: null }
    ]
  },
  { id: 'Black Bird', url: `${baseUrl}/155537-black-bird`, pUrl: `${basePUrl}79M2yNSmkh4CCMrWNV6b2xvIeNn${ext}`, rating: 8 },
  // MARK: BM
  {
    id: 'Black Mirror',
    pUrl: `${basePUrl}5UaYsGZOFhjFDwQh6GuLjjA1WlF${ext}`,
    subItems: [
      // Season 1
      { id: 'The National Anthem', pUrl: `${basePUrl}6YuxcgdeAsSU6IUaZQ3VBsdtgg6${ext}`, rating: 6 },
      { id: 'Fifteen Million Merits', pUrl: `${basePUrl}pknSc3JOH4tHXWiesHL3XSWEwmm${ext}`, rating: 8 },
      { id: 'The Entire History of You', pUrl: `${basePUrl}yBaN8IBS0YFTeHG3O26ClJHShgH${ext}`, rating: 8 },
      // Season 2
      { id: 'Be Right Back', pUrl: `${basePUrl}ssGyFkTGaj5LDYrFlfnnv9hUmhe${ext}`, rating: 5 },
      { id: 'White Bear', pUrl: `${basePUrl}97XqLjCKwRh0vHVjmn6rlotYJnE${ext}`, rating: 9 },
      { id: 'The Waldo Moment', pUrl: `${basePUrl}ssGyFkTGaj5LDYrFlfnnv9hUmhe${ext}`, rating: 7 },
      // Season 3
      { id: 'Nosedive', pUrl: `${basePUrl}1sh0AysG4yXrdc1djvAQpjHjCoC${ext}`, rating: 8 },
      { id: 'Playtest', pUrl: `${basePUrl}64PMbfan4ijg7hcDxPM51BV2B0A${ext}`, rating: 9 },
      { id: 'Shut Up and Dance', pUrl: `${basePUrl}oTESNF5psI4ZCDspSXDVepHj7K8${ext}`, rating: 9 },
      { id: 'San Junipero', pUrl: `${basePUrl}ssGyFkTGaj5LDYrFlfnnv9hUmhe${ext}`, rating: 10 },
      { id: 'Men Against Fire', pUrl: `${basePUrl}9l3C6NAZXhgOT4OYRLZl95PfZMZ${ext}`, rating: 7 },
      { id: 'Hated in the Nation', pUrl: `${basePUrl}ssGyFkTGaj5LDYrFlfnnv9hUmhe${ext}`, rating: 10 },
      // Season 4
      { id: 'USS Callister', pUrl: `${basePUrl}1a0L2uglsOovQmhTQtu2VHvb98Z${ext}`, rating: 10 },
      { id: 'Arkangel', pUrl: `${basePUrl}7VSDhqNXaK55xEGRvJDs0iTOD6L${ext}`, rating: 8 },
      { id: 'Crocodile', pUrl: `${basePUrl}zlxFLlwcA0x0GFI9doXEHvc0ZvF${ext}`, rating: 8 },
      { id: 'Hang the DJ', pUrl: `${basePUrl}nHiylk2WJTl4wsf8ovsDtsGWxoV${ext}`, rating: 8 },
      { id: 'Metalhead', pUrl: `${basePUrl}ymjCnzTuu83kyAvXMe5DBSRjRr0${ext}`, rating: 5 },
      { id: 'Black Museum', pUrl: `${basePUrl}hMEGFxOM1G9A0Y4f18tFR8KBJBG${ext}`, rating: 9 },
      // Season 5
      { id: 'Striking Vipers', pUrl: `${basePUrl}tm0kBhbsQiww8VnJnRGe7pavkt3${ext}`, rating: 6 },
      { id: 'Smithereens', pUrl: `${basePUrl}8i7xDwwDyyKXyIryKZPXqjHovBs${ext}`, rating: 7 },
      { id: 'Rachel, Jack and Ashley Too', pUrl: `${basePUrl}fAEUG5spzCwPU0JaqESknp2A8mU${ext}`, rating: 5 },
      // Season 6
      { id: 'Joan Is Awful', pUrl: `${basePUrl}kb3GO7AJAukOIfjFCdSVcjUVWnK${ext}`, rating: 8 },
      { id: 'Loch Henry', pUrl: `${basePUrl}h9275pcd2gvop2qCeANL9EyTHET${ext}`, rating: 9 },
      { id: 'Beyond The Sea', pUrl: `${basePUrl}m5ILo0BfwAnLGhFuzPxKlcUzoB0${ext}`, rating: 7 },
      { id: 'Mazey Day', pUrl: `${basePUrl}3fQcHtdmARBVnT8djV53jtGUIUU${ext}`, rating: 8 },
      { id: 'Demon 79', pUrl: `${basePUrl}iPMcM7hvaN3mrbBYlU70h3mFG8q${ext}`, rating: 8 },
      // Season 7
      { id: 'Common People', pUrl: `${basePUrl}xM7gJYnfPNWbOa6BYyRcmAiYXSM${ext}`, rating: 9 },
      { id: 'Bête Noire', pUrl: `${basePUrl}5KeVSvfiLbs8dZMzZAUdjlWQf5t${ext}`, rating: 9 },
      { id: 'Hotel Reverie', pUrl: `${basePUrl}gyLCvYSSNisHresFItp0aS4alFp${ext}`, rating: 8 },
      { id: 'Plaything', pUrl: `${basePUrl}262RZJLyer3IvDyCohcqGmQ7unj${ext}`, rating: 9 },
      { id: 'Eulogy', pUrl: `${basePUrl}mFqwZIlZrjYO0J9eDmfT1nQfwnQ${ext}`, rating: 10 },
      { id: 'USS Callister: Into Infinity', pUrl: `${basePUrl}dzc3DUC76Uw5tGtLCwN1u6ooObY${ext}`, rating: 8 },
      // Specials
      { id: 'Black Mirror: White Christmas', pUrl: `${basePUrl}o17soyXVfLqikV6FTyqIuPHAr58${ext}`, rating: 10 },
      { id: 'Black Mirror: Bandersnatch', pUrl: `${basePUrl}fR0VZ0VE598zl1lrYf7IfBqEwQ2${ext}`, rating: 7 },
    ],
  },
  { id: 'Bodies', url: `${baseUrl}/233629-bodies`, pUrl: `${basePUrl}qWX71nLvoLsBNPEjddZMC75lq6I${ext}`, rating: 8 },
  { id: 'Breaking Bad', url: `${baseUrl}/1396-breaking-bad`, pUrl: `${basePUrl}3ZMOKFDA3fPLlIgFnrZLYLXGoiD${ext}`, rating: 6 },
  { id: 'Camera Café', url: `${baseUrl}/63809-camera-caf`, pUrl: `${basePUrl}vmdCodGh2nUPRDBQbIVsxGaIMyK${ext}`, rating: 7 },
  { id: 'Chernobyl', url: `${baseUrl}/87108-chernobyl`, pUrl: `${basePUrl}hlLXt2tOPT6RRnjiUmoxyG1LTFi${ext}`, rating: 9 },
  { id: 'Collateral', url: `${baseUrl}/76796-collateral`, pUrl: `${basePUrl}3ekqFDb0IbY7pJbL772TEs2GifX${ext}`, rating: 9 },
  { id: 'De Twaalft', title: 'The Twelve', url: `${baseUrl}/94551-de-twaalf`, pUrl: `${basePUrl}7wyC0zyZd4XymgDrAiPbSrcxgIB${ext}`, rating: 9 },
  { id: 'Defending Jacob', url: `${baseUrl}/87784-defending-jacob`, pUrl: `${basePUrl}JTmkzwSDRiS9nvSPwpDB9fmZj2${ext}`, rating: 9 },
  { id: 'Devil In Disguise: John Wayne Gacy', url: `${baseUrl}/257534-devil-in-disguise-john-wayne-gacy`, pUrl: `${basePUrl}vsXSxLYsAq0VsjWIMRpQGorjLjh${ext}`, rating: 8 },
  { id: 'Devs', url: `${baseUrl}/81349-devs`, pUrl: `${basePUrl}f6Mfzu3RdCBaVQXME6tvlf7cZbv${ext}`, rating: 6 },
  // MARK: DR. DEATH
  {
    id: 'Dr. Death', pUrl: '', subItems:
      [
        { id: 'Dr. Death S01', url: `${baseUrl}/93749-dr-death`, pUrl: `${basePUrl}b6Hhj0CriW2QySQtRM6TT4ACJEH${ext}`, rating: 9 },
        { id: 'Dr. Death S02', url: `${baseUrl}/93749-dr-death`, pUrl: `${basePUrl}pNnmxTSc2ixac4xk8T80wchec0r${ext}`, rating: null },
      ],
  },
  { id: 'Dr. House', url: `${baseUrl}/1408-house`, pUrl: `${basePUrl}zxujrD1DEW67i2GOZwDc3XsRFN3${ext}`, rating: 9 },
  { id: 'Efterforskningen', title: 'The Investigation', url: `${baseUrl}/110333-efterforskningen`, pUrl: `${basePUrl}d8oAZtdLXHcmRMhmn9vDbCs4YjM${ext}`, rating: 9 },
  { id: 'Escape At Dannemora', url: `${baseUrl}/72039-escape-at-dannemora`, pUrl: `${basePUrl}7q3jBXeqGuvAZnoMRRfKx4Su0v3${ext}`, rating: null },
  { id: 'Evil Genius', url: `${baseUrl}/79126-evil-genius`, pUrl: `${basePUrl}rXaq7vl7sXynXFBVLPrNzj6CGUp${ext}`, rating: 5 },
  // MARK: FARGO
  {
    id: 'Fargo',
    pUrl: `${basePUrl}hFkdib1m2sfrTRYzcSqAc215kRz${ext}`,
    subItems: [
      { id: 'Season 1', pUrl: `${basePUrl}sYCaM1Aq7DR8GdJHMkcSWl0NHh9${ext}`, rating: 9 },
      { id: 'Season 2', pUrl: `${basePUrl}ww5ec8tSMhhMDwRg2gWGIx4imrf${ext}`, rating: 10 },
      { id: 'Season 3', pUrl: `${basePUrl}dYHoNzcpQXzU2qBMZYbyOnrcuvi${ext}`, rating: 6 },
      { id: 'Season 4', pUrl: `${basePUrl}zLhsNgyby6jqlrSOcrU2TWXm7yB${ext}`, rating: 8 },
      { id: 'Season 5', pUrl: `${basePUrl}7ADSODABMUGW181hhbwU5zn9S7F${ext}`, rating: 8 },
    ],
  },
  { id: 'Five Days At Memorial', url: `${baseUrl}/108664-five-days-at-memorial`, pUrl: `${basePUrl}pX1jBUSHrqJS4ENqJzmoR4YUXwK${ext}`, rating: 9 },
  { id: 'Genombrottet', title: 'The Breakthrough', url: `${baseUrl}/279283-the-breakthrough`, pUrl: `${basePUrl}ujLDuCGz1M8l4Lbpdz8twe6e1Zb${ext}`, rating: 10 },
  // MARK: GOOSEBUMPS
  {
    id: 'Goosebumps',
    pUrl: '',
    subItems: [
      {
        id: 'Goosebumps',
        url: `${baseUrl}/157004-goosebumps`,
        pUrl: `${basePUrl}l378JaD4xHnauo8q2TnClvfsIlj${ext}`,
        rating: 9
      },
      {
        id: 'Goosebumps: The Vanishing',
        url: `${baseUrl}/157004-goosebumps`,
        pUrl: `${basePUrl}ajghauMTZ4RKVeISDUzxcMWjXnI${ext}`,
        rating: 8
      },
    ],
  },
  // MARK: CABINET
  {
    id: 'Guillermo del Toro\'s Cabinet of Curiosities',
    pUrl: `${basePUrl}3pl9u0ZeUUQdAqA7lfvusyfu1kh${ext}`,
    subItems: [
      { id: 'Lot 36', pUrl: `${basePUrl}wKqiQumz8vRyJqy2IKA89yUqM6k${ext}`, rating: 9 },
      { id: 'Graveyard Rats', pUrl: `${basePUrl}q6qol8kabEXsqdcmxOJpcN5ES4I${ext}`, rating: 6 },
      { id: 'The Autopsy', pUrl: `${basePUrl}w8YKY5xxrCUpiIZC0KHS9IvRxb5${ext}`, rating: 8 },
      { id: 'The Outside', pUrl: `${basePUrl}9cxMWF0RRUVUEYEq6SnszSkIlJO${ext}`, rating: 7 },
      { id: 'Pickman\'s Model', pUrl: `${basePUrl}pbNCONhfMxwYbqd7P5tCCiYljyn${ext}`, rating: 7 },
      { id: 'Dreams In The Witch House', pUrl: `${basePUrl}6U0cggStrF6lJjQEj8ki1vfMqJR${ext}`, rating: 6 },
      { id: 'The Viewing', pUrl: `${basePUrl}gSoYSKSQ4XSKnUB0lZwaRHwEMRg${ext}`, rating: 7 },
      { id: 'The Murmuring', pUrl: `${basePUrl}yN8yNys3GqdrijZ7nZaSOMnHaTO${ext}`, rating: 6 },
    ],
  },
  // MARK: HEROES
  {
    id: 'Heroes',
    pUrl: '',
    subItems: [
      { id: 'Heroes', url: `${baseUrl}/1639-heroes`, pUrl: `${basePUrl}7Cn1Sj5yipu7tBX14BbaXuBHbL1${ext}`, rating: 8 },
      { id: 'Heroes Reborn', url: `${baseUrl}/60858-heroes-reborn`, pUrl: `${basePUrl}bHSkrlwjJgHq8Aa6AdDJvWuSI2X${ext}`, rating: 6 },
      { id: 'Heroes Reborn: Dark Matters', url: `${baseUrl}/60858-heroes-reborn`, pUrl: `${basePUrl}fixaFo6VbICZEqdHfXsJdLOBqBi${ext}`, rating: 7 },
    ],
  },
  { id: 'Into The Badlands', url: `${baseUrl}/47450-into-the-badlands`, pUrl: `${basePUrl}kwZZWOm5mpKvt5Yt9fMbsl0taOf${ext}`, rating: 7 },
  { id: 'Kaleidoscope', url: `${baseUrl}/156902-kaleidoscope`, pUrl: `${basePUrl}9rmE7IEUwdNBRy8XHBu1j82BqnU${ext}`, rating: 7 },
  { id: 'Kastanjemanden', title: 'The Chestnut Man', url: `${baseUrl}/127865-kastanjemanden`, pUrl: `${basePUrl}wLZTY1apb8895dmj9QLHYRT51UZ${ext}`, rating: 8 },
  { id: 'La Palma', url: `${baseUrl}/242977-la-palma`, pUrl: `${basePUrl}2zehV5eBl6QTPFss6wuDK4lzR4i${ext}`, rating: 9 },
  { id: 'Legion', url: `${baseUrl}/67195-legion`, pUrl: `${basePUrl}d6T86JYMW4sSLRmNfdtFilvugOv${ext}`, rating: 7 },
  { id: 'Lesson In Chemestry', url: `${baseUrl}/117303-lessons-in-chemistry`, pUrl: `${basePUrl}tCPIf5f6jUIr8KDMWsfaXwXW0kl${ext}`, rating: 9 },
  { id: 'Locke & Key', url: `${baseUrl}/86423-locke-key`, pUrl: `${basePUrl}zuxGfRKziGHPogipnEXXykdDmyT${ext}`, rating: 8 },
  { id: 'Lord Of The Flies', url: `${baseUrl}/270572-lord-of-the-flies`, pUrl: `${basePUrl}zDi4uP2N3rRARLNykg7LsM6DOua${ext}`, rating: 8 },
  { id: 'Lost', url: `${baseUrl}/4607-lost`, pUrl: `${basePUrl}rSPXRV2TD2LlU26QyDSS9uYCnGb${ext}`, rating: 8 },
  // MARK: LD&R
  {
    id: 'Love, Death & Robots',
    pUrl: `${basePUrl}cG6lqN82R9HeiM2w4Yy63aJ83qc${ext}`,
    subItems: [
      // Season 1
      { id: 'Sonnie\'s Edge', pUrl: `${basePUrl}qgqj0lNZ8mighfj8bCyx44ulJsI${ext}`, rating: 9 },
      { id: 'Three Robots', pUrl: `${basePUrl}zC25FBaMbimIS0QYHddrvJIsQ0y${ext}`, rating: 6 },
      { id: 'The Witness', pUrl: `${basePUrl}cls82CWOAhEZB3HMpfkVLZNXTik${ext}`, rating: 10 },
      { id: 'Suits', pUrl: `${basePUrl}oirU0A0Zcisjbjob3VPyUkvyvIt${ext}`, rating: 8 },
      { id: 'Sucker of Souls', pUrl: `${basePUrl}pdlDA2UT9PZtzV0oGQ9jLs4b2BX${ext}`, rating: 8 },
      { id: 'When the Yogurt Took Over', pUrl: `${basePUrl}aRbjOwtU2cwOf09GqJAVDSyQQAE${ext}`, rating: 6 },
      { id: 'Beyond the Aquila Rift', pUrl: `${basePUrl}dMuUAIwnzLZvnUIiEBhPfjvMn6l${ext}`, rating: 10 },
      { id: 'Good Hunting', pUrl: `${basePUrl}5hPosd5yld0HHS45QvZOpbR4OfO${ext}`, rating: 9 },
      { id: 'The Dump', pUrl: `${basePUrl}4qNsbt88O38K4fxWdTsonor49bK${ext}`, rating: 7 },
      { id: 'Shape-Shifters', pUrl: `${basePUrl}fnWPZ4eJQlTrKhGyMlwUaSn9pTw${ext}`, rating: 8 },
      { id: 'Helping Hand', pUrl: `${basePUrl}x1CBEZUwKO8wc3Z2W7PTjAFGkhr${ext}`, rating: 8 },
      { id: 'Fish Night', pUrl: `${basePUrl}wuAwUUqmJGQujqFCmoexM8F50uF${ext}`, rating: 10 },
      { id: 'Lucky 13', pUrl: `${basePUrl}gubgAJ0FlpGoOuPPmUNPKc1ZddH${ext}`, rating: 8 },
      { id: 'Zima Blue', pUrl: `${basePUrl}4jAXttZ2hlrzdC8fmQcv7Ctc2tz${ext}`, rating: 6 },
      { id: 'Blindspot', pUrl: `${basePUrl}7IFffDBwMAPGrvBY8aJh6SPliso${ext}`, rating: 7 },
      { id: 'Ice Age', pUrl: `${basePUrl}skce9ZIYu9OZR0tbTmbv8NDgAf4${ext}`, rating: 8 },
      { id: 'Alternate Histories', pUrl: `${basePUrl}dYECiDXfeGIQohX722AfTXP2G15${ext}`, rating: 5 },
      { id: 'The Secret War', pUrl: `${basePUrl}oFDhMz3W5jRvHsALSnDcIq7tqXE${ext}`, rating: 10 },
      // Season 2
      { id: 'Automated Customer Support', pUrl: `${basePUrl}maxhu2EhK7oCwxexeGI3rCuLOJW${ext}`, rating: 8 },
      { id: 'Ice', pUrl: `${basePUrl}maxhu2EhK7oCwxexeGI3rCuLOJW${ext}`, rating: 8 },
      { id: 'Pop Squad', pUrl: `${basePUrl}maxhu2EhK7oCwxexeGI3rCuLOJW${ext}`, rating: 10 },
      { id: 'Snow in the Desert', pUrl: `${basePUrl}maxhu2EhK7oCwxexeGI3rCuLOJW${ext}`, rating: 10 },
      { id: 'The Tall Grass', pUrl: `${basePUrl}maxhu2EhK7oCwxexeGI3rCuLOJW${ext}`, rating: 8 },
      { id: 'The Drowned Giant', pUrl: `${basePUrl}maxhu2EhK7oCwxexeGI3rCuLOJW${ext}`, rating: 7 },
      { id: 'All Through the House', pUrl: `${basePUrl}maxhu2EhK7oCwxexeGI3rCuLOJW${ext}`, rating: 7 },
      { id: 'Life Hutch', pUrl: `${basePUrl}maxhu2EhK7oCwxexeGI3rCuLOJW${ext}`, rating: 7 },
      // Season 3
      { id: 'Three Robots: Exit Strategies', pUrl: `${basePUrl}zAZAP2jVvCIhHmxj03LTsnLQ3Jq${ext}`, rating: 7 },
      { id: 'Bad Travelling', pUrl: `${basePUrl}bZhGP0mB8GbsTSs5oS2WXNu7eec${ext}`, rating: 8 },
      { id: 'The Very Pulse of the Machine', pUrl: `${basePUrl}cRiDlzzZC5lL7fvImuSjs04SUIJ${ext}`, rating: 8 },
      { id: 'Night of the Mini Dead', pUrl: `${basePUrl}cRiDlzzZC5lL7fvImuSjs04SUIJ${ext}`, rating: 10 },
      { id: 'Kill Team Kill', pUrl: `${basePUrl}cRiDlzzZC5lL7fvImuSjs04SUIJ${ext}`, rating: 8 },
      { id: 'Swarm', pUrl: `${basePUrl}cRiDlzzZC5lL7fvImuSjs04SUIJ${ext}`, rating: 7 },
      { id: 'Mason\'s Rats', pUrl: `${basePUrl}cRiDlzzZC5lL7fvImuSjs04SUIJ${ext}`, rating: 8 },
      { id: 'In Vaulted Halls Entombed', pUrl: `${basePUrl}cRiDlzzZC5lL7fvImuSjs04SUIJ${ext}`, rating: 9 },
      { id: 'Jibaro', pUrl: `${basePUrl}nWMXMNvVy5DEgFpbUCvcuNK35oV${ext}`, rating: 9 },
      // Season 4
      { id: 'Can\'t Stop', pUrl: `${basePUrl}ldyN0McqaRlcbdDZN8HWGEFEiWF${ext}`, rating: 7 },
      { id: 'Close Encounters of the Mini Kind', pUrl: `${basePUrl}ldyN0McqaRlcbdDZN8HWGEFEiWF${ext}`, rating: 8 },
      { id: 'Spider Rose', pUrl: `${basePUrl}ldyN0McqaRlcbdDZN8HWGEFEiWF${ext}`, rating: 8 },
      { id: '400 Boys', pUrl: `${basePUrl}ldyN0McqaRlcbdDZN8HWGEFEiWF${ext}`, rating: 7 },
      { id: 'The Other Large Thing', pUrl: `${basePUrl}ldyN0McqaRlcbdDZN8HWGEFEiWF${ext}`, rating: 8 },
      { id: 'Golgotha', pUrl: `${basePUrl}ldyN0McqaRlcbdDZN8HWGEFEiWF${ext}`, rating: 7 },
      { id: 'The Screaming of the Tyrannosaur', pUrl: `${basePUrl}ldyN0McqaRlcbdDZN8HWGEFEiWF${ext}`, rating: 10 },
      { id: 'How Zeke Got Religion', pUrl: `${basePUrl}ldyN0McqaRlcbdDZN8HWGEFEiWF${ext}`, rating: 9 },
      { id: 'Smart Appliances, Stupid Owners', pUrl: `${basePUrl}ldyN0McqaRlcbdDZN8HWGEFEiWF${ext}`, rating: 9 },
      { id: 'For He Can Creep', pUrl: `${basePUrl}ldyN0McqaRlcbdDZN8HWGEFEiWF${ext}`, rating: 10 }

    ],

  },
  { id: 'Maniac', url: `${baseUrl}/73411-maniac`, pUrl: `${basePUrl}kCNl4QPstAqChFD0NnLpbDFG8ul${ext}`, rating: 5 },
  { id: 'Mare Of Easttown', url: `${baseUrl}/115004-mare-of-easttown`, pUrl: `${basePUrl}78aK4Msbr22A5PGa6PZV0pAvdwf${ext}`, rating: 9 },
  { id: 'Misfits', url: `${baseUrl}/31295-misfits`, pUrl: `${basePUrl}1yjmRIp8A92FlAw5JpouQ50ATUA${ext}`, rating: 8 },
  { id: 'Moon Knight', url: `${baseUrl}/92749-moon-knight`, pUrl: `${basePUrl}9T4e6kA8tVtIK9GZ1Cy1QMvK9js${ext}`, rating: 7 },
  // MARK: MONSTER
  {
    id: 'Monster',
    pUrl: '',
    subItems: [
      { id: 'The Jeffrey Dahmer Story', url: `${baseUrl}/113988-dahmer-monster-the-jeffrey-dahmer-story`, pUrl: `${basePUrl}f2PVrphK0u81ES256lw3oAZuF3x${ext}`, rating: 8 },
      { id: 'The Lyle & Erik Menendez Story', url: `${baseUrl}/225634-monsters-the-lyle-and-erik-menendez-story`, pUrl: `${basePUrl}x9YC2rpXHUFMqI1hCekKDm9UE4w${ext}`, rating: 8 },
      { id: 'The Ed Gein Story', url: `${baseUrl}/286801-monster-ed-gein`, pUrl: `${basePUrl}iDHzRALtZCzHVmx7uyjTTKvMAPB${ext}`, rating: 9 }
    ]
  },
  { id: 'Mr. Robot', url: `${baseUrl}/62560-mr-robot`, pUrl: `${basePUrl}5yaTYdq9xZdZnYWSbdz2yhkMNdA${ext}`, rating: 7 },
  { id: 'Ms. Marvel', url: `${baseUrl}/92782-ms-marvel`, pUrl: `${basePUrl}3HWWh92kZbD7odwJX7nKmXNZsYo${ext}`, rating: 6 },
  { id: 'Neverwhere', url: `${baseUrl}/13418-neverwhere`, pUrl: `${basePUrl}vrVbb6DanOxuhlIH8TQ1s67dQ6P${ext}`, rating: 5 },
  { id: 'Oz', url: `${baseUrl}/3322-oz`, pUrl: `${basePUrl}tS6P1LtTThVGhnncYttQ1TSLupd${ext}`, rating: 9 },
  { id: 'Parallèles', url: `${baseUrl}/118906-parallels`, pUrl: `${basePUrl}o259EJfN0tQl7smNXs7Rpz4t8H0${ext}`, rating: 9 },
  // MARK: PKD
  {
    id: 'Philip K. Dick\'s Electric Dreams',
    pUrl: `${basePUrl}tyaNrGepu4HbkjLFkK6vgua1vgn${ext}`,
    subItems: [
      { id: 'Real Life', pUrl: `${basePUrl}xyxNdRjpm1IcEFjmWdzU0Y2x9fC${ext}`, rating: 9 },
      { id: 'Autofac', pUrl: `${basePUrl}xyxNdRjpm1IcEFjmWdzU0Y2x9fC${ext}`, rating: 8 },
      { id: 'Human Is', pUrl: `${basePUrl}xyxNdRjpm1IcEFjmWdzU0Y2x9fC${ext}`, rating: 8 },
      { id: 'Crazy Diamond', pUrl: `${basePUrl}xyxNdRjpm1IcEFjmWdzU0Y2x9fC${ext}`, rating: 6 },
      { id: 'The Hood Maker', pUrl: `${basePUrl}xyxNdRjpm1IcEFjmWdzU0Y2x9fC${ext}`, rating: 9 },
      { id: 'Safe & Sound', pUrl: `${basePUrl}xyxNdRjpm1IcEFjmWdzU0Y2x9fC${ext}`, rating: 9 },
      { id: 'The Father Thing', pUrl: `${basePUrl}xyxNdRjpm1IcEFjmWdzU0Y2x9fC${ext}`, rating: 8 },
      { id: 'Impossible Planet', pUrl: `${basePUrl}xyxNdRjpm1IcEFjmWdzU0Y2x9fC${ext}`, rating: 9 },
      { id: 'The Commuter', pUrl: `${basePUrl}xyxNdRjpm1IcEFjmWdzU0Y2x9fC${ext}`, rating: 8 },
      { id: 'Kill All Others', pUrl: `${basePUrl}xyxNdRjpm1IcEFjmWdzU0Y2x9fC${ext}`, rating: 7 },
    ],
  },
  { id: 'Presumed Innocent', url: `${baseUrl}/156933-presumed-innocent`, pUrl: `${basePUrl}7MXg0BxuSRWz2yKc03M40du2mrc${ext}`, rating: null },
  { id: 'Romanzo Criminale', url: `${baseUrl}/41597-romanzo-criminale-la-serie`, pUrl: `${basePUrl}cbx0rsTG9K5Sv8kQFyaHtoc9JF2${ext}`, rating: 10 },
  // MARK: SECRET LEVEL
  {
    id: 'Secret Level',
    pUrl: `${basePUrl}uRNVZNfDeQmbjdM8UHf0mmEzsgl${ext}`,
    subItems: [
      { id: 'Dungeons & Dragons: The Queen\'s Cradle', pUrl: `${basePUrl}pJBOXZ5lrh5l64RzRVXi6wqDYVx${ext}`, rating: 8 },
      { id: 'Sifu: It Takes a Life', pUrl: `${basePUrl}2GQq3AVe9IiRUbvJ0CRArM5YEYS${ext}`, rating: 8 },
      { id: 'New World: The Once and Future King', pUrl: `${basePUrl}5reK2edUyj6myiz83pgUVY6tEvC${ext}`, rating: 9 },
      { id: 'Unreal Tournament: Xan', pUrl: `${basePUrl}oqjBmwRUwmDVkP4MWBoDogBcpnp${ext}`, rating: 8 },
      { id: 'Warhammer 40,000: And They Shall Know No Fear', pUrl: `${basePUrl}AwopuQxgDK5qwZTbACo2EbkY6vk${ext}`, rating: 10 },
      { id: 'PAC-MAN: Circle', pUrl: `${basePUrl}A9b7YbLAWT9oooTXNUh5U68HwNl${ext}`, rating: 7 },
      { id: 'Crossfire: Good Conflict', pUrl: `${basePUrl}7Mzun1fcXzh5oT36HWFrGRADYcc${ext}`, rating: 7 },
      { id: 'Armored Core: Asset Management', pUrl: `${basePUrl}9QnZ3kdh4iQGjOGvK26yfBWj3ll${ext}`, rating: 9 },
      { id: 'The Outer Worlds: The Company We Keep', pUrl: `${basePUrl}as3TAQCg8ePQk1kd1EbtTioILfW${ext}`, rating: 7 },
      { id: 'Mega Man: Start', pUrl: `${basePUrl}7UZ8tEP8TKUWEMG6CEIRee7UIjx${ext}`, rating: 7 },
      { id: 'Exodus: Odyssey', pUrl: `${basePUrl}c7xQjdhBcxQy4f7Hulk76TnvHNj${ext}`, rating: 8 },
      { id: 'Spelunky: Tally', pUrl: `${basePUrl}ab8F6MIHlIe4R5iQLagBk1Y7ppR${ext}`, rating: 7 },
      { id: 'Concord: Tale Of The Implacable', pUrl: `${basePUrl}4iYdzggNRQsgnyEljsvxEoMSoei${ext}`, rating: 8 },
      { id: 'Honor of Kings: The Way of All Things', pUrl: `${basePUrl}s6L5c76oEa8jMHizH0MAjMQ2Lxs${ext}`, rating: 7 },
      { id: 'Playtime: Fulfillment', pUrl: `${basePUrl}j5dnkwFjRR6VHYpeEK2dgkIvqEm${ext}`, rating: 8 },
    ],
  },
  { id: 'Sense8', url: `${baseUrl}/61664-sense8`, pUrl: `${basePUrl}re2aPwo7XRUTLa7XwOyExsaWL3R${ext}`, rating: 10 },
  { id: 'Sharp Objects', url: `${baseUrl}/70453-sharp-objects`, pUrl: `${basePUrl}1SGovj2qDdkJexvhFiXllj9EYfu${ext}`, rating: 7 },
  { id: 'Sherlock', url: `${baseUrl}/19885-sherlock`, pUrl: `${basePUrl}czzJiwfOJVDQKddRidHkQ2lw4as${ext}`, rating: 9 },
  { id: 'Sound Of Creation', url: `${baseUrl}/237208-sound-of-creation`, pUrl: `${basePUrl}gBLL87ZMeaanqtrB7Eca7cVxtUA${ext}`, rating: null },
  { id: 'Squid Game', url: `${baseUrl}/93405-squid-game`, pUrl: `${basePUrl}fRKEvCCELSZwPN5jw3VqvRDnLDZ${ext}`, rating: 8 },
  { id: 'Spider-Noir', url: `https://www.themoviedb.org/tv220102-spider-noir`, pUrl: `${basePUrl}7dLWHBEUnmMMUglVVb8sQuHM4We${ext}`, rating: 9 },
  { id: 'Steal', url: `${baseUrl}/254071-steal`, pUrl: `${basePUrl}efF9g5dYoOZtlwn7cGGPCzxripH${ext}`, rating: 8 },
  { id: 'Stranger Things', url: `${baseUrl}/66732-stranger-things`, pUrl: `${basePUrl}8GEpV2uY13c77TG2yaz1zSVnOO2${ext}`, rating: 9 },
  { id: 'Tales From The Loop', url: `${baseUrl}/93784-tales-from-the-loop`, pUrl: `${basePUrl}no7WuiGWQdmaHlW7PWDsJ5W9B9e${ext}`, rating: 6 },
  { id: 'The 100', url: `${baseUrl}/48866-the-100`, pUrl: `${basePUrl}wcaDIAG1QdXQLRaj4vC1EFdBT2${ext}`, rating: 8 },
  { id: 'The Act', url: `${baseUrl}/82883-the-act`, pUrl: `${basePUrl}uegpHsJP6AMQOvcGSTu7ytj2xCT${ext}`, rating: 8 },
  { id: 'The Boys', url: `${baseUrl}/76479-the-boys`, pUrl: `${basePUrl}zBi4Otjddaa92ecwcNDEIhQFxcl${ext}`, rating: null },
  { id: 'The End Of The F***ing World', url: `${baseUrl}/74577-the-end-of-the-f-king-world`, pUrl: `${basePUrl}fMnNMaWa6yQJAEGtlN4uADmVsX${ext}`, rating: 7 },
  { id: 'The Fall Of The House Of Usher', url: `${baseUrl}/157065-the-fall-of-the-house-of-usher`, pUrl: `${basePUrl}aFX5bdLKVCxFEKTwB1yLh6MCpsX${ext}`, rating: 7 },
  // MARK: THE HAUNTING
  {
    id: 'The Haunting',
    pUrl: '',
    subItems: [
      { id: 'The Haunting Of Hill House', url: `${baseUrl}/72844-the-haunting`, pUrl: `${basePUrl}7Q2yog7gESEX8FFzFh4pcxRwM1S${ext}`, rating: null },
      { id: 'The Haunting Of Bly Manor', url: `${baseUrl}/109958-the-haunting-of-bly-manor`, pUrl: `${basePUrl}vIXQ8UymmQ7zJEPrKJP3s3fSbhR${ext}`, rating: null },
    ]
  },
  { id: 'The Little Drummer Girl', url: `${baseUrl}/76887-the-little-drummer-girl`, pUrl: `${basePUrl}8Y137iEKnlBtfBWHRi7aAODdD9Z${ext}`, rating: 6 },
  { id: 'The Magicians', url: `${baseUrl}/64432-the-magicians`, pUrl: `${basePUrl}d3Q4yFK3D3NOWzYRgJdsxYpZdH0${ext}`, rating: 8 },
  { id: 'The Mentalist', url: `${baseUrl}/5920-the-mentalist`, pUrl: `${basePUrl}wHBpu72EW1oUYwDSaJMD46sC4nG${ext}`, rating: 8 },
  { id: 'The Night Of', url: `${baseUrl}/66276-the-night-of`, pUrl: `${basePUrl}q13XJHdnsmxQL9rXRcnNDrZGHjO${ext}`, rating: 9 },
  { id: 'The Outsider', url: `${baseUrl}/84661-the-outsider`, pUrl: `${basePUrl}aMiPwPQjQI1EZN3xP2V0sSU37dc${ext}`, rating: 8 },
  { id: 'The Patient', url: `${baseUrl}/135868-the-patient`, pUrl: `${basePUrl}fB1848j0pvNnYilXB0ho5OCfiIz${ext}`, rating: 8 },
  { id: 'The Queen\'s Gambit', url: `${baseUrl}/87739-the-queen-s-gambit`, pUrl: `${basePUrl}zU0htwkhNvBQdVSIKB9s6hgVeFK${ext}`, rating: 10 },
  { id: 'The Silent Sea', url: `${baseUrl}/96777-the-silent-sea`, pUrl: `${basePUrl}fFT0IgqtCOks4munDTxQwkvNJkd${ext}`, rating: 7 },
  // MARK: THE TWILIGHT ZONE
  {
    id: 'The Twilight Zone',
    pUrl: `${basePUrl}4gzrxZZkgrmUNOJSWXqLUEgPUeF${ext}`,
    subItems: [
      // Season 1
      { id: 'The Comedian', pUrl: `${basePUrl}7Vh2DdqwN5fYQLQrPszFofwoJjs${ext}`, rating: 8 },
      { id: 'Nightmare at 30,000 Feet', pUrl: `${basePUrl}7Vh2DdqwN5fYQLQrPszFofwoJjs${ext}`, rating: 7 },
      { id: 'Replay', pUrl: `${basePUrl}7Vh2DdqwN5fYQLQrPszFofwoJjs${ext}`, rating: 8 },
      { id: 'A Traveler', pUrl: `${basePUrl}7Vh2DdqwN5fYQLQrPszFofwoJjs${ext}`, rating: 7 },
      { id: 'The Wunderkind', pUrl: `${basePUrl}7Vh2DdqwN5fYQLQrPszFofwoJjs${ext}`, rating: 7 },
      { id: 'Six Degrees of Freedom', pUrl: `${basePUrl}7Vh2DdqwN5fYQLQrPszFofwoJjs${ext}`, rating: 8 },
      { id: 'Not All Men', pUrl: `${basePUrl}7Vh2DdqwN5fYQLQrPszFofwoJjs${ext}`, rating: 9 },
      { id: 'Point of Origin', pUrl: `${basePUrl}7Vh2DdqwN5fYQLQrPszFofwoJjs${ext}`, rating: 7 },
      { id: 'The Blue Scorpion', pUrl: `${basePUrl}7Vh2DdqwN5fYQLQrPszFofwoJjs${ext}`, rating: 8 },
      { id: 'Blurryman', pUrl: `${basePUrl}7Vh2DdqwN5fYQLQrPszFofwoJjs${ext}`, rating: 6 },
      // Season 2
      { id: 'Meet In The Middle', pUrl: `${basePUrl}twpirU8fnVfMcPwfP6Xb4Djrwet${ext}`, rating: 8 },
      { id: 'Downtime', pUrl: `${basePUrl}twpirU8fnVfMcPwfP6Xb4Djrwet${ext}`, rating: 9 },
      { id: 'The Who Of You', pUrl: `${basePUrl}twpirU8fnVfMcPwfP6Xb4Djrwet${ext}`, rating: 10 },
      { id: 'Ovation', pUrl: `${basePUrl}twpirU8fnVfMcPwfP6Xb4Djrwet${ext}`, rating: 8 },
      { id: 'Among the Untrodden', pUrl: `${basePUrl}twpirU8fnVfMcPwfP6Xb4Djrwet${ext}`, rating: 8 },
      { id: '8', pUrl: `${basePUrl}twpirU8fnVfMcPwfP6Xb4Djrwet${ext}`, rating: 7 },
      { id: 'A Human Face', pUrl: `${basePUrl}twpirU8fnVfMcPwfP6Xb4Djrwet${ext}`, rating: 7 },
      { id: 'A Small Town', pUrl: `${basePUrl}twpirU8fnVfMcPwfP6Xb4Djrwet${ext}`, rating: 8 },
      { id: 'Try, Try', pUrl: `${basePUrl}twpirU8fnVfMcPwfP6Xb4Djrwet${ext}`, rating: 9 },
      { id: 'You Might Also Like', pUrl: `${basePUrl}twpirU8fnVfMcPwfP6Xb4Djrwet${ext}`, rating: 6 }
    ],
  },
  { id: 'The Umbrella Academy', url: `${baseUrl}/75006-umbrella-academy`, pUrl: `${basePUrl}qhcwrnnCnN8NE1N6XXKHFmveJR9${ext}`, rating: 8 },
  // MARK: TWD
  {
    id: 'The Walking Dead',
    pUrl: `${basePUrl}a093PCUdiTHXL6UH6X1kEPMZqon${ext}`,
    subItems: [
      { id: 'The Walking Dead', pUrl: `${basePUrl}yff28MtQ52vrngK5aM3DtnArwCr${ext}`, rating: 8 },
      { id: 'The Walking Dead: The Ones Who Live', pUrl: `${basePUrl}glsSEchiMDbaNAhzDYhRsQj3DON${ext}`, rating: 9 },
      { id: 'Tales Of The Walking Dead', pUrl: `${basePUrl}zRMUHvTgQ79zteQafNI46Nd9XFm${ext}`, rating: null },
    ],
  },
  // MARK: TIME
  {
    id: 'Time',
    pUrl: '',
    subItems: [
      { id: 'Time S01', url: `${baseUrl}/126116-time`, pUrl: `${basePUrl}nSxE6STKTRWb5XLNJgH6q2AKGas${ext}`, rating: 9 },
      { id: 'Time S02', url: `${baseUrl}/126116-time`, pUrl: `${basePUrl}lj2vzzPIcuN9Hil40vBwxOsjWuz${ext}`, rating: 8 },
    ],
  },
  { id: 'Three Girls', url: `${baseUrl}/71754-three-girls`, pUrl: `${basePUrl}5qqXN4XGwJXESUlRvqaYiy17rMy${ext}`, rating: 9 },
  // MARK: TRUE DETECTIVE
  {
    id: 'True Detective',
    pUrl: `${basePUrl}4t69U5WlWYlLippHH6RMWCLxqfV${ext}`,
    subItems: [
      { id: 'Season 1', pUrl: `${basePUrl}u9gL6EP9aTL439a2xrPu1guRD7c${ext}`, rating: 10 },
      { id: 'Season 2', pUrl: `${basePUrl}1LkvGRXP9onB1sRMIWVZy9cDXme${ext}`, rating: 4 },
      { id: 'Season 3', pUrl: `${basePUrl}fYSWGcyTlBSmZuYy7zFeGxRM2yT${ext}`, rating: 7 },
      { id: 'True Detective: Night Country', prefix: 'Night Country', pUrl: `${basePUrl}cuV2O5ZyDLHSOWzg3nLVljp1ubw${ext}`, rating: 7 },
    ],
  },
  { id: 'Twin Peaks', url: `${baseUrl}/1920-twin-peaks`, pUrl: `${basePUrl}kfGlKqHRukOib8PnNUlam8r5aLi${ext}`, rating: 8 },
  { id: 'Unbelievable', url: `${baseUrl}/91275-unbelievable`, pUrl: `${basePUrl}lLp80aDfjDTs87PfKmK1n1n9W9U${ext}`, rating: 9 },
  { id: 'Undone', url: `${baseUrl}/86340-undone`, pUrl: `${basePUrl}ucUhydbM7DEHDhFPV3KhKRxJ51l${ext}`, rating: null },
  { id: 'Veleno', url: `${baseUrl}/124900-veleno`, pUrl: `${basePUrl}gcZmxFyeSYLFj3kotQetw66Tp0m${ext}`, rating: null },
  { id: 'Video Game High School', url: `${baseUrl}/61491-video-game-high-school`, pUrl: `${basePUrl}bTmfH8JF8GISz4XrZvrwt5aXrF0${ext}`, rating: 9 },
  { id: 'Watchmen', url: `${baseUrl}/79788-watchmen`, pUrl: `${basePUrl}noStVK6Nw4k5X5F6IF8Ud72BA6L${ext}`, rating: 8 },
  { id: 'When They See Us', url: `${baseUrl}/81355-when-they-see-us`, pUrl: `${basePUrl}oPv3nNtkuc6EPEql5lgdOuQNHuG${ext}`, rating: 9 },
];
