export default function Alert({ message, type="error" }) {
    const bgColor = {
        error: "bg-error",
        success: "bg-primary"
    }[type] || "bg-red-500";


    return (
        <div
            role="alert"
            className={`alert alert-vertical text-white lexend-deca-bold sm:alert-horizontal w-[350px] ml-5 ${bgColor}`}
        >           
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="h-6 w-6 shrink-0 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
            <span>{message}</span>
        </div>
    );
}

