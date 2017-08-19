import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import amber from 'material-ui/colors/amber';
import lightBlue from 'material-ui/colors/lightBlue';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
  palette: createPalette({
    primary: amber,
    accent: lightBlue,
    error: red,
  }),
});

export default theme;