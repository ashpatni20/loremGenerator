import { useState } from "react";
import { data } from "./loremData";

const LoremGenerator = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        if (amount < 1) amount = 1;
        if (amount > 8) amount = 8;
        setText(data.slice(0, amount));
    };

    return (
        <div className="text-center">
            <section>
                <h3 className="text-3xl font-bold p-10">TIRED OF BORING LOREM IPSUM?</h3>
                <form onSubmit={handleSubmit} className="">
                    <label htmlFor="paragraphCount" className="font-bold m-3 ">Paragraph:</label>
                    <input
                        type="number"
                        id="paragraphCount"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                    <button type="submit">Generate</button>
                </form>
                <article className="p-20 text-l font-bold">
                    {text.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </article>
            </section>
        </div>
    );
};

export default LoremGenerator;
