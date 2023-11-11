import { useState } from "react";
import { BiCommand} from "react-icons/bi";
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
    const [input, setInput] = useState<string>("")
  return (
    <article className=" w-full md:max-w-sm flex gap-2 justify-center  items-center rounded-lg py-2 px-2 font-bold bg-gray-200 dark:bg-slate-800">
          <p className="text-xl">
          <LuSearch/>
          </p>
          <input
              value={input}
              className="flex-1 bg-transparent font-thin outline-none border-none "
              placeholder="search or type a command"
              onChange={(e)=>setInput(e.target.value)}
            type="text" />
      <p className="flex text-sm justify-center items-center gap-1 p-1 px-3 rounded-lg shadow-md bg-gray-50 dark:bg-slate-900">
        <BiCommand/>
        <strong>F</strong>
    </p>
    </article>
  )
}

export default SearchBar
