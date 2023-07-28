import className from "classnames";

function Button({ children,
    primary,
    secondary,
    warning,
    danger,
    success,
    outline,
    rounded,
    hover,
    ...rest }) {
    const classes = className('flex items-center w-32 px-3 py-2 my-2 mx-2 border', {
        'border-sky-500 bg-sky-500 text-black justify-center': primary,
        'border-blue-500 bg-blue-500 text-white': secondary,
        'border-yellow-500 bg-yellow-500 text-black': warning,
        'border-red-500 bg-red-500 text-black': danger,
        'border-green-500 bg-green-500 text-black': success,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-sky-800': outline && primary,
        'text-blue-500': outline && secondary,
        'text-yellow-700': outline && warning,
        'text-red-500': outline && danger,
        'text-green-500': outline && success,
        'hover:bg-sky-800 hover:text-white': hover,
    })
    // this component can be called 'wrapper'
    return (
        <button {...rest} className={classes}>{children}</button>
        //these plain elements can be called 'underlying element'
    )
}


Button.propTypes = {
    checkVariationValue: ({ primary,
        secondary,
        warning,
        danger,
        success,
        outline,
        rounded }) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!warning) + Number(!!danger) + Number(!!success);

        if (count > 1) {
            return new Error("Only one can be true");
        }
    }
}

export default Button