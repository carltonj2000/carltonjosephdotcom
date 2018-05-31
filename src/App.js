import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BuildIcon from "@material-ui/icons/Build";
import FaceIcon from "@material-ui/icons/Face";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import CameraIcon from "@material-ui/icons/CameraAlt";
import HikingIcon from "@material-ui/icons/DirectionsWalk";
import SideProjectsIcon from "@material-ui/icons/AssignmentReturn";

import docker from "./images/web_docker_servers.svg";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "appBarShift-left": {
    marginLeft: drawerWidth
  },
  "appBarShift-right": {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: -drawerWidth
  },
  "content-right": {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: 0
  },
  "contentShift-right": {
    marginRight: 0
  },
  centerText: {
    textAlign: "center",
    marginBottom: "20px"
  },
  skills: {
    marginTop: "20px"
  }
});

class PersistentDrawer extends Component {
  state = {
    open: false,
    anchor: "left"
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="About Me" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SideProjectsIcon />
            </ListItemIcon>
            <ListItemText primary="Side Project" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <MotorcycleIcon />
            </ListItemIcon>
            <ListItemText primary="Riding" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CameraIcon />
            </ListItemIcon>
            <ListItemText primary="Photography" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HikingIcon />
            </ListItemIcon>
            <ListItemText primary="Hiking" />
          </ListItem>
        </List>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === "left") {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-${anchor}`]]: open
              })}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    open && classes.hide
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" noWrap>
                  Carlton Joseph's Profile Site
                </Typography>
              </Toolbar>
            </AppBar>
            {before}
            <main
              className={classNames(
                classes.content,
                classes[`content-${anchor}`],
                {
                  [classes.contentShift]: open,
                  [classes[`contentShift-${anchor}`]]: open
                }
              )}
            >
              <div className={classes.drawerHeader} />
              <Typography className={classes.centerText}>
                Under construction. More details coming soon ...
                <br />
                The site previously hosted here has moved to another domain.
                Contact me to get the new location.
              </Typography>
              <Divider />
              <Typography variant="display1" className={classes.skills}>
                Objective
              </Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="Move into web and mobile application development after many years in the embedded space." />
                </ListItem>
              </List>
              <Divider />
              <Typography variant="display1" className={classes.skills}>
                Skills
              </Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="React, React Native, Redux, React Router, Express" />
                </ListItem>
              </List>
              <Divider />
              <Typography variant="display1" className={classes.skills}>
                Under Development
              </Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="Server Side Rendering, GraphQl, Relay Modern, PWA, Electron, RxJs, ReasonML" />
                </ListItem>
              </List>
              <Divider />
              <Typography variant="display1" className={classes.skills}>
                Historical
              </Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="PHP, JQuery, SQL, C#" />
                </ListItem>
              </List>
              <Divider />
              <Typography variant="display1" className={classes.skills}>
                Support
              </Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="Docker, Apache, Nginx, Caddy, HTTPS, OAUTH, Python, Go" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="" />
                </ListItem>
              </List>
              <Divider />
              <Typography variant="display1" className={classes.skills}>
                Docker Setup Redesign
              </Typography>
              <img src={docker} alt="Docker Setup Redesign" />
              <Divider />
              <Typography variant="display1" className={classes.skills}>
                Projects
              </Typography>
              <ul>
                <li>
                  <Typography variant="">
                    <a href="http://tinaandcarlton.com">
                      3 React sites with docker routing on the front end
                    </a>
                  </Typography>
                </li>
                <li>
                  <Typography variant="">
                    <a href="https://github.com/carltonwin8/mobile-flashcards">
                      React Native
                    </a>
                  </Typography>
                </li>
                <li>
                  <Typography variant="">
                    <a href="http://carltonwin8.com">
                      Site with HTML, CSS &amp; JavaScript and no React.
                    </a>&nbsp; The map section of the site is presently broken.
                  </Typography>
                </li>
                <li>
                  <Typography variant="">
                    <a href="http://appsfortracking.com">
                      React site with OAUTH and a Firebase Store DB backend.
                    </a>
                  </Typography>
                </li>
                <li>
                  <Typography variant="">
                    <a href="https://github.com/carltonwin8/strip-led-control">
                      Raspberry Pi Project.
                    </a>
                  </Typography>
                </li>
              </ul>
            </main>
            {after}
          </div>
        </div>
      </Fragment>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
