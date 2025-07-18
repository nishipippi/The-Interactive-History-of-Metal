import { GenreInfo } from '../types';

export const metalHistoryData: GenreInfo[] = [
  // Column 0: ~1970 Roots
  {
    id: 'hard-rock',
    name: 'ハードロック',
    era: '1960年代後半',
    description: 'ビートルズの「ヘルタースケルター」などをルーツに持つ、ヘヴィメタルの源流。',
    bands: [
        { name: 'Deep Purple', url: 'http://www.youtube.com/watch?v=Q2FzZSBD5LE' },
        { name: 'Led Zeppelin', url: 'http://www.youtube.com/watch?v=P3Y8OWkiUts' },
        { name: 'The Beatles', url: 'http://www.youtube.com/watch?v=A_MjCqQoLLA' },
    ],
    type: 'origin',
    influences: [],
    column: 0,
  },
  // Column 1: 1970s Emergence & Punk
  {
    id: 'primitive-heavy-metal',
    name: '原始ヘヴィメタル',
    era: '1970年代前半',
    description: 'ハードロックとヘヴィメタルの両方の要素を持つバンド達。ブラック・サバスが始祖とされる。',
    bands: [
        { name: 'Black Sabbath', url: 'http://www.youtube.com/watch?v=0qanF-91aJo' },
        { name: 'Judas Priest', url: 'http://www.youtube.com/watch?v=L397TWLwrUU' },
        { name: 'AC/DC', url: 'http://www.youtube.com/watch?v=pAgnJDJN4VA' },
        { name: 'KISS', url: 'http://www.youtube.com/watch?v=rhdugVP9F44' },
    ],
    type: 'transitional',
    influences: ['hard-rock'],
    column: 1,
  },
  {
    id: 'punk-rock',
    name: 'パンクロック',
    era: '1970年代中盤',
    description: '反社会性とシンプルなロックンロールへの回帰を志向したカウンターカルチャー。',
    bands: [
        { name: 'Sex Pistols', url: 'http://www.youtube.com/watch?v=q31WY0Aobro' },
        { name: 'The Damned', url: 'http://www.youtube.com/watch?v=KPowvspa4BI' },
        { name: 'The Clash', url: 'http://www.youtube.com/watch?v=EfK-WX2pa8c' },
    ],
    type: 'counter-culture',
    influences: ['hard-rock'], // As a reaction
    column: 1,
  },
  // Column 2: 1980s The Golden Age & Underground
  {
    id: 'nwobhm',
    name: 'NWOBHM',
    era: '1979年〜',
    description: 'パンクのDIY精神とスピード感を取り入れ、ヘヴィメタルというジャンルを確立させたムーブメント。',
    bands: [
        { name: 'Iron Maiden', url: 'http://www.youtube.com/watch?v=X4bgXH3sJ2Q' },
        { name: 'Saxon', url: 'http://www.youtube.com/watch?v=Gq6VhHTYGq0' },
        { name: 'Def Leppard', url: 'http://www.youtube.com/watch?v=1F_1JTvG_Eg' },
        { name: 'Venom', url: 'http://www.youtube.com/watch?v=1kbon057vPk' },
        { name: 'Ozzy Osbourne', url: 'http://www.youtube.com/watch?v=tMDFv5m18Pw' },
    ],
    type: 'mainstream',
    influences: ['primitive-heavy-metal', 'punk-rock'],
    column: 2,
  },
  {
    id: 'glam-metal',
    name: 'グラムメタル (LAメタル)',
    era: '1980年代',
    description: '80年代の商業的成功を収めたメインストリーム。キャッチーで華やかなサウンドとルックスが特徴。',
    bands: [
        { name: 'Mötley Crüe', url: 'http://www.youtube.com/watch?v=ybcxIpb-R_0' },
        { name: 'Guns N\' Roses', url: 'http://www.youtube.com/watch?v=o1tj2zJ2Wvg' },
        { name: 'Bon Jovi', url: 'http://www.youtube.com/watch?v=lDK9QqIzhwk' },
        { name: 'Quiet Riot', url: 'http://www.youtube.com/watch?v=O_1ruZWJigo' },
    ],
    type: 'mainstream',
    influences: ['nwobhm', 'primitive-heavy-metal'],
    column: 2,
  },
  {
    id: 'hardcore-punk',
    name: 'ハードコアパンク',
    era: '1980年代',
    description: 'パンクをより速く、激しく、攻撃的に進化させたカウンターカルチャー。後のエクストリームミュージックに多大な影響を与えた。',
    bands: [
        { name: 'D.O.A.', url: 'http://www.youtube.com/watch?v=fVeSiLoXGv4' },
        { name: 'Black Flag', url: 'http://www.youtube.com/watch?v=Re9e_xSIo98' },
        { name: 'Discharge', url: 'http://www.youtube.com/watch?v=nFsKZXd2EOI' },
        { name: 'Agnostic Front', url: 'http://www.youtube.com/watch?v=ebBjGp7QOGc' },
    ],
    type: 'counter-culture',
    influences: ['punk-rock'],
    column: 2,
  },
  {
    id: 'thrash-metal',
    name: 'スラッシュメタル',
    era: '1980年代初頭',
    description: 'NWOBHMのスピードとハードコアパンクの攻撃性を融合させた、80年代のメタルシーンにおける最重要ジャンルの一つ。デスメタルやブラックメタルの直接の祖先であり、エクストリームメタルの分岐点。',
    bands: [
      { name: 'Metallica', url: 'http://www.youtube.com/watch?v=xnKhsTXoKCI' },
      { name: 'Slayer', url: 'http://www.youtube.com/watch?v=z8ZqFlw6hYg' },
      { name: 'Megadeth', url: 'http://www.youtube.com/watch?v=B-oU2xlViRQ' },
      { name: 'Anthrax', url: 'http://www.youtube.com/watch?v=zlLn0UicWrM' }
    ],
    type: 'sub-genre',
    influences: ['nwobhm', 'hardcore-punk'],
    column: 2
  },
  {
    id: 'power-metal',
    name: 'パワーメタル',
    era: '1980年代後半',
    description: 'NWOBHMのメロディックな側面を継承・発展させたジャンル。高揚感のあるハイトーンボーカル、流麗なギターメロディ、叙事詩的な歌詞が特徴。',
    bands: [
      { name: 'Helloween', url: 'http://www.youtube.com/watch?v=FjV8SHjHvHk' },
      { name: 'Blind Guardian', url: 'http://www.youtube.com/watch?v=n63UbX5kzAc' },
      { name: 'Stratovarius', url: 'http://www.youtube.com/watch?v=Tn58-Nl9NYw' },
      { name: 'Gamma Ray', url: 'http://www.youtube.com/watch?v=FQ45MTA0bNQ' }
    ],
    type: 'sub-genre',
    influences: ['nwobhm'],
    column: 2
  },
  {
    id: 'doom-metal',
    name: 'ドゥームメタル',
    era: '1980年代',
    description: 'Black Sabbathのサウンドを直接的な起源とし、極端に遅いテンポと重苦しいサウンドを特徴とする。絶望、悲嘆、破滅といった感情を表現する。',
    bands: [
      { name: 'Candlemass', url: 'http://www.youtube.com/watch?v=woe_4gkS4XU' },
      { name: 'Pentagram', url: 'http://www.youtube.com/watch?v=Yilvcz4oB1Q' },
      { name: 'Saint Vitus', url: 'http://www.youtube.com/watch?v=lpVUMuLLqug' },
      { name: 'Electric Wizard', url: 'http://www.youtube.com/watch?v=EU0TUR-o6gE' }
    ],
    type: 'sub-genre',
    influences: ['primitive-heavy-metal'],
    column: 2
  },
  {
    id: 'death-metal',
    name: 'デスメタル',
    era: '1980年代後半',
    description: 'スラッシュメタルをさらに過激化させたジャンル。低音のデスグロウル、超高速のブラストビート、死や暴力などをテーマにした歌詞が特徴。メロディックデスメタルやデスコアの親ジャンル。',
    bands: [
      { name: 'Death', url: 'http://www.youtube.com/watch?v=zbp60IX_jFQ' },
      { name: 'Morbid Angel', url: 'http://www.youtube.com/watch?v=djF1AfY2O9Y' },
      { name: 'Cannibal Corpse', url: 'http://www.youtube.com/watch?v=gNhN6lT-y5U' },
      { name: 'Obituary', url: 'http://www.youtube.com/watch?v=nVVTOHVXQQA' }
    ],
    type: 'sub-genre',
    influences: ['thrash-metal'],
    column: 2
  },
  {
    id: 'grindcore',
    name: 'グラインドコア',
    era: '1980年代末',
    description: 'デスメタルの激しさとハードコアパンクの混沌としたエネルギーを融合させた、音楽的過激さの極致の一つ。極端に短い曲とブラストビートが特徴。',
    bands: [
      { name: 'Napalm Death', url: 'http://www.youtube.com/watch?v=ybGOT4d2Hs8' },
      { name: 'Repulsion', url: 'http://www.youtube.com/watch?v=dpqx8x2NjHY' },
      { name: 'Carcass', url: 'http://www.youtube.com/watch?v=ZpbpOgUybBM' },
      { name: 'Terrorizer', url: 'http://www.youtube.com/watch?v=HMFcsvJlMv8' }
    ],
    type: 'fusion',
    influences: ['death-metal', 'hardcore-punk'],
    column: 2
  },
  {
    id: 'progressive-metal',
    name: 'プログレッシブメタル',
    era: '1980年代後半',
    description: 'ヘヴィメタルのパワーとプログレッシブロックの実験性や複雑な楽曲構成を融合。変拍子やポリリズム、高度な演奏技術が特徴。ジェントの源流の一つ。',
    bands: [
      { name: 'Dream Theater', url: 'http://www.youtube.com/watch?v=SGRgAULYgWE' },
      { name: 'Fates Warning', url: 'http://www.youtube.com/watch?v=gbRQyJ2uuNw' },
      { name: 'Queensrÿche', url: 'http://www.youtube.com/watch?v=jhat-xUQ6dw' },
      { name: 'Opeth', url: 'http://www.youtube.com/watch?v=bSpqLqC7U6g' }
    ],
    type: 'fusion',
    influences: ['nwobhm'],
    column: 2
  },
  {
    id: 'industrial-metal',
    name: 'インダストリアルメタル',
    era: '1980年代後半',
    description: 'ヘヴィメタルにシンセサイザーやサンプリングなどインダストリアルミュージックの要素を融合。冷たく機械的なサウンドが特徴。',
    bands: [
      { name: 'Ministry', url: 'http://www.youtube.com/watch?v=rmenTtGe_6I' },
      { name: 'Fear Factory', url: 'http://www.youtube.com/watch?v=7RJsRQOneMY' },
      { name: 'Rammstein', url: 'http://www.youtube.com/watch?v=W3q8Od5qJio' },
      { name: 'Godflesh', url: 'http://www.youtube.com/watch?v=KCDg5DrNslU' }
    ],
    type: 'fusion',
    influences: ['primitive-heavy-metal', 'punk-rock'],
    column: 2
  },
  // Column 3: 1990s Grunge Takeover & Crossover
  {
    id: 'grunge',
    name: 'グランジ',
    era: '1990年代前半',
    description: '80年代メタルの華やかさへのカウンターとして台頭。ダークで内省的なサウンドで時代を席巻した。',
    bands: [
        { name: 'Nirvana', url: 'http://www.youtube.com/watch?v=hTWKbfoikeg' },
        { name: 'Pearl Jam', url: 'http://www.youtube.com/watch?v=3g1Tu2Ulrk0' },
        { name: 'Soundgarden', url: 'http://www.youtube.com/watch?v=3mbBbFH9fAg' },
        { name: 'Alice in Chains', url: 'http://www.youtube.com/watch?v=TAqZb52sgpU' },
    ],
    type: 'counter-culture',
    influences: ['glam-metal', 'hardcore-punk'], // Reaction to glam, influenced by punk ethos
    column: 3,
  },
  {
    id: 'groove-metal',
    name: 'グルーヴメタル',
    era: '1990年代',
    description: 'スラッシュメタルのリフに、よりミドルテンポでヘヴィなグルーヴ感を加えたスタイル。',
    bands: [
        { name: 'Pantera', url: 'http://www.youtube.com/watch?v=AkFqg5wAuFk' },
        { name: 'Sepultura', url: 'http://www.youtube.com/watch?v=F_6IjeprfEs' },
        { name: 'Machine Head', url: 'http://www.youtube.com/watch?v=Qf0yWQzz0gM' },
    ],
    type: 'sub-genre',
    influences: ['thrash-metal'],
    column: 3,
  },
  {
    id: 'melodic-death-metal',
    name: 'メロディックデスメタル',
    era: '1990年代後半',
    description: 'デスメタルの攻撃性とNWOBHMの叙情的なツインリードギターを融合させた。',
    bands: [
        { name: 'At the Gates', url: 'http://www.youtube.com/watch?v=pnHoNRADFOo' },
        { name: 'Arch Enemy', url: 'http://www.youtube.com/watch?v=n9AcG0glVu4' },
        { name: 'Children of Bodom', url: 'http://www.youtube.com/watch?v=ATIVuynOPTM' },
    ],
    type: 'sub-genre',
    influences: ['death-metal', 'nwobhm'],
    column: 3,
  },
  {
    id: 'black-metal',
    name: 'ブラックメタル',
    era: '1990年代',
    description: 'NWOBHMから派生し、反キリスト教など過激な思想とプリミティブなサウンドを特徴とする。',
    bands: [
        { name: 'Mayhem', url: 'http://www.youtube.com/watch?v=z8VIhIIq-kk' },
        { name: 'Emperor', url: 'http://www.youtube.com/watch?v=YgQRRI9goFg' },
        { name: 'Burzum', url: 'http://www.youtube.com/watch?v=DPyOhP1GTRQ' },
        { name: 'Darkthrone', url: 'http://www.youtube.com/watch?v=SBwu83RR6ZU' },
    ],
    type: 'sub-genre',
    influences: ['nwobhm', 'thrash-metal'],
    column: 3,
  },
  {
    id: 'nu-metal',
    name: 'ニューメタル',
    era: '1990年代後半',
    description: 'ヘヴィメタルにヒップホップやオルタナティブロックの要素を融合させ、再びメインストリームに躍り出た。',
    bands: [
        { name: 'Korn', url: 'http://www.youtube.com/watch?v=jRGrNDV2mKc' },
        { name: 'Limp Bizkit', url: 'http://www.youtube.com/watch?v=ZpUYjpKg9KY' },
        { name: 'Slipknot', url: 'http://www.youtube.com/watch?v=5abamRO41fE' },
        { name: 'Linkin Park', url: 'http://www.youtube.com/watch?v=eVTXPUF4Oz4' },
    ],
    type: 'mainstream',
    influences: ['groove-metal', 'grunge', 'hardcore-punk'],
    column: 3,
  },
  {
    id: 'pop-punk',
    name: 'ポップパンク',
    era: '1990年代後半',
    description: 'パンクロックの攻撃性とポップミュージックのキャッチーなメロディーを融合させたジャンル。',
    bands: [
      { name: 'Green Day', url: 'http://www.youtube.com/watch?v=NUTGr5t3MoY' },
      { name: 'The Offspring', url: 'http://www.youtube.com/watch?v=7iNbnineUCI' },
      { name: 'blink-182', url: 'http://www.youtube.com/watch?v=Sn0gVjPrUj0' },
      { name: 'Good Charlotte', url: 'http://www.youtube.com/watch?v=desJKYvdq9A' },
      { name: 'Sum 41', url: 'http://www.youtube.com/watch?v=emGri7i8Y2Y' }
    ],
    type: 'sub-genre',
    influences: ['punk-rock'],
    column: 3,
  },
  {
    id: 'gothic-metal',
    name: 'ゴシックメタル',
    era: '1990年代前半',
    description: 'デス/ドゥームメタルとゴシックロックの耽美的で憂鬱な雰囲気を組み合わせたジャンル。しばしば男女ボーカルの対比が用いられる。',
    bands: [
      { name: 'Paradise Lost', url: 'http://www.youtube.com/watch?v=cteWHg_hR-w' },
      { name: 'Type O Negative', url: 'http://www.youtube.com/watch?v=vFwYJYl5GUQ' },
      { name: 'My Dying Bride', url: 'http://www.youtube.com/watch?v=F-UE-KbCQD8' },
      { name: 'Tiamat', url: 'http://www.youtube.com/watch?v=rfM8YSOsnaE' }
    ],
    type: 'fusion',
    influences: ['doom-metal'],
    column: 3
  },
  {
    id: 'symphonic-metal',
    name: 'シンフォニックメタル',
    era: '1990年代後半',
    description: 'オーケストラやクラシックの要素を大々的に取り入れたスタイル。パワーメタルやゴシックメタルなど、様々なジャンルと融合して展開される。',
    bands: [
      { name: 'Nightwish', url: 'http://www.youtube.com/watch?v=kIBdpFJyFkc' },
      { name: 'Epica', url: 'http://www.youtube.com/watch?v=Dys1_TuUmI4' },
      { name: 'Within Temptation', url: 'http://www.youtube.com/watch?v=lWNOLqs1IPQ' },
      { name: 'Therion', url: 'http://www.youtube.com/watch?v=2ZQ0BsNi24A' }
    ],
    type: 'fusion',
    influences: ['power-metal', 'gothic-metal'],
    column: 3
  },
  {
    id: 'folk-metal',
    name: 'フォークメタル',
    era: '1990年代前半',
    description: 'ヘヴィメタルと世界各地の伝統的な民族音楽を融合させたジャンル。ヴァイオリンやフルートなどの民族楽器が使用される。',
    bands: [
      { name: 'Skyclad', url: 'http://www.youtube.com/watch?v=zsbXsOWQ68k' },
      { name: 'Korpiklaani', url: 'http://www.youtube.com/watch?v=g4LofIXbvrM' },
      { name: 'Finntroll', url: 'http://www.youtube.com/watch?v=RGVAyGNRx5Y' },
      { name: 'Eluveitie', url: 'http://www.youtube.com/watch?v=R-morg7h7Xk' }
    ],
    type: 'fusion',
    influences: ['thrash-metal'],
    column: 3
  },
  {
    id: 'post-metal',
    name: 'ポストメタル',
    era: '1990年代',
    description: 'ポストロックの影響を強く受け、従来のメタルの攻撃性よりも雰囲気や感情の深さを重視する。静と動のダイナミックな対比が多用される。',
    bands: [
      { name: 'Neurosis', url: 'http://www.youtube.com/watch?v=Yp7Dz4bh5UE' },
      { name: 'Isis', url: 'http://www.youtube.com/watch?v=sopiG1Qhlh8' },
      { name: 'Cult of Luna', url: 'http://www.youtube.com/watch?v=XoFJA24GhfA' },
      { name: 'Pelican', url: 'http://www.youtube.com/watch?v=T1XsRltRoT0' }
    ],
    type: 'fusion',
    influences: ['hardcore-punk', 'doom-metal'],
    column: 3
  },
  // Column 4: 2000s The "Core" Era
  {
    id: 'post-grunge',
    name: 'ポストグランジ',
    era: '2000年代中盤',
    description: 'グランジにハードロックやヘヴィメタルの要素が加わったオルタナティブロック。',
    bands: [
        { name: 'Creed', url: 'http://www.youtube.com/watch?v=O-fyNgHdmLI' },
        { name: 'Nickelback', url: 'http://www.youtube.com/watch?v=Aiay8I5IPB8' },
        { name: 'Foo Fighters', url: 'http://www.youtube.com/watch?v=h_L4Rixya64' },
        { name: 'Breaking Benjamin', url: 'http://www.youtube.com/watch?v=DWaB4PXCwFU' },
    ],
    type: 'sub-genre',
    influences: ['grunge'],
    column: 4,
  },
  {
    id: 'pop-punk-2000s',
    name: 'ポップパンク (2000s)',
    era: '2000年代初頭',
    description: '1990年代から続くジャンル。メロコアやメタル、エモの要素がクロスオーバー。',
    bands: [
        { name: 'Fall Out Boy', url: 'http://www.youtube.com/watch?v=uhG-vLZrb-g' },
        { name: 'All Time Low', url: 'http://www.youtube.com/watch?v=GcNiKCmWdYE' },
        { name: 'The Used', url: 'http://www.youtube.com/watch?v=aJXRFcyWgdk' },
    ],
    type: 'sub-genre',
    influences: ['pop-punk', 'screamo'],
    column: 4,
  },
  {
    id: 'metalcore',
    name: 'メタルコア',
    era: '2000年代',
    description: 'ハードコアパンクとエクストリームメタルを融合。叙情的なメロディと攻撃的なブレイクダウンが特徴。',
    bands: [
        { name: 'Killswitch Engage', url: 'http://www.youtube.com/watch?v=iPW9AbRMwFU' }, 
        { name: 'As I Lay Dying', url: 'http://www.youtube.com/watch?v=8RXgpfZE17w' }, 
        { name: 'August Burns Red', url: 'http://www.youtube.com/watch?v=n6LUHRw4QNI' }
    ],
    type: 'mainstream',
    influences: ['hardcore-punk', 'melodic-death-metal'],
    column: 4,
  },
  {
    id: 'screamo',
    name: 'スクリーモ',
    era: '2000年代前半',
    description: 'エモ、ハードコアから派生し、感情的な歌唱とスクリームを織り交ぜたスタイル。',
    bands: [
        { name: 'Funeral for a Friend', url: 'http://www.youtube.com/watch?v=QUnNo_sJvwk' }, 
        { name: 'Saosin', url: 'http://www.youtube.com/watch?v=MKEQjxeD8d4' }, 
        { name: 'Story of the Year', url: 'http://www.youtube.com/watch?v=l9WKZpC9UbU' }, 
        { name: 'Silverstein', url: 'http://www.youtube.com/watch?v=RrBjciRdPVQ' }
    ],
    type: 'sub-genre',
    influences: ['hardcore-punk'],
    column: 4,
  },
  {
    id: 'deathcore',
    name: 'デスコア',
    era: '2000年代後半',
    description: 'メタルコアのファッション化へのカウンター。デスメタルの残虐性とメタルコアのブレイクダウンを融合。',
    bands: [
        { name: 'Job for a Cowboy', url: 'http://www.youtube.com/watch?v=fWbV-4LEHBU' }, 
        { name: 'Despised Icon', url: 'http://www.youtube.com/watch?v=78VQsF2cBug' }, 
        { name: 'Suicide Silence', url: 'http://www.youtube.com/watch?v=P5hImIVSIKM' }, 
        { name: 'Bring Me The Horizon (初期)', url: 'http://www.youtube.com/watch?v=QH1CRuSlIUM' }
    ],
    type: 'counter-culture',
    influences: ['metalcore', 'death-metal'], 
    column: 4,
  },
  {
    id: 'post-hardcore',
    name: 'ポストハードコア',
    era: '2000年代後半',
    description: 'メタルコアとスクリーモが融合し、エレクトロ要素も取り入れた。シンセサイザーが一般的になる。',
    bands: [
        { name: 'The Devil Wears Prada', url: 'http://www.youtube.com/watch?v=yLzHFretCbg' }, 
        { name: 'Asking Alexandria', url: 'http://www.youtube.com/watch?v=z71_E_YqWqA' }, 
        { name: 'Attack Attack!', url: 'http://www.youtube.com/watch?v=KDzt6yI3Dw8' }
    ],
    type: 'mainstream',
    influences: ['metalcore', 'screamo'],
    column: 4,
  },
  // Column 5: 2010s+ The Modern & Digital Era
  {
    id: 'djent',
    name: 'ジェント',
    era: '2010年代',
    description: '多弦ギターによる超低音チューニングと複雑なポリリズムを特徴とする、プログレッシブなスタイル。',
    bands: [
        { name: 'Periphery', url: 'http://www.youtube.com/watch?v=gQqIF0yVtzc' }, 
        { name: 'Veil of Maya', url: 'http://www.youtube.com/watch?v=lCPwR7R4hlA' }, 
        { name: 'Born of Osiris', url: 'http://www.youtube.com/watch?v=wLdlw46Ru9I' }, 
        { name: 'After The Burial', url: 'http://www.youtube.com/watch?v=nH2K8S2Ajb0' }
    ],
    type: 'sub-genre',
    influences: ['groove-metal', 'metalcore', 'progressive-metal'],
    column: 5,
  },
  {
    id: 'nu-metalcore',
    name: 'ニューメタルコア',
    era: '2010年代',
    description: 'メタルコアにニューメタルのグルーヴやラップボーカルの要素を取り入れたスタイル。',
    bands: [
        { name: 'Attila', url: 'http://www.youtube.com/watch?v=b6z8enL8uts' }, 
        { name: 'Emmure', url: 'http://www.youtube.com/watch?v=sy5MoWB3pPs' }, 
        { name: 'Alpha Wolf', url: 'http://www.youtube.com/watch?v=S0RAyGpgigA' }, 
        { name: 'Architects', url: 'http://www.youtube.com/watch?v=jdWhJcrrjQs' }
    ],
    type: 'sub-genre',
    influences: ['nu-metal', 'metalcore'],
    column: 5,
  },
   {
    id: 'deathcore-2nd',
    name: 'デスコア (第2世代)',
    era: '2010年代',
    description: 'デスコアがさらに凶暴化。より速く、テクニカルでブルータルなサウンドを追求した。',
    bands: [
        { name: 'Signs of the Swarm', url: 'http://www.youtube.com/watch?v=N-Q6EYtzmts' }, 
        { name: 'Infant Annihilator', url: 'http://www.youtube.com/watch?v=I1MbCZH4qNQ' }, 
        { name: 'Slaughter to Prevail', url: 'http://www.youtube.com/watch?v=79ojlwMzs0Q' }
    ],
    type: 'sub-genre',
    influences: ['deathcore', 'djent'],
    column: 5,
  },
  {
    id: 'nu-core',
    name: 'ニューコア',
    era: '2010年代後半〜',
    description: 'ニューメタルリバイバルとEDMの影響が強い。現在のヘビーミュージックシーンのメインストリーム。',
    bands: [
        { name: 'Bring Me The Horizon (後期)', url: 'http://www.youtube.com/watch?v=Ow_qI_F2ZJI' }, 
        { name: 'I Prevail', url: 'http://www.youtube.com/watch?v=n2EjeMx4bSg' }, 
        { name: 'Holding Absence', url: 'http://www.youtube.com/watch?v=qfe8NvYSPmY' }, 
        { name: 'Ghostkid', url: 'http://www.youtube.com/watch?v=Dji7yS4psd8' }
    ],
    type: 'mainstream',
    influences: ['nu-metal', 'post-hardcore', 'djent'],
    column: 5,
  },
];