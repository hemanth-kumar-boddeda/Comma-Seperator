import React, { useState } from "react";

const CommaSept = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [seperator, setSeperator] = useState(",");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    
    const handleSeperatorChange = (value) => {
        setSeperator(value);
    };

    const handleMoveRight = () => {
        const words = input.split(/\s+/);
        const newText = words.join(seperator + " ");
        setOutput(newText);
    };

    const handleMoveLeft = () => {
        const words = output.split(seperator);
        const newText = words.join("\n");
        setInput(newText);
    };

    const handleCopyInput = () => {
        navigator.clipboard.writeText(input);
    };

    const handleCopyOutput = () => {
        navigator.clipboard.writeText(output);
    };

    return (
        <>
            <div className="input-box">
                <div className="textarea-container">
                    <textarea
                        name="input"
                        placeholder="Enter input text here"
                        value={input}
                        onChange={handleInputChange}
                        cols="30"
                        rows="10"
                    ></textarea>
                    <button className="copy-button" onClick={handleCopyInput}>Copy</button>
                </div>
                <div class="dropdown">
                    <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        {seperator}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button" onClick={() => handleSeperatorChange(";")}>
                            ;
                        </button>
                        <button class="dropdown-item" type="button" onClick={() => handleSeperatorChange("|")}>
                            |
                        </button>
                        <button class="dropdown-item" type="button" onClick={() => handleSeperatorChange(" ") }>
                            Spaces
                        </button>
                        <button class="dropdown-item" type="button" onClick={() => handleSeperatorChange("\n")}>
                            New Line
                        </button>
                    </div>
                    <div class="buttons">
                        <button class="btn btn-primary" onClick={handleMoveRight}>{">"}</button>
                        <button class="btn btn-primary" onClick={handleMoveLeft}>{"<"}</button>
                    </div>
                </div>
                <div className="textarea-container">
                    <textarea
                        name="output"
                        placeholder="Here will be the output"
                        onChange={(e) => setOutput(e.target.value)}
                        value={output}
                        cols="30"
                        rows="10"
                    ></textarea>
                    <button className="copy-button" onClick={handleCopyOutput}>Copy</button>
                </div>
            </div>
        </>
    );
};

export default CommaSept;
