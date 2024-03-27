import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CardItemComponent({ id, item }) {
    
    const [clicked, setClicked] = React.useState(false);
    const router = useNavigate();

    let active = "text-sm rounded-lg py-1 px-3 bg-blue-400 text-white";
    let deactive = "text-sm text-gray-400 py-1 px-3 border-2 rounded-lg border-gray-200";

    const onNavigate = () => {
        router(`/details/${id}`);
    }

    return (
        <div onClick={onNavigate} className={`ring max-w-[22rem] m-2 rounded-lg p-4 ${clicked ? 'ring-blue-400' : 'ring-gray-100'}`}>
            <div className="flex justify-between align-center mb-8">
                <div className="rounded-full bg-blue-200 w-8 h-8"></div>
                <button onClick={() => setClicked(!clicked)}
                    className={clicked ? active : deactive}>
                    {clicked ? 'Connected' : 'Connect'}
                </button>
            </div>

            <div className="flex align-start gap-4 mb-3">
                <h4 className="font-bold text-md text-gray-600">{item.title}</h4>
            </div>

            <p className="text-gray-400 text-xs">
                {item.description}
            </p>
        </div>
    );
}