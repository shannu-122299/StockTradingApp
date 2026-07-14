import Chart from "react-apexcharts";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../components/axiosInstance";

function getTime(index) {
    return new Date(
        2026,
        6,
        1,
        9,
        15 + index * 15
    );
}

const initialCandleData = {
  AAPL: [
{ x:getTime(0),  y:[180,183,178,182] },
{ x:getTime(1),  y:[182,184,179,181] },
{ x:getTime(2),  y:[181,185,180,184] },
{ x:getTime(3),  y:[184,186,181,182] },
{ x:getTime(4),  y:[182,187,181,186] },
{ x:getTime(5),  y:[186,188,183,184] },
{ x:getTime(6),  y:[184,189,182,188] },
{ x:getTime(7),  y:[188,190,185,186] },
{ x:getTime(8),  y:[186,188,183,184] },
{ x:getTime(9),  y:[184,187,182,186] },
{ x:getTime(10), y:[186,191,185,190] },
{ x:getTime(11), y:[190,193,188,192] },
{ x:getTime(12), y:[192,194,189,191] },
{ x:getTime(13), y:[191,196,190,195] },
{ x:getTime(14), y:[195,197,193,194] },
{ x:getTime(15), y:[194,196,191,192] },
{ x:getTime(16), y:[192,195,189,193] },
{ x:getTime(17), y:[193,198,192,197] },
{ x:getTime(18), y:[197,199,194,195] },
{ x:getTime(19), y:[195,198,193,194] },
{ x:getTime(20), y:[194,197,191,193] },
{ x:getTime(21), y:[193,196,191,195] },
{ x:getTime(22), y:[195,199,194,198] },
{ x:getTime(23), y:[198,201,197,200] },
{ x:getTime(24), y:[200,202,198,199] },
{ x:getTime(25), y:[199,201,196,197] },
{ x:getTime(26), y:[197,200,195,198] },
{ x:getTime(27), y:[198,203,197,202] },
{ x:getTime(28), y:[202,205,200,204] },
{ x:getTime(29), y:[204,206,201,203] },
],

  TSLA: [
{ x:getTime(0),  y:[245,248,243,247] },
{ x:getTime(1),  y:[247,250,245,249] },
{ x:getTime(2),  y:[249,251,244,246] },
{ x:getTime(3),  y:[246,249,242,243] },
{ x:getTime(4),  y:[243,247,241,246] },
{ x:getTime(5),  y:[246,252,245,251] },
{ x:getTime(6),  y:[251,255,248,249] },
{ x:getTime(7),  y:[249,251,244,245] },
{ x:getTime(8),  y:[245,247,240,242] },
{ x:getTime(9),  y:[242,246,239,244] },
{ x:getTime(10), y:[244,250,243,249] },
{ x:getTime(11), y:[249,253,247,252] },
{ x:getTime(12), y:[252,254,248,250] },
{ x:getTime(13), y:[250,252,246,247] },
{ x:getTime(14), y:[247,249,243,245] },
{ x:getTime(15), y:[245,248,242,247] },
{ x:getTime(16), y:[247,253,246,252] },
{ x:getTime(17), y:[252,257,250,256] },
{ x:getTime(18), y:[256,259,252,253] },
{ x:getTime(19), y:[253,255,248,250] },
{ x:getTime(20), y:[250,253,247,248] },
{ x:getTime(21), y:[248,251,244,246] },
{ x:getTime(22), y:[246,250,243,249] },
{ x:getTime(23), y:[249,254,247,253] },
{ x:getTime(24), y:[253,258,251,257] },
{ x:getTime(25), y:[257,260,254,255] },
{ x:getTime(26), y:[255,258,252,254] },
{ x:getTime(27), y:[254,261,253,259] },
{ x:getTime(28), y:[259,264,257,262] },
{ x:getTime(29), y:[262,266,260,264] },
],

 MSFT: [
{ x:getTime(0),  y:[440,442,438,441] },
{ x:getTime(1),  y:[441,444,440,443] },
{ x:getTime(2),  y:[443,445,441,442] },
{ x:getTime(3),  y:[442,446,440,445] },
{ x:getTime(4),  y:[445,448,443,447] },
{ x:getTime(5),  y:[447,449,444,445] },
{ x:getTime(6),  y:[445,447,442,443] },
{ x:getTime(7),  y:[443,446,441,445] },
{ x:getTime(8),  y:[445,449,444,448] },
{ x:getTime(9),  y:[448,451,446,450] },
{ x:getTime(10), y:[450,453,448,452] },
{ x:getTime(11), y:[452,454,449,451] },
{ x:getTime(12), y:[451,453,448,449] },
{ x:getTime(13), y:[449,452,447,450] },
{ x:getTime(14), y:[450,454,449,453] },
{ x:getTime(15), y:[453,456,451,455] },
{ x:getTime(16), y:[455,458,453,457] },
{ x:getTime(17), y:[457,459,454,456] },
{ x:getTime(18), y:[456,458,452,454] },
{ x:getTime(19), y:[454,456,451,453] },
{ x:getTime(20), y:[453,457,452,456] },
{ x:getTime(21), y:[456,460,455,459] },
{ x:getTime(22), y:[459,462,457,461] },
{ x:getTime(23), y:[461,463,458,460] },
{ x:getTime(24), y:[460,462,457,458] },
{ x:getTime(25), y:[458,461,456,460] },
{ x:getTime(26), y:[460,464,459,463] },
{ x:getTime(27), y:[463,466,461,465] },
{ x:getTime(28), y:[465,468,463,467] },
{ x:getTime(29), y:[467,470,465,469] },
],

AMZN: [
{ x:getTime(0),  y:[175,177,173,174] },
{ x:getTime(1),  y:[174,176,172,173] },
{ x:getTime(2),  y:[173,175,171,172] },
{ x:getTime(3),  y:[172,174,170,173] },
{ x:getTime(4),  y:[173,176,172,175] },
{ x:getTime(5),  y:[175,178,174,177] },
{ x:getTime(6),  y:[177,179,175,176] },
{ x:getTime(7),  y:[176,178,173,174] },
{ x:getTime(8),  y:[174,176,172,175] },
{ x:getTime(9),  y:[175,178,174,177] },
{ x:getTime(10), y:[177,180,176,179] },
{ x:getTime(11), y:[179,182,178,181] },
{ x:getTime(12), y:[181,184,180,183] },
{ x:getTime(13), y:[183,185,181,182] },
{ x:getTime(14), y:[182,184,179,180] },
{ x:getTime(15), y:[180,182,178,181] },
{ x:getTime(16), y:[181,184,180,183] },
{ x:getTime(17), y:[183,186,182,185] },
{ x:getTime(18), y:[185,188,184,187] },
{ x:getTime(19), y:[187,189,184,185] },
{ x:getTime(20), y:[185,187,182,183] },
{ x:getTime(21), y:[183,186,181,184] },
{ x:getTime(22), y:[184,188,183,187] },
{ x:getTime(23), y:[187,190,186,189] },
{ x:getTime(24), y:[189,192,188,191] },
{ x:getTime(25), y:[191,193,189,190] },
{ x:getTime(26), y:[190,192,187,188] },
{ x:getTime(27), y:[188,191,186,190] },
{ x:getTime(28), y:[190,194,189,193] },
{ x:getTime(29), y:[193,196,192,195] },
],

GOOG: [
{ x:getTime(0),  y:[165,167,164,166] },
{ x:getTime(1),  y:[166,168,165,167] },
{ x:getTime(2),  y:[167,169,165,166] },
{ x:getTime(3),  y:[166,167,163,164] },
{ x:getTime(4),  y:[164,166,162,163] },
{ x:getTime(5),  y:[163,165,161,164] },
{ x:getTime(6),  y:[164,166,163,165] },
{ x:getTime(7),  y:[165,167,164,166] },
{ x:getTime(8),  y:[166,168,164,165] },
{ x:getTime(9),  y:[165,167,163,164] },
{ x:getTime(10), y:[164,166,162,165] },
{ x:getTime(11), y:[165,168,164,167] },
{ x:getTime(12), y:[167,170,166,169] },
{ x:getTime(13), y:[169,171,167,168] },
{ x:getTime(14), y:[168,170,166,167] },
{ x:getTime(15), y:[167,169,165,166] },
{ x:getTime(16), y:[166,169,165,168] },
{ x:getTime(17), y:[168,171,167,170] },
{ x:getTime(18), y:[170,173,169,172] },
{ x:getTime(19), y:[172,174,170,171] },
{ x:getTime(20), y:[171,173,168,169] },
{ x:getTime(21), y:[169,171,167,170] },
{ x:getTime(22), y:[170,173,169,172] },
{ x:getTime(23), y:[172,175,171,174] },
{ x:getTime(24), y:[174,177,173,176] },
{ x:getTime(25), y:[176,178,174,175] },
{ x:getTime(26), y:[175,177,172,173] },
{ x:getTime(27), y:[173,176,172,175] },
{ x:getTime(28), y:[175,179,174,178] },
{ x:getTime(29), y:[178,181,177,180] },
],

META: [
{ x:getTime(0),  y:[510,513,508,512] },
{ x:getTime(1),  y:[512,515,510,514] },
{ x:getTime(2),  y:[514,516,511,513] },
{ x:getTime(3),  y:[513,517,512,516] },
{ x:getTime(4),  y:[516,519,514,518] },
{ x:getTime(5),  y:[518,520,515,517] },
{ x:getTime(6),  y:[517,521,516,520] },
{ x:getTime(7),  y:[520,523,518,522] },
{ x:getTime(8),  y:[522,524,519,521] },
{ x:getTime(9),  y:[521,525,520,524] },
{ x:getTime(10), y:[524,528,523,527] },
{ x:getTime(11), y:[527,530,525,529] },
{ x:getTime(12), y:[529,531,526,527] },
{ x:getTime(13), y:[527,530,524,525] },
{ x:getTime(14), y:[525,529,523,528] },
{ x:getTime(15), y:[528,532,526,531] },
{ x:getTime(16), y:[531,535,529,534] },
{ x:getTime(17), y:[534,537,531,533] },
{ x:getTime(18), y:[533,536,530,531] },
{ x:getTime(19), y:[531,535,529,534] },
{ x:getTime(20), y:[534,539,533,538] },
{ x:getTime(21), y:[538,542,536,541] },
{ x:getTime(22), y:[541,544,539,543] },
{ x:getTime(23), y:[543,545,540,542] },
{ x:getTime(24), y:[542,546,541,545] },
{ x:getTime(25), y:[545,548,543,547] },
{ x:getTime(26), y:[547,549,544,546] },
{ x:getTime(27), y:[546,551,545,550] },
{ x:getTime(28), y:[550,554,548,553] },
{ x:getTime(29), y:[553,557,551,556] },
],

NVDA: [
{ x:getTime(0),  y:[125,129,123,128] },
{ x:getTime(1),  y:[128,132,126,130] },
{ x:getTime(2),  y:[130,133,127,129] },
{ x:getTime(3),  y:[129,131,124,125] },
{ x:getTime(4),  y:[125,128,122,127] },
{ x:getTime(5),  y:[127,135,126,134] },
{ x:getTime(6),  y:[134,138,131,132] },
{ x:getTime(7),  y:[132,134,128,129] },
{ x:getTime(8),  y:[129,131,125,126] },
{ x:getTime(9),  y:[126,130,124,129] },
{ x:getTime(10), y:[129,136,128,135] },
{ x:getTime(11), y:[135,140,133,138] },
{ x:getTime(12), y:[138,142,136,140] },
{ x:getTime(13), y:[140,143,137,138] },
{ x:getTime(14), y:[138,140,134,135] },
{ x:getTime(15), y:[135,138,132,133] },
{ x:getTime(16), y:[133,137,131,136] },
{ x:getTime(17), y:[136,144,135,143] },
{ x:getTime(18), y:[143,147,140,145] },
{ x:getTime(19), y:[145,148,141,142] },
{ x:getTime(20), y:[142,144,138,139] },
{ x:getTime(21), y:[139,143,137,141] },
{ x:getTime(22), y:[141,147,140,146] },
{ x:getTime(23), y:[146,151,144,149] },
{ x:getTime(24), y:[149,153,147,151] },
{ x:getTime(25), y:[151,154,148,149] },
{ x:getTime(26), y:[149,151,145,146] },
{ x:getTime(27), y:[146,150,144,148] },
{ x:getTime(28), y:[148,156,147,154] },
{ x:getTime(29), y:[154,160,152,158] },
],

AMD: [
{ x:getTime(0),  y:[145,148,143,147] },
{ x:getTime(1),  y:[147,149,144,145] },
{ x:getTime(2),  y:[145,147,142,143] },
{ x:getTime(3),  y:[143,146,141,145] },
{ x:getTime(4),  y:[145,150,144,149] },
{ x:getTime(5),  y:[149,151,146,147] },
{ x:getTime(6),  y:[147,149,144,145] },
{ x:getTime(7),  y:[145,148,143,147] },
{ x:getTime(8),  y:[147,152,146,151] },
{ x:getTime(9),  y:[151,153,148,149] },
{ x:getTime(10), y:[149,151,145,146] },
{ x:getTime(11), y:[146,149,144,148] },
{ x:getTime(12), y:[148,153,147,152] },
{ x:getTime(13), y:[152,155,149,150] },
{ x:getTime(14), y:[150,152,146,147] },
{ x:getTime(15), y:[147,150,145,149] },
{ x:getTime(16), y:[149,154,148,153] },
{ x:getTime(17), y:[153,156,150,151] },
{ x:getTime(18), y:[151,153,147,148] },
{ x:getTime(19), y:[148,151,146,150] },
{ x:getTime(20), y:[150,155,149,154] },
{ x:getTime(21), y:[154,157,151,152] },
{ x:getTime(22), y:[152,154,148,149] },
{ x:getTime(23), y:[149,152,147,151] },
{ x:getTime(24), y:[151,156,150,155] },
{ x:getTime(25), y:[155,158,152,153] },
{ x:getTime(26), y:[153,155,149,150] },
{ x:getTime(27), y:[150,154,148,152] },
{ x:getTime(28), y:[152,158,151,157] },
{ x:getTime(29), y:[157,161,155,159] },
],

NFLX: [
{ x:getTime(0),  y:[680,686,677,684] },
{ x:getTime(1),  y:[684,690,682,688] },
{ x:getTime(2),  y:[688,692,683,685] },
{ x:getTime(3),  y:[685,687,679,681] },
{ x:getTime(4),  y:[681,684,676,678] },
{ x:getTime(5),  y:[678,685,677,683] },
{ x:getTime(6),  y:[683,691,681,689] },
{ x:getTime(7),  y:[689,694,686,691] },
{ x:getTime(8),  y:[691,693,684,686] },
{ x:getTime(9),  y:[686,689,681,683] },
{ x:getTime(10), y:[683,690,680,688] },
{ x:getTime(11), y:[688,696,686,694] },
{ x:getTime(12), y:[694,700,691,698] },
{ x:getTime(13), y:[698,702,693,695] },
{ x:getTime(14), y:[695,697,689,691] },
{ x:getTime(15), y:[691,694,686,688] },
{ x:getTime(16), y:[688,695,687,693] },
{ x:getTime(17), y:[693,701,691,699] },
{ x:getTime(18), y:[699,705,696,703] },
{ x:getTime(19), y:[703,707,697,699] },
{ x:getTime(20), y:[699,701,692,694] },
{ x:getTime(21), y:[694,699,691,697] },
{ x:getTime(22), y:[697,705,695,703] },
{ x:getTime(23), y:[703,710,700,708] },
{ x:getTime(24), y:[708,714,705,712] },
{ x:getTime(25), y:[712,716,707,709] },
{ x:getTime(26), y:[709,711,703,705] },
{ x:getTime(27), y:[705,712,702,710] },
{ x:getTime(28), y:[710,718,708,716] },
{ x:getTime(29), y:[716,723,713,720] },
],

ORCL: [
{ x:getTime(0),  y:[150,152,149,151] },
{ x:getTime(1),  y:[151,153,150,152] },
{ x:getTime(2),  y:[152,154,151,153] },
{ x:getTime(3),  y:[153,154,150,151] },
{ x:getTime(4),  y:[151,153,149,150] },
{ x:getTime(5),  y:[150,152,148,151] },
{ x:getTime(6),  y:[151,154,150,153] },
{ x:getTime(7),  y:[153,155,152,154] },
{ x:getTime(8),  y:[154,156,152,153] },
{ x:getTime(9),  y:[153,155,151,152] },
{ x:getTime(10), y:[152,154,150,153] },
{ x:getTime(11), y:[153,156,152,155] },
{ x:getTime(12), y:[155,157,153,156] },
{ x:getTime(13), y:[156,158,154,155] },
{ x:getTime(14), y:[155,156,152,153] },
{ x:getTime(15), y:[153,155,151,154] },
{ x:getTime(16), y:[154,157,153,156] },
{ x:getTime(17), y:[156,159,155,158] },
{ x:getTime(18), y:[158,160,156,157] },
{ x:getTime(19), y:[157,158,154,155] },
{ x:getTime(20), y:[155,157,153,156] },
{ x:getTime(21), y:[156,159,155,158] },
{ x:getTime(22), y:[158,161,157,160] },
{ x:getTime(23), y:[160,162,158,161] },
{ x:getTime(24), y:[161,163,159,160] },
{ x:getTime(25), y:[160,161,157,158] },
{ x:getTime(26), y:[158,160,156,159] },
{ x:getTime(27), y:[159,162,158,161] },
{ x:getTime(28), y:[161,164,160,163] },
{ x:getTime(29), y:[163,166,162,165] },
],

IBM: [
{ x:getTime(0),  y:[225,226,224,225.5] },
{ x:getTime(1),  y:[225.5,227,225,226.5] },
{ x:getTime(2),  y:[226.5,227.5,225.5,226] },
{ x:getTime(3),  y:[226,227,225,225.5] },
{ x:getTime(4),  y:[225.5,226.5,224.5,226] },
{ x:getTime(5),  y:[226,227.5,225.5,227] },
{ x:getTime(6),  y:[227,228,226,227.5] },
{ x:getTime(7),  y:[227.5,228.5,226.5,227] },
{ x:getTime(8),  y:[227,228,226,226.5] },
{ x:getTime(9),  y:[226.5,227.5,225.5,227] },
{ x:getTime(10), y:[227,228.5,226.5,228] },
{ x:getTime(11), y:[228,229,227,228.5] },
{ x:getTime(12), y:[228.5,229.5,227.5,228] },
{ x:getTime(13), y:[228,229,227,227.5] },
{ x:getTime(14), y:[227.5,228.5,226.5,228] },
{ x:getTime(15), y:[228,229.5,227.5,229] },
{ x:getTime(16), y:[229,230,228,229.5] },
{ x:getTime(17), y:[229.5,230.5,228.5,230] },
{ x:getTime(18), y:[230,231,229,229.5] },
{ x:getTime(19), y:[229.5,230.5,228.5,229] },
{ x:getTime(20), y:[229,230.5,228.5,230] },
{ x:getTime(21), y:[230,231.5,229.5,231] },
{ x:getTime(22), y:[231,232,230,231.5] },
{ x:getTime(23), y:[231.5,232.5,230.5,232] },
{ x:getTime(24), y:[232,233,231,232.5] },
{ x:getTime(25), y:[232.5,233.5,231.5,232] },
{ x:getTime(26), y:[232,233,231,232.5] },
{ x:getTime(27), y:[232.5,234,232,233.5] },
{ x:getTime(28), y:[233.5,235,233,234.5] },
{ x:getTime(29), y:[234.5,236,234,235.5] },
],

INTC: [
{ x:getTime(0),  y:[34.0,34.3,33.8,34.2] },
{ x:getTime(1),  y:[34.2,34.4,33.9,34.0] },
{ x:getTime(2),  y:[34.0,34.2,33.7,33.9] },
{ x:getTime(3),  y:[33.9,34.1,33.6,33.8] },
{ x:getTime(4),  y:[33.8,34.0,33.5,33.7] },
{ x:getTime(5),  y:[33.7,34.1,33.6,34.0] },
{ x:getTime(6),  y:[34.0,34.3,33.8,34.1] },
{ x:getTime(7),  y:[34.1,34.2,33.9,34.0] },
{ x:getTime(8),  y:[34.0,34.1,33.7,33.8] },
{ x:getTime(9),  y:[33.8,34.0,33.6,33.9] },
{ x:getTime(10), y:[33.9,34.2,33.8,34.1] },
{ x:getTime(11), y:[34.1,34.3,33.9,34.2] },
{ x:getTime(12), y:[34.2,34.4,34.0,34.1] },
{ x:getTime(13), y:[34.1,34.2,33.8,33.9] },
{ x:getTime(14), y:[33.9,34.1,33.7,34.0] },
{ x:getTime(15), y:[34.0,34.3,33.9,34.2] },
{ x:getTime(16), y:[34.2,34.5,34.1,34.4] },
{ x:getTime(17), y:[34.4,34.7,34.2,34.6] },
{ x:getTime(18), y:[34.6,34.8,34.3,34.4] },
{ x:getTime(19), y:[34.4,34.6,34.1,34.2] },
{ x:getTime(20), y:[34.2,34.5,34.0,34.4] },
{ x:getTime(21), y:[34.4,34.8,34.3,34.7] },
{ x:getTime(22), y:[34.7,35.1,34.6,35.0] },
{ x:getTime(23), y:[35.0,35.4,34.9,35.3] },
{ x:getTime(24), y:[35.3,35.6,35.1,35.5] },
{ x:getTime(25), y:[35.5,35.7,35.2,35.4] },
{ x:getTime(26), y:[35.4,35.8,35.3,35.7] },
{ x:getTime(27), y:[35.7,36.1,35.6,36.0] },
{ x:getTime(28), y:[36.0,36.3,35.8,36.2] },
{ x:getTime(29), y:[36.2,36.5,36.0,36.4] },
],

};

