function AnalyticsCard({ title, subTitle, totalNumber }) {
    return (
        <>
            <div className='border border-gray-300 p-4 rounded-md shadow-md'>
                <p className='text-bold p-1 text-xl'>{title}</p>
                <p className='text-bold p-1 text-lg text-slate-500'>{subTitle}</p>
                <p className='text-bold p-1 text-5xl text-slate-800'> {totalNumber}</p>
            </div>
        </>
    )
}

export default AnalyticsCard;