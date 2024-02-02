function Choose(props) {
    return (

        <div>
            <div className='one1'>
                <div className='one_img1'>
                    <img src={props.img}></img>
                </div>
                <p className='industry'>{props.industry}</p>
                <p className='our_p'>
                    {props.our_p}
                </p>
            </div>

        </div>
    );
}
export default Choose;