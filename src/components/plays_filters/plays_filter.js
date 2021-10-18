import { Disclosure } from '@headlessui/react'
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

function PlaysFliter(props) {
    return (
        <div className="  rounded-md  bg-white px-2 py-4 m-2" >
            <Disclosure >
            {({ open }) => (<>
                <Disclosure.Button className="py-2 flex items-center gap-3 ">
                    {open ? <BiChevronUp /> : <BiChevronDown />}
                    <span className={`${open ? "text-red-600" : "text-gray-500"} ` } >
                        {props.title}
                    </span>

                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500">
                    <div className="flex items-center gap-3 flex-wrap" >
                        {
                            props.tags.map((tag) => (
                                <>
                                    <div className=" border-2 border-gray-200  p-2  " >

                                        <span class="text-red-600 text-xs">{tag}</span>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </Disclosure.Panel>

            </>)}
        </Disclosure>
        </div>
    );
}

export default PlaysFliter;