import { createStyles, Grid, makeStyles, Theme, Icon } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Input from "./Input";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "10px",
    },
    icon: {
      color: "rgba(188, 204, 221, 0.25)",
    },
  })
);

const Search = (props: {
  search: string;
  setSearch: (newSearch: string) => void;
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      className={classes.root}
      alignItems="center"
    >
      <Icon className={classes.icon}>
        <SearchIcon />
      </Icon>
      <Input search={props.search} setSearch={props.setSearch} />
    </Grid>
  );
};

export default Search;