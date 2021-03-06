$(function(){

  const data = [
    {
      id: '1',
      name: 'ØZI<br /><span>ARTIST</span>',
      intro: `
        <p>ØZI為新樂園Forbidden Paradise首席藝人，在2017年發表個人獨立製作作品《TITLE 頭銜》及《ME INSTEAD 奪愛》受到注目，同年發表作品《PARADISE ISLAND 天堂島》成為首支破百萬音樂作品並且展現了MV執導的能力，在華語樂壇中被稱呼為「核彈級新人」，同時與米奇林、剃刀蔣成立新樂園Forbidden Paradise，致力推廣台灣R&B音樂文化。</p>
        <p>2018年發行首張個人專輯《ØZI: The Album》在市場上創下佳績，並入圍了2019年第三十屆金曲獎最佳新人獎、最佳國語男歌手獎、最佳單曲製作人獎、最佳編曲人獎、最佳國語專輯獎、年度專輯獎等六項大獎，最終獲得最佳新人獎。</p>
        <p>在2020年與Transparent Arts合作，進行了海外發行計畫，與LA當地知名音樂製作人Ian Jeffery Thomas、Andrew Beckner共同製作，首先發行《LAVA!》單曲，隔年2021年正式發表海外專輯《PEDESTAL基石》，首波主打為《SLIDE》，第二波主打《LUFU》更與南韓實力派R&B歌手GSoul、美國節奏藍調歌手Arin Ray 合唱，以拓展海外市場為目標進行。</p>
        <p>With his hair dyed a fiery red, like his fiery passion for his artistry, ØZI has come a long way from being the 16 year old Taiwanese-American boy making garage band beats in his 3x3 bedroom and shooting music videos on his iPhone 7. After releasing his 2018 hit song “B.O.”, which accumulated over 14 million streams on Spotify, he has continued to develop and explore new sounds. His first album, ØZI: The Album, was nominated for six GMA awards (Mandarin Music’s equivalent to the Grammys) and won him the title of ‘Best New Artist’ that year.</p>
        <p>At the tender age of 20, he co-founded his own record label “Forbidden Paradise”. Now at 24, this charismatic individual has gone from being known as an associated act to becoming a well-established independent artist, music video director, and highly sought-after music producer. ØZI produced for many A-list Asian artists like Jolin Tsai and Rainie Yang. He has redefined the meaning of chart success in Taiwan with his Sophomore album, Pedestal, written fully in English. ØZI is always striving to discover a new self. This young artist is unafraid of exploring niche sounds and always introducing his fans to alternative genres. It is this authenticity to his Taiwanese heritage and his LA influences that differentiates him from other mainstream artists.</p>
      `,
      cover: 'images/artist/artist_1.jpg',
    },
    {
      id: '2',
      name: '鶴 THE CRANE',
      intro: `
        <p>鶴 The Crane，來自台北，人如其名鶴立於一處獨特的音樂河口交界，在另類R&B與合成器聲響的簇擁下翩翩起舞，樂理行間勾勒著對於生活的獨到見解。曲風時如夕景餘暉浸潤感官，也時如金閣晨雪般通澈寧靜，全方位的創作能力使他舉手投足皆富含優雅，賦予生活樣貌新的註解。</p>
        <p>成長於節奏藍調盛行的千禧年，作品以當代Urban曲風結合七〇年代靈魂樂元素，也深受Stevie Wonder, Radiohead, Frank Ocean等創作者的影響。</p>
        <p>鶴過去以多種身份活躍於獨立音樂圈，他曾擔任歌手鄭宜農的製作人、電子⺠謠樂團 他者 The Other 的 合成器手，也是歌手 HUSH的巡迴樂手，並持續參與各路音樂人的編曲。</p>
        <p>2020年以〈LIMO〉一曲展現了過人的創作天份，高質感的作品頓時吸引了各大樂壇人士的關注，更以特色的個人幽默與 R&B 曲風推開了音樂廠牌「新樂園」的大門，並於2021年初正式加入。鶴 The Crane 將是新樂園走向國際的另一幅必備藍圖，以獨具的浪漫展翅，飛舞出前所未有的音樂軌跡。</p>
        <p>The Crane is a singer-songwriter/producer based in Taipei. Growing up in the times when R&B music blossomed, The Crane was influenced by music from all spectrums, ranging from Stevie Wonder, Radiohead and Frank Ocean. Leading him to create his own blend of Alternative R&B and Bedroom Pop, sprinkled with soul elements from the seventies.</p>
        <p>With The Crane’s ability to create everchanging synth sounds and rich layers of harmonies, he delivers intriguing stories with his laid-back vocals, inviting listeners to go through an otherworldly experience. His ability to play all roles from writing to production makes everything he does elegant and effortless.</p>
        <p>The Crane had been active in the indie music scene playing multiple roles. He was the producer of Taiwanese singer Enno Cheng, Synth Player in electronic folk band The Other, he was also a tour musician for Singer HUSH. The Crane continues to work with various artists as an arranger.</p>
        <p>The Crane showed his unmatched creativity in 2020 with his release of “LIMO”, the quality of his work attracted all the attention in Taiwan’s music scene. He joined Taiwanese music label “ Forbidden Paradise” in 2021, and was quickly considered as one of the key elements to the label’s plan to international success with his quirky humour and playful music style injected into traditional R&B sounds.</p>
      `,
      cover: 'images/artist/artist_2_detail.jpg',
    },
    {
      id: '3',
      name: '米奇林',
      intro: `
        <p>自2006年起便進入音樂圈耕耘至今，始終以走出國際為堅定的理念拓展著音樂版圖，並以R&B與Funk類的曲風為個人代表，在過去曾有著與《蔡依林》、《頑童MJ116》、《徐佳瑩》等巨星的合作經歷，更以頂尖的音樂製作實力入圍了30屆及32屆金曲獎的製作項目。現為R&B音樂廠牌《新樂園 Forbidden Paradise》與製作公司《孩子氣娛樂》的共同創辦人，事業版圖跨足音樂、節目、活動展演、藝人經紀等多方領域，實現了娛樂全方位的理念，持續的往國際市場邁進。</p>
        <p>MCKY started his career in 2006 and has been expanding his musical influence with the goal of creating global success in mind. Specializing in genres such as Funk and R&B, he has collaborated with stars such as Jolin Tsai, MJ116 and Lala Hsu. He is also a nominee in the producer category both in the 30th and 32nd Golden Melody Awards. MCKY is the co-founder of R&B label Forbidden Paradise, and production company GrownForWhat Entertainment. His businesses now range from music, show production, event management, and artist management.</p>
      `,
      cover: 'images/artist/artist_3_detail.jpg',
    },
    {
      id: '4',
      name: '剃刀蔣 RAZOR<br /><span>新樂園音樂創辦人／音樂製作人</span>',
      intro: `
        <p>現為新樂園音樂有限公司Forbidden Paradise 創辦人之一& 製作人 ，亦為J.Sheon 與ØZI 的製作人；與陳星翰 、陳君豪所共同製作的蔡依林《Ugly Beauty》專輯獲得亞洲音樂大獎「年度最佳製作人」獎項，及第30屆金曲獎「年度專輯獎」，個人製作的歌曲「玫瑰少年」獲得「年度歌曲獎」，製作J.Sheon《巷子內》專輯中的歌曲「輸情歌」提名第31屆金曲獎「最佳編曲人獎」</p>
        <p>RAZOR is a Taiwanese producer, co-founder of R&B label Forbidden Paradise. He is the producer of Taiwanese singer J.Sheon and ØZI. His work on co-producing Jolin Tsai’s Album Ugly Beauty with Starr Chen and Howe won him Best Producer of the Year from Mnet Asia Music Awards, and Album of the Year from the 30th Golden Melody Awards. Razor also won Record of the Year from the GMA Awards for producing “Womxnly”, a song in the Ugly Beauty album. He was also nominated as Best Arranger of the Year at the 31st GMA Awards for his work on J.Sheon’s song “Ballad”. </p>
      `,
      cover: 'images/artist/artist_4_detail.jpg',
    },
  ]

  const Util = {
    toGetParam:function(name, casesensitive) {
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      let href = window.location.href;
        
      if (!casesensitive) name = name.toLowerCase();
      if (!casesensitive) href = href.toLowerCase();
        
      let regexS = "[\\?&]" + name + "=([^&#]*)";
      let regex = new RegExp(regexS);
      let results = regex.exec(href);
  
      if (results == null) {
        return "";
      } else {
        return results[1];
      }
    }
  };
  
  $.html5Loader({
    filesToLoad: 'js/resource.json',
    onBeforeLoad: function(){
      console.log('on BeforeLoad');
    },
    onComplete: function(){
      console.log('on complete');
      init();
    },
    onElementLoaded: function(obj, elm){
      //console.log(elm);
    },
    onUpdate: function(percentage){
      console.log(percentage);
    }
  });

  function init(){
    let id = Util.toGetParam('id');
    setPersonal(id);

    TweenMax.to($('#loading'), 0.5, {autoAlpha: 0});

    setSlick($('.item-group'));
  }

  // 設置slick
  function setSlick(el){
    el.slick({
      dots: true,
      infinite: true,
      dots: false,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      prevArrow: '<div class="arrow-left"><img class="img-fluid" src="images/global/arrow_left.png"></div>',
      nextArrow: '<div class="arrow-right"><img class="img-fluid" src="images/global/arrow_right.png"></div>',
      
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
          }
        },
      ]
    });
  }

  function setPersonal(id){
    let personalData = data.filter(item => (id === item.id));
    let coverElement = `<img src="${personalData[0].cover}">`;
    let personalElement = `
      <h2>${personalData[0].name}</h2>
      <article>
        ${personalData[0].intro}
      </article>
    `;
    $('.cover').empty().append(coverElement);
    $('.personal-container').empty().append(personalElement);
  }

});