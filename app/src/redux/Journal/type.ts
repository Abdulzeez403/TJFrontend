export interface IJournal {
  symbol: string;
  asset: string;
  entryPrice: number;
  exitPrice?: number;
  notes?: string;
  image?: string;
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
