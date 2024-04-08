import { useCallback, useEffect, useState, useRef } from "react";

const PassWordJan = () => {
  const [Length, setLength] = useState(8);
  const [NumAllowed, setNumAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const PasswordRef = useRef(null);

  const PasswordJenrater = useCallback(() => {
    let passW = "";
    let char = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (NumAllowed) char += "1234567890";
    if (CharAllowed) char += "!@#$%^&*()_+{}:?";

    for (let i = 1; i <= Length; i++) {
      let ind = Math.floor(Math.random() * char.length + 1);

      // password += char[ind];
      passW += char.charAt(ind);
    }
    setPassword(passW);
  }, [Length, NumAllowed, CharAllowed, setPassword]);

  useEffect(() => {
    PasswordJenrater();
  }, [Length, NumAllowed, CharAllowed, PasswordJenrater]);

  const CopyPassword = useCallback(() => {
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <div className=" max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4 " id="Inpur">
        <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3"
          ref={PasswordRef}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900"
          onClick={CopyPassword}
        >
          copy
        </button>
      </div>
      <div id="Chantrol" className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            className=""
            min={6}
            max={100}
            value={Length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>{Length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={NumAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={CharAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
};
export default PassWordJan;
