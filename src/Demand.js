
const demand_1 = ['Multimedia Training Institute In Varachha', 'spoken english class in katargam', 'Web development training in katargam', 'Best animation training course','Adobe illustrator design'];

const demand_2 = ['C++ Programming Language Training Institute In Varachha', 'Python Training Institute In Varachha', 'Adobe illustrator design', 'Adobe xd design training institute in varachha'];

const demand_3 = ['Multimedia Training Institute In Varachha', 'spoken english class in katargam', 'Web development training in katargam', 'Best animation training course'];



function Demand() {
    return (
        <div>
            <div className='demand'>
                <p className='our_d'>Our Demanded Course -</p>
                <div className='parent_btn'>
                    <div className='btn3'>
                        {
                            demand_1.map((ele, index) => {
                                return (
                                    <p className="multi">{ele}</p>
                                )
                            })
                        }
                    </div>
                    <div className='btn3'>
                        {
                            demand_2.map((ele, index) => {
                                return (
                                    <p className="multi">{ele}</p>
                                )
                            })
                        }
                    </div>
                    <div className='btn3'>
                        {
                            demand_3.map((ele, index) => {
                                return (
                                    <p className="multi">{ele}</p>
                                )
                            })
                        }
                    </div>
                    <p className='show'>Show Less</p>
                </div>
            </div>

        </div>
    );
}
export default Demand;