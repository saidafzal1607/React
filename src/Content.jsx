import React from "react";

const Content = () => {

    const handleNameChanged = () => {
        let names = ['Richard', 'Bob', 'Ali', 'Rymond', 'John'];
        let int = Math.floor(Math.random() * names.length);
        return names[int];
    }

    return (
        <main>
            <p>
                Hello {handleNameChanged()}!
            </p>
        </main>
    )
}

export default Content;