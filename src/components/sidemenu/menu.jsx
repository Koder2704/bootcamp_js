import * as React from 'react'
import { menuItems } from '../../utils/menu-datas'
import MenuTileComponent from './menu-tile'

export default function MenuComponent() {

    // const [clicked, setClicked] = React.useState(false);

    // const handleItemSelection = (index) => {
    //     menuItems.find(item => {
    //         if (menuItems.indexOf(item) === index) {
    //             setClicked(true);
    //         }
    //     });
    //     return clicked;
    // }

    return (
        <div className='flex flex-col  items-start mt-[56px] p-2 h-full fixed max-w-[240px] w-full border-r'>

            <h2 className='ml-3 my-6 font-bold text-xl text-gray-600'>Side Menu</h2>

            {menuItems.map((item, index) => (
                <MenuTileComponent key={index} item={item} />
            ))}
        </div>
    )
}
