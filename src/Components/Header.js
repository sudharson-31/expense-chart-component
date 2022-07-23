

export default function Header(){
    return (
        <div className="header">
            <div className="h-content-cont">
                <span className="h-content-title">
                    My balance
                </span>
                <span className="h-content-bal">
                    $921.48
                </span>
            </div>
            <div className="h-logo-cont">
                <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo"></img>
            </div>
        </div>
    )
}