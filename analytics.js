

export const initGA = () => {
    if (process.env.NODE_ENV === 'production') {
      window.ga = window.ga || function() {
        (ga.q = ga.q || []).push(arguments);
      };
      ga.l = +new Date();
      ga('create', 'UA-XXXXXXXXX-X', 'auto');
      ga('send', 'pageview');
    }
  };
  
  export const logPageView = () => {
    if (process.env.NODE_ENV === 'production') {
      ga('send', 'pageview', window.location.pathname);
    }
  };