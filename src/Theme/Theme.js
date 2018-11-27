import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
	palette:{
		// primary: '#047b9c',
		primary: {
		  light: '#3695af',
	      main: '#047b9c',
	      dark: '#02566d',
	     // contrastText: '#fff'
		},
		secondary: {
		// light: '#ffc649',
	      main: '#ffb81c',
	      dark: '#b28013',
	    //  contrastText: '#000'
		},
		default: {
			main: '#db0020'
		},

		type: 'light'
	},
  typography: {
    fontFamily: [
      'Open Sans', 
      'Calibri', 
      'Tahoma',
      'sans-serif',
      'Monaco',
      'Lucida Console',
      'monospace'
    ].join(','),
  },
	props: {
		MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    }
	},
	overrides: {
      MuiButton: { // Name of the component ⚛️ / style sheet
        root: { // Name of the rule
          textTransform: 'none',
          borderRadius: '100px',
          minWidth: '181px',
          fontSize: '14px',
          padding: '0 12px'
        },
        sizeSmall: { // Name of the rule
          textTransform: 'none',
          borderRadius: '100px',
          minWidth: '141px',
          fontSize: '14px',
          padding: '0 12px'
        },
        sizeLarge: { // Name of the rule
          textTransform: 'none',
          borderRadius: '100px',
          minWidth: '201px',
          fontSize: '18px',
          padding: '0 12px'
        }
      },
      MuiPopover: {
        root: {
          borderRadius: '4px',
          padding: '10px',
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',
          marginTop: '10px'
        },
        paper: {
          padding: '20px',
          maxWidth: '294px'
        }
      },
      MuiSlider: {
        root: {
       
        },
        track: {
          backgroundColor: '#d9d9d9',
          height: '4px'
        },
        thumb: {
          backgroundColor: '#22b6b4',
          width: '15px',
          height: '15px'
        }
      },
      MuiDialog: {

      }
    }
});


// const ThemeContext = React.createContext(themes.light);

 export default Theme;