function StockChart() {

  const { symbol } = useParams();

  const [stock, setStock] = useState(null);
  const [livePrice, setLivePrice] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [productType, setProductType] = useState("Intraday");
  const [action, setAction] = useState("Buy");
  const [chartData, setChartData] = useState([]);


  useEffect(() => {
  axios
    .get("/stocks")
    .then((res) => {
      const selected = res.data.find(
        (s) => s.symbol === symbol
      );

      setStock(selected);
      setLivePrice(selected.price);
      const data = initialCandleData[selected.symbol] || [];

setChartData(data);

    })
    .catch((err) => {
      console.log(err);
    });
}, [symbol]);

useEffect(() => {
  if (!stock) return;

  const interval = setInterval(() => {
    setLivePrice((prev) => {
      const movement = (Math.random() - 0.5) * 6;

      return Number((prev + movement).toFixed(2));
    });
  }, 1800);

  return () => clearInterval(interval);
}, [stock]);

if (!stock) {
  return <h2>Loading...</h2>;
}

const totalPrice = (livePrice * quantity).toFixed(2);

const changePercent =
  stock && livePrice !== null
    ? (
        ((livePrice - stock.price) / stock.price) *
        100
      ).toFixed(2)
    : null;
const tradeStock = async () => {

  if (quantity < 1) {
    alert("Quantity must be at least 1");
    return;
  }

  try {
    if (action === "Buy") {
      await axios.post("/orders/buy", {
        symbol: stock.symbol,
        company: stock.company,
        quantity,
        price: livePrice,
      });

      alert("Stock Purchased Successfully");
      setQuantity(1);

    } else {

      await axios.post("/orders/sell", {
        symbol: stock.symbol,
        quantity,
        price: livePrice,
      });

      alert("Stock Sold Successfully");
      setQuantity(1);
    }

  } catch (err) {
    alert(err.response?.data?.message || "Transaction Failed");
  }
};
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          background: "#eef3fa",
          minHeight: "100vh",
        }}
      >
        <h1>
  {stock.company} ({stock.symbol})
