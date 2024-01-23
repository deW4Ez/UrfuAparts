export default function InputField({label}){
    return <div className="flex flex-col">
        <div>{label}</div>
        <input type="text" className="border-2 border-b-black w-[850px] bg-white"/>
    </div>
}