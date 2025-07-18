document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.querySelector('.map-block');
    const tooltip = document.getElementById('provinceTooltip');
    const tooltipImage = document.getElementById('tooltipImage');
    const tooltipText = document.getElementById('tooltipText');
    const provincePaths = mapContainer.querySelectorAll('svg > g > path.land');

    const provinceData = {
"CN-62": { image: "assets/images/foot.jpg", text: "" },
"CN-45": { image: "assets/images/foot.jpg", text: "" },
"CN-52": { image: "assets/images/foot.jpg", text: "" },
"CN-46": { image: "assets/images/foot.jpg", text: "" },
"CN-13": { image: "assets/images/foot.jpg", text: "" },
"CN-41": { image: "assets/images/foot.jpg", text: "" },
"CN-91": { image: "assets/images/foot.jpg", text: "" },
"CN-23": { image: "assets/images/foot.jpg", text: "" },
"CN-65": { image: "assets/images/foot.jpg", text: "" },

"CN-41": { image: "assets/images/foot.jpg", text: "" },
"CN-91": { image: "assets/images/foot.jpg", text: "" },
"CN-23": { image: "assets/images/foot.jpg", text: "" },

"CN-71": { image: "assets/images/foot.jpg", text: "" },
"CN-50": { image: "assets/images/foot.jpg", text: "" },

"CN-36": { image: "assets/images/foot.jpg", text: "" },
"CN-92": { image: "assets/images/foot.jpg", text: "" },
"CN-54": { image: "assets/images/foot.jpg", text: "" },
"CN-53": { image: "assets/images/foot.jpg", text: "" },
"CN-63": { image: "assets/images/foot.jpg", text: "" },
"CN-15": { image: "assets/images/foot.jpg", text: "" },
"CN-14": { image: "assets/images/foot.jpg", text: "" },
"CN-64": { image: "assets/images/foot.jpg", text: "" },


"CN-32": {
  image: "../images/jiangsu.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">无锡 SK Hynix Co2 & C2F System Installation & Hook up</td>
      </tr>
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.04</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">无锡 SK Hynix System IC Chemical System Installation</td>
      </tr>
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">无锡 SK Hynix System IC PKG.6 Chemical System Installation</td>
      </tr>
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.01</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">无锡 SK Hynix System IC Wafer Plant Hook-up Work</td>
      </tr>
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.01</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">杭州富芯12英寸模拟集成电路芯片生产线项目Hook-up 工程</td>
      </tr>
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">杭州富芯12英寸模拟集成电路芯片生产线项目Hook-up 工程</td>
      </tr>
    </table>
  `
},

"CN-21": {
  image: "../images/liaoning.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2016.04</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">大连Intel HK19B特殊气体二次配管道安装工程</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2016.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">大连Intel 特殊气体及化学管道二次配管道安装工程</td>
      </tr>

     <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.03</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">大连Intel TANGO项目GAS二次配管道安装工程</td>
      </tr>

     <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">BDEAS生产设备采购及安装项目</td>
      </tr>

     <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">CPHF系统</td>
      </tr>
    </table>
  `
},

"CN-61": {
  image: "../images/shaanxi.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2016.08</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">中国电子M Retrofit二期PJT内 B/E上部层装修及水电安装工程</td>
      </tr>
    

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2017.09</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">PCW工厂仓库改造工程</td>
      </tr>
    
     <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.04</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">西安SCS 厂区临建工程之模块化加工厂建设工程</td>
      </tr>

        <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.09</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">X2 PJT GAS&PCW 管道工程</td>
      </tr>
      
        <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">1~2M3 TANK Installation Technology Support</td>
      </tr>

        <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">0.5~2M3 TANK Installation Technology Support</td>
      </tr>
    </table>
  `
},

"CN-37": {
  image: "../images/shandong.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2017.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">烟台Y1 Notch Grinder增量对应C/R&UT安装工程-UT工程</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">青岛融合半导体有限公司高端封测厂房项目特气系统</td>
      </tr>
   
     <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">万维半导体技术（山东）有限公司消防改造项目-洁净室装修及办公室装修工程</td>
      </tr>
   
     <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">青岛融合半导体有限公司高端封测厂房项目特气系统</td>
      </tr>

    </table>
  `
},

"CN-31": {
  image: "../images/shanghai.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2016.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">SCS M Retrofit PJT 2次工程内西安B/E上部层装修及水电安装工程之室外Pipe Rack GAS工程（M07GKG)</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.10</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">二次配管项目动力侧二次配系统-废水二包专业分包工程</td>
      </tr>

        <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">机电安装服务工程</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">飞卓科技（上海）股份有限公司设备管道安装工程</td>
      </tr>
    </table>
  `
},
    
      "CN-32": {
  image: "../images/jiangsu.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">



      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.08</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">住化电子（常州）储罐Level Gauge安装项目</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">无锡SK CO2供应设备安装工程</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">无锡SK Wet Chemical 废液再生系统制作及安装工程</td>
      </tr>



      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.09</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">南京LG化学电解液供应设备管道安装工程</td>

      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">盐城 SK 电池厂一期二栋配套机安装工程 电池厂一期二栋配套机安装工程 </td>
      </tr>


      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.09</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">海辰半导体（无锡）有限公司--W09仓库工程</td>
      </tr>

     <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.08</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Wet 提炼栋 RTO 系统改造工程</td>
      </tr>


      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.03</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">无锡海力士Ar 系统扩充项目MEI(追加）</td>
      </tr>
    </table>
  `
},
"CN-35": {
  image: "../images/fujian.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">厦门恒坤-光刻胶研发和生产设备项目</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">合成设备采购</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">电机更换及MCC PaneI改建工程，电机改造工程</td>
      </tr>

       <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">实验室灌装设备</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">离子交换系统250L</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">一期DCS上位机拆移改造项目</td>
      </tr>

    </table>
  `
},
      "CN-12": {
  image: "../images/tianjin.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">天津二期新筑环境工程 风道管道工事（P1）</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">三星电机滨海1工厂RTO及浓缩机增设工程</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">天津三星电机有限公司 MLCC 30 亿扩能投资改造项目/屋顶风道管道工程</td>
      </tr>

    </table>
  `
},
"CN-34": {
  image: "../images/anhui.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.08</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">TM1 Sensor显影机改造TAMH回收管路改造</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">长鑫二次配劳务包</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">合肥蓝科投资有限公司合肥综合保税区电子信息标准化厂房项目-大宗气体供应系统工程施工</td>
      </tr>

 <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">合肥长鑫 ALHF CXMT工程</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">合肥芯科年产8000吨异丙醇一期安装工程</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">HF CXMT项目</td>
      </tr>

   <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">合肥晶合大宗气体不锈钢管材料及安装技术服务</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">安徽恒坤1000L混配系统3&5管线自动灌装机项目</td>
      </tr>

    </table>
  `
},
"CN-51": {
  image: "../images/sichuan.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">BOECD TEST CENTRAL SET-UP</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">绵阳BOE B11增设设备set up--设备安装及管道连接</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.10</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">成都BOE B7增设设备set up--设备安装及管道连接</td>
      </tr>

     <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.08</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">成都BOE B7 TSP PH2 增设设备 set up </td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">绵阳BOE B11 TSP PH2 增设设备 set up </td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">IT机台安装</td>
      </tr>
    </table>
  `
},
"CN-22": {
  image: "../images/zhan_wei.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">长春天明盛科技有限公司工厂建设设计咨询</td>
      </tr>

    </table>
  `
},

"CN-33": {
  image: "../images/zhejiang.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.08</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">浙江建业微电子材料有限公司电子级异丙醇管道安装项目</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.03</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">杭州富芯12英寸模拟集成电路芯片生产线项目（一期）厂务二次配/Hookup工程总承包项目 PCW/CW/PV系统专业分包</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">电子级异丙醇灌装系统设备安装工程</td>
      </tr>

 <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">CN-2 Project 充装站新增分析仪器配管工事</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">杭州积海4K二次配 Special Gas Hook-Up工程</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">衢州晓星 VC3 PROJECT - HVAC & Clean Room Panel 安装</td>
      </tr>

<tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">杭州富芯半导体焊接工程安装</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.03</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;"> PCW/CW/PV system Hook up的设计、采购、安装及测试、验收、维保</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">衢州晓星ISO接头更换工程</td>
      </tr>
    </table>
  `
},
"CN-44": {
  image: "../images/guangdong.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.01</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">广州乐金CO工厂储藏所容器安装工程</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Chemical Line set-up 化学工程线组建工程-化学品项目管道安装</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.09</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">广州LGD CO工厂增设设备 set up </td>
      </tr>
    </table>
  `
},
"CN-43": {
  image: "../images/zhan_wei.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">长沙惠科显影液浓度管控及回收系统安装工程</td>
      </tr>
    </table>
  `
},
"CN-13": {
  image: "../images/zhan_wei.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.01</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">中电科技第四十五研究所 CDS供液管道工程</td>
      </tr>
    </table>
  `
},
"CN-11": {
  image: "../images/zhan_wei.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.01</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">北京集电 SCO2 管道 VMB 系统工程-C1B 项目管道安装 </td>
      </tr>

    </table>
  `
},

