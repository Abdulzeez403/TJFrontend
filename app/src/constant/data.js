export const Data1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export const Data2 = [
  { name: "Category 1", value: 500 },
  { name: "Category 2", value: 400 },
  { name: "Category 3", value: 600 },
  { name: "Category 4", value: 300 },
];

export const Cards = [
  { title: "Profit", number: "$1000", icon: "💰", chartData: Data1 },
  { title: "Loss", number: "$200", icon: "📉", chartData: Data2 },
  { title: "Revenue", number: "$5000", icon: "💵", chartData: Data1 },
  { title: "Expenses", number: "$1000", icon: "💸", chartData: Data2 },
];

export const TradeData = [
  { date: "2024-12-01", symbol: "AAPL", netPL: "+$500" },
  { date: "2024-12-02", symbol: "TSLA", netPL: "-$100" },
  { date: "2024-12-03", symbol: "GOOG", netPL: "+$200" },
];

export const OpenPositionData = [
  {
    entryDate: "2024-12-05",
    symbol: "AAPL",
    entryPrice: 150.0,
    currentPrice: 155.0,
    quantity: 10,
    unrealizedPL: "+$50.00",
    stopLoss: 140.0,
    takeProfit: 160.0,
  },
  {
    entryDate: "2024-12-06",
    symbol: "TSLA",
    entryPrice: 700.0,
    currentPrice: 680.0,
    quantity: 5,
    unrealizedPL: "-$100.00",
    stopLoss: 690.0,
    takeProfit: 750.0,
  },
];
