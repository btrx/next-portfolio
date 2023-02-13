export default function NavComp({ className, children, href}){
    const addClassName = className ? `${className}` : '';
    
    return (
        <a href={href} className={`${addClassName}`}>{children}</a>
    )
}