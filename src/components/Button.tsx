const variantsClasses: {[key: string]: string} = {
    ghost: " hover:bg-primary/35 hover:bg text-sm"
}

const sizesClasses: {[key: string]: string} = {
    icon: "rounded border-0 max-w-7 max-h-7 min-w-7 min-h-7"
}

export type variants = "ghost" 
export type sizes = "icon" 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: variants
    size?: sizes
}

export default function Button({variant = "ghost", size = "icon", className = "", children = "", ...rest}: ButtonProps){

    
    return (
        <button className={` ${className} ${sizesClasses[size]} ${variantsClasses[variant]} select-none`} {...rest}>{children}</button>
    )
    
}