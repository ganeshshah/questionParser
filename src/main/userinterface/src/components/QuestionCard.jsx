import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

function QuestionCard() {
    const nums = [1, 2, 3, 4, 5];

    return (
        <div class="relative md:container md:mx-auto mx-2 bg-white p-6 rounded-lg shadow-lg border-2 border-emerald-400 z-0">
            <FontAwesomeIcon className='absolute top-2 right-2' icon={faLightbulb} bounce size="lg" />
            <span className=''>
                <p class="text-black font-bold inline">Question: </p>
                <p class="text-gray-700 inline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fugiat architecto cum quam est earum quod possimus eos accusantium quaerat sequi nihil repellendus qui id? Nostrum nemo totam perferendis dignissimos?</p>
            </span>
            <span>
                <p class="text-black font-bold">Options: </p>
                <ol className=''>
                    {
                        nums.map(() => (
                            <li>
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
