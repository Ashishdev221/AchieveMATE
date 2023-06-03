import { Icon } from "@iconify/react";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import Profile from "./Profile";
import ProfileCard from "./ProfileCard";
import Link from "antd/es/typography/Link";
import "./UserAllAchievementPreview.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import AchievementPreview from "./AchievementPreview";

const UserAllAchievementPreview = (props) => {
  const handleClosePopupClick = (rowId) => {
    props.handleClosePopup(rowId);
  };
  console.log("dddddd", props.viewedAchievement);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  //   const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [openPopups, setOpenPopups] = useState({});
  const [viewedAchievement, setViewedAchievement] = useState(null);
  const handleClosePopup = (rowId) => {
    setOpenPopups((prevOpenPopups) => ({
      ...prevOpenPopups,
      [rowId]: false,
    }));
  };

  console.log(props.achievements, ";;;;;;;;;;");
  const newArray = props.achievements
    .filter(
      (item) =>
        item.user.name === props.viewedAchievement?.user.name
    )
    .map((item) => ({
      name: item.user.name,
      title: item.title,
      id: item._id,
      category: item.category,
      branch: item.user.branch,
      class: item.user.class,
      count: item.user.achievement_count,
      authority: item.certifying_authority,
    }));
  console.log(newArray, ">>>>>>>>>>>>");

  //   const handleChangeDense = (event) => {
  //     setDense(event.target.checked);
  //   };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - newArray.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(newArray, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  console.log(visibleRows, "???????????/");

  return (
    <>
      <Modal
        open={props.openPopups[props.row] || false}
        width={1100}
        centered={true}
        closeIcon={
          <Icon
            onClick={() => handleClosePopupClick(props.row)}
            icon="mdi:close-box"
            color="#f90c0c"
          />
        }
        className="achivement-preview"
        footer={null}
      >
        <div
          className="flex-container profile_container"
          style={{ justifyContent: "space-between", padding: "20px" }}
        >
          <ProfileCard user={props.viewedAchievement?.user} />
          <div className="flex">
            <div className="achievement_counter">{newArray.length}</div>
            <h3>Acheivements</h3>
          </div>
        </div>
        <Box sx={{ width: "80%" }} style={{ margin: "0px auto" }}>
          <TableContainer
            style={{
              border: "2px solid black",
              marginTop: "20px",
              padding: "0px 10px",
              textAlign: "center",
              justifyContent: "center",
             
            }}
          >
            <TableRow
              hover
              //   onClick={(event) => handleClick(event, row.id)}
              role="checkbox"
              sx={{ cursor: "pointer" }}
            >
              <TableCell
                component="th"
                scope="row"
                padding="none"
                sx={{ width: "50%" }}
              >
                <h6>Achievement Title</h6>
              </TableCell>
              <TableCell align="right" sx={{ width: "30%" }}>
                <h6>Achievement Category</h6>
              </TableCell>
              <TableCell align="right" sx={{ width: "40%" }}>
                <h6>Certifying Authority</h6>
              </TableCell>
            </TableRow>
            {newArray.map((row, index) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  //   onClick={(event) => handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.title}
                  selected={isItemSelected}
                  sx={{ cursor: "pointer" }}
                >
                  {/* <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={isItemSelected}
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </TableCell> */}
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">
                    <button
                      type="button"
                      class="btn btn-outline-dark btn-sm"
                      onClick={() => {
                        setOpenPopups((prevOpenPopups) => ({
                          ...prevOpenPopups,
                          [row.id]: true,
                        }));

                        // Additional functionality or state updates here
                        // For example, you can set the viewed achievement based on the row.id
                        const viewedAchievement = props.achievements.find(
                          (achievement) => achievement._id === row.id
                        );
                        setViewedAchievement(viewedAchievement);
                      }}
                    >
                      View
                    </button>
                    {/* {row.authority} */}
                  </TableCell>
                  <AchievementPreview
                    viewedAchievement={viewedAchievement}
                    openPopups={openPopups}
                    row={row.id}
                    handleClosePopup={handleClosePopup}
                  />
                </TableRow>
              );
            })}
          </TableContainer>
        </Box>
      </Modal>
    </>
  );
};

export default UserAllAchievementPreview;
