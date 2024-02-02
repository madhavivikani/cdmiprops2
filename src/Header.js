import './App.css';

function Header(props) {
    return (


        <>
            <div className="main_header">
                <div className="header">
                    <div>
                        <i className='icon'>{props.icon}</i>
                        <span className='info'>{props.name}</span>
                        <i className='icon'>{props.icon1}</i>
                        <span className='verify'>{props.name1}</span>
                    </div>
                    <p className='haveany'>{props.have}</p>
                    <p className='icon'>
                        <i>{props.facebook}</i>
                        <i>{props.twitter}</i>
                        <i>{props.google}</i>
                        <i>{props.linkedin}</i>
                        <i>{props.instagram}</i>
                        <i>{props.youtube}</i>
                        <i>{props.wtsp}</i>
                    </p>
                </div>
            </div>
        </>

    );
}
export default Header;