"CN-42": {
  image: "../images/hubei.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">2万吨/年电子级氨水联产,1万吨/年电子级氨气项目高纯金属管道安装工程</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">武汉新芯 XMC 12B 纯化间扩充项目安装</td>
      </tr>

    </table>
  `
},
    };

    mapContainer.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        let tooltipX = mouseX + 15;
        let tooltipY = mouseY + 15;

        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;

        if (tooltipX + tooltipWidth > window.innerWidth) {
            tooltipX = mouseX - tooltipWidth - 15;
        }
        if (tooltipY + tooltipHeight > window.innerHeight) {
            tooltipY = mouseY - tooltipHeight - 15;
        }

        tooltip.style.left = tooltipX + 'px';
        tooltip.style.top = tooltipY + 'px';
    });

    provincePaths.forEach(path => {
        path.addEventListener('mouseover', function(event) {
            const provinceId = this.id;
            const data = provinceData[provinceId];

            if (data) {
                tooltipImage.src = data.image;
                tooltipText.innerHTML = data.text
                tooltip.style.display = 'flex';
            }
        });

        path.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    });

    mapContainer.addEventListener('mouseout', function(event) {
        if (!mapContainer.contains(event.relatedTarget)) {
            tooltip.style.display = 'none';
        }
    });

    const mainHeader = document.getElementById('mainHeader');
    const navItems = document.querySelectorAll('.nav-item');
    const dropdownContainers = document.querySelectorAll('.dropdown-container');

    let headerHideTimeout;
    let currentActiveDropdown = null;
    let dropdownShowTime = 0;
    const minDisplayDuration = 500;

    function showDropdown(dropdownElement) {
        if (currentActiveDropdown && currentActiveDropdown !== dropdownElement) {
            currentActiveDropdown.style.opacity = '0';
            currentActiveDropdown.style.visibility = 'hidden';
            currentActiveDropdown.style.display = 'none';
        }

        const headerHeight = mainHeader.offsetHeight;
        dropdownElement.style.top = `${headerHeight}px`;

        dropdownElement.style.display = 'block';
        setTimeout(() => {
            dropdownElement.style.opacity = '1';
            dropdownElement.style.visibility = 'visible';
        }, 10);
        currentActiveDropdown = dropdownElement;
        dropdownShowTime = Date.now();
    }

    function hideAllDropdowns() {
        if (!isMouseOverHeaderAndDropdowns()) {
            mainHeader.classList.remove('nav-active');
        }

        if (currentActiveDropdown) {
            const timeSinceShow = Date.now() - dropdownShowTime;
            const remainingTime = minDisplayDuration - timeSinceShow;

            if (remainingTime > 0) {
                clearTimeout(headerHideTimeout);
                headerHideTimeout = setTimeout(() => {
                    if (!isMouseOverHeaderAndDropdowns()) {
                        hideAllDropdownsInternal();
                    }
                }, remainingTime);
            } else {
                hideAllDropdownsInternal();
            }
        }
    }

    function hideAllDropdownsInternal() {
        if (currentActiveDropdown) {
            currentActiveDropdown.style.opacity = '0';
            currentActiveDropdown.style.visibility = 'hidden';
            setTimeout(() => {
                if (currentActiveDropdown) {
                    currentActiveDropdown.style.display = 'none';
                    currentActiveDropdown = null;
                }
            }, 300);
        }
    }

    function isMouseOverHeaderAndDropdowns() {
        if (mainHeader.matches(':hover')) {
            return true;
        }
        for (let i = 0; i < dropdownContainers.length; i++) {
            const d = dropdownContainers[i];
            if (d.matches(':hover') && d.style.display === 'block' && d.style.opacity === '1') {
                return true;
            }
        }
        return false;
    }

    navItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown-container');

        item.addEventListener('mouseenter', function() {
            clearTimeout(headerHideTimeout);
            mainHeader.classList.add('nav-active');
            if (dropdown && window.innerWidth > 768) {
                showDropdown(dropdown);
            } else if (window.innerWidth > 768) {
                hideAllDropdownsInternal();
            }
        });

        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const targetDropdown = this.querySelector('.dropdown-container');
                if (e.currentTarget.getAttribute('href') === '#') {
                    e.preventDefault();
                }

                navItems.forEach(navItem => {
                    if (navItem !== this && navItem.classList.contains('active')) {
                        navItem.classList.remove('active');
                    }
                });

                if (targetDropdown) {
                    this.classList.toggle('active');
                    if (this.classList.contains('active')) {
                        mainHeader.classList.add('nav-active');
                        targetDropdown.style.display = 'flex';
                    } else {
                        targetDropdown.style.display = 'none';
                        setTimeout(() => {
                            if (!document.querySelector('.nav-item.active')) {
                                mainHeader.classList.remove('nav-active');
                            }
                        }, 300);
                    }
                }
            }
        });
    });

    mainHeader.addEventListener('mouseleave', function() {
        headerHideTimeout = setTimeout(() => {
            if (!isMouseOverHeaderAndDropdowns() && window.innerWidth > 768) {
                hideAllDropdowns();
            }
        }, 100);
    });

    dropdownContainers.forEach(dropdown => {
        dropdown.addEventListener('mouseleave', function() {
            headerHideTimeout = setTimeout(() => {
                if (!isMouseOverHeaderAndDropdowns() && window.innerWidth > 768) {
                    hideAllDropdowns();
                }
            }, 100);
        });
        dropdown.addEventListener('mouseenter', function() {
            clearTimeout(headerHideTimeout);
        });
    });

    mainHeader.addEventListener('mouseenter', function() {
        clearTimeout(headerHideTimeout);
        mainHeader.classList.add('nav-active');
    });

    const adjustContentMargin = () => {
        const headerHeight = mainHeader.offsetHeight;
        const mainContent = document.querySelector('.main-content');
        if (mainContent && window.innerWidth > 768) {
            mainContent.style.marginTop = `${headerHeight}px`;
        } else if (mainContent && window.innerWidth <= 768) {
            mainContent.style.marginTop = '0';
        }
    };

    adjustContentMargin();
    window.addEventListener('resize', adjustContentMargin);
});

document.addEventListener('DOMContentLoaded', function() {
    const leftBlockTooltip = document.getElementById('leftBlockTooltip');
    const leftBlockTooltipImg = document.getElementById('leftBlockTooltipImg');
    const leftBlockTooltipText = document.getElementById('leftBlockTooltipText');
   
    const leftBlockData = {
        futureBlock1: {
            img: 'assets/images/LOGO.png',
            text: '&emsp;&emsp;&emsp; \n 莫斯科市克留科沃市内区泽列诺格勒市'
        },
        futureBlock2: {
            img: 'assets/images/LOGO.png',
            text: '&emsp;&emsp; \n 印度北方邦诺伊达高塔姆佛陀那加尔137号'
        }
    };
   
    ['futureBlock1', 'futureBlock2'].forEach(function(blockId) {
        const block = document.getElementById(blockId);
        if (!block) return;
        const img = block.querySelector('img');
        block.addEventListener('mousemove', function(e) {
            const data = leftBlockData[blockId];
            if (data) {
                leftBlockTooltipImg.src = data.img;
                leftBlockTooltipText.innerHTML = data.text;
                leftBlockTooltip.style.display = 'flex';
                const rect = block.getBoundingClientRect();
                let tooltipX = e.clientX - rect.left + 20;
                let tooltipY = e.clientY - rect.top + 20;
                leftBlockTooltip.style.left = (rect.left + tooltipX) + 'px';
                leftBlockTooltip.style.top = (rect.top + tooltipY) + 'px';
            }
        });
        block.addEventListener('mouseleave', function() {
            leftBlockTooltip.style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const gridImages = document.querySelectorAll('.grid-image');
    const cn51Text = document.querySelector('.cn-51');
    const cn22Text = document.querySelector('.cn-22');
   
    const cn51Svg = document.getElementById('CN-51');
    const cn22Svg = document.getElementById('CN-22');
    const cn11Svg = document.getElementById('CN-11');
    const cn31Svg = document.getElementById('CN-31');
    const cn44Svg = document.getElementById('CN-44');
    const cn32Svg = document.getElementById('CN-32');
    const cn33Svg = document.getElementById('CN-33');
    const cn37Svg = document.getElementById('CN-37');
    const cn13Svg = document.getElementById('CN-13');
    const cn41Svg = document.getElementById('CN-41');
    const cn42Svg = document.getElementById('CN-42');
    const cn43Svg = document.getElementById('CN-43');
    const cn45Svg = document.getElementById('CN-45');
    const cn46Svg = document.getElementById('CN-46');
    const cn50Svg = document.getElementById('CN-50');
    const cn52Svg = document.getElementById('CN-52');
    const cn53Svg = document.getElementById('CN-53');
    const cn54Svg = document.getElementById('CN-54');
    const cn61Svg = document.getElementById('CN-61');
    const cn62Svg = document.getElementById('CN-62');
    const cn63Svg = document.getElementById('CN-63');
    const cn64Svg = document.getElementById('CN-64');
    const cn65Svg = document.getElementById('CN-65');
    const cn21Svg = document.getElementById('CN-21');
    const cn23Svg = document.getElementById('CN-23');
    const cn34Svg = document.getElementById('CN-34');
    const cn35Svg = document.getElementById('CN-35');
    const cn36Svg = document.getElementById('CN-36');
    const cn14Svg = document.getElementById('CN-14');
    const cn15Svg = document.getElementById('CN-15');
    const cn12Svg = document.getElementById('CN-12');

    gridImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            const imageName = this.getAttribute('data-image');
           
            if (imageName === 'pt1') {


                if (cn21Svg) cn21Svg.style.fill = '#03436e';

            } else if (imageName === 'pt2') {
                if (cn51Svg) cn51Svg.style.fill = '#03436e';

            } else if (imageName === 'pt3') {
                if (cn61Svg) cn61Svg.style.fill = '#03436e';
                if (cn32Svg) cn32Svg.style.fill = '#03436e';
                if (cn12Svg) cn12Svg.style.fill = '#03436e';
            } else if (imageName === 'pt4') {
                if (cn51Svg) cn51Svg.style.fill = '#03436e';

            } else if (imageName === 'pt5') {
                if (cn42Svg) cn42Svg.style.fill = '#03436e';

            } else if (imageName === 'pt6') {
                if (cn51Svg) cn51Svg.style.fill = '#03436e';

            } else if (imageName === 'pt7') {
                if (cn37Svg) cn37Svg.style.fill = '#03436e';
                if (cn44Svg) cn44Svg.style.fill = '#03436e';
                if (cn32Svg) cn32Svg.style.fill = '#03436e';
            } else if (imageName === 'pt8') {
                if (cn34Svg) cn34Svg.style.fill = '#03436e';

            } else if (imageName === 'pt9') {
                if (cn32Svg) cn32Svg.style.fill = '#03436e';

            } else if (imageName === 'pt10') {
                if (cn33Svg) cn33Svg.style.fill = '#03436e';

            } else if (imageName === 'pt11') {
                if (cn33Svg) cn33Svg.style.fill = '#03436e';

            } else if (imageName === 'pt12') {
                if (cn31Svg) cn31Svg.style.fill = '#03436e';

            } else if (imageName === 'pt13') {
                if (cn32Svg) cn32Svg.style.fill = '#03436e';

            } else if (imageName === 'pt14') {
                if (cn11Svg) cn11Svg.style.fill = '#03436e';

            } else if (imageName === 'pt15') {
                if (cn32Svg) cn32Svg.style.fill = '#03436e';

            } else if (imageName === 'pt16') {
                if (cn21Svg) cn21Svg.style.fill = '#03436e';
                if (cn34Svg) cn34Svg.style.fill = '#03436e';
                if (cn35Svg) cn35Svg.style.fill = '#03436e';
            } else if (imageName === 'pt17') {
                if (cn34Svg) cn34Svg.style.fill = '#03436e';

            } else if (imageName === 'pt18') {

                if (cn44Svg) cn44Svg.style.fill = '#03436e';
            } else if (imageName === 'pt19') {
                if (cn32Svg) cn32Svg.style.fill = '#03436e';

            } else if (imageName === 'pt20') {
                if (cn35Svg) cn35Svg.style.fill = '#03436e';

            }
        });

        img.addEventListener('mouseleave', function() {
            const imageName = this.getAttribute('data-image');
           
            if (imageName === 'pt1') {
                if (cn21Svg) cn21Svg.style.fill = '';
            } else if (imageName === 'pt2') {
                if (cn51Svg) cn51Svg.style.fill = '';
   

            } else if (imageName === 'pt3') {
                if (cn61Svg) cn61Svg.style.fill = '';
                if (cn32Svg) cn32Svg.style.fill = '';
                if (cn12Svg) cn12Svg.style.fill = '';
            } else if (imageName === 'pt4') {
                if (cn51Svg) cn51Svg.style.fill = '';

            } else if (imageName === 'pt5') {
                
                if (cn42Svg) cn42Svg.style.fill = '';
            } else if (imageName === 'pt6') {
                if (cn51Svg) cn51Svg.style.fill = '';

            } else if (imageName === 'pt7') {
                if (cn32Svg) cn32Svg.style.fill = '';
                if (cn37Svg) cn44Svg.style.fill = '';
                if (cn44Svg) cn37Svg.style.fill = '';

            } else if (imageName === 'pt8') {
                if (cn34Svg) cn34Svg.style.fill = '';

            } else if (imageName === 'pt9') {
                if (cn32Svg) cn32Svg.style.fill = '';

            } else if (imageName === 'pt10') {
                if (cn33Svg) cn33Svg.style.fill = '';

            } else if (imageName === 'pt11') {
                if (cn33Svg) cn33Svg.style.fill = '';
            } else if (imageName === 'pt12') {
                if (cn31Svg) cn31Svg.style.fill = '';

            } else if (imageName === 'pt13') {
                if (cn32Svg) cn32Svg.style.fill = '';

            } else if (imageName === 'pt14') {
               
                if (cn11Svg) cn11Svg.style.fill = '';
            } else if (imageName === 'pt15') {
                if (cn32Svg) cn32Svg.style.fill = '';

            } else if (imageName === 'pt16') {
                if (cn21Svg) cn21Svg.style.fill = '';
                if (cn34Svg) cn34Svg.style.fill = '';
                if (cn35Svg) cn35Svg.style.fill = '';
            } else if (imageName === 'pt17') {
                if (cn34Svg) cn34Svg.style.fill = '';

            } else if (imageName === 'pt18') {

                if (cn44Svg) cn44Svg.style.fill = '';
            } else if (imageName === 'pt19') {
                if (cn32Svg) cn32Svg.style.fill = '';

            } else if (imageName === 'pt20') {
                if (cn35Svg) cn35Svg.style.fill = '';

            }
        });
    });
});