</h1>

<p>
  Current Price:{" "}
  <strong>
    {livePrice !== null ? `₹${livePrice}` : " ..."}
  </strong>
</p>

<p
  style={{
    color:
      changePercent === null
        ? "#555"
        : Number(changePercent) >= 0
        ? "#2e7d32"
        : "#d50000",
    fontWeight: "bold",
    fontSize: "18px",
  }}
>
  Today's Change:{" "}
  {changePercent === null
    ? "Loading..."
    : `${Number(changePercent) >= 0 ? "+" : ""}${changePercent}%`}
</p>
        <div
  style={{
    display: "flex",
    gap: "30px",
    marginTop: "25px",
  }}
>

  <div
  style={{
    flex: 3,
    background: "#fff",
    padding: "20px",
    minHeight: "700px",
    borderRadius: "12px",
  }}
>
  <Chart
  key={chartData.length}
  options={{
  chart: {
  type: "candlestick",
  height: 700,
  animations: {
    enabled: true,
    easing: "linear",
    speed: 800,
  },
},

  theme: {
    mode: "light",
  },

  title: {
    text: `${stock.company} Intraday Chart`,
    align: "left",
  },

  xaxis: {
    type: "datetime",
    labels: {
      datetimeUTC: false,
      format: "HH:mm",
    },
  },

  yaxis: {
    opposite: true,
    tooltip: {
      enabled: true,
    },
  },

  grid: {
    borderColor: "#dddddd",
    strokeDashArray: 3,
  },

  stroke: {
    width: 1,
  },

  plotOptions: {
    candlestick: {
      colors: {
        upward: "#00C853",
        downward: "#D50000",
      },
    },
  },

  tooltip: {
    enabled: true,
    shared: true,
  },
}}
  series={[
{
    data:chartData,
},
]}
  type="candlestick"
  height={700}
