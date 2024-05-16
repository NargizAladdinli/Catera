import { New_Rocker, Montserrat, } from "next/font/google";

export const rocker = New_Rocker({
    subsets: ['latin'],
    variable: '--rocker',
    weight: ['400']
});

export const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets:['latin'],
    variable: '--montserrat'
})