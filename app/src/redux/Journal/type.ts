export interface IJournal {
  _id?: string | any;
  symbol: string;
  asset: string;
  entryPrice: number;
  exitPrice?: number;
  notes?: string;
  image?: any;
  stopLoss?: number;
  takeProfit?: number;
  tradeDirection: "long" | "short";
  pnl?: number;
  fees?: number;
  strategy?: string;
  status?: string;
  tradeDate: Date;
  closingDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
