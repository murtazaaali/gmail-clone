import React from "react";
import { Box, Button, styled, List, ListItem, Typography } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { SIDEBAR_DATA } from "../config/SideBar.config";

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: 16,
  minWidth: 140,
  textTransform: "none",
});

const Container = styled(Box)({
  padding: 8,
  "& > ul": {
    paddingTop: "10px",
    paddingRight: "0px",
    paddingBottom: "0px",
    paddingLeft: "5px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    "& > li > svg ": {
      marginRight: "20px",
    },
  },
});

const SideBarContent = () => {
  return (
    <Container>
      <ComposeButton>
        <CreateOutlinedIcon /> Compose
      </ComposeButton>

      <List>
        {SIDEBAR_DATA.map((data) => (
          <ListItem key={data.name}>
            <data.icon fontSize="small" />
            <Typography variant="body2">{data.title}</Typography>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SideBarContent;
