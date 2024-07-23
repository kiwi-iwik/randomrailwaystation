// Load the JSON data
const data = [
    {
      "stationName": "基隆",
      "stationAddrTw": "基隆市"
    },
    {
      "stationName": "三坑",
      "stationAddrTw": "基隆市"
    },
    {
      "stationName": "八堵",
      "stationAddrTw": "基隆市"
    },
    {
      "stationName": "七堵",
      "stationAddrTw": "基隆市"
    },
    {
      "stationName": "百福",
      "stationAddrTw": "基隆市"
    },
    {
      "stationName": "五堵",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "汐止",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "汐科",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "南港",
      "stationAddrTw": "臺北市"
    },
    {
      "stationName": "松山",
      "stationAddrTw": "臺北市"
    },
    {
      "stationName": "臺北",
      "stationAddrTw": "臺北市"
    },
    {
      "stationName": "臺北-環島",
      "stationAddrTw": "臺北市"
    },
    {
      "stationName": "萬華",
      "stationAddrTw": "臺北市"
    },
    {
      "stationName": "板橋",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "浮洲",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "樹林",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "南樹林",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "山佳",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "鶯歌",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "桃園",
      "stationAddrTw": "桃園市"
    },
    {
      "stationName": "內壢",
      "stationAddrTw": "桃園市"
    },
    {
      "stationName": "中壢",
      "stationAddrTw": "桃園市"
    },
    {
      "stationName": "埔心",
      "stationAddrTw": "桃園市"
    },
    {
      "stationName": "楊梅",
      "stationAddrTw": "桃園市"
    },
    {
      "stationName": "富岡",
      "stationAddrTw": "桃園市"
    },
    {
      "stationName": "新富",
      "stationAddrTw": "桃園市"
    },
    {
      "stationName": "北湖",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "湖口",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "新豐",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "竹北",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "北新竹",
      "stationAddrTw": "新竹市"
    },
    {
      "stationName": "千甲",
      "stationAddrTw": "新竹市"
    },
    {
      "stationName": "新莊",
      "stationAddrTw": "新竹市"
    },
    {
      "stationName": "竹中",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "六家",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "上員",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "榮華",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "竹東",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "橫山",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "九讚頭",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "合興",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "富貴",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "內灣",
      "stationAddrTw": "新竹縣"
    },
    {
      "stationName": "新竹",
      "stationAddrTw": "新竹市"
    },
    {
      "stationName": "三姓橋",
      "stationAddrTw": "新竹市"
    },
    {
      "stationName": "香山",
      "stationAddrTw": "新竹市"
    },
    {
      "stationName": "崎頂",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "竹南",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "談文",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "大山",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "後龍",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "龍港",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "白沙屯",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "新埔",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "通霄",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "苑裡",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "日南",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "大甲",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "臺中港",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "清水",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "沙鹿",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "龍井",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "大肚",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "追分",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "造橋",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "豐富",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "苗栗",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "南勢",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "銅鑼",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "三義",
      "stationAddrTw": "苗栗縣"
    },
    {
      "stationName": "泰安",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "后里",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "豐原",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "栗林",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "潭子",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "頭家厝",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "松竹",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "太原",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "精武",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "臺中",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "五權",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "大慶",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "烏日",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "新烏日",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "成功",
      "stationAddrTw": "臺中市"
    },
    {
      "stationName": "彰化",
      "stationAddrTw": "彰化縣"
    },
    {
      "stationName": "花壇",
      "stationAddrTw": "彰化縣"
    },
    {
      "stationName": "大村",
      "stationAddrTw": "彰化縣"
    },
    {
      "stationName": "員林",
      "stationAddrTw": "彰化縣"
    },
    {
      "stationName": "永靖",
      "stationAddrTw": "彰化縣"
    },
    {
      "stationName": "社頭",
      "stationAddrTw": "彰化縣"
    },
    {
      "stationName": "田中",
      "stationAddrTw": "彰化縣"
    },
    {
      "stationName": "二水",
      "stationAddrTw": "彰化縣"
    },
    {
      "stationName": "源泉",
      "stationAddrTw": "彰化縣"
    },
    {
      "stationName": "濁水",
      "stationAddrTw": "南投縣"
    },
    {
      "stationName": "龍泉",
      "stationAddrTw": "南投縣"
    },
    {
      "stationName": "集集",
      "stationAddrTw": "南投縣"
    },
    {
      "stationName": "水里",
      "stationAddrTw": "南投縣"
    },
    {
      "stationName": "車埕",
      "stationAddrTw": "南投縣"
    },
    {
      "stationName": "林內",
      "stationAddrTw": "雲林縣"
    },
    {
      "stationName": "石榴",
      "stationAddrTw": "雲林縣"
    },
    {
      "stationName": "斗六",
      "stationAddrTw": "雲林縣"
    },
    {
      "stationName": "斗南",
      "stationAddrTw": "雲林縣"
    },
    {
      "stationName": "石龜",
      "stationAddrTw": "雲林縣"
    },
    {
      "stationName": "大林",
      "stationAddrTw": "嘉義縣"
    },
    {
      "stationName": "民雄",
      "stationAddrTw": "嘉義縣"
    },
    {
      "stationName": "嘉北",
      "stationAddrTw": "嘉義市"
    },
    {
      "stationName": "嘉義",
      "stationAddrTw": "嘉義市"
    },
    {
      "stationName": "水上",
      "stationAddrTw": "嘉義縣"
    },
    {
      "stationName": "南靖",
      "stationAddrTw": "嘉義縣"
    },
    {
      "stationName": "後壁",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "新營",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "柳營",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "林鳳營",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "隆田",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "拔林",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "善化",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "南科",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "新市",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "永康",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "大橋",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "臺南",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "保安",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "仁德",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "中洲",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "長榮大學",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "沙崙",
      "stationAddrTw": "臺南市"
    },
    {
      "stationName": "大湖",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "路竹",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "岡山",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "橋頭",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "楠梓",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "新左營",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "左營",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "內惟",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "美術館",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "鼓山",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "三塊厝",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "高雄",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "民族",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "科工館",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "正義",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "鳳山",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "後庄",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "九曲堂",
      "stationAddrTw": "高雄市"
    },
    {
      "stationName": "六塊厝",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "屏東",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "歸來",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "麟洛",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "西勢",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "竹田",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "潮州",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "崁頂",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "南州",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "鎮安",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "林邊",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "佳冬",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "東海",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "枋寮",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "加祿",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "內獅",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "枋山",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "枋野",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "大武",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "瀧溪",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "金崙",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "太麻里",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "知本",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "康樂",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "南方小站",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "潮州基地",
      "stationAddrTw": "屏東縣"
    },
    {
      "stationName": "臺東",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "山里",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "鹿野",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "瑞源",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "瑞和",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "關山",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "海端",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "池上",
      "stationAddrTw": "臺東縣"
    },
    {
      "stationName": "富里",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "東竹",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "東里",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "玉里",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "三民",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "瑞穗",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "富源",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "大富",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "光復",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "萬榮",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "鳳林",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "南平",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "林榮新光",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "豐田",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "壽豐",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "平和",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "志學",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "吉安",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "花蓮",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "北埔",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "景美",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "新城",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "崇德",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "和仁",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "和平",
      "stationAddrTw": "花蓮縣"
    },
    {
      "stationName": "漢本",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "武塔",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "南澳",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "東澳",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "永樂",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "蘇澳",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "蘇澳新",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "新馬",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "冬山",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "羅東",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "中里",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "二結",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "宜蘭",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "四城",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "礁溪",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "頂埔",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "頭城",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "外澳",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "龜山",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "大溪",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "大里",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "石城",
      "stationAddrTw": "宜蘭縣"
    },
    {
      "stationName": "福隆",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "貢寮",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "雙溪",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "牡丹",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "三貂嶺",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "大華",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "十分",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "望古",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "嶺腳",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "平溪",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "菁桐",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "猴硐",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "瑞芳",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "海科館",
      "stationAddrTw": "基隆市"
    },
    {
      "stationName": "八斗子",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "四腳亭",
      "stationAddrTw": "新北市"
    },
    {
      "stationName": "暖暖",
      "stationAddrTw": "基隆市"
    }
  ];
  
  // Initialize the new object
  const transformedData = {
    "stationName": [],
    "stationAddrTw": []
  };
  
  // Populate the object with data
  data.forEach(entry => {
    transformedData["stationName"].push(entry["stationName"]);
    transformedData["stationAddrTw"].push(entry["stationAddrTw"]);
  });
  
  // Convert the object to a JSON string
  const transformedJson = JSON.stringify(transformedData, null, 2);
  
  // Print the transformed JSON
  console.log(transformedJson);
  