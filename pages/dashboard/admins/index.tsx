import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import Router from "next/router";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSnackbar } from "notistack";
import { RootState } from "types/iReducer";
import { allAdminsRequest, deleteAdminRequest } from "store/admin/action";
import Dashboard from "component/layout/Dashboard";
import EmployeeTable from "component/table/EmployeeTable";
import SimpleModal from "component/modal/SimpleModal";
import usePreviousList from "useHooks/usePreviousList";

const Admins = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    adminsData,
    isDeleteAdminsSuccess,
    isDeleteAdminsFailure,
    errorMessage,
  } = useSelector((state: RootState) => state.admin);

  const [deleteModal, setDeleteModal] = React.useState<boolean>(false);
  const [selectedId, setSelectedId] = React.useState<number>();

  const [prevIsDeleteAdminsSuccess, prevIsDeleteAdminsFailure] =
    usePreviousList<boolean>([isDeleteAdminsSuccess, isDeleteAdminsFailure]);

  useEffect(() => {
    if (isDeleteAdminsSuccess && prevIsDeleteAdminsSuccess === false) {
      enqueueSnackbar("Employee successfully deleted in admin role ", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  }, [enqueueSnackbar, isDeleteAdminsSuccess, prevIsDeleteAdminsSuccess]);

  useEffect(() => {
    if (isDeleteAdminsFailure && prevIsDeleteAdminsFailure === false) {
      enqueueSnackbar(errorMessage, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  }, [
    enqueueSnackbar,
    errorMessage,
    isDeleteAdminsFailure,
    prevIsDeleteAdminsFailure,
  ]);

  useEffect(() => {
    dispatch(allAdminsRequest());
  }, [dispatch]);

  const selectByEmployeeId = (id: number) => {
    Router.push(`/dashboard/admins/${id}`);
  };

  const onEdit = (id: number) => {
    Router.push(`/dashboard/admins/edit/${id}`);
  };

  const openDeleteModal = (id: number) => {
    setSelectedId(id);
    setDeleteModal(true);
  };

  const onDelete = () => {
    dispatch(deleteAdminRequest(selectedId));
  };

  const Action = (item: any) => (
    <>
      <IconButton size="small" onClick={() => onEdit(item.id)}>
        <EditIcon />
      </IconButton>
      <IconButton size="small" onClick={() => openDeleteModal(item.id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton size="small" onClick={() => selectByEmployeeId(item.id)}>
        <InfoIcon fontSize="inherit" />
      </IconButton>
    </>
  );

  return (
    <Card>
      <Box sx={{ p: 2, gap: "20px", display: "grid" }}>
        <div className="d-flex j-between">
          <Typography component="h1" variant="h5">
            Admins
          </Typography>
          <Button
            variant="contained"
            onClick={() => Router.push("/dashboard/admins/add")}
          >
            +
          </Button>
        </div>
        <EmployeeTable data={adminsData} action={Action} />
      </Box>
      <SimpleModal
        title="Remove employee"
        body="Do you agree to remove the employee from this job?"
        open={deleteModal}
        setOpen={setDeleteModal}
        agree={onDelete}
      />
    </Card>
  );
};

Admins.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Admins;
