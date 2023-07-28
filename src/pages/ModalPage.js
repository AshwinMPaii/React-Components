import Modal from "../components/Modal"
import Button from "../components/Button"
import { useState } from "react"

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button primary hover onClick={handleClose}>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept. Please read it carefully.</p>
    </Modal>;
    return (
        <div>
            {/* {showModal ? <Modal /> : <Button primary onClick={handleClick}>open modal</Button>} */}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat aspernatur ipsum vel. Voluptates aliquam nostrum similique quae amet voluptatum omnis eligendi dolor commodi. Tempore corrupti quam ad eos repellat?</p>
            <Button primary onClick={handleClick}>open modal</Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage