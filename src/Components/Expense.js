import Chart from './Chart';

export default function Expense(){
    return (
        <div className='content'>
            <div className='c-title'>
                Spending - Last 7 days
            </div>
            <div className='c-chart'>
                <Chart/>
            </div>
            <hr></hr>
            <div className='c-footer'>
                <div className='c-f-left'>
                    <span className='c-f-l-title'>
                        Total this month
                    </span>
                    <span className='c-f-l-bal'>
                        $478.33
                    </span>
                </div>
                <div className='c-f-right'>
                    <span className='c-f-r-percent'>
                        +2.4%
                    </span>
                    <span className='c-f-r-title'>
                        from last month
                    </span>
                </div>
            </div>
            
        </div>
    )
}