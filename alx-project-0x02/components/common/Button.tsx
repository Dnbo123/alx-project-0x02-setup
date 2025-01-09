import { type ButtonProps } from "@/interfaces";

export const Button = ({ size, shape }: ButtonProps) => {
    return(
        <button style={{ width: size, height: size, borderRadius: shape }}></button>
    )
}

export default Button
