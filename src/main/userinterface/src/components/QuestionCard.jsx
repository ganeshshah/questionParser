import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

function QuestionCard() {
    const nums = [1, 2, 3, 4, 5];

    return (
        <div className="relative md:container md:mx-auto mx-2 bg-white p-6 rounded-lg shadow-lg border-2 border-emerald-400 z-0">
            <FontAwesomeIcon className='absolute top-2 right-2' icon={faLightbulb} bounce size="lg" />
            <span className=''>
                <p className="text-black font-bold inline">Question: </p>
                <p className="text-gray-700 inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fugiat architecto cum quam est earum quod possimus eos accusantium quaerat sequi nihil repellendus qui id? Nostrum nemo totam perferendis dignissimos?</p>
            </span>
            <span>
                <p className="text-black font-bold">Options: </p>
                <ol className=''>
                    {
                        nums.map((i) => (
                            <li key={i}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </li>
                        ))
                    }
                </ol>
            </span>
        </div>
    )
}
export default QuestionCard;
