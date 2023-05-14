import React, { useEffect, useState } from "react";
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
import "./PendingRequest.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
function createData(name, calories, fat) {
  return {
    name,
    calories,
    fat,
  };
}

let achievement = [];
const rows = [
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645dcd55dc447bdccb499b3c",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement 2",
    id: "645dcd55dc447bdccb499b3e",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement 3",
    id: "645ddb597617cacc48c8747e",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement 4",
    id: "645dcfe3233963a2b52a9d37",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645e78ed75c9d61f200b983d",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645e78ee75c9d61f200b983f",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645e78ef75c9d61f200b9841",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645e78ef75c9d61f200b9843",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645e796475c9d61f200b984b",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645e862f473775702fb7d636",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645f32d8473775702fb7d64b",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645f3430473775702fb7d677",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645f3433473775702fb7d679",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645f3435473775702fb7d67b",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645f347d473775702fb7d67d",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645f3482473775702fb7d67f",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645f349c473775702fb7d681",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645f349c473775702fb7d681",
  },
  {
    name: "Kuldeep Katara",
    title: "Example Achievement",
    id: "645f349c473775702fb7d681",
  },
  
];
// const rows = [
//   createData("A", 305),
//   createData("L", 452),
//   createData("H", 262),
//   createData("D", 159),
//   createData("E", 356),
//   createData("J", 408),
//   createData("W", 237),
//   createData("T", 375),
//   createData("U", 518),
//   createData("I", 392),
//   createData("Y", 318),
//   createData("N", 360),
//   createData("M", 437),
// ];

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
    id: "achievement",
    numeric: true,
    disablePadding: false,
    label: "Acheivements",
  },
  {
    id: "export",
    numeric: true,
    disablePadding: false,
    label: (
      <button type="button" class="btn btn-warning">
        Export
      </button>
    ),
  },
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
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
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
          Achievement Table
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
  const [isFunctionCalled,setIsFunctionCalled] = useState(false);
  
  //   const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    console.log('inside use effect')
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
  }, [isFunctionCalled]);

  console.log("inside pending", achievements);

  const newArray = achievements.filter(item => item.status === "pending").map((item) => {
    return {
      name: item.user.name,
      title: item.title,
      id: item._id,
    };
  });

  const updatedAchievements = achievements.filter((item)=>item.status==='pending')

  const changeStatus = (event) => {
    let arr = event.target.id.toString().split('-')
    let id = arr[2]
    let status = arr[0]
  
    setIsFunctionCalled(!isFunctionCalled)
    axios.put(`http://127.0.0.1:5000/api/achievements/${id}`, { status })
      .then(response => {
        const achievement = response.data
        console.log(`Achievement ${achievement._id} status updated to ${achievement.status}`)
        window.location.reload()
        // setAchievements(prevState => {
        //   // Map over previous state and update the achievement with matching ID
        //   return prevState.map(a => {
        //     if (a._id === achievement._id) {
        //       return achievement;
        //     } else {
        //       return a;
        //     }
        //   });
        // });
      })
      .catch(err => {
        console.error(err)
      })
  
    console.log("change id", event.target.id);
  };
  

  console.log(updatedAchievements,'updated');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = newArray.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - newArray.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(newArray, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <EnhancedTableToolbar numSelected={selected.length} />
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
            rowCount={newArray.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                
                <TableRow
                  hover
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      onClick={(event) => handleClick(event, row.id)}
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
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">
                    <button
                      type="button"
                      class="btn btn-outline-dark btn-sm"
                      style={{ margin: "3px" }}
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning btn-sm"
                      id={`accepted-btn-${row.id}`}
                      style={{ margin: "3px" }}
                      onClick={changeStatus}
                    >
                      {" "}
                      <CheckCircleIcon />
                      Approve
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger btn-sm"
                      style={{ margin: "3px" }}
                      id={`rejected-btn-${row.id}`}
                      onClick={changeStatus}
                    >
                      {" "}
                      <CancelIcon />
                      Reject
                    </button>
                  </TableCell>
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
        count={newArray.length}
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
