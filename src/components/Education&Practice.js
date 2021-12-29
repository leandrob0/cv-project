export default function Works(props) {

    const {
        allWork,
        classWork
    } = props;

    return(
        <div className={classWork}>
            {
                allWork.map(val => {
                    return(
                        <ul key={val.id}>
                            <li key={val.placeName}><b>Institution name:</b> {val.placeName}</li>
                            <li key={val.title}><b>Title:</b> {val.title}</li>
                            <li key={val.dateStarted}><b>Date started:</b> {new Date(val.dateStarted).toLocaleDateString('en-US')}</li>
                            <li key={val.dateFinish}><b>Date finished - to finish:</b> {new Date(val.dateFinish).toLocaleDateString('en-US')}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}