import MuiError from '@mui/utils/macros/MuiError.macro';

export default function makeStyles() {
  throw new MuiError(
    'MUI: makeStyles is not longer exported from @mui/material/styles.\n' +
      'You have to import it from @mui/styles.\n' +
      'See https://mui.com/r/migration-v4/#mui-material-styles for more details.',
  );
}
