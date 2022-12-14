import {
  createTheme,
  responsiveFontSizes,
  makeStyles,
} from '@mui/material/styles'
import { cyan } from '@mui/material/colors'

// eslint-disable-next-line import/no-mutable-exports
let theme = createTheme({
  palette: {
    type: 'light',
    primary: cyan,
    secondary: cyan,
  },
  typography: {
    fontFamily: 'Roboto',
    h2: {
      fontFamily: 'Droid Serif',
    },
    h3: {
      fontFamily: 'Droid Serif',
    },
  },
})

theme = responsiveFontSizes(theme)

const useStyle = makeStyles(() => ({
  root: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}))

export { theme, useStyle }
