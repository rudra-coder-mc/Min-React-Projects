import { useCallback, useEffect } from "react";
import { useState } from "react";

const PassWordJan = () => {
  const [Length, setLength] = useState(8);
  const [NumAllowed, setNumAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const InputFild = (prop) => {
    const { type, label, value, onChange, ...otherProps } = prop.prop;
    // Destructure props for clarity
    const { id, defaultChecked } = otherProps;
    // console.log(value);

    return (
      <>
        {type === "range" ? (
          <>
            <input
              type="range"
              value={value}
              // onChange={handleChange}
              onChange={onChange}
              {...otherProps}
            />
            <label htmlFor={id}>{label}</label>
          </>
        ) : (
          <>
            <input
              id={id}
              type="checkbox"
              checked={defaultChecked}
              onChange={onChange}
              {...otherProps}
            />
            <button className="text-white bg-green-500">{label}</button>
          </>
        )}
      </>
    );
  };

  // const InputFild = ({ InputsValue }) => {
  //   let content;
  //   if (InputsValue.type === "range") {
  //     content = (
  //       <>
  //         <input {...InputsValue} onChange={InputsValue.onChange} />
  //         <label>{InputsValue.label}</label>
  //       </>
  //     );
  //   } else {
  //     content = (
  //       <>
  //         <input
  //           id={InputFild.id}
  //           {...InputsValue}
  //           onChange={() => InputsValue.onChange()}
  //         />
  //         <button className="text-white bg-green-500">
  //           {InputsValue.label}
  //         </button>
  //       </>
  //     );
  //   }
  //   return <>{content}</>;
  // };
  const checkBoxInputs = [
    {
      type: "range",
      id: 1,
      name: "range",
      label: `Length ${Length}`,
      value: Length,
      min: 6,
      max: 100,
      onChange: (e) => setLength(() => e.target.value),
    },
    {
      type: "checkbox",
      id: "numberInput",
      className: "",
      name: "NumAllowed",
      label: "NumAllowed",
      defaultChecked: NumAllowed,
      onChange: () => {
        setNumAllowed((prev) => !prev);
      },
    },
    {
      type: "checkbox",
      id: "characterInput",
      className: "",
      name: "CharAllowed",
      label: "CharAllowed",
      defaultChecked: CharAllowed,
      onChange: () => {
        setCharAllowed((prev) => !prev);
      },
    },
  ];
  const PasswordJenrater = useCallback(() => {
    let password = "";
    let char = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (NumAllowed) char += "1234567890";
    if (CharAllowed) char += "!@#$%^&*()_+{}:?";

    for (let i = 0; i < Length; i++) {
      let ind = Math.floor(Math.random() * char.length + 1);

      password += char[ind];
    }
    setPassword(password);
  }, [Length, NumAllowed, CharAllowed, setPassword]);

  useEffect(() => {
    PasswordJenrater();
  }, [Length, NumAllowed, CharAllowed, PasswordJenrater]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4 " id="Inpur">
        <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3"
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
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
          {/* <input
            type="checkbox"
            defaultChecked={NumAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label> */}
        </div>

        <div className="flex items-center gap-x-1">
          {checkBoxInputs.map((Inputs) => (
            <InputFild key={Inputs.id} prop={Inputs} />
          ))}
          {/* <input
            type="checkbox"
            defaultChecked={CharAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          /> */}
          {/* <label htmlFor="characterInput">Characters</label> */}
        </div>
      </div>
    </div>
  );
};
export default PassWordJan;

// const CheckBox = ({ inputsValue }) => {
//
//   return (
//     <>
//       <input
//         className="ml-2"
//         id={inputsValue.id}
//         type="checkbox"
//         {...inputsValue}
//       />

//       <label className="text-white" htmlFor={inputsValue.id}>
//         {inputsValue.label}
//       </label>
//     </>
//   );
// };
