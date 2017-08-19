import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import lightBlue from 'material-ui/colors/lightBlue';
import amber from 'material-ui/colors/amber';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
  palette: createPalette({
    primary: lightBlue,
    accent: amber,
    error: red,
  }),
});

export default theme;