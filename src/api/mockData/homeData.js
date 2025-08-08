export default {
  getTableData: () => {    
    return {
      code: 200,
      tableData: [
          {
            name: "显卡",
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000,
          },
          {
            name: "主板",
            todayBuy: 300,
            monthBuy: 2200,
            totalBuy: 24000,
          },
          {
            name: "键盘",
            todayBuy: 800,
            monthBuy: 4500,
            totalBuy: 65000,
          },
          {
            name: "鼠标",
            todayBuy: 1200,
            monthBuy: 6500,
            totalBuy: 45000,
          },
          {
            name: "硬盘",
            todayBuy: 300,
            monthBuy: 2000,
            totalBuy: 34000,
          },
          {
            name: "CPU",
            todayBuy: 350,
            monthBuy: 3000,
            totalBuy: 22000,
          },
        ],
    }
  },

  getCountData: () => {
    return {
      code: 200,
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "SuccessFilled",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "StarFilled",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "GoodsFilled",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "SuccessFilled",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "StarFilled",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "GoodsFilled",
          color: "#5ab1ef",
        },
        {
          name: "本年支付订单",
          value: 1234,
          icon: "SuccessFilled",
          color: "#2ec7c9",
        },
        {
          name: "本年收藏订单",
          value: 210,
          icon: "StarFilled",
          color: "#ffb980",
        },
        {
          name: "本年未支付订单",
          value: 1234,
          icon: "GoodsFilled",
          color: "#5ab1ef",
        },
      ],
    };
  },
  getChartData: () => {
    return {
      code: 200,
      orderData: {
          date: [
            "2019-10-01",
            "2019-10-02",
            "2019-10-03",
            "2019-10-04",
            "2019-10-05",
            "2019-10-06",
            "2019-10-07",
          ],
          data: [
            {
              显卡: 3839,
              主板: 1423,
              键盘: 4965,
              鼠标: 3334,
              硬盘: 2820,
              CPU: 4751,
            },
            {
              显卡: 3560,
              主板: 2099,
              键盘: 3192,
              鼠标: 4210,
              硬盘: 1283,
              CPU: 1613,
            },
            {
              显卡: 1864,
              主板: 4598,
              键盘: 4202,
              鼠标: 4377,
              硬盘: 4123,
              CPU: 4750,
            },
            {
              显卡: 2634,
              主板: 1458,
              键盘: 4155,
              鼠标: 2847,
              硬盘: 2551,
              CPU: 1733,
            },
            {
              显卡: 3622,
              主板: 3990,
              键盘: 2860,
              鼠标: 3870,
              硬盘: 1852,
              CPU: 1712,
            },
            {
              显卡: 2004,
              主板: 1864,
              键盘: 1395,
              鼠标: 1315,
              硬盘: 4051,
              CPU: 2293,
            },
            {
              显卡: 3797,
              主板: 3936,
              键盘: 3642,
              鼠标: 4408,
              硬盘: 3374,
              CPU: 3874,
            },
          ],
        },
        videoData: [
          { name: "显卡", value: 2999 },
          { name: "主板", value: 5999 },
          { name: "键盘", value: 1500 },
          { name: "鼠标", value: 1999 },
          { name: "硬盘", value: 2200 },
          { name: "CPU", value: 4500 },
        ],
        userData: [
          { date: "周一", new: 5, active: 200 },
          { date: "周二", new: 10, active: 500 },
          { date: "周三", new: 12, active: 550 },
          { date: "周四", new: 60, active: 800 },
          { date: "周五", new: 65, active: 550 },
          { date: "周六", new: 53, active: 770 },
          { date: "周日", new: 33, active: 170 },
        ],
    };
  }
}