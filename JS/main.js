document.addEventListener('DOMContentLoaded', function() {
    const countyNumSelect = document.getElementById('county-num');
    const selectContainer = document.getElementById('select-container');
    const saveButton = document.getElementById('submit');
    const resultContainer = document.getElementById('result-container');
    const stationsDisplay = document.getElementById('stations-display');
    const destination = document.getElementById('destination');
    const destinationEn = document.getElementById('destinationEn');
    const prevstation1 = document.getElementById('prevstation1');
    const enstation1 = document.getElementById('enstation1');
    const enstation2 = document.getElementById('enstation2');
    const nextstation1 = document.getElementById('nextstation1');
    
    const counties = [
        "基隆市", "臺北市", "新北市", "桃園市", "新竹市", "新竹縣", "苗栗縣",
        "臺中市", "彰化縣", "南投縣", "雲林縣", "嘉義市", "嘉義縣", "臺南市",
        "高雄市", "屏東縣", "臺東縣", "花蓮縣", "宜蘭縣"
    ];

    const stationsData = [
      {
        "stationName": "基隆",
        "stationAddrTw": "基隆市",
        "stationEName": "Keelung"
      },
      {
        "stationName": "三坑",
        "stationAddrTw": "基隆市",
        "stationEName": "Sankeng"
      },
      {
        "stationName": "八堵",
        "stationAddrTw": "基隆市",
        "stationEName": "Badu"
      },
      {
        "stationName": "七堵",
        "stationAddrTw": "基隆市",
        "stationEName": "Qidu"
      },
      {
        "stationName": "百福",
        "stationAddrTw": "基隆市",
        "stationEName": "Baifu"
      },
      {
        "stationName": "五堵",
        "stationAddrTw": "新北市",
        "stationEName": "Wudu"
      },
      {
        "stationName": "汐止",
        "stationAddrTw": "新北市",
        "stationEName": "Xizhi"
      },
      {
        "stationName": "汐科",
        "stationAddrTw": "新北市",
        "stationEName": "Xike"
      },
      {
        "stationName": "南港",
        "stationAddrTw": "臺北市",
        "stationEName": "Nangang"
      },
      {
        "stationName": "松山",
        "stationAddrTw": "臺北市",
        "stationEName": "Songshan"
      },
      {
        "stationName": "臺北",
        "stationAddrTw": "臺北市",
        "stationEName": "Taipei"
      },
      {
        "stationName": "臺北-環島",
        "stationAddrTw": "臺北市",
        "stationEName": "Taipei Surround Island"
      },
      {
        "stationName": "萬華",
        "stationAddrTw": "臺北市",
        "stationEName": "Wanhua"
      },
      {
        "stationName": "板橋",
        "stationAddrTw": "新北市",
        "stationEName": "Banqiao"
      },
      {
        "stationName": "浮洲",
        "stationAddrTw": "新北市",
        "stationEName": "Fuzhou"
      },
      {
        "stationName": "樹林",
        "stationAddrTw": "新北市",
        "stationEName": "Shulin"
      },
      {
        "stationName": "南樹林",
        "stationAddrTw": "新北市",
        "stationEName": "South Shulin"
      },
      {
        "stationName": "山佳",
        "stationAddrTw": "新北市",
        "stationEName": "Shanjia"
      },
      {
        "stationName": "鶯歌",
        "stationAddrTw": "新北市",
        "stationEName": "Yingge"
      },
      {
        "stationName": "桃園",
        "stationAddrTw": "桃園市",
        "stationEName": "Taoyuan"
      },
      {
        "stationName": "內壢",
        "stationAddrTw": "桃園市",
        "stationEName": "Neili"
      },
      {
        "stationName": "中壢",
        "stationAddrTw": "桃園市",
        "stationEName": "Zhongli_Taoyuan"
      },
      {
        "stationName": "埔心",
        "stationAddrTw": "桃園市",
        "stationEName": "Puxin"
      },
      {
        "stationName": "楊梅",
        "stationAddrTw": "桃園市",
        "stationEName": "Yangmei"
      },
      {
        "stationName": "富岡",
        "stationAddrTw": "桃園市",
        "stationEName": "Fugang"
      },
      {
        "stationName": "新富",
        "stationAddrTw": "桃園市",
        "stationEName": "Xinfu"
      },
      {
        "stationName": "北湖",
        "stationAddrTw": "新竹縣",
        "stationEName": "Beihu"
      },
      {
        "stationName": "湖口",
        "stationAddrTw": "新竹縣",
        "stationEName": "Hukou"
      },
      {
        "stationName": "新豐",
        "stationAddrTw": "新竹縣",
        "stationEName": "Xinfeng"
      },
      {
        "stationName": "竹北",
        "stationAddrTw": "新竹縣",
        "stationEName": "Zhubei"
      },
      {
        "stationName": "北新竹",
        "stationAddrTw": "新竹市",
        "stationEName": "North Hsinchu"
      },
      {
        "stationName": "千甲",
        "stationAddrTw": "新竹市",
        "stationEName": "Qianjia"
      },
      {
        "stationName": "新莊",
        "stationAddrTw": "新竹市",
        "stationEName": "Xinzhuang"
      },
      {
        "stationName": "竹中",
        "stationAddrTw": "新竹縣",
        "stationEName": "Zhuzhong"
      },
      {
        "stationName": "六家",
        "stationAddrTw": "新竹縣",
        "stationEName": "Liujia"
      },
      {
        "stationName": "上員",
        "stationAddrTw": "新竹縣",
        "stationEName": "Shangyuan"
      },
      {
        "stationName": "榮華",
        "stationAddrTw": "新竹縣",
        "stationEName": "Ronghua"
      },
      {
        "stationName": "竹東",
        "stationAddrTw": "新竹縣",
        "stationEName": "Zhudong"
      },
      {
        "stationName": "橫山",
        "stationAddrTw": "新竹縣",
        "stationEName": "Hengshan"
      },
      {
        "stationName": "九讚頭",
        "stationAddrTw": "新竹縣",
        "stationEName": "Jiuzantou"
      },
      {
        "stationName": "合興",
        "stationAddrTw": "新竹縣",
        "stationEName": "Hexing"
      },
      {
        "stationName": "富貴",
        "stationAddrTw": "新竹縣",
        "stationEName": "Fugui"
      },
      {
        "stationName": "內灣",
        "stationAddrTw": "新竹縣",
        "stationEName": "Neiwan"
      },
      {
        "stationName": "新竹",
        "stationAddrTw": "新竹市",
        "stationEName": "Hsinchu"
      },
      {
        "stationName": "三姓橋",
        "stationAddrTw": "新竹市",
        "stationEName": "Sanxingqiao"
      },
      {
        "stationName": "香山",
        "stationAddrTw": "新竹市",
        "stationEName": "Xiangshan"
      },
      {
        "stationName": "崎頂",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Qiding"
      },
      {
        "stationName": "竹南",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Zhunan"
      },
      {
        "stationName": "談文",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Tanwen"
      },
      {
        "stationName": "大山",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Dashan"
      },
      {
        "stationName": "後龍",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Houlong"
      },
      {
        "stationName": "龍港",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Longgang"
      },
      {
        "stationName": "白沙屯",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Baishatun"
      },
      {
        "stationName": "新埔",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Xinpu"
      },
      {
        "stationName": "通霄",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Tongxiao"
      },
      {
        "stationName": "苑裡",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Yuanli"
      },
      {
        "stationName": "日南",
        "stationAddrTw": "臺中市",
        "stationEName": "Rinan"
      },
      {
        "stationName": "大甲",
        "stationAddrTw": "臺中市",
        "stationEName": "Dajia"
      },
      {
        "stationName": "臺中港",
        "stationAddrTw": "臺中市",
        "stationEName": "Taichung Port"
      },
      {
        "stationName": "清水",
        "stationAddrTw": "臺中市",
        "stationEName": "Qingshui"
      },
      {
        "stationName": "沙鹿",
        "stationAddrTw": "臺中市",
        "stationEName": "Shalu"
      },
      {
        "stationName": "龍井",
        "stationAddrTw": "臺中市",
        "stationEName": "Longjing"
      },
      {
        "stationName": "大肚",
        "stationAddrTw": "臺中市",
        "stationEName": "Dadu"
      },
      {
        "stationName": "追分",
        "stationAddrTw": "臺中市",
        "stationEName": "Zhuifen"
      },
      {
        "stationName": "造橋",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Zaoqiao"
      },
      {
        "stationName": "豐富",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Fengfu"
      },
      {
        "stationName": "苗栗",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Miaoli"
      },
      {
        "stationName": "南勢",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Nanshi"
      },
      {
        "stationName": "銅鑼",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Tongluo"
      },
      {
        "stationName": "三義",
        "stationAddrTw": "苗栗縣",
        "stationEName": "Sanyi"
      },
      {
        "stationName": "泰安",
        "stationAddrTw": "臺中市",
        "stationEName": "Tai'an"
      },
      {
        "stationName": "后里",
        "stationAddrTw": "臺中市",
        "stationEName": "Houli"
      },
      {
        "stationName": "豐原",
        "stationAddrTw": "臺中市",
        "stationEName": "Fengyuan"
      },
      {
        "stationName": "栗林",
        "stationAddrTw": "臺中市",
        "stationEName": "Lilin"
      },
      {
        "stationName": "潭子",
        "stationAddrTw": "臺中市",
        "stationEName": "Tanzi"
      },
      {
        "stationName": "頭家厝",
        "stationAddrTw": "臺中市",
        "stationEName": "Toujiacuo"
      },
      {
        "stationName": "松竹",
        "stationAddrTw": "臺中市",
        "stationEName": "Songzhu"
      },
      {
        "stationName": "太原",
        "stationAddrTw": "臺中市",
        "stationEName": "Taiyuan"
      },
      {
        "stationName": "精武",
        "stationAddrTw": "臺中市",
        "stationEName": "Jingwu"
      },
      {
        "stationName": "臺中",
        "stationAddrTw": "臺中市",
        "stationEName": "Taichung"
      },
      {
        "stationName": "五權",
        "stationAddrTw": "臺中市",
        "stationEName": "Wuquan"
      },
      {
        "stationName": "大慶",
        "stationAddrTw": "臺中市",
        "stationEName": "Daqing"
      },
      {
        "stationName": "烏日",
        "stationAddrTw": "臺中市",
        "stationEName": "Wuri"
      },
      {
        "stationName": "新烏日",
        "stationAddrTw": "臺中市",
        "stationEName": "Xinwuri"
      },
      {
        "stationName": "成功",
        "stationAddrTw": "臺中市",
        "stationEName": "Chenggong"
      },
      {
        "stationName": "彰化",
        "stationAddrTw": "彰化縣",
        "stationEName": "Changhua"
      },
      {
        "stationName": "花壇",
        "stationAddrTw": "彰化縣",
        "stationEName": "Huatan"
      },
      {
        "stationName": "大村",
        "stationAddrTw": "彰化縣",
        "stationEName": "Dacun"
      },
      {
        "stationName": "員林",
        "stationAddrTw": "彰化縣",
        "stationEName": "Yuanlin"
      },
      {
        "stationName": "永靖",
        "stationAddrTw": "彰化縣",
        "stationEName": "Yongjing"
      },
      {
        "stationName": "社頭",
        "stationAddrTw": "彰化縣",
        "stationEName": "Shetou"
      },
      {
        "stationName": "田中",
        "stationAddrTw": "彰化縣",
        "stationEName": "Tianzhong"
      },
      {
        "stationName": "二水",
        "stationAddrTw": "彰化縣",
        "stationEName": "Ershui"
      },
      {
        "stationName": "源泉",
        "stationAddrTw": "彰化縣",
        "stationEName": "Yuanquan"
      },
      {
        "stationName": "濁水",
        "stationAddrTw": "南投縣",
        "stationEName": "Zhuoshui"
      },
      {
        "stationName": "龍泉",
        "stationAddrTw": "南投縣",
        "stationEName": "Longquan"
      },
      {
        "stationName": "集集",
        "stationAddrTw": "南投縣",
        "stationEName": "Jiji"
      },
      {
        "stationName": "水里",
        "stationAddrTw": "南投縣",
        "stationEName": "Shuili"
      },
      {
        "stationName": "車埕",
        "stationAddrTw": "南投縣",
        "stationEName": "Checheng"
      },
      {
        "stationName": "林內",
        "stationAddrTw": "雲林縣",
        "stationEName": "Linnei"
      },
      {
        "stationName": "石榴",
        "stationAddrTw": "雲林縣",
        "stationEName": "Shiliu"
      },
      {
        "stationName": "斗六",
        "stationAddrTw": "雲林縣",
        "stationEName": "Douliu"
      },
      {
        "stationName": "斗南",
        "stationAddrTw": "雲林縣",
        "stationEName": "Dounan"
      },
      {
        "stationName": "石龜",
        "stationAddrTw": "雲林縣",
        "stationEName": "Shigui"
      },
      {
        "stationName": "大林",
        "stationAddrTw": "嘉義縣",
        "stationEName": "Dalin"
      },
      {
        "stationName": "民雄",
        "stationAddrTw": "嘉義縣",
        "stationEName": "Minxiong"
      },
      {
        "stationName": "嘉北",
        "stationAddrTw": "嘉義市",
        "stationEName": "Jiabei"
      },
      {
        "stationName": "嘉義",
        "stationAddrTw": "嘉義市",
        "stationEName": "Chiayi"
      },
      {
        "stationName": "水上",
        "stationAddrTw": "嘉義縣",
        "stationEName": "Shuishang"
      },
      {
        "stationName": "南靖",
        "stationAddrTw": "嘉義縣",
        "stationEName": "Nanjing"
      },
      {
        "stationName": "後壁",
        "stationAddrTw": "臺南市",
        "stationEName": "Houbi"
      },
      {
        "stationName": "新營",
        "stationAddrTw": "臺南市",
        "stationEName": "Xinying"
      },
      {
        "stationName": "柳營",
        "stationAddrTw": "臺南市",
        "stationEName": "Liuying"
      },
      {
        "stationName": "林鳳營",
        "stationAddrTw": "臺南市",
        "stationEName": "Linfengying"
      },
      {
        "stationName": "隆田",
        "stationAddrTw": "臺南市",
        "stationEName": "Longtian"
      },
      {
        "stationName": "拔林",
        "stationAddrTw": "臺南市",
        "stationEName": "Balin"
      },
      {
        "stationName": "善化",
        "stationAddrTw": "臺南市",
        "stationEName": "Shanhua"
      },
      {
        "stationName": "南科",
        "stationAddrTw": "臺南市",
        "stationEName": "Nanke"
      },
      {
        "stationName": "新市",
        "stationAddrTw": "臺南市",
        "stationEName": "Xinshi"
      },
      {
        "stationName": "永康",
        "stationAddrTw": "臺南市",
        "stationEName": "Yongkang"
      },
      {
        "stationName": "大橋",
        "stationAddrTw": "臺南市",
        "stationEName": "Daqiao"
      },
      {
        "stationName": "臺南",
        "stationAddrTw": "臺南市",
        "stationEName": "Tainan"
      },
      {
        "stationName": "保安",
        "stationAddrTw": "臺南市",
        "stationEName": "Bao'an"
      },
      {
        "stationName": "仁德",
        "stationAddrTw": "臺南市",
        "stationEName": "Rende"
      },
      {
        "stationName": "中洲",
        "stationAddrTw": "臺南市",
        "stationEName": "Zhongzhou"
      },
      {
        "stationName": "長榮大學",
        "stationAddrTw": "臺南市",
        "stationEName": "Chang Jung Christian University"
      },
      {
        "stationName": "沙崙",
        "stationAddrTw": "臺南市",
        "stationEName": "Shalun"
      },
      {
        "stationName": "大湖",
        "stationAddrTw": "高雄市",
        "stationEName": "Dahu"
      },
      {
        "stationName": "路竹",
        "stationAddrTw": "高雄市",
        "stationEName": "Luzhu"
      },
      {
        "stationName": "岡山",
        "stationAddrTw": "高雄市",
        "stationEName": "Gangshan"
      },
      {
        "stationName": "橋頭",
        "stationAddrTw": "高雄市",
        "stationEName": "Qiaotou"
      },
      {
        "stationName": "楠梓",
        "stationAddrTw": "高雄市",
        "stationEName": "Nanzi"
      },
      {
        "stationName": "新左營",
        "stationAddrTw": "高雄市",
        "stationEName": "Xinzuoying"
      },
      {
        "stationName": "左營",
        "stationAddrTw": "高雄市",
        "stationEName": "Zuoying"
      },
      {
        "stationName": "內惟",
        "stationAddrTw": "高雄市",
        "stationEName": "Neiwei"
      },
      {
        "stationName": "美術館",
        "stationAddrTw": "高雄市",
        "stationEName": "Museum of Fine Arts"
      },
      {
        "stationName": "鼓山",
        "stationAddrTw": "高雄市",
        "stationEName": "Gushan"
      },
      {
        "stationName": "三塊厝",
        "stationAddrTw": "高雄市",
        "stationEName": "Sankuaicuo"
      },
      {
        "stationName": "高雄",
        "stationAddrTw": "高雄市",
        "stationEName": "Kaohsiung"
      },
      {
        "stationName": "民族",
        "stationAddrTw": "高雄市",
        "stationEName": "Minzu"
      },
      {
        "stationName": "科工館",
        "stationAddrTw": "高雄市",
        "stationEName": "Science And Technology Museum"
      },
      {
        "stationName": "正義",
        "stationAddrTw": "高雄市",
        "stationEName": "Zhengyi"
      },
      {
        "stationName": "鳳山",
        "stationAddrTw": "高雄市",
        "stationEName": "Fongshan"
      },
      {
        "stationName": "後庄",
        "stationAddrTw": "高雄市",
        "stationEName": "Houzhuang"
      },
      {
        "stationName": "九曲堂",
        "stationAddrTw": "高雄市",
        "stationEName": "Jiuqutang"
      },
      {
        "stationName": "六塊厝",
        "stationAddrTw": "屏東縣",
        "stationEName": "Liukuaicuo"
      },
      {
        "stationName": "屏東",
        "stationAddrTw": "屏東縣",
        "stationEName": "Pingtung"
      },
      {
        "stationName": "歸來",
        "stationAddrTw": "屏東縣",
        "stationEName": "Guilai"
      },
      {
        "stationName": "麟洛",
        "stationAddrTw": "屏東縣",
        "stationEName": "Linluo"
      },
      {
        "stationName": "西勢",
        "stationAddrTw": "屏東縣",
        "stationEName": "Xishi"
      },
      {
        "stationName": "竹田",
        "stationAddrTw": "屏東縣",
        "stationEName": "Zhutian"
      },
      {
        "stationName": "潮州",
        "stationAddrTw": "屏東縣",
        "stationEName": "Chaozhou"
      },
      {
        "stationName": "崁頂",
        "stationAddrTw": "屏東縣",
        "stationEName": "Kanding"
      },
      {
        "stationName": "南州",
        "stationAddrTw": "屏東縣",
        "stationEName": "Nanzhou"
      },
      {
        "stationName": "鎮安",
        "stationAddrTw": "屏東縣",
        "stationEName": "Zhen'an"
      },
      {
        "stationName": "林邊",
        "stationAddrTw": "屏東縣",
        "stationEName": "Linbian"
      },
      {
        "stationName": "佳冬",
        "stationAddrTw": "屏東縣",
        "stationEName": "Jiadong"
      },
      {
        "stationName": "東海",
        "stationAddrTw": "屏東縣",
        "stationEName": "Donghai"
      },
      {
        "stationName": "枋寮",
        "stationAddrTw": "屏東縣",
        "stationEName": "Fangliao"
      },
      {
        "stationName": "加祿",
        "stationAddrTw": "屏東縣",
        "stationEName": "Jialu"
      },
      {
        "stationName": "內獅",
        "stationAddrTw": "屏東縣",
        "stationEName": "Neishi"
      },
      {
        "stationName": "枋山",
        "stationAddrTw": "屏東縣",
        "stationEName": "Fangshan"
      },
      {
        "stationName": "枋野",
        "stationAddrTw": "屏東縣",
        "stationEName": "Fangye"
      },
      {
        "stationName": "大武",
        "stationAddrTw": "臺東縣",
        "stationEName": "Dawu"
      },
      {
        "stationName": "瀧溪",
        "stationAddrTw": "臺東縣",
        "stationEName": "Longxi"
      },
      {
        "stationName": "金崙",
        "stationAddrTw": "臺東縣",
        "stationEName": "Jinlun"
      },
      {
        "stationName": "太麻里",
        "stationAddrTw": "臺東縣",
        "stationEName": "Taimali"
      },
      {
        "stationName": "知本",
        "stationAddrTw": "臺東縣",
        "stationEName": "Zhiben"
      },
      {
        "stationName": "康樂",
        "stationAddrTw": "臺東縣",
        "stationEName": "Kangle"
      },
      {
        "stationName": "南方小站",
        "stationAddrTw": "屏東縣",
        "stationEName": "South"
      },
      {
        "stationName": "潮州基地",
        "stationAddrTw": "屏東縣",
        "stationEName": "Chaozhou Railway Workshop"
      },
      {
        "stationName": "臺東",
        "stationAddrTw": "臺東縣",
        "stationEName": "Taitung"
      },
      {
        "stationName": "山里",
        "stationAddrTw": "臺東縣",
        "stationEName": "Shanli"
      },
      {
        "stationName": "鹿野",
        "stationAddrTw": "臺東縣",
        "stationEName": "Luye"
      },
      {
        "stationName": "瑞源",
        "stationAddrTw": "臺東縣",
        "stationEName": "Ruiyuan"
      },
      {
        "stationName": "瑞和",
        "stationAddrTw": "臺東縣",
        "stationEName": "Ruihe"
      },
      {
        "stationName": "關山",
        "stationAddrTw": "臺東縣",
        "stationEName": "Guanshan"
      },
      {
        "stationName": "海端",
        "stationAddrTw": "臺東縣",
        "stationEName": "Haiduan"
      },
      {
        "stationName": "池上",
        "stationAddrTw": "臺東縣",
        "stationEName": "Chishang"
      },
      {
        "stationName": "富里",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Fuli"
      },
      {
        "stationName": "東竹",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Dongzhu"
      },
      {
        "stationName": "東里",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Dongli"
      },
      {
        "stationName": "玉里",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Yuli"
      },
      {
        "stationName": "三民",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Sanmin"
      },
      {
        "stationName": "瑞穗",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Ruisui"
      },
      {
        "stationName": "富源",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Fuyuan"
      },
      {
        "stationName": "大富",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Dafu"
      },
      {
        "stationName": "光復",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Guangfu"
      },
      {
        "stationName": "萬榮",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Wanrong"
      },
      {
        "stationName": "鳳林",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Fenglin"
      },
      {
        "stationName": "南平",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Nanping"
      },
      {
        "stationName": "林榮新光",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Linrong Shin Kong"
      },
      {
        "stationName": "豐田",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Fengtian"
      },
      {
        "stationName": "壽豐",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Shoufeng"
      },
      {
        "stationName": "平和",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Pinghe"
      },
      {
        "stationName": "志學",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Zhixue"
      },
      {
        "stationName": "吉安",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Ji'an"
      },
      {
        "stationName": "花蓮",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Hualien"
      },
      {
        "stationName": "北埔",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Beipu"
      },
      {
        "stationName": "景美",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Jingmei"
      },
      {
        "stationName": "新城",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Xincheng"
      },
      {
        "stationName": "崇德",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Chongde"
      },
      {
        "stationName": "和仁",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Heren"
      },
      {
        "stationName": "和平",
        "stationAddrTw": "花蓮縣",
        "stationEName": "Heping"
      },
      {
        "stationName": "漢本",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Hanben"
      },
      {
        "stationName": "武塔",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Wuta"
      },
      {
        "stationName": "南澳",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Nan'ao"
      },
      {
        "stationName": "東澳",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Dong'ao"
      },
      {
        "stationName": "永樂",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Yongle"
      },
      {
        "stationName": "蘇澳",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Su'ao"
      },
      {
        "stationName": "蘇澳新",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Su'aoxin"
      },
      {
        "stationName": "新馬",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Xinma"
      },
      {
        "stationName": "冬山",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Dongshan"
      },
      {
        "stationName": "羅東",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Luodong"
      },
      {
        "stationName": "中里",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Zhongli_Yilan"
      },
      {
        "stationName": "二結",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Erjie"
      },
      {
        "stationName": "宜蘭",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Yilan"
      },
      {
        "stationName": "四城",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Sicheng"
      },
      {
        "stationName": "礁溪",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Jiaoxi"
      },
      {
        "stationName": "頂埔",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Dingpu"
      },
      {
        "stationName": "頭城",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Toucheng"
      },
      {
        "stationName": "外澳",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Wai'ao"
      },
      {
        "stationName": "龜山",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Guishan"
      },
      {
        "stationName": "大溪",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Daxi"
      },
      {
        "stationName": "大里",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Dali"
      },
      {
        "stationName": "石城",
        "stationAddrTw": "宜蘭縣",
        "stationEName": "Shicheng"
      },
      {
        "stationName": "福隆",
        "stationAddrTw": "新北市",
        "stationEName": "Fulong"
      },
      {
        "stationName": "貢寮",
        "stationAddrTw": "新北市",
        "stationEName": "Gongliao"
      },
      {
        "stationName": "雙溪",
        "stationAddrTw": "新北市",
        "stationEName": "Shuangxi"
      },
      {
        "stationName": "牡丹",
        "stationAddrTw": "新北市",
        "stationEName": "Mudan"
      },
      {
        "stationName": "三貂嶺",
        "stationAddrTw": "新北市",
        "stationEName": "Sandiaoling"
      },
      {
        "stationName": "大華",
        "stationAddrTw": "新北市",
        "stationEName": "Dahua"
      },
      {
        "stationName": "十分",
        "stationAddrTw": "新北市",
        "stationEName": "Shifen"
      },
      {
        "stationName": "望古",
        "stationAddrTw": "新北市",
        "stationEName": "Wanggu"
      },
      {
        "stationName": "嶺腳",
        "stationAddrTw": "新北市",
        "stationEName": "Lingjiao"
      },
      {
        "stationName": "平溪",
        "stationAddrTw": "新北市",
        "stationEName": "Pingxi"
      },
      {
        "stationName": "菁桐",
        "stationAddrTw": "新北市",
        "stationEName": "Jingtong"
      },
      {
        "stationName": "猴硐",
        "stationAddrTw": "新北市",
        "stationEName": "Houtong"
      },
      {
        "stationName": "瑞芳",
        "stationAddrTw": "新北市",
        "stationEName": "Ruifang"
      },
      {
        "stationName": "海科館",
        "stationAddrTw": "基隆市",
        "stationEName": "Haikeguan"
      },
      {
        "stationName": "八斗子",
        "stationAddrTw": "新北市",
        "stationEName": "Badouzi"
      },
      {
        "stationName": "四腳亭",
        "stationAddrTw": "新北市",
        "stationEName": "Sijiaoting"
      },
      {
        "stationName": "暖暖",
        "stationAddrTw": "基隆市",
        "stationEName": "Nuannuan"
      }
    ]

    countyNumSelect.addEventListener('change', function() {
        const num = parseInt(this.value, 10);
        selectContainer.innerHTML = '';
        for (let i = 0; i < num; i++) {
            const select = document.createElement('select');
            select.className = 'county-select';
            counties.forEach(county => {
                const option = document.createElement('option');
                option.value = county;
                option.textContent = county;
                select.appendChild(option);
            });
            selectContainer.appendChild(select);
        }
    });

    saveButton.addEventListener('click', function() {
        const selectedCounties = Array.from(document.querySelectorAll('.county-select'))
            .map(select => select.value);
        resultContainer.innerHTML = '<h2>Selected Counties: ' + selectedCounties.join(', ') + '</h2>';
        const allstation = showStations(selectedCounties);
        let suffledNames = shuffleArray(allstation);
        for (let i = 1; i < suffledNames.length; i++) {
            (function (i) {
              setTimeout(() => {
                  let rand = Math.floor(Math.random() * (suffledNames.length));
                  destination.innerHTML = suffledNames[rand].stationName;
                  destinationEn.innerHTML = `${suffledNames[rand].stationEName}`;
                  prevstation1.innerHTML = suffledNames[rand - 1].stationName;
                  enstation1.innerHTML = suffledNames[rand - 1].stationEName;
                  enstation2.innerHTML = suffledNames[rand + 1].stationEName;
                  nextstation1.innerHTML = suffledNames[rand + 1].stationName;
              }, i)
            })(i * 100, i)
        }

    });

    function showStations(selectedCounties) {
        stationsDisplay.innerHTML = '';
        const filteredStations = stationsData.filter(station => selectedCounties.includes(station.stationAddrTw));
        return filteredStations;
    }

    function shuffleArray(array) {
      let shuffeledArr = [...array]
    
      for (let i = shuffeledArr.length - 1; i > 0; i--) {
          let rand = Math.floor(Math.random() * (i + 1))
          let temp = shuffeledArr[rand]
          shuffeledArr[rand] = shuffeledArr[i]
          shuffeledArr[i] = temp
      }
      return shuffeledArr;
    }

    // Trigger change event on page load to initialize the selects with the default value
    countyNumSelect.dispatchEvent(new Event('change'));
});


