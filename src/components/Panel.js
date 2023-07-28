import classNames from "classnames";

function Panel({ children, className, ...rest }) {
    const finalClassNames = classNames(
        'border rounded shadow p-3 w-full bg-white',
        className
    );
    return (
        <div {...rest} className={finalClassNames}>{children}</div>
    )
}

export default Panel