import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
    colors:{ 
        bland: "#FD91AB",
        pink: {
            100: "#f4c5c9",
            200: "#efa5a8", 
            300: "#e496a0", 
            400: "#c36d78", 
            500: "#be535d",
    },
    },
    styles: {
        global: {
            body: {
                backgroundColor: '#fcfcfc',
                color: '#333'
            },
            html: {
                height: '100%'
            }
        }
    }
});

export default Theme