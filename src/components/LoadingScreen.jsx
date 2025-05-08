import { useState, useEffect } from "react"

export const LoadingScreen = ( { onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "< Hello World >";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete(); // Call the onComplete function after the text is fully displayed
                }, 1000); // Adjust the delay before calling onComplete
            }
        }, 100); // Adjust the speed of typing here
    return () => clearInterval(interval);
    }, {onComplete});

    return <div className="fixed inset-0 bg-black z-50 text-gray-100 flex flex-col justify-center items-center">
        <div className="mb-4 text-4xl font-mono text-bold">
            {text} <span className="animate-blink ml-1"> | </span>
            </div>
    
    <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden ">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6 animate-loading-bar"></div>
    </div>

    </div>
}