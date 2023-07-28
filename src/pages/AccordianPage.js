import Accordion from "../components/Accordion"

function AccordianPage() {
    const items = [{
        id: '1',
        label: 'can i use javascript on a project',
        content: 'you can use javascript on any project you want Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rem repudiandae nulla nemo facilis, eligendi fugiat alias ipsa a reiciendis quod temporibus? Fugiat molestias pariatur iure doloremque amet ipsa tempora?'
    }, {
        id: '2',
        label: 'can i use css on a project',
        content: 'you can use css on any project you want Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rem repudiandae nulla nemo facilis, eligendi fugiat alias ipsa a reiciendis quod temporibus? Fugiat molestias pariatur iure doloremque amet ipsa tempora?'
    }, {
        id: '3',
        label: 'can i use html on a project',
        content: 'you can use html on any project you want Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rem repudiandae nulla nemo facilis, eligendi fugiat alias ipsa a reiciendis quod temporibus? Fugiat molestias pariatur iure doloremque amet ipsa tempora?'
    }];
    return (
        <Accordion items={items} />
    )
}

export default AccordianPage