/>
</div>

<div
  style={{
    flex: 1,
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  }}
>
  <div style={{ display: "flex", gap: "10px" }}>

<button
  onClick={() => setAction("Buy")}
  style={{
    flex: 1,
    background: action === "Buy" ? "#2e7d32" : "#ccc",
    color: "#fff",
    border: "none",
    padding: "10px",
    cursor: "pointer",
  }}
>
  Buy
</button>

<button
  onClick={() => setAction("Sell")}
  style={{
    flex: 1,
    background: action === "Sell" ? "#c62828" : "#ccc",
    color: "#fff",
    border: "none",
    padding: "10px",
    cursor: "pointer",
  }}
>
  Sell
</button>

</div>


  <h3 style={{ color: "#1565c0" }}>
  Product Type
</h3>

<select
  value={productType}
  onChange={(e) => setProductType(e.target.value)}
  style={{
    padding: "10px",
    borderRadius: "6px",
  }}
>
  <option>Intraday</option>
  <option>Delivery</option>
</select>

<h3 style={{ color: "#1565c0" }}>
  Quantity
</h3>

<input
  type="number"
  min="1"
  value={quantity}
  onChange={(e) => setQuantity(Number(e.target.value))}
  style={{
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  }}
/>

<h3 style={{ color: "#1565c0" }}>
  Total Price
</h3>

<div
  style={{
    padding: "10px",
    background: "#f5f5f5",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontWeight: "bold",
  }}
>
  ₹{totalPrice}
</div>

<button
  onClick={tradeStock}
  style={{
    background: action === "Buy" ? "#2e7d32" : "#c62828",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  }}
>
  {action} Now
</button>
      </div>
    </div>
    </div>
</>
);
}

export default StockChart;