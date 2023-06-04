import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import "./Table.css";
import axios from "axios";
import UserAllAchievementPreview from "./UserAllAchievementPreview";
import UserContext from "../contexts/UserContext";
import { Button, Form, Input, Modal, Upload, Select, DatePicker } from "antd";

function createData(name, calories, fat) {
  return {
    name,
    calories,
    fat,
  };
}

const rows = [];

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

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
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

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Students Name",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Acheivements",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: (
      <button type="button" class="btn btn-warning">
        Export
      </button>
    ),
  },
];

const yearFilterOptions = [
  "BTECH 1st Year",
  "BTECH 2nd Year",
  "BTECH 3rd Year",
  "BTECH 4th Year",
];

const branchFilterOptions = ["CSE", "ECE", "ME", "CE"];

const achievementOptions = [
  "Academic Achievements",
  "Internship and Work Achievements",
  "Global Achievement",
  "Entrepreneurship and Innovation Achievements",
  "Research and Publication Achievements",
  "Social Impact Achievements",
  "Health and Wellness Achievements",
  "Creative Arts Achievements",
  "Music and Dance Achievements",
  "Literature Achievements",
  "Athletics and Sports Achievements",
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Analytics Table
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function TeacherTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  //   const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [achievements, setAchievements] = useState([]);

  //new pop up
  const [openPopups, setOpenPopups] = useState({});
  const [viewedAchievement, setViewedAchievement] = useState(null);
  const handleClosePopup = (rowId) => {
    setOpenPopups((prevOpenPopups) => ({
      ...prevOpenPopups,
      [rowId]: false,
    }));
  };

  useEffect(() => {
    console.log("inside use effect");
    const fetchUserDataAndAchievements = async () => {
      try {
        const [achievementsResponse] = await Promise.all([
          axios.get(`http://127.0.0.1:5000/api/achievements/all`),
        ]);

        const achievements = achievementsResponse.data;
        setAchievements(achievements);
      } catch (error) {
        console.error(error);
        // Handle error here
      }
    };

    fetchUserDataAndAchievements();
  }, []);

  console.log("inside pending", achievements);

  const [filteredArray, setFilteredArray] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const { userInformation } = useContext(UserContext);

  const [isFilterApplied, setFilterApplied] = useState(false);

  useEffect(() => {
    setNewArray(
      achievements
        .filter(
          (item) =>
            item.status === "accepted" 
        )
        .map((item) => ({
          name: item.user.name,
          title: item.title,
          id: item._id,
          category: item.category,
          branch: item.user.branch,
          class: item.user.class,
          count: item.user.achievement_count,
        }))
    );
    // const newArray = achievements
    //   .filter((item) => item.status === "accepted")
    //   .map((item) => ({
    //     name: item.user.name,
    //     title: item.title,
    //     id: item._id,
    //     category: item.category,
    //     branch: item.user.branch,
    //     class: item.user.class,
    //   }));

    console.log(newArray);

    setFilteredArray(newArray);
  }, [achievements]);

  console.log("in analytics", filteredArray, filteredArray);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = filteredArray.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //   const handleChangeDense = (event) => {
  //     setDense(event.target.checked);
  //   };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredArray.length) : 0;

  console.log(filteredArray, "line 298");

  const handleYearChange = (selectedItems) => {
    const newFilteredArray = newArray.filter((item) =>
      selectedItems.includes(item.class)
    );
    setFilteredArray(newFilteredArray);
    setFilterApplied(!isFilterApplied);
    if (selectedItems.length === 0) setFilteredArray(newArray);
    console.log("Selected items:", selectedItems, newFilteredArray, newArray);
  };

  const handleCategoryChange = (selectedItems) => {
    const newFilteredArray = newArray.filter((item) =>
      selectedItems.includes(item.category)
    );
    setFilteredArray(newFilteredArray);
    setFilterApplied(!isFilterApplied);
    if (selectedItems.length === 0) setFilteredArray(newArray);
    console.log("Selected items:", selectedItems, newFilteredArray, newArray);
  };

  const handleBranchChange = (selectedItems) => {
    const newFilteredArray = newArray.filter((item) =>
      selectedItems.includes(item.branch)
    );
    setFilteredArray(newFilteredArray);
    setFilterApplied(!isFilterApplied);
    if (selectedItems.length === 0) setFilteredArray(newArray);
    console.log("Selected items:", selectedItems, newFilteredArray, newArray);
  };

  const visibleRows = React.useMemo(
    () =>
      stableSort(filteredArray, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, isFilterApplied]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <EnhancedTableToolbar numSelected={selected.length} />
      <div
        className="flex-container"
        style={{
          justifyContent: "space-between",
          width: "60rem",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <Select
          mode="multiple"
          style={{ width: "300px", height: "fit-content" }}
          placeholder="Filter By Year"
          onChange={handleYearChange}
        >
          {yearFilterOptions.map((item) => (
            <Option value={item}>{item}</Option>
          ))}
        </Select>
        <Select
          mode="multiple"
          style={{ width: "300px", height: "fit-content" }}
          placeholder="Filter By Branch"
          onChange={handleBranchChange}
        >
          {branchFilterOptions.map((item) => (
            <Option value={item}>{item}</Option>
          ))}
        </Select>
        <Select
          mode="multiple"
          style={{ width: "300px", height: "fit-content" }}
          placeholder="Filter By Category"
          onChange={handleCategoryChange}
        >
          {achievementOptions.map((item) => (
            <Option value={item}>{item}</Option>
          ))}
        </Select>
      </div>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          // size={dense ? 'small' : 'medium'}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.name}
                  selected={isItemSelected}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.count}</TableCell>
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
                        const viewedAchievement = achievements.find(
                          (achievement) => achievement._id === row.id
                        );
                        setViewedAchievement(viewedAchievement);
                      }}
                    >
                      View
                    </button>
                  </TableCell>
                  <UserAllAchievementPreview
                      viewedAchievement={viewedAchievement}
                      openPopups={openPopups}
                      row={row.id}
                      handleClosePopup={handleClosePopup}
                      achievements={achievements}
                      teacherCateory={userInformation.category}
                    />
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredArray.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}
