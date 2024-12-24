"use client";
import React, { useState, useEffect } from "react";
import { columns } from "./column";
import { TableComponent } from "./table/datatable";
import { IJournal } from "../../redux/Journal/type";
import JournalForm from "./form";
import { deleteJournal, fetchJournal } from "../../redux/Journal/api";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

export const JournalDetial = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { journals } = useSelector((state: RootState) => state.journal);

  useEffect(() => {
    dispatch(fetchJournal());
  }, [dispatch]);

  const handleUpdate = (value: IJournal) => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleDelete = (value: any) => {
    dispatch(deleteJournal(value?._id));
  };

  const handleView = (value: any) => {
    return value?.id;
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  const handleCreateNewMember = () => {
    setDrawerOpen(true);
  };

  const createColumns = columns({
    onEdit: handleUpdate,
    onDelete: handleDelete,
    onView: handleView,
  });

  return (
    <div>
      <div className="py-10">
        <TableComponent
          columns={createColumns}
          data={journals}
          onEdit={handleUpdate}
          onDelete={handleDelete}
          onView={handleView}
          open={isDrawerOpen}
          onDismiss={handleClose}
          onOpen={handleCreateNewMember}
          title=""
          description="Write a new journal"
        >
          <JournalForm />
        </TableComponent>
      </div>
    </div>
  );
};
