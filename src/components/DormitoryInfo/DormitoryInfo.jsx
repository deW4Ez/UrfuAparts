import plug from "../../assets/Plug.svg"


export default function DormitoryInfo({name, grade, contacts}){
    return <div className="flex flex-row my-10">
        <div className="max-w-[240px] h-[300px]">
            <img src={plug} alt="plug" />
        </div>
        <div className="flex flex-col w-full ml-[10px]">
            <div className="text-[26px] mb-[30px]">{grade}</div>
            <div className="mb-[30px] text-xl">
                {name}
            </div>
            <div>
            {contacts.length > 0 ?
            <div>
                <div>Контакты</div>
                <div>
                    {contacts.map((elem)=> <div>{elem}</div> )}
                </div>                
            </div>: <div></div>}
            </div>  
        </div>
    </div>
}
