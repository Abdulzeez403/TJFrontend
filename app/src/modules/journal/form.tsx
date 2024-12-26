"use client";
import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Input from "../../components/input";
import { IJournal } from "../../redux/Journal/type";
import { SingleDatePicker } from "../../components/input/singleDatePicker";
import Button from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import {
  createJournal,
  fetchByJournalId,
  fetchJournal,
} from "../../redux/Journal/api";
import { AppDispatch, RootState } from "../../redux/store";
import SelectField from "../../components/input/selector";

// const TradeSchema = Yup.object().shape({
//   symbol: Yup.string().required("Symbol is required"),
//   asset: Yup.string().required("Asset is required"),
//   entryPrice: Yup.number().required("Entry price is required"),
//   stopLoss: Yup.number(),
//   takeProfit: Yup.number(),
//   tradeDirection: Yup.string()
//     .oneOf(["long", "short"], "Invalid trade direction")
//     .required("Trade direction is required"),
//   tradeDate: Yup.date().required("Trade date is required"),
//   status: Yup.string().oneOf(["win", "loss"], "Invalid trade status"),
// });

const JournalForm: React.FC = () => {
  const { loading, journal } = useSelector((state: RootState) => state.journal);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (values: IJournal) => {
    dispatch(createJournal(values));
  };

  useEffect(() => {
    // dispatch(fetchByJournalId());
  }, []);

  const initialValues: IJournal = {
    symbol: journal?.symbol || "",
    asset: journal?.asset || "",
    entryPrice: journal?.entryPrice || 0,
    exitPrice: journal?.exitPrice || 0,
    notes: journal?.notes || "",
    image: journal?.image || "",
    stopLoss: journal?.stopLoss || 0,
    takeProfit: journal?.takeProfit || 0,
    tradeDirection: journal?.tradeDirection || "long",
    status: journal?.status || "win",
    pnl: journal?.pnl || 0,
    fees: undefined,
    strategy: journal?.strategy || "",
    tradeDate: journal?.tradeDate || new Date(),
    closingDate: undefined,
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={TradeSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Form className="space-y-4">
          <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grids-col-4">
            <Input
              label="Symbol"
              name="symbol"
              value={values.symbol}
              onChange={(e) => setFieldValue("symbol", e.target.value)}
              error={errors.symbol}
              touched={touched.symbol}
            />
            <Input
              label="Asset"
              name="asset"
              value={values.asset}
              onChange={(e) => setFieldValue("asset", e.target.value)}
              error={errors.asset}
              touched={touched.asset}
            />

            <Input
              label="Entry Price"
              name="entryPrice"
              type="number"
              value={values.entryPrice}
              onChange={(e) =>
                setFieldValue("entryPrice", Number(e.target.value))
              }
              error={errors.entryPrice}
              touched={touched.entryPrice}
            />

            <Input
              label="Stop Loss"
              name="stopLoss"
              type="number"
              value={values.stopLoss || ""}
              onChange={(e) =>
                setFieldValue("stopLoss", Number(e.target.value))
              }
              error={errors.stopLoss}
              touched={touched.stopLoss}
            />
            <Input
              label="Take Profit"
              name="takeProfit"
              type="number"
              value={values.takeProfit || ""}
              onChange={(e) =>
                setFieldValue("takeProfit", Number(e.target.value))
              }
              error={errors.takeProfit}
              touched={touched.takeProfit}
            />
            <Input
              label="Strategy"
              name="strategy"
              value={values.strategy || ""}
              onChange={(e) => setFieldValue("strategy", e.target.value)}
              error={errors.strategy}
              touched={touched.strategy}
            />

            <SelectField
              label="Trade Direction"
              name="tradeDirection"
              options={[
                { value: "long", label: "Long" },
                { value: "short", label: "Short" },
              ]}
              error={errors.tradeDirection}
              touched={touched.tradeDirection}
            />

            <SelectField
              label="Trade Status"
              name="status"
              options={[
                { value: "win", label: "Win" },
                { value: "loss", label: "Loss" },
              ]}
              error={errors.status}
              touched={touched.status}
            />

            <Input
              label="P&L"
              name="pnl"
              value={values.pnl || ""}
              onChange={(e) => setFieldValue("pnl", e.target.value)}
              error={errors.pnl}
              touched={touched.pnl}
            />

            <Input
              label="Image"
              name="image"
              value={values.image || ""}
              onChange={(e) => setFieldValue("image", e.target.value)}
              // error={errors.image}
              // touched={touched.image}
            />
          </div>

          <SingleDatePicker
            label="Trade Date"
            selectedDate={values.tradeDate}
            onDateChange={(date) => setFieldValue("tradeDate", date)}
          />

          <Input
            as="textarea"
            label="Notes"
            name="notes"
            value={values.notes || ""}
            placeholder="Write your message"
            rows={4}
            onChange={(e) => setFieldValue("notes", e.target.value)}
            error={errors.notes}
            touched={touched.notes}
          />

          <div className="flex justify-center m-0">
            <Button text="Save" variant="primary" isLoading={loading} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default JournalForm;
