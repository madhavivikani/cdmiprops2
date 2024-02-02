function Count(props) {
    return (

        <div>
            <div className='one_img11'>
                <div className='b1'>
                    <img src={props.img}></img>
                </div>
                <p className='number'>{props.number}</p>
                <p className='std'>{props.std}</p>
            </div>
        </div>

    );
}
export default Count;