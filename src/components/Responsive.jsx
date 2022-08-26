import {css} from "styled-components"

export const mobile = (props) => {
    return css`
     @media only screen and (max-width: 576px) {
        ${props}
    }
    `
}

export const tablet = (props) => {
    return css`
     @media only screen and (max-width: 768px) {
       ${props}
    }
    `
}

export const largeDevice = (props) => {
    return css`
     @media only screen and (max-width: 992px) {
      ${props}
    }
    `
}

// export const maxDevice = (props) => {
//     return css`
//      @media only screen and (min-width: 993px) and (max-width: 1200px) {
//       ${props}
//     }
//     `
// }
