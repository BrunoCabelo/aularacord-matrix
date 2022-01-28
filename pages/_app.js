function GlobalStyle(){
    return(
        <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
          background: linear-gradient(45deg, #436436, #D6F599, #D2FF28, #C84C09, #420217);
          background-size: 300% 300%;
          animation: colors 15s ease infinite;
        }

        @keyframes colors{
          0% { 
            background-position: 0% 50%;
          }
          50%{
            background-position: 100% 50%;
          }
          100% { 
            background-position: 0% 50%;
           }
        } 
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    )
}

export default function MyApp({Component, pageProps}){
    
    return(
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>  
    );
}