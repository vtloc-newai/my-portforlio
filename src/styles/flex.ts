import { createGlobalStyle } from "styled-components";

export const GlobalFlex = createGlobalStyle`
  .d-flex { display: flex; }
  .d-inline-flex { display: inline-flex; }
  .flex-direction-row { flex-direction: row; }
  .flex-direction-column { flex-direction: column; }
  .flex-direction-row-reverse { flex-direction: row-reverse; }
  .flex-direction-column-reverse { flex-direction: column-reverse; }
  .justify-content-center { justify-content: center; }
  .justify-content-start { justify-content: flex-start; }
  .justify-content-end { justify-content: flex-end; }
  .justify-content-space-between { justify-content: space-between; }
  .justify-content-space-around { justify-content: space-around; }
  .align-items-center { align-items: center; }
  .align-items-start { align-items: flex-start; }
  .align-items-end { align-items: flex-end; }
  .align-items-baseline { align-items: baseline; }
  .align-items-stretch { align-items: stretch; }
`