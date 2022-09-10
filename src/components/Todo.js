import React from "react";
import Button from "@mui/material/Button";
import "../css/Todo.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "glamor";
import logo from './logo.jpg';


function Todo() {
  // toastify
  const notifySuccess = () =>
    toast.success("Task Added Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: css({
        background: "#42ba96 !important",
      }),
    });

  const notifyError = () => {
    toast.error("Please enter a task!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: css({
        background: "#ff9494 !important",
      }),
    });
  };

  const notifyWarn = () => {
    toast.warn("Task already exists!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: css({
        background: "#ffcc0 !important",
      }),
      // progressClassName: css({
      //   background:
      //     "repeating-radial-gradient(circle at center, red 0, blue, green 30px)"
      // })
    });
  };

  // toastify

  const [task, setTask] = useState("");
  const [item, setItems] = useState([]);

  const changeTextField = (e) => {
    setTask(e.target.value);
  };
  const addItem = () => {
    if (task === "") {
      notifyError();
    } else {
      if (item.indexOf(task) === -1) {
        item.push(task);
        setItems((item) => [...item]);
        setTask("");
        notifySuccess();
      } else {
        notifyWarn();
      }
    }
  };

  const removeTask = (val) => {
    //toast
    var filteredArray = item.filter((e) => e !== val);
    setItems(filteredArray);
    // toast
    toast.success("Task deleted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: css({
        background: "#ff9494 !important",
      }),
    });
  };

  return (
    <div>
      <ToastContainer />

      <Card className="center-card">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="AppBar">
            <Toolbar variant="dense">
              <p className="text-heading"> TODO LIST</p>
            </Toolbar>
          </AppBar>
        </Box>



        <form onSubmit={(e) => e.preventDefault()}>
          <Box className="add-items">



     <div className="stack">
            {/* <Stack direction="row" spacing={2} className="stack"> */}
            <img src={logo} alt="logo"  style={{height:"100px",width:"100"}}/>

              <TextField
                hiddenLabel
                value={task}
                id="filled-hidden-label-normal"
                placeholder="Add items..."
                variant="filled"
                InputProps={{
                  disableUnderline: true,
                  sx: { height: 55, width: 400 },
                }}
                style={{ fontFamily: "'Montserrat', sans-serif" ,marginTop:"10px",marginLeft:"30px"}}
                onChange={changeTextField}
                
              />
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                size="large"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                onClick={addItem}
                style={{marginTop:"-116px",padding:"14px",marginLeft:"30px"}}
              >
                Add
              </Button>
              </div>
            {/* </Stack> */}
          </Box>
        </form>

        <div
          style={{ overflow: "scroll", height: "350px" }}
          className="list-container"
        >
          {item.map((task, index) => {
            return (
              <Card
                key={index}
                className="tasks-list"
                style={{ backgroundColor: "#bb86fc" }}
              >
                <Grid
                  container
                  spacing={2}
                  style={{ marginTop: "0px", marginLeft: "10px" }}
                >
                  <Grid item xs={11}>
                    {task}
                  </Grid>
                  <Grid item xs={1}>
                    <Button
                      variant="text"
                      size="small"
                      style={{
                        marginLeft: "-40px",
                        color: "black",
                        marginTop: "-8px",
                      }}
                      onClick={() => {
                        removeTask(task);
                      }}
                    >
                      <ClearIcon />
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default Todo;
