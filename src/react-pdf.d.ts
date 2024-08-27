/* eslint-disable @typescript-eslint/no-explicit-any */

declare module "react-pdf" {
    import { ComponentType } from "react";

    export const Document: ComponentType<any>;
    export const Page: ComponentType<any>;
    export const pdfjs: any;
}
