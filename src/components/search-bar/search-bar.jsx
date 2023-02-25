import {useState} from "react";
import {useNavigate} from "react-router-dom"
import {Search} from "@mui/icons-material";
import {Paper,IconButton} from "@mui/material";
import {colors} from "../../constants/colors";

const SearchBar = () => {
    const [value,setValue] = useState("");
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        if(value){
            navigate(`/search/${value}`);
            setValue("")
        }
    }
    return (
        <Paper
            component='form'
            sx={{border:`1px solid ${colors.secondary}`,
                pl:2,
                boxShadow:'none',
                mr:5
            }}
            onSubmit={submitHandler}
        >
           <input
               type="text"
               placeholder='Search...'
               value={value}
               onChange={(e)=>setValue(e.target.value)}
               className="search-bar"
           />
            <IconButton type={'submit'}>
                <Search/>
            </IconButton>
        </Paper>
    )
}

export default SearchBar;