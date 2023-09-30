import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Loading() {
    return (<div className="flex justify-center items-center h-screen w-full text-6xl" >
        <FontAwesomeIcon icon={faSpinner} spinPulse />
    </div >)
}

export default Loading;