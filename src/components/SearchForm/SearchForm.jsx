import { Search } from "@mui/icons-material";

export default function SearchForm(){
    return <div className="flex flex-row">
        <Search/>
        <input className="h-max bg-white border-b-gray-400 " type="text" />
    </div>
}