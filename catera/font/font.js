import { New_Rocker, Montserrat, Ibarra_Real_Nova} from "next/font/google";

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
export const ibarra = Ibarra_Real_Nova({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--ibarra'
})