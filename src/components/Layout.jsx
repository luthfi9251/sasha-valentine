import style from './Layout.module.css'

export default function Layout({ children, center,height,dataAos }){
    return(
        <div {...(dataAos ? {"data-aos" : dataAos, "data-aos-duration" : "600"} : {})} className={center ? [style.container,style.center].join(" ") : style.container} style={height && {height:height}} >
            {children}
        </div>
    )
}