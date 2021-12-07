import {createTheme} from "@material-ui/core/styles";

function DarkTheme(){
    const colorPalette = createTheme(
        {
            palette: {
                primary: {
                    main: 'rgb(192,192,192)',
                    light: '#ececec',
                    dark: '#181818'
                },
                secondary: {
                    main: '#f3c64a',
                    light: '#dcb97e',
                    dark: '#8F6F21'
                },
            }
        }
    );
    const darkTheme = createTheme(
        {
            palette:{
                type:"dark",
                primary: colorPalette.palette.primary,
                secondary: colorPalette.palette.secondary
            },

            overrides: {
                MuiCard:{
                    root: {
                        margin:2,
                        minWidth:150,
                        color: colorPalette.palette.primary.light,
                        background: colorPalette.palette.primary.dark,
                    }
                },
            },

            props: {
                MuiCard:{
                    elevation:10,
                },
                MuiButton:{
                    variant:"text",
                    color:"secondary"
                }
            }
        }
    );
    return darkTheme;
}
export default DarkTheme;

