import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";



const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
};
function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Showrating = (props) => {
    const [value, setValue] = useState(props.e.ratting);
    const [hover, setHover] = useState(-1);
    return (
        <div>
            <div className='border border-black w-[30rem] rounded-lg bg-slate-50 flex flex-col my-3 mx-2'>
                <h3 className="mx-4 my-2">{props.e.name}</h3>
                <Box
                    sx={{
                        marginLeft: 2,
                        width: 200,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Rating
                        name="name-feedback"
                        value={value}
                        // precision={0.5}
                        getLabelText={getLabelText}
                    //   onChange={(event, newValue) => {
                    //     setValue(newValue);
                    //   }}
                    //   onChangeActive={(event, newHover) => {
                    //     setHover(newHover);
                    //   }}
                    // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                </Box>
                <p className="mx-4">{props.e.message} </p>
            </div>
        </div>
    )
}

export default Showrating